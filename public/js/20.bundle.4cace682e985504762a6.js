(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module './components/InfoCard.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    InfoCard: !(function webpackMissingModule() { var e = new Error("Cannot find module './components/InfoCard.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
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
      totalTickets: 184613,
      pendingTickets: 0,
      flmPending: 0,
      slmPending: 0,
      joinedPending: 0,
      processingTickets: 49,
      flmProcessing: 39,
      slmProcessing: 1,
      joinedProcessing: 9,
      newTickets: 0,
      closedTickets: 0,
      authUser: localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : null,
      userRole: "",
      dashData: [{
        id: 1,
        title: "Total Complaint types",
        value: 25
      }, {
        id: 2,
        title: "Total States",
        value: 8
      }, {
        id: 3,
        title: "Total Districts",
        value: 25
      }, {
        id: 4,
        title: "Total Cities",
        value: 98
      }, {
        id: 5,
        title: "Total Postcodes",
        value: 331
      }, {
        id: 6,
        title: "Total Area codes",
        value: 1356
      }, {
        id: 7,
        title: "Total Banks",
        value: 22
      }, {
        id: 8,
        title: "Total Clients",
        value: 8
      }, {
        id: 9,
        title: "Total Client Code",
        value: 18
      }, {
        id: 10,
        title: "Total Call Center Users",
        value: 34
      }, {
        id: 11,
        title: "Total Complaint",
        value: 185401
      }, {
        id: 12,
        title: "Total Custodians",
        value: 196
      }]
    };
  },
  updated: function () {
    this.$nextTick(function () {
      // this.asign_graphs();
    });
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
  },
  beforeCreate() {
    this.authUser = localStorage.getItem("auth");
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
    // if (this.$gate.isAdmin()) {
    //     // this.$router.push('/users').catch(() => { });
    // } else {
    //     this.$router.push("/tickets").catch(() => { });
    // }
  },
  methods: {
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

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-d9d87682\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-d9d87682","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.dashboard[data-v-d9d87682] {\n  background-color: #f8f9fa;\n  min-height: 100vh;\n}\n.card[data-v-d9d87682] {\n  border-radius: 10px;\n}\n.card-body[data-v-d9d87682] {\n  color: white;\n}\nh2.ticket-count[data-v-d9d87682] {\n  font-size: 4rem;\n  font-weight: bold;\n}\nh4[data-v-d9d87682] {\n  color: #333;\n}\np[data-v-d9d87682] {\n  margin: 0;\n}\n.shadow[data-v-d9d87682] {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.text-success[data-v-d9d87682] {\n  color: #28a745 !important;\n}\n", "", {"version":3,"sources":["C:/Users/sujan/Desktop/Work/project freelance/Sankha/atm_proj/atm/resources/js/components/Dashboard/resources/js/components/Dashboard/DashboardCallLockStatus.vue"],"names":[],"mappings":";AA+oBA;EACA,0BAAA;EACA,kBAAA;CACA;AAEA;EACA,oBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,gBAAA;EACA,kBAAA;CACA;AAEA;EACA,YAAA;CACA;AAEA;EACA,UAAA;CACA;AAEA;EACA,yCAAA;CACA;AAEA;EACA,0BAAA;CACA","file":"DashboardCallLockStatus.vue","sourcesContent":["<template>\n    <div class=\"container-fluid dashboard\"  v-if=\"authUser.id_cms_privileges!='2'\">\n      <!-- Header Row -->\n      <div class=\"row\">\n        <div class=\"col-md-12 text-center py-3\" style=\"background-color: #40E0D0;\">\n          <h4>Dashboard</h4>\n        </div>\n      </div>\n\n      <!-- Top Row for Tickets -->\n      <div class=\"row justify-content-center my-4\">\n        <!-- Total Tickets -->\n        <div class=\"col-md-4\">\n          <div class=\"card text-center shadow\" style=\"border-radius: 50px;\">\n            <div class=\"card-body\" style=\"background: linear-gradient(to bottom, #ff7e67, #ffb3a7); border-radius: 50px;\">\n              <h2 class=\"ticket-count\">{{ totalTickets }}</h2>\n              <p>Total Tickets</p>\n              <a href=\"#\" class=\"btn btn-outline-light btn-sm\">View Details</a>\n            </div>\n          </div>\n        </div>\n\n        <!-- Pending Tickets -->\n        <div class=\"col-md-4\">\n          <div class=\"card text-center shadow\" style=\"border-radius: 50px;\">\n            <div class=\"card-body\" style=\"background: linear-gradient(to bottom, #918af4, #b3a6f6); border-radius: 50px;\">\n              <h2 class=\"ticket-count\">{{ pendingTickets }}</h2>\n              <p>Pending Tickets</p>\n              <p>FLM: {{ flmPending }} | SLM: {{ slmPending }} | JOINED: {{ joinedPending }}</p>\n              <a href=\"#\" class=\"btn btn-outline-light btn-sm\">View Details</a>\n            </div>\n          </div>\n        </div>\n\n        <!-- Processing Tickets -->\n        <div class=\"col-md-4\">\n          <div class=\"card text-center shadow\" style=\"border-radius: 50px;\">\n            <div class=\"card-body\" style=\"background: linear-gradient(to bottom, #d381f2, #d9a4f4); border-radius: 50px;\">\n              <h2 class=\"ticket-count\">{{ processingTickets }}</h2>\n              <p>Processing Tickets</p>\n              <p>FLM: {{ flmProcessing }} | SLM: {{ slmProcessing }} | JOINED: {{ joinedProcessing }}</p>\n              <a href=\"#\" class=\"btn btn-outline-light btn-sm\">View Details</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Ticket Status Section -->\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-6\">\n          <div class=\"card shadow\">\n            <div class=\"card-body text-center\">\n              <h4>New Tickets</h4>\n              <p style=\"color:gray;\">{{ newTickets }}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"card shadow\">\n            <div class=\"card-body text-center\">\n              <h4>Closed Tickets</h4>\n              <p style=\"color:gray;\">{{ closedTickets }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- User Role Section -->\n      <div class=\"row justify-content-center mt-4\">\n        <div class=\"col-md-12 text-center\">\n          <p>You have logged in as <strong class=\"text-success\">{{ userRole }}</strong></p>\n        </div>\n      </div>\n    </div>\n    <div id=\"app\" class=\"container mt-5\" v-else>\n    <div class=\"row\">\n      <InfoCard v-for=\"item in dashData\" :key=\"item.id\" :title=\"item.title\" :value=\"item.value\" />\n    </div>\n  </div>\n  </template>\n\n<script>\nimport InfoCard from './components/InfoCard.vue'\nexport default {\n    components: {\n    InfoCard\n  },\n    data() {\n        return {\n            far_details: {\n                actual_material_cost: 0,\n                actual_service_cost: 0,\n                records: []\n            },\n            records: '',\n            search: {\n                financial_year: '',\n                quarter: '',\n                month: '',\n                date_from: '',\n                date_to: '',\n                site_id: '',\n                category_id: '',\n                sub_category_id: '',\n                machine_id: '',\n            },\n            monthNames: [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\",\n                \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"],\n\n            chartOptions: {\n                chart: {\n                    id: \"vuechart-example\",\n                },\n                xaxis: {\n                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],\n                },\n            },\n            series: [\n                {\n                    name: \"series-1\",\n                    data: [30, 40, 35, 50, 49, 60, 70, 91],\n                },\n            ],\n\n            //*********** */\n\n            donutSeries: [44, 55],\n            donutChartOptions: {\n                colors: ['#004488', '#38c172'],\n\n                chart: {\n                    id: \"dnt1\"\n                },\n                labels: [\"Major\", \"Minor\"],\n                title: {\n                    text: \"Complaint Nature\",\n                    align: 'center',\n                },\n\n                responsive: [{\n                    breakpoint: 480,\n                    options: {\n                        chart: {\n                            width: 200\n                        },\n\n                        legend: {\n                            position: 'bottom',\n                            horizontalAlign: 'left',\n                        }\n                    }\n                }],\n                legend: {\n                    position: 'bottom',\n                    horizontalAlign: 'center',\n                }\n            },\n            barCountOptions: {\n                chart: {\n                    type: 'bar',\n                    height: 250,\n                    stacked: true,\n                },\n                plotOptions: {\n                    bar: {\n                        horizontal: true,\n                        colors: ['#FF5733', '#33FF57'],\n                        dataLabels: {\n                            total: {\n                                enabled: true,\n                                offsetX: 0,\n                                style: {\n                                    fontSize: '13px',\n                                    fontWeight: 900\n                                }\n                            }\n                        }\n                    },\n                },\n                stroke: {\n                    width: 1,\n                    colors: ['#fff']\n                },\n                title: {\n                    text: undefined\n                },\n                xaxis: {\n                    categories: [\"Quarter 1\", \"Quarter 2\", \"Quarter 3\", \"Quarter 4\"],\n\n                },\n                yaxis: {\n                    title: {\n                        text: undefined\n                    },\n                },\n\n                fill: {\n                    opacity: 1\n                },\n                legend: {\n                    position: 'top',\n                    horizontalAlign: 'left',\n                    offsetX: 40\n                }\n            },\n\n            barEquipmentOptions: {\n\n                series: [],\n                chartOptions: {\n                    chart: {\n                        id: 'equipmentChart',\n                        type: 'bar',\n                        height: 350,\n                        stacked: true,\n                        toolbar: {\n                            show: true\n                        },\n                        zoom: {\n                            enabled: true\n                        },\n                        events: {\n                            dataPointSelection: (event, chartContext, config) => {\n                                console.log(chartContext)\n                                var categoryIndex = config.dataPointIndex;\n                                var far_no = this.barEquipmentOptions.chartOptions.xaxis.categories[categoryIndex];\n\n                                // axios.get('api/get_machine_for_dashboard', {\n                                //     params: {\n                                //         'far_no': far_no\n                                //     }\n                                // })\n                                //     .then((response) => {\n                                //         this.far_details = response.data.data\n                                //         $('#countComplaintModal').modal('show');\n                                //     })\n                                //     .catch(function (error) {\n                                //         console.error('There was an error!', error);\n                                //     });\n\n                                // You can replace the alert with your custom popup logic\n                                // For example, open a modal or a custom popup\n                            }\n                        }\n                    },\n                    responsive: [{\n                        breakpoint: 480,\n                        options: {\n                            legend: {\n                                position: 'bottom',\n                                offsetX: -10,\n                                offsetY: 0\n                            }\n                        }\n                    }],\n                    plotOptions: {\n                        bar: {\n                            horizontal: false,\n                            borderRadius: 1,\n                            borderRadiusApplication: 'end', // 'around', 'end'\n                            borderRadiusWhenStacked: 'last', // 'all', 'last'\n                            dataLabels: {\n                                total: {\n                                    enabled: true,\n                                    style: {\n                                        fontSize: '9px',\n                                        fontWeight: 900\n                                    }\n                                }\n                            }\n                        },\n                    },\n                    xaxis: {\n                        labels: {\n                            rotate: -45\n                        },\n                        categories: [],\n                        tickPlacement: 'on'\n                    },\n                    legend: {\n                        position: 'bottom',\n                        offsetY: 0\n                    },\n                    fill: {\n                        opacity: 1\n                    }\n                },\n            },\n            //******* */\n\n            barProjectOptions: {\n\n                series: [],\n                chartOptions: {\n                    chart: {\n                        type: 'bar',\n                        height: 400,\n                        stacked: true,\n                    },\n                    plotOptions: {\n                    bar: {\n                        horizontal: true,\n                            dataLabels: {\n                                total: {\n                                    enabled: true,\n                                    offsetX: 0,\n                                    style: {\n                                    fontSize: '13px',\n                                    fontWeight: 900\n                                    }\n                                }\n                            }\n                        },\n                    },\n                    responsive: [{\n                        breakpoint: 480,\n                        options: {\n                            legend: {\n                                position: 'bottom',\n                                offsetX: -10,\n                                offsetY: 0\n                            }\n                        }\n                    }],\n                    xaxis: {\n                        categories: [],\n                    },\n                    fill: {\n                        opacity: 1\n                    },\n                    legend: {\n                        show: false,\n                        position: 'bottom',\n                        offsetX: 0,\n                        offsetY: 0\n                    },\n                },\n\n            },\n\n            financial_years: [],\n            search_machines: [],\n            search_sites: [],\n            search_tickets: [],\n            categories: [],\n            sub_categories: [],\n            sites: [],\n            machines: [],\n            totalTickets: 184613,\n      pendingTickets: 0,\n      flmPending: 0,\n      slmPending: 0,\n      joinedPending: 0,\n      processingTickets: 49,\n      flmProcessing: 39,\n      slmProcessing: 1,\n      joinedProcessing: 9,\n      newTickets: 0,\n      closedTickets: 0,\n      authUser: localStorage.getItem(\"auth\") ? JSON.parse(localStorage.getItem(\"auth\")) : null,\n      userRole: \"\",\n      dashData: [\n        { id: 1, title: \"Total Complaint types\", value: 25 },\n        { id: 2, title: \"Total States\", value: 8 },\n        { id: 3, title: \"Total Districts\", value: 25 },\n        { id: 4, title: \"Total Cities\", value: 98 },\n        { id: 5, title: \"Total Postcodes\", value: 331 },\n        { id: 6, title: \"Total Area codes\", value: 1356 },\n        { id: 7, title: \"Total Banks\", value: 22 },\n        { id: 8, title: \"Total Clients\", value: 8 },\n        { id: 9, title: \"Total Client Code\", value: 18 },\n        { id: 10, title: \"Total Call Center Users\", value: 34 },\n        { id: 11, title: \"Total Complaint\", value: 185401 },\n        { id: 12, title: \"Total Custodians\", value: 196 }\n      ],\n        };\n    },\n    updated: function () {\n        this.$nextTick(function () {\n            // this.asign_graphs();\n        })\n    },\n    watch: {\n        'search.quarter'(n) {\n            if (n) {\n                this.search.date_from = ''\n                this.search.date_to = ''\n                this.search.month = ''\n            }\n        },\n        'search.date_from'(n) {\n            if (n) {\n                this.search.month = ''\n                this.search.quarter = ''\n            }\n        },\n        'search.date_to'(n) {\n            if (n) {\n                this.search.month = ''\n                this.search.quarter = ''\n            }\n        },\n        'search.month'(n) {\n            if (n) {\n                this.search.date_from = ''\n                this.search.date_to = ''\n                this.search.quarter = ''\n            }\n        },\n\n        search: {\n            handler: function (n) {\n                axios.post('api/dashboard', this.search)\n                    .then(res => {\n                        this.records = res.data.data\n                        this.barEquipmentOptions.chartOptions.xaxis.categories = res.data.data.EquipmentChart.series\n                        this.barEquipmentOptions.series = res.data.data.EquipmentChart.data\n\n\n\n                        this.$refs.barCountChart.updateSeries(this.records.barCountChart.series, true)\n                        this.$refs.barCountChart.updateOptions(this.records.barCountChart.options, false, true)\n\n                    })\n                    .catch(err => {\n                        console.error(err);\n                    })\n            },\n            deep: true\n        },\n        async \"search.sub_category_id\"(n, o) {\n            if (n) {\n                this.get_machine();\n            }\n        },\n        async \"search.site_id\"(n, o) {\n            if (n) {\n                this.get_machine();\n            }\n        },\n\n        \"search.category_id\": {\n            handler: function (n, o) {\n                if (n) {\n                    axios.get(\"api/category/\" + n).then((res) => {\n                        this.sub_categories = res.data.data;\n                    });\n                    this.get_machine();\n                }\n            },\n            deep: true,\n            initial: true,\n        },\n    },\n    created() {\n        var yearsLength = 30;\n        var currentYear = new Date().getFullYear();\n        for (var i = 2022; i <= currentYear; i++) {\n            var next = i + 1;\n            var year = i + '-' + next.toString();\n            this.financial_years.push(year)\n        }\n    },\n    beforeCreate() {\n\n        this.authUser=localStorage.getItem(\"auth\");\n        if (this.authUser) {\n            this.authUser = JSON.parse(this.authUser);\n            if(this.authUser.id_cms_privileges==3){\n                this.userRole=\"Client employee\";\n            }else if(this.authUser.id_cms_privileges==4){\n                this.userRole=\"Call Center User\";\n            }\n        }\n\n        axios.get('api/dashboard')\n            .then(res => {\n                this.records = res.data.data\n                if(this.authUser.id_cms_privileges==2){\n                    console.log(\"this.records\",this.records);\n\n\n                }else{\n                        console.log(\"this.records\",this.records);\n                        this.totalTickets= this.records.total_tickets;\n                        this.pendingTickets= this.records.pending_tickets;\n                        this.flmPending= this.records.flm_pending_tickets;\n                        this.slmPending= this.records.slm_pending_tickets;\n                        this.joinedPending= this.records.joined_pending_tickets;\n                        this.processingTickets= this.records.processing_tickets;\n                        this.flmProcessing= this.records.flm_processing_tickets;\n                        this.slmProcessing= this.records.slm_processing_tickets;\n                        this.joinedProcessing= this.records.joined_processing_tickets;\n                        this.newTickets= this.records.new_tickets;\n                        this.closedTickets= this.records.closed_tickets;\n                        this.userRole= 'Call Center User';\n                }\n\n\n            })\n            .catch(err => {\n                console.error(err);\n            })\n\n\n        // axios.get(\"api/get_pre_machine\").then((res) => {\n        //     this.categories = res.data.data.Category;\n        //     this.sites = res.data.data.sites;\n        // });\n        // axios\n        //     .get(\"/api/initial_ticket\")\n        //     .then((response) => {\n        //         this.users = response.data.data.vendors;\n        //         this.machines = response.data.data.machines;\n        //         this.search_machines = response.data.data.machines;\n        //         this.search_sites = response.data.data.sites;\n        //         this.created_users = response.data.data.created_users;\n        //     })\n        //     .catch(() => console.warn(\"Oh. Something went wrong\"));\n\n\n    },\n    mounted() {\n        this.authUser=localStorage.getItem(\"auth\");\n        if (this.authUser) {\n            this.authUser = JSON.parse(this.authUser);\n            if(this.authUser.id_cms_privileges==3){\n                this.userRole=\"Client employee\";\n            }else if(this.authUser.id_cms_privileges==4){\n                this.userRole=\"Call Center User\";\n            }\n        }\n        // if (this.$gate.isAdmin()) {\n        //     // this.$router.push('/users').catch(() => { });\n        // } else {\n        //     this.$router.push(\"/tickets\").catch(() => { });\n        // }\n    },\n    methods: {\n        asign_graphs() {\n            this.records = this.records\n            this.chartOptions = {\n                chart: {\n                    id: \"vuechart-example\",\n                },\n                xaxis: {\n                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],\n                },\n            }\n            //*********** */\n            this.donutChartOptions = {\n                colors: ['#0068b9', '#0068b9ad'],\n\n                chart: {\n                    id: \"dnt1\"\n                },\n                labels: [\"Major\", \"Minor\"],\n                title: {\n                    text: \"Complaint Nature\",\n                    align: 'center',\n                },\n\n                responsive: [{\n                    breakpoint: 480,\n                    options: {\n                        chart: {\n                            width: 200\n                        },\n\n                        legend: {\n                            position: 'bottom',\n                            horizontalAlign: 'left',\n                        }\n                    }\n                }],\n                legend: {\n                    position: 'bottom',\n                    horizontalAlign: 'center',\n                }\n            }\n\n            this.barCountOptions = {\n                chart: {\n                    type: 'bar',\n                    height: 350,\n                    stacked: true,\n                },\n                plotOptions: {\n                    bar: {\n                        horizontal: true,\n                        dataLabels: {\n                            total: {\n                                enabled: true,\n                                offsetX: 0,\n                                style: {\n                                    fontSize: '13px',\n                                    fontWeight: 900\n                                }\n                            }\n                        }\n                    },\n                },\n                stroke: {\n                    width: 1,\n                    colors: ['#fff']\n                },\n                title: {\n                    text: 'Call Status'\n                },\n                xaxis: {\n                    categories: [\"Quarter 1\", \"Quarter 2\", \"Quarter 3\", \"Quarter 4\"],\n\n                },\n                yaxis: {\n                    title: {\n                        text: undefined\n                    },\n                },\n\n                fill: {\n                    opacity: 1\n                },\n                legend: {\n                    position: 'top',\n                    horizontalAlign: 'left',\n                    offsetX: 40\n                }\n            }\n\n        },\n        getLabel(val) {\n            if (typeof val === \"object\") {\n                return val.far_no + \" - \" + val.name;\n            } else {\n                return val;\n            }\n        },\n        // async get_machine() {\n        //     axios\n        //         .get(\"/api/reports/machines\", {\n        //             params: {\n        //                 site_id: this.search.site_id,\n        //                 category_id: this.search.category_id,\n        //                 sub_category_id: this.search.sub_category_id,\n        //             },\n        //         })\n        //         .then((response) => {\n        //             this.search_machines = response.data.data;\n        //         })\n        //         .catch(() => console.warn(\"Oh. Something went wrong\"));\n        // },\n    },\n};\n</script>\n<style scoped>\n.dashboard {\n  background-color: #f8f9fa;\n  min-height: 100vh;\n}\n\n.card {\n  border-radius: 10px;\n}\n\n.card-body {\n  color: white;\n}\n\nh2.ticket-count {\n  font-size: 4rem;\n  font-weight: bold;\n}\n\nh4 {\n  color: #333;\n}\n\np {\n  margin: 0;\n}\n\n.shadow {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.text-success {\n  color: #28a745 !important;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d9d87682\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d9d87682","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue ***!
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
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "row justify-content-center my-4" }, [
          _c("div", { staticClass: "col-md-4" }, [
            _c(
              "div",
              {
                staticClass: "card text-center shadow",
                staticStyle: { "border-radius": "50px" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "card-body",
                    staticStyle: {
                      background:
                        "linear-gradient(to bottom, #ff7e67, #ffb3a7)",
                      "border-radius": "50px"
                    }
                  },
                  [
                    _c("h2", { staticClass: "ticket-count" }, [
                      _vm._v(_vm._s(_vm.totalTickets))
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v("Total Tickets")]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-outline-light btn-sm",
                        attrs: { href: "#" }
                      },
                      [_vm._v("View Details")]
                    )
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c(
              "div",
              {
                staticClass: "card text-center shadow",
                staticStyle: { "border-radius": "50px" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "card-body",
                    staticStyle: {
                      background:
                        "linear-gradient(to bottom, #918af4, #b3a6f6)",
                      "border-radius": "50px"
                    }
                  },
                  [
                    _c("h2", { staticClass: "ticket-count" }, [
                      _vm._v(_vm._s(_vm.pendingTickets))
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v("Pending Tickets")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "FLM: " +
                          _vm._s(_vm.flmPending) +
                          " | SLM: " +
                          _vm._s(_vm.slmPending) +
                          " | JOINED: " +
                          _vm._s(_vm.joinedPending)
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-outline-light btn-sm",
                        attrs: { href: "#" }
                      },
                      [_vm._v("View Details")]
                    )
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c(
              "div",
              {
                staticClass: "card text-center shadow",
                staticStyle: { "border-radius": "50px" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "card-body",
                    staticStyle: {
                      background:
                        "linear-gradient(to bottom, #d381f2, #d9a4f4)",
                      "border-radius": "50px"
                    }
                  },
                  [
                    _c("h2", { staticClass: "ticket-count" }, [
                      _vm._v(_vm._s(_vm.processingTickets))
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v("Processing Tickets")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "FLM: " +
                          _vm._s(_vm.flmProcessing) +
                          " | SLM: " +
                          _vm._s(_vm.slmProcessing) +
                          " | JOINED: " +
                          _vm._s(_vm.joinedProcessing)
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-outline-light btn-sm",
                        attrs: { href: "#" }
                      },
                      [_vm._v("View Details")]
                    )
                  ]
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row justify-content-center" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "card shadow" }, [
              _c("div", { staticClass: "card-body text-center" }, [
                _c("h4", [_vm._v("New Tickets")]),
                _vm._v(" "),
                _c("p", { staticStyle: { color: "gray" } }, [
                  _vm._v(_vm._s(_vm.newTickets))
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "card shadow" }, [
              _c("div", { staticClass: "card-body text-center" }, [
                _c("h4", [_vm._v("Closed Tickets")]),
                _vm._v(" "),
                _c("p", { staticStyle: { color: "gray" } }, [
                  _vm._v(_vm._s(_vm.closedTickets))
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row justify-content-center mt-4" }, [
          _c("div", { staticClass: "col-md-12 text-center" }, [
            _c("p", [
              _vm._v("You have logged in as "),
              _c("strong", { staticClass: "text-success" }, [
                _vm._v(_vm._s(_vm.userRole))
              ])
            ])
          ])
        ])
      ])
    : _c("div", { staticClass: "container mt-5", attrs: { id: "app" } }, [
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.dashData, function(item) {
            return _c("InfoCard", {
              key: item.id,
              attrs: { title: item.title, value: item.value }
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
    return _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "col-md-12 text-center py-3",
          staticStyle: { "background-color": "#40E0D0" }
        },
        [_c("h4", [_vm._v("Dashboard")])]
      )
    ])
  }
]
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-d9d87682\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-d9d87682","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-d9d87682","scoped":true,"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DashboardCallLockStatus.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-d9d87682\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("166afb5a", content, false, {});
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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d9d87682_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DashboardCallLockStatus_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-d9d87682","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./DashboardCallLockStatus.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d9d87682\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-d9d87682","scoped":true,"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./DashboardCallLockStatus.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-d9d87682\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d9d87682"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DashboardCallLockStatus_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d9d87682_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DashboardCallLockStatus_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d9d87682_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DashboardCallLockStatus_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\Dashboard\\DashboardCallLockStatus.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlPzFhZDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZT81N2ZmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWU/NTIxYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlIl0sIm5hbWVzIjpbImNvbXBvbmVudHMiLCJJbmZvQ2FyZCIsImRhdGEiLCJmYXJfZGV0YWlscyIsImFjdHVhbF9tYXRlcmlhbF9jb3N0IiwiYWN0dWFsX3NlcnZpY2VfY29zdCIsInJlY29yZHMiLCJzZWFyY2giLCJmaW5hbmNpYWxfeWVhciIsInF1YXJ0ZXIiLCJtb250aCIsImRhdGVfZnJvbSIsImRhdGVfdG8iLCJzaXRlX2lkIiwiY2F0ZWdvcnlfaWQiLCJzdWJfY2F0ZWdvcnlfaWQiLCJtYWNoaW5lX2lkIiwibW9udGhOYW1lcyIsImNoYXJ0T3B0aW9ucyIsImNoYXJ0IiwiaWQiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJzZXJpZXMiLCJuYW1lIiwiZG9udXRTZXJpZXMiLCJkb251dENoYXJ0T3B0aW9ucyIsImNvbG9ycyIsImxhYmVscyIsInRpdGxlIiwidGV4dCIsImFsaWduIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJvcHRpb25zIiwid2lkdGgiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImhvcml6b250YWxBbGlnbiIsImJhckNvdW50T3B0aW9ucyIsInR5cGUiLCJoZWlnaHQiLCJzdGFja2VkIiwicGxvdE9wdGlvbnMiLCJiYXIiLCJob3Jpem9udGFsIiwiZGF0YUxhYmVscyIsInRvdGFsIiwiZW5hYmxlZCIsIm9mZnNldFgiLCJzdHlsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInN0cm9rZSIsInlheGlzIiwiZmlsbCIsIm9wYWNpdHkiLCJiYXJFcXVpcG1lbnRPcHRpb25zIiwidG9vbGJhciIsInNob3ciLCJ6b29tIiwiZXZlbnRzIiwiZGF0YVBvaW50U2VsZWN0aW9uIiwiY29uc29sZSIsIm9mZnNldFkiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJSYWRpdXNBcHBsaWNhdGlvbiIsImJvcmRlclJhZGl1c1doZW5TdGFja2VkIiwicm90YXRlIiwidGlja1BsYWNlbWVudCIsImJhclByb2plY3RPcHRpb25zIiwiZmluYW5jaWFsX3llYXJzIiwic2VhcmNoX21hY2hpbmVzIiwic2VhcmNoX3NpdGVzIiwic2VhcmNoX3RpY2tldHMiLCJzdWJfY2F0ZWdvcmllcyIsInNpdGVzIiwibWFjaGluZXMiLCJ0b3RhbFRpY2tldHMiLCJwZW5kaW5nVGlja2V0cyIsImZsbVBlbmRpbmciLCJzbG1QZW5kaW5nIiwiam9pbmVkUGVuZGluZyIsInByb2Nlc3NpbmdUaWNrZXRzIiwiZmxtUHJvY2Vzc2luZyIsInNsbVByb2Nlc3NpbmciLCJqb2luZWRQcm9jZXNzaW5nIiwibmV3VGlja2V0cyIsImNsb3NlZFRpY2tldHMiLCJhdXRoVXNlciIsInVzZXJSb2xlIiwiZGFzaERhdGEiLCJ2YWx1ZSIsInVwZGF0ZWQiLCJ3YXRjaCIsImhhbmRsZXIiLCJheGlvcyIsInRoZW4iLCJjYXRjaCIsImRlZXAiLCJpbml0aWFsIiwiY3JlYXRlZCIsImJlZm9yZUNyZWF0ZSIsIm1vdW50ZWQiLCJtZXRob2RzIiwiYXNpZ25fZ3JhcGhzIiwiZ2V0TGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQztBQUNsQyxJQUFJLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQzNOaEI7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMseW1CQUFpVTtBQUN2VjtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsZ0lBQW1FO0FBQ3JGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ1hmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtQkFBTyxDQUFDLDZvQkFBMFM7QUFDcFQ7QUFDQTtBQUNpSTtBQUNhO0FBQzlJO0FBQytWO0FBQy9WO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0c7QUFDdEcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLDBJQUFjO0FBQ2hCLEVBQUUsaVBBQWM7QUFDaEIsRUFBRSwwUEFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvMjAuYnVuZGxlLjRjYWNlNjgyZTk4NTUwNDc2MmE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgZGFzaGJvYXJkXCIgIHYtaWY9XCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyE9JzInXCI+XG4gICAgICA8IS0tIEhlYWRlciBSb3cgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgdGV4dC1jZW50ZXIgcHktM1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzQwRTBEMDtcIj5cbiAgICAgICAgICA8aDQ+RGFzaGJvYXJkPC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBUb3AgUm93IGZvciBUaWNrZXRzIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG15LTRcIj5cbiAgICAgICAgPCEtLSBUb3RhbCBUaWNrZXRzIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCB0ZXh0LWNlbnRlciBzaGFkb3dcIiBzdHlsZT1cImJvcmRlci1yYWRpdXM6IDUwcHg7XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmY3ZTY3LCAjZmZiM2E3KTsgYm9yZGVyLXJhZGl1czogNTBweDtcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGlja2V0LWNvdW50XCI+e3sgdG90YWxUaWNrZXRzIH19PC9oMj5cbiAgICAgICAgICAgICAgPHA+VG90YWwgVGlja2V0czwvcD5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc21cIj5WaWV3IERldGFpbHM8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBQZW5kaW5nIFRpY2tldHMgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHRleHQtY2VudGVyIHNoYWRvd1wiIHN0eWxlPVwiYm9yZGVyLXJhZGl1czogNTBweDtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIiBzdHlsZT1cImJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM5MThhZjQsICNiM2E2ZjYpOyBib3JkZXItcmFkaXVzOiA1MHB4O1wiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aWNrZXQtY291bnRcIj57eyBwZW5kaW5nVGlja2V0cyB9fTwvaDI+XG4gICAgICAgICAgICAgIDxwPlBlbmRpbmcgVGlja2V0czwvcD5cbiAgICAgICAgICAgICAgPHA+RkxNOiB7eyBmbG1QZW5kaW5nIH19IHwgU0xNOiB7eyBzbG1QZW5kaW5nIH19IHwgSk9JTkVEOiB7eyBqb2luZWRQZW5kaW5nIH19PC9wPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1zbVwiPlZpZXcgRGV0YWlsczwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIFByb2Nlc3NpbmcgVGlja2V0cyAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgdGV4dC1jZW50ZXIgc2hhZG93XCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiA1MHB4O1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiIHN0eWxlPVwiYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2QzODFmMiwgI2Q5YTRmNCk7IGJvcmRlci1yYWRpdXM6IDUwcHg7XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRpY2tldC1jb3VudFwiPnt7IHByb2Nlc3NpbmdUaWNrZXRzIH19PC9oMj5cbiAgICAgICAgICAgICAgPHA+UHJvY2Vzc2luZyBUaWNrZXRzPC9wPlxuICAgICAgICAgICAgICA8cD5GTE06IHt7IGZsbVByb2Nlc3NpbmcgfX0gfCBTTE06IHt7IHNsbVByb2Nlc3NpbmcgfX0gfCBKT0lORUQ6IHt7IGpvaW5lZFByb2Nlc3NpbmcgfX08L3A+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYnRuLXNtXCI+VmlldyBEZXRhaWxzPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gVGlja2V0IFN0YXR1cyBTZWN0aW9uIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHNoYWRvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDQ+TmV3IFRpY2tldHM8L2g0PlxuICAgICAgICAgICAgICA8cCBzdHlsZT1cImNvbG9yOmdyYXk7XCI+e3sgbmV3VGlja2V0cyB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgc2hhZG93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoND5DbG9zZWQgVGlja2V0czwvaDQ+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPVwiY29sb3I6Z3JheTtcIj57eyBjbG9zZWRUaWNrZXRzIH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gVXNlciBSb2xlIFNlY3Rpb24gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPHA+WW91IGhhdmUgbG9nZ2VkIGluIGFzIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj57eyB1c2VyUm9sZSB9fTwvc3Ryb25nPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwiYXBwXCIgY2xhc3M9XCJjb250YWluZXIgbXQtNVwiIHYtZWxzZT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8SW5mb0NhcmQgdi1mb3I9XCJpdGVtIGluIGRhc2hEYXRhXCIgOmtleT1cIml0ZW0uaWRcIiA6dGl0bGU9XCJpdGVtLnRpdGxlXCIgOnZhbHVlPVwiaXRlbS52YWx1ZVwiIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEluZm9DYXJkIGZyb20gJy4vY29tcG9uZW50cy9JbmZvQ2FyZC52dWUnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgIEluZm9DYXJkXG4gIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZhcl9kZXRhaWxzOiB7XG4gICAgICAgICAgICAgICAgYWN0dWFsX21hdGVyaWFsX2Nvc3Q6IDAsXG4gICAgICAgICAgICAgICAgYWN0dWFsX3NlcnZpY2VfY29zdDogMCxcbiAgICAgICAgICAgICAgICByZWNvcmRzOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlY29yZHM6ICcnLFxuICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgZmluYW5jaWFsX3llYXI6ICcnLFxuICAgICAgICAgICAgICAgIHF1YXJ0ZXI6ICcnLFxuICAgICAgICAgICAgICAgIG1vbnRoOiAnJyxcbiAgICAgICAgICAgICAgICBkYXRlX2Zyb206ICcnLFxuICAgICAgICAgICAgICAgIGRhdGVfdG86ICcnLFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiAnJyxcbiAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsXG4gICAgICAgICAgICAgICAgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG5cbiAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInZ1ZWNoYXJ0LWV4YW1wbGVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsxOTkxLCAxOTkyLCAxOTkzLCAxOTk0LCAxOTk1LCAxOTk2LCAxOTk3LCAxOTk4XSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzZXJpZXMtMVwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMzAsIDQwLCAzNSwgNTAsIDQ5LCA2MCwgNzAsIDkxXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcblxuICAgICAgICAgICAgLy8qKioqKioqKioqKiAqL1xuXG4gICAgICAgICAgICBkb251dFNlcmllczogWzQ0LCA1NV0sXG4gICAgICAgICAgICBkb251dENoYXJ0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNvbG9yczogWycjMDA0NDg4JywgJyMzOGMxNzInXSxcblxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImRudDFcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXCJNYWpvclwiLCBcIk1pbm9yXCJdLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ29tcGxhaW50IE5hdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYXJDb3VudE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI0ZGNTczMycsICcjMzNGRjU3J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA5MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyNmZmYnXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXCJRdWFydGVyIDFcIiwgXCJRdWFydGVyIDJcIiwgXCJRdWFydGVyIDNcIiwgXCJRdWFydGVyIDRcIl0sXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogNDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBiYXJFcXVpcG1lbnRPcHRpb25zOiB7XG5cbiAgICAgICAgICAgICAgICBzZXJpZXM6IFtdLFxuICAgICAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdlcXVpcG1lbnRDaGFydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUG9pbnRTZWxlY3Rpb246IChldmVudCwgY2hhcnRDb250ZXh0LCBjb25maWcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hhcnRDb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnlJbmRleCA9IGNvbmZpZy5kYXRhUG9pbnRJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZhcl9ubyA9IHRoaXMuYmFyRXF1aXBtZW50T3B0aW9ucy5jaGFydE9wdGlvbnMueGF4aXMuY2F0ZWdvcmllc1tjYXRlZ29yeUluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBheGlvcy5nZXQoJ2FwaS9nZXRfbWFjaGluZV9mb3JfZGFzaGJvYXJkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgJ2Zhcl9ubyc6IGZhcl9ub1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5mYXJfZGV0YWlscyA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICQoJyNjb3VudENvbXBsYWludE1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIScsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gcmVwbGFjZSB0aGUgYWxlcnQgd2l0aCB5b3VyIGN1c3RvbSBwb3B1cCBsb2dpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSwgb3BlbiBhIG1vZGFsIG9yIGEgY3VzdG9tIHBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IC0xMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzQXBwbGljYXRpb246ICdlbmQnLCAvLyAnYXJvdW5kJywgJ2VuZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXNXaGVuU3RhY2tlZDogJ2xhc3QnLCAvLyAnYWxsJywgJ2xhc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICc5cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogLTQ1XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrUGxhY2VtZW50OiAnb24nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vKioqKioqKiAqL1xuXG4gICAgICAgICAgICBiYXJQcm9qZWN0T3B0aW9uczoge1xuXG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbXSxcbiAgICAgICAgICAgICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAtMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZmluYW5jaWFsX3llYXJzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaF9tYWNoaW5lczogW10sXG4gICAgICAgICAgICBzZWFyY2hfc2l0ZXM6IFtdLFxuICAgICAgICAgICAgc2VhcmNoX3RpY2tldHM6IFtdLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICBzaXRlczogW10sXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXG4gICAgICAgICAgICB0b3RhbFRpY2tldHM6IDE4NDYxMyxcbiAgICAgIHBlbmRpbmdUaWNrZXRzOiAwLFxuICAgICAgZmxtUGVuZGluZzogMCxcbiAgICAgIHNsbVBlbmRpbmc6IDAsXG4gICAgICBqb2luZWRQZW5kaW5nOiAwLFxuICAgICAgcHJvY2Vzc2luZ1RpY2tldHM6IDQ5LFxuICAgICAgZmxtUHJvY2Vzc2luZzogMzksXG4gICAgICBzbG1Qcm9jZXNzaW5nOiAxLFxuICAgICAgam9pbmVkUHJvY2Vzc2luZzogOSxcbiAgICAgIG5ld1RpY2tldHM6IDAsXG4gICAgICBjbG9zZWRUaWNrZXRzOiAwLFxuICAgICAgYXV0aFVzZXI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFwiKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpKSA6IG51bGwsXG4gICAgICB1c2VyUm9sZTogXCJcIixcbiAgICAgIGRhc2hEYXRhOiBbXG4gICAgICAgIHsgaWQ6IDEsIHRpdGxlOiBcIlRvdGFsIENvbXBsYWludCB0eXBlc1wiLCB2YWx1ZTogMjUgfSxcbiAgICAgICAgeyBpZDogMiwgdGl0bGU6IFwiVG90YWwgU3RhdGVzXCIsIHZhbHVlOiA4IH0sXG4gICAgICAgIHsgaWQ6IDMsIHRpdGxlOiBcIlRvdGFsIERpc3RyaWN0c1wiLCB2YWx1ZTogMjUgfSxcbiAgICAgICAgeyBpZDogNCwgdGl0bGU6IFwiVG90YWwgQ2l0aWVzXCIsIHZhbHVlOiA5OCB9LFxuICAgICAgICB7IGlkOiA1LCB0aXRsZTogXCJUb3RhbCBQb3N0Y29kZXNcIiwgdmFsdWU6IDMzMSB9LFxuICAgICAgICB7IGlkOiA2LCB0aXRsZTogXCJUb3RhbCBBcmVhIGNvZGVzXCIsIHZhbHVlOiAxMzU2IH0sXG4gICAgICAgIHsgaWQ6IDcsIHRpdGxlOiBcIlRvdGFsIEJhbmtzXCIsIHZhbHVlOiAyMiB9LFxuICAgICAgICB7IGlkOiA4LCB0aXRsZTogXCJUb3RhbCBDbGllbnRzXCIsIHZhbHVlOiA4IH0sXG4gICAgICAgIHsgaWQ6IDksIHRpdGxlOiBcIlRvdGFsIENsaWVudCBDb2RlXCIsIHZhbHVlOiAxOCB9LFxuICAgICAgICB7IGlkOiAxMCwgdGl0bGU6IFwiVG90YWwgQ2FsbCBDZW50ZXIgVXNlcnNcIiwgdmFsdWU6IDM0IH0sXG4gICAgICAgIHsgaWQ6IDExLCB0aXRsZTogXCJUb3RhbCBDb21wbGFpbnRcIiwgdmFsdWU6IDE4NTQwMSB9LFxuICAgICAgICB7IGlkOiAxMiwgdGl0bGU6IFwiVG90YWwgQ3VzdG9kaWFuc1wiLCB2YWx1ZTogMTk2IH1cbiAgICAgIF0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICB1cGRhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuYXNpZ25fZ3JhcGhzKCk7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICAnc2VhcmNoLnF1YXJ0ZXInKG4pIHtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV9mcm9tID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX3RvID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdzZWFyY2guZGF0ZV9mcm9tJyhuKSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLm1vbnRoID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5xdWFydGVyID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3NlYXJjaC5kYXRlX3RvJyhuKSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLm1vbnRoID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5xdWFydGVyID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3NlYXJjaC5tb250aCcobikge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX2Zyb20gPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfdG8gPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnF1YXJ0ZXIgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvZGFzaGJvYXJkJywgdGhpcy5zZWFyY2gpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhckVxdWlwbWVudE9wdGlvbnMuY2hhcnRPcHRpb25zLnhheGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLkVxdWlwbWVudENoYXJ0LnNlcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJFcXVpcG1lbnRPcHRpb25zLnNlcmllcyA9IHJlcy5kYXRhLmRhdGEuRXF1aXBtZW50Q2hhcnQuZGF0YVxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5iYXJDb3VudENoYXJ0LnVwZGF0ZVNlcmllcyh0aGlzLnJlY29yZHMuYmFyQ291bnRDaGFydC5zZXJpZXMsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmJhckNvdW50Q2hhcnQudXBkYXRlT3B0aW9ucyh0aGlzLnJlY29yZHMuYmFyQ291bnRDaGFydC5vcHRpb25zLCBmYWxzZSwgdHJ1ZSlcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIFwic2VhcmNoLnN1Yl9jYXRlZ29yeV9pZFwiKG4sIG8pIHtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBcInNlYXJjaC5zaXRlX2lkXCIobiwgbykge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJzZWFyY2guY2F0ZWdvcnlfaWRcIjoge1xuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcbiAgICAgICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvY2F0ZWdvcnkvXCIgKyBuKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHZhciB5ZWFyc0xlbmd0aCA9IDMwO1xuICAgICAgICB2YXIgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAyMDIyOyBpIDw9IGN1cnJlbnRZZWFyOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuZXh0ID0gaSArIDE7XG4gICAgICAgICAgICB2YXIgeWVhciA9IGkgKyAnLScgKyBuZXh0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmZpbmFuY2lhbF95ZWFycy5wdXNoKHllYXIpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcblxuICAgICAgICB0aGlzLmF1dGhVc2VyPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFwiKTtcbiAgICAgICAgaWYgKHRoaXMuYXV0aFVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFVzZXIgPSBKU09OLnBhcnNlKHRoaXMuYXV0aFVzZXIpO1xuICAgICAgICAgICAgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09Myl7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZT1cIkNsaWVudCBlbXBsb3llZVwiO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09NCl7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZT1cIkNhbGwgQ2VudGVyIFVzZXJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGF4aW9zLmdldCgnYXBpL2Rhc2hib2FyZCcpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlcy5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICBpZih0aGlzLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzPT0yKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLnJlY29yZHNcIix0aGlzLnJlY29yZHMpO1xuXG5cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5yZWNvcmRzXCIsdGhpcy5yZWNvcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxUaWNrZXRzPSB0aGlzLnJlY29yZHMudG90YWxfdGlja2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ1RpY2tldHM9IHRoaXMucmVjb3Jkcy5wZW5kaW5nX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsbVBlbmRpbmc9IHRoaXMucmVjb3Jkcy5mbG1fcGVuZGluZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbG1QZW5kaW5nPSB0aGlzLnJlY29yZHMuc2xtX3BlbmRpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuam9pbmVkUGVuZGluZz0gdGhpcy5yZWNvcmRzLmpvaW5lZF9wZW5kaW5nX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmdUaWNrZXRzPSB0aGlzLnJlY29yZHMucHJvY2Vzc2luZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG1Qcm9jZXNzaW5nPSB0aGlzLnJlY29yZHMuZmxtX3Byb2Nlc3NpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2xtUHJvY2Vzc2luZz0gdGhpcy5yZWNvcmRzLnNsbV9wcm9jZXNzaW5nX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpvaW5lZFByb2Nlc3Npbmc9IHRoaXMucmVjb3Jkcy5qb2luZWRfcHJvY2Vzc2luZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdUaWNrZXRzPSB0aGlzLnJlY29yZHMubmV3X3RpY2tldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlZFRpY2tldHM9IHRoaXMucmVjb3Jkcy5jbG9zZWRfdGlja2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclJvbGU9ICdDYWxsIENlbnRlciBVc2VyJztcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAvLyBheGlvcy5nZXQoXCJhcGkvZ2V0X3ByZV9tYWNoaW5lXCIpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5DYXRlZ29yeTtcbiAgICAgICAgLy8gICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gYXhpb3NcbiAgICAgICAgLy8gICAgIC5nZXQoXCIvYXBpL2luaXRpYWxfdGlja2V0XCIpXG4gICAgICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnZlbmRvcnM7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNlYXJjaF9zaXRlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zaXRlcztcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNyZWF0ZWRfdXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEuY3JlYXRlZF91c2VycztcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFwiT2guIFNvbWV0aGluZyB3ZW50IHdyb25nXCIpKTtcblxuXG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmF1dGhVc2VyPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFwiKTtcbiAgICAgICAgaWYgKHRoaXMuYXV0aFVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFVzZXIgPSBKU09OLnBhcnNlKHRoaXMuYXV0aFVzZXIpO1xuICAgICAgICAgICAgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09Myl7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZT1cIkNsaWVudCBlbXBsb3llZVwiO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcz09NCl7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZT1cIkNhbGwgQ2VudGVyIFVzZXJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAodGhpcy4kZ2F0ZS5pc0FkbWluKCkpIHtcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuJHJvdXRlci5wdXNoKCcvdXNlcnMnKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvdGlja2V0c1wiKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICAvLyB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzaWduX2dyYXBocygpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHRoaXMucmVjb3Jkc1xuICAgICAgICAgICAgdGhpcy5jaGFydE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidnVlY2hhcnQtZXhhbXBsZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWzE5OTEsIDE5OTIsIDE5OTMsIDE5OTQsIDE5OTUsIDE5OTYsIDE5OTcsIDE5OThdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyoqKioqKioqKioqICovXG4gICAgICAgICAgICB0aGlzLmRvbnV0Q2hhcnRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGNvbG9yczogWycjMDA2OGI5JywgJyMwMDY4YjlhZCddLFxuXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZG50MVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFtcIk1ham9yXCIsIFwiTWlub3JcIl0sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJDb21wbGFpbnQgTmF0dXJlXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmJhckNvdW50T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA5MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyNmZmYnXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NhbGwgU3RhdHVzJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW1wiUXVhcnRlciAxXCIsIFwiUXVhcnRlciAyXCIsIFwiUXVhcnRlciAzXCIsIFwiUXVhcnRlciA0XCJdLFxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDQwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgICAgIGdldExhYmVsKHZhbCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmZhcl9ubyArIFwiIC0gXCIgKyB2YWwubmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gYXN5bmMgZ2V0X21hY2hpbmUoKSB7XG4gICAgICAgIC8vICAgICBheGlvc1xuICAgICAgICAvLyAgICAgICAgIC5nZXQoXCIvYXBpL3JlcG9ydHMvbWFjaGluZXNcIiwge1xuICAgICAgICAvLyAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNpdGVfaWQ6IHRoaXMuc2VhcmNoLnNpdGVfaWQsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjYXRlZ29yeV9pZDogdGhpcy5zZWFyY2guY2F0ZWdvcnlfaWQsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6IHRoaXMuc2VhcmNoLnN1Yl9jYXRlZ29yeV9pZCxcbiAgICAgICAgLy8gICAgICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAvLyAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAvLyAgICAgICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oXCJPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmdcIikpO1xuICAgICAgICAvLyB9LFxuICAgIH0sXG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuLmRhc2hib2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmgyLnRpY2tldC1jb3VudCB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmg0IHtcbiAgY29sb3I6ICMzMzM7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4udGV4dC1zdWNjZXNzIHtcbiAgY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRhc2hib2FyZFtkYXRhLXYtZDlkODc2ODJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuLmNhcmRbZGF0YS12LWQ5ZDg3NjgyXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY2FyZC1ib2R5W2RhdGEtdi1kOWQ4NzY4Ml0ge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5oMi50aWNrZXQtY291bnRbZGF0YS12LWQ5ZDg3NjgyXSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuaDRbZGF0YS12LWQ5ZDg3NjgyXSB7XFxuICBjb2xvcjogIzMzMztcXG59XFxucFtkYXRhLXYtZDlkODc2ODJdIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnNoYWRvd1tkYXRhLXYtZDlkODc2ODJdIHtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi50ZXh0LXN1Y2Nlc3NbZGF0YS12LWQ5ZDg3NjgyXSB7XFxuICBjb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvc3VqYW4vRGVza3RvcC9Xb3JrL3Byb2plY3QgZnJlZWxhbmNlL1NhbmtoYS9hdG1fcHJvai9hdG0vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQStvQkE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0NBQ0E7QUFFQTtFQUNBLG9CQUFBO0NBQ0E7QUFFQTtFQUNBLGFBQUE7Q0FDQTtBQUVBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtDQUNBO0FBRUE7RUFDQSxZQUFBO0NBQ0E7QUFFQTtFQUNBLFVBQUE7Q0FDQTtBQUVBO0VBQ0EseUNBQUE7Q0FDQTtBQUVBO0VBQ0EsMEJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIGRhc2hib2FyZFxcXCIgIHYtaWY9XFxcImF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzIT0nMidcXFwiPlxcbiAgICAgIDwhLS0gSGVhZGVyIFJvdyAtLT5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyIHRleHQtY2VudGVyIHB5LTNcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiAjNDBFMEQwO1xcXCI+XFxuICAgICAgICAgIDxoND5EYXNoYm9hcmQ8L2g0PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPCEtLSBUb3AgUm93IGZvciBUaWNrZXRzIC0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG15LTRcXFwiPlxcbiAgICAgICAgPCEtLSBUb3RhbCBUaWNrZXRzIC0tPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtY2VudGVyIHNoYWRvd1xcXCIgc3R5bGU9XFxcImJvcmRlci1yYWRpdXM6IDUwcHg7XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmY3ZTY3LCAjZmZiM2E3KTsgYm9yZGVyLXJhZGl1czogNTBweDtcXFwiPlxcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJ0aWNrZXQtY291bnRcXFwiPnt7IHRvdGFsVGlja2V0cyB9fTwvaDI+XFxuICAgICAgICAgICAgICA8cD5Ub3RhbCBUaWNrZXRzPC9wPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc21cXFwiPlZpZXcgRGV0YWlsczwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwhLS0gUGVuZGluZyBUaWNrZXRzIC0tPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtY2VudGVyIHNoYWRvd1xcXCIgc3R5bGU9XFxcImJvcmRlci1yYWRpdXM6IDUwcHg7XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOTE4YWY0LCAjYjNhNmY2KTsgYm9yZGVyLXJhZGl1czogNTBweDtcXFwiPlxcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJ0aWNrZXQtY291bnRcXFwiPnt7IHBlbmRpbmdUaWNrZXRzIH19PC9oMj5cXG4gICAgICAgICAgICAgIDxwPlBlbmRpbmcgVGlja2V0czwvcD5cXG4gICAgICAgICAgICAgIDxwPkZMTToge3sgZmxtUGVuZGluZyB9fSB8IFNMTToge3sgc2xtUGVuZGluZyB9fSB8IEpPSU5FRDoge3sgam9pbmVkUGVuZGluZyB9fTwvcD5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYnRuLXNtXFxcIj5WaWV3IERldGFpbHM8L2E+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8IS0tIFByb2Nlc3NpbmcgVGlja2V0cyAtLT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCB0ZXh0LWNlbnRlciBzaGFkb3dcXFwiIHN0eWxlPVxcXCJib3JkZXItcmFkaXVzOiA1MHB4O1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2QzODFmMiwgI2Q5YTRmNCk7IGJvcmRlci1yYWRpdXM6IDUwcHg7XFxcIj5cXG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwidGlja2V0LWNvdW50XFxcIj57eyBwcm9jZXNzaW5nVGlja2V0cyB9fTwvaDI+XFxuICAgICAgICAgICAgICA8cD5Qcm9jZXNzaW5nIFRpY2tldHM8L3A+XFxuICAgICAgICAgICAgICA8cD5GTE06IHt7IGZsbVByb2Nlc3NpbmcgfX0gfCBTTE06IHt7IHNsbVByb2Nlc3NpbmcgfX0gfCBKT0lORUQ6IHt7IGpvaW5lZFByb2Nlc3NpbmcgfX08L3A+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1zbVxcXCI+VmlldyBEZXRhaWxzPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDwhLS0gVGlja2V0IFN0YXR1cyBTZWN0aW9uIC0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBzaGFkb3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICA8aDQ+TmV3IFRpY2tldHM8L2g0PlxcbiAgICAgICAgICAgICAgPHAgc3R5bGU9XFxcImNvbG9yOmdyYXk7XFxcIj57eyBuZXdUaWNrZXRzIH19PC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHNoYWRvd1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgIDxoND5DbG9zZWQgVGlja2V0czwvaDQ+XFxuICAgICAgICAgICAgICA8cCBzdHlsZT1cXFwiY29sb3I6Z3JheTtcXFwiPnt7IGNsb3NlZFRpY2tldHMgfX08L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPCEtLSBVc2VyIFJvbGUgU2VjdGlvbiAtLT5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC00XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMiB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgIDxwPllvdSBoYXZlIGxvZ2dlZCBpbiBhcyA8c3Ryb25nIGNsYXNzPVxcXCJ0ZXh0LXN1Y2Nlc3NcXFwiPnt7IHVzZXJSb2xlIH19PC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGlkPVxcXCJhcHBcXFwiIGNsYXNzPVxcXCJjb250YWluZXIgbXQtNVxcXCIgdi1lbHNlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgIDxJbmZvQ2FyZCB2LWZvcj1cXFwiaXRlbSBpbiBkYXNoRGF0YVxcXCIgOmtleT1cXFwiaXRlbS5pZFxcXCIgOnRpdGxlPVxcXCJpdGVtLnRpdGxlXFxcIiA6dmFsdWU9XFxcIml0ZW0udmFsdWVcXFwiIC8+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IEluZm9DYXJkIGZyb20gJy4vY29tcG9uZW50cy9JbmZvQ2FyZC52dWUnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBjb21wb25lbnRzOiB7XFxuICAgIEluZm9DYXJkXFxuICB9LFxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBmYXJfZGV0YWlsczoge1xcbiAgICAgICAgICAgICAgICBhY3R1YWxfbWF0ZXJpYWxfY29zdDogMCxcXG4gICAgICAgICAgICAgICAgYWN0dWFsX3NlcnZpY2VfY29zdDogMCxcXG4gICAgICAgICAgICAgICAgcmVjb3JkczogW11cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHJlY29yZHM6ICcnLFxcbiAgICAgICAgICAgIHNlYXJjaDoge1xcbiAgICAgICAgICAgICAgICBmaW5hbmNpYWxfeWVhcjogJycsXFxuICAgICAgICAgICAgICAgIHF1YXJ0ZXI6ICcnLFxcbiAgICAgICAgICAgICAgICBtb250aDogJycsXFxuICAgICAgICAgICAgICAgIGRhdGVfZnJvbTogJycsXFxuICAgICAgICAgICAgICAgIGRhdGVfdG86ICcnLFxcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6ICcnLFxcbiAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6ICcnLFxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiAnJyxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IFtcXFwiSmFudWFyeVxcXCIsIFxcXCJGZWJydWFyeVxcXCIsIFxcXCJNYXJjaFxcXCIsIFxcXCJBcHJpbFxcXCIsIFxcXCJNYXlcXFwiLCBcXFwiSnVuZVxcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJKdWx5XFxcIiwgXFxcIkF1Z3VzdFxcXCIsIFxcXCJTZXB0ZW1iZXJcXFwiLCBcXFwiT2N0b2JlclxcXCIsIFxcXCJOb3ZlbWJlclxcXCIsIFxcXCJEZWNlbWJlclxcXCJdLFxcblxcbiAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICBjaGFydDoge1xcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFxcXCJ2dWVjaGFydC1leGFtcGxlXFxcIixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsxOTkxLCAxOTkyLCAxOTkzLCAxOTk0LCAxOTk1LCAxOTk2LCAxOTk3LCAxOTk4XSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHNlcmllczogW1xcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcXFwic2VyaWVzLTFcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzMwLCA0MCwgMzUsIDUwLCA0OSwgNjAsIDcwLCA5MV0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXSxcXG5cXG4gICAgICAgICAgICAvLyoqKioqKioqKioqICovXFxuXFxuICAgICAgICAgICAgZG9udXRTZXJpZXM6IFs0NCwgNTVdLFxcbiAgICAgICAgICAgIGRvbnV0Q2hhcnRPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgIGNvbG9yczogWycjMDA0NDg4JywgJyMzOGMxNzInXSxcXG5cXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcXFwiZG50MVxcXCJcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXFxcIk1ham9yXFxcIiwgXFxcIk1pbm9yXFxcIl0sXFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcXFwiQ29tcGxhaW50IE5hdHVyZVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXFxuICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XFxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XSxcXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdjZW50ZXInLFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBiYXJDb3VudE9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXFxuICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI0ZGNTczMycsICcjMzNGRjU3J10sXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyNmZmYnXVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdW5kZWZpbmVkXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXFxcIlF1YXJ0ZXIgMVxcXCIsIFxcXCJRdWFydGVyIDJcXFwiLCBcXFwiUXVhcnRlciAzXFxcIiwgXFxcIlF1YXJ0ZXIgNFxcXCJdLFxcblxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1bmRlZmluZWRcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgIGZpbGw6IHtcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDQwXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIGJhckVxdWlwbWVudE9wdGlvbnM6IHtcXG5cXG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbXSxcXG4gICAgICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnZXF1aXBtZW50Q2hhcnQnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB6b29tOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50czoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUG9pbnRTZWxlY3Rpb246IChldmVudCwgY2hhcnRDb250ZXh0LCBjb25maWcpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoYXJ0Q29udGV4dClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yeUluZGV4ID0gY29uZmlnLmRhdGFQb2ludEluZGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZhcl9ubyA9IHRoaXMuYmFyRXF1aXBtZW50T3B0aW9ucy5jaGFydE9wdGlvbnMueGF4aXMuY2F0ZWdvcmllc1tjYXRlZ29yeUluZGV4XTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF4aW9zLmdldCgnYXBpL2dldF9tYWNoaW5lX2Zvcl9kYXNoYm9hcmQnLCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICdmYXJfbm8nOiBmYXJfbm9cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmZhcl9kZXRhaWxzID0gcmVzcG9uc2UuZGF0YS5kYXRhXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICQoJyNjb3VudENvbXBsYWludE1vZGFsJykubW9kYWwoJ3Nob3cnKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIScsIGVycm9yKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9KTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gcmVwbGFjZSB0aGUgYWxlcnQgd2l0aCB5b3VyIGN1c3RvbSBwb3B1cCBsb2dpY1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsIG9wZW4gYSBtb2RhbCBvciBhIGN1c3RvbSBwb3B1cFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAtMTAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XSxcXG4gICAgICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1c0FwcGxpY2F0aW9uOiAnZW5kJywgLy8gJ2Fyb3VuZCcsICdlbmQnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1c1doZW5TdGFja2VkOiAnbGFzdCcsIC8vICdhbGwnLCAnbGFzdCdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnOXB4JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGU6IC00NVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGlja1BsYWNlbWVudDogJ29uJ1xcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIC8vKioqKioqKiAqL1xcblxcbiAgICAgICAgICAgIGJhclByb2plY3RPcHRpb25zOiB7XFxuXFxuICAgICAgICAgICAgICAgIHNlcmllczogW10sXFxuICAgICAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICBiYXI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogLTEwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfV0sXFxuICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIGZpbmFuY2lhbF95ZWFyczogW10sXFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcXG4gICAgICAgICAgICBzZWFyY2hfc2l0ZXM6IFtdLFxcbiAgICAgICAgICAgIHNlYXJjaF90aWNrZXRzOiBbXSxcXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllczogW10sXFxuICAgICAgICAgICAgc2l0ZXM6IFtdLFxcbiAgICAgICAgICAgIG1hY2hpbmVzOiBbXSxcXG4gICAgICAgICAgICB0b3RhbFRpY2tldHM6IDE4NDYxMyxcXG4gICAgICBwZW5kaW5nVGlja2V0czogMCxcXG4gICAgICBmbG1QZW5kaW5nOiAwLFxcbiAgICAgIHNsbVBlbmRpbmc6IDAsXFxuICAgICAgam9pbmVkUGVuZGluZzogMCxcXG4gICAgICBwcm9jZXNzaW5nVGlja2V0czogNDksXFxuICAgICAgZmxtUHJvY2Vzc2luZzogMzksXFxuICAgICAgc2xtUHJvY2Vzc2luZzogMSxcXG4gICAgICBqb2luZWRQcm9jZXNzaW5nOiA5LFxcbiAgICAgIG5ld1RpY2tldHM6IDAsXFxuICAgICAgY2xvc2VkVGlja2V0czogMCxcXG4gICAgICBhdXRoVXNlcjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXFxcImF1dGhcXFwiKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXFxcImF1dGhcXFwiKSkgOiBudWxsLFxcbiAgICAgIHVzZXJSb2xlOiBcXFwiXFxcIixcXG4gICAgICBkYXNoRGF0YTogW1xcbiAgICAgICAgeyBpZDogMSwgdGl0bGU6IFxcXCJUb3RhbCBDb21wbGFpbnQgdHlwZXNcXFwiLCB2YWx1ZTogMjUgfSxcXG4gICAgICAgIHsgaWQ6IDIsIHRpdGxlOiBcXFwiVG90YWwgU3RhdGVzXFxcIiwgdmFsdWU6IDggfSxcXG4gICAgICAgIHsgaWQ6IDMsIHRpdGxlOiBcXFwiVG90YWwgRGlzdHJpY3RzXFxcIiwgdmFsdWU6IDI1IH0sXFxuICAgICAgICB7IGlkOiA0LCB0aXRsZTogXFxcIlRvdGFsIENpdGllc1xcXCIsIHZhbHVlOiA5OCB9LFxcbiAgICAgICAgeyBpZDogNSwgdGl0bGU6IFxcXCJUb3RhbCBQb3N0Y29kZXNcXFwiLCB2YWx1ZTogMzMxIH0sXFxuICAgICAgICB7IGlkOiA2LCB0aXRsZTogXFxcIlRvdGFsIEFyZWEgY29kZXNcXFwiLCB2YWx1ZTogMTM1NiB9LFxcbiAgICAgICAgeyBpZDogNywgdGl0bGU6IFxcXCJUb3RhbCBCYW5rc1xcXCIsIHZhbHVlOiAyMiB9LFxcbiAgICAgICAgeyBpZDogOCwgdGl0bGU6IFxcXCJUb3RhbCBDbGllbnRzXFxcIiwgdmFsdWU6IDggfSxcXG4gICAgICAgIHsgaWQ6IDksIHRpdGxlOiBcXFwiVG90YWwgQ2xpZW50IENvZGVcXFwiLCB2YWx1ZTogMTggfSxcXG4gICAgICAgIHsgaWQ6IDEwLCB0aXRsZTogXFxcIlRvdGFsIENhbGwgQ2VudGVyIFVzZXJzXFxcIiwgdmFsdWU6IDM0IH0sXFxuICAgICAgICB7IGlkOiAxMSwgdGl0bGU6IFxcXCJUb3RhbCBDb21wbGFpbnRcXFwiLCB2YWx1ZTogMTg1NDAxIH0sXFxuICAgICAgICB7IGlkOiAxMiwgdGl0bGU6IFxcXCJUb3RhbCBDdXN0b2RpYW5zXFxcIiwgdmFsdWU6IDE5NiB9XFxuICAgICAgXSxcXG4gICAgICAgIH07XFxuICAgIH0sXFxuICAgIHVwZGF0ZWQ6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAvLyB0aGlzLmFzaWduX2dyYXBocygpO1xcbiAgICAgICAgfSlcXG4gICAgfSxcXG4gICAgd2F0Y2g6IHtcXG4gICAgICAgICdzZWFyY2gucXVhcnRlcicobikge1xcbiAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfZnJvbSA9ICcnXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfdG8gPSAnJ1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgICdzZWFyY2guZGF0ZV9mcm9tJyhuKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gubW9udGggPSAnJ1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5xdWFydGVyID0gJydcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgJ3NlYXJjaC5kYXRlX3RvJyhuKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gubW9udGggPSAnJ1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5xdWFydGVyID0gJydcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgJ3NlYXJjaC5tb250aCcobikge1xcbiAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfZnJvbSA9ICcnXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfdG8gPSAnJ1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5xdWFydGVyID0gJydcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgc2VhcmNoOiB7XFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4pIHtcXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnYXBpL2Rhc2hib2FyZCcsIHRoaXMuc2VhcmNoKVxcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMgPSByZXMuZGF0YS5kYXRhXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJFcXVpcG1lbnRPcHRpb25zLmNoYXJ0T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5FcXVpcG1lbnRDaGFydC5zZXJpZXNcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhckVxdWlwbWVudE9wdGlvbnMuc2VyaWVzID0gcmVzLmRhdGEuZGF0YS5FcXVpcG1lbnRDaGFydC5kYXRhXFxuXFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5iYXJDb3VudENoYXJ0LnVwZGF0ZVNlcmllcyh0aGlzLnJlY29yZHMuYmFyQ291bnRDaGFydC5zZXJpZXMsIHRydWUpXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5iYXJDb3VudENoYXJ0LnVwZGF0ZU9wdGlvbnModGhpcy5yZWNvcmRzLmJhckNvdW50Q2hhcnQub3B0aW9ucywgZmFsc2UsIHRydWUpXFxuXFxuICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xcbiAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlZXA6IHRydWVcXG4gICAgICAgIH0sXFxuICAgICAgICBhc3luYyBcXFwic2VhcmNoLnN1Yl9jYXRlZ29yeV9pZFxcXCIobiwgbykge1xcbiAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgYXN5bmMgXFxcInNlYXJjaC5zaXRlX2lkXFxcIihuLCBvKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBcXFwic2VhcmNoLmNhdGVnb3J5X2lkXFxcIjoge1xcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuLCBvKSB7XFxuICAgICAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9jYXRlZ29yeS9cXFwiICsgbikudGhlbigocmVzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcXG4gICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIHZhciB5ZWFyc0xlbmd0aCA9IDMwO1xcbiAgICAgICAgdmFyIGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xcbiAgICAgICAgZm9yICh2YXIgaSA9IDIwMjI7IGkgPD0gY3VycmVudFllYXI7IGkrKykge1xcbiAgICAgICAgICAgIHZhciBuZXh0ID0gaSArIDE7XFxuICAgICAgICAgICAgdmFyIHllYXIgPSBpICsgJy0nICsgbmV4dC50b1N0cmluZygpO1xcbiAgICAgICAgICAgIHRoaXMuZmluYW5jaWFsX3llYXJzLnB1c2goeWVhcilcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xcblxcbiAgICAgICAgdGhpcy5hdXRoVXNlcj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcXFwiYXV0aFxcXCIpO1xcbiAgICAgICAgaWYgKHRoaXMuYXV0aFVzZXIpIHtcXG4gICAgICAgICAgICB0aGlzLmF1dGhVc2VyID0gSlNPTi5wYXJzZSh0aGlzLmF1dGhVc2VyKTtcXG4gICAgICAgICAgICBpZih0aGlzLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzPT0zKXtcXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZT1cXFwiQ2xpZW50IGVtcGxveWVlXFxcIjtcXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzPT00KXtcXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZT1cXFwiQ2FsbCBDZW50ZXIgVXNlclxcXCI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgYXhpb3MuZ2V0KCdhcGkvZGFzaGJvYXJkJylcXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMgPSByZXMuZGF0YS5kYXRhXFxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXM9PTIpe1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXFxcInRoaXMucmVjb3Jkc1xcXCIsdGhpcy5yZWNvcmRzKTtcXG5cXG5cXG4gICAgICAgICAgICAgICAgfWVsc2V7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXFxcInRoaXMucmVjb3Jkc1xcXCIsdGhpcy5yZWNvcmRzKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsVGlja2V0cz0gdGhpcy5yZWNvcmRzLnRvdGFsX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nVGlja2V0cz0gdGhpcy5yZWNvcmRzLnBlbmRpbmdfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsbVBlbmRpbmc9IHRoaXMucmVjb3Jkcy5mbG1fcGVuZGluZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2xtUGVuZGluZz0gdGhpcy5yZWNvcmRzLnNsbV9wZW5kaW5nX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qb2luZWRQZW5kaW5nPSB0aGlzLnJlY29yZHMuam9pbmVkX3BlbmRpbmdfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmdUaWNrZXRzPSB0aGlzLnJlY29yZHMucHJvY2Vzc2luZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxtUHJvY2Vzc2luZz0gdGhpcy5yZWNvcmRzLmZsbV9wcm9jZXNzaW5nX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbG1Qcm9jZXNzaW5nPSB0aGlzLnJlY29yZHMuc2xtX3Byb2Nlc3NpbmdfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpvaW5lZFByb2Nlc3Npbmc9IHRoaXMucmVjb3Jkcy5qb2luZWRfcHJvY2Vzc2luZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3VGlja2V0cz0gdGhpcy5yZWNvcmRzLm5ld190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VkVGlja2V0cz0gdGhpcy5yZWNvcmRzLmNsb3NlZF90aWNrZXRzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclJvbGU9ICdDYWxsIENlbnRlciBVc2VyJztcXG4gICAgICAgICAgICAgICAgfVxcblxcblxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XFxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcXG4gICAgICAgICAgICB9KVxcblxcblxcbiAgICAgICAgLy8gYXhpb3MuZ2V0KFxcXCJhcGkvZ2V0X3ByZV9tYWNoaW5lXFxcIikudGhlbigocmVzKSA9PiB7XFxuICAgICAgICAvLyAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5DYXRlZ29yeTtcXG4gICAgICAgIC8vICAgICB0aGlzLnNpdGVzID0gcmVzLmRhdGEuZGF0YS5zaXRlcztcXG4gICAgICAgIC8vIH0pO1xcbiAgICAgICAgLy8gYXhpb3NcXG4gICAgICAgIC8vICAgICAuZ2V0KFxcXCIvYXBpL2luaXRpYWxfdGlja2V0XFxcIilcXG4gICAgICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgIC8vICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS52ZW5kb3JzO1xcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm1hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZWFyY2hfc2l0ZXMgPSByZXNwb25zZS5kYXRhLmRhdGEuc2l0ZXM7XFxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3JlYXRlZF91c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5jcmVhdGVkX3VzZXJzO1xcbiAgICAgICAgLy8gICAgIH0pXFxuICAgICAgICAvLyAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybihcXFwiT2guIFNvbWV0aGluZyB3ZW50IHdyb25nXFxcIikpO1xcblxcblxcbiAgICB9LFxcbiAgICBtb3VudGVkKCkge1xcbiAgICAgICAgdGhpcy5hdXRoVXNlcj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcXFwiYXV0aFxcXCIpO1xcbiAgICAgICAgaWYgKHRoaXMuYXV0aFVzZXIpIHtcXG4gICAgICAgICAgICB0aGlzLmF1dGhVc2VyID0gSlNPTi5wYXJzZSh0aGlzLmF1dGhVc2VyKTtcXG4gICAgICAgICAgICBpZih0aGlzLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzPT0zKXtcXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZT1cXFwiQ2xpZW50IGVtcGxveWVlXFxcIjtcXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzPT00KXtcXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZT1cXFwiQ2FsbCBDZW50ZXIgVXNlclxcXCI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLy8gaWYgKHRoaXMuJGdhdGUuaXNBZG1pbigpKSB7XFxuICAgICAgICAvLyAgICAgLy8gdGhpcy4kcm91dGVyLnB1c2goJy91c2VycycpLmNhdGNoKCgpID0+IHsgfSk7XFxuICAgICAgICAvLyB9IGVsc2Uge1xcbiAgICAgICAgLy8gICAgIHRoaXMuJHJvdXRlci5wdXNoKFxcXCIvdGlja2V0c1xcXCIpLmNhdGNoKCgpID0+IHsgfSk7XFxuICAgICAgICAvLyB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGFzaWduX2dyYXBocygpIHtcXG4gICAgICAgICAgICB0aGlzLnJlY29yZHMgPSB0aGlzLnJlY29yZHNcXG4gICAgICAgICAgICB0aGlzLmNoYXJ0T3B0aW9ucyA9IHtcXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcXFwidnVlY2hhcnQtZXhhbXBsZVxcXCIsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbMTk5MSwgMTk5MiwgMTk5MywgMTk5NCwgMTk5NSwgMTk5NiwgMTk5NywgMTk5OF0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC8vKioqKioqKioqKiogKi9cXG4gICAgICAgICAgICB0aGlzLmRvbnV0Q2hhcnRPcHRpb25zID0ge1xcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFsnIzAwNjhiOScsICcjMDA2OGI5YWQnXSxcXG5cXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcXFwiZG50MVxcXCJcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXFxcIk1ham9yXFxcIiwgXFxcIk1pbm9yXFxcIl0sXFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcXFwiQ29tcGxhaW50IE5hdHVyZVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXFxuICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XFxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XSxcXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdjZW50ZXInLFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHRoaXMuYmFyQ291bnRPcHRpb25zID0ge1xcbiAgICAgICAgICAgICAgICBjaGFydDoge1xcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICBiYXI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZmJ11cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDYWxsIFN0YXR1cydcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtcXFwiUXVhcnRlciAxXFxcIiwgXFxcIlF1YXJ0ZXIgMlxcXCIsIFxcXCJRdWFydGVyIDNcXFwiLCBcXFwiUXVhcnRlciA0XFxcIl0sXFxuXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XFxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVuZGVmaW5lZFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAgICAgZmlsbDoge1xcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogNDBcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIH0sXFxuICAgICAgICBnZXRMYWJlbCh2YWwpIHtcXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gXFxcIm9iamVjdFxcXCIpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5mYXJfbm8gKyBcXFwiIC0gXFxcIiArIHZhbC5uYW1lO1xcbiAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIC8vIGFzeW5jIGdldF9tYWNoaW5lKCkge1xcbiAgICAgICAgLy8gICAgIGF4aW9zXFxuICAgICAgICAvLyAgICAgICAgIC5nZXQoXFxcIi9hcGkvcmVwb3J0cy9tYWNoaW5lc1xcXCIsIHtcXG4gICAgICAgIC8vICAgICAgICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNpdGVfaWQ6IHRoaXMuc2VhcmNoLnNpdGVfaWQsXFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IHRoaXMuc2VhcmNoLmNhdGVnb3J5X2lkLFxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yeV9pZDogdGhpcy5zZWFyY2guc3ViX2NhdGVnb3J5X2lkLFxcbiAgICAgICAgLy8gICAgICAgICAgICAgfSxcXG4gICAgICAgIC8vICAgICAgICAgfSlcXG4gICAgICAgIC8vICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcXG4gICAgICAgIC8vICAgICAgICAgfSlcXG4gICAgICAgIC8vICAgICAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybihcXFwiT2guIFNvbWV0aGluZyB3ZW50IHdyb25nXFxcIikpO1xcbiAgICAgICAgLy8gfSxcXG4gICAgfSxcXG59O1xcbjwvc2NyaXB0PlxcbjxzdHlsZSBzY29wZWQ+XFxuLmRhc2hib2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jYXJkLWJvZHkge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oMi50aWNrZXQtY291bnQge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmg0IHtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnNoYWRvdyB7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4udGV4dC1zdWNjZXNzIHtcXG4gIGNvbG9yOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzICE9IFwiMlwiXG4gICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBkYXNoYm9hcmRcIiB9LCBbXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBteS00XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgdGV4dC1jZW50ZXIgc2hhZG93XCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJib3JkZXItcmFkaXVzXCI6IFwiNTBweFwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmN2U2NywgI2ZmYjNhNylcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCI1MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpY2tldC1jb3VudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50b3RhbFRpY2tldHMpKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJUb3RhbCBUaWNrZXRzXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJWaWV3IERldGFpbHNcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgdGV4dC1jZW50ZXIgc2hhZG93XCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJib3JkZXItcmFkaXVzXCI6IFwiNTBweFwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzkxOGFmNCwgI2IzYTZmNilcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCI1MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpY2tldC1jb3VudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wZW5kaW5nVGlja2V0cykpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlBlbmRpbmcgVGlja2V0c1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRkxNOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZmxtUGVuZGluZykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB8IFNMTTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnNsbVBlbmRpbmcpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgfCBKT0lORUQ6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5qb2luZWRQZW5kaW5nKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJWaWV3IERldGFpbHNcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgdGV4dC1jZW50ZXIgc2hhZG93XCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJib3JkZXItcmFkaXVzXCI6IFwiNTBweFwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2QzODFmMiwgI2Q5YTRmNClcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCI1MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpY2tldC1jb3VudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wcm9jZXNzaW5nVGlja2V0cykpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlByb2Nlc3NpbmcgVGlja2V0c1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRkxNOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZmxtUHJvY2Vzc2luZykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB8IFNMTTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnNsbVByb2Nlc3NpbmcpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgfCBKT0lORUQ6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5qb2luZWRQcm9jZXNzaW5nKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJWaWV3IERldGFpbHNcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIHNoYWRvd1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiTmV3IFRpY2tldHNcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImdyYXlcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm5ld1RpY2tldHMpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBzaGFkb3dcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIkNsb3NlZCBUaWNrZXRzXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJncmF5XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5jbG9zZWRUaWNrZXRzKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC00XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiWW91IGhhdmUgbG9nZ2VkIGluIGFzIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXN1Y2Nlc3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlclJvbGUpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG10LTVcIiwgYXR0cnM6IHsgaWQ6IFwiYXBwXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LFxuICAgICAgICAgIF92bS5fbChfdm0uZGFzaERhdGEsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcIkluZm9DYXJkXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogaXRlbS50aXRsZSwgdmFsdWU6IGl0ZW0udmFsdWUgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyIHRleHQtY2VudGVyIHB5LTNcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImJhY2tncm91bmQtY29sb3JcIjogXCIjNDBFMEQwXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJoNFwiLCBbX3ZtLl92KFwiRGFzaGJvYXJkXCIpXSldXG4gICAgICApXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWQ5ZDg3NjgyXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWQ5ZDg3NjgyXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjE2NmFmYjVhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZDlkODc2ODJcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWQ5ZDg3NjgyXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoY29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWQ5ZDg3NjgyXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWQ5ZDg3NjgyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LWQ5ZDg3NjgyXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcRGFzaGJvYXJkXFxcXERhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kOWQ4NzY4MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWQ5ZDg3NjgyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=