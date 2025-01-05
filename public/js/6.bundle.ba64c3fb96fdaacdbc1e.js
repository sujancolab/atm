(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../InfoCard.vue */ "./resources/js/components/InfoCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    InfoCard: _InfoCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data() {
    return {
      far_details: {
        actual_material_cost: 0,
        actual_service_cost: 0,
        records: []
      },
      records: '',
      search: {
        financial_year: '',
        quarter: '',
        month: '',
        date_from: '',
        date_to: '',
        site_id: '',
        category_id: '',
        sub_category_id: '',
        machine_id: ''
      },
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      chartOptions: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91]
      }],
      //*********** */

      donutSeries: [44, 55],
      donutChartOptions: {
        colors: ['#004488', '#38c172'],
        chart: {
          id: "dnt1"
        },
        labels: ["Major", "Minor"],
        title: {
          text: "Complaint Nature",
          align: 'center'
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom',
              horizontalAlign: 'left'
            }
          }
        }],
        legend: {
          position: 'bottom',
          horizontalAlign: 'center'
        }
      },
      barCountOptions: {
        chart: {
          type: 'bar',
          height: 250,
          stacked: true
        },
        plotOptions: {
          bar: {
            horizontal: true,
            colors: ['#FF5733', '#33FF57'],
            dataLabels: {
              total: {
                enabled: true,
                offsetX: 0,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            }
          }
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        title: {
          text: undefined
        },
        xaxis: {
          categories: ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]
        },
        yaxis: {
          title: {
            text: undefined
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        }
      },
      barEquipmentOptions: {
        series: [],
        chartOptions: {
          chart: {
            id: 'equipmentChart',
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            },
            events: {
              dataPointSelection: (event, chartContext, config) => {
                console.log(chartContext);
                var categoryIndex = config.dataPointIndex;
                var far_no = this.barEquipmentOptions.chartOptions.xaxis.categories[categoryIndex];

                // axios.get('api/get_machine_for_dashboard', {
                //     params: {
                //         'far_no': far_no
                //     }
                // })
                //     .then((response) => {
                //         this.far_details = response.data.data
                //         $('#countComplaintModal').modal('show');
                //     })
                //     .catch(function (error) {
                //         console.error('There was an error!', error);
                //     });

                // You can replace the alert with your custom popup logic
                // For example, open a modal or a custom popup
              }
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 1,
              borderRadiusApplication: 'end',
              // 'around', 'end'
              borderRadiusWhenStacked: 'last',
              // 'all', 'last'
              dataLabels: {
                total: {
                  enabled: true,
                  style: {
                    fontSize: '9px',
                    fontWeight: 900
                  }
                }
              }
            }
          },
          xaxis: {
            labels: {
              rotate: -45
            },
            categories: [],
            tickPlacement: 'on'
          },
          legend: {
            position: 'bottom',
            offsetY: 0
          },
          fill: {
            opacity: 1
          }
        }
      },
      //******* */

      barProjectOptions: {
        series: [],
        chartOptions: {
          chart: {
            type: 'bar',
            height: 400,
            stacked: true
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                total: {
                  enabled: true,
                  offsetX: 0,
                  style: {
                    fontSize: '13px',
                    fontWeight: 900
                  }
                }
              }
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          xaxis: {
            categories: []
          },
          fill: {
            opacity: 1
          },
          legend: {
            show: false,
            position: 'bottom',
            offsetX: 0,
            offsetY: 0
          }
        }
      },
      financial_years: [],
      search_machines: [],
      search_sites: [],
      search_tickets: [],
      categories: [],
      sub_categories: [],
      sites: [],
      machines: [],
      totalTickets: 0,
      pendingTickets: 0,
      flmPending: 0,
      slmPending: 0,
      joinedPending: 0,
      processingTickets: 0,
      flmProcessing: 0,
      slmProcessing: 0,
      joinedProcessing: 0,
      newTickets: 0,
      closedTickets: 0,
      authUser: localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : null,
      userRole: ""
    };
  },
  updated: function () {
    this.$nextTick(function () {
      // this.asign_graphs();
    });
    this.getDashboard();
  },
  watch: {
    'search.quarter'(n) {
      if (n) {
        this.search.date_from = '';
        this.search.date_to = '';
        this.search.month = '';
      }
    },
    'search.date_from'(n) {
      if (n) {
        this.search.month = '';
        this.search.quarter = '';
      }
    },
    'search.date_to'(n) {
      if (n) {
        this.search.month = '';
        this.search.quarter = '';
      }
    },
    'search.month'(n) {
      if (n) {
        this.search.date_from = '';
        this.search.date_to = '';
        this.search.quarter = '';
      }
    },
    search: {
      handler: function (n) {
        axios.post('api/dashboard', this.search).then(res => {
          this.records = res.data.data;
          this.barEquipmentOptions.chartOptions.xaxis.categories = res.data.data.EquipmentChart.series;
          this.barEquipmentOptions.series = res.data.data.EquipmentChart.data;
          this.$refs.barCountChart.updateSeries(this.records.barCountChart.series, true);
          this.$refs.barCountChart.updateOptions(this.records.barCountChart.options, false, true);
        }).catch(err => {
          console.error(err);
        });
      },
      deep: true
    },
    async "search.sub_category_id"(n, o) {
      if (n) {
        this.get_machine();
      }
    },
    async "search.site_id"(n, o) {
      if (n) {
        this.get_machine();
      }
    },
    "search.category_id": {
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
  },
  created() {
    var yearsLength = 30;
    var currentYear = new Date().getFullYear();
    for (var i = 2022; i <= currentYear; i++) {
      var next = i + 1;
      var year = i + '-' + next.toString();
      this.financial_years.push(year);
    }
    this.getDashboard();
  },
  beforeCreate() {
    this.getAuth();
    this.authUser = localStorage.getItem("auth");
    console.log("auth: " + this.authUser);
    if (this.authUser) {
      this.authUser = JSON.parse(this.authUser);
      if (this.authUser.id_cms_privileges == 3) {
        this.userRole = "Client employee";
      } else if (this.authUser.id_cms_privileges == 4) {
        this.userRole = "Call Center User";
      }
    }
    axios.get('api/dashboard').then(res => {
      this.records = res.data.data;
      if (this.authUser.id_cms_privileges == 2) {
        console.log("this.records", this.records);
      } else {
        console.log("this.records", this.records);
        this.totalTickets = this.records.total_tickets;
        this.pendingTickets = this.records.pending_tickets;
        this.flmPending = this.records.flm_pending_tickets;
        this.slmPending = this.records.slm_pending_tickets;
        this.joinedPending = this.records.joined_pending_tickets;
        this.processingTickets = this.records.processing_tickets;
        this.flmProcessing = this.records.flm_processing_tickets;
        this.slmProcessing = this.records.slm_processing_tickets;
        this.joinedProcessing = this.records.joined_processing_tickets;
        this.newTickets = this.records.new_tickets;
        this.closedTickets = this.records.closed_tickets;
        this.userRole = 'Call Center User';
      }
    }).catch(err => {
      console.error(err);
    });

    // axios.get("api/get_pre_machine").then((res) => {
    //     this.categories = res.data.data.Category;
    //     this.sites = res.data.data.sites;
    // });
    // axios
    //     .get("/api/initial_ticket")
    //     .then((response) => {
    //         this.users = response.data.data.vendors;
    //         this.machines = response.data.data.machines;
    //         this.search_machines = response.data.data.machines;
    //         this.search_sites = response.data.data.sites;
    //         this.created_users = response.data.data.created_users;
    //     })
    //     .catch(() => console.warn("Oh. Something went wrong"));
  },
  mounted() {
    this.getAuth();
    this.authUser = localStorage.getItem("auth");
    if (this.authUser) {
      this.authUser = JSON.parse(this.authUser);
      if (this.authUser.id_cms_privileges == 3) {
        this.userRole = "Client employee";
      } else if (this.authUser.id_cms_privileges == 4) {
        this.userRole = "Call Center User";
      }
    }
    this.getDashboard();
    // if (this.$gate.isAdmin()) {
    //     // this.$router.push('/users').catch(() => { });
    // } else {
    //     this.$router.push("/tickets").catch(() => { });
    // }
  },
  methods: {
    getAuth() {
      axios.get('/api/account-auth').then(response => {
        console.log("response module");
        console.log(response.data.data);
        localStorage.setItem("auth", JSON.stringify(response.data.data));
        this.authUser = localStorage.getItem("auth");
        if (this.authUser) {
          this.authUser = JSON.parse(this.authUser);
        }
      }).catch(error => {
        console.error('Error fetching modules:', error);
      });
    },
    getDashboard() {
      axios.get('api/dashboard').then(res => {
        this.records = res.data.data;
        if (this.authUser.id_cms_privileges == 2) {
          console.log("this.records", this.records);
        } else {
          console.log("this.records", this.records);
          this.totalTickets = this.records.total_tickets;
          this.pendingTickets = this.records.pending_tickets;
          this.flmPending = this.records.flm_pending_tickets;
          this.slmPending = this.records.slm_pending_tickets;
          this.joinedPending = this.records.joined_pending_tickets;
          this.processingTickets = this.records.processing_tickets;
          this.flmProcessing = this.records.flm_processing_tickets;
          this.slmProcessing = this.records.slm_processing_tickets;
          this.joinedProcessing = this.records.joined_processing_tickets;
          this.newTickets = this.records.new_tickets;
          this.closedTickets = this.records.closed_tickets;
          this.userRole = 'Call Center User';
        }
      }).catch(err => {
        console.error(err);
      });
    },
    asign_graphs() {
      this.records = this.records;
      this.chartOptions = {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      };
      //*********** */
      this.donutChartOptions = {
        colors: ['#0068b9', '#0068b9ad'],
        chart: {
          id: "dnt1"
        },
        labels: ["Major", "Minor"],
        title: {
          text: "Complaint Nature",
          align: 'center'
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom',
              horizontalAlign: 'left'
            }
          }
        }],
        legend: {
          position: 'bottom',
          horizontalAlign: 'center'
        }
      };
      this.barCountOptions = {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              total: {
                enabled: true,
                offsetX: 0,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            }
          }
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        title: {
          text: 'Call Status'
        },
        xaxis: {
          categories: ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]
        },
        yaxis: {
          title: {
            text: undefined
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        }
      };
    },
    getLabel(val) {
      if (typeof val === "object") {
        return val.far_no + " - " + val.name;
      } else {
        return val;
      }
    }
    // async get_machine() {
    //     axios
    //         .get("/api/reports/machines", {
    //             params: {
    //                 site_id: this.search.site_id,
    //                 category_id: this.search.category_id,
    //                 sub_category_id: this.search.sub_category_id,
    //             },
    //         })
    //         .then((response) => {
    //             this.search_machines = response.data.data;
    //         })
    //         .catch(() => console.warn("Oh. Something went wrong"));
    // },
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/InfoCard.vue":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/InfoCard.vue ***!
  \********************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: String,
    value: Number
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-288cbc39\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-288cbc39","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.dashboard[data-v-288cbc39] {\n  background-color: #f8f9fa;\n  min-height: 100vh;\n}\n.card[data-v-288cbc39] {\n  border-radius: 10px;\n}\n.card-body[data-v-288cbc39] {\n  color: white;\n}\nh2.ticket-count[data-v-288cbc39] {\n  font-size: 4rem;\n  font-weight: bold;\n}\nh4[data-v-288cbc39] {\n  color: #333;\n}\np[data-v-288cbc39] {\n  margin: 0;\n}\n.shadow[data-v-288cbc39] {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.text-success[data-v-288cbc39] {\n  color: #28a745 !important;\n}\n", "", {"version":3,"sources":["/Users/sunitabag/Desktop/php/atm_old/atm/resources/js/components/Dashboard/resources/js/components/Dashboard/DashboardCallLockStatus.vue"],"names":[],"mappings":";AAqrBA;EACA,0BAAA;EACA,kBAAA;CACA;AAEA;EACA,oBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,gBAAA;EACA,kBAAA;CACA;AAEA;EACA,YAAA;CACA;AAEA;EACA,UAAA;CACA;AAEA;EACA,yCAAA;CACA;AAEA;EACA,0BAAA;CACA","file":"DashboardCallLockStatus.vue","sourcesContent":["<template>\n    <div class=\"container-fluid dashboard\"  v-if=\"authUser.id_cms_privileges!='2'\">\n        {{ authUser }}\n        <div class=\"row\">\n            <div class=\"col-md-4 col-sm-6 col-12\">\n                <div class=\"info-box bg-purple\">\n                    <span class=\"info-box-icon\"><i class=\"fa fa-ticket-alt\"></i></span>\n                    <div class=\"info-box-content\"><span class=\"info-box-text\">Total Tickets</span>\n                        <span class=\"info-box-number\">{{ totalTickets }}</span>\n                    </div>\n                    <router-link to=\"/complaint-list/all\" class=\"btn btn-outline-light btn-sm custom-btn\" style=\"color: black !important;\">\n                        View Details\n                    </router-link>\n                </div>\n            </div>\n            <div class=\"col-md-4 col-sm-6 col-12\">\n                <div class=\"info-box bg-danger\">\n                    <span class=\"info-box-icon\"><i class=\"fa fa-ticket-alt\"></i></span>\n                    <div class=\"info-box-content\">\n                        <span class=\"info-box-text\">Pending Tickets</span>\n                        <span class=\"info-box-number\">{{ pendingTickets }}</span>\n                        <p v-if=\"authUser.id_cms_privileges==4\">FLM: {{ flmPending }} | SLM: {{ slmPending }} | JOINED: {{ joinedPending }}</p>\n                    </div>\n                    <router-link to=\"/complaint-list/all/Pending\" class=\"btn btn-outline-light btn-sm custom-btn\" style=\"color: black !important;\">\n                        View Details\n                    </router-link>\n                </div>\n            </div>\n            <div class=\"col-md-4 col-sm-6 col-12\">\n                <div class=\"info-box bg-primary\">\n                    <span class=\"info-box-icon\"><i aria-hidden=\"true\" class=\"fa fa-ticket-alt\"></i></span>\n                    <div class=\"info-box-content\">\n                        <span class=\"info-box-text\">Processing Tickets</span>\n                        <span class=\"info-box-number\">{{ processingTickets }}</span>\n                        <p v-if=\"authUser.id_cms_privileges==4\">FLM: {{ flmProcessing }} | SLM: {{ slmProcessing }} | JOINED: {{ joinedProcessing }}</p>\n                    </div>\n                    <router-link to=\"/complaint-list/all/Processing\" class=\"btn btn-sm custom-btn\" style=\"color: black !important;\">\n                        View Details\n                    </router-link>\n                </div>\n            </div>\n        </div>\n\n        <!-- Top Row for Tickets -->\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <table class=\"table table-bordered \">\n                    <tr>\n                        <td class=\"pb-2\"><i class=\"fa fa-ticket-alt\"></i></td>\n                        <td>New Tickets</td>\n                        <td><b>{{ newTickets }}</b></td>\n                    </tr>\n                    <tr>\n                        <td class=\"pb-2\"><i class=\"fa fa-ticket-alt\"></i></td>\n                        <td>Closed Tickets</td>\n                        <td><b>{{ closedTickets }}</b></td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n\n\n\n      <!-- User Role Section -->\n      <div class=\"row justify-content-center mt-4\">\n        <div class=\"col-md-12 text-center\">\n          <p>You have logged in as <strong class=\"text-success\" v-if=\"authUser.id_cms_privileges==4\">Employee</strong> <strong class=\"text-success\" v-if=\"authUser.id_cms_privileges==3\">Client</strong></p>\n        </div>\n      </div>\n    </div>\n    <div id=\"app\" class=\"container mt-5\" v-else>\n    <div class=\"row\">\n      <InfoCard v-for=\"item in records\" :key=\"item.id\" :title=\"item.name\" :value=\"item.rows\" />\n    </div>\n  </div>\n  </template>\n\n<script>\nimport InfoCard from '../InfoCard.vue';\nexport default {\n    components: {\n    InfoCard\n  },\n    data() {\n        return {\n            far_details: {\n                actual_material_cost: 0,\n                actual_service_cost: 0,\n                records: []\n            },\n            records: '',\n            search: {\n                financial_year: '',\n                quarter: '',\n                month: '',\n                date_from: '',\n                date_to: '',\n                site_id: '',\n                category_id: '',\n                sub_category_id: '',\n                machine_id: '',\n            },\n            monthNames: [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\",\n                \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"],\n\n            chartOptions: {\n                chart: {\n                    id: \"vuechart-example\",\n                },\n                xaxis: {\n                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],\n                },\n            },\n            series: [\n                {\n                    name: \"series-1\",\n                    data: [30, 40, 35, 50, 49, 60, 70, 91],\n                },\n            ],\n\n            //*********** */\n\n            donutSeries: [44, 55],\n            donutChartOptions: {\n                colors: ['#004488', '#38c172'],\n\n                chart: {\n                    id: \"dnt1\"\n                },\n                labels: [\"Major\", \"Minor\"],\n                title: {\n                    text: \"Complaint Nature\",\n                    align: 'center',\n                },\n\n                responsive: [{\n                    breakpoint: 480,\n                    options: {\n                        chart: {\n                            width: 200\n                        },\n\n                        legend: {\n                            position: 'bottom',\n                            horizontalAlign: 'left',\n                        }\n                    }\n                }],\n                legend: {\n                    position: 'bottom',\n                    horizontalAlign: 'center',\n                }\n            },\n            barCountOptions: {\n                chart: {\n                    type: 'bar',\n                    height: 250,\n                    stacked: true,\n                },\n                plotOptions: {\n                    bar: {\n                        horizontal: true,\n                        colors: ['#FF5733', '#33FF57'],\n                        dataLabels: {\n                            total: {\n                                enabled: true,\n                                offsetX: 0,\n                                style: {\n                                    fontSize: '13px',\n                                    fontWeight: 900\n                                }\n                            }\n                        }\n                    },\n                },\n                stroke: {\n                    width: 1,\n                    colors: ['#fff']\n                },\n                title: {\n                    text: undefined\n                },\n                xaxis: {\n                    categories: [\"Quarter 1\", \"Quarter 2\", \"Quarter 3\", \"Quarter 4\"],\n\n                },\n                yaxis: {\n                    title: {\n                        text: undefined\n                    },\n                },\n\n                fill: {\n                    opacity: 1\n                },\n                legend: {\n                    position: 'top',\n                    horizontalAlign: 'left',\n                    offsetX: 40\n                }\n            },\n\n            barEquipmentOptions: {\n\n                series: [],\n                chartOptions: {\n                    chart: {\n                        id: 'equipmentChart',\n                        type: 'bar',\n                        height: 350,\n                        stacked: true,\n                        toolbar: {\n                            show: true\n                        },\n                        zoom: {\n                            enabled: true\n                        },\n                        events: {\n                            dataPointSelection: (event, chartContext, config) => {\n                                console.log(chartContext)\n                                var categoryIndex = config.dataPointIndex;\n                                var far_no = this.barEquipmentOptions.chartOptions.xaxis.categories[categoryIndex];\n\n                                // axios.get('api/get_machine_for_dashboard', {\n                                //     params: {\n                                //         'far_no': far_no\n                                //     }\n                                // })\n                                //     .then((response) => {\n                                //         this.far_details = response.data.data\n                                //         $('#countComplaintModal').modal('show');\n                                //     })\n                                //     .catch(function (error) {\n                                //         console.error('There was an error!', error);\n                                //     });\n\n                                // You can replace the alert with your custom popup logic\n                                // For example, open a modal or a custom popup\n                            }\n                        }\n                    },\n                    responsive: [{\n                        breakpoint: 480,\n                        options: {\n                            legend: {\n                                position: 'bottom',\n                                offsetX: -10,\n                                offsetY: 0\n                            }\n                        }\n                    }],\n                    plotOptions: {\n                        bar: {\n                            horizontal: false,\n                            borderRadius: 1,\n                            borderRadiusApplication: 'end', // 'around', 'end'\n                            borderRadiusWhenStacked: 'last', // 'all', 'last'\n                            dataLabels: {\n                                total: {\n                                    enabled: true,\n                                    style: {\n                                        fontSize: '9px',\n                                        fontWeight: 900\n                                    }\n                                }\n                            }\n                        },\n                    },\n                    xaxis: {\n                        labels: {\n                            rotate: -45\n                        },\n                        categories: [],\n                        tickPlacement: 'on'\n                    },\n                    legend: {\n                        position: 'bottom',\n                        offsetY: 0\n                    },\n                    fill: {\n                        opacity: 1\n                    }\n                },\n            },\n            //******* */\n\n            barProjectOptions: {\n\n                series: [],\n                chartOptions: {\n                    chart: {\n                        type: 'bar',\n                        height: 400,\n                        stacked: true,\n                    },\n                    plotOptions: {\n                    bar: {\n                        horizontal: true,\n                            dataLabels: {\n                                total: {\n                                    enabled: true,\n                                    offsetX: 0,\n                                    style: {\n                                    fontSize: '13px',\n                                    fontWeight: 900\n                                    }\n                                }\n                            }\n                        },\n                    },\n                    responsive: [{\n                        breakpoint: 480,\n                        options: {\n                            legend: {\n                                position: 'bottom',\n                                offsetX: -10,\n                                offsetY: 0\n                            }\n                        }\n                    }],\n                    xaxis: {\n                        categories: [],\n                    },\n                    fill: {\n                        opacity: 1\n                    },\n                    legend: {\n                        show: false,\n                        position: 'bottom',\n                        offsetX: 0,\n                        offsetY: 0\n                    },\n                },\n\n            },\n\n            financial_years: [],\n            search_machines: [],\n            search_sites: [],\n            search_tickets: [],\n            categories: [],\n            sub_categories: [],\n            sites: [],\n            machines: [],\n            totalTickets: 0,\n      pendingTickets: 0,\n      flmPending: 0,\n      slmPending: 0,\n      joinedPending: 0,\n      processingTickets: 0,\n      flmProcessing: 0,\n      slmProcessing: 0,\n      joinedProcessing: 0,\n      newTickets: 0,\n      closedTickets: 0,\n      authUser: localStorage.getItem(\"auth\") ? JSON.parse(localStorage.getItem(\"auth\")) : null,\n      userRole: \"\",\n\n        };\n    },\n    updated: function () {\n        this.$nextTick(function () {\n            // this.asign_graphs();\n        })\n        this.getDashboard();\n    },\n    watch: {\n        'search.quarter'(n) {\n            if (n) {\n                this.search.date_from = ''\n                this.search.date_to = ''\n                this.search.month = ''\n            }\n        },\n        'search.date_from'(n) {\n            if (n) {\n                this.search.month = ''\n                this.search.quarter = ''\n            }\n        },\n        'search.date_to'(n) {\n            if (n) {\n                this.search.month = ''\n                this.search.quarter = ''\n            }\n        },\n        'search.month'(n) {\n            if (n) {\n                this.search.date_from = ''\n                this.search.date_to = ''\n                this.search.quarter = ''\n            }\n        },\n\n        search: {\n            handler: function (n) {\n                axios.post('api/dashboard', this.search)\n                    .then(res => {\n                        this.records = res.data.data\n                        this.barEquipmentOptions.chartOptions.xaxis.categories = res.data.data.EquipmentChart.series\n                        this.barEquipmentOptions.series = res.data.data.EquipmentChart.data\n\n\n\n                        this.$refs.barCountChart.updateSeries(this.records.barCountChart.series, true)\n                        this.$refs.barCountChart.updateOptions(this.records.barCountChart.options, false, true)\n\n                    })\n                    .catch(err => {\n                        console.error(err);\n                    })\n            },\n            deep: true\n        },\n        async \"search.sub_category_id\"(n, o) {\n            if (n) {\n                this.get_machine();\n            }\n        },\n        async \"search.site_id\"(n, o) {\n            if (n) {\n                this.get_machine();\n            }\n        },\n\n        \"search.category_id\": {\n            handler: function (n, o) {\n                if (n) {\n                    axios.get(\"api/category/\" + n).then((res) => {\n                        this.sub_categories = res.data.data;\n                    });\n                    this.get_machine();\n                }\n            },\n            deep: true,\n            initial: true,\n        },\n    },\n    created() {\n        var yearsLength = 30;\n        var currentYear = new Date().getFullYear();\n        for (var i = 2022; i <= currentYear; i++) {\n            var next = i + 1;\n            var year = i + '-' + next.toString();\n            this.financial_years.push(year)\n        }\n        this.getDashboard();\n    },\n    beforeCreate() {\n        this.getAuth();\n        this.authUser=localStorage.getItem(\"auth\");\n        console.log(\"auth: \" + this.authUser);\n\n        if (this.authUser) {\n            this.authUser = JSON.parse(this.authUser);\n            if(this.authUser.id_cms_privileges==3){\n                this.userRole=\"Client employee\";\n            }else if(this.authUser.id_cms_privileges==4){\n                this.userRole=\"Call Center User\";\n            }\n        }\n        axios.get('api/dashboard')\n            .then(res => {\n                this.records = res.data.data\n                if(this.authUser.id_cms_privileges==2){\n                    console.log(\"this.records\",this.records);\n\n\n                }else{\n                        console.log(\"this.records\",this.records);\n                        this.totalTickets= this.records.total_tickets;\n                        this.pendingTickets= this.records.pending_tickets;\n                        this.flmPending= this.records.flm_pending_tickets;\n                        this.slmPending= this.records.slm_pending_tickets;\n                        this.joinedPending= this.records.joined_pending_tickets;\n                        this.processingTickets= this.records.processing_tickets;\n                        this.flmProcessing= this.records.flm_processing_tickets;\n                        this.slmProcessing= this.records.slm_processing_tickets;\n                        this.joinedProcessing= this.records.joined_processing_tickets;\n                        this.newTickets= this.records.new_tickets;\n                        this.closedTickets= this.records.closed_tickets;\n                        this.userRole= 'Call Center User';\n                }\n\n\n            })\n            .catch(err => {\n                console.error(err);\n            })\n\n\n\n\n        // axios.get(\"api/get_pre_machine\").then((res) => {\n        //     this.categories = res.data.data.Category;\n        //     this.sites = res.data.data.sites;\n        // });\n        // axios\n        //     .get(\"/api/initial_ticket\")\n        //     .then((response) => {\n        //         this.users = response.data.data.vendors;\n        //         this.machines = response.data.data.machines;\n        //         this.search_machines = response.data.data.machines;\n        //         this.search_sites = response.data.data.sites;\n        //         this.created_users = response.data.data.created_users;\n        //     })\n        //     .catch(() => console.warn(\"Oh. Something went wrong\"));\n\n\n    },\n    mounted() {\n        this.getAuth();\n\n        this.authUser=localStorage.getItem(\"auth\");\n        if (this.authUser) {\n            this.authUser = JSON.parse(this.authUser);\n            if(this.authUser.id_cms_privileges==3){\n                this.userRole=\"Client employee\";\n            }else if(this.authUser.id_cms_privileges==4){\n                this.userRole=\"Call Center User\";\n            }\n        }\n        this.getDashboard();\n        // if (this.$gate.isAdmin()) {\n        //     // this.$router.push('/users').catch(() => { });\n        // } else {\n        //     this.$router.push(\"/tickets\").catch(() => { });\n        // }\n    },\n    methods: {\n        getAuth(){\n            axios.get('/api/account-auth')\n        .then(response => {\n\n\n          console.log(\"response module\");\n          console.log(response.data.data);\n          localStorage.setItem(\"auth\", JSON.stringify(response.data.data));\n          this.authUser=localStorage.getItem(\"auth\");\n        if (this.authUser) {\n            this.authUser = JSON.parse(this.authUser);\n        }\n        })\n        .catch(error => {\n          console.error('Error fetching modules:', error);\n        });\n        },\n        getDashboard(){\n            axios.get('api/dashboard')\n            .then(res => {\n                this.records = res.data.data\n                if(this.authUser.id_cms_privileges==2){\n                    console.log(\"this.records\",this.records);\n\n\n                }else{\n                        console.log(\"this.records\",this.records);\n                        this.totalTickets= this.records.total_tickets;\n                        this.pendingTickets= this.records.pending_tickets;\n                        this.flmPending= this.records.flm_pending_tickets;\n                        this.slmPending= this.records.slm_pending_tickets;\n                        this.joinedPending= this.records.joined_pending_tickets;\n                        this.processingTickets= this.records.processing_tickets;\n                        this.flmProcessing= this.records.flm_processing_tickets;\n                        this.slmProcessing= this.records.slm_processing_tickets;\n                        this.joinedProcessing= this.records.joined_processing_tickets;\n                        this.newTickets= this.records.new_tickets;\n                        this.closedTickets= this.records.closed_tickets;\n                        this.userRole= 'Call Center User';\n                }\n\n\n            })\n            .catch(err => {\n                console.error(err);\n            })\n        },\n        asign_graphs() {\n            this.records = this.records\n            this.chartOptions = {\n                chart: {\n                    id: \"vuechart-example\",\n                },\n                xaxis: {\n                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],\n                },\n            }\n            //*********** */\n            this.donutChartOptions = {\n                colors: ['#0068b9', '#0068b9ad'],\n\n                chart: {\n                    id: \"dnt1\"\n                },\n                labels: [\"Major\", \"Minor\"],\n                title: {\n                    text: \"Complaint Nature\",\n                    align: 'center',\n                },\n\n                responsive: [{\n                    breakpoint: 480,\n                    options: {\n                        chart: {\n                            width: 200\n                        },\n\n                        legend: {\n                            position: 'bottom',\n                            horizontalAlign: 'left',\n                        }\n                    }\n                }],\n                legend: {\n                    position: 'bottom',\n                    horizontalAlign: 'center',\n                }\n            }\n\n            this.barCountOptions = {\n                chart: {\n                    type: 'bar',\n                    height: 350,\n                    stacked: true,\n                },\n                plotOptions: {\n                    bar: {\n                        horizontal: true,\n                        dataLabels: {\n                            total: {\n                                enabled: true,\n                                offsetX: 0,\n                                style: {\n                                    fontSize: '13px',\n                                    fontWeight: 900\n                                }\n                            }\n                        }\n                    },\n                },\n                stroke: {\n                    width: 1,\n                    colors: ['#fff']\n                },\n                title: {\n                    text: 'Call Status'\n                },\n                xaxis: {\n                    categories: [\"Quarter 1\", \"Quarter 2\", \"Quarter 3\", \"Quarter 4\"],\n\n                },\n                yaxis: {\n                    title: {\n                        text: undefined\n                    },\n                },\n\n                fill: {\n                    opacity: 1\n                },\n                legend: {\n                    position: 'top',\n                    horizontalAlign: 'left',\n                    offsetX: 40\n                }\n            }\n\n        },\n        getLabel(val) {\n            if (typeof val === \"object\") {\n                return val.far_no + \" - \" + val.name;\n            } else {\n                return val;\n            }\n        },\n        // async get_machine() {\n        //     axios\n        //         .get(\"/api/reports/machines\", {\n        //             params: {\n        //                 site_id: this.search.site_id,\n        //                 category_id: this.search.category_id,\n        //                 sub_category_id: this.search.sub_category_id,\n        //             },\n        //         })\n        //         .then((response) => {\n        //             this.search_machines = response.data.data;\n        //         })\n        //         .catch(() => console.warn(\"Oh. Something went wrong\"));\n        // },\n    },\n};\n</script>\n<style scoped>\n.dashboard {\n  background-color: #f8f9fa;\n  min-height: 100vh;\n}\n\n.card {\n  border-radius: 10px;\n}\n\n.card-body {\n  color: white;\n}\n\nh2.ticket-count {\n  font-size: 4rem;\n  font-weight: bold;\n}\n\nh4 {\n  color: #333;\n}\n\np {\n  margin: 0;\n}\n\n.shadow {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.text-success {\n  color: #28a745 !important;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-42c6796e\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/InfoCard.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-42c6796e","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/InfoCard.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.card[data-v-42c6796e] {\n  background-color: #e77e3a;\n  color: white;\n  text-align: center;\n  padding: 30px;\n  border-radius: 10px;\n}\n", "", {"version":3,"sources":["/Users/sunitabag/Desktop/php/atm_old/atm/resources/js/components/resources/js/components/InfoCard.vue"],"names":[],"mappings":";AAmBA;EACA,0BAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;EACA,oBAAA;CACA","file":"InfoCard.vue","sourcesContent":["<template>\n    <div class=\"col-md-3 mb-4\">\n      <div class=\"card\">\n        <h5>{{ title }}</h5>\n        <p>{{ value }}</p>\n      </div>\n    </div>\n  </template>\n\n  <script>\n  export default {\n    props: {\n      title: String,\n      value: Number\n    }\n  };\n  </script>\n\n  <style scoped>\n  .card {\n    background-color: #e77e3a;\n    color: white;\n    text-align: center;\n    padding: 30px;\n    border-radius: 10px;\n  }\n  </style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-288cbc39\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-288cbc39","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.authUser.id_cms_privileges != "2"
    ? _c("div", { staticClass: "container-fluid dashboard" }, [
        _vm._v("\n      " + _vm._s(_vm.authUser) + "\n      "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4 col-sm-6 col-12" }, [
            _c(
              "div",
              { staticClass: "info-box bg-purple" },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "info-box-content" }, [
                  _c("span", { staticClass: "info-box-text" }, [
                    _vm._v("Total Tickets")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "info-box-number" }, [
                    _vm._v(_vm._s(_vm.totalTickets))
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-outline-light btn-sm custom-btn",
                    staticStyle: { color: "black !important" },
                    attrs: { to: "/complaint-list/all" }
                  },
                  [
                    _vm._v(
                      "\n                      View Details\n                  "
                    )
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4 col-sm-6 col-12" }, [
            _c(
              "div",
              { staticClass: "info-box bg-danger" },
              [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "info-box-content" }, [
                  _c("span", { staticClass: "info-box-text" }, [
                    _vm._v("Pending Tickets")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "info-box-number" }, [
                    _vm._v(_vm._s(_vm.pendingTickets))
                  ]),
                  _vm._v(" "),
                  _vm.authUser.id_cms_privileges == 4
                    ? _c("p", [
                        _vm._v(
                          "FLM: " +
                            _vm._s(_vm.flmPending) +
                            " | SLM: " +
                            _vm._s(_vm.slmPending) +
                            " | JOINED: " +
                            _vm._s(_vm.joinedPending)
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-outline-light btn-sm custom-btn",
                    staticStyle: { color: "black !important" },
                    attrs: { to: "/complaint-list/all/Pending" }
                  },
                  [
                    _vm._v(
                      "\n                      View Details\n                  "
                    )
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4 col-sm-6 col-12" }, [
            _c(
              "div",
              { staticClass: "info-box bg-primary" },
              [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "info-box-content" }, [
                  _c("span", { staticClass: "info-box-text" }, [
                    _vm._v("Processing Tickets")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "info-box-number" }, [
                    _vm._v(_vm._s(_vm.processingTickets))
                  ]),
                  _vm._v(" "),
                  _vm.authUser.id_cms_privileges == 4
                    ? _c("p", [
                        _vm._v(
                          "FLM: " +
                            _vm._s(_vm.flmProcessing) +
                            " | SLM: " +
                            _vm._s(_vm.slmProcessing) +
                            " | JOINED: " +
                            _vm._s(_vm.joinedProcessing)
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-sm custom-btn",
                    staticStyle: { color: "black !important" },
                    attrs: { to: "/complaint-list/all/Processing" }
                  },
                  [
                    _vm._v(
                      "\n                      View Details\n                  "
                    )
                  ]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4" }, [
            _c("table", { staticClass: "table table-bordered" }, [
              _c("tr", [
                _vm._m(3),
                _vm._v(" "),
                _c("td", [_vm._v("New Tickets")]),
                _vm._v(" "),
                _c("td", [_c("b", [_vm._v(_vm._s(_vm.newTickets))])])
              ]),
              _vm._v(" "),
              _c("tr", [
                _vm._m(4),
                _vm._v(" "),
                _c("td", [_vm._v("Closed Tickets")]),
                _vm._v(" "),
                _c("td", [_c("b", [_vm._v(_vm._s(_vm.closedTickets))])])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row justify-content-center mt-4" }, [
          _c("div", { staticClass: "col-md-12 text-center" }, [
            _c("p", [
              _vm._v("You have logged in as "),
              _vm.authUser.id_cms_privileges == 4
                ? _c("strong", { staticClass: "text-success" }, [
                    _vm._v("Employee")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.authUser.id_cms_privileges == 3
                ? _c("strong", { staticClass: "text-success" }, [
                    _vm._v("Client")
                  ])
                : _vm._e()
            ])
          ])
        ])
      ])
    : _c("div", { staticClass: "container mt-5", attrs: { id: "app" } }, [
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.records, function(item) {
            return _c("InfoCard", {
              key: item.id,
              attrs: { title: item.name, value: item.rows }
            })
          }),
          1
        )
      ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "info-box-icon" }, [
      _c("i", { staticClass: "fa fa-ticket-alt" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "info-box-icon" }, [
      _c("i", { staticClass: "fa fa-ticket-alt" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "info-box-icon" }, [
      _c("i", {
        staticClass: "fa fa-ticket-alt",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "pb-2" }, [
      _c("i", { staticClass: "fa fa-ticket-alt" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "pb-2" }, [
      _c("i", { staticClass: "fa fa-ticket-alt" })
    ])
  }
]
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-42c6796e\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/InfoCard.vue":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-42c6796e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/InfoCard.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "col-md-3 mb-4" }, [
    _c("div", { staticClass: "card" }, [
      _c("h5", [_vm._v(_vm._s(_vm.title))]),
      _vm._v(" "),
      _c("p", [_vm._v(_vm._s(_vm.value))])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-288cbc39\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-288cbc39","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-288cbc39","scoped":true,"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DashboardCallLockStatus.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-288cbc39\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d38d27a0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-42c6796e\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/InfoCard.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-42c6796e","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/InfoCard.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-42c6796e","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InfoCard.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-42c6796e\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/InfoCard.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("8cc17e70", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/js/components/Dashboard/DashboardCallLockStatus.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Dashboard/DashboardCallLockStatus.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DashboardCallLockStatus_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./DashboardCallLockStatus.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_288cbc39_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DashboardCallLockStatus_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-288cbc39","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./DashboardCallLockStatus.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-288cbc39\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-288cbc39","scoped":true,"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./DashboardCallLockStatus.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-288cbc39\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-288cbc39"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DashboardCallLockStatus_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_288cbc39_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DashboardCallLockStatus_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_288cbc39_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DashboardCallLockStatus_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Dashboard/DashboardCallLockStatus.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/js/components/InfoCard.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/InfoCard.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InfoCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./InfoCard.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/InfoCard.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_42c6796e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InfoCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-42c6796e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./InfoCard.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-42c6796e\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/InfoCard.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-42c6796e","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./InfoCard.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-42c6796e\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/InfoCard.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-42c6796e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InfoCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_42c6796e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InfoCard_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_42c6796e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InfoCard_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/InfoCard.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW5mb0NhcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWU/ZGI0MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbmZvQ2FyZC52dWU/MWNhNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlP2QzNzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW5mb0NhcmQudnVlP2JlYzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZT8yNzdjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0luZm9DYXJkLnZ1ZT9iNWJiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW5mb0NhcmQudnVlIl0sIm5hbWVzIjpbImNvbXBvbmVudHMiLCJJbmZvQ2FyZCIsImRhdGEiLCJmYXJfZGV0YWlscyIsImFjdHVhbF9tYXRlcmlhbF9jb3N0IiwiYWN0dWFsX3NlcnZpY2VfY29zdCIsInJlY29yZHMiLCJzZWFyY2giLCJmaW5hbmNpYWxfeWVhciIsInF1YXJ0ZXIiLCJtb250aCIsImRhdGVfZnJvbSIsImRhdGVfdG8iLCJzaXRlX2lkIiwiY2F0ZWdvcnlfaWQiLCJzdWJfY2F0ZWdvcnlfaWQiLCJtYWNoaW5lX2lkIiwibW9udGhOYW1lcyIsImNoYXJ0T3B0aW9ucyIsImNoYXJ0IiwiaWQiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJzZXJpZXMiLCJuYW1lIiwiZG9udXRTZXJpZXMiLCJkb251dENoYXJ0T3B0aW9ucyIsImNvbG9ycyIsImxhYmVscyIsInRpdGxlIiwidGV4dCIsImFsaWduIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJvcHRpb25zIiwid2lkdGgiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImhvcml6b250YWxBbGlnbiIsImJhckNvdW50T3B0aW9ucyIsInR5cGUiLCJoZWlnaHQiLCJzdGFja2VkIiwicGxvdE9wdGlvbnMiLCJiYXIiLCJob3Jpem9udGFsIiwiZGF0YUxhYmVscyIsInRvdGFsIiwiZW5hYmxlZCIsIm9mZnNldFgiLCJzdHlsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInN0cm9rZSIsInVuZGVmaW5lZCIsInlheGlzIiwiZmlsbCIsIm9wYWNpdHkiLCJiYXJFcXVpcG1lbnRPcHRpb25zIiwidG9vbGJhciIsInNob3ciLCJ6b29tIiwiZXZlbnRzIiwiZGF0YVBvaW50U2VsZWN0aW9uIiwiZXZlbnQiLCJjaGFydENvbnRleHQiLCJjb25maWciLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcnlJbmRleCIsImRhdGFQb2ludEluZGV4IiwiZmFyX25vIiwib2Zmc2V0WSIsImJvcmRlclJhZGl1cyIsImJvcmRlclJhZGl1c0FwcGxpY2F0aW9uIiwiYm9yZGVyUmFkaXVzV2hlblN0YWNrZWQiLCJyb3RhdGUiLCJ0aWNrUGxhY2VtZW50IiwiYmFyUHJvamVjdE9wdGlvbnMiLCJmaW5hbmNpYWxfeWVhcnMiLCJzZWFyY2hfbWFjaGluZXMiLCJzZWFyY2hfc2l0ZXMiLCJzZWFyY2hfdGlja2V0cyIsInN1Yl9jYXRlZ29yaWVzIiwic2l0ZXMiLCJtYWNoaW5lcyIsInRvdGFsVGlja2V0cyIsInBlbmRpbmdUaWNrZXRzIiwiZmxtUGVuZGluZyIsInNsbVBlbmRpbmciLCJqb2luZWRQZW5kaW5nIiwicHJvY2Vzc2luZ1RpY2tldHMiLCJmbG1Qcm9jZXNzaW5nIiwic2xtUHJvY2Vzc2luZyIsImpvaW5lZFByb2Nlc3NpbmciLCJuZXdUaWNrZXRzIiwiY2xvc2VkVGlja2V0cyIsImF1dGhVc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInVzZXJSb2xlIiwidXBkYXRlZCIsIiRuZXh0VGljayIsImdldERhc2hib2FyZCIsIndhdGNoIiwic2VhcmNoLnF1YXJ0ZXIiLCJuIiwic2VhcmNoLmRhdGVfZnJvbSIsInNlYXJjaC5kYXRlX3RvIiwic2VhcmNoLm1vbnRoIiwiaGFuZGxlciIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJFcXVpcG1lbnRDaGFydCIsIiRyZWZzIiwiYmFyQ291bnRDaGFydCIsInVwZGF0ZVNlcmllcyIsInVwZGF0ZU9wdGlvbnMiLCJjYXRjaCIsImVyciIsImVycm9yIiwiZGVlcCIsInNlYXJjaC5zdWJfY2F0ZWdvcnlfaWQiLCJvIiwiZ2V0X21hY2hpbmUiLCJzZWFyY2guc2l0ZV9pZCIsImdldCIsImluaXRpYWwiLCJjcmVhdGVkIiwieWVhcnNMZW5ndGgiLCJjdXJyZW50WWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImkiLCJuZXh0IiwieWVhciIsInRvU3RyaW5nIiwicHVzaCIsImJlZm9yZUNyZWF0ZSIsImdldEF1dGgiLCJpZF9jbXNfcHJpdmlsZWdlcyIsInRvdGFsX3RpY2tldHMiLCJwZW5kaW5nX3RpY2tldHMiLCJmbG1fcGVuZGluZ190aWNrZXRzIiwic2xtX3BlbmRpbmdfdGlja2V0cyIsImpvaW5lZF9wZW5kaW5nX3RpY2tldHMiLCJwcm9jZXNzaW5nX3RpY2tldHMiLCJmbG1fcHJvY2Vzc2luZ190aWNrZXRzIiwic2xtX3Byb2Nlc3NpbmdfdGlja2V0cyIsImpvaW5lZF9wcm9jZXNzaW5nX3RpY2tldHMiLCJuZXdfdGlja2V0cyIsImNsb3NlZF90aWNrZXRzIiwibW91bnRlZCIsIm1ldGhvZHMiLCJyZXNwb25zZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhc2lnbl9ncmFwaHMiLCJnZXRMYWJlbCIsInZhbCIsInByb3BzIiwiU3RyaW5nIiwidmFsdWUiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThFQTtBQUNlO0VBQ2ZBLFVBQUE7SUFDQUM7RUFDQTtFQUNBQyxLQUFBO0lBQ0E7TUFDQUMsV0FBQTtRQUNBQyxvQkFBQTtRQUNBQyxtQkFBQTtRQUNBQyxPQUFBO01BQ0E7TUFDQUEsT0FBQTtNQUNBQyxNQUFBO1FBQ0FDLGNBQUE7UUFDQUMsT0FBQTtRQUNBQyxLQUFBO1FBQ0FDLFNBQUE7UUFDQUMsT0FBQTtRQUNBQyxPQUFBO1FBQ0FDLFdBQUE7UUFDQUMsZUFBQTtRQUNBQyxVQUFBO01BQ0E7TUFDQUMsVUFBQSwyREFDQTtNQUVBQyxZQUFBO1FBQ0FDLEtBQUE7VUFDQUMsRUFBQTtRQUNBO1FBQ0FDLEtBQUE7VUFDQUMsVUFBQTtRQUNBO01BQ0E7TUFDQUMsTUFBQSxHQUNBO1FBQ0FDLElBQUE7UUFDQXRCLElBQUE7TUFDQSxFQUNBO01BRUE7O01BRUF1QixXQUFBO01BQ0FDLGlCQUFBO1FBQ0FDLE1BQUE7UUFFQVIsS0FBQTtVQUNBQyxFQUFBO1FBQ0E7UUFDQVEsTUFBQTtRQUNBQyxLQUFBO1VBQ0FDLElBQUE7VUFDQUMsS0FBQTtRQUNBO1FBRUFDLFVBQUE7VUFDQUMsVUFBQTtVQUNBQyxPQUFBO1lBQ0FmLEtBQUE7Y0FDQWdCLEtBQUE7WUFDQTtZQUVBQyxNQUFBO2NBQ0FDLFFBQUE7Y0FDQUMsZUFBQTtZQUNBO1VBQ0E7UUFDQTtRQUNBRixNQUFBO1VBQ0FDLFFBQUE7VUFDQUMsZUFBQTtRQUNBO01BQ0E7TUFDQUMsZUFBQTtRQUNBcEIsS0FBQTtVQUNBcUIsSUFBQTtVQUNBQyxNQUFBO1VBQ0FDLE9BQUE7UUFDQTtRQUNBQyxXQUFBO1VBQ0FDLEdBQUE7WUFDQUMsVUFBQTtZQUNBbEIsTUFBQTtZQUNBbUIsVUFBQTtjQUNBQyxLQUFBO2dCQUNBQyxPQUFBO2dCQUNBQyxPQUFBO2dCQUNBQyxLQUFBO2tCQUNBQyxRQUFBO2tCQUNBQyxVQUFBO2dCQUNBO2NBQ0E7WUFDQTtVQUNBO1FBQ0E7UUFDQUMsTUFBQTtVQUNBbEIsS0FBQTtVQUNBUixNQUFBO1FBQ0E7UUFDQUUsS0FBQTtVQUNBQyxJQUFBLEVBQUF3QjtRQUNBO1FBQ0FqQyxLQUFBO1VBQ0FDLFVBQUE7UUFFQTtRQUNBaUMsS0FBQTtVQUNBMUIsS0FBQTtZQUNBQyxJQUFBLEVBQUF3QjtVQUNBO1FBQ0E7UUFFQUUsSUFBQTtVQUNBQyxPQUFBO1FBQ0E7UUFDQXJCLE1BQUE7VUFDQUMsUUFBQTtVQUNBQyxlQUFBO1VBQ0FXLE9BQUE7UUFDQTtNQUNBO01BRUFTLG1CQUFBO1FBRUFuQyxNQUFBO1FBQ0FMLFlBQUE7VUFDQUMsS0FBQTtZQUNBQyxFQUFBO1lBQ0FvQixJQUFBO1lBQ0FDLE1BQUE7WUFDQUMsT0FBQTtZQUNBaUIsT0FBQTtjQUNBQyxJQUFBO1lBQ0E7WUFDQUMsSUFBQTtjQUNBYixPQUFBO1lBQ0E7WUFDQWMsTUFBQTtjQUNBQyxrQkFBQSxFQUFBQSxDQUFBQyxLQUFBLEVBQUFDLFlBQUEsRUFBQUMsTUFBQTtnQkFDQUMsT0FBQSxDQUFBQyxHQUFBLENBQUFILFlBQUE7Z0JBQ0EsSUFBQUksYUFBQSxHQUFBSCxNQUFBLENBQUFJLGNBQUE7Z0JBQ0EsSUFBQUMsTUFBQSxRQUFBYixtQkFBQSxDQUFBeEMsWUFBQSxDQUFBRyxLQUFBLENBQUFDLFVBQUEsQ0FBQStDLGFBQUE7O2dCQUVBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBOztnQkFFQTtnQkFDQTtjQUNBO1lBQ0E7VUFDQTtVQUNBckMsVUFBQTtZQUNBQyxVQUFBO1lBQ0FDLE9BQUE7Y0FDQUUsTUFBQTtnQkFDQUMsUUFBQTtnQkFDQVksT0FBQTtnQkFDQXVCLE9BQUE7Y0FDQTtZQUNBO1VBQ0E7VUFDQTdCLFdBQUE7WUFDQUMsR0FBQTtjQUNBQyxVQUFBO2NBQ0E0QixZQUFBO2NBQ0FDLHVCQUFBO2NBQUE7Y0FDQUMsdUJBQUE7Y0FBQTtjQUNBN0IsVUFBQTtnQkFDQUMsS0FBQTtrQkFDQUMsT0FBQTtrQkFDQUUsS0FBQTtvQkFDQUMsUUFBQTtvQkFDQUMsVUFBQTtrQkFDQTtnQkFDQTtjQUNBO1lBQ0E7VUFDQTtVQUNBL0IsS0FBQTtZQUNBTyxNQUFBO2NBQ0FnRCxNQUFBO1lBQ0E7WUFDQXRELFVBQUE7WUFDQXVELGFBQUE7VUFDQTtVQUNBekMsTUFBQTtZQUNBQyxRQUFBO1lBQ0FtQyxPQUFBO1VBQ0E7VUFDQWhCLElBQUE7WUFDQUMsT0FBQTtVQUNBO1FBQ0E7TUFDQTtNQUNBOztNQUVBcUIsaUJBQUE7UUFFQXZELE1BQUE7UUFDQUwsWUFBQTtVQUNBQyxLQUFBO1lBQ0FxQixJQUFBO1lBQ0FDLE1BQUE7WUFDQUMsT0FBQTtVQUNBO1VBQ0FDLFdBQUE7WUFDQUMsR0FBQTtjQUNBQyxVQUFBO2NBQ0FDLFVBQUE7Z0JBQ0FDLEtBQUE7a0JBQ0FDLE9BQUE7a0JBQ0FDLE9BQUE7a0JBQ0FDLEtBQUE7b0JBQ0FDLFFBQUE7b0JBQ0FDLFVBQUE7a0JBQ0E7Z0JBQ0E7Y0FDQTtZQUNBO1VBQ0E7VUFDQXBCLFVBQUE7WUFDQUMsVUFBQTtZQUNBQyxPQUFBO2NBQ0FFLE1BQUE7Z0JBQ0FDLFFBQUE7Z0JBQ0FZLE9BQUE7Z0JBQ0F1QixPQUFBO2NBQ0E7WUFDQTtVQUNBO1VBQ0FuRCxLQUFBO1lBQ0FDLFVBQUE7VUFDQTtVQUNBa0MsSUFBQTtZQUNBQyxPQUFBO1VBQ0E7VUFDQXJCLE1BQUE7WUFDQXdCLElBQUE7WUFDQXZCLFFBQUE7WUFDQVksT0FBQTtZQUNBdUIsT0FBQTtVQUNBO1FBQ0E7TUFFQTtNQUVBTyxlQUFBO01BQ0FDLGVBQUE7TUFDQUMsWUFBQTtNQUNBQyxjQUFBO01BQ0E1RCxVQUFBO01BQ0E2RCxjQUFBO01BQ0FDLEtBQUE7TUFDQUMsUUFBQTtNQUNBQyxZQUFBO01BQ0FDLGNBQUE7TUFDQUMsVUFBQTtNQUNBQyxVQUFBO01BQ0FDLGFBQUE7TUFDQUMsaUJBQUE7TUFDQUMsYUFBQTtNQUNBQyxhQUFBO01BQ0FDLGdCQUFBO01BQ0FDLFVBQUE7TUFDQUMsYUFBQTtNQUNBQyxRQUFBLEVBQUFDLFlBQUEsQ0FBQUMsT0FBQSxXQUFBQyxJQUFBLENBQUFDLEtBQUEsQ0FBQUgsWUFBQSxDQUFBQyxPQUFBO01BQ0FHLFFBQUE7SUFFQTtFQUNBO0VBQ0FDLE9BQUEsV0FBQUEsQ0FBQTtJQUNBLEtBQUFDLFNBQUE7TUFDQTtJQUFBLENBQ0E7SUFDQSxLQUFBQyxZQUFBO0VBQ0E7RUFDQUMsS0FBQTtJQUNBLGdCQUFBQyxDQUFBQyxDQUFBO01BQ0EsSUFBQUEsQ0FBQTtRQUNBLEtBQUFyRyxNQUFBLENBQUFJLFNBQUE7UUFDQSxLQUFBSixNQUFBLENBQUFLLE9BQUE7UUFDQSxLQUFBTCxNQUFBLENBQUFHLEtBQUE7TUFDQTtJQUNBO0lBQ0Esa0JBQUFtRyxDQUFBRCxDQUFBO01BQ0EsSUFBQUEsQ0FBQTtRQUNBLEtBQUFyRyxNQUFBLENBQUFHLEtBQUE7UUFDQSxLQUFBSCxNQUFBLENBQUFFLE9BQUE7TUFDQTtJQUNBO0lBQ0EsZ0JBQUFxRyxDQUFBRixDQUFBO01BQ0EsSUFBQUEsQ0FBQTtRQUNBLEtBQUFyRyxNQUFBLENBQUFHLEtBQUE7UUFDQSxLQUFBSCxNQUFBLENBQUFFLE9BQUE7TUFDQTtJQUNBO0lBQ0EsY0FBQXNHLENBQUFILENBQUE7TUFDQSxJQUFBQSxDQUFBO1FBQ0EsS0FBQXJHLE1BQUEsQ0FBQUksU0FBQTtRQUNBLEtBQUFKLE1BQUEsQ0FBQUssT0FBQTtRQUNBLEtBQUFMLE1BQUEsQ0FBQUUsT0FBQTtNQUNBO0lBQ0E7SUFFQUYsTUFBQTtNQUNBeUcsT0FBQSxXQUFBQSxDQUFBSixDQUFBO1FBQ0FLLEtBQUEsQ0FBQUMsSUFBQSx1QkFBQTNHLE1BQUEsRUFDQTRHLElBQUEsQ0FBQUMsR0FBQTtVQUNBLEtBQUE5RyxPQUFBLEdBQUE4RyxHQUFBLENBQUFsSCxJQUFBLENBQUFBLElBQUE7VUFDQSxLQUFBd0QsbUJBQUEsQ0FBQXhDLFlBQUEsQ0FBQUcsS0FBQSxDQUFBQyxVQUFBLEdBQUE4RixHQUFBLENBQUFsSCxJQUFBLENBQUFBLElBQUEsQ0FBQW1ILGNBQUEsQ0FBQTlGLE1BQUE7VUFDQSxLQUFBbUMsbUJBQUEsQ0FBQW5DLE1BQUEsR0FBQTZGLEdBQUEsQ0FBQWxILElBQUEsQ0FBQUEsSUFBQSxDQUFBbUgsY0FBQSxDQUFBbkgsSUFBQTtVQUlBLEtBQUFvSCxLQUFBLENBQUFDLGFBQUEsQ0FBQUMsWUFBQSxNQUFBbEgsT0FBQSxDQUFBaUgsYUFBQSxDQUFBaEcsTUFBQTtVQUNBLEtBQUErRixLQUFBLENBQUFDLGFBQUEsQ0FBQUUsYUFBQSxNQUFBbkgsT0FBQSxDQUFBaUgsYUFBQSxDQUFBckYsT0FBQTtRQUVBLEdBQ0F3RixLQUFBLENBQUFDLEdBQUE7VUFDQXhELE9BQUEsQ0FBQXlELEtBQUEsQ0FBQUQsR0FBQTtRQUNBO01BQ0E7TUFDQUUsSUFBQTtJQUNBO0lBQ0EsOEJBQUFDLENBQUFsQixDQUFBLEVBQUFtQixDQUFBO01BQ0EsSUFBQW5CLENBQUE7UUFDQSxLQUFBb0IsV0FBQTtNQUNBO0lBQ0E7SUFDQSxzQkFBQUMsQ0FBQXJCLENBQUEsRUFBQW1CLENBQUE7TUFDQSxJQUFBbkIsQ0FBQTtRQUNBLEtBQUFvQixXQUFBO01BQ0E7SUFDQTtJQUVBO01BQ0FoQixPQUFBLFdBQUFBLENBQUFKLENBQUEsRUFBQW1CLENBQUE7UUFDQSxJQUFBbkIsQ0FBQTtVQUNBSyxLQUFBLENBQUFpQixHQUFBLG1CQUFBdEIsQ0FBQSxFQUFBTyxJQUFBLENBQUFDLEdBQUE7WUFDQSxLQUFBakMsY0FBQSxHQUFBaUMsR0FBQSxDQUFBbEgsSUFBQSxDQUFBQSxJQUFBO1VBQ0E7VUFDQSxLQUFBOEgsV0FBQTtRQUNBO01BQ0E7TUFDQUgsSUFBQTtNQUNBTSxPQUFBO0lBQ0E7RUFDQTtFQUNBQyxRQUFBO0lBQ0EsSUFBQUMsV0FBQTtJQUNBLElBQUFDLFdBQUEsT0FBQUMsSUFBQSxHQUFBQyxXQUFBO0lBQ0EsU0FBQUMsQ0FBQSxTQUFBQSxDQUFBLElBQUFILFdBQUEsRUFBQUcsQ0FBQTtNQUNBLElBQUFDLElBQUEsR0FBQUQsQ0FBQTtNQUNBLElBQUFFLElBQUEsR0FBQUYsQ0FBQSxTQUFBQyxJQUFBLENBQUFFLFFBQUE7TUFDQSxLQUFBN0QsZUFBQSxDQUFBOEQsSUFBQSxDQUFBRixJQUFBO0lBQ0E7SUFDQSxLQUFBbEMsWUFBQTtFQUNBO0VBQ0FxQyxhQUFBO0lBQ0EsS0FBQUMsT0FBQTtJQUNBLEtBQUE5QyxRQUFBLEdBQUFDLFlBQUEsQ0FBQUMsT0FBQTtJQUNBaEMsT0FBQSxDQUFBQyxHQUFBLGlCQUFBNkIsUUFBQTtJQUVBLFNBQUFBLFFBQUE7TUFDQSxLQUFBQSxRQUFBLEdBQUFHLElBQUEsQ0FBQUMsS0FBQSxNQUFBSixRQUFBO01BQ0EsU0FBQUEsUUFBQSxDQUFBK0MsaUJBQUE7UUFDQSxLQUFBMUMsUUFBQTtNQUNBLGdCQUFBTCxRQUFBLENBQUErQyxpQkFBQTtRQUNBLEtBQUExQyxRQUFBO01BQ0E7SUFDQTtJQUNBVyxLQUFBLENBQUFpQixHQUFBLGtCQUNBZixJQUFBLENBQUFDLEdBQUE7TUFDQSxLQUFBOUcsT0FBQSxHQUFBOEcsR0FBQSxDQUFBbEgsSUFBQSxDQUFBQSxJQUFBO01BQ0EsU0FBQStGLFFBQUEsQ0FBQStDLGlCQUFBO1FBQ0E3RSxPQUFBLENBQUFDLEdBQUEsc0JBQUE5RCxPQUFBO01BR0E7UUFDQTZELE9BQUEsQ0FBQUMsR0FBQSxzQkFBQTlELE9BQUE7UUFDQSxLQUFBZ0YsWUFBQSxRQUFBaEYsT0FBQSxDQUFBMkksYUFBQTtRQUNBLEtBQUExRCxjQUFBLFFBQUFqRixPQUFBLENBQUE0SSxlQUFBO1FBQ0EsS0FBQTFELFVBQUEsUUFBQWxGLE9BQUEsQ0FBQTZJLG1CQUFBO1FBQ0EsS0FBQTFELFVBQUEsUUFBQW5GLE9BQUEsQ0FBQThJLG1CQUFBO1FBQ0EsS0FBQTFELGFBQUEsUUFBQXBGLE9BQUEsQ0FBQStJLHNCQUFBO1FBQ0EsS0FBQTFELGlCQUFBLFFBQUFyRixPQUFBLENBQUFnSixrQkFBQTtRQUNBLEtBQUExRCxhQUFBLFFBQUF0RixPQUFBLENBQUFpSixzQkFBQTtRQUNBLEtBQUExRCxhQUFBLFFBQUF2RixPQUFBLENBQUFrSixzQkFBQTtRQUNBLEtBQUExRCxnQkFBQSxRQUFBeEYsT0FBQSxDQUFBbUoseUJBQUE7UUFDQSxLQUFBMUQsVUFBQSxRQUFBekYsT0FBQSxDQUFBb0osV0FBQTtRQUNBLEtBQUExRCxhQUFBLFFBQUExRixPQUFBLENBQUFxSixjQUFBO1FBQ0EsS0FBQXJELFFBQUE7TUFDQTtJQUdBLEdBQ0FvQixLQUFBLENBQUFDLEdBQUE7TUFDQXhELE9BQUEsQ0FBQXlELEtBQUEsQ0FBQUQsR0FBQTtJQUNBOztJQUtBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFHQTtFQUNBaUMsUUFBQTtJQUNBLEtBQUFiLE9BQUE7SUFFQSxLQUFBOUMsUUFBQSxHQUFBQyxZQUFBLENBQUFDLE9BQUE7SUFDQSxTQUFBRixRQUFBO01BQ0EsS0FBQUEsUUFBQSxHQUFBRyxJQUFBLENBQUFDLEtBQUEsTUFBQUosUUFBQTtNQUNBLFNBQUFBLFFBQUEsQ0FBQStDLGlCQUFBO1FBQ0EsS0FBQTFDLFFBQUE7TUFDQSxnQkFBQUwsUUFBQSxDQUFBK0MsaUJBQUE7UUFDQSxLQUFBMUMsUUFBQTtNQUNBO0lBQ0E7SUFDQSxLQUFBRyxZQUFBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNBO0VBQ0FvRCxPQUFBO0lBQ0FkLFFBQUE7TUFDQTlCLEtBQUEsQ0FBQWlCLEdBQUEsc0JBQ0FmLElBQUEsQ0FBQTJDLFFBQUE7UUFHQTNGLE9BQUEsQ0FBQUMsR0FBQTtRQUNBRCxPQUFBLENBQUFDLEdBQUEsQ0FBQTBGLFFBQUEsQ0FBQTVKLElBQUEsQ0FBQUEsSUFBQTtRQUNBZ0csWUFBQSxDQUFBNkQsT0FBQSxTQUFBM0QsSUFBQSxDQUFBNEQsU0FBQSxDQUFBRixRQUFBLENBQUE1SixJQUFBLENBQUFBLElBQUE7UUFDQSxLQUFBK0YsUUFBQSxHQUFBQyxZQUFBLENBQUFDLE9BQUE7UUFDQSxTQUFBRixRQUFBO1VBQ0EsS0FBQUEsUUFBQSxHQUFBRyxJQUFBLENBQUFDLEtBQUEsTUFBQUosUUFBQTtRQUNBO01BQ0EsR0FDQXlCLEtBQUEsQ0FBQUUsS0FBQTtRQUNBekQsT0FBQSxDQUFBeUQsS0FBQSw0QkFBQUEsS0FBQTtNQUNBO0lBQ0E7SUFDQW5CLGFBQUE7TUFDQVEsS0FBQSxDQUFBaUIsR0FBQSxrQkFDQWYsSUFBQSxDQUFBQyxHQUFBO1FBQ0EsS0FBQTlHLE9BQUEsR0FBQThHLEdBQUEsQ0FBQWxILElBQUEsQ0FBQUEsSUFBQTtRQUNBLFNBQUErRixRQUFBLENBQUErQyxpQkFBQTtVQUNBN0UsT0FBQSxDQUFBQyxHQUFBLHNCQUFBOUQsT0FBQTtRQUdBO1VBQ0E2RCxPQUFBLENBQUFDLEdBQUEsc0JBQUE5RCxPQUFBO1VBQ0EsS0FBQWdGLFlBQUEsUUFBQWhGLE9BQUEsQ0FBQTJJLGFBQUE7VUFDQSxLQUFBMUQsY0FBQSxRQUFBakYsT0FBQSxDQUFBNEksZUFBQTtVQUNBLEtBQUExRCxVQUFBLFFBQUFsRixPQUFBLENBQUE2SSxtQkFBQTtVQUNBLEtBQUExRCxVQUFBLFFBQUFuRixPQUFBLENBQUE4SSxtQkFBQTtVQUNBLEtBQUExRCxhQUFBLFFBQUFwRixPQUFBLENBQUErSSxzQkFBQTtVQUNBLEtBQUExRCxpQkFBQSxRQUFBckYsT0FBQSxDQUFBZ0osa0JBQUE7VUFDQSxLQUFBMUQsYUFBQSxRQUFBdEYsT0FBQSxDQUFBaUosc0JBQUE7VUFDQSxLQUFBMUQsYUFBQSxRQUFBdkYsT0FBQSxDQUFBa0osc0JBQUE7VUFDQSxLQUFBMUQsZ0JBQUEsUUFBQXhGLE9BQUEsQ0FBQW1KLHlCQUFBO1VBQ0EsS0FBQTFELFVBQUEsUUFBQXpGLE9BQUEsQ0FBQW9KLFdBQUE7VUFDQSxLQUFBMUQsYUFBQSxRQUFBMUYsT0FBQSxDQUFBcUosY0FBQTtVQUNBLEtBQUFyRCxRQUFBO1FBQ0E7TUFHQSxHQUNBb0IsS0FBQSxDQUFBQyxHQUFBO1FBQ0F4RCxPQUFBLENBQUF5RCxLQUFBLENBQUFELEdBQUE7TUFDQTtJQUNBO0lBQ0FzQyxhQUFBO01BQ0EsS0FBQTNKLE9BQUEsUUFBQUEsT0FBQTtNQUNBLEtBQUFZLFlBQUE7UUFDQUMsS0FBQTtVQUNBQyxFQUFBO1FBQ0E7UUFDQUMsS0FBQTtVQUNBQyxVQUFBO1FBQ0E7TUFDQTtNQUNBO01BQ0EsS0FBQUksaUJBQUE7UUFDQUMsTUFBQTtRQUVBUixLQUFBO1VBQ0FDLEVBQUE7UUFDQTtRQUNBUSxNQUFBO1FBQ0FDLEtBQUE7VUFDQUMsSUFBQTtVQUNBQyxLQUFBO1FBQ0E7UUFFQUMsVUFBQTtVQUNBQyxVQUFBO1VBQ0FDLE9BQUE7WUFDQWYsS0FBQTtjQUNBZ0IsS0FBQTtZQUNBO1lBRUFDLE1BQUE7Y0FDQUMsUUFBQTtjQUNBQyxlQUFBO1lBQ0E7VUFDQTtRQUNBO1FBQ0FGLE1BQUE7VUFDQUMsUUFBQTtVQUNBQyxlQUFBO1FBQ0E7TUFDQTtNQUVBLEtBQUFDLGVBQUE7UUFDQXBCLEtBQUE7VUFDQXFCLElBQUE7VUFDQUMsTUFBQTtVQUNBQyxPQUFBO1FBQ0E7UUFDQUMsV0FBQTtVQUNBQyxHQUFBO1lBQ0FDLFVBQUE7WUFDQUMsVUFBQTtjQUNBQyxLQUFBO2dCQUNBQyxPQUFBO2dCQUNBQyxPQUFBO2dCQUNBQyxLQUFBO2tCQUNBQyxRQUFBO2tCQUNBQyxVQUFBO2dCQUNBO2NBQ0E7WUFDQTtVQUNBO1FBQ0E7UUFDQUMsTUFBQTtVQUNBbEIsS0FBQTtVQUNBUixNQUFBO1FBQ0E7UUFDQUUsS0FBQTtVQUNBQyxJQUFBO1FBQ0E7UUFDQVQsS0FBQTtVQUNBQyxVQUFBO1FBRUE7UUFDQWlDLEtBQUE7VUFDQTFCLEtBQUE7WUFDQUMsSUFBQSxFQUFBd0I7VUFDQTtRQUNBO1FBRUFFLElBQUE7VUFDQUMsT0FBQTtRQUNBO1FBQ0FyQixNQUFBO1VBQ0FDLFFBQUE7VUFDQUMsZUFBQTtVQUNBVyxPQUFBO1FBQ0E7TUFDQTtJQUVBO0lBQ0FpSCxTQUFBQyxHQUFBO01BQ0EsV0FBQUEsR0FBQTtRQUNBLE9BQUFBLEdBQUEsQ0FBQTVGLE1BQUEsV0FBQTRGLEdBQUEsQ0FBQTNJLElBQUE7TUFDQTtRQUNBLE9BQUEySSxHQUFBO01BQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4cUJEO0VBQ0FDLEtBQUE7SUFDQXZJLEtBQUEsRUFBQXdJLE1BQUE7SUFDQUMsS0FBQSxFQUFBQztFQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7QUNmQSwyQkFBMkIsbUJBQU8sQ0FBQyxzR0FBcUQ7QUFDeEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGtDQUFrQyw4QkFBOEIsc0JBQXNCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLCtCQUErQixpQkFBaUIsR0FBRyxvQ0FBb0Msb0JBQW9CLHNCQUFzQixHQUFHLHVCQUF1QixnQkFBZ0IsR0FBRyxzQkFBc0IsY0FBYyxHQUFHLDRCQUE0Qiw2Q0FBNkMsR0FBRyxrQ0FBa0MsOEJBQThCLEdBQUcsVUFBVSwyTEFBMkwsT0FBTyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyw2S0FBNkssWUFBWSx3WUFBd1ksZ0JBQWdCLG1MQUFtTCxnZ0JBQWdnQixrQkFBa0Isa0ZBQWtGLGNBQWMsVUFBVSxjQUFjLGFBQWEsaUJBQWlCLHdMQUF3TCx5aEJBQXloQixxQkFBcUIsa0ZBQWtGLGlCQUFpQixVQUFVLGlCQUFpQixhQUFhLG9CQUFvQix5S0FBeUssNGVBQTRlLGNBQWMsc09BQXNPLGlCQUFpQixrd0JBQWt3QixrQkFBa0IsbUJBQW1CLG1CQUFtQixlQUFlLGtCQUFrQiw0QkFBNEIsK0hBQStILGtEQUFrRCxtVEFBbVQsOE5BQThOLDBCQUEwQixrRUFBa0UsMkJBQTJCLHNHQUFzRyxnQkFBZ0IsMkNBQTJDLHlIQUF5SCx5SEFBeUgsNkVBQTZFLHFEQUFxRCw0RUFBNEUsMEdBQTBHLG1DQUFtQyxzRUFBc0Usa0NBQWtDLG1FQUFtRSxzQ0FBc0Msa0lBQWtJLHVCQUF1QixtQkFBbUIsNkJBQTZCLDRHQUE0RyxlQUFlLGlDQUFpQywwQkFBMEIsMkhBQTJILGlDQUFpQyw0QkFBNEIsMklBQTJJLHNDQUFzQyx1SUFBdUksK0lBQStJLCtCQUErQiwyQkFBMkIsdUJBQXVCLG9CQUFvQiw0QkFBNEIsd0ZBQXdGLDJCQUEyQix3REFBd0QsMkJBQTJCLG9IQUFvSCwyQkFBMkIsOEJBQThCLGdFQUFnRSxvQkFBb0IsNEJBQTRCLG1EQUFtRCw0QkFBNEIsd0lBQXdJLGVBQWUsdUNBQXVDLGdFQUFnRSw4QkFBOEIsdU1BQXVNLG1FQUFtRSxrQ0FBa0Msc0VBQXNFLG9DQUFvQyxvRkFBb0YsdUlBQXVJLHFIQUFxSCxtRkFBbUYsa0RBQWtELHVHQUF1RyxzQ0FBc0MsK0RBQStELHVLQUF1SywwQ0FBMEMsbUVBQW1FLHlGQUF5RiwwQ0FBMEMsRUFBRSw0TUFBNE0sMkJBQTJCLHVCQUF1QixxQ0FBcUMsOEVBQThFLHVDQUF1QywrS0FBK0ssMkJBQTJCLHVCQUF1QixzQ0FBc0MsZ0NBQWdDLHdTQUF3UywwQ0FBMEMsa0dBQWtHLDBKQUEwSixtQ0FBbUMsK0JBQStCLDJCQUEyQix3QkFBd0IsK0JBQStCLG1DQUFtQyxvRUFBb0UsOEdBQThHLGdDQUFnQyx3R0FBd0csOEJBQThCLDJEQUEyRCxtQkFBbUIsZ0JBQWdCLCtEQUErRCxnRUFBZ0UsOEJBQThCLDJJQUEySSxxQ0FBcUMsNEJBQTRCLHNGQUFzRiwwQ0FBMEMsbUpBQW1KLG1KQUFtSixtQ0FBbUMsK0JBQStCLDJCQUEyQix3QkFBd0IscUNBQXFDLDhFQUE4RSx1Q0FBdUMsK0tBQStLLDJCQUEyQix1QkFBdUIsZ0NBQWdDLGdFQUFnRSw4QkFBOEIsMkRBQTJELGdDQUFnQyxtTEFBbUwsb0JBQW9CLGtCQUFrQix5cEJBQXlwQixPQUFPLDZCQUE2QixzQ0FBc0MscUNBQXFDLFdBQVcsK0JBQStCLE9BQU8sZUFBZSwrQkFBK0Isc0JBQXNCLDZJQUE2SSxXQUFXLGtDQUFrQyxzQkFBc0IsaUdBQWlHLFdBQVcsZ0NBQWdDLHNCQUFzQixpR0FBaUcsV0FBVyw4QkFBOEIsc0JBQXNCLCtJQUErSSxXQUFXLHNCQUFzQixxQ0FBcUMsOEZBQThGLGlnQkFBaWdCLHNDQUFzQyw2Q0FBNkMsdUJBQXVCLGdCQUFnQixvQ0FBb0MsbURBQW1ELHNCQUFzQixxQ0FBcUMsZUFBZSxXQUFXLDJDQUEyQyxzQkFBc0IscUNBQXFDLGVBQWUsV0FBVyxzQ0FBc0Msd0NBQXdDLDBCQUEwQixzRUFBc0UsOERBQThELHVCQUF1QixFQUFFLHlDQUF5QyxtQkFBbUIsZUFBZSxpRUFBaUUsUUFBUSxrQkFBa0IsK0JBQStCLHFEQUFxRCw0QkFBNEIsa0JBQWtCLE9BQU8sK0JBQStCLG1EQUFtRCx3REFBd0QsOEJBQThCLE9BQU8sdUJBQXVCLHlCQUF5Qix1REFBdUQsa0RBQWtELGdDQUFnQyx3REFBd0QscURBQXFELG9EQUFvRCxlQUFlLDRDQUE0QyxxREFBcUQsZUFBZSxXQUFXLGdFQUFnRSx1R0FBdUcsaUVBQWlFLHVCQUF1QixLQUFLLHFFQUFxRSx3RUFBd0UsNEVBQTRFLDRFQUE0RSw0RUFBNEUsa0ZBQWtGLGtGQUFrRixrRkFBa0Ysa0ZBQWtGLHdGQUF3RixvRUFBb0UsMEVBQTBFLDREQUE0RCxtQkFBbUIsbUJBQW1CLDhCQUE4QixxQ0FBcUMsZUFBZSx3RUFBd0UsMERBQTBELGtEQUFrRCxjQUFjLEVBQUUsc0dBQXNHLDZEQUE2RCxpRUFBaUUsd0VBQXdFLGtFQUFrRSwyRUFBMkUsa0JBQWtCLDJFQUEyRSxXQUFXLGtCQUFrQix5QkFBeUIseURBQXlELDhCQUE4Qix3REFBd0QscURBQXFELG9EQUFvRCxlQUFlLDRDQUE0QyxxREFBcUQsZUFBZSxXQUFXLDhCQUE4Qix3Q0FBd0MsNkRBQTZELEVBQUUsRUFBRSxjQUFjLE9BQU8sOERBQThELEVBQUUsRUFBRSxjQUFjLE9BQU8saUJBQWlCLG9CQUFvQix5RUFBeUUsaURBQWlELDRDQUE0QywrRUFBK0UseURBQXlELDhCQUE4Qix3REFBd0QsV0FBVyxXQUFXLDRCQUE0Qiw0REFBNEQsV0FBVyxFQUFFLFdBQVcsMEJBQTBCLG9FQUFvRSx1R0FBdUcsaUVBQWlFLHVCQUF1QixLQUFLLHFFQUFxRSx3RUFBd0UsNEVBQTRFLDRFQUE0RSw0RUFBNEUsa0ZBQWtGLGtGQUFrRixrRkFBa0Ysa0ZBQWtGLHdGQUF3RixvRUFBb0UsMEVBQTBFLDREQUE0RCxtQkFBbUIsbUJBQW1CLDhCQUE4QixxQ0FBcUMsZUFBZSxZQUFZLDJCQUEyQiw0RUFBNEUsMEJBQTBCLGtFQUFrRSwyQkFBMkIsc0dBQXNHLGdCQUFnQixzRUFBc0UsK0VBQStFLHFEQUFxRCw0RUFBNEUsMEdBQTBHLG1DQUFtQyxzRUFBc0Usa0NBQWtDLG1FQUFtRSxzQ0FBc0Msa0lBQWtJLHVCQUF1QixtQkFBbUIsNkJBQTZCLDRHQUE0RyxlQUFlLHdDQUF3QywwQkFBMEIsMkhBQTJILGlDQUFpQyw0QkFBNEIsa0ZBQWtGLHNDQUFzQyx1SUFBdUksK0lBQStJLCtCQUErQiwyQkFBMkIsdUJBQXVCLG9CQUFvQiw0QkFBNEIsd0ZBQXdGLDJCQUEyQiw0REFBNEQsMkJBQTJCLG9IQUFvSCwyQkFBMkIsOEJBQThCLGdFQUFnRSxvQkFBb0IsNEJBQTRCLG1EQUFtRCw0QkFBNEIsd0lBQXdJLGVBQWUsYUFBYSwwQkFBMEIsOENBQThDLHlEQUF5RCxlQUFlLE9BQU8sNkJBQTZCLGVBQWUsV0FBVyxtQ0FBbUMsNEVBQTRFLGtDQUFrQyxnT0FBZ08sdUJBQXVCLDJDQUEyQyxtRUFBbUUsc0JBQXNCLCtFQUErRSxjQUFjLFFBQVEsS0FBSyx5Q0FBeUMsOEJBQThCLHNCQUFzQixHQUFHLFdBQVcsd0JBQXdCLEdBQUcsZ0JBQWdCLGlCQUFpQixHQUFHLHFCQUFxQixvQkFBb0Isc0JBQXNCLEdBQUcsUUFBUSxnQkFBZ0IsR0FBRyxPQUFPLGNBQWMsR0FBRyxhQUFhLDZDQUE2QyxHQUFHLG1CQUFtQiw4QkFBOEIsR0FBRywrQkFBK0I7O0FBRXRpMEI7Ozs7Ozs7Ozs7OztBQ1BBLDJCQUEyQixtQkFBTyxDQUFDLG1HQUFrRDtBQUNyRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsNkJBQTZCLDhCQUE4QixpQkFBaUIsdUJBQXVCLGtCQUFrQix3QkFBd0IsR0FBRyxVQUFVLHdKQUF3SixNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyx3SUFBd0ksU0FBUyxvQkFBb0IsU0FBUywrRUFBK0UsY0FBYyxrREFBa0QsTUFBTSw0Q0FBNEMsZ0NBQWdDLG1CQUFtQix5QkFBeUIsb0JBQW9CLDBCQUEwQixLQUFLLGlDQUFpQzs7QUFFbjVCOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyQ0FBMkM7QUFDNUQ7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQ0FBa0M7QUFDN0QsOEJBQThCLCtCQUErQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUNBQWlDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNEJBQTRCO0FBQzlELDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQ0FBa0M7QUFDN0QsOEJBQThCLCtCQUErQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUNBQWlDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw0QkFBNEI7QUFDOUQsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBO0FBQ0EsZUFBZSxxQ0FBcUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtDQUFrQztBQUM3RCw4QkFBOEIsK0JBQStCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpQ0FBaUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDRCQUE0QjtBQUM5RCw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEMscUJBQXFCLDBCQUEwQjtBQUMvQyx5QkFBeUIsc0NBQXNDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFpRDtBQUNwRSxxQkFBcUIsdUNBQXVDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw4QkFBOEI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw4QkFBOEI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsd0NBQXdDLFlBQVksRUFBRTtBQUN2RTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLCtCQUErQjtBQUN0RCxlQUFlLGtDQUFrQztBQUNqRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwrQkFBK0I7QUFDdEQsZUFBZSxrQ0FBa0M7QUFDakQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsK0JBQStCO0FBQ3REO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQyxlQUFlLGtDQUFrQztBQUNqRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0MsZUFBZSxrQ0FBa0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDa0M7QUFDbEMsSUFBSSxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbFBoQjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQkFBK0I7QUFDbkQsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQztBQUNsQyxJQUFJLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ2ZoQjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyx5bUJBQWlVO0FBQ3ZWO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxnSUFBbUU7QUFDckYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNYZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyx3akJBQXlTO0FBQy9UO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw2SEFBZ0U7QUFDbEYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDWGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1CQUFPLENBQUMsNm9CQUEwUztBQUNwVDtBQUNBO0FBQ2lJO0FBQ2E7QUFDOUk7QUFDK1Y7QUFDL1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzRztBQUN0RyxnQkFBZ0IseUdBQWtCO0FBQ2xDLEVBQUUsMElBQWM7QUFDaEIsRUFBRSxpUEFBYztBQUNoQixFQUFFLDBQQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWFYOztBQUVVLGdGQUFpQjs7Ozs7Ozs7Ozs7OztBQzlDaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1CQUFPLENBQUMsK2xCQUFxUjtBQUMvUjtBQUNBO0FBQytHO0FBQ2E7QUFDNUg7QUFDMFU7QUFDMVU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtRztBQUNuRyxnQkFBZ0IseUdBQWtCO0FBQ2xDLEVBQUUsMkhBQWM7QUFDaEIsRUFBRSxrT0FBYztBQUNoQixFQUFFLDJPQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWFYOztBQUVVLGdGQUFpQiIsImZpbGUiOiJqcy82LmJ1bmRsZS5iYTY0YzNmYjk2ZmRhYWNkYmMxZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIGRhc2hib2FyZFwiICB2LWlmPVwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMhPScyJ1wiPlxuICAgICAgICB7eyBhdXRoVXNlciB9fVxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLXNtLTYgY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94IGJnLXB1cnBsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LWljb25cIj48aSBjbGFzcz1cImZhIGZhLXRpY2tldC1hbHRcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3gtY29udGVudFwiPjxzcGFuIGNsYXNzPVwiaW5mby1ib3gtdGV4dFwiPlRvdGFsIFRpY2tldHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LW51bWJlclwiPnt7IHRvdGFsVGlja2V0cyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9jb21wbGFpbnQtbGlzdC9hbGxcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc20gY3VzdG9tLWJ0blwiIHN0eWxlPVwiY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC1zbS02IGNvbC0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveCBiZy1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC1pY29uXCI+PGkgY2xhc3M9XCJmYSBmYS10aWNrZXQtYWx0XCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtdGV4dFwiPlBlbmRpbmcgVGlja2V0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtbnVtYmVyXCI+e3sgcGVuZGluZ1RpY2tldHMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXM9PTRcIj5GTE06IHt7IGZsbVBlbmRpbmcgfX0gfCBTTE06IHt7IHNsbVBlbmRpbmcgfX0gfCBKT0lORUQ6IHt7IGpvaW5lZFBlbmRpbmcgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvY29tcGxhaW50LWxpc3QvYWxsL1BlbmRpbmdcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc20gY3VzdG9tLWJ0blwiIHN0eWxlPVwiY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC1zbS02IGNvbC0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveCBiZy1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtaWNvblwiPjxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtdGlja2V0LWFsdFwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LXRleHRcIj5Qcm9jZXNzaW5nIFRpY2tldHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LW51bWJlclwiPnt7IHByb2Nlc3NpbmdUaWNrZXRzIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cImF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzPT00XCI+RkxNOiB7eyBmbG1Qcm9jZXNzaW5nIH19IHwgU0xNOiB7eyBzbG1Qcm9jZXNzaW5nIH19IHwgSk9JTkVEOiB7eyBqb2luZWRQcm9jZXNzaW5nIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL2NvbXBsYWludC1saXN0L2FsbC9Qcm9jZXNzaW5nXCIgY2xhc3M9XCJidG4gYnRuLXNtIGN1c3RvbS1idG5cIiBzdHlsZT1cImNvbG9yOiBibGFjayAhaW1wb3J0YW50O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBEZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBUb3AgUm93IGZvciBUaWNrZXRzIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicGItMlwiPjxpIGNsYXNzPVwiZmEgZmEtdGlja2V0LWFsdFwiPjwvaT48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk5ldyBUaWNrZXRzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48Yj57eyBuZXdUaWNrZXRzIH19PC9iPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInBiLTJcIj48aSBjbGFzcz1cImZhIGZhLXRpY2tldC1hbHRcIj48L2k+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DbG9zZWQgVGlja2V0czwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGI+e3sgY2xvc2VkVGlja2V0cyB9fTwvYj48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICA8IS0tIFVzZXIgUm9sZSBTZWN0aW9uIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxwPllvdSBoYXZlIGxvZ2dlZCBpbiBhcyA8c3Ryb25nIGNsYXNzPVwidGV4dC1zdWNjZXNzXCIgdi1pZj1cImF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzPT00XCI+RW1wbG95ZWU8L3N0cm9uZz4gPHN0cm9uZyBjbGFzcz1cInRleHQtc3VjY2Vzc1wiIHYtaWY9XCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09M1wiPkNsaWVudDwvc3Ryb25nPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwiYXBwXCIgY2xhc3M9XCJjb250YWluZXIgbXQtNVwiIHYtZWxzZT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8SW5mb0NhcmQgdi1mb3I9XCJpdGVtIGluIHJlY29yZHNcIiA6a2V5PVwiaXRlbS5pZFwiIDp0aXRsZT1cIml0ZW0ubmFtZVwiIDp2YWx1ZT1cIml0ZW0ucm93c1wiIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEluZm9DYXJkIGZyb20gJy4uL0luZm9DYXJkLnZ1ZSc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgIEluZm9DYXJkXG4gIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZhcl9kZXRhaWxzOiB7XG4gICAgICAgICAgICAgICAgYWN0dWFsX21hdGVyaWFsX2Nvc3Q6IDAsXG4gICAgICAgICAgICAgICAgYWN0dWFsX3NlcnZpY2VfY29zdDogMCxcbiAgICAgICAgICAgICAgICByZWNvcmRzOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlY29yZHM6ICcnLFxuICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgZmluYW5jaWFsX3llYXI6ICcnLFxuICAgICAgICAgICAgICAgIHF1YXJ0ZXI6ICcnLFxuICAgICAgICAgICAgICAgIG1vbnRoOiAnJyxcbiAgICAgICAgICAgICAgICBkYXRlX2Zyb206ICcnLFxuICAgICAgICAgICAgICAgIGRhdGVfdG86ICcnLFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiAnJyxcbiAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsXG4gICAgICAgICAgICAgICAgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG5cbiAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInZ1ZWNoYXJ0LWV4YW1wbGVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsxOTkxLCAxOTkyLCAxOTkzLCAxOTk0LCAxOTk1LCAxOTk2LCAxOTk3LCAxOTk4XSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzZXJpZXMtMVwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMzAsIDQwLCAzNSwgNTAsIDQ5LCA2MCwgNzAsIDkxXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcblxuICAgICAgICAgICAgLy8qKioqKioqKioqKiAqL1xuXG4gICAgICAgICAgICBkb251dFNlcmllczogWzQ0LCA1NV0sXG4gICAgICAgICAgICBkb251dENoYXJ0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNvbG9yczogWycjMDA0NDg4JywgJyMzOGMxNzInXSxcblxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImRudDFcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXCJNYWpvclwiLCBcIk1pbm9yXCJdLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ29tcGxhaW50IE5hdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYXJDb3VudE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI0ZGNTczMycsICcjMzNGRjU3J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA5MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyNmZmYnXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXCJRdWFydGVyIDFcIiwgXCJRdWFydGVyIDJcIiwgXCJRdWFydGVyIDNcIiwgXCJRdWFydGVyIDRcIl0sXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogNDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBiYXJFcXVpcG1lbnRPcHRpb25zOiB7XG5cbiAgICAgICAgICAgICAgICBzZXJpZXM6IFtdLFxuICAgICAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdlcXVpcG1lbnRDaGFydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUG9pbnRTZWxlY3Rpb246IChldmVudCwgY2hhcnRDb250ZXh0LCBjb25maWcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hhcnRDb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnlJbmRleCA9IGNvbmZpZy5kYXRhUG9pbnRJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZhcl9ubyA9IHRoaXMuYmFyRXF1aXBtZW50T3B0aW9ucy5jaGFydE9wdGlvbnMueGF4aXMuY2F0ZWdvcmllc1tjYXRlZ29yeUluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBheGlvcy5nZXQoJ2FwaS9nZXRfbWFjaGluZV9mb3JfZGFzaGJvYXJkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgJ2Zhcl9ubyc6IGZhcl9ub1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5mYXJfZGV0YWlscyA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICQoJyNjb3VudENvbXBsYWludE1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIScsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gcmVwbGFjZSB0aGUgYWxlcnQgd2l0aCB5b3VyIGN1c3RvbSBwb3B1cCBsb2dpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSwgb3BlbiBhIG1vZGFsIG9yIGEgY3VzdG9tIHBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IC0xMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzQXBwbGljYXRpb246ICdlbmQnLCAvLyAnYXJvdW5kJywgJ2VuZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXNXaGVuU3RhY2tlZDogJ2xhc3QnLCAvLyAnYWxsJywgJ2xhc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICc5cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogLTQ1XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrUGxhY2VtZW50OiAnb24nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vKioqKioqKiAqL1xuXG4gICAgICAgICAgICBiYXJQcm9qZWN0T3B0aW9uczoge1xuXG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbXSxcbiAgICAgICAgICAgICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAtMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZmluYW5jaWFsX3llYXJzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaF9tYWNoaW5lczogW10sXG4gICAgICAgICAgICBzZWFyY2hfc2l0ZXM6IFtdLFxuICAgICAgICAgICAgc2VhcmNoX3RpY2tldHM6IFtdLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICBzaXRlczogW10sXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXG4gICAgICAgICAgICB0b3RhbFRpY2tldHM6IDAsXG4gICAgICBwZW5kaW5nVGlja2V0czogMCxcbiAgICAgIGZsbVBlbmRpbmc6IDAsXG4gICAgICBzbG1QZW5kaW5nOiAwLFxuICAgICAgam9pbmVkUGVuZGluZzogMCxcbiAgICAgIHByb2Nlc3NpbmdUaWNrZXRzOiAwLFxuICAgICAgZmxtUHJvY2Vzc2luZzogMCxcbiAgICAgIHNsbVByb2Nlc3Npbmc6IDAsXG4gICAgICBqb2luZWRQcm9jZXNzaW5nOiAwLFxuICAgICAgbmV3VGlja2V0czogMCxcbiAgICAgIGNsb3NlZFRpY2tldHM6IDAsXG4gICAgICBhdXRoVXNlcjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIikpIDogbnVsbCxcbiAgICAgIHVzZXJSb2xlOiBcIlwiLFxuXG4gICAgICAgIH07XG4gICAgfSxcbiAgICB1cGRhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuYXNpZ25fZ3JhcGhzKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZ2V0RGFzaGJvYXJkKCk7XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICAnc2VhcmNoLnF1YXJ0ZXInKG4pIHtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV9mcm9tID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX3RvID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdzZWFyY2guZGF0ZV9mcm9tJyhuKSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLm1vbnRoID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5xdWFydGVyID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3NlYXJjaC5kYXRlX3RvJyhuKSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLm1vbnRoID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5xdWFydGVyID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3NlYXJjaC5tb250aCcobikge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX2Zyb20gPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfdG8gPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnF1YXJ0ZXIgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvZGFzaGJvYXJkJywgdGhpcy5zZWFyY2gpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhckVxdWlwbWVudE9wdGlvbnMuY2hhcnRPcHRpb25zLnhheGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLkVxdWlwbWVudENoYXJ0LnNlcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJFcXVpcG1lbnRPcHRpb25zLnNlcmllcyA9IHJlcy5kYXRhLmRhdGEuRXF1aXBtZW50Q2hhcnQuZGF0YVxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5iYXJDb3VudENoYXJ0LnVwZGF0ZVNlcmllcyh0aGlzLnJlY29yZHMuYmFyQ291bnRDaGFydC5zZXJpZXMsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmJhckNvdW50Q2hhcnQudXBkYXRlT3B0aW9ucyh0aGlzLnJlY29yZHMuYmFyQ291bnRDaGFydC5vcHRpb25zLCBmYWxzZSwgdHJ1ZSlcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIFwic2VhcmNoLnN1Yl9jYXRlZ29yeV9pZFwiKG4sIG8pIHtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBcInNlYXJjaC5zaXRlX2lkXCIobiwgbykge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJzZWFyY2guY2F0ZWdvcnlfaWRcIjoge1xuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcbiAgICAgICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvY2F0ZWdvcnkvXCIgKyBuKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHZhciB5ZWFyc0xlbmd0aCA9IDMwO1xuICAgICAgICB2YXIgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAyMDIyOyBpIDw9IGN1cnJlbnRZZWFyOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuZXh0ID0gaSArIDE7XG4gICAgICAgICAgICB2YXIgeWVhciA9IGkgKyAnLScgKyBuZXh0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmZpbmFuY2lhbF95ZWFycy5wdXNoKHllYXIpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXREYXNoYm9hcmQoKTtcbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5nZXRBdXRoKCk7XG4gICAgICAgIHRoaXMuYXV0aFVzZXI9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImF1dGg6IFwiICsgdGhpcy5hdXRoVXNlcik7XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0aFVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFVzZXIgPSBKU09OLnBhcnNlKHRoaXMuYXV0aFVzZXIpO1xuICAgICAgICAgICAgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09Myl7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZT1cIkNsaWVudCBlbXBsb3llZVwiO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09NCl7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZT1cIkNhbGwgQ2VudGVyIFVzZXJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBheGlvcy5nZXQoJ2FwaS9kYXNoYm9hcmQnKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09Mil7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5yZWNvcmRzXCIsdGhpcy5yZWNvcmRzKTtcblxuXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMucmVjb3Jkc1wiLHRoaXMucmVjb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsVGlja2V0cz0gdGhpcy5yZWNvcmRzLnRvdGFsX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdUaWNrZXRzPSB0aGlzLnJlY29yZHMucGVuZGluZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG1QZW5kaW5nPSB0aGlzLnJlY29yZHMuZmxtX3BlbmRpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2xtUGVuZGluZz0gdGhpcy5yZWNvcmRzLnNsbV9wZW5kaW5nX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpvaW5lZFBlbmRpbmc9IHRoaXMucmVjb3Jkcy5qb2luZWRfcGVuZGluZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nVGlja2V0cz0gdGhpcy5yZWNvcmRzLnByb2Nlc3NpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxtUHJvY2Vzc2luZz0gdGhpcy5yZWNvcmRzLmZsbV9wcm9jZXNzaW5nX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsbVByb2Nlc3Npbmc9IHRoaXMucmVjb3Jkcy5zbG1fcHJvY2Vzc2luZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qb2luZWRQcm9jZXNzaW5nPSB0aGlzLnJlY29yZHMuam9pbmVkX3Byb2Nlc3NpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3VGlja2V0cz0gdGhpcy5yZWNvcmRzLm5ld190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZWRUaWNrZXRzPSB0aGlzLnJlY29yZHMuY2xvc2VkX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlPSAnQ2FsbCBDZW50ZXIgVXNlcic7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KVxuXG5cblxuXG4gICAgICAgIC8vIGF4aW9zLmdldChcImFwaS9nZXRfcHJlX21hY2hpbmVcIikudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLkNhdGVnb3J5O1xuICAgICAgICAvLyAgICAgdGhpcy5zaXRlcyA9IHJlcy5kYXRhLmRhdGEuc2l0ZXM7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyBheGlvc1xuICAgICAgICAvLyAgICAgLmdldChcIi9hcGkvaW5pdGlhbF90aWNrZXRcIilcbiAgICAgICAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEudmVuZG9ycztcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm1hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2VhcmNoX3NpdGVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnNpdGVzO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3JlYXRlZF91c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5jcmVhdGVkX3VzZXJzO1xuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oXCJPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmdcIikpO1xuXG5cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuZ2V0QXV0aCgpO1xuXG4gICAgICAgIHRoaXMuYXV0aFVzZXI9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpO1xuICAgICAgICBpZiAodGhpcy5hdXRoVXNlcikge1xuICAgICAgICAgICAgdGhpcy5hdXRoVXNlciA9IEpTT04ucGFyc2UodGhpcy5hdXRoVXNlcik7XG4gICAgICAgICAgICBpZih0aGlzLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzPT0zKXtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlPVwiQ2xpZW50IGVtcGxveWVlXCI7XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzPT00KXtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlPVwiQ2FsbCBDZW50ZXIgVXNlclwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0RGFzaGJvYXJkKCk7XG4gICAgICAgIC8vIGlmICh0aGlzLiRnYXRlLmlzQWRtaW4oKSkge1xuICAgICAgICAvLyAgICAgLy8gdGhpcy4kcm91dGVyLnB1c2goJy91c2VycycpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi90aWNrZXRzXCIpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgIC8vIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0QXV0aCgpe1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2FjY291bnQtYXV0aCcpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcblxuXG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZSBtb2R1bGVcIik7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhcIiwgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YS5kYXRhKSk7XG4gICAgICAgICAgdGhpcy5hdXRoVXNlcj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIik7XG4gICAgICAgIGlmICh0aGlzLmF1dGhVc2VyKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGhVc2VyID0gSlNPTi5wYXJzZSh0aGlzLmF1dGhVc2VyKTtcbiAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG1vZHVsZXM6JywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RGFzaGJvYXJkKCl7XG4gICAgICAgICAgICBheGlvcy5nZXQoJ2FwaS9kYXNoYm9hcmQnKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09Mil7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5yZWNvcmRzXCIsdGhpcy5yZWNvcmRzKTtcblxuXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMucmVjb3Jkc1wiLHRoaXMucmVjb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsVGlja2V0cz0gdGhpcy5yZWNvcmRzLnRvdGFsX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdUaWNrZXRzPSB0aGlzLnJlY29yZHMucGVuZGluZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG1QZW5kaW5nPSB0aGlzLnJlY29yZHMuZmxtX3BlbmRpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2xtUGVuZGluZz0gdGhpcy5yZWNvcmRzLnNsbV9wZW5kaW5nX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpvaW5lZFBlbmRpbmc9IHRoaXMucmVjb3Jkcy5qb2luZWRfcGVuZGluZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nVGlja2V0cz0gdGhpcy5yZWNvcmRzLnByb2Nlc3NpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxtUHJvY2Vzc2luZz0gdGhpcy5yZWNvcmRzLmZsbV9wcm9jZXNzaW5nX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsbVByb2Nlc3Npbmc9IHRoaXMucmVjb3Jkcy5zbG1fcHJvY2Vzc2luZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qb2luZWRQcm9jZXNzaW5nPSB0aGlzLnJlY29yZHMuam9pbmVkX3Byb2Nlc3NpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3VGlja2V0cz0gdGhpcy5yZWNvcmRzLm5ld190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZWRUaWNrZXRzPSB0aGlzLnJlY29yZHMuY2xvc2VkX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlPSAnQ2FsbCBDZW50ZXIgVXNlcic7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBhc2lnbl9ncmFwaHMoKSB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZHMgPSB0aGlzLnJlY29yZHNcbiAgICAgICAgICAgIHRoaXMuY2hhcnRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInZ1ZWNoYXJ0LWV4YW1wbGVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsxOTkxLCAxOTkyLCAxOTkzLCAxOTk0LCAxOTk1LCAxOTk2LCAxOTk3LCAxOTk4XSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8qKioqKioqKioqKiAqL1xuICAgICAgICAgICAgdGhpcy5kb251dENoYXJ0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFsnIzAwNjhiOScsICcjMDA2OGI5YWQnXSxcblxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImRudDFcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXCJNYWpvclwiLCBcIk1pbm9yXCJdLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ29tcGxhaW50IE5hdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5iYXJDb3VudE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxuICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZmJ11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDYWxsIFN0YXR1cydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtcIlF1YXJ0ZXIgMVwiLCBcIlF1YXJ0ZXIgMlwiLCBcIlF1YXJ0ZXIgM1wiLCBcIlF1YXJ0ZXIgNFwiXSxcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiA0MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgICBnZXRMYWJlbCh2YWwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5mYXJfbm8gKyBcIiAtIFwiICsgdmFsLm5hbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGFzeW5jIGdldF9tYWNoaW5lKCkge1xuICAgICAgICAvLyAgICAgYXhpb3NcbiAgICAgICAgLy8gICAgICAgICAuZ2V0KFwiL2FwaS9yZXBvcnRzL21hY2hpbmVzXCIsIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzaXRlX2lkOiB0aGlzLnNlYXJjaC5zaXRlX2lkLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IHRoaXMuc2VhcmNoLmNhdGVnb3J5X2lkLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiB0aGlzLnNlYXJjaC5zdWJfY2F0ZWdvcnlfaWQsXG4gICAgICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zZWFyY2hfbWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFwiT2guIFNvbWV0aGluZyB3ZW50IHdyb25nXCIpKTtcbiAgICAgICAgLy8gfSxcbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbi5kYXNoYm9hcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMi50aWNrZXQtY291bnQge1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oNCB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRleHQtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBtYi00XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8aDU+e3sgdGl0bGUgfX08L2g1PlxuICAgICAgICA8cD57eyB2YWx1ZSB9fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuXG4gIDxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiBOdW1iZXJcbiAgICB9XG4gIH07XG4gIDwvc2NyaXB0PlxuXG4gIDxzdHlsZSBzY29wZWQ+XG4gIC5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc3ZTNhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIDwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRhc2hib2FyZFtkYXRhLXYtMjg4Y2JjMzldIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuLmNhcmRbZGF0YS12LTI4OGNiYzM5XSB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY2FyZC1ib2R5W2RhdGEtdi0yODhjYmMzOV0ge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5oMi50aWNrZXQtY291bnRbZGF0YS12LTI4OGNiYzM5XSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuaDRbZGF0YS12LTI4OGNiYzM5XSB7XFxuICBjb2xvcjogIzMzMztcXG59XFxucFtkYXRhLXYtMjg4Y2JjMzldIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnNoYWRvd1tkYXRhLXYtMjg4Y2JjMzldIHtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi50ZXh0LXN1Y2Nlc3NbZGF0YS12LTI4OGNiYzM5XSB7XFxuICBjb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3N1bml0YWJhZy9EZXNrdG9wL3BocC9hdG1fb2xkL2F0bS9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBcXJCQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7Q0FDQTtBQUVBO0VBQ0Esb0JBQUE7Q0FDQTtBQUVBO0VBQ0EsYUFBQTtDQUNBO0FBRUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0NBQ0E7QUFFQTtFQUNBLFlBQUE7Q0FDQTtBQUVBO0VBQ0EsVUFBQTtDQUNBO0FBRUE7RUFDQSx5Q0FBQTtDQUNBO0FBRUE7RUFDQSwwQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJEYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgZGFzaGJvYXJkXFxcIiAgdi1pZj1cXFwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMhPScyJ1xcXCI+XFxuICAgICAgICB7eyBhdXRoVXNlciB9fVxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNCBjb2wtc20tNiBjb2wtMTJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveCBiZy1wdXJwbGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LWljb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aWNrZXQtYWx0XFxcIj48L2k+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3gtY29udGVudFxcXCI+PHNwYW4gY2xhc3M9XFxcImluZm8tYm94LXRleHRcXFwiPlRvdGFsIFRpY2tldHM8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LW51bWJlclxcXCI+e3sgdG90YWxUaWNrZXRzIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XFxcIi9jb21wbGFpbnQtbGlzdC9hbGxcXFwiIGNsYXNzPVxcXCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYnRuLXNtIGN1c3RvbS1idG5cXFwiIHN0eWxlPVxcXCJjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgRGV0YWlsc1xcbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTQgY29sLXNtLTYgY29sLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3ggYmctZGFuZ2VyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC1pY29uXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdGlja2V0LWFsdFxcXCI+PC9pPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm8tYm94LWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC10ZXh0XFxcIj5QZW5kaW5nIFRpY2tldHM8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LW51bWJlclxcXCI+e3sgcGVuZGluZ1RpY2tldHMgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cXFwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXM9PTRcXFwiPkZMTToge3sgZmxtUGVuZGluZyB9fSB8IFNMTToge3sgc2xtUGVuZGluZyB9fSB8IEpPSU5FRDoge3sgam9pbmVkUGVuZGluZyB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVxcXCIvY29tcGxhaW50LWxpc3QvYWxsL1BlbmRpbmdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYnRuLXNtIGN1c3RvbS1idG5cXFwiIHN0eWxlPVxcXCJjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgRGV0YWlsc1xcbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTQgY29sLXNtLTYgY29sLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3ggYmctcHJpbWFyeVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtaWNvblxcXCI+PGkgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJmYSBmYS10aWNrZXQtYWx0XFxcIj48L2k+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3gtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LXRleHRcXFwiPlByb2Nlc3NpbmcgVGlja2V0czwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtbnVtYmVyXFxcIj57eyBwcm9jZXNzaW5nVGlja2V0cyB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVxcXCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09NFxcXCI+RkxNOiB7eyBmbG1Qcm9jZXNzaW5nIH19IHwgU0xNOiB7eyBzbG1Qcm9jZXNzaW5nIH19IHwgSk9JTkVEOiB7eyBqb2luZWRQcm9jZXNzaW5nIH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XFxcIi9jb21wbGFpbnQtbGlzdC9hbGwvUHJvY2Vzc2luZ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tc20gY3VzdG9tLWJ0blxcXCIgc3R5bGU9XFxcImNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBEZXRhaWxzXFxuICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPCEtLSBUb3AgUm93IGZvciBUaWNrZXRzIC0tPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVyZWQgXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInBiLTJcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aWNrZXQtYWx0XFxcIj48L2k+PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TmV3IFRpY2tldHM8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48Yj57eyBuZXdUaWNrZXRzIH19PC9iPjwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwicGItMlxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRpY2tldC1hbHRcXFwiPjwvaT48L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DbG9zZWQgVGlja2V0czwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxiPnt7IGNsb3NlZFRpY2tldHMgfX08L2I+PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG5cXG5cXG4gICAgICA8IS0tIFVzZXIgUm9sZSBTZWN0aW9uIC0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgPHA+WW91IGhhdmUgbG9nZ2VkIGluIGFzIDxzdHJvbmcgY2xhc3M9XFxcInRleHQtc3VjY2Vzc1xcXCIgdi1pZj1cXFwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXM9PTRcXFwiPkVtcGxveWVlPC9zdHJvbmc+IDxzdHJvbmcgY2xhc3M9XFxcInRleHQtc3VjY2Vzc1xcXCIgdi1pZj1cXFwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXM9PTNcXFwiPkNsaWVudDwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBpZD1cXFwiYXBwXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyIG10LTVcXFwiIHYtZWxzZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8SW5mb0NhcmQgdi1mb3I9XFxcIml0ZW0gaW4gcmVjb3Jkc1xcXCIgOmtleT1cXFwiaXRlbS5pZFxcXCIgOnRpdGxlPVxcXCJpdGVtLm5hbWVcXFwiIDp2YWx1ZT1cXFwiaXRlbS5yb3dzXFxcIiAvPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBJbmZvQ2FyZCBmcm9tICcuLi9JbmZvQ2FyZC52dWUnO1xcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgY29tcG9uZW50czoge1xcbiAgICBJbmZvQ2FyZFxcbiAgfSxcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgZmFyX2RldGFpbHM6IHtcXG4gICAgICAgICAgICAgICAgYWN0dWFsX21hdGVyaWFsX2Nvc3Q6IDAsXFxuICAgICAgICAgICAgICAgIGFjdHVhbF9zZXJ2aWNlX2Nvc3Q6IDAsXFxuICAgICAgICAgICAgICAgIHJlY29yZHM6IFtdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICByZWNvcmRzOiAnJyxcXG4gICAgICAgICAgICBzZWFyY2g6IHtcXG4gICAgICAgICAgICAgICAgZmluYW5jaWFsX3llYXI6ICcnLFxcbiAgICAgICAgICAgICAgICBxdWFydGVyOiAnJyxcXG4gICAgICAgICAgICAgICAgbW9udGg6ICcnLFxcbiAgICAgICAgICAgICAgICBkYXRlX2Zyb206ICcnLFxcbiAgICAgICAgICAgICAgICBkYXRlX3RvOiAnJyxcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBtb250aE5hbWVzOiBbXFxcIkphbnVhcnlcXFwiLCBcXFwiRmVicnVhcnlcXFwiLCBcXFwiTWFyY2hcXFwiLCBcXFwiQXByaWxcXFwiLCBcXFwiTWF5XFxcIiwgXFxcIkp1bmVcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiSnVseVxcXCIsIFxcXCJBdWd1c3RcXFwiLCBcXFwiU2VwdGVtYmVyXFxcIiwgXFxcIk9jdG9iZXJcXFwiLCBcXFwiTm92ZW1iZXJcXFwiLCBcXFwiRGVjZW1iZXJcXFwiXSxcXG5cXG4gICAgICAgICAgICBjaGFydE9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcXFwidnVlY2hhcnQtZXhhbXBsZVxcXCIsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbMTk5MSwgMTk5MiwgMTk5MywgMTk5NCwgMTk5NSwgMTk5NiwgMTk5NywgMTk5OF0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBzZXJpZXM6IFtcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXFxcInNlcmllcy0xXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgNDAsIDM1LCA1MCwgNDksIDYwLCA3MCwgOTFdLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIF0sXFxuXFxuICAgICAgICAgICAgLy8qKioqKioqKioqKiAqL1xcblxcbiAgICAgICAgICAgIGRvbnV0U2VyaWVzOiBbNDQsIDU1XSxcXG4gICAgICAgICAgICBkb251dENoYXJ0T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFsnIzAwNDQ4OCcsICcjMzhjMTcyJ10sXFxuXFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICBpZDogXFxcImRudDFcXFwiXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGxhYmVsczogW1xcXCJNYWpvclxcXCIsIFxcXCJNaW5vclxcXCJdLFxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXFxcIkNvbXBsYWludCBOYXR1cmVcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxcbiAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbe1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfV0sXFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnY2VudGVyJyxcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgYmFyQ291bnRPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUwLFxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyNGRjU3MzMnLCAnIzMzRkY1NyddLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZmJ11cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHVuZGVmaW5lZFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW1xcXCJRdWFydGVyIDFcXFwiLCBcXFwiUXVhcnRlciAyXFxcIiwgXFxcIlF1YXJ0ZXIgM1xcXCIsIFxcXCJRdWFydGVyIDRcXFwiXSxcXG5cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdW5kZWZpbmVkXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICBmaWxsOiB7XFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiA0MFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICBiYXJFcXVpcG1lbnRPcHRpb25zOiB7XFxuXFxuICAgICAgICAgICAgICAgIHNlcmllczogW10sXFxuICAgICAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2VxdWlwbWVudENoYXJ0JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgem9vbToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBvaW50U2VsZWN0aW9uOiAoZXZlbnQsIGNoYXJ0Q29udGV4dCwgY29uZmlnKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFydENvbnRleHQpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnlJbmRleCA9IGNvbmZpZy5kYXRhUG9pbnRJbmRleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmYXJfbm8gPSB0aGlzLmJhckVxdWlwbWVudE9wdGlvbnMuY2hhcnRPcHRpb25zLnhheGlzLmNhdGVnb3JpZXNbY2F0ZWdvcnlJbmRleF07XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBheGlvcy5nZXQoJ2FwaS9nZXRfbWFjaGluZV9mb3JfZGFzaGJvYXJkJywge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAnZmFyX25vJzogZmFyX25vXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5mYXJfZGV0YWlscyA9IHJlc3BvbnNlLmRhdGEuZGF0YVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAkKCcjY291bnRDb21wbGFpbnRNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciEnLCBlcnJvcik7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBZb3UgY2FuIHJlcGxhY2UgdGhlIGFsZXJ0IHdpdGggeW91ciBjdXN0b20gcG9wdXAgbG9naWNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBleGFtcGxlLCBvcGVuIGEgbW9kYWwgb3IgYSBjdXN0b20gcG9wdXBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogLTEwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfV0sXFxuICAgICAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhcjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXNBcHBsaWNhdGlvbjogJ2VuZCcsIC8vICdhcm91bmQnLCAnZW5kJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXNXaGVuU3RhY2tlZDogJ2xhc3QnLCAvLyAnYWxsJywgJ2xhc3QnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzlweCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAtNDVcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tQbGFjZW1lbnQ6ICdvbidcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAvLyoqKioqKiogKi9cXG5cXG4gICAgICAgICAgICBiYXJQcm9qZWN0T3B0aW9uczoge1xcblxcbiAgICAgICAgICAgICAgICBzZXJpZXM6IFtdLFxcbiAgICAgICAgICAgICAgICBjaGFydE9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IC0xMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IDBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1dLFxcbiAgICAgICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IDBcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICBmaW5hbmNpYWxfeWVhcnM6IFtdLFxcbiAgICAgICAgICAgIHNlYXJjaF9tYWNoaW5lczogW10sXFxuICAgICAgICAgICAgc2VhcmNoX3NpdGVzOiBbXSxcXG4gICAgICAgICAgICBzZWFyY2hfdGlja2V0czogW10sXFxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXFxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXM6IFtdLFxcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXFxuICAgICAgICAgICAgdG90YWxUaWNrZXRzOiAwLFxcbiAgICAgIHBlbmRpbmdUaWNrZXRzOiAwLFxcbiAgICAgIGZsbVBlbmRpbmc6IDAsXFxuICAgICAgc2xtUGVuZGluZzogMCxcXG4gICAgICBqb2luZWRQZW5kaW5nOiAwLFxcbiAgICAgIHByb2Nlc3NpbmdUaWNrZXRzOiAwLFxcbiAgICAgIGZsbVByb2Nlc3Npbmc6IDAsXFxuICAgICAgc2xtUHJvY2Vzc2luZzogMCxcXG4gICAgICBqb2luZWRQcm9jZXNzaW5nOiAwLFxcbiAgICAgIG5ld1RpY2tldHM6IDAsXFxuICAgICAgY2xvc2VkVGlja2V0czogMCxcXG4gICAgICBhdXRoVXNlcjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXFxcImF1dGhcXFwiKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXFxcImF1dGhcXFwiKSkgOiBudWxsLFxcbiAgICAgIHVzZXJSb2xlOiBcXFwiXFxcIixcXG5cXG4gICAgICAgIH07XFxuICAgIH0sXFxuICAgIHVwZGF0ZWQ6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAvLyB0aGlzLmFzaWduX2dyYXBocygpO1xcbiAgICAgICAgfSlcXG4gICAgICAgIHRoaXMuZ2V0RGFzaGJvYXJkKCk7XFxuICAgIH0sXFxuICAgIHdhdGNoOiB7XFxuICAgICAgICAnc2VhcmNoLnF1YXJ0ZXInKG4pIHtcXG4gICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX2Zyb20gPSAnJ1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX3RvID0gJydcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gubW9udGggPSAnJ1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICAnc2VhcmNoLmRhdGVfZnJvbScobikge1xcbiAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLm1vbnRoID0gJydcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gucXVhcnRlciA9ICcnXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgICdzZWFyY2guZGF0ZV90bycobikge1xcbiAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLm1vbnRoID0gJydcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gucXVhcnRlciA9ICcnXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgICdzZWFyY2gubW9udGgnKG4pIHtcXG4gICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX2Zyb20gPSAnJ1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX3RvID0gJydcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gucXVhcnRlciA9ICcnXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIHNlYXJjaDoge1xcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuKSB7XFxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2FwaS9kYXNoYm9hcmQnLCB0aGlzLnNlYXJjaClcXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRzID0gcmVzLmRhdGEuZGF0YVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyRXF1aXBtZW50T3B0aW9ucy5jaGFydE9wdGlvbnMueGF4aXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuRXF1aXBtZW50Q2hhcnQuc2VyaWVzXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJFcXVpcG1lbnRPcHRpb25zLnNlcmllcyA9IHJlcy5kYXRhLmRhdGEuRXF1aXBtZW50Q2hhcnQuZGF0YVxcblxcblxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuYmFyQ291bnRDaGFydC51cGRhdGVTZXJpZXModGhpcy5yZWNvcmRzLmJhckNvdW50Q2hhcnQuc2VyaWVzLCB0cnVlKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuYmFyQ291bnRDaGFydC51cGRhdGVPcHRpb25zKHRoaXMucmVjb3Jkcy5iYXJDb3VudENoYXJ0Lm9wdGlvbnMsIGZhbHNlLCB0cnVlKVxcblxcbiAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkZWVwOiB0cnVlXFxuICAgICAgICB9LFxcbiAgICAgICAgYXN5bmMgXFxcInNlYXJjaC5zdWJfY2F0ZWdvcnlfaWRcXFwiKG4sIG8pIHtcXG4gICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGFzeW5jIFxcXCJzZWFyY2guc2l0ZV9pZFxcXCIobiwgbykge1xcbiAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgXFxcInNlYXJjaC5jYXRlZ29yeV9pZFxcXCI6IHtcXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobiwgbykge1xcbiAgICAgICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvY2F0ZWdvcnkvXFxcIiArIG4pLnRoZW4oKHJlcykgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB2YXIgeWVhcnNMZW5ndGggPSAzMDtcXG4gICAgICAgIHZhciBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcXG4gICAgICAgIGZvciAodmFyIGkgPSAyMDIyOyBpIDw9IGN1cnJlbnRZZWFyOyBpKyspIHtcXG4gICAgICAgICAgICB2YXIgbmV4dCA9IGkgKyAxO1xcbiAgICAgICAgICAgIHZhciB5ZWFyID0gaSArICctJyArIG5leHQudG9TdHJpbmcoKTtcXG4gICAgICAgICAgICB0aGlzLmZpbmFuY2lhbF95ZWFycy5wdXNoKHllYXIpXFxuICAgICAgICB9XFxuICAgICAgICB0aGlzLmdldERhc2hib2FyZCgpO1xcbiAgICB9LFxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XFxuICAgICAgICB0aGlzLmdldEF1dGgoKTtcXG4gICAgICAgIHRoaXMuYXV0aFVzZXI9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXFxcImF1dGhcXFwiKTtcXG4gICAgICAgIGNvbnNvbGUubG9nKFxcXCJhdXRoOiBcXFwiICsgdGhpcy5hdXRoVXNlcik7XFxuXFxuICAgICAgICBpZiAodGhpcy5hdXRoVXNlcikge1xcbiAgICAgICAgICAgIHRoaXMuYXV0aFVzZXIgPSBKU09OLnBhcnNlKHRoaXMuYXV0aFVzZXIpO1xcbiAgICAgICAgICAgIGlmKHRoaXMuYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXM9PTMpe1xcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlPVxcXCJDbGllbnQgZW1wbG95ZWVcXFwiO1xcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXM9PTQpe1xcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlPVxcXCJDYWxsIENlbnRlciBVc2VyXFxcIjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBheGlvcy5nZXQoJ2FwaS9kYXNoYm9hcmQnKVxcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlcy5kYXRhLmRhdGFcXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09Mil7XFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwidGhpcy5yZWNvcmRzXFxcIix0aGlzLnJlY29yZHMpO1xcblxcblxcbiAgICAgICAgICAgICAgICB9ZWxzZXtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwidGhpcy5yZWNvcmRzXFxcIix0aGlzLnJlY29yZHMpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxUaWNrZXRzPSB0aGlzLnJlY29yZHMudG90YWxfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdUaWNrZXRzPSB0aGlzLnJlY29yZHMucGVuZGluZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxtUGVuZGluZz0gdGhpcy5yZWNvcmRzLmZsbV9wZW5kaW5nX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbG1QZW5kaW5nPSB0aGlzLnJlY29yZHMuc2xtX3BlbmRpbmdfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpvaW5lZFBlbmRpbmc9IHRoaXMucmVjb3Jkcy5qb2luZWRfcGVuZGluZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZ1RpY2tldHM9IHRoaXMucmVjb3Jkcy5wcm9jZXNzaW5nX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG1Qcm9jZXNzaW5nPSB0aGlzLnJlY29yZHMuZmxtX3Byb2Nlc3NpbmdfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsbVByb2Nlc3Npbmc9IHRoaXMucmVjb3Jkcy5zbG1fcHJvY2Vzc2luZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuam9pbmVkUHJvY2Vzc2luZz0gdGhpcy5yZWNvcmRzLmpvaW5lZF9wcm9jZXNzaW5nX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdUaWNrZXRzPSB0aGlzLnJlY29yZHMubmV3X3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZWRUaWNrZXRzPSB0aGlzLnJlY29yZHMuY2xvc2VkX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZT0gJ0NhbGwgQ2VudGVyIFVzZXInO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xcbiAgICAgICAgICAgIH0pXFxuXFxuXFxuXFxuXFxuICAgICAgICAvLyBheGlvcy5nZXQoXFxcImFwaS9nZXRfcHJlX21hY2hpbmVcXFwiKS50aGVuKChyZXMpID0+IHtcXG4gICAgICAgIC8vICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLkNhdGVnb3J5O1xcbiAgICAgICAgLy8gICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xcbiAgICAgICAgLy8gfSk7XFxuICAgICAgICAvLyBheGlvc1xcbiAgICAgICAgLy8gICAgIC5nZXQoXFxcIi9hcGkvaW5pdGlhbF90aWNrZXRcXFwiKVxcbiAgICAgICAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnZlbmRvcnM7XFxuICAgICAgICAvLyAgICAgICAgIHRoaXMubWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XFxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNlYXJjaF9zaXRlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zaXRlcztcXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jcmVhdGVkX3VzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLmNyZWF0ZWRfdXNlcnM7XFxuICAgICAgICAvLyAgICAgfSlcXG4gICAgICAgIC8vICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFxcXCJPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmdcXFwiKSk7XFxuXFxuXFxuICAgIH0sXFxuICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICB0aGlzLmdldEF1dGgoKTtcXG5cXG4gICAgICAgIHRoaXMuYXV0aFVzZXI9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXFxcImF1dGhcXFwiKTtcXG4gICAgICAgIGlmICh0aGlzLmF1dGhVc2VyKSB7XFxuICAgICAgICAgICAgdGhpcy5hdXRoVXNlciA9IEpTT04ucGFyc2UodGhpcy5hdXRoVXNlcik7XFxuICAgICAgICAgICAgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09Myl7XFxuICAgICAgICAgICAgICAgIHRoaXMudXNlclJvbGU9XFxcIkNsaWVudCBlbXBsb3llZVxcXCI7XFxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09NCl7XFxuICAgICAgICAgICAgICAgIHRoaXMudXNlclJvbGU9XFxcIkNhbGwgQ2VudGVyIFVzZXJcXFwiO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIHRoaXMuZ2V0RGFzaGJvYXJkKCk7XFxuICAgICAgICAvLyBpZiAodGhpcy4kZ2F0ZS5pc0FkbWluKCkpIHtcXG4gICAgICAgIC8vICAgICAvLyB0aGlzLiRyb3V0ZXIucHVzaCgnL3VzZXJzJykuY2F0Y2goKCkgPT4geyB9KTtcXG4gICAgICAgIC8vIH0gZWxzZSB7XFxuICAgICAgICAvLyAgICAgdGhpcy4kcm91dGVyLnB1c2goXFxcIi90aWNrZXRzXFxcIikuY2F0Y2goKCkgPT4geyB9KTtcXG4gICAgICAgIC8vIH1cXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgZ2V0QXV0aCgpe1xcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9hY2NvdW50LWF1dGgnKVxcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcblxcblxcbiAgICAgICAgICBjb25zb2xlLmxvZyhcXFwicmVzcG9uc2UgbW9kdWxlXFxcIik7XFxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YSk7XFxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxcXCJhdXRoXFxcIiwgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YS5kYXRhKSk7XFxuICAgICAgICAgIHRoaXMuYXV0aFVzZXI9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXFxcImF1dGhcXFwiKTtcXG4gICAgICAgIGlmICh0aGlzLmF1dGhVc2VyKSB7XFxuICAgICAgICAgICAgdGhpcy5hdXRoVXNlciA9IEpTT04ucGFyc2UodGhpcy5hdXRoVXNlcik7XFxuICAgICAgICB9XFxuICAgICAgICB9KVxcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbW9kdWxlczonLCBlcnJvcik7XFxuICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBnZXREYXNoYm9hcmQoKXtcXG4gICAgICAgICAgICBheGlvcy5nZXQoJ2FwaS9kYXNoYm9hcmQnKVxcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlcy5kYXRhLmRhdGFcXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09Mil7XFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwidGhpcy5yZWNvcmRzXFxcIix0aGlzLnJlY29yZHMpO1xcblxcblxcbiAgICAgICAgICAgICAgICB9ZWxzZXtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwidGhpcy5yZWNvcmRzXFxcIix0aGlzLnJlY29yZHMpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxUaWNrZXRzPSB0aGlzLnJlY29yZHMudG90YWxfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdUaWNrZXRzPSB0aGlzLnJlY29yZHMucGVuZGluZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxtUGVuZGluZz0gdGhpcy5yZWNvcmRzLmZsbV9wZW5kaW5nX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbG1QZW5kaW5nPSB0aGlzLnJlY29yZHMuc2xtX3BlbmRpbmdfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpvaW5lZFBlbmRpbmc9IHRoaXMucmVjb3Jkcy5qb2luZWRfcGVuZGluZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZ1RpY2tldHM9IHRoaXMucmVjb3Jkcy5wcm9jZXNzaW5nX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG1Qcm9jZXNzaW5nPSB0aGlzLnJlY29yZHMuZmxtX3Byb2Nlc3NpbmdfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsbVByb2Nlc3Npbmc9IHRoaXMucmVjb3Jkcy5zbG1fcHJvY2Vzc2luZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuam9pbmVkUHJvY2Vzc2luZz0gdGhpcy5yZWNvcmRzLmpvaW5lZF9wcm9jZXNzaW5nX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdUaWNrZXRzPSB0aGlzLnJlY29yZHMubmV3X3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZWRUaWNrZXRzPSB0aGlzLnJlY29yZHMuY2xvc2VkX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZT0gJ0NhbGwgQ2VudGVyIFVzZXInO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgYXNpZ25fZ3JhcGhzKCkge1xcbiAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHRoaXMucmVjb3Jkc1xcbiAgICAgICAgICAgIHRoaXMuY2hhcnRPcHRpb25zID0ge1xcbiAgICAgICAgICAgICAgICBjaGFydDoge1xcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFxcXCJ2dWVjaGFydC1leGFtcGxlXFxcIixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsxOTkxLCAxOTkyLCAxOTkzLCAxOTk0LCAxOTk1LCAxOTk2LCAxOTk3LCAxOTk4XSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLy8qKioqKioqKioqKiAqL1xcbiAgICAgICAgICAgIHRoaXMuZG9udXRDaGFydE9wdGlvbnMgPSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yczogWycjMDA2OGI5JywgJyMwMDY4YjlhZCddLFxcblxcbiAgICAgICAgICAgICAgICBjaGFydDoge1xcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFxcXCJkbnQxXFxcIlxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFtcXFwiTWFqb3JcXFwiLCBcXFwiTWlub3JcXFwiXSxcXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFxcXCJDb21wbGFpbnQgTmF0dXJlXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcXG4gICAgICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1dLFxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2NlbnRlcicsXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgdGhpcy5iYXJDb3VudE9wdGlvbnMgPSB7XFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyNmZmYnXVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NhbGwgU3RhdHVzJ1xcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW1xcXCJRdWFydGVyIDFcXFwiLCBcXFwiUXVhcnRlciAyXFxcIiwgXFxcIlF1YXJ0ZXIgM1xcXCIsIFxcXCJRdWFydGVyIDRcXFwiXSxcXG5cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdW5kZWZpbmVkXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICBmaWxsOiB7XFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiA0MFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgfSxcXG4gICAgICAgIGdldExhYmVsKHZhbCkge1xcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcXFwib2JqZWN0XFxcIikge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmZhcl9ubyArIFxcXCIgLSBcXFwiICsgdmFsLm5hbWU7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgLy8gYXN5bmMgZ2V0X21hY2hpbmUoKSB7XFxuICAgICAgICAvLyAgICAgYXhpb3NcXG4gICAgICAgIC8vICAgICAgICAgLmdldChcXFwiL2FwaS9yZXBvcnRzL21hY2hpbmVzXFxcIiwge1xcbiAgICAgICAgLy8gICAgICAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2l0ZV9pZDogdGhpcy5zZWFyY2guc2l0ZV9pZCxcXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjYXRlZ29yeV9pZDogdGhpcy5zZWFyY2guY2F0ZWdvcnlfaWQsXFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiB0aGlzLnNlYXJjaC5zdWJfY2F0ZWdvcnlfaWQsXFxuICAgICAgICAvLyAgICAgICAgICAgICB9LFxcbiAgICAgICAgLy8gICAgICAgICB9KVxcbiAgICAgICAgLy8gICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xcbiAgICAgICAgLy8gICAgICAgICB9KVxcbiAgICAgICAgLy8gICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFxcXCJPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmdcXFwiKSk7XFxuICAgICAgICAvLyB9LFxcbiAgICB9LFxcbn07XFxuPC9zY3JpcHQ+XFxuPHN0eWxlIHNjb3BlZD5cXG4uZGFzaGJvYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNhcmQtYm9keSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmgyLnRpY2tldC1jb3VudCB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaDQge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2hhZG93IHtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi50ZXh0LXN1Y2Nlc3Mge1xcbiAgY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jYXJkW2RhdGEtdi00MmM2Nzk2ZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3N2UzYTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3N1bml0YWJhZy9EZXNrdG9wL3BocC9hdG1fb2xkL2F0bS9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbmZvQ2FyZC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW1CQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0NBQ0FcIixcImZpbGVcIjpcIkluZm9DYXJkLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIG1iLTRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgPGg1Pnt7IHRpdGxlIH19PC9oNT5cXG4gICAgICAgIDxwPnt7IHZhbHVlIH19PC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvdGVtcGxhdGU+XFxuXFxuICA8c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBwcm9wczoge1xcbiAgICAgIHRpdGxlOiBTdHJpbmcsXFxuICAgICAgdmFsdWU6IE51bWJlclxcbiAgICB9XFxuICB9O1xcbiAgPC9zY3JpcHQ+XFxuXFxuICA8c3R5bGUgc2NvcGVkPlxcbiAgLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc3ZTNhO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG4gIDwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzICE9IFwiMlwiXG4gICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBkYXNoYm9hcmRcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS5hdXRoVXNlcikgKyBcIlxcbiAgICAgIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNCBjb2wtc20tNiBjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveCBiZy1wdXJwbGVcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVG90YWwgVGlja2V0c1wiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtbnVtYmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50b3RhbFRpY2tldHMpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYnRuLXNtIGN1c3RvbS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2sgIWltcG9ydGFudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9jb21wbGFpbnQtbGlzdC9hbGxcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgVmlldyBEZXRhaWxzXFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNCBjb2wtc20tNiBjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveCBiZy1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUGVuZGluZyBUaWNrZXRzXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1udW1iZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBlbmRpbmdUaWNrZXRzKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSA0XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGTE06IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZsbVBlbmRpbmcpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB8IFNMTTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc2xtUGVuZGluZykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHwgSk9JTkVEOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5qb2luZWRQZW5kaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYnRuLXNtIGN1c3RvbS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2sgIWltcG9ydGFudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9jb21wbGFpbnQtbGlzdC9hbGwvUGVuZGluZ1wiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00IGNvbC1zbS02IGNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94IGJnLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUHJvY2Vzc2luZyBUaWNrZXRzXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1udW1iZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnByb2Nlc3NpbmdUaWNrZXRzKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSA0XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGTE06IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZsbVByb2Nlc3NpbmcpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB8IFNMTTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc2xtUHJvY2Vzc2luZykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHwgSk9JTkVEOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5qb2luZWRQcm9jZXNzaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGN1c3RvbS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2sgIWltcG9ydGFudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9jb21wbGFpbnQtbGlzdC9hbGwvUHJvY2Vzc2luZ1wiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtYm9yZGVyZWRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIk5ldyBUaWNrZXRzXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLm5ld1RpY2tldHMpKV0pXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIkNsb3NlZCBUaWNrZXRzXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLmNsb3NlZFRpY2tldHMpKV0pXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMiB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIllvdSBoYXZlIGxvZ2dlZCBpbiBhcyBcIiksXG4gICAgICAgICAgICAgIF92bS5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSA0XG4gICAgICAgICAgICAgICAgPyBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRW1wbG95ZWVcIilcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09IDNcbiAgICAgICAgICAgICAgICA/IF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDbGllbnRcIilcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG10LTVcIiwgYXR0cnM6IHsgaWQ6IFwiYXBwXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LFxuICAgICAgICAgIF92bS5fbChfdm0ucmVjb3JkcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwiSW5mb0NhcmRcIiwge1xuICAgICAgICAgICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBpdGVtLm5hbWUsIHZhbHVlOiBpdGVtLnJvd3MgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1pY29uXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGlja2V0LWFsdFwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtaWNvblwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRpY2tldC1hbHRcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWljb25cIiB9LCBbXG4gICAgICBfYyhcImlcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10aWNrZXQtYWx0XCIsXG4gICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwicGItMlwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRpY2tldC1hbHRcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJwYi0yXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGlja2V0LWFsdFwiIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTI4OGNiYzM5XCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgbWItNFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICBfYyhcImg1XCIsIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS52YWx1ZSkpXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNDJjNjc5NmVcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjg4Y2JjMzlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZDM4ZDI3YTBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yODhjYmMzOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjg4Y2JjMzlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00MmM2Nzk2ZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0luZm9DYXJkLnZ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI4Y2MxN2U3MFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQyYzY3OTZlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW5mb0NhcmQudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00MmM2Nzk2ZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0luZm9DYXJkLnZ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yODhjYmMzOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yODhjYmMzOVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0yODhjYmMzOVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjg4Y2JjMzlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yODhjYmMzOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00MmM2Nzk2ZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0luZm9DYXJkLnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9JbmZvQ2FyZC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0luZm9DYXJkLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00MmM2Nzk2ZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0luZm9DYXJkLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi00MmM2Nzk2ZVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0luZm9DYXJkLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00MmM2Nzk2ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQyYzY3OTZlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=