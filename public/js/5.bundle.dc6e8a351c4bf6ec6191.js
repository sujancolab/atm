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
      Custodians: [],
      Complaints: {},
      Statuses: [],
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
    formatDate(datetime) {
      const date = new Date(datetime);
      return date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    },
    formatLagTime(lagTime) {
      if (lagTime) {
        const parts = lagTime.split(":");
        return `${parts[0]}H:${parts[1]}M`;
      } else {
        return 'N/A';
      }
    },
    getStatusClass(workStatus) {
      switch (workStatus) {
        case 'Pending':
          return 'pending';
        case 'Processing':
          return 'processing';
        case 'Completed':
          return 'completed';
        default:
          return '';
        // Default or empty class
      }
    },
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
      axios.get('/api/complaint/list/' + this.$route.params.id, {
        params: this.search
      }).then(data => {
        console.log("data====", data.data.data);
        this.Complaints = data.data.data.complaints;
        this.Custodians = data.data.data.custodians;
        this.Statuses = data.data.data.status_list;
        this.initializeTimers();
        cloaderd.hide();
      });
    },
    loadTickets() {
      let cloaderd = this.$loading.show();
      this.search = {};
      axios.get("/api/complaint/list/" + this.$route.params.id, {
        params: this.search
      }).then(data => {
        console.log("data====>", data);
        this.Complaints = data.data.data.complaints;
        this.Custodians = data.data.data.custodians;
        this.Statuses = data.data.data.status_list;
        this.initializeTimers();
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
    },
    initializeTimers() {
      if (this.Complaints && this.Complaints.data && this.Complaints.data.length > 0) {
        this.Complaints.data.forEach((timer, index) => {
          console.log("timer", timer);
          if (timer.work_status === 'Completed') {
            timer.timer_display = 'N/A';
          } else {
            this.calculateRemainingTime(timer, index);
          }
        });
        console.log("this.Complaints.data", this.Complaints.data);
      }
    },
    calculateRemainingTime(timer, index) {
      // Convert created_at to seconds
      const createdDate = new Date(timer.created_at);
      const createdSeconds = createdDate.getTime() / 1000;

      // Get current time in seconds
      const currentDate = new Date();
      const currentSeconds = currentDate.getTime() / 1000;

      // Calculate the difference in seconds
      const diffSeconds = currentSeconds - createdSeconds;

      // Convert tag_time (HH:MM:SS) to seconds
      const tagTime = timer.tag_time.split(':');
      const tagSeconds = +tagTime[0] * 3600 + +tagTime[1] * 60 + +tagTime[2];

      // Remaining time in seconds
      let remainingSeconds = tagSeconds - diffSeconds;
      if (remainingSeconds >= 0) {
        // Countdown if the time is still remaining
        this.startCountdown(timer, remainingSeconds, index);
      } else {
        // Count up if the time has passed
        remainingSeconds = Math.abs(remainingSeconds);
        this.startCountUp(timer, remainingSeconds, index);
      }
    },
    startCountdown(timer, seconds, index) {
      const interval = setInterval(() => {
        seconds--;
        timer.timer_display = this.formatTime(seconds);
        if (seconds <= 0) {
          clearInterval(interval);
          timer.timer_display = 'Countdown finished';
        }
      }, 1000);
    },
    startCountUp(timer, seconds, index) {
      const interval = setInterval(() => {
        seconds++;
        timer.timer_display = this.formatTime(seconds);
      }, 1000);
    },
    formatTime(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor(seconds % 3600 / 60);
      const secs = Math.floor(seconds % 60);
      return `${this.padTime(hours)}:${this.padTime(minutes)}:${this.padTime(secs)}`;
    },
    padTime(time) {
      return time < 10 ? `0${time}` : time;
    }
  },
  created() {
    this.loadTickets();
  },
  mounted() {
    // Initial API call when the component is mounted
    this.loadTickets();
  },
  beforeCreate() {
    axios.get("/api/complaint/list/" + this.$route.params.id).then(response => {
      console.log("data====>", response);
      this.Complaints = response.data.data.complaints;
      this.Custodians = response.data.data.custodians;
      this.Statuses = response.data.data.status_list;
      this.initializeTimers();
    }).catch(() => console.warn('Oh. Something went wrong'));
  },
  watch: {
    $route(to, from) {
      this.loadTickets();
    },
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
exports.push([module.i, "\n.rmore {\n    color: blue;\n}\n.pending {\n    color: orange;\n}\n.processing {\n    color: blue;\n}\n.completed {\n    color: green;\n}\n", "", {"version":3,"sources":["C:/Users/sujan/Desktop/Work/project freelance/Sankha/atm_proj/atm/resources/js/components/resources/js/components/ComplaintList.vue"],"names":[],"mappings":";AAmnBA;IACA,YAAA;CACA;AAEA;IACA,cAAA;CACA;AAEA;IACA,YAAA;CACA;AAEA;IACA,aAAA;CACA","file":"ComplaintList.vue","sourcesContent":["<template>\n    <section class=\"content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n\n                <div class=\"col-12\">\n\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            <h3 class=\"card-title\">Master Report</h3>\n                            <div class=\"card-tools\">\n                                <download-excel class=\"btn btn-sm btn-primary\" :fetch=\"export_csv\" :fields=\"json_fields\"\n                                    :before-generate=\"startDownload\" :before-finish=\"finishDownload\"\n                                    worksheet=\"My Worksheet\" type=\"csv\" name=\"master_report.csv\"\n                                    v-if=\"$gate.hasPermission('can_download_master_report')\">\n                                    Export CSV</span>\n                                </download-excel>\n                                <button class=\"btn btn-sm btn-blue\" @click=\"openSideModal\"><i\n                                        class=\"fa fa-sliders-h mr-2\" aria-hidden=\"true\"></i> Filter</button>\n\n                            </div>\n                        </div>\n\n                        <SidebarModal ref=\"sidebarModal\">\n                            <!-- Content of the sidebar modal goes here -->\n                            <h3><i class=\"fa fa-sliders-h mr-2\" aria-hidden=\"true\" style=\"font-size: 22px;\"></i> Filter\n                            </h3>\n                            <hr>\n                            <form autocomplete=\"off\" @submit.prevent=\"getResults()\">\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">FAR No</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"name\" :get-option-label=\"getLabel\"\n                                            :reduce=\"(option) => option.id\" :options=\"search_machines\"\n                                            placeholder=\"Enter machines ...\" v-model=\"search.machine_id\"\n                                            name=\"machine_id\">\n                                        </v-select>\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">Search Ticket</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <input type=\"text\" placeholder=\"Enter ticket ...\" v-model=\"search.ticket\"\n                                            name=\"ticket\" class=\"form-control\">\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">Select Site</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"site_name\" :reduce=\"(option) => option.id\"\n                                            :options=\"search_sites\" placeholder=\"Select Site...\"\n                                            v-model=\"search.site_id\" name=\"site_id\">\n                                        </v-select>\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">Select Status</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"site_name\" :options=\"['Open', 'Closed']\"\n                                            placeholder=\"Select Status...\" v-model=\"search.status\" name=\"status\">\n                                        </v-select>\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">Created by</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"name\" :options=\"created_users\" :reduce=\"(option) => option.id\"\n                                            placeholder=\"Created by...\" v-model=\"search.created_by\" name=\"created_by\">\n                                        </v-select>\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">Ticket Type</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"name\"\n                                            :options=\"['Periodic Maintenance', 'Breakdown Maintenance']\"\n                                            placeholder=\"Ticket Type...\" v-model=\"search.ticket_type\"\n                                            name=\"ticket_type\">\n                                        </v-select>\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">From Date</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.created_from\"\n                                            input-class=\"form-control\" placeholder=\"Date\" />\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">To Date</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.created_to\"\n                                            input-class=\"form-control\" placeholder=\"Date\" />\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">TAT From</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <input type=\"number\" placeholder=\"TAT From ...\" v-model=\"search.tat_from\"\n                                            class=\"form-control\">\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">TAT To</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <input type=\"number\" placeholder=\"TAT To ...\" v-model=\"search.tat_to\"\n                                            class=\"form-control\">\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">Complaint nature</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"site_name\" :options=\"['Major', 'Minor']\"\n                                            placeholder=\"Select Complaint Nature...\" v-model=\"search.complaint_nature\"\n                                            name=\"complaint_nature\">\n                                        </v-select>\n                                    </div>\n                                </div>\n\n\n\n\n\n                                <div class=\"row\">\n                                    <div class=\"col-6 mb-2 pr-1\">\n                                        <button type=\"submit\" class=\"btn btn-success btn-block\">Search</button>\n                                    </div>\n                                    <div class=\"col-6 mb-2 pl-1\">\n                                        <button type=\"button\" class=\"btn btn-danger btn-block\"\n                                            @click=\"reset_filter()\">Reset</button>\n                                    </div>\n                                </div>\n                            </form>\n                        </SidebarModal>\n\n                        <!-- /.card-header -->\n                        <div class=\"card-body ticketLstTbl table-responsive p-0\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th>#</th>\n                                        <th>ATM ID</th>\n                                        <th>Docket No</th>\n                                        <th>Date</th>\n                                        <!-- <th class=\"truncate\" title=\"Equipment Description\">Equipment Description</th> -->\n                                        <th>Custodian</th>\n                                        <th>Tag Time</th>\n                                        <th>Lag Time</th>\n                                        <th>Countdown(Days hh:mm:ss)</th>\n                                        <!-- <th class=\"truncate\" title=\"Status During Complain\">Status During Complain</th> -->\n                                        <th>Status</th>\n\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr v-for=\"(complaint, x) in Complaints.data\" :key=\"complaint.id\"\n                                        :data-created=\"complaint.created_at\" :data-tag=\"complaint.tag_time\"\n                                        :data-stat=\"complaint.work_status\">\n                                        <td>\n                                            <div class=\"btn-group\">\n                                                <button type=\"button\" class=\"btn btn-primary btn-sm btn-toggle-custom\"\n                                                    @click=\"editModal(user)\">Edit</button>\n                                                <button type=\"button\"\n                                                    class=\"btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split\"\n                                                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                    <span class=\"sr-only\">Toggle Dropdown</span>\n                                                </button>\n                                                <div class=\"dropdown-menu\">\n                                                    <a href=\"javascript:void(0);\" @click=\"deleteUser(user.id)\"\n                                                        class=\"dropdown-item\">\n                                                        Delete\n                                                    </a>\n                                                    <router-link :to=\"'/complaint-details/' + complaint.id\"\n                                                        class=\"nav-link\">\n\n                                                        <p>\n                                                            Details\n                                                        </p>\n                                                    </router-link>\n                                                </div>\n                                            </div>\n                                        </td>\n                                        <td style=\"padding-bottom: 10px !important;\">{{ complaint.atm_id }}</td>\n                                        <td class=\"truncate\" :title=\"complaint.docket_no\" style=\"max-width: 150px;\">{{\n                                            complaint.docket_no }}</td>\n                                        <td class=\"truncate\">{{ formatDate(complaint.created_at) }}</td>\n                                        <td>{{ complaint.custname }}</td>\n                                        <td>{{ complaint.tag_time }}</td>\n                                        <td :style=\"{ color: complaint.lag_time ? 'Red' : 'Green' }\"> {{\n                                            formatLagTime(complaint.lag_time) }}</td>\n\n                                        <!-- <td @click=\"view_site_details(ticket.machine)\">{{ ticket.far_no }}</td> -->\n                                        <td>\n                                            <span>{{ complaint.work_status }}-{{ complaint.timer_display }}</spam>\n                                            <span v-if=\"complaint.work_status === 'Completed'\">N/A</span>\n                                            <span v-else>{{ complaint.timer_display }}</span>\n                                        </td>\n                                        <td>\n                                            <span :class=\"getStatusClass(complaint.work_status)\">{{\n                                                complaint.work_status }}</span>\n                                        </td>\n\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <!-- /.card-body -->\n                        <div class=\"card-footer\">\n                            <pagination :data=\"Complaints\" :limit=\"10\" @pagination-change-page=\"getResults\">\n                            </pagination>\n                        </div>\n                    </div>\n                    <!-- /.card -->\n                </div>\n            </div>\n\n\n\n        </div>\n\n\n        <!-- <MachinePop id=\"MachineSiteModal3\" :machine=\"pmModalData\" /> -->\n    </section>\n</template>\n\n<script>\n//import VueReadMoreSmooth from \"vue-read-more-smooth\";\nimport MultiRangeSlider from \"multi-range-slider-vue\";\nimport SidebarModal from './SideBarModal.vue';\nexport default {\n    name: \"MasterReport\",\n    components: {\n        VueReadMoreSmooth: () => import('vue-read-more-smooth'),\n        MultiRangeSlider, SidebarModal,\n        MachinePop: () => import('./MachineFarPop.vue'),\n    },\n    data() {\n        return {\n            stageMore: [],\n            additionalMore: [],\n            problemsMore: [],\n            rcaMore: [],\n            pmModalData: '',\n            created_users: [],\n            search_machines: [],\n            search_sites: [],\n            search: {\n                page: 1,\n                machine_id: '',\n                site_id: '',\n                created_by: '',\n                created_from: '',\n                created_to: '',\n                tat_from: '',\n                tat_to: '',\n                complaint_nature: '',\n                ticket_type: '',\n                ticket: ''\n            },\n            categories: [],\n            sub_categories: [],\n            sites: [],\n            selected_machine: '',\n            users: [],\n            machines: [],\n            Custodians: [],\n            Complaints: {},\n            Statuses: [],\n            sl: 1,\n            json_fields: {\n                \"Sl No\": {\n                    callback: () => {\n                        return this.sl++;\n                    },\n                },\n                'Site name': 'site_name',\n                'Operator name': 'operator_name',\n                'Equipment Description': 'machine_name',\n                'FAR No': 'far_no',\n                'Complaint No': 'ticket_no',\n                'Complaint date': \"created_at\",\n                'Complaint Raised By': 'created_by_name',\n                'Complaint Nature': 'complaint_nature',\n                'Status During Complaint': 'status_during_complaint',\n                'Problem description': 'problem_description',\n                'Additional Problem': {\n                    field: \"problems\",\n                    callback: (problem) => {\n                        let ret = ''\n                        if (problem) {\n                            ret = problem.map(value => value.problem).join(\"\\r\\n\");\n                        }\n                        return ret;\n                    },\n                },\n                \"Current Status\": {\n                    field: \"status\",\n                    callback: (status) => {\n                        return status.toLowerCase() == 'created by user' ? 'Open' : status;\n                    },\n                },\n                \"Current Stage\": {\n                    field: \"last_stage\",\n                    callback: (value) => {\n                        return value ? value.description : '-';\n                    },\n                },\n                \"Status Post Resolution\": 'machine_status',\n                'Expected Resolution date': 'likely_date',\n                'Revised Expected date': 'reversion_date',\n                'Reason for date Revision': 'reversion_reason',\n                'Actual Resolve Date': 'actual_date',\n                'TAT': 'tat',\n                'Estimated Cost': 'estimated_cost',\n                'Actual Cost': 'actual_cost',\n                'Production Loss': 'production_loss_amount',\n                'RCA': 'rca'\n            },\n            json_meta: [\n                [{\n                    key: \"charset\",\n                    value: \"utf-8\",\n                },],\n            ],\n            sl: 0,\n        }\n    },\n    methods: {\n        formatDate(datetime) {\n            const date = new Date(datetime);\n            return date.toLocaleString('en-GB', {\n                day: '2-digit',\n                month: '2-digit',\n                year: 'numeric',\n                hour: '2-digit',\n                minute: '2-digit',\n                hour12: true\n            });\n        },\n        formatLagTime(lagTime) {\n            if (lagTime) {\n                const parts = lagTime.split(\":\");\n                return `${parts[0]}H:${parts[1]}M`;\n            } else {\n                return 'N/A';\n            }\n        },\n        getStatusClass(workStatus) {\n            switch (workStatus) {\n                case 'Pending':\n                    return 'pending';\n                case 'Processing':\n                    return 'processing';\n                case 'Completed':\n                    return 'completed';\n                default:\n                    return ''; // Default or empty class\n            }\n        },\n        openSideModal() {\n            this.$refs.sidebarModal.openSideModal();\n        },\n        closeSideModal() {\n            this.$refs.sidebarModal.closeSideModal();\n        },\n        view_site_details(data) {\n            this.pmModalData = data\n            $('#MachineSiteModal3').modal('show');\n        },\n        reset_filter() {\n            this.search = {\n                page: 1,\n                machine_id: '',\n                site_id: '',\n                created_by: '',\n                created_from: '',\n                created_to: '',\n                tat_from: \"\",\n                tat_to: \"\",\n                complaint_nature: '',\n                ticket_type: '',\n                ticket: ''\n            }\n            this.getResults()\n        },\n        UpdateValues(e) {\n            this.search.tat_from = e.minValue;\n            this.search.tat_to = e.maxValue;\n        },\n        // excel\n        async export_csv() {\n            const response = await axios.get('api/ticket/export', {\n                params: this.search\n            });\n            // const response = await axios.get('api/ticket/export');\n            return response.data.data;\n        },\n        startDownload() {\n            this.sl = 1;\n            Swal.fire({\n                title: 'Please Wait !',\n                html: 'Data populating', // add html attribute if you want or remove\n                allowOutsideClick: false,\n                onBeforeOpen: () => {\n                    Swal.showLoading()\n                },\n            });\n        },\n        finishDownload() {\n            Swal.close()\n        },\n\n        getLabel(val) {\n            if (typeof val === 'object') {\n                return val.far_no + ' - ' + val.name;\n            } else {\n                return val;\n            }\n        },\n        getResults(page = 1) {\n            let cloaderd = this.$loading.show();\n            this.search.page = page\n            axios.get('/api/complaint/list/' + this.$route.params.id, {\n                params: this.search\n            }).then((data) => {\n                console.log(\"data====\", data.data.data);\n\n                this.Complaints = data.data.data.complaints;\n\n                this.Custodians = data.data.data.custodians;\n                this.Statuses = data.data.data.status_list;\n                this.initializeTimers();\n                cloaderd.hide();\n            })\n        },\n        loadTickets() {\n            let cloaderd = this.$loading.show();\n            this.search = {};\n            axios.get(\"/api/complaint/list/\" + this.$route.params.id, {\n                params: this.search\n            }).then((data) => {\n                console.log(\"data====>\", data);\n\n                this.Complaints = data.data.data.complaints;\n\n                this.Custodians = data.data.data.custodians;\n                this.Statuses = data.data.data.status_list;\n                this.initializeTimers();\n                cloaderd.hide();\n            })\n        },\n        read_more(x, p = '') {\n            if (p) {\n                if (p == 's') {\n                    let a = this.stageMore[x] ? false : true\n                    this.$set(this.stageMore, x, a);\n                } else if (p == 'rc') {\n                    let a = this.rcaMore[x] ? false : true\n                    this.$set(this.rcaMore, x, a);\n                } else {\n                    let a = this.problemsMore[x] ? false : true\n                    this.$set(this.problemsMore, x, a);\n                }\n            } else {\n                let a = this.additionalMore[x] ? false : true\n                this.$set(this.additionalMore, x, a);\n            }\n        },\n        initializeTimers() {\n            if (this.Complaints && this.Complaints.data && this.Complaints.data.length > 0) {\n                this.Complaints.data.forEach((timer, index) => {\n                    console.log(\"timer\",timer);\n\n                    if (timer.work_status === 'Completed') {\n                        timer.timer_display = 'N/A';\n                    } else {\n                        this.calculateRemainingTime(timer, index);\n                    }\n                });\n\n                console.log(\"this.Complaints.data\",this.Complaints.data);\n\n            }\n        },\n        calculateRemainingTime(timer, index) {\n            // Convert created_at to seconds\n            const createdDate = new Date(timer.created_at);\n            const createdSeconds = createdDate.getTime() / 1000;\n\n            // Get current time in seconds\n            const currentDate = new Date();\n            const currentSeconds = currentDate.getTime() / 1000;\n\n            // Calculate the difference in seconds\n            const diffSeconds = currentSeconds - createdSeconds;\n\n            // Convert tag_time (HH:MM:SS) to seconds\n            const tagTime = timer.tag_time.split(':');\n            const tagSeconds = (+tagTime[0]) * 3600 + (+tagTime[1]) * 60 + (+tagTime[2]);\n\n            // Remaining time in seconds\n            let remainingSeconds = tagSeconds - diffSeconds;\n\n            if (remainingSeconds >= 0) {\n                // Countdown if the time is still remaining\n                this.startCountdown(timer, remainingSeconds, index);\n            } else {\n                // Count up if the time has passed\n                remainingSeconds = Math.abs(remainingSeconds);\n                this.startCountUp(timer, remainingSeconds, index);\n            }\n        },\n        startCountdown(timer, seconds, index) {\n            const interval = setInterval(() => {\n                seconds--;\n                timer.timer_display = this.formatTime(seconds);\n\n                if (seconds <= 0) {\n                    clearInterval(interval);\n                    timer.timer_display = 'Countdown finished';\n                }\n            }, 1000);\n        },\n        startCountUp(timer, seconds, index) {\n            const interval = setInterval(() => {\n                seconds++;\n                timer.timer_display = this.formatTime(seconds);\n            }, 1000);\n        },\n        formatTime(seconds) {\n            const hours = Math.floor(seconds / 3600);\n            const minutes = Math.floor((seconds % 3600) / 60);\n            const secs = Math.floor(seconds % 60);\n            return `${this.padTime(hours)}:${this.padTime(minutes)}:${this.padTime(secs)}`;\n        },\n        padTime(time) {\n            return time < 10 ? `0${time}` : time;\n        }\n\n    },\n    created() {\n        this.loadTickets();\n    },\n    mounted() {\n        // Initial API call when the component is mounted\n        this.loadTickets();\n    },\n    beforeCreate() {\n\n        axios.get(\"/api/complaint/list/\" + this.$route.params.id).then(response => {\n            console.log(\"data====>\", response);\n\n            this.Complaints = response.data.data.complaints;\n\n            this.Custodians = response.data.data.custodians;\n            this.Statuses = response.data.data.status_list;\n            this.initializeTimers();\n        }).catch(() => console.warn('Oh. Something went wrong'));\n    },\n    watch: {\n        $route(to, from) {\n            this.loadTickets();\n        },\n        async 'form.sub_category_id'(n, o) {\n            if (n) {\n                this.get_machine()\n            }\n        },\n        async 'form.site_id'(n, o) {\n            if (n) {\n                this.get_machine()\n            }\n        },\n\n        'form.category_id': {\n            handler: function (n, o) {\n\n                if (n) {\n                    axios.get(\"api/complaint/list/1/\" + n)\n                        .then((res) => {\n                            this.sub_categories = res.data.data;\n                        })\n                    this.get_machine()\n                }\n            },\n            deep: true,\n            initial: true\n        },\n\n    },\n}\n\n</script>\n<style>\n.rmore {\n    color: blue;\n}\n\n.pending {\n    color: orange;\n}\n\n.processing {\n    color: blue;\n}\n\n.completed {\n    color: green;\n}\n</style>\n"],"sourceRoot":""}]);

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
var render = function () {}
var staticRenderFns = []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50TGlzdC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1NpZGVCYXJNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvU2lkZUJhck1vZGFsLnZ1ZT80ZjdkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludExpc3QudnVlP2RiNDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvU2lkZUJhck1vZGFsLnZ1ZT8xODgxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludExpc3QudnVlPzIzZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvU2lkZUJhck1vZGFsLnZ1ZT9jYmIxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludExpc3QudnVlPzRmOWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50TGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvU2lkZUJhck1vZGFsLnZ1ZSJdLCJuYW1lcyI6WyJuYW1lIiwiY29tcG9uZW50cyIsIlZ1ZVJlYWRNb3JlU21vb3RoIiwiTXVsdGlSYW5nZVNsaWRlciIsIlNpZGViYXJNb2RhbCIsIk1hY2hpbmVQb3AiLCJkYXRhIiwic3RhZ2VNb3JlIiwiYWRkaXRpb25hbE1vcmUiLCJwcm9ibGVtc01vcmUiLCJyY2FNb3JlIiwicG1Nb2RhbERhdGEiLCJjcmVhdGVkX3VzZXJzIiwic2VhcmNoX21hY2hpbmVzIiwic2VhcmNoX3NpdGVzIiwic2VhcmNoIiwicGFnZSIsIm1hY2hpbmVfaWQiLCJzaXRlX2lkIiwiY3JlYXRlZF9ieSIsImNyZWF0ZWRfZnJvbSIsImNyZWF0ZWRfdG8iLCJ0YXRfZnJvbSIsInRhdF90byIsImNvbXBsYWludF9uYXR1cmUiLCJ0aWNrZXRfdHlwZSIsInRpY2tldCIsImNhdGVnb3JpZXMiLCJzdWJfY2F0ZWdvcmllcyIsInNpdGVzIiwic2VsZWN0ZWRfbWFjaGluZSIsInVzZXJzIiwibWFjaGluZXMiLCJDdXN0b2RpYW5zIiwiQ29tcGxhaW50cyIsIlN0YXR1c2VzIiwic2wiLCJqc29uX2ZpZWxkcyIsImNhbGxiYWNrIiwiZmllbGQiLCJyZXQiLCJqc29uX21ldGEiLCJrZXkiLCJ2YWx1ZSIsIm1ldGhvZHMiLCJmb3JtYXREYXRlIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiIsImZvcm1hdExhZ1RpbWUiLCJnZXRTdGF0dXNDbGFzcyIsIm9wZW5TaWRlTW9kYWwiLCJjbG9zZVNpZGVNb2RhbCIsInZpZXdfc2l0ZV9kZXRhaWxzIiwiJCIsInJlc2V0X2ZpbHRlciIsIlVwZGF0ZVZhbHVlcyIsInBhcmFtcyIsInN0YXJ0RG93bmxvYWQiLCJTd2FsIiwidGl0bGUiLCJodG1sIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJvbkJlZm9yZU9wZW4iLCJmaW5pc2hEb3dubG9hZCIsImdldExhYmVsIiwiZ2V0UmVzdWx0cyIsImF4aW9zIiwiY29uc29sZSIsImNsb2FkZXJkIiwibG9hZFRpY2tldHMiLCJyZWFkX21vcmUiLCJpbml0aWFsaXplVGltZXJzIiwidGltZXIiLCJjYWxjdWxhdGVSZW1haW5pbmdUaW1lIiwicmVtYWluaW5nU2Vjb25kcyIsInN0YXJ0Q291bnRkb3duIiwic2Vjb25kcyIsImNsZWFySW50ZXJ2YWwiLCJzdGFydENvdW50VXAiLCJmb3JtYXRUaW1lIiwicGFkVGltZSIsImNyZWF0ZWQiLCJtb3VudGVkIiwiYmVmb3JlQ3JlYXRlIiwid2F0Y2giLCIkcm91dGUiLCJoYW5kbGVyIiwidGhlbiIsImRlZXAiLCJpbml0aWFsIiwiaXNPcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1RQTtBQUNzRDtBQUNSO0FBQy9CO0VBQ2ZBO0VBQ0FDO0lBQ0FDO0lBQ0FDO0lBQUFDO0lBQ0FDO0VBQ0E7RUFDQUM7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztNQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO1FBQ0E7VUFDQUM7WUFDQTtVQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1VBQ0FDO1VBQ0FEO1lBQ0E7WUFDQTtjQUNBRTtZQUNBO1lBQ0E7VUFDQTtRQUNBO1FBQ0E7VUFDQUQ7VUFDQUQ7WUFDQTtVQUNBO1FBQ0E7UUFDQTtVQUNBQztVQUNBRDtZQUNBO1VBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQUcsWUFDQTtRQUNBQztRQUNBQztNQUNBLEdBQ0E7TUFDQVA7SUFDQTtFQUNBO0VBQ0FRO0lBQ0FDO01BQ0E7TUFDQTtRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtRQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO1FBQ0E7VUFDQTtRQUNBO1VBQ0E7UUFDQTtVQUNBO1FBQ0E7VUFDQTtRQUFBO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQUM7SUFDQTtJQUNBQztNQUNBO1FBQ0ExQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBaUM7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBO01BQ0E7UUFDQUM7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQUE7UUFDQUM7UUFDQUM7VUFDQUo7UUFDQTtNQUNBO0lBQ0E7SUFDQUs7TUFDQUw7SUFDQTtJQUVBTTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQUM7UUFDQVY7TUFDQTtRQUNBVztRQUVBO1FBRUE7UUFDQTtRQUNBO1FBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQUg7UUFDQVY7TUFDQTtRQUNBVztRQUVBO1FBRUE7UUFDQTtRQUNBO1FBQ0FDO01BQ0E7SUFDQTtJQUNBRTtNQUNBO1FBQ0E7VUFDQTtVQUNBO1FBQ0E7VUFDQTtVQUNBO1FBQ0E7VUFDQTtVQUNBO1FBQ0E7TUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7UUFDQTtVQUNBSjtVQUVBO1lBQ0FLO1VBQ0E7WUFDQTtVQUNBO1FBQ0E7UUFFQUw7TUFFQTtJQUNBO0lBQ0FNO01BQ0E7TUFDQTtNQUNBOztNQUVBO01BQ0E7TUFDQTs7TUFFQTtNQUNBOztNQUVBO01BQ0E7TUFDQTs7TUFFQTtNQUNBO01BRUE7UUFDQTtRQUNBO01BQ0E7UUFDQTtRQUNBQztRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO1FBQ0FDO1FBQ0FKO1FBRUE7VUFDQUs7VUFDQUw7UUFDQTtNQUNBO0lBQ0E7SUFDQU07TUFDQTtRQUNBRjtRQUNBSjtNQUNBO0lBQ0E7SUFDQU87TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtFQUVBO0VBQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUVBakI7TUFDQUM7TUFFQTtNQUVBO01BQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQWlCO0lBQ0FDO01BQ0E7SUFDQTtJQUNBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUE7TUFDQUM7UUFFQTtVQUNBcEIsdUNBQ0FxQjtZQUNBO1VBQ0E7VUFDQTtRQUNBO01BQ0E7TUFDQUM7TUFDQUM7SUFDQTtFQUVBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25tQkQ7RUFDQXZGO0lBQ0E7TUFDQXdGO0lBQ0E7RUFDQTtFQUNBbEQ7SUFDQVU7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtFQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7QUMxQkEsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyw2QkFBNkIsdUJBQXVCLGdCQUFnQiw0QkFBNEIsZ0JBQWdCLGlCQUFpQixzQkFBc0Isd0JBQXdCLEdBQUcsbUNBQW1DLHlCQUF5QixvQkFBb0IsV0FBVyxjQUFjLGFBQWEsaUJBQWlCLGtEQUFrRCxpREFBaUQsb0NBQW9DLGdDQUFnQyxrQkFBa0IscUJBQXFCLEdBQUcsMENBQTBDLDZCQUE2QixHQUFHLHFDQUFxQyxpQkFBaUIscUJBQXFCLEdBQUcscUNBQXFDLHVCQUF1QixXQUFXLGNBQWMsWUFBWSxhQUFhLHlDQUF5QyxHQUFHLFVBQVUscUxBQXFMLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLHFCQUFxQixXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVywwR0FBMEcsbUJBQW1CLDRLQUE0SyxhQUFhLGdOQUFnTixjQUFjLGdCQUFnQixrQ0FBa0MsT0FBTyxpQkFBaUIsMkJBQTJCLDZCQUE2QixTQUFTLDJCQUEyQiw4QkFBOEIsU0FBUyxRQUFRLE9BQU8sOENBQThDLHlCQUF5QixrQkFBa0IsOEJBQThCLGtCQUFrQixtQkFBbUIsd0JBQXdCLDBCQUEwQixLQUFLLG9CQUFvQiwyQkFBMkIsc0JBQXNCLGFBQWEsZ0JBQWdCLGVBQWUsbUJBQW1CLG9EQUFvRCxtREFBbUQsc0NBQXNDLGtDQUFrQyxvQkFBb0IsdUJBQXVCLEtBQUssK0JBQStCLCtCQUErQixLQUFLLDBCQUEwQixtQkFBbUIsdUJBQXVCLEtBQUssMEJBQTBCLHlCQUF5QixhQUFhLGdCQUFnQixjQUFjLGVBQWUsMkNBQTJDLEtBQUssK0JBQStCOztBQUVoK0Y7Ozs7Ozs7Ozs7OztBQ1BBLDJCQUEyQixtQkFBTyxDQUFDLG1HQUFrRDtBQUNyRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsYUFBYSxrQkFBa0IsR0FBRyxZQUFZLG9CQUFvQixHQUFHLGVBQWUsa0JBQWtCLEdBQUcsY0FBYyxtQkFBbUIsR0FBRyxVQUFVLHNMQUFzTCxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsMCtDQUEwK0MsdTRWQUF1NFYsZzZCQUFnNkIsS0FBSyxvQkFBb0IsOEhBQThILEtBQUssb0VBQW9FLHdFQUF3RSxvQ0FBb0MscURBQXFELHNCQUFzQixxREFBcUQsc0JBQXNCLDZEQUE2RCw4Q0FBOEMsTUFBTSxrRkFBa0YseUdBQXlHLGlCQUFpQiw2R0FBNkcseUJBQXlCLEdBQUcsMkJBQTJCLGlMQUFpTCwyQkFBMkIsMk1BQTJNLDBFQUEwRSxtekJBQW16QiwwREFBMEQsZ0RBQWdELGtCQUFrQixnREFBZ0QsNEtBQTRLLGVBQWUsa0JBQWtCLDRRQUE0USw4V0FBOFcsc09BQXNPLDRFQUE0RSw4QkFBOEIsdUNBQXVDLDJDQUEyQyx1QkFBdUIsb0JBQW9CLGtrQkFBa2tCLHdGQUF3Riw4RUFBOEUseUZBQXlGLDJCQUEyQixxQ0FBcUMsdUJBQXVCLG9CQUFvQix3Q0FBd0MscUZBQXFGLDZGQUE2Rix1QkFBdUIsb0JBQW9CLHVDQUF1Qyx3RkFBd0YsaUVBQWlFLHVCQUF1QixvQkFBb0IsOGhCQUE4aEIsK0NBQStDLGlHQUFpRyxrREFBa0QsT0FBTyxpQkFBaUIsZ0NBQWdDLDhDQUE4QyxtREFBbUQseU5BQXlOLEVBQUUsV0FBVyxtQ0FBbUMsNEJBQTRCLHFEQUFxRCw0QkFBNEIsU0FBUyxJQUFJLFNBQVMsR0FBRyxlQUFlLE9BQU8sK0JBQStCLGVBQWUsV0FBVyx1Q0FBdUMsbUNBQW1DLHdFQUF3RSw4RUFBOEUsNEVBQTRFLDBEQUEwRCx5Q0FBeUMsV0FBVyw0QkFBNEIsc0RBQXNELFdBQVcsNkJBQTZCLHVEQUF1RCxXQUFXLG9DQUFvQyx5RkFBeUYsV0FBVywyQkFBMkIsNkJBQTZCLGtYQUFrWCwwQ0FBMEMsNEJBQTRCLGdEQUFnRCw4Q0FBOEMsV0FBVyxpREFBaUQscUVBQXFFLG9EQUFvRCxFQUFFLHVFQUF1RSx3Q0FBd0MsV0FBVyw0QkFBNEIsMEJBQTBCLHlCQUF5QixpTkFBaU4sMkRBQTJELGdCQUFnQixFQUFFLFdBQVcsNkJBQTZCLHFDQUFxQyw0QkFBNEIsNENBQTRDLHVEQUF1RCxlQUFlLE9BQU8sNkJBQTZCLGVBQWUsV0FBVyxpQ0FBaUMsa0RBQWtELDhHQUE4RyxvREFBb0Qsa0JBQWtCLDREQUE0RCxnRUFBZ0UsZ0VBQWdFLDZEQUE2RCwwQ0FBMEMsa0NBQWtDLGVBQWUsWUFBWSwwQkFBMEIsa0RBQWtELCtCQUErQiwyRUFBMkUsb0RBQW9ELGtCQUFrQixtREFBbUQsZ0VBQWdFLGdFQUFnRSw2REFBNkQsMENBQTBDLGtDQUFrQyxlQUFlLFlBQVksaUNBQWlDLHNCQUFzQixpQ0FBaUMsb0hBQW9ILG1CQUFtQixzQkFBc0IsZ0hBQWdILG1CQUFtQixPQUFPLDBIQUEwSCxtQkFBbUIsZUFBZSxPQUFPLHNIQUFzSCxlQUFlLFdBQVcsK0JBQStCLCtGQUErRixrRUFBa0UsbURBQW1ELGdFQUFnRSxzREFBc0QsdUJBQXVCLE9BQU8sb0VBQW9FLHVCQUF1QixtQkFBbUIsRUFBRSwrRUFBK0UsaUJBQWlCLFdBQVcsaURBQWlELDJHQUEyRyxrRUFBa0UsMkZBQTJGLGtFQUFrRSx3SEFBd0gsaUhBQWlILDJGQUEyRiwwR0FBMEcsNENBQTRDLG1JQUFtSSxlQUFlLE9BQU8sb0hBQW9ILG9FQUFvRSxlQUFlLFdBQVcsa0RBQWtELGtEQUFrRCw0QkFBNEIsaUVBQWlFLHVDQUF1Qyw4Q0FBOEMsaUVBQWlFLG1CQUFtQixlQUFlLFFBQVEsV0FBVyxnREFBZ0Qsa0RBQWtELDRCQUE0QixpRUFBaUUsZUFBZSxRQUFRLFdBQVcsZ0NBQWdDLHVEQUF1RCxnRUFBZ0Usb0RBQW9ELHdCQUF3QixvQkFBb0IsR0FBRyxzQkFBc0IsR0FBRyxtQkFBbUIsRUFBRSxXQUFXLDBCQUEwQixxQ0FBcUMsS0FBSyxTQUFTLFdBQVcsU0FBUyxrQkFBa0IsNkJBQTZCLE9BQU8sa0JBQWtCLHdGQUF3RixPQUFPLHVCQUF1QiwwRkFBMEYsbURBQW1ELGdFQUFnRSxnRUFBZ0UsNkRBQTZELHNDQUFzQyxXQUFXLHdEQUF3RCxPQUFPLGVBQWUsNEJBQTRCLGlDQUFpQyxXQUFXLCtDQUErQyxzQkFBc0IsbURBQW1ELFdBQVcsdUNBQXVDLHNCQUFzQixtREFBbUQsV0FBVyxrQ0FBa0Msd0NBQXdDLDRCQUE0Qix3R0FBd0csa0VBQWtFLDJCQUEyQiw0REFBNEQsZUFBZSxnRUFBZ0UsVUFBVSxJQUFJLGdDQUFnQyxrQkFBa0IsR0FBRyxjQUFjLG9CQUFvQixHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyxnQkFBZ0IsbUJBQW1CLEdBQUcsK0JBQStCOztBQUVwaDVCOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1Q0FBdUMscUJBQXFCLEVBQUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsU0FBUyxpQ0FBaUM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0QkFBNEIsNEJBQTRCLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHNDQUFzQztBQUNwRSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTSw0QkFBNEIsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDO0FBQ2xDLElBQUksS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ3BDaEI7QUFBQTtBQUFBO0FBQU87QUFDQTtBQUNQLElBQUksS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDRmhCOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGdrQkFBNlM7QUFDblU7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLDZIQUFnRTtBQUNsRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1hmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGtoQkFBb1I7QUFDMVM7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLDZIQUFnRTtBQUNsRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNYZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUJBQU8sQ0FBQyx5akJBQWdRO0FBQzFRO0FBQ0E7QUFDb0g7QUFDYTtBQUNqSTtBQUNnVjtBQUNoVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21HO0FBQ25HLGdCQUFnQix5R0FBa0I7QUFDbEMsRUFBRSxnSUFBYztBQUNoQixFQUFFLHdPQUFjO0FBQ2hCLEVBQUUsaVBBQXlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLEVBYVg7O0FBRVUsZ0ZBQWlCOzs7Ozs7Ozs7Ozs7O0FDOUNoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUJBQU8sQ0FBQyx1bUJBQXlSO0FBQ25TO0FBQ0E7QUFDbUg7QUFDYTtBQUNoSTtBQUM4VTtBQUM5VTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21HO0FBQ25HLGdCQUFnQix5R0FBa0I7QUFDbEMsRUFBRSwrSEFBYztBQUNoQixFQUFFLHNPQUFjO0FBQ2hCLEVBQUUsK09BQXlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLEVBYVg7O0FBRVUsZ0ZBQWlCIiwiZmlsZSI6ImpzLzUuYnVuZGxlLmRjNmU4YTM1MWM0YmY2ZWM2MTkxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj5NYXN0ZXIgUmVwb3J0PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10b29sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZG93bmxvYWQtZXhjZWwgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIgOmZldGNoPVwiZXhwb3J0X2NzdlwiIDpmaWVsZHM9XCJqc29uX2ZpZWxkc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YmVmb3JlLWdlbmVyYXRlPVwic3RhcnREb3dubG9hZFwiIDpiZWZvcmUtZmluaXNoPVwiZmluaXNoRG93bmxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0PVwiTXkgV29ya3NoZWV0XCIgdHlwZT1cImNzdlwiIG5hbWU9XCJtYXN0ZXJfcmVwb3J0LmNzdlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiJGdhdGUuaGFzUGVybWlzc2lvbignY2FuX2Rvd25sb2FkX21hc3Rlcl9yZXBvcnQnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwb3J0IENTVjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kb3dubG9hZC1leGNlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWJsdWVcIiBAY2xpY2s9XCJvcGVuU2lkZU1vZGFsXCI+PGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLXNsaWRlcnMtaCBtci0yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBGaWx0ZXI8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyTW9kYWwgcmVmPVwic2lkZWJhck1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBDb250ZW50IG9mIHRoZSBzaWRlYmFyIG1vZGFsIGdvZXMgaGVyZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PGkgY2xhc3M9XCJmYSBmYS1zbGlkZXJzLWggbXItMlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHN0eWxlPVwiZm9udC1zaXplOiAyMnB4O1wiPjwvaT4gRmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYXV0b2NvbXBsZXRlPVwib2ZmXCIgQHN1Ym1pdC5wcmV2ZW50PVwiZ2V0UmVzdWx0cygpXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIGNvbC1jdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWFjaGluZV9pZFwiPkZBUiBObzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOmdldC1vcHRpb24tbGFiZWw9XCJnZXRMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cInNlYXJjaF9tYWNoaW5lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbWFjaGluZXMgLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5tYWNoaW5lX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1hY2hpbmVfaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBjb2wtY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1hY2hpbmVfaWRcIj5TZWFyY2ggVGlja2V0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGlja2V0IC4uLlwiIHYtbW9kZWw9XCJzZWFyY2gudGlja2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpY2tldFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIGNvbC1jdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWFjaGluZV9pZFwiPlNlbGVjdCBTaXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInNpdGVfbmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInNlYXJjaF9zaXRlc1wiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFNpdGUuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoLnNpdGVfaWRcIiBuYW1lPVwic2l0ZV9pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIGNvbC1jdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWFjaGluZV9pZFwiPlNlbGVjdCBTdGF0dXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwic2l0ZV9uYW1lXCIgOm9wdGlvbnM9XCJbJ09wZW4nLCAnQ2xvc2VkJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBTdGF0dXMuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnN0YXR1c1wiIG5hbWU9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBjb2wtY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1hY2hpbmVfaWRcIj5DcmVhdGVkIGJ5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6b3B0aW9ucz1cImNyZWF0ZWRfdXNlcnNcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDcmVhdGVkIGJ5Li4uXCIgdi1tb2RlbD1cInNlYXJjaC5jcmVhdGVkX2J5XCIgbmFtZT1cImNyZWF0ZWRfYnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBjb2wtY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1hY2hpbmVfaWRcIj5UaWNrZXQgVHlwZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbJ1BlcmlvZGljIE1haW50ZW5hbmNlJywgJ0JyZWFrZG93biBNYWludGVuYW5jZSddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaWNrZXQgVHlwZS4uLlwiIHYtbW9kZWw9XCJzZWFyY2gudGlja2V0X3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGlja2V0X3R5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBjb2wtY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1hY2hpbmVfaWRcIj5Gcm9tIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XCJBc2lhL0tvbGthdGFcIiB2LW1vZGVsPVwic2VhcmNoLmNyZWF0ZWRfZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LWNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJEYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gY29sLWN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYWNoaW5lX2lkXCI+VG8gRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXRpbWUgdmFsdWUtem9uZT1cIkFzaWEvS29sa2F0YVwiIHYtbW9kZWw9XCJzZWFyY2guY3JlYXRlZF90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LWNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJEYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gY29sLWN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYWNoaW5lX2lkXCI+VEFUIEZyb208L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlRBVCBGcm9tIC4uLlwiIHYtbW9kZWw9XCJzZWFyY2gudGF0X2Zyb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBjb2wtY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1hY2hpbmVfaWRcIj5UQVQgVG88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlRBVCBUbyAuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnRhdF90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIGNvbC1jdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWFjaGluZV9pZFwiPkNvbXBsYWludCBuYXR1cmU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwic2l0ZV9uYW1lXCIgOm9wdGlvbnM9XCJbJ01ham9yJywgJ01pbm9yJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBDb21wbGFpbnQgTmF0dXJlLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5jb21wbGFpbnRfbmF0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbXBsYWludF9uYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IG1iLTIgcHItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1wiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgbWItMiBwbC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZXNldF9maWx0ZXIoKVwiPlJlc2V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TaWRlYmFyTW9kYWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRlciAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgdGlja2V0THN0VGJsIHRhYmxlLXJlc3BvbnNpdmUgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QVRNIElEPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RG9ja2V0IE5vPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8dGggY2xhc3M9XCJ0cnVuY2F0ZVwiIHRpdGxlPVwiRXF1aXBtZW50IERlc2NyaXB0aW9uXCI+RXF1aXBtZW50IERlc2NyaXB0aW9uPC90aD4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkN1c3RvZGlhbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRhZyBUaW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGFnIFRpbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db3VudGRvd24oRGF5cyBoaDptbTpzcyk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPHRoIGNsYXNzPVwidHJ1bmNhdGVcIiB0aXRsZT1cIlN0YXR1cyBEdXJpbmcgQ29tcGxhaW5cIj5TdGF0dXMgRHVyaW5nIENvbXBsYWluPC90aD4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIihjb21wbGFpbnQsIHgpIGluIENvbXBsYWludHMuZGF0YVwiIDprZXk9XCJjb21wbGFpbnQuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLWNyZWF0ZWQ9XCJjb21wbGFpbnQuY3JlYXRlZF9hdFwiIDpkYXRhLXRhZz1cImNvbXBsYWludC50YWdfdGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtc3RhdD1cImNvbXBsYWludC53b3JrX3N0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtIGJ0bi10b2dnbGUtY3VzdG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJlZGl0TW9kYWwodXNlcilcIj5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBkcm9wZG93bi10b2dnbGUgZHJvcGRvd24tdG9nZ2xlLXNwbGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgRHJvcGRvd248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBAY2xpY2s9XCJkZWxldGVVc2VyKHVzZXIuaWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiJy9jb21wbGFpbnQtZGV0YWlscy8nICsgY29tcGxhaW50LmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtbGlua1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XCI+e3sgY29tcGxhaW50LmF0bV9pZCB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidHJ1bmNhdGVcIiA6dGl0bGU9XCJjb21wbGFpbnQuZG9ja2V0X25vXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDE1MHB4O1wiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsYWludC5kb2NrZXRfbm8gfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRydW5jYXRlXCI+e3sgZm9ybWF0RGF0ZShjb21wbGFpbnQuY3JlYXRlZF9hdCkgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBjb21wbGFpbnQuY3VzdG5hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBjb21wbGFpbnQudGFnX3RpbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA6c3R5bGU9XCJ7IGNvbG9yOiBjb21wbGFpbnQubGFnX3RpbWUgPyAnUmVkJyA6ICdHcmVlbicgfVwiPiB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRMYWdUaW1lKGNvbXBsYWludC5sYWdfdGltZSkgfX08L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8dGQgQGNsaWNrPVwidmlld19zaXRlX2RldGFpbHModGlja2V0Lm1hY2hpbmUpXCI+e3sgdGlja2V0LmZhcl9ubyB9fTwvdGQ+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgY29tcGxhaW50Lndvcmtfc3RhdHVzIH19LXt7IGNvbXBsYWludC50aW1lcl9kaXNwbGF5IH19PC9zcGFtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnQ29tcGxldGVkJ1wiPk4vQTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPnt7IGNvbXBsYWludC50aW1lcl9kaXNwbGF5IH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJnZXRTdGF0dXNDbGFzcyhjb21wbGFpbnQud29ya19zdGF0dXMpXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsYWludC53b3JrX3N0YXR1cyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWJvZHkgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6ZGF0YT1cIkNvbXBsYWludHNcIiA6bGltaXQ9XCIxMFwiIEBwYWdpbmF0aW9uLWNoYW5nZS1wYWdlPVwiZ2V0UmVzdWx0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFnaW5hdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQgLS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8IS0tIDxNYWNoaW5lUG9wIGlkPVwiTWFjaGluZVNpdGVNb2RhbDNcIiA6bWFjaGluZT1cInBtTW9kYWxEYXRhXCIgLz4gLS0+XG4gICAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vaW1wb3J0IFZ1ZVJlYWRNb3JlU21vb3RoIGZyb20gXCJ2dWUtcmVhZC1tb3JlLXNtb290aFwiO1xuaW1wb3J0IE11bHRpUmFuZ2VTbGlkZXIgZnJvbSBcIm11bHRpLXJhbmdlLXNsaWRlci12dWVcIjtcbmltcG9ydCBTaWRlYmFyTW9kYWwgZnJvbSAnLi9TaWRlQmFyTW9kYWwudnVlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk1hc3RlclJlcG9ydFwiLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgVnVlUmVhZE1vcmVTbW9vdGg6ICgpID0+IGltcG9ydCgndnVlLXJlYWQtbW9yZS1zbW9vdGgnKSxcbiAgICAgICAgTXVsdGlSYW5nZVNsaWRlciwgU2lkZWJhck1vZGFsLFxuICAgICAgICBNYWNoaW5lUG9wOiAoKSA9PiBpbXBvcnQoJy4vTWFjaGluZUZhclBvcC52dWUnKSxcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGFnZU1vcmU6IFtdLFxuICAgICAgICAgICAgYWRkaXRpb25hbE1vcmU6IFtdLFxuICAgICAgICAgICAgcHJvYmxlbXNNb3JlOiBbXSxcbiAgICAgICAgICAgIHJjYU1vcmU6IFtdLFxuICAgICAgICAgICAgcG1Nb2RhbERhdGE6ICcnLFxuICAgICAgICAgICAgY3JlYXRlZF91c2VyczogW10sXG4gICAgICAgICAgICBzZWFyY2hfbWFjaGluZXM6IFtdLFxuICAgICAgICAgICAgc2VhcmNoX3NpdGVzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9ieTogJycsXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9mcm9tOiAnJyxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX3RvOiAnJyxcbiAgICAgICAgICAgICAgICB0YXRfZnJvbTogJycsXG4gICAgICAgICAgICAgICAgdGF0X3RvOiAnJyxcbiAgICAgICAgICAgICAgICBjb21wbGFpbnRfbmF0dXJlOiAnJyxcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTogJycsXG4gICAgICAgICAgICAgICAgdGlja2V0OiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXM6IFtdLFxuICAgICAgICAgICAgc2l0ZXM6IFtdLFxuICAgICAgICAgICAgc2VsZWN0ZWRfbWFjaGluZTogJycsXG4gICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXG4gICAgICAgICAgICBDdXN0b2RpYW5zOiBbXSxcbiAgICAgICAgICAgIENvbXBsYWludHM6IHt9LFxuICAgICAgICAgICAgU3RhdHVzZXM6IFtdLFxuICAgICAgICAgICAgc2w6IDEsXG4gICAgICAgICAgICBqc29uX2ZpZWxkczoge1xuICAgICAgICAgICAgICAgIFwiU2wgTm9cIjoge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2wrKztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdTaXRlIG5hbWUnOiAnc2l0ZV9uYW1lJyxcbiAgICAgICAgICAgICAgICAnT3BlcmF0b3IgbmFtZSc6ICdvcGVyYXRvcl9uYW1lJyxcbiAgICAgICAgICAgICAgICAnRXF1aXBtZW50IERlc2NyaXB0aW9uJzogJ21hY2hpbmVfbmFtZScsXG4gICAgICAgICAgICAgICAgJ0ZBUiBObyc6ICdmYXJfbm8nLFxuICAgICAgICAgICAgICAgICdDb21wbGFpbnQgTm8nOiAndGlja2V0X25vJyxcbiAgICAgICAgICAgICAgICAnQ29tcGxhaW50IGRhdGUnOiBcImNyZWF0ZWRfYXRcIixcbiAgICAgICAgICAgICAgICAnQ29tcGxhaW50IFJhaXNlZCBCeSc6ICdjcmVhdGVkX2J5X25hbWUnLFxuICAgICAgICAgICAgICAgICdDb21wbGFpbnQgTmF0dXJlJzogJ2NvbXBsYWludF9uYXR1cmUnLFxuICAgICAgICAgICAgICAgICdTdGF0dXMgRHVyaW5nIENvbXBsYWludCc6ICdzdGF0dXNfZHVyaW5nX2NvbXBsYWludCcsXG4gICAgICAgICAgICAgICAgJ1Byb2JsZW0gZGVzY3JpcHRpb24nOiAncHJvYmxlbV9kZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgJ0FkZGl0aW9uYWwgUHJvYmxlbSc6IHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwicHJvYmxlbXNcIixcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IChwcm9ibGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ibGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcHJvYmxlbS5tYXAodmFsdWUgPT4gdmFsdWUucHJvYmxlbSkuam9pbihcIlxcclxcblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIkN1cnJlbnQgU3RhdHVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwic3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdHVzLnRvTG93ZXJDYXNlKCkgPT0gJ2NyZWF0ZWQgYnkgdXNlcicgPyAnT3BlbicgOiBzdGF0dXM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIkN1cnJlbnQgU3RhZ2VcIjoge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJsYXN0X3N0YWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlLmRlc2NyaXB0aW9uIDogJy0nO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJTdGF0dXMgUG9zdCBSZXNvbHV0aW9uXCI6ICdtYWNoaW5lX3N0YXR1cycsXG4gICAgICAgICAgICAgICAgJ0V4cGVjdGVkIFJlc29sdXRpb24gZGF0ZSc6ICdsaWtlbHlfZGF0ZScsXG4gICAgICAgICAgICAgICAgJ1JldmlzZWQgRXhwZWN0ZWQgZGF0ZSc6ICdyZXZlcnNpb25fZGF0ZScsXG4gICAgICAgICAgICAgICAgJ1JlYXNvbiBmb3IgZGF0ZSBSZXZpc2lvbic6ICdyZXZlcnNpb25fcmVhc29uJyxcbiAgICAgICAgICAgICAgICAnQWN0dWFsIFJlc29sdmUgRGF0ZSc6ICdhY3R1YWxfZGF0ZScsXG4gICAgICAgICAgICAgICAgJ1RBVCc6ICd0YXQnLFxuICAgICAgICAgICAgICAgICdFc3RpbWF0ZWQgQ29zdCc6ICdlc3RpbWF0ZWRfY29zdCcsXG4gICAgICAgICAgICAgICAgJ0FjdHVhbCBDb3N0JzogJ2FjdHVhbF9jb3N0JyxcbiAgICAgICAgICAgICAgICAnUHJvZHVjdGlvbiBMb3NzJzogJ3Byb2R1Y3Rpb25fbG9zc19hbW91bnQnLFxuICAgICAgICAgICAgICAgICdSQ0EnOiAncmNhJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGpzb25fbWV0YTogW1xuICAgICAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjaGFyc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInV0Zi04XCIsXG4gICAgICAgICAgICAgICAgfSxdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHNsOiAwLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGZvcm1hdERhdGUoZGF0ZXRpbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRldGltZSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tR0InLCB7XG4gICAgICAgICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgbW9udGg6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICAgICAgICAgIGhvdXIxMjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdExhZ1RpbWUobGFnVGltZSkge1xuICAgICAgICAgICAgaWYgKGxhZ1RpbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0cyA9IGxhZ1RpbWUuc3BsaXQoXCI6XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtwYXJ0c1swXX1IOiR7cGFydHNbMV19TWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnTi9BJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0U3RhdHVzQ2xhc3Mod29ya1N0YXR1cykge1xuICAgICAgICAgICAgc3dpdGNoICh3b3JrU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnUGVuZGluZyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAncGVuZGluZyc7XG4gICAgICAgICAgICAgICAgY2FzZSAnUHJvY2Vzc2luZyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAncHJvY2Vzc2luZyc7XG4gICAgICAgICAgICAgICAgY2FzZSAnQ29tcGxldGVkJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdjb21wbGV0ZWQnO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJzsgLy8gRGVmYXVsdCBvciBlbXB0eSBjbGFzc1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcGVuU2lkZU1vZGFsKCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5zaWRlYmFyTW9kYWwub3BlblNpZGVNb2RhbCgpO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZVNpZGVNb2RhbCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuc2lkZWJhck1vZGFsLmNsb3NlU2lkZU1vZGFsKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHZpZXdfc2l0ZV9kZXRhaWxzKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucG1Nb2RhbERhdGEgPSBkYXRhXG4gICAgICAgICAgICAkKCcjTWFjaGluZVNpdGVNb2RhbDMnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgICB9LFxuICAgICAgICByZXNldF9maWx0ZXIoKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaCA9IHtcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYnk6ICcnLFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfZnJvbTogJycsXG4gICAgICAgICAgICAgICAgY3JlYXRlZF90bzogJycsXG4gICAgICAgICAgICAgICAgdGF0X2Zyb206IFwiXCIsXG4gICAgICAgICAgICAgICAgdGF0X3RvOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvbXBsYWludF9uYXR1cmU6ICcnLFxuICAgICAgICAgICAgICAgIHRpY2tldF90eXBlOiAnJyxcbiAgICAgICAgICAgICAgICB0aWNrZXQ6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdldFJlc3VsdHMoKVxuICAgICAgICB9LFxuICAgICAgICBVcGRhdGVWYWx1ZXMoZSkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gudGF0X2Zyb20gPSBlLm1pblZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gudGF0X3RvID0gZS5tYXhWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZXhjZWxcbiAgICAgICAgYXN5bmMgZXhwb3J0X2NzdigpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdhcGkvdGlja2V0L2V4cG9ydCcsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMuc2VhcmNoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdhcGkvdGlja2V0L2V4cG9ydCcpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnREb3dubG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuc2wgPSAxO1xuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BsZWFzZSBXYWl0ICEnLFxuICAgICAgICAgICAgICAgIGh0bWw6ICdEYXRhIHBvcHVsYXRpbmcnLCAvLyBhZGQgaHRtbCBhdHRyaWJ1dGUgaWYgeW91IHdhbnQgb3IgcmVtb3ZlXG4gICAgICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uQmVmb3JlT3BlbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTd2FsLnNob3dMb2FkaW5nKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmlzaERvd25sb2FkKCkge1xuICAgICAgICAgICAgU3dhbC5jbG9zZSgpXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0TGFiZWwodmFsKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmZhcl9ubyArICcgLSAnICsgdmFsLm5hbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldFJlc3VsdHMocGFnZSA9IDEpIHtcbiAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gucGFnZSA9IHBhZ2VcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9jb21wbGFpbnQvbGlzdC8nICsgdGhpcy4kcm91dGUucGFyYW1zLmlkLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxuICAgICAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YT09PT1cIiwgZGF0YS5kYXRhLmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5Db21wbGFpbnRzID0gZGF0YS5kYXRhLmRhdGEuY29tcGxhaW50cztcblxuICAgICAgICAgICAgICAgIHRoaXMuQ3VzdG9kaWFucyA9IGRhdGEuZGF0YS5kYXRhLmN1c3RvZGlhbnM7XG4gICAgICAgICAgICAgICAgdGhpcy5TdGF0dXNlcyA9IGRhdGEuZGF0YS5kYXRhLnN0YXR1c19saXN0O1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVRpbWVycygpO1xuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRUaWNrZXRzKCkge1xuICAgICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaCA9IHt9O1xuICAgICAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9jb21wbGFpbnQvbGlzdC9cIiArIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcbiAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGE9PT09PlwiLCBkYXRhKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuQ29tcGxhaW50cyA9IGRhdGEuZGF0YS5kYXRhLmNvbXBsYWludHM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLkN1c3RvZGlhbnMgPSBkYXRhLmRhdGEuZGF0YS5jdXN0b2RpYW5zO1xuICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzZXMgPSBkYXRhLmRhdGEuZGF0YS5zdGF0dXNfbGlzdDtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVUaW1lcnMoKTtcbiAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWFkX21vcmUoeCwgcCA9ICcnKSB7XG4gICAgICAgICAgICBpZiAocCkge1xuICAgICAgICAgICAgICAgIGlmIChwID09ICdzJykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMuc3RhZ2VNb3JlW3hdID8gZmFsc2UgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnN0YWdlTW9yZSwgeCwgYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwID09ICdyYycpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSB0aGlzLnJjYU1vcmVbeF0gPyBmYWxzZSA6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucmNhTW9yZSwgeCwgYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSB0aGlzLnByb2JsZW1zTW9yZVt4XSA/IGZhbHNlIDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wcm9ibGVtc01vcmUsIHgsIGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGEgPSB0aGlzLmFkZGl0aW9uYWxNb3JlW3hdID8gZmFsc2UgOiB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuYWRkaXRpb25hbE1vcmUsIHgsIGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbml0aWFsaXplVGltZXJzKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuQ29tcGxhaW50cyAmJiB0aGlzLkNvbXBsYWludHMuZGF0YSAmJiB0aGlzLkNvbXBsYWludHMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Db21wbGFpbnRzLmRhdGEuZm9yRWFjaCgodGltZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGltZXJcIix0aW1lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVyLndvcmtfc3RhdHVzID09PSAnQ29tcGxldGVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXIudGltZXJfZGlzcGxheSA9ICdOL0EnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVSZW1haW5pbmdUaW1lKHRpbWVyLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5Db21wbGFpbnRzLmRhdGFcIix0aGlzLkNvbXBsYWludHMuZGF0YSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FsY3VsYXRlUmVtYWluaW5nVGltZSh0aW1lciwgaW5kZXgpIHtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgY3JlYXRlZF9hdCB0byBzZWNvbmRzXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVkRGF0ZSA9IG5ldyBEYXRlKHRpbWVyLmNyZWF0ZWRfYXQpO1xuICAgICAgICAgICAgY29uc3QgY3JlYXRlZFNlY29uZHMgPSBjcmVhdGVkRGF0ZS5nZXRUaW1lKCkgLyAxMDAwO1xuXG4gICAgICAgICAgICAvLyBHZXQgY3VycmVudCB0aW1lIGluIHNlY29uZHNcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTZWNvbmRzID0gY3VycmVudERhdGUuZ2V0VGltZSgpIC8gMTAwMDtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkaWZmZXJlbmNlIGluIHNlY29uZHNcbiAgICAgICAgICAgIGNvbnN0IGRpZmZTZWNvbmRzID0gY3VycmVudFNlY29uZHMgLSBjcmVhdGVkU2Vjb25kcztcblxuICAgICAgICAgICAgLy8gQ29udmVydCB0YWdfdGltZSAoSEg6TU06U1MpIHRvIHNlY29uZHNcbiAgICAgICAgICAgIGNvbnN0IHRhZ1RpbWUgPSB0aW1lci50YWdfdGltZS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgY29uc3QgdGFnU2Vjb25kcyA9ICgrdGFnVGltZVswXSkgKiAzNjAwICsgKCt0YWdUaW1lWzFdKSAqIDYwICsgKCt0YWdUaW1lWzJdKTtcblxuICAgICAgICAgICAgLy8gUmVtYWluaW5nIHRpbWUgaW4gc2Vjb25kc1xuICAgICAgICAgICAgbGV0IHJlbWFpbmluZ1NlY29uZHMgPSB0YWdTZWNvbmRzIC0gZGlmZlNlY29uZHM7XG5cbiAgICAgICAgICAgIGlmIChyZW1haW5pbmdTZWNvbmRzID49IDApIHtcbiAgICAgICAgICAgICAgICAvLyBDb3VudGRvd24gaWYgdGhlIHRpbWUgaXMgc3RpbGwgcmVtYWluaW5nXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydENvdW50ZG93bih0aW1lciwgcmVtYWluaW5nU2Vjb25kcywgaW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBDb3VudCB1cCBpZiB0aGUgdGltZSBoYXMgcGFzc2VkXG4gICAgICAgICAgICAgICAgcmVtYWluaW5nU2Vjb25kcyA9IE1hdGguYWJzKHJlbWFpbmluZ1NlY29uZHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDb3VudFVwKHRpbWVyLCByZW1haW5pbmdTZWNvbmRzLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0Q291bnRkb3duKHRpbWVyLCBzZWNvbmRzLCBpbmRleCkge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2Vjb25kcy0tO1xuICAgICAgICAgICAgICAgIHRpbWVyLnRpbWVyX2Rpc3BsYXkgPSB0aGlzLmZvcm1hdFRpbWUoc2Vjb25kcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2Vjb25kcyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB0aW1lci50aW1lcl9kaXNwbGF5ID0gJ0NvdW50ZG93biBmaW5pc2hlZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0Q291bnRVcCh0aW1lciwgc2Vjb25kcywgaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlY29uZHMrKztcbiAgICAgICAgICAgICAgICB0aW1lci50aW1lcl9kaXNwbGF5ID0gdGhpcy5mb3JtYXRUaW1lKHNlY29uZHMpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdFRpbWUoc2Vjb25kcykge1xuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChzZWNvbmRzICUgMzYwMCkgLyA2MCk7XG4gICAgICAgICAgICBjb25zdCBzZWNzID0gTWF0aC5mbG9vcihzZWNvbmRzICUgNjApO1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMucGFkVGltZShob3Vycyl9OiR7dGhpcy5wYWRUaW1lKG1pbnV0ZXMpfToke3RoaXMucGFkVGltZShzZWNzKX1gO1xuICAgICAgICB9LFxuICAgICAgICBwYWRUaW1lKHRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aW1lIDwgMTAgPyBgMCR7dGltZX1gIDogdGltZTtcbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmxvYWRUaWNrZXRzKCk7XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICAvLyBJbml0aWFsIEFQSSBjYWxsIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXG4gICAgICAgIHRoaXMubG9hZFRpY2tldHMoKTtcbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcblxuICAgICAgICBheGlvcy5nZXQoXCIvYXBpL2NvbXBsYWludC9saXN0L1wiICsgdGhpcy4kcm91dGUucGFyYW1zLmlkKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YT09PT0+XCIsIHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgdGhpcy5Db21wbGFpbnRzID0gcmVzcG9uc2UuZGF0YS5kYXRhLmNvbXBsYWludHM7XG5cbiAgICAgICAgICAgIHRoaXMuQ3VzdG9kaWFucyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5jdXN0b2RpYW5zO1xuICAgICAgICAgICAgdGhpcy5TdGF0dXNlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zdGF0dXNfbGlzdDtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVRpbWVycygpO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oJ09oLiBTb21ldGhpbmcgd2VudCB3cm9uZycpKTtcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgICRyb3V0ZSh0bywgZnJvbSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkVGlja2V0cygpO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyAnZm9ybS5zdWJfY2F0ZWdvcnlfaWQnKG4sIG8pIHtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jICdmb3JtLnNpdGVfaWQnKG4sIG8pIHtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgJ2Zvcm0uY2F0ZWdvcnlfaWQnOiB7XG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobiwgbykge1xuXG4gICAgICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2NvbXBsYWludC9saXN0LzEvXCIgKyBuKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgICAgICBpbml0aWFsOiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICB9LFxufVxuXG48L3NjcmlwdD5cbjxzdHlsZT5cbi5ybW9yZSB7XG4gICAgY29sb3I6IGJsdWU7XG59XG5cbi5wZW5kaW5nIHtcbiAgICBjb2xvcjogb3JhbmdlO1xufVxuXG4ucHJvY2Vzc2luZyB7XG4gICAgY29sb3I6IGJsdWU7XG59XG5cbi5jb21wbGV0ZWQge1xuICAgIGNvbG9yOiBncmVlbjtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInNpZGViYXItbW9kYWxcIiA6Y2xhc3M9XCJ7ICdhY3RpdmUnOiBpc09wZW4gfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2VcIiBAY2xpY2s9XCJjbG9zZVNpZGVNb2RhbFwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTdweDtjb2xvcjogYmxhY2s7XCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8IS0tIENvbnRlbnQgb2YgdGhlIHNpZGViYXIgbW9kYWwgLS0+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBAY2xpY2s9XCJjbG9zZVNpZGVNb2RhbFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuICBcbiAgPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb3BlblNpZGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgfSxcbiAgICAgIGNsb3NlU2lkZU1vZGFsKCkge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xuICA8L3NjcmlwdD5cbiAgXG4gIDxzdHlsZSBzY29wZWQ+XG4gIC5jbG9zZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgd2lkdGg6IDMzcHg7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIH1cbiAgLnNpZGViYXItbW9kYWwge1xuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiA0NTBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG4gIFxuICAuc2lkZWJhci1tb2RhbC5hY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICBcbiAgLnNpZGViYXItY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbiAgXG4gIC5zaWRlYmFyLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG4gIDwvc3R5bGU+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jbG9zZVtkYXRhLXYtNDYxYTQ1ODlde1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAzM3B4O1xcbiAgaGVpZ2h0OiAzM3B4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG4uc2lkZWJhci1tb2RhbFtkYXRhLXYtNDYxYTQ1ODldIHtcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogNDUwcHg7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDAuNXJlbSAycmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLnNpZGViYXItbW9kYWwuYWN0aXZlW2RhdGEtdi00NjFhNDU4OV0ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbn1cXG4uc2lkZWJhci1jb250ZW50W2RhdGEtdi00NjFhNDU4OV0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLnNpZGViYXItb3ZlcmxheVtkYXRhLXYtNDYxYTQ1ODldIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL3N1amFuL0Rlc2t0b3AvV29yay9wcm9qZWN0IGZyZWVsYW5jZS9TYW5raGEvYXRtX3Byb2ovYXRtL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1NpZGVCYXJNb2RhbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQThCQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0NBQ0E7QUFDQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBLENBQUEsc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtDQUNBO0FBRUE7RUFDQSx5QkFBQTtDQUNBO0FBRUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7Q0FDQTtBQUVBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiU2lkZUJhck1vZGFsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNpZGViYXItbW9kYWxcXFwiIDpjbGFzcz1cXFwieyAnYWN0aXZlJzogaXNPcGVuIH1cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjbG9zZVxcXCIgQGNsaWNrPVxcXCJjbG9zZVNpZGVNb2RhbFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgc3R5bGU9XFxcImZvbnQtc2l6ZTogMTdweDtjb2xvcjogYmxhY2s7XFxcIj48L2k+PC9idXR0b24+XFxuICAgICAgICA8IS0tIENvbnRlbnQgb2YgdGhlIHNpZGViYXIgbW9kYWwgLS0+XFxuICAgICAgICA8c2xvdD48L3Nsb3Q+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBAY2xpY2s9XFxcImNsb3NlU2lkZU1vZGFsXFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L3RlbXBsYXRlPlxcbiAgXFxuICA8c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBkYXRhKCkge1xcbiAgICAgIHJldHVybiB7XFxuICAgICAgICBpc09wZW46IGZhbHNlLFxcbiAgICAgIH07XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIG9wZW5TaWRlTW9kYWwoKSB7XFxuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XFxuICAgICAgfSxcXG4gICAgICBjbG9zZVNpZGVNb2RhbCgpIHtcXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XFxuICAgICAgfSxcXG4gICAgfSxcXG4gIH07XFxuICA8L3NjcmlwdD5cXG4gIFxcbiAgPHN0eWxlIHNjb3BlZD5cXG4gIC5jbG9zZXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAzM3B4O1xcbiAgICBoZWlnaHQ6IDMzcHg7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgfVxcbiAgLnNpZGViYXItbW9kYWwge1xcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiA0NTBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAycmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAuc2lkZWJhci1tb2RhbC5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxuICBcXG4gIC5zaWRlYmFyLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICB9XFxuICBcXG4gIC5zaWRlYmFyLW92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgfVxcbiAgPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ybW9yZSB7XFxuICAgIGNvbG9yOiBibHVlO1xcbn1cXG4ucGVuZGluZyB7XFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxufVxcbi5wcm9jZXNzaW5nIHtcXG4gICAgY29sb3I6IGJsdWU7XFxufVxcbi5jb21wbGV0ZWQge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9zdWphbi9EZXNrdG9wL1dvcmsvcHJvamVjdCBmcmVlbGFuY2UvU2Fua2hhL2F0bV9wcm9qL2F0bS9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnRMaXN0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBbW5CQTtJQUNBLFlBQUE7Q0FDQTtBQUVBO0lBQ0EsY0FBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLGFBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQ29tcGxhaW50TGlzdC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMlxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+TWFzdGVyIFJlcG9ydDwvaDM+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdG9vbHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRvd25sb2FkLWV4Y2VsIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XFxcIiA6ZmV0Y2g9XFxcImV4cG9ydF9jc3ZcXFwiIDpmaWVsZHM9XFxcImpzb25fZmllbGRzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpiZWZvcmUtZ2VuZXJhdGU9XFxcInN0YXJ0RG93bmxvYWRcXFwiIDpiZWZvcmUtZmluaXNoPVxcXCJmaW5pc2hEb3dubG9hZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQ9XFxcIk15IFdvcmtzaGVldFxcXCIgdHlwZT1cXFwiY3N2XFxcIiBuYW1lPVxcXCJtYXN0ZXJfcmVwb3J0LmNzdlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCIkZ2F0ZS5oYXNQZXJtaXNzaW9uKCdjYW5fZG93bmxvYWRfbWFzdGVyX3JlcG9ydCcpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHBvcnQgQ1NWPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kb3dubG9hZC1leGNlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLWJsdWVcXFwiIEBjbGljaz1cXFwib3BlblNpZGVNb2RhbFxcXCI+PGlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZhIGZhLXNsaWRlcnMtaCBtci0yXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiBGaWx0ZXI8L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJNb2RhbCByZWY9XFxcInNpZGViYXJNb2RhbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQ29udGVudCBvZiB0aGUgc2lkZWJhciBtb2RhbCBnb2VzIGhlcmUgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48aSBjbGFzcz1cXFwiZmEgZmEtc2xpZGVycy1oIG1yLTJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBzdHlsZT1cXFwiZm9udC1zaXplOiAyMnB4O1xcXCI+PC9pPiBGaWx0ZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgQHN1Ym1pdC5wcmV2ZW50PVxcXCJnZXRSZXN1bHRzKClcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtYXV0byBjb2wtY3VzdG9tXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibWFjaGluZV9pZFxcXCI+RkFSIE5vPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcIm5hbWVcXFwiIDpnZXQtb3B0aW9uLWxhYmVsPVxcXCJnZXRMYWJlbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCIgOm9wdGlvbnM9XFxcInNlYXJjaF9tYWNoaW5lc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBtYWNoaW5lcyAuLi5cXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5tYWNoaW5lX2lkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwibWFjaGluZV9pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWF1dG8gY29sLWN1c3RvbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm1hY2hpbmVfaWRcXFwiPlNlYXJjaCBUaWNrZXQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgdGlja2V0IC4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLnRpY2tldFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInRpY2tldFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWF1dG8gY29sLWN1c3RvbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm1hY2hpbmVfaWRcXFwiPlNlbGVjdCBTaXRlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcInNpdGVfbmFtZVxcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XFxcInNlYXJjaF9zaXRlc1xcXCIgcGxhY2Vob2xkZXI9XFxcIlNlbGVjdCBTaXRlLi4uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic2VhcmNoLnNpdGVfaWRcXFwiIG5hbWU9XFxcInNpdGVfaWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1hdXRvIGNvbC1jdXN0b21cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJtYWNoaW5lX2lkXFxcIj5TZWxlY3QgU3RhdHVzPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcInNpdGVfbmFtZVxcXCIgOm9wdGlvbnM9XFxcIlsnT3BlbicsICdDbG9zZWQnXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTZWxlY3QgU3RhdHVzLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guc3RhdHVzXFxcIiBuYW1lPVxcXCJzdGF0dXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1hdXRvIGNvbC1jdXN0b21cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJtYWNoaW5lX2lkXFxcIj5DcmVhdGVkIGJ5PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcIm5hbWVcXFwiIDpvcHRpb25zPVxcXCJjcmVhdGVkX3VzZXJzXFxcIiA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQ3JlYXRlZCBieS4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLmNyZWF0ZWRfYnlcXFwiIG5hbWU9XFxcImNyZWF0ZWRfYnlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1hdXRvIGNvbC1jdXN0b21cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJtYWNoaW5lX2lkXFxcIj5UaWNrZXQgVHlwZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJuYW1lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XFxcIlsnUGVyaW9kaWMgTWFpbnRlbmFuY2UnLCAnQnJlYWtkb3duIE1haW50ZW5hbmNlJ11cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiVGlja2V0IFR5cGUuLi5cXFwiIHYtbW9kZWw9XFxcInNlYXJjaC50aWNrZXRfdHlwZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInRpY2tldF90eXBlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtYXV0byBjb2wtY3VzdG9tXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibWFjaGluZV9pZFxcXCI+RnJvbSBEYXRlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXRpbWUgdmFsdWUtem9uZT1cXFwiQXNpYS9Lb2xrYXRhXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guY3JlYXRlZF9mcm9tXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQtY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkRhdGVcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWF1dG8gY29sLWN1c3RvbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm1hY2hpbmVfaWRcXFwiPlRvIERhdGU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVxcXCJBc2lhL0tvbGthdGFcXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5jcmVhdGVkX3RvXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQtY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkRhdGVcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWF1dG8gY29sLWN1c3RvbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm1hY2hpbmVfaWRcXFwiPlRBVCBGcm9tPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiVEFUIEZyb20gLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2gudGF0X2Zyb21cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtYXV0byBjb2wtY3VzdG9tXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibWFjaGluZV9pZFxcXCI+VEFUIFRvPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiVEFUIFRvIC4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLnRhdF90b1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1hdXRvIGNvbC1jdXN0b21cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJtYWNoaW5lX2lkXFxcIj5Db21wbGFpbnQgbmF0dXJlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcInNpdGVfbmFtZVxcXCIgOm9wdGlvbnM9XFxcIlsnTWFqb3InLCAnTWlub3InXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTZWxlY3QgQ29tcGxhaW50IE5hdHVyZS4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLmNvbXBsYWludF9uYXR1cmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJjb21wbGFpbnRfbmF0dXJlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcblxcblxcblxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNiBtYi0yIHByLTFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcXFwiPlNlYXJjaDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02IG1iLTIgcGwtMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLWJsb2NrXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJyZXNldF9maWx0ZXIoKVxcXCI+UmVzZXQ8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TaWRlYmFyTW9kYWw+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQtaGVhZGVyIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSB0aWNrZXRMc3RUYmwgdGFibGUtcmVzcG9uc2l2ZSBwLTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWhvdmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFUTSBJRDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Eb2NrZXQgTm88L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPHRoIGNsYXNzPVxcXCJ0cnVuY2F0ZVxcXCIgdGl0bGU9XFxcIkVxdWlwbWVudCBEZXNjcmlwdGlvblxcXCI+RXF1aXBtZW50IERlc2NyaXB0aW9uPC90aD4gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DdXN0b2RpYW48L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGFnIFRpbWU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGFnIFRpbWU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q291bnRkb3duKERheXMgaGg6bW06c3MpPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8dGggY2xhc3M9XFxcInRydW5jYXRlXFxcIiB0aXRsZT1cXFwiU3RhdHVzIER1cmluZyBDb21wbGFpblxcXCI+U3RhdHVzIER1cmluZyBDb21wbGFpbjwvdGg+IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XFxcIihjb21wbGFpbnQsIHgpIGluIENvbXBsYWludHMuZGF0YVxcXCIgOmtleT1cXFwiY29tcGxhaW50LmlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS1jcmVhdGVkPVxcXCJjb21wbGFpbnQuY3JlYXRlZF9hdFxcXCIgOmRhdGEtdGFnPVxcXCJjb21wbGFpbnQudGFnX3RpbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXN0YXQ9XFxcImNvbXBsYWludC53b3JrX3N0YXR1c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtIGJ0bi10b2dnbGUtY3VzdG9tXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImVkaXRNb2RhbCh1c2VyKVxcXCI+RWRpdDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBkcm9wZG93bi10b2dnbGUgZHJvcGRvd24tdG9nZ2xlLXNwbGl0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtaGFzcG9wdXA9XFxcInRydWVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPlRvZ2dsZSBEcm9wZG93bjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgQGNsaWNrPVxcXCJkZWxldGVVc2VyKHVzZXIuaWQpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwiJy9jb21wbGFpbnQtZGV0YWlscy8nICsgY29tcGxhaW50LmlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbHNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XFxcIj57eyBjb21wbGFpbnQuYXRtX2lkIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0cnVuY2F0ZVxcXCIgOnRpdGxlPVxcXCJjb21wbGFpbnQuZG9ja2V0X25vXFxcIiBzdHlsZT1cXFwibWF4LXdpZHRoOiAxNTBweDtcXFwiPnt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGFpbnQuZG9ja2V0X25vIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0cnVuY2F0ZVxcXCI+e3sgZm9ybWF0RGF0ZShjb21wbGFpbnQuY3JlYXRlZF9hdCkgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgY29tcGxhaW50LmN1c3RuYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IGNvbXBsYWludC50YWdfdGltZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA6c3R5bGU9XFxcInsgY29sb3I6IGNvbXBsYWludC5sYWdfdGltZSA/ICdSZWQnIDogJ0dyZWVuJyB9XFxcIj4ge3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdExhZ1RpbWUoY29tcGxhaW50LmxhZ190aW1lKSB9fTwvdGQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPHRkIEBjbGljaz1cXFwidmlld19zaXRlX2RldGFpbHModGlja2V0Lm1hY2hpbmUpXFxcIj57eyB0aWNrZXQuZmFyX25vIH19PC90ZD4gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGNvbXBsYWludC53b3JrX3N0YXR1cyB9fS17eyBjb21wbGFpbnQudGltZXJfZGlzcGxheSB9fTwvc3BhbT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XFxcImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ0NvbXBsZXRlZCdcXFwiPk4vQTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT57eyBjb21wbGFpbnQudGltZXJfZGlzcGxheSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gOmNsYXNzPVxcXCJnZXRTdGF0dXNDbGFzcyhjb21wbGFpbnQud29ya19zdGF0dXMpXFxcIj57e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsYWludC53b3JrX3N0YXR1cyB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1ib2R5IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhZ2luYXRpb24gOmRhdGE9XFxcIkNvbXBsYWludHNcXFwiIDpsaW1pdD1cXFwiMTBcXFwiIEBwYWdpbmF0aW9uLWNoYW5nZS1wYWdlPVxcXCJnZXRSZXN1bHRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYWdpbmF0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZCAtLT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuXFxuXFxuICAgICAgICA8L2Rpdj5cXG5cXG5cXG4gICAgICAgIDwhLS0gPE1hY2hpbmVQb3AgaWQ9XFxcIk1hY2hpbmVTaXRlTW9kYWwzXFxcIiA6bWFjaGluZT1cXFwicG1Nb2RhbERhdGFcXFwiIC8+IC0tPlxcbiAgICA8L3NlY3Rpb24+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0Plxcbi8vaW1wb3J0IFZ1ZVJlYWRNb3JlU21vb3RoIGZyb20gXFxcInZ1ZS1yZWFkLW1vcmUtc21vb3RoXFxcIjtcXG5pbXBvcnQgTXVsdGlSYW5nZVNsaWRlciBmcm9tIFxcXCJtdWx0aS1yYW5nZS1zbGlkZXItdnVlXFxcIjtcXG5pbXBvcnQgU2lkZWJhck1vZGFsIGZyb20gJy4vU2lkZUJhck1vZGFsLnZ1ZSc7XFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiBcXFwiTWFzdGVyUmVwb3J0XFxcIixcXG4gICAgY29tcG9uZW50czoge1xcbiAgICAgICAgVnVlUmVhZE1vcmVTbW9vdGg6ICgpID0+IGltcG9ydCgndnVlLXJlYWQtbW9yZS1zbW9vdGgnKSxcXG4gICAgICAgIE11bHRpUmFuZ2VTbGlkZXIsIFNpZGViYXJNb2RhbCxcXG4gICAgICAgIE1hY2hpbmVQb3A6ICgpID0+IGltcG9ydCgnLi9NYWNoaW5lRmFyUG9wLnZ1ZScpLFxcbiAgICB9LFxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBzdGFnZU1vcmU6IFtdLFxcbiAgICAgICAgICAgIGFkZGl0aW9uYWxNb3JlOiBbXSxcXG4gICAgICAgICAgICBwcm9ibGVtc01vcmU6IFtdLFxcbiAgICAgICAgICAgIHJjYU1vcmU6IFtdLFxcbiAgICAgICAgICAgIHBtTW9kYWxEYXRhOiAnJyxcXG4gICAgICAgICAgICBjcmVhdGVkX3VzZXJzOiBbXSxcXG4gICAgICAgICAgICBzZWFyY2hfbWFjaGluZXM6IFtdLFxcbiAgICAgICAgICAgIHNlYXJjaF9zaXRlczogW10sXFxuICAgICAgICAgICAgc2VhcmNoOiB7XFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnLFxcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9ieTogJycsXFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfZnJvbTogJycsXFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfdG86ICcnLFxcbiAgICAgICAgICAgICAgICB0YXRfZnJvbTogJycsXFxuICAgICAgICAgICAgICAgIHRhdF90bzogJycsXFxuICAgICAgICAgICAgICAgIGNvbXBsYWludF9uYXR1cmU6ICcnLFxcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTogJycsXFxuICAgICAgICAgICAgICAgIHRpY2tldDogJydcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxcbiAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzOiBbXSxcXG4gICAgICAgICAgICBzaXRlczogW10sXFxuICAgICAgICAgICAgc2VsZWN0ZWRfbWFjaGluZTogJycsXFxuICAgICAgICAgICAgdXNlcnM6IFtdLFxcbiAgICAgICAgICAgIG1hY2hpbmVzOiBbXSxcXG4gICAgICAgICAgICBDdXN0b2RpYW5zOiBbXSxcXG4gICAgICAgICAgICBDb21wbGFpbnRzOiB7fSxcXG4gICAgICAgICAgICBTdGF0dXNlczogW10sXFxuICAgICAgICAgICAgc2w6IDEsXFxuICAgICAgICAgICAganNvbl9maWVsZHM6IHtcXG4gICAgICAgICAgICAgICAgXFxcIlNsIE5vXFxcIjoge1xcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zbCsrO1xcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgJ1NpdGUgbmFtZSc6ICdzaXRlX25hbWUnLFxcbiAgICAgICAgICAgICAgICAnT3BlcmF0b3IgbmFtZSc6ICdvcGVyYXRvcl9uYW1lJyxcXG4gICAgICAgICAgICAgICAgJ0VxdWlwbWVudCBEZXNjcmlwdGlvbic6ICdtYWNoaW5lX25hbWUnLFxcbiAgICAgICAgICAgICAgICAnRkFSIE5vJzogJ2Zhcl9ubycsXFxuICAgICAgICAgICAgICAgICdDb21wbGFpbnQgTm8nOiAndGlja2V0X25vJyxcXG4gICAgICAgICAgICAgICAgJ0NvbXBsYWludCBkYXRlJzogXFxcImNyZWF0ZWRfYXRcXFwiLFxcbiAgICAgICAgICAgICAgICAnQ29tcGxhaW50IFJhaXNlZCBCeSc6ICdjcmVhdGVkX2J5X25hbWUnLFxcbiAgICAgICAgICAgICAgICAnQ29tcGxhaW50IE5hdHVyZSc6ICdjb21wbGFpbnRfbmF0dXJlJyxcXG4gICAgICAgICAgICAgICAgJ1N0YXR1cyBEdXJpbmcgQ29tcGxhaW50JzogJ3N0YXR1c19kdXJpbmdfY29tcGxhaW50JyxcXG4gICAgICAgICAgICAgICAgJ1Byb2JsZW0gZGVzY3JpcHRpb24nOiAncHJvYmxlbV9kZXNjcmlwdGlvbicsXFxuICAgICAgICAgICAgICAgICdBZGRpdGlvbmFsIFByb2JsZW0nOiB7XFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXFxcInByb2JsZW1zXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAocHJvYmxlbSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXQgPSAnJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ibGVtKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHByb2JsZW0ubWFwKHZhbHVlID0+IHZhbHVlLnByb2JsZW0pLmpvaW4oXFxcIlxcXFxyXFxcXG5cXFwiKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIFxcXCJDdXJyZW50IFN0YXR1c1xcXCI6IHtcXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcXFwic3RhdHVzXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoc3RhdHVzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXR1cy50b0xvd2VyQ2FzZSgpID09ICdjcmVhdGVkIGJ5IHVzZXInID8gJ09wZW4nIDogc3RhdHVzO1xcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgXFxcIkN1cnJlbnQgU3RhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXFxcImxhc3Rfc3RhZ2VcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICh2YWx1ZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlLmRlc2NyaXB0aW9uIDogJy0nO1xcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgXFxcIlN0YXR1cyBQb3N0IFJlc29sdXRpb25cXFwiOiAnbWFjaGluZV9zdGF0dXMnLFxcbiAgICAgICAgICAgICAgICAnRXhwZWN0ZWQgUmVzb2x1dGlvbiBkYXRlJzogJ2xpa2VseV9kYXRlJyxcXG4gICAgICAgICAgICAgICAgJ1JldmlzZWQgRXhwZWN0ZWQgZGF0ZSc6ICdyZXZlcnNpb25fZGF0ZScsXFxuICAgICAgICAgICAgICAgICdSZWFzb24gZm9yIGRhdGUgUmV2aXNpb24nOiAncmV2ZXJzaW9uX3JlYXNvbicsXFxuICAgICAgICAgICAgICAgICdBY3R1YWwgUmVzb2x2ZSBEYXRlJzogJ2FjdHVhbF9kYXRlJyxcXG4gICAgICAgICAgICAgICAgJ1RBVCc6ICd0YXQnLFxcbiAgICAgICAgICAgICAgICAnRXN0aW1hdGVkIENvc3QnOiAnZXN0aW1hdGVkX2Nvc3QnLFxcbiAgICAgICAgICAgICAgICAnQWN0dWFsIENvc3QnOiAnYWN0dWFsX2Nvc3QnLFxcbiAgICAgICAgICAgICAgICAnUHJvZHVjdGlvbiBMb3NzJzogJ3Byb2R1Y3Rpb25fbG9zc19hbW91bnQnLFxcbiAgICAgICAgICAgICAgICAnUkNBJzogJ3JjYSdcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGpzb25fbWV0YTogW1xcbiAgICAgICAgICAgICAgICBbe1xcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcXFwiY2hhcnNldFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXFxcInV0Zi04XFxcIixcXG4gICAgICAgICAgICAgICAgfSxdLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgc2w6IDAsXFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGZvcm1hdERhdGUoZGF0ZXRpbWUpIHtcXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZXRpbWUpO1xcbiAgICAgICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1HQicsIHtcXG4gICAgICAgICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXFxuICAgICAgICAgICAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXFxuICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcXG4gICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxcbiAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcXG4gICAgICAgICAgICAgICAgaG91cjEyOiB0cnVlXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZm9ybWF0TGFnVGltZShsYWdUaW1lKSB7XFxuICAgICAgICAgICAgaWYgKGxhZ1RpbWUpIHtcXG4gICAgICAgICAgICAgICAgY29uc3QgcGFydHMgPSBsYWdUaW1lLnNwbGl0KFxcXCI6XFxcIik7XFxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtwYXJ0c1swXX1IOiR7cGFydHNbMV19TWA7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuICdOL0EnO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBnZXRTdGF0dXNDbGFzcyh3b3JrU3RhdHVzKSB7XFxuICAgICAgICAgICAgc3dpdGNoICh3b3JrU3RhdHVzKSB7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ1BlbmRpbmcnOlxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdwZW5kaW5nJztcXG4gICAgICAgICAgICAgICAgY2FzZSAnUHJvY2Vzc2luZyc6XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3Byb2Nlc3NpbmcnO1xcbiAgICAgICAgICAgICAgICBjYXNlICdDb21wbGV0ZWQnOlxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdjb21wbGV0ZWQnO1xcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnOyAvLyBEZWZhdWx0IG9yIGVtcHR5IGNsYXNzXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG9wZW5TaWRlTW9kYWwoKSB7XFxuICAgICAgICAgICAgdGhpcy4kcmVmcy5zaWRlYmFyTW9kYWwub3BlblNpZGVNb2RhbCgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNsb3NlU2lkZU1vZGFsKCkge1xcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuc2lkZWJhck1vZGFsLmNsb3NlU2lkZU1vZGFsKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgdmlld19zaXRlX2RldGFpbHMoZGF0YSkge1xcbiAgICAgICAgICAgIHRoaXMucG1Nb2RhbERhdGEgPSBkYXRhXFxuICAgICAgICAgICAgJCgnI01hY2hpbmVTaXRlTW9kYWwzJykubW9kYWwoJ3Nob3cnKTtcXG4gICAgICAgIH0sXFxuICAgICAgICByZXNldF9maWx0ZXIoKSB7XFxuICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSB7XFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnLFxcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9ieTogJycsXFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfZnJvbTogJycsXFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfdG86ICcnLFxcbiAgICAgICAgICAgICAgICB0YXRfZnJvbTogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIHRhdF90bzogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIGNvbXBsYWludF9uYXR1cmU6ICcnLFxcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTogJycsXFxuICAgICAgICAgICAgICAgIHRpY2tldDogJydcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgdGhpcy5nZXRSZXN1bHRzKClcXG4gICAgICAgIH0sXFxuICAgICAgICBVcGRhdGVWYWx1ZXMoZSkge1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRhdF9mcm9tID0gZS5taW5WYWx1ZTtcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC50YXRfdG8gPSBlLm1heFZhbHVlO1xcbiAgICAgICAgfSxcXG4gICAgICAgIC8vIGV4Y2VsXFxuICAgICAgICBhc3luYyBleHBvcnRfY3N2KCkge1xcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdhcGkvdGlja2V0L2V4cG9ydCcsIHtcXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdhcGkvdGlja2V0L2V4cG9ydCcpO1xcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGE7XFxuICAgICAgICB9LFxcbiAgICAgICAgc3RhcnREb3dubG9hZCgpIHtcXG4gICAgICAgICAgICB0aGlzLnNsID0gMTtcXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BsZWFzZSBXYWl0ICEnLFxcbiAgICAgICAgICAgICAgICBodG1sOiAnRGF0YSBwb3B1bGF0aW5nJywgLy8gYWRkIGh0bWwgYXR0cmlidXRlIGlmIHlvdSB3YW50IG9yIHJlbW92ZVxcbiAgICAgICAgICAgICAgICBhbGxvd091dHNpZGVDbGljazogZmFsc2UsXFxuICAgICAgICAgICAgICAgIG9uQmVmb3JlT3BlbjogKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5zaG93TG9hZGluZygpXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZmluaXNoRG93bmxvYWQoKSB7XFxuICAgICAgICAgICAgU3dhbC5jbG9zZSgpXFxuICAgICAgICB9LFxcblxcbiAgICAgICAgZ2V0TGFiZWwodmFsKSB7XFxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZmFyX25vICsgJyAtICcgKyB2YWwubmFtZTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBnZXRSZXN1bHRzKHBhZ2UgPSAxKSB7XFxuICAgICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KCk7XFxuICAgICAgICAgICAgdGhpcy5zZWFyY2gucGFnZSA9IHBhZ2VcXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvY29tcGxhaW50L2xpc3QvJyArIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCwge1xcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMuc2VhcmNoXFxuICAgICAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwiZGF0YT09PT1cXFwiLCBkYXRhLmRhdGEuZGF0YSk7XFxuXFxuICAgICAgICAgICAgICAgIHRoaXMuQ29tcGxhaW50cyA9IGRhdGEuZGF0YS5kYXRhLmNvbXBsYWludHM7XFxuXFxuICAgICAgICAgICAgICAgIHRoaXMuQ3VzdG9kaWFucyA9IGRhdGEuZGF0YS5kYXRhLmN1c3RvZGlhbnM7XFxuICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzZXMgPSBkYXRhLmRhdGEuZGF0YS5zdGF0dXNfbGlzdDtcXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplVGltZXJzKCk7XFxuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgfSxcXG4gICAgICAgIGxvYWRUaWNrZXRzKCkge1xcbiAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdygpO1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoID0ge307XFxuICAgICAgICAgICAgYXhpb3MuZ2V0KFxcXCIvYXBpL2NvbXBsYWludC9saXN0L1xcXCIgKyB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsIHtcXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxcbiAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXFxcImRhdGE9PT09PlxcXCIsIGRhdGEpO1xcblxcbiAgICAgICAgICAgICAgICB0aGlzLkNvbXBsYWludHMgPSBkYXRhLmRhdGEuZGF0YS5jb21wbGFpbnRzO1xcblxcbiAgICAgICAgICAgICAgICB0aGlzLkN1c3RvZGlhbnMgPSBkYXRhLmRhdGEuZGF0YS5jdXN0b2RpYW5zO1xcbiAgICAgICAgICAgICAgICB0aGlzLlN0YXR1c2VzID0gZGF0YS5kYXRhLmRhdGEuc3RhdHVzX2xpc3Q7XFxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVRpbWVycygpO1xcbiAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIH0sXFxuICAgICAgICByZWFkX21vcmUoeCwgcCA9ICcnKSB7XFxuICAgICAgICAgICAgaWYgKHApIHtcXG4gICAgICAgICAgICAgICAgaWYgKHAgPT0gJ3MnKSB7XFxuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMuc3RhZ2VNb3JlW3hdID8gZmFsc2UgOiB0cnVlXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5zdGFnZU1vcmUsIHgsIGEpO1xcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHAgPT0gJ3JjJykge1xcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSB0aGlzLnJjYU1vcmVbeF0gPyBmYWxzZSA6IHRydWVcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnJjYU1vcmUsIHgsIGEpO1xcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSB0aGlzLnByb2JsZW1zTW9yZVt4XSA/IGZhbHNlIDogdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucHJvYmxlbXNNb3JlLCB4LCBhKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgIGxldCBhID0gdGhpcy5hZGRpdGlvbmFsTW9yZVt4XSA/IGZhbHNlIDogdHJ1ZVxcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5hZGRpdGlvbmFsTW9yZSwgeCwgYSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGluaXRpYWxpemVUaW1lcnMoKSB7XFxuICAgICAgICAgICAgaWYgKHRoaXMuQ29tcGxhaW50cyAmJiB0aGlzLkNvbXBsYWludHMuZGF0YSAmJiB0aGlzLkNvbXBsYWludHMuZGF0YS5sZW5ndGggPiAwKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuQ29tcGxhaW50cy5kYXRhLmZvckVhY2goKHRpbWVyLCBpbmRleCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXFxcInRpbWVyXFxcIix0aW1lcik7XFxuXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGltZXIud29ya19zdGF0dXMgPT09ICdDb21wbGV0ZWQnKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXIudGltZXJfZGlzcGxheSA9ICdOL0EnO1xcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVJlbWFpbmluZ1RpbWUodGltZXIsIGluZGV4KTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJ0aGlzLkNvbXBsYWludHMuZGF0YVxcXCIsdGhpcy5Db21wbGFpbnRzLmRhdGEpO1xcblxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjYWxjdWxhdGVSZW1haW5pbmdUaW1lKHRpbWVyLCBpbmRleCkge1xcbiAgICAgICAgICAgIC8vIENvbnZlcnQgY3JlYXRlZF9hdCB0byBzZWNvbmRzXFxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZERhdGUgPSBuZXcgRGF0ZSh0aW1lci5jcmVhdGVkX2F0KTtcXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVkU2Vjb25kcyA9IGNyZWF0ZWREYXRlLmdldFRpbWUoKSAvIDEwMDA7XFxuXFxuICAgICAgICAgICAgLy8gR2V0IGN1cnJlbnQgdGltZSBpbiBzZWNvbmRzXFxuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTZWNvbmRzID0gY3VycmVudERhdGUuZ2V0VGltZSgpIC8gMTAwMDtcXG5cXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgaW4gc2Vjb25kc1xcbiAgICAgICAgICAgIGNvbnN0IGRpZmZTZWNvbmRzID0gY3VycmVudFNlY29uZHMgLSBjcmVhdGVkU2Vjb25kcztcXG5cXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRhZ190aW1lIChISDpNTTpTUykgdG8gc2Vjb25kc1xcbiAgICAgICAgICAgIGNvbnN0IHRhZ1RpbWUgPSB0aW1lci50YWdfdGltZS5zcGxpdCgnOicpO1xcbiAgICAgICAgICAgIGNvbnN0IHRhZ1NlY29uZHMgPSAoK3RhZ1RpbWVbMF0pICogMzYwMCArICgrdGFnVGltZVsxXSkgKiA2MCArICgrdGFnVGltZVsyXSk7XFxuXFxuICAgICAgICAgICAgLy8gUmVtYWluaW5nIHRpbWUgaW4gc2Vjb25kc1xcbiAgICAgICAgICAgIGxldCByZW1haW5pbmdTZWNvbmRzID0gdGFnU2Vjb25kcyAtIGRpZmZTZWNvbmRzO1xcblxcbiAgICAgICAgICAgIGlmIChyZW1haW5pbmdTZWNvbmRzID49IDApIHtcXG4gICAgICAgICAgICAgICAgLy8gQ291bnRkb3duIGlmIHRoZSB0aW1lIGlzIHN0aWxsIHJlbWFpbmluZ1xcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q291bnRkb3duKHRpbWVyLCByZW1haW5pbmdTZWNvbmRzLCBpbmRleCk7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgLy8gQ291bnQgdXAgaWYgdGhlIHRpbWUgaGFzIHBhc3NlZFxcbiAgICAgICAgICAgICAgICByZW1haW5pbmdTZWNvbmRzID0gTWF0aC5hYnMocmVtYWluaW5nU2Vjb25kcyk7XFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDb3VudFVwKHRpbWVyLCByZW1haW5pbmdTZWNvbmRzLCBpbmRleCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIHN0YXJ0Q291bnRkb3duKHRpbWVyLCBzZWNvbmRzLCBpbmRleCkge1xcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xcbiAgICAgICAgICAgICAgICBzZWNvbmRzLS07XFxuICAgICAgICAgICAgICAgIHRpbWVyLnRpbWVyX2Rpc3BsYXkgPSB0aGlzLmZvcm1hdFRpbWUoc2Vjb25kcyk7XFxuXFxuICAgICAgICAgICAgICAgIGlmIChzZWNvbmRzIDw9IDApIHtcXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xcbiAgICAgICAgICAgICAgICAgICAgdGltZXIudGltZXJfZGlzcGxheSA9ICdDb3VudGRvd24gZmluaXNoZWQnO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSwgMTAwMCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgc3RhcnRDb3VudFVwKHRpbWVyLCBzZWNvbmRzLCBpbmRleCkge1xcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xcbiAgICAgICAgICAgICAgICBzZWNvbmRzKys7XFxuICAgICAgICAgICAgICAgIHRpbWVyLnRpbWVyX2Rpc3BsYXkgPSB0aGlzLmZvcm1hdFRpbWUoc2Vjb25kcyk7XFxuICAgICAgICAgICAgfSwgMTAwMCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZm9ybWF0VGltZShzZWNvbmRzKSB7XFxuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcXG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoc2Vjb25kcyAlIDM2MDApIC8gNjApO1xcbiAgICAgICAgICAgIGNvbnN0IHNlY3MgPSBNYXRoLmZsb29yKHNlY29uZHMgJSA2MCk7XFxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMucGFkVGltZShob3Vycyl9OiR7dGhpcy5wYWRUaW1lKG1pbnV0ZXMpfToke3RoaXMucGFkVGltZShzZWNzKX1gO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHBhZFRpbWUodGltZSkge1xcbiAgICAgICAgICAgIHJldHVybiB0aW1lIDwgMTAgPyBgMCR7dGltZX1gIDogdGltZTtcXG4gICAgICAgIH1cXG5cXG4gICAgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIHRoaXMubG9hZFRpY2tldHMoKTtcXG4gICAgfSxcXG4gICAgbW91bnRlZCgpIHtcXG4gICAgICAgIC8vIEluaXRpYWwgQVBJIGNhbGwgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcXG4gICAgICAgIHRoaXMubG9hZFRpY2tldHMoKTtcXG4gICAgfSxcXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xcblxcbiAgICAgICAgYXhpb3MuZ2V0KFxcXCIvYXBpL2NvbXBsYWludC9saXN0L1xcXCIgKyB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJkYXRhPT09PT5cXFwiLCByZXNwb25zZSk7XFxuXFxuICAgICAgICAgICAgdGhpcy5Db21wbGFpbnRzID0gcmVzcG9uc2UuZGF0YS5kYXRhLmNvbXBsYWludHM7XFxuXFxuICAgICAgICAgICAgdGhpcy5DdXN0b2RpYW5zID0gcmVzcG9uc2UuZGF0YS5kYXRhLmN1c3RvZGlhbnM7XFxuICAgICAgICAgICAgdGhpcy5TdGF0dXNlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zdGF0dXNfbGlzdDtcXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVUaW1lcnMoKTtcXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybignT2guIFNvbWV0aGluZyB3ZW50IHdyb25nJykpO1xcbiAgICB9LFxcbiAgICB3YXRjaDoge1xcbiAgICAgICAgJHJvdXRlKHRvLCBmcm9tKSB7XFxuICAgICAgICAgICAgdGhpcy5sb2FkVGlja2V0cygpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGFzeW5jICdmb3JtLnN1Yl9jYXRlZ29yeV9pZCcobiwgbykge1xcbiAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBhc3luYyAnZm9ybS5zaXRlX2lkJyhuLCBvKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgICdmb3JtLmNhdGVnb3J5X2lkJzoge1xcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuLCBvKSB7XFxuXFxuICAgICAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9jb21wbGFpbnQvbGlzdC8xL1xcXCIgKyBuKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxcbiAgICAgICAgICAgIGluaXRpYWw6IHRydWVcXG4gICAgICAgIH0sXFxuXFxuICAgIH0sXFxufVxcblxcbjwvc2NyaXB0PlxcbjxzdHlsZT5cXG4ucm1vcmUge1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuLnBlbmRpbmcge1xcbiAgICBjb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ucHJvY2Vzc2luZyB7XFxuICAgIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJzaWRlYmFyLW1vZGFsXCIsIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmlzT3BlbiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIiwgb246IHsgY2xpY2s6IF92bS5jbG9zZVNpZGVNb2RhbCB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGltZXNcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjE3cHhcIiwgY29sb3I6IFwiYmxhY2tcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX3QoXCJkZWZhdWx0XCIpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBvbjogeyBjbGljazogX3ZtLmNsb3NlU2lkZU1vZGFsIH0gfSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTQ2MWE0NTg5XCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCJleHBvcnQgdmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt9XG5leHBvcnQgdmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTQ5ODQxMTNlXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ2MWE0NTg5XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2lkZUJhck1vZGFsLnZ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJhMDc3MzhkNFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ2MWE0NTg5XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2lkZUJhck1vZGFsLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDYxYTQ1ODlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaWRlQmFyTW9kYWwudnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludExpc3QudnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQ1ODVhMmUwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludExpc3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29tcGxhaW50TGlzdC52dWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludExpc3QudnVlXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbXBsYWludExpc3QudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db21wbGFpbnRMaXN0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00OTg0MTEzZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Db21wbGFpbnRMaXN0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXENvbXBsYWludExpc3QudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ5ODQxMTNlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDk4NDExM2VcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDYxYTQ1ODlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaWRlQmFyTW9kYWwudnVlXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1NpZGVCYXJNb2RhbC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1NpZGVCYXJNb2RhbC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDYxYTQ1ODlcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TaWRlQmFyTW9kYWwudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTQ2MWE0NTg5XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcU2lkZUJhck1vZGFsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NjFhNDU4OVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ2MWE0NTg5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=