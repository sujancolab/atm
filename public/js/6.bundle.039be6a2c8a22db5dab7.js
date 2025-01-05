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
exports.push([module.i, "\n.dashboard[data-v-288cbc39] {\n  background-color: #f8f9fa;\n  min-height: 100vh;\n}\n.card[data-v-288cbc39] {\n  border-radius: 10px;\n}\n.card-body[data-v-288cbc39] {\n  color: white;\n}\nh2.ticket-count[data-v-288cbc39] {\n  font-size: 4rem;\n  font-weight: bold;\n}\nh4[data-v-288cbc39] {\n  color: #333;\n}\np[data-v-288cbc39] {\n  margin: 0;\n}\n.shadow[data-v-288cbc39] {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.text-success[data-v-288cbc39] {\n  color: #28a745 !important;\n}\n", "", {"version":3,"sources":["/Users/sunitabag/Desktop/php/atm_old/atm/resources/js/components/Dashboard/resources/js/components/Dashboard/DashboardCallLockStatus.vue"],"names":[],"mappings":";AAiqBA;EACA,0BAAA;EACA,kBAAA;CACA;AAEA;EACA,oBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,gBAAA;EACA,kBAAA;CACA;AAEA;EACA,YAAA;CACA;AAEA;EACA,UAAA;CACA;AAEA;EACA,yCAAA;CACA;AAEA;EACA,0BAAA;CACA","file":"DashboardCallLockStatus.vue","sourcesContent":["<template>\n    <div class=\"container-fluid dashboard\"  v-if=\"authUser.id_cms_privileges!='2'\">\n        <div class=\"row\">\n            <div class=\"col-md-4 col-sm-6 col-12\">\n                <div class=\"info-box bg-purple\">\n                    <span class=\"info-box-icon\"><i class=\"fa fa-ticket-alt\"></i></span>\n                    <div class=\"info-box-content\"><span class=\"info-box-text\">Total Tickets</span>\n                        <span class=\"info-box-number\">{{ totalTickets }}</span>\n                    </div>\n                    <router-link to=\"/complaint-list/all\" class=\"btn btn-outline-light btn-sm custom-btn\" style=\"color: black !important;\">\n                        View Details\n                    </router-link>\n                </div>\n            </div>\n            <div class=\"col-md-4 col-sm-6 col-12\">\n                <div class=\"info-box bg-danger\">\n                    <span class=\"info-box-icon\"><i class=\"fa fa-ticket-alt\"></i></span>\n                    <div class=\"info-box-content\">\n                        <span class=\"info-box-text\">Pending Tickets</span>\n                        <span class=\"info-box-number\">{{ pendingTickets }}</span>\n                        <p v-if=\"authUser.id_cms_privileges==4\">FLM: {{ flmPending }} | SLM: {{ slmPending }} | JOINED: {{ joinedPending }}</p>\n                    </div>\n                    <router-link to=\"/complaint-list/all/Pending\" class=\"btn btn-outline-light btn-sm custom-btn\" style=\"color: black !important;\">\n                        View Details\n                    </router-link>\n                </div>\n            </div>\n            <div class=\"col-md-4 col-sm-6 col-12\">\n                <div class=\"info-box bg-primary\">\n                    <span class=\"info-box-icon\"><i aria-hidden=\"true\" class=\"fa fa-ticket-alt\"></i></span>\n                    <div class=\"info-box-content\">\n                        <span class=\"info-box-text\">Processing Tickets</span>\n                        <span class=\"info-box-number\">{{ processingTickets }}</span>\n                        <p v-if=\"authUser.id_cms_privileges==4\">FLM: {{ flmProcessing }} | SLM: {{ slmProcessing }} | JOINED: {{ joinedProcessing }}</p>\n                    </div>\n                    <router-link to=\"/complaint-list/all/Processing\" class=\"btn btn-sm custom-btn\" style=\"color: black !important;\">\n                        View Details\n                    </router-link>\n                </div>\n            </div>\n        </div>\n\n        <!-- Top Row for Tickets -->\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <table class=\"table table-bordered \">\n                    <tr>\n                        <td class=\"pb-2\"><i class=\"fa fa-ticket-alt\"></i></td>\n                        <td>New Tickets</td>\n                        <td><b>{{ newTickets }}</b></td>\n                    </tr>\n                    <tr>\n                        <td class=\"pb-2\"><i class=\"fa fa-ticket-alt\"></i></td>\n                        <td>Closed Tickets</td>\n                        <td><b>{{ closedTickets }}</b></td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n\n\n\n      <!-- User Role Section -->\n      <div class=\"row justify-content-center mt-4\">\n        <div class=\"col-md-12 text-center\">\n          <p>You have logged in as <strong class=\"text-success\" v-if=\"authUser.id_cms_privileges==4\">Employee</strong> <strong class=\"text-success\" v-if=\"authUser.id_cms_privileges==3\">Client</strong></p>\n        </div>\n      </div>\n    </div>\n    <div id=\"app\" class=\"container mt-5\" v-else>\n    <div class=\"row\">\n      <InfoCard v-for=\"item in records\" :key=\"item.id\" :title=\"item.name\" :value=\"item.rows\" />\n    </div>\n  </div>\n  </template>\n\n<script>\nimport InfoCard from '../InfoCard.vue';\nexport default {\n    components: {\n    InfoCard\n  },\n    data() {\n        return {\n            far_details: {\n                actual_material_cost: 0,\n                actual_service_cost: 0,\n                records: []\n            },\n            records: '',\n            search: {\n                financial_year: '',\n                quarter: '',\n                month: '',\n                date_from: '',\n                date_to: '',\n                site_id: '',\n                category_id: '',\n                sub_category_id: '',\n                machine_id: '',\n            },\n            monthNames: [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\",\n                \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"],\n\n            chartOptions: {\n                chart: {\n                    id: \"vuechart-example\",\n                },\n                xaxis: {\n                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],\n                },\n            },\n            series: [\n                {\n                    name: \"series-1\",\n                    data: [30, 40, 35, 50, 49, 60, 70, 91],\n                },\n            ],\n\n            //*********** */\n\n            donutSeries: [44, 55],\n            donutChartOptions: {\n                colors: ['#004488', '#38c172'],\n\n                chart: {\n                    id: \"dnt1\"\n                },\n                labels: [\"Major\", \"Minor\"],\n                title: {\n                    text: \"Complaint Nature\",\n                    align: 'center',\n                },\n\n                responsive: [{\n                    breakpoint: 480,\n                    options: {\n                        chart: {\n                            width: 200\n                        },\n\n                        legend: {\n                            position: 'bottom',\n                            horizontalAlign: 'left',\n                        }\n                    }\n                }],\n                legend: {\n                    position: 'bottom',\n                    horizontalAlign: 'center',\n                }\n            },\n            barCountOptions: {\n                chart: {\n                    type: 'bar',\n                    height: 250,\n                    stacked: true,\n                },\n                plotOptions: {\n                    bar: {\n                        horizontal: true,\n                        colors: ['#FF5733', '#33FF57'],\n                        dataLabels: {\n                            total: {\n                                enabled: true,\n                                offsetX: 0,\n                                style: {\n                                    fontSize: '13px',\n                                    fontWeight: 900\n                                }\n                            }\n                        }\n                    },\n                },\n                stroke: {\n                    width: 1,\n                    colors: ['#fff']\n                },\n                title: {\n                    text: undefined\n                },\n                xaxis: {\n                    categories: [\"Quarter 1\", \"Quarter 2\", \"Quarter 3\", \"Quarter 4\"],\n\n                },\n                yaxis: {\n                    title: {\n                        text: undefined\n                    },\n                },\n\n                fill: {\n                    opacity: 1\n                },\n                legend: {\n                    position: 'top',\n                    horizontalAlign: 'left',\n                    offsetX: 40\n                }\n            },\n\n            barEquipmentOptions: {\n\n                series: [],\n                chartOptions: {\n                    chart: {\n                        id: 'equipmentChart',\n                        type: 'bar',\n                        height: 350,\n                        stacked: true,\n                        toolbar: {\n                            show: true\n                        },\n                        zoom: {\n                            enabled: true\n                        },\n                        events: {\n                            dataPointSelection: (event, chartContext, config) => {\n                                console.log(chartContext)\n                                var categoryIndex = config.dataPointIndex;\n                                var far_no = this.barEquipmentOptions.chartOptions.xaxis.categories[categoryIndex];\n\n                                // axios.get('api/get_machine_for_dashboard', {\n                                //     params: {\n                                //         'far_no': far_no\n                                //     }\n                                // })\n                                //     .then((response) => {\n                                //         this.far_details = response.data.data\n                                //         $('#countComplaintModal').modal('show');\n                                //     })\n                                //     .catch(function (error) {\n                                //         console.error('There was an error!', error);\n                                //     });\n\n                                // You can replace the alert with your custom popup logic\n                                // For example, open a modal or a custom popup\n                            }\n                        }\n                    },\n                    responsive: [{\n                        breakpoint: 480,\n                        options: {\n                            legend: {\n                                position: 'bottom',\n                                offsetX: -10,\n                                offsetY: 0\n                            }\n                        }\n                    }],\n                    plotOptions: {\n                        bar: {\n                            horizontal: false,\n                            borderRadius: 1,\n                            borderRadiusApplication: 'end', // 'around', 'end'\n                            borderRadiusWhenStacked: 'last', // 'all', 'last'\n                            dataLabels: {\n                                total: {\n                                    enabled: true,\n                                    style: {\n                                        fontSize: '9px',\n                                        fontWeight: 900\n                                    }\n                                }\n                            }\n                        },\n                    },\n                    xaxis: {\n                        labels: {\n                            rotate: -45\n                        },\n                        categories: [],\n                        tickPlacement: 'on'\n                    },\n                    legend: {\n                        position: 'bottom',\n                        offsetY: 0\n                    },\n                    fill: {\n                        opacity: 1\n                    }\n                },\n            },\n            //******* */\n\n            barProjectOptions: {\n\n                series: [],\n                chartOptions: {\n                    chart: {\n                        type: 'bar',\n                        height: 400,\n                        stacked: true,\n                    },\n                    plotOptions: {\n                    bar: {\n                        horizontal: true,\n                            dataLabels: {\n                                total: {\n                                    enabled: true,\n                                    offsetX: 0,\n                                    style: {\n                                    fontSize: '13px',\n                                    fontWeight: 900\n                                    }\n                                }\n                            }\n                        },\n                    },\n                    responsive: [{\n                        breakpoint: 480,\n                        options: {\n                            legend: {\n                                position: 'bottom',\n                                offsetX: -10,\n                                offsetY: 0\n                            }\n                        }\n                    }],\n                    xaxis: {\n                        categories: [],\n                    },\n                    fill: {\n                        opacity: 1\n                    },\n                    legend: {\n                        show: false,\n                        position: 'bottom',\n                        offsetX: 0,\n                        offsetY: 0\n                    },\n                },\n\n            },\n\n            financial_years: [],\n            search_machines: [],\n            search_sites: [],\n            search_tickets: [],\n            categories: [],\n            sub_categories: [],\n            sites: [],\n            machines: [],\n            totalTickets: 0,\n      pendingTickets: 0,\n      flmPending: 0,\n      slmPending: 0,\n      joinedPending: 0,\n      processingTickets: 0,\n      flmProcessing: 0,\n      slmProcessing: 0,\n      joinedProcessing: 0,\n      newTickets: 0,\n      closedTickets: 0,\n      authUser: localStorage.getItem(\"auth\") ? JSON.parse(localStorage.getItem(\"auth\")) : null,\n      userRole: \"\",\n\n        };\n    },\n    updated: function () {\n        this.$nextTick(function () {\n            // this.asign_graphs();\n        })\n        this.getDashboard();\n    },\n    watch: {\n        'search.quarter'(n) {\n            if (n) {\n                this.search.date_from = ''\n                this.search.date_to = ''\n                this.search.month = ''\n            }\n        },\n        'search.date_from'(n) {\n            if (n) {\n                this.search.month = ''\n                this.search.quarter = ''\n            }\n        },\n        'search.date_to'(n) {\n            if (n) {\n                this.search.month = ''\n                this.search.quarter = ''\n            }\n        },\n        'search.month'(n) {\n            if (n) {\n                this.search.date_from = ''\n                this.search.date_to = ''\n                this.search.quarter = ''\n            }\n        },\n\n        search: {\n            handler: function (n) {\n                axios.post('api/dashboard', this.search)\n                    .then(res => {\n                        this.records = res.data.data\n                        this.barEquipmentOptions.chartOptions.xaxis.categories = res.data.data.EquipmentChart.series\n                        this.barEquipmentOptions.series = res.data.data.EquipmentChart.data\n\n\n\n                        this.$refs.barCountChart.updateSeries(this.records.barCountChart.series, true)\n                        this.$refs.barCountChart.updateOptions(this.records.barCountChart.options, false, true)\n\n                    })\n                    .catch(err => {\n                        console.error(err);\n                    })\n            },\n            deep: true\n        },\n        async \"search.sub_category_id\"(n, o) {\n            if (n) {\n                this.get_machine();\n            }\n        },\n        async \"search.site_id\"(n, o) {\n            if (n) {\n                this.get_machine();\n            }\n        },\n\n        \"search.category_id\": {\n            handler: function (n, o) {\n                if (n) {\n                    axios.get(\"api/category/\" + n).then((res) => {\n                        this.sub_categories = res.data.data;\n                    });\n                    this.get_machine();\n                }\n            },\n            deep: true,\n            initial: true,\n        },\n    },\n    created() {\n        var yearsLength = 30;\n        var currentYear = new Date().getFullYear();\n        for (var i = 2022; i <= currentYear; i++) {\n            var next = i + 1;\n            var year = i + '-' + next.toString();\n            this.financial_years.push(year)\n        }\n        this.getDashboard();\n    },\n    beforeCreate() {\n\n        this.authUser=localStorage.getItem(\"auth\");\n        console.log(\"auth: \" + this.authUser);\n\n        if (this.authUser) {\n            this.authUser = JSON.parse(this.authUser);\n            if(this.authUser.id_cms_privileges==3){\n                this.userRole=\"Client employee\";\n            }else if(this.authUser.id_cms_privileges==4){\n                this.userRole=\"Call Center User\";\n            }\n        }\n        axios.get('api/dashboard')\n            .then(res => {\n                this.records = res.data.data\n                if(this.authUser.id_cms_privileges==2){\n                    console.log(\"this.records\",this.records);\n\n\n                }else{\n                        console.log(\"this.records\",this.records);\n                        this.totalTickets= this.records.total_tickets;\n                        this.pendingTickets= this.records.pending_tickets;\n                        this.flmPending= this.records.flm_pending_tickets;\n                        this.slmPending= this.records.slm_pending_tickets;\n                        this.joinedPending= this.records.joined_pending_tickets;\n                        this.processingTickets= this.records.processing_tickets;\n                        this.flmProcessing= this.records.flm_processing_tickets;\n                        this.slmProcessing= this.records.slm_processing_tickets;\n                        this.joinedProcessing= this.records.joined_processing_tickets;\n                        this.newTickets= this.records.new_tickets;\n                        this.closedTickets= this.records.closed_tickets;\n                        this.userRole= 'Call Center User';\n                }\n\n\n            })\n            .catch(err => {\n                console.error(err);\n            })\n\n\n\n\n        // axios.get(\"api/get_pre_machine\").then((res) => {\n        //     this.categories = res.data.data.Category;\n        //     this.sites = res.data.data.sites;\n        // });\n        // axios\n        //     .get(\"/api/initial_ticket\")\n        //     .then((response) => {\n        //         this.users = response.data.data.vendors;\n        //         this.machines = response.data.data.machines;\n        //         this.search_machines = response.data.data.machines;\n        //         this.search_sites = response.data.data.sites;\n        //         this.created_users = response.data.data.created_users;\n        //     })\n        //     .catch(() => console.warn(\"Oh. Something went wrong\"));\n\n\n    },\n    mounted() {\n        this.authUser=localStorage.getItem(\"auth\");\n        if (this.authUser) {\n            this.authUser = JSON.parse(this.authUser);\n            if(this.authUser.id_cms_privileges==3){\n                this.userRole=\"Client employee\";\n            }else if(this.authUser.id_cms_privileges==4){\n                this.userRole=\"Call Center User\";\n            }\n        }\n        this.getDashboard();\n        // if (this.$gate.isAdmin()) {\n        //     // this.$router.push('/users').catch(() => { });\n        // } else {\n        //     this.$router.push(\"/tickets\").catch(() => { });\n        // }\n    },\n    methods: {\n        getDashboard(){\n            axios.get('api/dashboard')\n            .then(res => {\n                this.records = res.data.data\n                if(this.authUser.id_cms_privileges==2){\n                    console.log(\"this.records\",this.records);\n\n\n                }else{\n                        console.log(\"this.records\",this.records);\n                        this.totalTickets= this.records.total_tickets;\n                        this.pendingTickets= this.records.pending_tickets;\n                        this.flmPending= this.records.flm_pending_tickets;\n                        this.slmPending= this.records.slm_pending_tickets;\n                        this.joinedPending= this.records.joined_pending_tickets;\n                        this.processingTickets= this.records.processing_tickets;\n                        this.flmProcessing= this.records.flm_processing_tickets;\n                        this.slmProcessing= this.records.slm_processing_tickets;\n                        this.joinedProcessing= this.records.joined_processing_tickets;\n                        this.newTickets= this.records.new_tickets;\n                        this.closedTickets= this.records.closed_tickets;\n                        this.userRole= 'Call Center User';\n                }\n\n\n            })\n            .catch(err => {\n                console.error(err);\n            })\n        },\n        asign_graphs() {\n            this.records = this.records\n            this.chartOptions = {\n                chart: {\n                    id: \"vuechart-example\",\n                },\n                xaxis: {\n                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],\n                },\n            }\n            //*********** */\n            this.donutChartOptions = {\n                colors: ['#0068b9', '#0068b9ad'],\n\n                chart: {\n                    id: \"dnt1\"\n                },\n                labels: [\"Major\", \"Minor\"],\n                title: {\n                    text: \"Complaint Nature\",\n                    align: 'center',\n                },\n\n                responsive: [{\n                    breakpoint: 480,\n                    options: {\n                        chart: {\n                            width: 200\n                        },\n\n                        legend: {\n                            position: 'bottom',\n                            horizontalAlign: 'left',\n                        }\n                    }\n                }],\n                legend: {\n                    position: 'bottom',\n                    horizontalAlign: 'center',\n                }\n            }\n\n            this.barCountOptions = {\n                chart: {\n                    type: 'bar',\n                    height: 350,\n                    stacked: true,\n                },\n                plotOptions: {\n                    bar: {\n                        horizontal: true,\n                        dataLabels: {\n                            total: {\n                                enabled: true,\n                                offsetX: 0,\n                                style: {\n                                    fontSize: '13px',\n                                    fontWeight: 900\n                                }\n                            }\n                        }\n                    },\n                },\n                stroke: {\n                    width: 1,\n                    colors: ['#fff']\n                },\n                title: {\n                    text: 'Call Status'\n                },\n                xaxis: {\n                    categories: [\"Quarter 1\", \"Quarter 2\", \"Quarter 3\", \"Quarter 4\"],\n\n                },\n                yaxis: {\n                    title: {\n                        text: undefined\n                    },\n                },\n\n                fill: {\n                    opacity: 1\n                },\n                legend: {\n                    position: 'top',\n                    horizontalAlign: 'left',\n                    offsetX: 40\n                }\n            }\n\n        },\n        getLabel(val) {\n            if (typeof val === \"object\") {\n                return val.far_no + \" - \" + val.name;\n            } else {\n                return val;\n            }\n        },\n        // async get_machine() {\n        //     axios\n        //         .get(\"/api/reports/machines\", {\n        //             params: {\n        //                 site_id: this.search.site_id,\n        //                 category_id: this.search.category_id,\n        //                 sub_category_id: this.search.sub_category_id,\n        //             },\n        //         })\n        //         .then((response) => {\n        //             this.search_machines = response.data.data;\n        //         })\n        //         .catch(() => console.warn(\"Oh. Something went wrong\"));\n        // },\n    },\n};\n</script>\n<style scoped>\n.dashboard {\n  background-color: #f8f9fa;\n  min-height: 100vh;\n}\n\n.card {\n  border-radius: 10px;\n}\n\n.card-body {\n  color: white;\n}\n\nh2.ticket-count {\n  font-size: 4rem;\n  font-weight: bold;\n}\n\nh4 {\n  color: #333;\n}\n\np {\n  margin: 0;\n}\n\n.shadow {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.text-success {\n  color: #28a745 !important;\n}\n</style>\n"],"sourceRoot":""}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW5mb0NhcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWU/ZGI0MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbmZvQ2FyZC52dWU/MWNhNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlP2QzNzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW5mb0NhcmQudnVlP2JlYzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZT8yNzdjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0luZm9DYXJkLnZ1ZT9iNWJiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW5mb0NhcmQudnVlIl0sIm5hbWVzIjpbImNvbXBvbmVudHMiLCJJbmZvQ2FyZCIsImRhdGEiLCJmYXJfZGV0YWlscyIsImFjdHVhbF9tYXRlcmlhbF9jb3N0IiwiYWN0dWFsX3NlcnZpY2VfY29zdCIsInJlY29yZHMiLCJzZWFyY2giLCJmaW5hbmNpYWxfeWVhciIsInF1YXJ0ZXIiLCJtb250aCIsImRhdGVfZnJvbSIsImRhdGVfdG8iLCJzaXRlX2lkIiwiY2F0ZWdvcnlfaWQiLCJzdWJfY2F0ZWdvcnlfaWQiLCJtYWNoaW5lX2lkIiwibW9udGhOYW1lcyIsImNoYXJ0T3B0aW9ucyIsImNoYXJ0IiwiaWQiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJzZXJpZXMiLCJuYW1lIiwiZG9udXRTZXJpZXMiLCJkb251dENoYXJ0T3B0aW9ucyIsImNvbG9ycyIsImxhYmVscyIsInRpdGxlIiwidGV4dCIsImFsaWduIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJvcHRpb25zIiwid2lkdGgiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImhvcml6b250YWxBbGlnbiIsImJhckNvdW50T3B0aW9ucyIsInR5cGUiLCJoZWlnaHQiLCJzdGFja2VkIiwicGxvdE9wdGlvbnMiLCJiYXIiLCJob3Jpem9udGFsIiwiZGF0YUxhYmVscyIsInRvdGFsIiwiZW5hYmxlZCIsIm9mZnNldFgiLCJzdHlsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInN0cm9rZSIsInVuZGVmaW5lZCIsInlheGlzIiwiZmlsbCIsIm9wYWNpdHkiLCJiYXJFcXVpcG1lbnRPcHRpb25zIiwidG9vbGJhciIsInNob3ciLCJ6b29tIiwiZXZlbnRzIiwiZGF0YVBvaW50U2VsZWN0aW9uIiwiZXZlbnQiLCJjaGFydENvbnRleHQiLCJjb25maWciLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcnlJbmRleCIsImRhdGFQb2ludEluZGV4IiwiZmFyX25vIiwib2Zmc2V0WSIsImJvcmRlclJhZGl1cyIsImJvcmRlclJhZGl1c0FwcGxpY2F0aW9uIiwiYm9yZGVyUmFkaXVzV2hlblN0YWNrZWQiLCJyb3RhdGUiLCJ0aWNrUGxhY2VtZW50IiwiYmFyUHJvamVjdE9wdGlvbnMiLCJmaW5hbmNpYWxfeWVhcnMiLCJzZWFyY2hfbWFjaGluZXMiLCJzZWFyY2hfc2l0ZXMiLCJzZWFyY2hfdGlja2V0cyIsInN1Yl9jYXRlZ29yaWVzIiwic2l0ZXMiLCJtYWNoaW5lcyIsInRvdGFsVGlja2V0cyIsInBlbmRpbmdUaWNrZXRzIiwiZmxtUGVuZGluZyIsInNsbVBlbmRpbmciLCJqb2luZWRQZW5kaW5nIiwicHJvY2Vzc2luZ1RpY2tldHMiLCJmbG1Qcm9jZXNzaW5nIiwic2xtUHJvY2Vzc2luZyIsImpvaW5lZFByb2Nlc3NpbmciLCJuZXdUaWNrZXRzIiwiY2xvc2VkVGlja2V0cyIsImF1dGhVc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInVzZXJSb2xlIiwidXBkYXRlZCIsIiRuZXh0VGljayIsImdldERhc2hib2FyZCIsIndhdGNoIiwic2VhcmNoLnF1YXJ0ZXIiLCJuIiwic2VhcmNoLmRhdGVfZnJvbSIsInNlYXJjaC5kYXRlX3RvIiwic2VhcmNoLm1vbnRoIiwiaGFuZGxlciIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJFcXVpcG1lbnRDaGFydCIsIiRyZWZzIiwiYmFyQ291bnRDaGFydCIsInVwZGF0ZVNlcmllcyIsInVwZGF0ZU9wdGlvbnMiLCJjYXRjaCIsImVyciIsImVycm9yIiwiZGVlcCIsInNlYXJjaC5zdWJfY2F0ZWdvcnlfaWQiLCJvIiwiZ2V0X21hY2hpbmUiLCJzZWFyY2guc2l0ZV9pZCIsImdldCIsImluaXRpYWwiLCJjcmVhdGVkIiwieWVhcnNMZW5ndGgiLCJjdXJyZW50WWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImkiLCJuZXh0IiwieWVhciIsInRvU3RyaW5nIiwicHVzaCIsImJlZm9yZUNyZWF0ZSIsImlkX2Ntc19wcml2aWxlZ2VzIiwidG90YWxfdGlja2V0cyIsInBlbmRpbmdfdGlja2V0cyIsImZsbV9wZW5kaW5nX3RpY2tldHMiLCJzbG1fcGVuZGluZ190aWNrZXRzIiwiam9pbmVkX3BlbmRpbmdfdGlja2V0cyIsInByb2Nlc3NpbmdfdGlja2V0cyIsImZsbV9wcm9jZXNzaW5nX3RpY2tldHMiLCJzbG1fcHJvY2Vzc2luZ190aWNrZXRzIiwiam9pbmVkX3Byb2Nlc3NpbmdfdGlja2V0cyIsIm5ld190aWNrZXRzIiwiY2xvc2VkX3RpY2tldHMiLCJtb3VudGVkIiwibWV0aG9kcyIsImFzaWduX2dyYXBocyIsImdldExhYmVsIiwidmFsIiwicHJvcHMiLCJTdHJpbmciLCJ2YWx1ZSIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RUE7QUFDZTtFQUNmQSxVQUFBO0lBQ0FDO0VBQ0E7RUFDQUMsS0FBQTtJQUNBO01BQ0FDLFdBQUE7UUFDQUMsb0JBQUE7UUFDQUMsbUJBQUE7UUFDQUMsT0FBQTtNQUNBO01BQ0FBLE9BQUE7TUFDQUMsTUFBQTtRQUNBQyxjQUFBO1FBQ0FDLE9BQUE7UUFDQUMsS0FBQTtRQUNBQyxTQUFBO1FBQ0FDLE9BQUE7UUFDQUMsT0FBQTtRQUNBQyxXQUFBO1FBQ0FDLGVBQUE7UUFDQUMsVUFBQTtNQUNBO01BQ0FDLFVBQUEsMkRBQ0E7TUFFQUMsWUFBQTtRQUNBQyxLQUFBO1VBQ0FDLEVBQUE7UUFDQTtRQUNBQyxLQUFBO1VBQ0FDLFVBQUE7UUFDQTtNQUNBO01BQ0FDLE1BQUEsR0FDQTtRQUNBQyxJQUFBO1FBQ0F0QixJQUFBO01BQ0EsRUFDQTtNQUVBOztNQUVBdUIsV0FBQTtNQUNBQyxpQkFBQTtRQUNBQyxNQUFBO1FBRUFSLEtBQUE7VUFDQUMsRUFBQTtRQUNBO1FBQ0FRLE1BQUE7UUFDQUMsS0FBQTtVQUNBQyxJQUFBO1VBQ0FDLEtBQUE7UUFDQTtRQUVBQyxVQUFBO1VBQ0FDLFVBQUE7VUFDQUMsT0FBQTtZQUNBZixLQUFBO2NBQ0FnQixLQUFBO1lBQ0E7WUFFQUMsTUFBQTtjQUNBQyxRQUFBO2NBQ0FDLGVBQUE7WUFDQTtVQUNBO1FBQ0E7UUFDQUYsTUFBQTtVQUNBQyxRQUFBO1VBQ0FDLGVBQUE7UUFDQTtNQUNBO01BQ0FDLGVBQUE7UUFDQXBCLEtBQUE7VUFDQXFCLElBQUE7VUFDQUMsTUFBQTtVQUNBQyxPQUFBO1FBQ0E7UUFDQUMsV0FBQTtVQUNBQyxHQUFBO1lBQ0FDLFVBQUE7WUFDQWxC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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLEVBYVg7O0FBRVUsZ0ZBQWlCIiwiZmlsZSI6ImpzLzYuYnVuZGxlLjAzOWJlNmEyYzhhMjJkYjVkYWI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgZGFzaGJvYXJkXCIgIHYtaWY9XCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyE9JzInXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtc20tNiBjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3ggYmctcHVycGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtaWNvblwiPjxpIGNsYXNzPVwiZmEgZmEtdGlja2V0LWFsdFwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveC1jb250ZW50XCI+PHNwYW4gY2xhc3M9XCJpbmZvLWJveC10ZXh0XCI+VG90YWwgVGlja2V0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtbnVtYmVyXCI+e3sgdG90YWxUaWNrZXRzIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL2NvbXBsYWludC1saXN0L2FsbFwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1zbSBjdXN0b20tYnRuXCIgc3R5bGU9XCJjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgRGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLXNtLTYgY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94IGJnLWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LWljb25cIj48aSBjbGFzcz1cImZhIGZhLXRpY2tldC1hbHRcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3gtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC10ZXh0XCI+UGVuZGluZyBUaWNrZXRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC1udW1iZXJcIj57eyBwZW5kaW5nVGlja2V0cyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09NFwiPkZMTToge3sgZmxtUGVuZGluZyB9fSB8IFNMTToge3sgc2xtUGVuZGluZyB9fSB8IEpPSU5FRDoge3sgam9pbmVkUGVuZGluZyB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9jb21wbGFpbnQtbGlzdC9hbGwvUGVuZGluZ1wiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1zbSBjdXN0b20tYnRuXCIgc3R5bGU9XCJjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgRGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLXNtLTYgY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94IGJnLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC1pY29uXCI+PGkgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJmYSBmYS10aWNrZXQtYWx0XCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtdGV4dFwiPlByb2Nlc3NpbmcgVGlja2V0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtbnVtYmVyXCI+e3sgcHJvY2Vzc2luZ1RpY2tldHMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXM9PTRcIj5GTE06IHt7IGZsbVByb2Nlc3NpbmcgfX0gfCBTTE06IHt7IHNsbVByb2Nlc3NpbmcgfX0gfCBKT0lORUQ6IHt7IGpvaW5lZFByb2Nlc3NpbmcgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvY29tcGxhaW50LWxpc3QvYWxsL1Byb2Nlc3NpbmdcIiBjbGFzcz1cImJ0biBidG4tc20gY3VzdG9tLWJ0blwiIHN0eWxlPVwiY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIFRvcCBSb3cgZm9yIFRpY2tldHMgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIFwiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJwYi0yXCI+PGkgY2xhc3M9XCJmYSBmYS10aWNrZXQtYWx0XCI+PC9pPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TmV3IFRpY2tldHM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxiPnt7IG5ld1RpY2tldHMgfX08L2I+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicGItMlwiPjxpIGNsYXNzPVwiZmEgZmEtdGlja2V0LWFsdFwiPjwvaT48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNsb3NlZCBUaWNrZXRzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48Yj57eyBjbG9zZWRUaWNrZXRzIH19PC9iPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIDwhLS0gVXNlciBSb2xlIFNlY3Rpb24gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPHA+WW91IGhhdmUgbG9nZ2VkIGluIGFzIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIiB2LWlmPVwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXM9PTRcIj5FbXBsb3llZTwvc3Ryb25nPiA8c3Ryb25nIGNsYXNzPVwidGV4dC1zdWNjZXNzXCIgdi1pZj1cImF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzPT0zXCI+Q2xpZW50PC9zdHJvbmc+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJhcHBcIiBjbGFzcz1cImNvbnRhaW5lciBtdC01XCIgdi1lbHNlPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxJbmZvQ2FyZCB2LWZvcj1cIml0ZW0gaW4gcmVjb3Jkc1wiIDprZXk9XCJpdGVtLmlkXCIgOnRpdGxlPVwiaXRlbS5uYW1lXCIgOnZhbHVlPVwiaXRlbS5yb3dzXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSW5mb0NhcmQgZnJvbSAnLi4vSW5mb0NhcmQudnVlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgSW5mb0NhcmRcbiAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmFyX2RldGFpbHM6IHtcbiAgICAgICAgICAgICAgICBhY3R1YWxfbWF0ZXJpYWxfY29zdDogMCxcbiAgICAgICAgICAgICAgICBhY3R1YWxfc2VydmljZV9jb3N0OiAwLFxuICAgICAgICAgICAgICAgIHJlY29yZHM6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVjb3JkczogJycsXG4gICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICBmaW5hbmNpYWxfeWVhcjogJycsXG4gICAgICAgICAgICAgICAgcXVhcnRlcjogJycsXG4gICAgICAgICAgICAgICAgbW9udGg6ICcnLFxuICAgICAgICAgICAgICAgIGRhdGVfZnJvbTogJycsXG4gICAgICAgICAgICAgICAgZGF0ZV90bzogJycsXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yeV9pZDogJycsXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9udGhOYW1lczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIixcbiAgICAgICAgICAgICAgICBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXSxcblxuICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidnVlY2hhcnQtZXhhbXBsZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWzE5OTEsIDE5OTIsIDE5OTMsIDE5OTQsIDE5OTUsIDE5OTYsIDE5OTcsIDE5OThdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNlcmllcy0xXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgNDAsIDM1LCA1MCwgNDksIDYwLCA3MCwgOTFdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICAvLyoqKioqKioqKioqICovXG5cbiAgICAgICAgICAgIGRvbnV0U2VyaWVzOiBbNDQsIDU1XSxcbiAgICAgICAgICAgIGRvbnV0Q2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJyMwMDQ0ODgnLCAnIzM4YzE3MiddLFxuXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZG50MVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFtcIk1ham9yXCIsIFwiTWlub3JcIl0sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJDb21wbGFpbnQgTmF0dXJlXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhckNvdW50T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjRkY1NzMzJywgJyMzM0ZGNTcnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZiddXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtcIlF1YXJ0ZXIgMVwiLCBcIlF1YXJ0ZXIgMlwiLCBcIlF1YXJ0ZXIgM1wiLCBcIlF1YXJ0ZXIgNFwiXSxcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiA0MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGJhckVxdWlwbWVudE9wdGlvbnM6IHtcblxuICAgICAgICAgICAgICAgIHNlcmllczogW10sXG4gICAgICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2VxdWlwbWVudENoYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQb2ludFNlbGVjdGlvbjogKGV2ZW50LCBjaGFydENvbnRleHQsIGNvbmZpZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFydENvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yeUluZGV4ID0gY29uZmlnLmRhdGFQb2ludEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmFyX25vID0gdGhpcy5iYXJFcXVpcG1lbnRPcHRpb25zLmNoYXJ0T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzW2NhdGVnb3J5SW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF4aW9zLmdldCgnYXBpL2dldF9tYWNoaW5lX2Zvcl9kYXNoYm9hcmQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAnZmFyX25vJzogZmFyX25vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmZhcl9kZXRhaWxzID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgJCgnI2NvdW50Q29tcGxhaW50TW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IhJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiByZXBsYWNlIHRoZSBhbGVydCB3aXRoIHlvdXIgY3VzdG9tIHBvcHVwIGxvZ2ljXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBleGFtcGxlLCBvcGVuIGEgbW9kYWwgb3IgYSBjdXN0b20gcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogLTEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXNBcHBsaWNhdGlvbjogJ2VuZCcsIC8vICdhcm91bmQnLCAnZW5kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1c1doZW5TdGFja2VkOiAnbGFzdCcsIC8vICdhbGwnLCAnbGFzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzlweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAtNDVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tQbGFjZW1lbnQ6ICdvbidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8qKioqKioqICovXG5cbiAgICAgICAgICAgIGJhclByb2plY3RPcHRpb25zOiB7XG5cbiAgICAgICAgICAgICAgICBzZXJpZXM6IFtdLFxuICAgICAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IC0xMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmaW5hbmNpYWxfeWVhcnM6IFtdLFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaF9zaXRlczogW10sXG4gICAgICAgICAgICBzZWFyY2hfdGlja2V0czogW10sXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcbiAgICAgICAgICAgIG1hY2hpbmVzOiBbXSxcbiAgICAgICAgICAgIHRvdGFsVGlja2V0czogMCxcbiAgICAgIHBlbmRpbmdUaWNrZXRzOiAwLFxuICAgICAgZmxtUGVuZGluZzogMCxcbiAgICAgIHNsbVBlbmRpbmc6IDAsXG4gICAgICBqb2luZWRQZW5kaW5nOiAwLFxuICAgICAgcHJvY2Vzc2luZ1RpY2tldHM6IDAsXG4gICAgICBmbG1Qcm9jZXNzaW5nOiAwLFxuICAgICAgc2xtUHJvY2Vzc2luZzogMCxcbiAgICAgIGpvaW5lZFByb2Nlc3Npbmc6IDAsXG4gICAgICBuZXdUaWNrZXRzOiAwLFxuICAgICAgY2xvc2VkVGlja2V0czogMCxcbiAgICAgIGF1dGhVc2VyOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIikgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFwiKSkgOiBudWxsLFxuICAgICAgdXNlclJvbGU6IFwiXCIsXG5cbiAgICAgICAgfTtcbiAgICB9LFxuICAgIHVwZGF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdGhpcy5hc2lnbl9ncmFwaHMoKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5nZXREYXNoYm9hcmQoKTtcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgICdzZWFyY2gucXVhcnRlcicobikge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX2Zyb20gPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfdG8gPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLm1vbnRoID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3NlYXJjaC5kYXRlX2Zyb20nKG4pIHtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gubW9udGggPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnF1YXJ0ZXIgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnc2VhcmNoLmRhdGVfdG8nKG4pIHtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gubW9udGggPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnF1YXJ0ZXIgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnc2VhcmNoLm1vbnRoJyhuKSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfZnJvbSA9ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV90byA9ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gucXVhcnRlciA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2FwaS9kYXNoYm9hcmQnLCB0aGlzLnNlYXJjaClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlcy5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyRXF1aXBtZW50T3B0aW9ucy5jaGFydE9wdGlvbnMueGF4aXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuRXF1aXBtZW50Q2hhcnQuc2VyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhckVxdWlwbWVudE9wdGlvbnMuc2VyaWVzID0gcmVzLmRhdGEuZGF0YS5FcXVpcG1lbnRDaGFydC5kYXRhXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmJhckNvdW50Q2hhcnQudXBkYXRlU2VyaWVzKHRoaXMucmVjb3Jkcy5iYXJDb3VudENoYXJ0LnNlcmllcywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuYmFyQ291bnRDaGFydC51cGRhdGVPcHRpb25zKHRoaXMucmVjb3Jkcy5iYXJDb3VudENoYXJ0Lm9wdGlvbnMsIGZhbHNlLCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgXCJzZWFyY2guc3ViX2NhdGVnb3J5X2lkXCIobiwgbykge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIFwic2VhcmNoLnNpdGVfaWRcIihuLCBvKSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcInNlYXJjaC5jYXRlZ29yeV9pZFwiOiB7XG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobiwgbykge1xuICAgICAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9jYXRlZ29yeS9cIiArIG4pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdmFyIHllYXJzTGVuZ3RoID0gMzA7XG4gICAgICAgIHZhciBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDIwMjI7IGkgPD0gY3VycmVudFllYXI7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5leHQgPSBpICsgMTtcbiAgICAgICAgICAgIHZhciB5ZWFyID0gaSArICctJyArIG5leHQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuZmluYW5jaWFsX3llYXJzLnB1c2goeWVhcilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldERhc2hib2FyZCgpO1xuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuXG4gICAgICAgIHRoaXMuYXV0aFVzZXI9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImF1dGg6IFwiICsgdGhpcy5hdXRoVXNlcik7XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0aFVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFVzZXIgPSBKU09OLnBhcnNlKHRoaXMuYXV0aFVzZXIpO1xuICAgICAgICAgICAgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09Myl7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZT1cIkNsaWVudCBlbXBsb3llZVwiO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09NCl7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZT1cIkNhbGwgQ2VudGVyIFVzZXJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBheGlvcy5nZXQoJ2FwaS9kYXNoYm9hcmQnKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09Mil7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5yZWNvcmRzXCIsdGhpcy5yZWNvcmRzKTtcblxuXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMucmVjb3Jkc1wiLHRoaXMucmVjb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsVGlja2V0cz0gdGhpcy5yZWNvcmRzLnRvdGFsX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdUaWNrZXRzPSB0aGlzLnJlY29yZHMucGVuZGluZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG1QZW5kaW5nPSB0aGlzLnJlY29yZHMuZmxtX3BlbmRpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2xtUGVuZGluZz0gdGhpcy5yZWNvcmRzLnNsbV9wZW5kaW5nX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpvaW5lZFBlbmRpbmc9IHRoaXMucmVjb3Jkcy5qb2luZWRfcGVuZGluZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nVGlja2V0cz0gdGhpcy5yZWNvcmRzLnByb2Nlc3NpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxtUHJvY2Vzc2luZz0gdGhpcy5yZWNvcmRzLmZsbV9wcm9jZXNzaW5nX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsbVByb2Nlc3Npbmc9IHRoaXMucmVjb3Jkcy5zbG1fcHJvY2Vzc2luZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qb2luZWRQcm9jZXNzaW5nPSB0aGlzLnJlY29yZHMuam9pbmVkX3Byb2Nlc3NpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3VGlja2V0cz0gdGhpcy5yZWNvcmRzLm5ld190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZWRUaWNrZXRzPSB0aGlzLnJlY29yZHMuY2xvc2VkX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlPSAnQ2FsbCBDZW50ZXIgVXNlcic7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KVxuXG5cblxuXG4gICAgICAgIC8vIGF4aW9zLmdldChcImFwaS9nZXRfcHJlX21hY2hpbmVcIikudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLkNhdGVnb3J5O1xuICAgICAgICAvLyAgICAgdGhpcy5zaXRlcyA9IHJlcy5kYXRhLmRhdGEuc2l0ZXM7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyBheGlvc1xuICAgICAgICAvLyAgICAgLmdldChcIi9hcGkvaW5pdGlhbF90aWNrZXRcIilcbiAgICAgICAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEudmVuZG9ycztcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm1hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2VhcmNoX3NpdGVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnNpdGVzO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3JlYXRlZF91c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5jcmVhdGVkX3VzZXJzO1xuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oXCJPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmdcIikpO1xuXG5cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuYXV0aFVzZXI9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpO1xuICAgICAgICBpZiAodGhpcy5hdXRoVXNlcikge1xuICAgICAgICAgICAgdGhpcy5hdXRoVXNlciA9IEpTT04ucGFyc2UodGhpcy5hdXRoVXNlcik7XG4gICAgICAgICAgICBpZih0aGlzLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzPT0zKXtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlPVwiQ2xpZW50IGVtcGxveWVlXCI7XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzPT00KXtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlPVwiQ2FsbCBDZW50ZXIgVXNlclwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0RGFzaGJvYXJkKCk7XG4gICAgICAgIC8vIGlmICh0aGlzLiRnYXRlLmlzQWRtaW4oKSkge1xuICAgICAgICAvLyAgICAgLy8gdGhpcy4kcm91dGVyLnB1c2goJy91c2VycycpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi90aWNrZXRzXCIpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgIC8vIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0RGFzaGJvYXJkKCl7XG4gICAgICAgICAgICBheGlvcy5nZXQoJ2FwaS9kYXNoYm9hcmQnKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09Mil7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5yZWNvcmRzXCIsdGhpcy5yZWNvcmRzKTtcblxuXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMucmVjb3Jkc1wiLHRoaXMucmVjb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsVGlja2V0cz0gdGhpcy5yZWNvcmRzLnRvdGFsX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdUaWNrZXRzPSB0aGlzLnJlY29yZHMucGVuZGluZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG1QZW5kaW5nPSB0aGlzLnJlY29yZHMuZmxtX3BlbmRpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2xtUGVuZGluZz0gdGhpcy5yZWNvcmRzLnNsbV9wZW5kaW5nX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpvaW5lZFBlbmRpbmc9IHRoaXMucmVjb3Jkcy5qb2luZWRfcGVuZGluZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nVGlja2V0cz0gdGhpcy5yZWNvcmRzLnByb2Nlc3NpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxtUHJvY2Vzc2luZz0gdGhpcy5yZWNvcmRzLmZsbV9wcm9jZXNzaW5nX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsbVByb2Nlc3Npbmc9IHRoaXMucmVjb3Jkcy5zbG1fcHJvY2Vzc2luZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qb2luZWRQcm9jZXNzaW5nPSB0aGlzLnJlY29yZHMuam9pbmVkX3Byb2Nlc3NpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3VGlja2V0cz0gdGhpcy5yZWNvcmRzLm5ld190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZWRUaWNrZXRzPSB0aGlzLnJlY29yZHMuY2xvc2VkX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlPSAnQ2FsbCBDZW50ZXIgVXNlcic7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBhc2lnbl9ncmFwaHMoKSB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZHMgPSB0aGlzLnJlY29yZHNcbiAgICAgICAgICAgIHRoaXMuY2hhcnRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInZ1ZWNoYXJ0LWV4YW1wbGVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsxOTkxLCAxOTkyLCAxOTkzLCAxOTk0LCAxOTk1LCAxOTk2LCAxOTk3LCAxOTk4XSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8qKioqKioqKioqKiAqL1xuICAgICAgICAgICAgdGhpcy5kb251dENoYXJ0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFsnIzAwNjhiOScsICcjMDA2OGI5YWQnXSxcblxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImRudDFcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXCJNYWpvclwiLCBcIk1pbm9yXCJdLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ29tcGxhaW50IE5hdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5iYXJDb3VudE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxuICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZmJ11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDYWxsIFN0YXR1cydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtcIlF1YXJ0ZXIgMVwiLCBcIlF1YXJ0ZXIgMlwiLCBcIlF1YXJ0ZXIgM1wiLCBcIlF1YXJ0ZXIgNFwiXSxcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiA0MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgICBnZXRMYWJlbCh2YWwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5mYXJfbm8gKyBcIiAtIFwiICsgdmFsLm5hbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGFzeW5jIGdldF9tYWNoaW5lKCkge1xuICAgICAgICAvLyAgICAgYXhpb3NcbiAgICAgICAgLy8gICAgICAgICAuZ2V0KFwiL2FwaS9yZXBvcnRzL21hY2hpbmVzXCIsIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzaXRlX2lkOiB0aGlzLnNlYXJjaC5zaXRlX2lkLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IHRoaXMuc2VhcmNoLmNhdGVnb3J5X2lkLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiB0aGlzLnNlYXJjaC5zdWJfY2F0ZWdvcnlfaWQsXG4gICAgICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zZWFyY2hfbWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFwiT2guIFNvbWV0aGluZyB3ZW50IHdyb25nXCIpKTtcbiAgICAgICAgLy8gfSxcbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbi5kYXNoYm9hcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMi50aWNrZXQtY291bnQge1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oNCB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRleHQtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBtYi00XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8aDU+e3sgdGl0bGUgfX08L2g1PlxuICAgICAgICA8cD57eyB2YWx1ZSB9fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuXG4gIDxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiBOdW1iZXJcbiAgICB9XG4gIH07XG4gIDwvc2NyaXB0PlxuXG4gIDxzdHlsZSBzY29wZWQ+XG4gIC5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc3ZTNhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIDwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRhc2hib2FyZFtkYXRhLXYtMjg4Y2JjMzldIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuLmNhcmRbZGF0YS12LTI4OGNiYzM5XSB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY2FyZC1ib2R5W2RhdGEtdi0yODhjYmMzOV0ge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5oMi50aWNrZXQtY291bnRbZGF0YS12LTI4OGNiYzM5XSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuaDRbZGF0YS12LTI4OGNiYzM5XSB7XFxuICBjb2xvcjogIzMzMztcXG59XFxucFtkYXRhLXYtMjg4Y2JjMzldIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnNoYWRvd1tkYXRhLXYtMjg4Y2JjMzldIHtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi50ZXh0LXN1Y2Nlc3NbZGF0YS12LTI4OGNiYzM5XSB7XFxuICBjb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3N1bml0YWJhZy9EZXNrdG9wL3BocC9hdG1fb2xkL2F0bS9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBaXFCQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7Q0FDQTtBQUVBO0VBQ0Esb0JBQUE7Q0FDQTtBQUVBO0VBQ0EsYUFBQTtDQUNBO0FBRUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0NBQ0E7QUFFQTtFQUNBLFlBQUE7Q0FDQTtBQUVBO0VBQ0EsVUFBQTtDQUNBO0FBRUE7RUFDQSx5Q0FBQTtDQUNBO0FBRUE7RUFDQSwwQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJEYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgZGFzaGJvYXJkXFxcIiAgdi1pZj1cXFwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMhPScyJ1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00IGNvbC1zbS02IGNvbC0xMlxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm8tYm94IGJnLXB1cnBsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtaWNvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRpY2tldC1hbHRcXFwiPjwvaT48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveC1jb250ZW50XFxcIj48c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtdGV4dFxcXCI+VG90YWwgVGlja2V0czwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtbnVtYmVyXFxcIj57eyB0b3RhbFRpY2tldHMgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cXFwiL2NvbXBsYWludC1saXN0L2FsbFxcXCIgY2xhc3M9XFxcImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc20gY3VzdG9tLWJ0blxcXCIgc3R5bGU9XFxcImNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBEZXRhaWxzXFxuICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNCBjb2wtc20tNiBjb2wtMTJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveCBiZy1kYW5nZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LWljb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aWNrZXQtYWx0XFxcIj48L2k+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3gtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LXRleHRcXFwiPlBlbmRpbmcgVGlja2V0czwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtbnVtYmVyXFxcIj57eyBwZW5kaW5nVGlja2V0cyB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVxcXCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09NFxcXCI+RkxNOiB7eyBmbG1QZW5kaW5nIH19IHwgU0xNOiB7eyBzbG1QZW5kaW5nIH19IHwgSk9JTkVEOiB7eyBqb2luZWRQZW5kaW5nIH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XFxcIi9jb21wbGFpbnQtbGlzdC9hbGwvUGVuZGluZ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc20gY3VzdG9tLWJ0blxcXCIgc3R5bGU9XFxcImNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBEZXRhaWxzXFxuICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNCBjb2wtc20tNiBjb2wtMTJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveCBiZy1wcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC1pY29uXFxcIj48aSBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImZhIGZhLXRpY2tldC1hbHRcXFwiPjwvaT48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtdGV4dFxcXCI+UHJvY2Vzc2luZyBUaWNrZXRzPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC1udW1iZXJcXFwiPnt7IHByb2Nlc3NpbmdUaWNrZXRzIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XFxcImF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzPT00XFxcIj5GTE06IHt7IGZsbVByb2Nlc3NpbmcgfX0gfCBTTE06IHt7IHNsbVByb2Nlc3NpbmcgfX0gfCBKT0lORUQ6IHt7IGpvaW5lZFByb2Nlc3NpbmcgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cXFwiL2NvbXBsYWludC1saXN0L2FsbC9Qcm9jZXNzaW5nXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBjdXN0b20tYnRuXFxcIiBzdHlsZT1cXFwiY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcXG4gICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8IS0tIFRvcCBSb3cgZm9yIFRpY2tldHMgLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwicGItMlxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRpY2tldC1hbHRcXFwiPjwvaT48L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5OZXcgVGlja2V0czwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxiPnt7IG5ld1RpY2tldHMgfX08L2I+PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJwYi0yXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdGlja2V0LWFsdFxcXCI+PC9pPjwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNsb3NlZCBUaWNrZXRzPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGI+e3sgY2xvc2VkVGlja2V0cyB9fTwvYj48L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcblxcblxcbiAgICAgIDwhLS0gVXNlciBSb2xlIFNlY3Rpb24gLS0+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTIgdGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICA8cD5Zb3UgaGF2ZSBsb2dnZWQgaW4gYXMgPHN0cm9uZyBjbGFzcz1cXFwidGV4dC1zdWNjZXNzXFxcIiB2LWlmPVxcXCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09NFxcXCI+RW1wbG95ZWU8L3N0cm9uZz4gPHN0cm9uZyBjbGFzcz1cXFwidGV4dC1zdWNjZXNzXFxcIiB2LWlmPVxcXCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09M1xcXCI+Q2xpZW50PC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGlkPVxcXCJhcHBcXFwiIGNsYXNzPVxcXCJjb250YWluZXIgbXQtNVxcXCIgdi1lbHNlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgIDxJbmZvQ2FyZCB2LWZvcj1cXFwiaXRlbSBpbiByZWNvcmRzXFxcIiA6a2V5PVxcXCJpdGVtLmlkXFxcIiA6dGl0bGU9XFxcIml0ZW0ubmFtZVxcXCIgOnZhbHVlPVxcXCJpdGVtLnJvd3NcXFwiIC8+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IEluZm9DYXJkIGZyb20gJy4uL0luZm9DYXJkLnZ1ZSc7XFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBjb21wb25lbnRzOiB7XFxuICAgIEluZm9DYXJkXFxuICB9LFxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBmYXJfZGV0YWlsczoge1xcbiAgICAgICAgICAgICAgICBhY3R1YWxfbWF0ZXJpYWxfY29zdDogMCxcXG4gICAgICAgICAgICAgICAgYWN0dWFsX3NlcnZpY2VfY29zdDogMCxcXG4gICAgICAgICAgICAgICAgcmVjb3JkczogW11cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHJlY29yZHM6ICcnLFxcbiAgICAgICAgICAgIHNlYXJjaDoge1xcbiAgICAgICAgICAgICAgICBmaW5hbmNpYWxfeWVhcjogJycsXFxuICAgICAgICAgICAgICAgIHF1YXJ0ZXI6ICcnLFxcbiAgICAgICAgICAgICAgICBtb250aDogJycsXFxuICAgICAgICAgICAgICAgIGRhdGVfZnJvbTogJycsXFxuICAgICAgICAgICAgICAgIGRhdGVfdG86ICcnLFxcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6ICcnLFxcbiAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6ICcnLFxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiAnJyxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IFtcXFwiSmFudWFyeVxcXCIsIFxcXCJGZWJydWFyeVxcXCIsIFxcXCJNYXJjaFxcXCIsIFxcXCJBcHJpbFxcXCIsIFxcXCJNYXlcXFwiLCBcXFwiSnVuZVxcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJKdWx5XFxcIiwgXFxcIkF1Z3VzdFxcXCIsIFxcXCJTZXB0ZW1iZXJcXFwiLCBcXFwiT2N0b2JlclxcXCIsIFxcXCJOb3ZlbWJlclxcXCIsIFxcXCJEZWNlbWJlclxcXCJdLFxcblxcbiAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICBjaGFydDoge1xcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFxcXCJ2dWVjaGFydC1leGFtcGxlXFxcIixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsxOTkxLCAxOTkyLCAxOTkzLCAxOTk0LCAxOTk1LCAxOTk2LCAxOTk3LCAxOTk4XSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHNlcmllczogW1xcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcXFwic2VyaWVzLTFcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzMwLCA0MCwgMzUsIDUwLCA0OSwgNjAsIDcwLCA5MV0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXSxcXG5cXG4gICAgICAgICAgICAvLyoqKioqKioqKioqICovXFxuXFxuICAgICAgICAgICAgZG9udXRTZXJpZXM6IFs0NCwgNTVdLFxcbiAgICAgICAgICAgIGRvbnV0Q2hhcnRPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgIGNvbG9yczogWycjMDA0NDg4JywgJyMzOGMxNzInXSxcXG5cXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcXFwiZG50MVxcXCJcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXFxcIk1ham9yXFxcIiwgXFxcIk1pbm9yXFxcIl0sXFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcXFwiQ29tcGxhaW50IE5hdHVyZVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXFxuICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XFxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XSxcXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdjZW50ZXInLFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBiYXJDb3VudE9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXFxuICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI0ZGNTczMycsICcjMzNGRjU3J10sXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyNmZmYnXVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdW5kZWZpbmVkXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXFxcIlF1YXJ0ZXIgMVxcXCIsIFxcXCJRdWFydGVyIDJcXFwiLCBcXFwiUXVhcnRlciAzXFxcIiwgXFxcIlF1YXJ0ZXIgNFxcXCJdLFxcblxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1bmRlZmluZWRcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgIGZpbGw6IHtcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDQwXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIGJhckVxdWlwbWVudE9wdGlvbnM6IHtcXG5cXG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbXSxcXG4gICAgICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnZXF1aXBtZW50Q2hhcnQnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB6b29tOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50czoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUG9pbnRTZWxlY3Rpb246IChldmVudCwgY2hhcnRDb250ZXh0LCBjb25maWcpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoYXJ0Q29udGV4dClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yeUluZGV4ID0gY29uZmlnLmRhdGFQb2ludEluZGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZhcl9ubyA9IHRoaXMuYmFyRXF1aXBtZW50T3B0aW9ucy5jaGFydE9wdGlvbnMueGF4aXMuY2F0ZWdvcmllc1tjYXRlZ29yeUluZGV4XTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF4aW9zLmdldCgnYXBpL2dldF9tYWNoaW5lX2Zvcl9kYXNoYm9hcmQnLCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICdmYXJfbm8nOiBmYXJfbm9cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmZhcl9kZXRhaWxzID0gcmVzcG9uc2UuZGF0YS5kYXRhXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICQoJyNjb3VudENvbXBsYWludE1vZGFsJykubW9kYWwoJ3Nob3cnKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIScsIGVycm9yKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9KTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gcmVwbGFjZSB0aGUgYWxlcnQgd2l0aCB5b3VyIGN1c3RvbSBwb3B1cCBsb2dpY1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsIG9wZW4gYSBtb2RhbCBvciBhIGN1c3RvbSBwb3B1cFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAtMTAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XSxcXG4gICAgICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1c0FwcGxpY2F0aW9uOiAnZW5kJywgLy8gJ2Fyb3VuZCcsICdlbmQnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1c1doZW5TdGFja2VkOiAnbGFzdCcsIC8vICdhbGwnLCAnbGFzdCdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnOXB4JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGU6IC00NVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGlja1BsYWNlbWVudDogJ29uJ1xcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIC8vKioqKioqKiAqL1xcblxcbiAgICAgICAgICAgIGJhclByb2plY3RPcHRpb25zOiB7XFxuXFxuICAgICAgICAgICAgICAgIHNlcmllczogW10sXFxuICAgICAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICBiYXI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogLTEwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfV0sXFxuICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIGZpbmFuY2lhbF95ZWFyczogW10sXFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcXG4gICAgICAgICAgICBzZWFyY2hfc2l0ZXM6IFtdLFxcbiAgICAgICAgICAgIHNlYXJjaF90aWNrZXRzOiBbXSxcXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllczogW10sXFxuICAgICAgICAgICAgc2l0ZXM6IFtdLFxcbiAgICAgICAgICAgIG1hY2hpbmVzOiBbXSxcXG4gICAgICAgICAgICB0b3RhbFRpY2tldHM6IDAsXFxuICAgICAgcGVuZGluZ1RpY2tldHM6IDAsXFxuICAgICAgZmxtUGVuZGluZzogMCxcXG4gICAgICBzbG1QZW5kaW5nOiAwLFxcbiAgICAgIGpvaW5lZFBlbmRpbmc6IDAsXFxuICAgICAgcHJvY2Vzc2luZ1RpY2tldHM6IDAsXFxuICAgICAgZmxtUHJvY2Vzc2luZzogMCxcXG4gICAgICBzbG1Qcm9jZXNzaW5nOiAwLFxcbiAgICAgIGpvaW5lZFByb2Nlc3Npbmc6IDAsXFxuICAgICAgbmV3VGlja2V0czogMCxcXG4gICAgICBjbG9zZWRUaWNrZXRzOiAwLFxcbiAgICAgIGF1dGhVc2VyOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcXFwiYXV0aFxcXCIpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcXFwiYXV0aFxcXCIpKSA6IG51bGwsXFxuICAgICAgdXNlclJvbGU6IFxcXCJcXFwiLFxcblxcbiAgICAgICAgfTtcXG4gICAgfSxcXG4gICAgdXBkYXRlZDogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgIC8vIHRoaXMuYXNpZ25fZ3JhcGhzKCk7XFxuICAgICAgICB9KVxcbiAgICAgICAgdGhpcy5nZXREYXNoYm9hcmQoKTtcXG4gICAgfSxcXG4gICAgd2F0Y2g6IHtcXG4gICAgICAgICdzZWFyY2gucXVhcnRlcicobikge1xcbiAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfZnJvbSA9ICcnXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfdG8gPSAnJ1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgICdzZWFyY2guZGF0ZV9mcm9tJyhuKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gubW9udGggPSAnJ1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5xdWFydGVyID0gJydcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgJ3NlYXJjaC5kYXRlX3RvJyhuKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gubW9udGggPSAnJ1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5xdWFydGVyID0gJydcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgJ3NlYXJjaC5tb250aCcobikge1xcbiAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfZnJvbSA9ICcnXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfdG8gPSAnJ1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5xdWFydGVyID0gJydcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgc2VhcmNoOiB7XFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4pIHtcXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnYXBpL2Rhc2hib2FyZCcsIHRoaXMuc2VhcmNoKVxcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMgPSByZXMuZGF0YS5kYXRhXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJFcXVpcG1lbnRPcHRpb25zLmNoYXJ0T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5FcXVpcG1lbnRDaGFydC5zZXJpZXNcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhckVxdWlwbWVudE9wdGlvbnMuc2VyaWVzID0gcmVzLmRhdGEuZGF0YS5FcXVpcG1lbnRDaGFydC5kYXRhXFxuXFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5iYXJDb3VudENoYXJ0LnVwZGF0ZVNlcmllcyh0aGlzLnJlY29yZHMuYmFyQ291bnRDaGFydC5zZXJpZXMsIHRydWUpXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5iYXJDb3VudENoYXJ0LnVwZGF0ZU9wdGlvbnModGhpcy5yZWNvcmRzLmJhckNvdW50Q2hhcnQub3B0aW9ucywgZmFsc2UsIHRydWUpXFxuXFxuICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xcbiAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlZXA6IHRydWVcXG4gICAgICAgIH0sXFxuICAgICAgICBhc3luYyBcXFwic2VhcmNoLnN1Yl9jYXRlZ29yeV9pZFxcXCIobiwgbykge1xcbiAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgYXN5bmMgXFxcInNlYXJjaC5zaXRlX2lkXFxcIihuLCBvKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBcXFwic2VhcmNoLmNhdGVnb3J5X2lkXFxcIjoge1xcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuLCBvKSB7XFxuICAgICAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9jYXRlZ29yeS9cXFwiICsgbikudGhlbigocmVzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcXG4gICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIHZhciB5ZWFyc0xlbmd0aCA9IDMwO1xcbiAgICAgICAgdmFyIGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xcbiAgICAgICAgZm9yICh2YXIgaSA9IDIwMjI7IGkgPD0gY3VycmVudFllYXI7IGkrKykge1xcbiAgICAgICAgICAgIHZhciBuZXh0ID0gaSArIDE7XFxuICAgICAgICAgICAgdmFyIHllYXIgPSBpICsgJy0nICsgbmV4dC50b1N0cmluZygpO1xcbiAgICAgICAgICAgIHRoaXMuZmluYW5jaWFsX3llYXJzLnB1c2goeWVhcilcXG4gICAgICAgIH1cXG4gICAgICAgIHRoaXMuZ2V0RGFzaGJvYXJkKCk7XFxuICAgIH0sXFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcXG5cXG4gICAgICAgIHRoaXMuYXV0aFVzZXI9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXFxcImF1dGhcXFwiKTtcXG4gICAgICAgIGNvbnNvbGUubG9nKFxcXCJhdXRoOiBcXFwiICsgdGhpcy5hdXRoVXNlcik7XFxuXFxuICAgICAgICBpZiAodGhpcy5hdXRoVXNlcikge1xcbiAgICAgICAgICAgIHRoaXMuYXV0aFVzZXIgPSBKU09OLnBhcnNlKHRoaXMuYXV0aFVzZXIpO1xcbiAgICAgICAgICAgIGlmKHRoaXMuYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXM9PTMpe1xcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlPVxcXCJDbGllbnQgZW1wbG95ZWVcXFwiO1xcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXM9PTQpe1xcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlPVxcXCJDYWxsIENlbnRlciBVc2VyXFxcIjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBheGlvcy5nZXQoJ2FwaS9kYXNoYm9hcmQnKVxcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlcy5kYXRhLmRhdGFcXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09Mil7XFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwidGhpcy5yZWNvcmRzXFxcIix0aGlzLnJlY29yZHMpO1xcblxcblxcbiAgICAgICAgICAgICAgICB9ZWxzZXtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwidGhpcy5yZWNvcmRzXFxcIix0aGlzLnJlY29yZHMpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxUaWNrZXRzPSB0aGlzLnJlY29yZHMudG90YWxfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdUaWNrZXRzPSB0aGlzLnJlY29yZHMucGVuZGluZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxtUGVuZGluZz0gdGhpcy5yZWNvcmRzLmZsbV9wZW5kaW5nX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbG1QZW5kaW5nPSB0aGlzLnJlY29yZHMuc2xtX3BlbmRpbmdfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpvaW5lZFBlbmRpbmc9IHRoaXMucmVjb3Jkcy5qb2luZWRfcGVuZGluZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZ1RpY2tldHM9IHRoaXMucmVjb3Jkcy5wcm9jZXNzaW5nX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG1Qcm9jZXNzaW5nPSB0aGlzLnJlY29yZHMuZmxtX3Byb2Nlc3NpbmdfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsbVByb2Nlc3Npbmc9IHRoaXMucmVjb3Jkcy5zbG1fcHJvY2Vzc2luZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuam9pbmVkUHJvY2Vzc2luZz0gdGhpcy5yZWNvcmRzLmpvaW5lZF9wcm9jZXNzaW5nX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdUaWNrZXRzPSB0aGlzLnJlY29yZHMubmV3X3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZWRUaWNrZXRzPSB0aGlzLnJlY29yZHMuY2xvc2VkX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZT0gJ0NhbGwgQ2VudGVyIFVzZXInO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xcbiAgICAgICAgICAgIH0pXFxuXFxuXFxuXFxuXFxuICAgICAgICAvLyBheGlvcy5nZXQoXFxcImFwaS9nZXRfcHJlX21hY2hpbmVcXFwiKS50aGVuKChyZXMpID0+IHtcXG4gICAgICAgIC8vICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLkNhdGVnb3J5O1xcbiAgICAgICAgLy8gICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xcbiAgICAgICAgLy8gfSk7XFxuICAgICAgICAvLyBheGlvc1xcbiAgICAgICAgLy8gICAgIC5nZXQoXFxcIi9hcGkvaW5pdGlhbF90aWNrZXRcXFwiKVxcbiAgICAgICAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnZlbmRvcnM7XFxuICAgICAgICAvLyAgICAgICAgIHRoaXMubWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XFxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNlYXJjaF9zaXRlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zaXRlcztcXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jcmVhdGVkX3VzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLmNyZWF0ZWRfdXNlcnM7XFxuICAgICAgICAvLyAgICAgfSlcXG4gICAgICAgIC8vICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFxcXCJPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmdcXFwiKSk7XFxuXFxuXFxuICAgIH0sXFxuICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICB0aGlzLmF1dGhVc2VyPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFxcXCJhdXRoXFxcIik7XFxuICAgICAgICBpZiAodGhpcy5hdXRoVXNlcikge1xcbiAgICAgICAgICAgIHRoaXMuYXV0aFVzZXIgPSBKU09OLnBhcnNlKHRoaXMuYXV0aFVzZXIpO1xcbiAgICAgICAgICAgIGlmKHRoaXMuYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXM9PTMpe1xcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlPVxcXCJDbGllbnQgZW1wbG95ZWVcXFwiO1xcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXM9PTQpe1xcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlPVxcXCJDYWxsIENlbnRlciBVc2VyXFxcIjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICB0aGlzLmdldERhc2hib2FyZCgpO1xcbiAgICAgICAgLy8gaWYgKHRoaXMuJGdhdGUuaXNBZG1pbigpKSB7XFxuICAgICAgICAvLyAgICAgLy8gdGhpcy4kcm91dGVyLnB1c2goJy91c2VycycpLmNhdGNoKCgpID0+IHsgfSk7XFxuICAgICAgICAvLyB9IGVsc2Uge1xcbiAgICAgICAgLy8gICAgIHRoaXMuJHJvdXRlci5wdXNoKFxcXCIvdGlja2V0c1xcXCIpLmNhdGNoKCgpID0+IHsgfSk7XFxuICAgICAgICAvLyB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGdldERhc2hib2FyZCgpe1xcbiAgICAgICAgICAgIGF4aW9zLmdldCgnYXBpL2Rhc2hib2FyZCcpXFxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRzID0gcmVzLmRhdGEuZGF0YVxcbiAgICAgICAgICAgICAgICBpZih0aGlzLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzPT0yKXtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJ0aGlzLnJlY29yZHNcXFwiLHRoaXMucmVjb3Jkcyk7XFxuXFxuXFxuICAgICAgICAgICAgICAgIH1lbHNle1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJ0aGlzLnJlY29yZHNcXFwiLHRoaXMucmVjb3Jkcyk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFRpY2tldHM9IHRoaXMucmVjb3Jkcy50b3RhbF90aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ1RpY2tldHM9IHRoaXMucmVjb3Jkcy5wZW5kaW5nX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG1QZW5kaW5nPSB0aGlzLnJlY29yZHMuZmxtX3BlbmRpbmdfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsbVBlbmRpbmc9IHRoaXMucmVjb3Jkcy5zbG1fcGVuZGluZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuam9pbmVkUGVuZGluZz0gdGhpcy5yZWNvcmRzLmpvaW5lZF9wZW5kaW5nX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nVGlja2V0cz0gdGhpcy5yZWNvcmRzLnByb2Nlc3NpbmdfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsbVByb2Nlc3Npbmc9IHRoaXMucmVjb3Jkcy5mbG1fcHJvY2Vzc2luZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2xtUHJvY2Vzc2luZz0gdGhpcy5yZWNvcmRzLnNsbV9wcm9jZXNzaW5nX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qb2luZWRQcm9jZXNzaW5nPSB0aGlzLnJlY29yZHMuam9pbmVkX3Byb2Nlc3NpbmdfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld1RpY2tldHM9IHRoaXMucmVjb3Jkcy5uZXdfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlZFRpY2tldHM9IHRoaXMucmVjb3Jkcy5jbG9zZWRfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlPSAnQ2FsbCBDZW50ZXIgVXNlcic7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG5cXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIH0sXFxuICAgICAgICBhc2lnbl9ncmFwaHMoKSB7XFxuICAgICAgICAgICAgdGhpcy5yZWNvcmRzID0gdGhpcy5yZWNvcmRzXFxuICAgICAgICAgICAgdGhpcy5jaGFydE9wdGlvbnMgPSB7XFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICBpZDogXFxcInZ1ZWNoYXJ0LWV4YW1wbGVcXFwiLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWzE5OTEsIDE5OTIsIDE5OTMsIDE5OTQsIDE5OTUsIDE5OTYsIDE5OTcsIDE5OThdLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAvLyoqKioqKioqKioqICovXFxuICAgICAgICAgICAgdGhpcy5kb251dENoYXJ0T3B0aW9ucyA9IHtcXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJyMwMDY4YjknLCAnIzAwNjhiOWFkJ10sXFxuXFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICBpZDogXFxcImRudDFcXFwiXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGxhYmVsczogW1xcXCJNYWpvclxcXCIsIFxcXCJNaW5vclxcXCJdLFxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXFxcIkNvbXBsYWludCBOYXR1cmVcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxcbiAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbe1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfV0sXFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnY2VudGVyJyxcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB0aGlzLmJhckNvdW50T3B0aW9ucyA9IHtcXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXFxuICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA5MDBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZiddXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2FsbCBTdGF0dXMnXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXFxcIlF1YXJ0ZXIgMVxcXCIsIFxcXCJRdWFydGVyIDJcXFwiLCBcXFwiUXVhcnRlciAzXFxcIiwgXFxcIlF1YXJ0ZXIgNFxcXCJdLFxcblxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1bmRlZmluZWRcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgIGZpbGw6IHtcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDQwXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICB9LFxcbiAgICAgICAgZ2V0TGFiZWwodmFsKSB7XFxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFxcXCJvYmplY3RcXFwiKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZmFyX25vICsgXFxcIiAtIFxcXCIgKyB2YWwubmFtZTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICAvLyBhc3luYyBnZXRfbWFjaGluZSgpIHtcXG4gICAgICAgIC8vICAgICBheGlvc1xcbiAgICAgICAgLy8gICAgICAgICAuZ2V0KFxcXCIvYXBpL3JlcG9ydHMvbWFjaGluZXNcXFwiLCB7XFxuICAgICAgICAvLyAgICAgICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzaXRlX2lkOiB0aGlzLnNlYXJjaC5zaXRlX2lkLFxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiB0aGlzLnNlYXJjaC5jYXRlZ29yeV9pZCxcXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6IHRoaXMuc2VhcmNoLnN1Yl9jYXRlZ29yeV9pZCxcXG4gICAgICAgIC8vICAgICAgICAgICAgIH0sXFxuICAgICAgICAvLyAgICAgICAgIH0pXFxuICAgICAgICAvLyAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zZWFyY2hfbWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGE7XFxuICAgICAgICAvLyAgICAgICAgIH0pXFxuICAgICAgICAvLyAgICAgICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oXFxcIk9oLiBTb21ldGhpbmcgd2VudCB3cm9uZ1xcXCIpKTtcXG4gICAgICAgIC8vIH0sXFxuICAgIH0sXFxufTtcXG48L3NjcmlwdD5cXG48c3R5bGUgc2NvcGVkPlxcbi5kYXNoYm9hcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2FyZC1ib2R5IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaDIudGlja2V0LWNvdW50IHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oNCB7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zaGFkb3cge1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnRleHQtc3VjY2VzcyB7XFxuICBjb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNhcmRbZGF0YS12LTQyYzY3OTZlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc3ZTNhO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc3VuaXRhYmFnL0Rlc2t0b3AvcGhwL2F0bV9vbGQvYXRtL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0luZm9DYXJkLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBbUJBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiSW5mb0NhcmQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgbWItNFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICA8aDU+e3sgdGl0bGUgfX08L2g1PlxcbiAgICAgICAgPHA+e3sgdmFsdWUgfX08L3A+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC90ZW1wbGF0ZT5cXG5cXG4gIDxzY3JpcHQ+XFxuICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIHByb3BzOiB7XFxuICAgICAgdGl0bGU6IFN0cmluZyxcXG4gICAgICB2YWx1ZTogTnVtYmVyXFxuICAgIH1cXG4gIH07XFxuICA8L3NjcmlwdD5cXG5cXG4gIDxzdHlsZSBzY29wZWQ+XFxuICAuY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzdlM2E7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgfVxcbiAgPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgIT0gXCIyXCJcbiAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkIGRhc2hib2FyZFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNCBjb2wtc20tNiBjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveCBiZy1wdXJwbGVcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVG90YWwgVGlja2V0c1wiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtbnVtYmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50b3RhbFRpY2tldHMpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYnRuLXNtIGN1c3RvbS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2sgIWltcG9ydGFudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9jb21wbGFpbnQtbGlzdC9hbGxcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgVmlldyBEZXRhaWxzXFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNCBjb2wtc20tNiBjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveCBiZy1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUGVuZGluZyBUaWNrZXRzXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1udW1iZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBlbmRpbmdUaWNrZXRzKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSA0XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGTE06IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZsbVBlbmRpbmcpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB8IFNMTTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc2xtUGVuZGluZykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHwgSk9JTkVEOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5qb2luZWRQZW5kaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYnRuLXNtIGN1c3RvbS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2sgIWltcG9ydGFudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9jb21wbGFpbnQtbGlzdC9hbGwvUGVuZGluZ1wiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00IGNvbC1zbS02IGNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94IGJnLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUHJvY2Vzc2luZyBUaWNrZXRzXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1udW1iZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnByb2Nlc3NpbmdUaWNrZXRzKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSA0XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGTE06IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZsbVByb2Nlc3NpbmcpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB8IFNMTTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc2xtUHJvY2Vzc2luZykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHwgSk9JTkVEOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5qb2luZWRQcm9jZXNzaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGN1c3RvbS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2sgIWltcG9ydGFudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9jb21wbGFpbnQtbGlzdC9hbGwvUHJvY2Vzc2luZ1wiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtYm9yZGVyZWRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIk5ldyBUaWNrZXRzXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLm5ld1RpY2tldHMpKV0pXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIkNsb3NlZCBUaWNrZXRzXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLmNsb3NlZFRpY2tldHMpKV0pXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMiB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIllvdSBoYXZlIGxvZ2dlZCBpbiBhcyBcIiksXG4gICAgICAgICAgICAgIF92bS5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSA0XG4gICAgICAgICAgICAgICAgPyBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRW1wbG95ZWVcIilcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09IDNcbiAgICAgICAgICAgICAgICA/IF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDbGllbnRcIilcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG10LTVcIiwgYXR0cnM6IHsgaWQ6IFwiYXBwXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LFxuICAgICAgICAgIF92bS5fbChfdm0ucmVjb3JkcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwiSW5mb0NhcmRcIiwge1xuICAgICAgICAgICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBpdGVtLm5hbWUsIHZhbHVlOiBpdGVtLnJvd3MgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1pY29uXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGlja2V0LWFsdFwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtaWNvblwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRpY2tldC1hbHRcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWljb25cIiB9LCBbXG4gICAgICBfYyhcImlcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10aWNrZXQtYWx0XCIsXG4gICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwicGItMlwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRpY2tldC1hbHRcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJwYi0yXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGlja2V0LWFsdFwiIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTI4OGNiYzM5XCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgbWItNFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICBfYyhcImg1XCIsIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS52YWx1ZSkpXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNDJjNjc5NmVcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjg4Y2JjMzlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZDM4ZDI3YTBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yODhjYmMzOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjg4Y2JjMzlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00MmM2Nzk2ZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0luZm9DYXJkLnZ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI4Y2MxN2U3MFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQyYzY3OTZlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW5mb0NhcmQudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00MmM2Nzk2ZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0luZm9DYXJkLnZ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yODhjYmMzOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yODhjYmMzOVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0yODhjYmMzOVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjg4Y2JjMzlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yODhjYmMzOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00MmM2Nzk2ZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0luZm9DYXJkLnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9JbmZvQ2FyZC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0luZm9DYXJkLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00MmM2Nzk2ZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0luZm9DYXJkLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi00MmM2Nzk2ZVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0luZm9DYXJkLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00MmM2Nzk2ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQyYzY3OTZlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=