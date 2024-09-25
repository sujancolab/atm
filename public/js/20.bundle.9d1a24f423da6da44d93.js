(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue ***!
  \*********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      closedTickets: 184564,
      userRole: 'Call Center User'
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
    axios.get('api/dashboard').then(res => {
      this.records = res.data.data;
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
exports.push([module.i, "\n.dashboard[data-v-d9d87682] {\n  background-color: #f8f9fa;\n  min-height: 100vh;\n}\n.card[data-v-d9d87682] {\n  border-radius: 10px;\n}\n.card-body[data-v-d9d87682] {\n  color: white;\n}\nh2.ticket-count[data-v-d9d87682] {\n  font-size: 4rem;\n  font-weight: bold;\n}\nh4[data-v-d9d87682] {\n  color: #333;\n}\np[data-v-d9d87682] {\n  margin: 0;\n}\n.shadow[data-v-d9d87682] {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.text-success[data-v-d9d87682] {\n  color: #28a745 !important;\n}\n", "", {"version":3,"sources":["C:/Users/sujan/Desktop/Work/project freelance/Sankha/atm_proj/atm/resources/js/components/Dashboard/resources/js/components/Dashboard/DashboardCallLockStatus.vue"],"names":[],"mappings":";AA6lBA;EACA,0BAAA;EACA,kBAAA;CACA;AAEA;EACA,oBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,gBAAA;EACA,kBAAA;CACA;AAEA;EACA,YAAA;CACA;AAEA;EACA,UAAA;CACA;AAEA;EACA,yCAAA;CACA;AAEA;EACA,0BAAA;CACA","file":"DashboardCallLockStatus.vue","sourcesContent":["<template>\n    <div class=\"container-fluid dashboard\">\n      <!-- Header Row -->\n      <div class=\"row\">\n        <div class=\"col-md-12 text-center py-3\" style=\"background-color: #40E0D0;\">\n          <h4>Dashboard</h4>\n        </div>\n      </div>\n\n      <!-- Top Row for Tickets -->\n      <div class=\"row justify-content-center my-4\">\n        <!-- Total Tickets -->\n        <div class=\"col-md-4\">\n          <div class=\"card text-center shadow\" style=\"border-radius: 50px;\">\n            <div class=\"card-body\" style=\"background: linear-gradient(to bottom, #ff7e67, #ffb3a7); border-radius: 50px;\">\n              <h2 class=\"ticket-count\">{{ totalTickets }}</h2>\n              <p>Total Tickets</p>\n              <a href=\"#\" class=\"btn btn-outline-light btn-sm\">View Details</a>\n            </div>\n          </div>\n        </div>\n\n        <!-- Pending Tickets -->\n        <div class=\"col-md-4\">\n          <div class=\"card text-center shadow\" style=\"border-radius: 50px;\">\n            <div class=\"card-body\" style=\"background: linear-gradient(to bottom, #918af4, #b3a6f6); border-radius: 50px;\">\n              <h2 class=\"ticket-count\">{{ pendingTickets }}</h2>\n              <p>Pending Tickets</p>\n              <p>FLM: {{ flmPending }} | SLM: {{ slmPending }} | JOINED: {{ joinedPending }}</p>\n              <a href=\"#\" class=\"btn btn-outline-light btn-sm\">View Details</a>\n            </div>\n          </div>\n        </div>\n\n        <!-- Processing Tickets -->\n        <div class=\"col-md-4\">\n          <div class=\"card text-center shadow\" style=\"border-radius: 50px;\">\n            <div class=\"card-body\" style=\"background: linear-gradient(to bottom, #d381f2, #d9a4f4); border-radius: 50px;\">\n              <h2 class=\"ticket-count\">{{ processingTickets }}</h2>\n              <p>Processing Tickets</p>\n              <p>FLM: {{ flmProcessing }} | SLM: {{ slmProcessing }} | JOINED: {{ joinedProcessing }}</p>\n              <a href=\"#\" class=\"btn btn-outline-light btn-sm\">View Details</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Ticket Status Section -->\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-6\">\n          <div class=\"card shadow\">\n            <div class=\"card-body text-center\">\n              <h4>New Tickets</h4>\n              <p>00{{ newTickets }}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"card shadow\">\n            <div class=\"card-body text-center\">\n              <h4>Closed Tickets</h4>\n              <p>{{ closedTickets }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- User Role Section -->\n      <div class=\"row justify-content-center mt-4\">\n        <div class=\"col-md-12 text-center\">\n          <p>You have logged in as <strong class=\"text-success\">{{ userRole }}</strong></p>\n        </div>\n      </div>\n    </div>\n  </template>\n\n<script>\nexport default {\n\n    data() {\n        return {\n            far_details: {\n                actual_material_cost: 0,\n                actual_service_cost: 0,\n                records: []\n            },\n            records: '',\n            search: {\n                financial_year: '',\n                quarter: '',\n                month: '',\n                date_from: '',\n                date_to: '',\n                site_id: '',\n                category_id: '',\n                sub_category_id: '',\n                machine_id: '',\n            },\n            monthNames: [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\",\n                \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"],\n\n            chartOptions: {\n                chart: {\n                    id: \"vuechart-example\",\n                },\n                xaxis: {\n                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],\n                },\n            },\n            series: [\n                {\n                    name: \"series-1\",\n                    data: [30, 40, 35, 50, 49, 60, 70, 91],\n                },\n            ],\n\n            //*********** */\n\n            donutSeries: [44, 55],\n            donutChartOptions: {\n                colors: ['#004488', '#38c172'],\n\n                chart: {\n                    id: \"dnt1\"\n                },\n                labels: [\"Major\", \"Minor\"],\n                title: {\n                    text: \"Complaint Nature\",\n                    align: 'center',\n                },\n\n                responsive: [{\n                    breakpoint: 480,\n                    options: {\n                        chart: {\n                            width: 200\n                        },\n\n                        legend: {\n                            position: 'bottom',\n                            horizontalAlign: 'left',\n                        }\n                    }\n                }],\n                legend: {\n                    position: 'bottom',\n                    horizontalAlign: 'center',\n                }\n            },\n            barCountOptions: {\n                chart: {\n                    type: 'bar',\n                    height: 250,\n                    stacked: true,\n                },\n                plotOptions: {\n                    bar: {\n                        horizontal: true,\n                        colors: ['#FF5733', '#33FF57'],\n                        dataLabels: {\n                            total: {\n                                enabled: true,\n                                offsetX: 0,\n                                style: {\n                                    fontSize: '13px',\n                                    fontWeight: 900\n                                }\n                            }\n                        }\n                    },\n                },\n                stroke: {\n                    width: 1,\n                    colors: ['#fff']\n                },\n                title: {\n                    text: undefined\n                },\n                xaxis: {\n                    categories: [\"Quarter 1\", \"Quarter 2\", \"Quarter 3\", \"Quarter 4\"],\n\n                },\n                yaxis: {\n                    title: {\n                        text: undefined\n                    },\n                },\n\n                fill: {\n                    opacity: 1\n                },\n                legend: {\n                    position: 'top',\n                    horizontalAlign: 'left',\n                    offsetX: 40\n                }\n            },\n\n            barEquipmentOptions: {\n\n                series: [],\n                chartOptions: {\n                    chart: {\n                        id: 'equipmentChart',\n                        type: 'bar',\n                        height: 350,\n                        stacked: true,\n                        toolbar: {\n                            show: true\n                        },\n                        zoom: {\n                            enabled: true\n                        },\n                        events: {\n                            dataPointSelection: (event, chartContext, config) => {\n                                console.log(chartContext)\n                                var categoryIndex = config.dataPointIndex;\n                                var far_no = this.barEquipmentOptions.chartOptions.xaxis.categories[categoryIndex];\n\n                                // axios.get('api/get_machine_for_dashboard', {\n                                //     params: {\n                                //         'far_no': far_no\n                                //     }\n                                // })\n                                //     .then((response) => {\n                                //         this.far_details = response.data.data\n                                //         $('#countComplaintModal').modal('show');\n                                //     })\n                                //     .catch(function (error) {\n                                //         console.error('There was an error!', error);\n                                //     });\n\n                                // You can replace the alert with your custom popup logic\n                                // For example, open a modal or a custom popup\n                            }\n                        }\n                    },\n                    responsive: [{\n                        breakpoint: 480,\n                        options: {\n                            legend: {\n                                position: 'bottom',\n                                offsetX: -10,\n                                offsetY: 0\n                            }\n                        }\n                    }],\n                    plotOptions: {\n                        bar: {\n                            horizontal: false,\n                            borderRadius: 1,\n                            borderRadiusApplication: 'end', // 'around', 'end'\n                            borderRadiusWhenStacked: 'last', // 'all', 'last'\n                            dataLabels: {\n                                total: {\n                                    enabled: true,\n                                    style: {\n                                        fontSize: '9px',\n                                        fontWeight: 900\n                                    }\n                                }\n                            }\n                        },\n                    },\n                    xaxis: {\n                        labels: {\n                            rotate: -45\n                        },\n                        categories: [],\n                        tickPlacement: 'on'\n                    },\n                    legend: {\n                        position: 'bottom',\n                        offsetY: 0\n                    },\n                    fill: {\n                        opacity: 1\n                    }\n                },\n            },\n            //******* */\n\n            barProjectOptions: {\n\n                series: [],\n                chartOptions: {\n                    chart: {\n                        type: 'bar',\n                        height: 400,\n                        stacked: true,\n                    },\n                    plotOptions: {\n                    bar: {\n                        horizontal: true,\n                            dataLabels: {\n                                total: {\n                                    enabled: true,\n                                    offsetX: 0,\n                                    style: {\n                                    fontSize: '13px',\n                                    fontWeight: 900\n                                    }\n                                }\n                            }\n                        },\n                    },\n                    responsive: [{\n                        breakpoint: 480,\n                        options: {\n                            legend: {\n                                position: 'bottom',\n                                offsetX: -10,\n                                offsetY: 0\n                            }\n                        }\n                    }],\n                    xaxis: {\n                        categories: [],\n                    },\n                    fill: {\n                        opacity: 1\n                    },\n                    legend: {\n                        show: false,\n                        position: 'bottom',\n                        offsetX: 0,\n                        offsetY: 0\n                    },\n                },\n\n            },\n\n            financial_years: [],\n            search_machines: [],\n            search_sites: [],\n            search_tickets: [],\n            categories: [],\n            sub_categories: [],\n            sites: [],\n            machines: [],\n            totalTickets: 184613,\n      pendingTickets: 0,\n      flmPending: 0,\n      slmPending: 0,\n      joinedPending: 0,\n      processingTickets: 49,\n      flmProcessing: 39,\n      slmProcessing: 1,\n      joinedProcessing: 9,\n      newTickets: 0,\n      closedTickets: 184564,\n      userRole: 'Call Center User',\n        };\n    },\n    updated: function () {\n        this.$nextTick(function () {\n            // this.asign_graphs();\n        })\n    },\n    watch: {\n        'search.quarter'(n) {\n            if (n) {\n                this.search.date_from = ''\n                this.search.date_to = ''\n                this.search.month = ''\n            }\n        },\n        'search.date_from'(n) {\n            if (n) {\n                this.search.month = ''\n                this.search.quarter = ''\n            }\n        },\n        'search.date_to'(n) {\n            if (n) {\n                this.search.month = ''\n                this.search.quarter = ''\n            }\n        },\n        'search.month'(n) {\n            if (n) {\n                this.search.date_from = ''\n                this.search.date_to = ''\n                this.search.quarter = ''\n            }\n        },\n\n        search: {\n            handler: function (n) {\n                axios.post('api/dashboard', this.search)\n                    .then(res => {\n                        this.records = res.data.data\n                        this.barEquipmentOptions.chartOptions.xaxis.categories = res.data.data.EquipmentChart.series\n                        this.barEquipmentOptions.series = res.data.data.EquipmentChart.data\n\n\n\n                        this.$refs.barCountChart.updateSeries(this.records.barCountChart.series, true)\n                        this.$refs.barCountChart.updateOptions(this.records.barCountChart.options, false, true)\n\n                    })\n                    .catch(err => {\n                        console.error(err);\n                    })\n            },\n            deep: true\n        },\n        async \"search.sub_category_id\"(n, o) {\n            if (n) {\n                this.get_machine();\n            }\n        },\n        async \"search.site_id\"(n, o) {\n            if (n) {\n                this.get_machine();\n            }\n        },\n\n        \"search.category_id\": {\n            handler: function (n, o) {\n                if (n) {\n                    axios.get(\"api/category/\" + n).then((res) => {\n                        this.sub_categories = res.data.data;\n                    });\n                    this.get_machine();\n                }\n            },\n            deep: true,\n            initial: true,\n        },\n    },\n    created() {\n        var yearsLength = 30;\n        var currentYear = new Date().getFullYear();\n        for (var i = 2022; i <= currentYear; i++) {\n            var next = i + 1;\n            var year = i + '-' + next.toString();\n            this.financial_years.push(year)\n        }\n    },\n    beforeCreate() {\n        axios.get('api/dashboard')\n            .then(res => {\n                this.records = res.data.data\n                console.log(\"this.records\",this.records);\n                this.totalTickets= this.records.total_tickets;\n                this.pendingTickets= this.records.pending_tickets;\n                this.flmPending= this.records.flm_pending_tickets;\n                this.slmPending= this.records.slm_pending_tickets;\n                this.joinedPending= this.records.joined_pending_tickets;\n                this.processingTickets= this.records.processing_tickets;\n                this.flmProcessing= this.records.flm_processing_tickets;\n                this.slmProcessing= this.records.slm_processing_tickets;\n                this.joinedProcessing= this.records.joined_processing_tickets;\n                this.newTickets= this.records.new_tickets;\n                this.closedTickets= this.records.closed_tickets;\n                this.userRole= 'Call Center User';\n\n\n            })\n            .catch(err => {\n                console.error(err);\n            })\n\n        // axios.get(\"api/get_pre_machine\").then((res) => {\n        //     this.categories = res.data.data.Category;\n        //     this.sites = res.data.data.sites;\n        // });\n        // axios\n        //     .get(\"/api/initial_ticket\")\n        //     .then((response) => {\n        //         this.users = response.data.data.vendors;\n        //         this.machines = response.data.data.machines;\n        //         this.search_machines = response.data.data.machines;\n        //         this.search_sites = response.data.data.sites;\n        //         this.created_users = response.data.data.created_users;\n        //     })\n        //     .catch(() => console.warn(\"Oh. Something went wrong\"));\n\n\n    },\n    mounted() {\n        // if (this.$gate.isAdmin()) {\n        //     // this.$router.push('/users').catch(() => { });\n        // } else {\n        //     this.$router.push(\"/tickets\").catch(() => { });\n        // }\n    },\n    methods: {\n        asign_graphs() {\n            this.records = this.records\n            this.chartOptions = {\n                chart: {\n                    id: \"vuechart-example\",\n                },\n                xaxis: {\n                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],\n                },\n            }\n            //*********** */\n            this.donutChartOptions = {\n                colors: ['#0068b9', '#0068b9ad'],\n\n                chart: {\n                    id: \"dnt1\"\n                },\n                labels: [\"Major\", \"Minor\"],\n                title: {\n                    text: \"Complaint Nature\",\n                    align: 'center',\n                },\n\n                responsive: [{\n                    breakpoint: 480,\n                    options: {\n                        chart: {\n                            width: 200\n                        },\n\n                        legend: {\n                            position: 'bottom',\n                            horizontalAlign: 'left',\n                        }\n                    }\n                }],\n                legend: {\n                    position: 'bottom',\n                    horizontalAlign: 'center',\n                }\n            }\n\n            this.barCountOptions = {\n                chart: {\n                    type: 'bar',\n                    height: 350,\n                    stacked: true,\n                },\n                plotOptions: {\n                    bar: {\n                        horizontal: true,\n                        dataLabels: {\n                            total: {\n                                enabled: true,\n                                offsetX: 0,\n                                style: {\n                                    fontSize: '13px',\n                                    fontWeight: 900\n                                }\n                            }\n                        }\n                    },\n                },\n                stroke: {\n                    width: 1,\n                    colors: ['#fff']\n                },\n                title: {\n                    text: 'Call Status'\n                },\n                xaxis: {\n                    categories: [\"Quarter 1\", \"Quarter 2\", \"Quarter 3\", \"Quarter 4\"],\n\n                },\n                yaxis: {\n                    title: {\n                        text: undefined\n                    },\n                },\n\n                fill: {\n                    opacity: 1\n                },\n                legend: {\n                    position: 'top',\n                    horizontalAlign: 'left',\n                    offsetX: 40\n                }\n            }\n\n        },\n        getLabel(val) {\n            if (typeof val === \"object\") {\n                return val.far_no + \" - \" + val.name;\n            } else {\n                return val;\n            }\n        },\n        // async get_machine() {\n        //     axios\n        //         .get(\"/api/reports/machines\", {\n        //             params: {\n        //                 site_id: this.search.site_id,\n        //                 category_id: this.search.category_id,\n        //                 sub_category_id: this.search.sub_category_id,\n        //             },\n        //         })\n        //         .then((response) => {\n        //             this.search_machines = response.data.data;\n        //         })\n        //         .catch(() => console.warn(\"Oh. Something went wrong\"));\n        // },\n    },\n};\n</script>\n<style scoped>\n.dashboard {\n  background-color: #f8f9fa;\n  min-height: 100vh;\n}\n\n.card {\n  border-radius: 10px;\n}\n\n.card-body {\n  color: white;\n}\n\nh2.ticket-count {\n  font-size: 4rem;\n  font-weight: bold;\n}\n\nh4 {\n  color: #333;\n}\n\np {\n  margin: 0;\n}\n\n.shadow {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.text-success {\n  color: #28a745 !important;\n}\n</style>\n"],"sourceRoot":""}]);

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
  return _c("div", { staticClass: "container-fluid dashboard" }, [
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
                  background: "linear-gradient(to bottom, #ff7e67, #ffb3a7)",
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
                  background: "linear-gradient(to bottom, #918af4, #b3a6f6)",
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
                  background: "linear-gradient(to bottom, #d381f2, #d9a4f4)",
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
            _c("p", [_vm._v("00" + _vm._s(_vm.newTickets))])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "card shadow" }, [
          _c("div", { staticClass: "card-body text-center" }, [
            _c("h4", [_vm._v("Closed Tickets")]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.closedTickets))])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlPzFhZDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZT81N2ZmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWU/NTIxYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJmYXJfZGV0YWlscyIsImFjdHVhbF9tYXRlcmlhbF9jb3N0IiwiYWN0dWFsX3NlcnZpY2VfY29zdCIsInJlY29yZHMiLCJzZWFyY2giLCJmaW5hbmNpYWxfeWVhciIsInF1YXJ0ZXIiLCJtb250aCIsImRhdGVfZnJvbSIsImRhdGVfdG8iLCJzaXRlX2lkIiwiY2F0ZWdvcnlfaWQiLCJzdWJfY2F0ZWdvcnlfaWQiLCJtYWNoaW5lX2lkIiwibW9udGhOYW1lcyIsImNoYXJ0T3B0aW9ucyIsImNoYXJ0IiwiaWQiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJzZXJpZXMiLCJuYW1lIiwiZG9udXRTZXJpZXMiLCJkb251dENoYXJ0T3B0aW9ucyIsImNvbG9ycyIsImxhYmVscyIsInRpdGxlIiwidGV4dCIsImFsaWduIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJvcHRpb25zIiwid2lkdGgiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImhvcml6b250YWxBbGlnbiIsImJhckNvdW50T3B0aW9ucyIsInR5cGUiLCJoZWlnaHQiLCJzdGFja2VkIiwicGxvdE9wdGlvbnMiLCJiYXIiLCJob3Jpem9udGFsIiwiZGF0YUxhYmVscyIsInRvdGFsIiwiZW5hYmxlZCIsIm9mZnNldFgiLCJzdHlsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInN0cm9rZSIsInlheGlzIiwiZmlsbCIsIm9wYWNpdHkiLCJiYXJFcXVpcG1lbnRPcHRpb25zIiwidG9vbGJhciIsInNob3ciLCJ6b29tIiwiZXZlbnRzIiwiZGF0YVBvaW50U2VsZWN0aW9uIiwiY29uc29sZSIsIm9mZnNldFkiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJSYWRpdXNBcHBsaWNhdGlvbiIsImJvcmRlclJhZGl1c1doZW5TdGFja2VkIiwicm90YXRlIiwidGlja1BsYWNlbWVudCIsImJhclByb2plY3RPcHRpb25zIiwiZmluYW5jaWFsX3llYXJzIiwic2VhcmNoX21hY2hpbmVzIiwic2VhcmNoX3NpdGVzIiwic2VhcmNoX3RpY2tldHMiLCJzdWJfY2F0ZWdvcmllcyIsInNpdGVzIiwibWFjaGluZXMiLCJ0b3RhbFRpY2tldHMiLCJwZW5kaW5nVGlja2V0cyIsImZsbVBlbmRpbmciLCJzbG1QZW5kaW5nIiwiam9pbmVkUGVuZGluZyIsInByb2Nlc3NpbmdUaWNrZXRzIiwiZmxtUHJvY2Vzc2luZyIsInNsbVByb2Nlc3NpbmciLCJqb2luZWRQcm9jZXNzaW5nIiwibmV3VGlja2V0cyIsImNsb3NlZFRpY2tldHMiLCJ1c2VyUm9sZSIsInVwZGF0ZWQiLCJ3YXRjaCIsImhhbmRsZXIiLCJheGlvcyIsInRoZW4iLCJjYXRjaCIsImRlZXAiLCJpbml0aWFsIiwiY3JlYXRlZCIsImJlZm9yZUNyZWF0ZSIsIm1vdW50ZWQiLCJtZXRob2RzIiwiYXNpZ25fZ3JhcGhzIiwiZ2V0TGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RWU7RUFFZkE7SUFD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Ozs7Ozs7QUN0TWhCOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHltQkFBaVU7QUFDdlY7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGdJQUFtRTtBQUNyRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNYZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUJBQU8sQ0FBQyw2b0JBQTBTO0FBQ3BUO0FBQ0E7QUFDaUk7QUFDYTtBQUM5STtBQUMrVjtBQUMvVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NHO0FBQ3RHLGdCQUFnQix5R0FBa0I7QUFDbEMsRUFBRSwwSUFBYztBQUNoQixFQUFFLGlQQUFjO0FBQ2hCLEVBQUUsMFBBQXlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLEVBYVg7O0FBRVUsZ0ZBQWlCIiwiZmlsZSI6ImpzLzIwLmJ1bmRsZS45ZDFhMjRmNDIzZGE2ZGE0NGQ5My5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIGRhc2hib2FyZFwiPlxuICAgICAgPCEtLSBIZWFkZXIgUm93IC0tPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIHRleHQtY2VudGVyIHB5LTNcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM0MEUwRDA7XCI+XG4gICAgICAgICAgPGg0PkRhc2hib2FyZDwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gVG9wIFJvdyBmb3IgVGlja2V0cyAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBteS00XCI+XG4gICAgICAgIDwhLS0gVG90YWwgVGlja2V0cyAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgdGV4dC1jZW50ZXIgc2hhZG93XCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiA1MHB4O1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiIHN0eWxlPVwiYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmN2U2NywgI2ZmYjNhNyk7IGJvcmRlci1yYWRpdXM6IDUwcHg7XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRpY2tldC1jb3VudFwiPnt7IHRvdGFsVGlja2V0cyB9fTwvaDI+XG4gICAgICAgICAgICAgIDxwPlRvdGFsIFRpY2tldHM8L3A+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYnRuLXNtXCI+VmlldyBEZXRhaWxzPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gUGVuZGluZyBUaWNrZXRzIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCB0ZXh0LWNlbnRlciBzaGFkb3dcIiBzdHlsZT1cImJvcmRlci1yYWRpdXM6IDUwcHg7XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOTE4YWY0LCAjYjNhNmY2KTsgYm9yZGVyLXJhZGl1czogNTBweDtcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGlja2V0LWNvdW50XCI+e3sgcGVuZGluZ1RpY2tldHMgfX08L2gyPlxuICAgICAgICAgICAgICA8cD5QZW5kaW5nIFRpY2tldHM8L3A+XG4gICAgICAgICAgICAgIDxwPkZMTToge3sgZmxtUGVuZGluZyB9fSB8IFNMTToge3sgc2xtUGVuZGluZyB9fSB8IEpPSU5FRDoge3sgam9pbmVkUGVuZGluZyB9fTwvcD5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc21cIj5WaWV3IERldGFpbHM8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBQcm9jZXNzaW5nIFRpY2tldHMgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHRleHQtY2VudGVyIHNoYWRvd1wiIHN0eWxlPVwiYm9yZGVyLXJhZGl1czogNTBweDtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIiBzdHlsZT1cImJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNkMzgxZjIsICNkOWE0ZjQpOyBib3JkZXItcmFkaXVzOiA1MHB4O1wiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aWNrZXQtY291bnRcIj57eyBwcm9jZXNzaW5nVGlja2V0cyB9fTwvaDI+XG4gICAgICAgICAgICAgIDxwPlByb2Nlc3NpbmcgVGlja2V0czwvcD5cbiAgICAgICAgICAgICAgPHA+RkxNOiB7eyBmbG1Qcm9jZXNzaW5nIH19IHwgU0xNOiB7eyBzbG1Qcm9jZXNzaW5nIH19IHwgSk9JTkVEOiB7eyBqb2luZWRQcm9jZXNzaW5nIH19PC9wPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1zbVwiPlZpZXcgRGV0YWlsczwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIFRpY2tldCBTdGF0dXMgU2VjdGlvbiAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBzaGFkb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGg0Pk5ldyBUaWNrZXRzPC9oND5cbiAgICAgICAgICAgICAgPHA+MDB7eyBuZXdUaWNrZXRzIH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBzaGFkb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGg0PkNsb3NlZCBUaWNrZXRzPC9oND5cbiAgICAgICAgICAgICAgPHA+e3sgY2xvc2VkVGlja2V0cyB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIFVzZXIgUm9sZSBTZWN0aW9uIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxwPllvdSBoYXZlIGxvZ2dlZCBpbiBhcyA8c3Ryb25nIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+e3sgdXNlclJvbGUgfX08L3N0cm9uZz48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmFyX2RldGFpbHM6IHtcbiAgICAgICAgICAgICAgICBhY3R1YWxfbWF0ZXJpYWxfY29zdDogMCxcbiAgICAgICAgICAgICAgICBhY3R1YWxfc2VydmljZV9jb3N0OiAwLFxuICAgICAgICAgICAgICAgIHJlY29yZHM6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVjb3JkczogJycsXG4gICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICBmaW5hbmNpYWxfeWVhcjogJycsXG4gICAgICAgICAgICAgICAgcXVhcnRlcjogJycsXG4gICAgICAgICAgICAgICAgbW9udGg6ICcnLFxuICAgICAgICAgICAgICAgIGRhdGVfZnJvbTogJycsXG4gICAgICAgICAgICAgICAgZGF0ZV90bzogJycsXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yeV9pZDogJycsXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9udGhOYW1lczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIixcbiAgICAgICAgICAgICAgICBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXSxcblxuICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidnVlY2hhcnQtZXhhbXBsZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWzE5OTEsIDE5OTIsIDE5OTMsIDE5OTQsIDE5OTUsIDE5OTYsIDE5OTcsIDE5OThdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNlcmllcy0xXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgNDAsIDM1LCA1MCwgNDksIDYwLCA3MCwgOTFdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICAvLyoqKioqKioqKioqICovXG5cbiAgICAgICAgICAgIGRvbnV0U2VyaWVzOiBbNDQsIDU1XSxcbiAgICAgICAgICAgIGRvbnV0Q2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJyMwMDQ0ODgnLCAnIzM4YzE3MiddLFxuXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZG50MVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFtcIk1ham9yXCIsIFwiTWlub3JcIl0sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJDb21wbGFpbnQgTmF0dXJlXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhckNvdW50T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjRkY1NzMzJywgJyMzM0ZGNTcnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZiddXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtcIlF1YXJ0ZXIgMVwiLCBcIlF1YXJ0ZXIgMlwiLCBcIlF1YXJ0ZXIgM1wiLCBcIlF1YXJ0ZXIgNFwiXSxcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiA0MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGJhckVxdWlwbWVudE9wdGlvbnM6IHtcblxuICAgICAgICAgICAgICAgIHNlcmllczogW10sXG4gICAgICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2VxdWlwbWVudENoYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQb2ludFNlbGVjdGlvbjogKGV2ZW50LCBjaGFydENvbnRleHQsIGNvbmZpZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFydENvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yeUluZGV4ID0gY29uZmlnLmRhdGFQb2ludEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmFyX25vID0gdGhpcy5iYXJFcXVpcG1lbnRPcHRpb25zLmNoYXJ0T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzW2NhdGVnb3J5SW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF4aW9zLmdldCgnYXBpL2dldF9tYWNoaW5lX2Zvcl9kYXNoYm9hcmQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAnZmFyX25vJzogZmFyX25vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmZhcl9kZXRhaWxzID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgJCgnI2NvdW50Q29tcGxhaW50TW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IhJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiByZXBsYWNlIHRoZSBhbGVydCB3aXRoIHlvdXIgY3VzdG9tIHBvcHVwIGxvZ2ljXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBleGFtcGxlLCBvcGVuIGEgbW9kYWwgb3IgYSBjdXN0b20gcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogLTEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXNBcHBsaWNhdGlvbjogJ2VuZCcsIC8vICdhcm91bmQnLCAnZW5kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1c1doZW5TdGFja2VkOiAnbGFzdCcsIC8vICdhbGwnLCAnbGFzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzlweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAtNDVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tQbGFjZW1lbnQ6ICdvbidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8qKioqKioqICovXG5cbiAgICAgICAgICAgIGJhclByb2plY3RPcHRpb25zOiB7XG5cbiAgICAgICAgICAgICAgICBzZXJpZXM6IFtdLFxuICAgICAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IC0xMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmaW5hbmNpYWxfeWVhcnM6IFtdLFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaF9zaXRlczogW10sXG4gICAgICAgICAgICBzZWFyY2hfdGlja2V0czogW10sXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcbiAgICAgICAgICAgIG1hY2hpbmVzOiBbXSxcbiAgICAgICAgICAgIHRvdGFsVGlja2V0czogMTg0NjEzLFxuICAgICAgcGVuZGluZ1RpY2tldHM6IDAsXG4gICAgICBmbG1QZW5kaW5nOiAwLFxuICAgICAgc2xtUGVuZGluZzogMCxcbiAgICAgIGpvaW5lZFBlbmRpbmc6IDAsXG4gICAgICBwcm9jZXNzaW5nVGlja2V0czogNDksXG4gICAgICBmbG1Qcm9jZXNzaW5nOiAzOSxcbiAgICAgIHNsbVByb2Nlc3Npbmc6IDEsXG4gICAgICBqb2luZWRQcm9jZXNzaW5nOiA5LFxuICAgICAgbmV3VGlja2V0czogMCxcbiAgICAgIGNsb3NlZFRpY2tldHM6IDE4NDU2NCxcbiAgICAgIHVzZXJSb2xlOiAnQ2FsbCBDZW50ZXIgVXNlcicsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICB1cGRhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuYXNpZ25fZ3JhcGhzKCk7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICAnc2VhcmNoLnF1YXJ0ZXInKG4pIHtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV9mcm9tID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX3RvID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdzZWFyY2guZGF0ZV9mcm9tJyhuKSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLm1vbnRoID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5xdWFydGVyID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3NlYXJjaC5kYXRlX3RvJyhuKSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLm1vbnRoID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5xdWFydGVyID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3NlYXJjaC5tb250aCcobikge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX2Zyb20gPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfdG8gPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnF1YXJ0ZXIgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvZGFzaGJvYXJkJywgdGhpcy5zZWFyY2gpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhckVxdWlwbWVudE9wdGlvbnMuY2hhcnRPcHRpb25zLnhheGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLkVxdWlwbWVudENoYXJ0LnNlcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJFcXVpcG1lbnRPcHRpb25zLnNlcmllcyA9IHJlcy5kYXRhLmRhdGEuRXF1aXBtZW50Q2hhcnQuZGF0YVxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5iYXJDb3VudENoYXJ0LnVwZGF0ZVNlcmllcyh0aGlzLnJlY29yZHMuYmFyQ291bnRDaGFydC5zZXJpZXMsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmJhckNvdW50Q2hhcnQudXBkYXRlT3B0aW9ucyh0aGlzLnJlY29yZHMuYmFyQ291bnRDaGFydC5vcHRpb25zLCBmYWxzZSwgdHJ1ZSlcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIFwic2VhcmNoLnN1Yl9jYXRlZ29yeV9pZFwiKG4sIG8pIHtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBcInNlYXJjaC5zaXRlX2lkXCIobiwgbykge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJzZWFyY2guY2F0ZWdvcnlfaWRcIjoge1xuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcbiAgICAgICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvY2F0ZWdvcnkvXCIgKyBuKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHZhciB5ZWFyc0xlbmd0aCA9IDMwO1xuICAgICAgICB2YXIgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAyMDIyOyBpIDw9IGN1cnJlbnRZZWFyOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuZXh0ID0gaSArIDE7XG4gICAgICAgICAgICB2YXIgeWVhciA9IGkgKyAnLScgKyBuZXh0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmZpbmFuY2lhbF95ZWFycy5wdXNoKHllYXIpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KCdhcGkvZGFzaGJvYXJkJylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRzID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5yZWNvcmRzXCIsdGhpcy5yZWNvcmRzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsVGlja2V0cz0gdGhpcy5yZWNvcmRzLnRvdGFsX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nVGlja2V0cz0gdGhpcy5yZWNvcmRzLnBlbmRpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICB0aGlzLmZsbVBlbmRpbmc9IHRoaXMucmVjb3Jkcy5mbG1fcGVuZGluZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgIHRoaXMuc2xtUGVuZGluZz0gdGhpcy5yZWNvcmRzLnNsbV9wZW5kaW5nX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgdGhpcy5qb2luZWRQZW5kaW5nPSB0aGlzLnJlY29yZHMuam9pbmVkX3BlbmRpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmdUaWNrZXRzPSB0aGlzLnJlY29yZHMucHJvY2Vzc2luZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgIHRoaXMuZmxtUHJvY2Vzc2luZz0gdGhpcy5yZWNvcmRzLmZsbV9wcm9jZXNzaW5nX3RpY2tldHM7XG4gICAgICAgICAgICAgICAgdGhpcy5zbG1Qcm9jZXNzaW5nPSB0aGlzLnJlY29yZHMuc2xtX3Byb2Nlc3NpbmdfdGlja2V0cztcbiAgICAgICAgICAgICAgICB0aGlzLmpvaW5lZFByb2Nlc3Npbmc9IHRoaXMucmVjb3Jkcy5qb2luZWRfcHJvY2Vzc2luZ190aWNrZXRzO1xuICAgICAgICAgICAgICAgIHRoaXMubmV3VGlja2V0cz0gdGhpcy5yZWNvcmRzLm5ld190aWNrZXRzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VkVGlja2V0cz0gdGhpcy5yZWNvcmRzLmNsb3NlZF90aWNrZXRzO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclJvbGU9ICdDYWxsIENlbnRlciBVc2VyJztcblxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAvLyBheGlvcy5nZXQoXCJhcGkvZ2V0X3ByZV9tYWNoaW5lXCIpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5DYXRlZ29yeTtcbiAgICAgICAgLy8gICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gYXhpb3NcbiAgICAgICAgLy8gICAgIC5nZXQoXCIvYXBpL2luaXRpYWxfdGlja2V0XCIpXG4gICAgICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnZlbmRvcnM7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNlYXJjaF9zaXRlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zaXRlcztcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNyZWF0ZWRfdXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEuY3JlYXRlZF91c2VycztcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFwiT2guIFNvbWV0aGluZyB3ZW50IHdyb25nXCIpKTtcblxuXG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICAvLyBpZiAodGhpcy4kZ2F0ZS5pc0FkbWluKCkpIHtcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuJHJvdXRlci5wdXNoKCcvdXNlcnMnKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvdGlja2V0c1wiKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICAvLyB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzaWduX2dyYXBocygpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHRoaXMucmVjb3Jkc1xuICAgICAgICAgICAgdGhpcy5jaGFydE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidnVlY2hhcnQtZXhhbXBsZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWzE5OTEsIDE5OTIsIDE5OTMsIDE5OTQsIDE5OTUsIDE5OTYsIDE5OTcsIDE5OThdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyoqKioqKioqKioqICovXG4gICAgICAgICAgICB0aGlzLmRvbnV0Q2hhcnRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGNvbG9yczogWycjMDA2OGI5JywgJyMwMDY4YjlhZCddLFxuXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZG50MVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFtcIk1ham9yXCIsIFwiTWlub3JcIl0sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJDb21wbGFpbnQgTmF0dXJlXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmJhckNvdW50T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA5MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyNmZmYnXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NhbGwgU3RhdHVzJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW1wiUXVhcnRlciAxXCIsIFwiUXVhcnRlciAyXCIsIFwiUXVhcnRlciAzXCIsIFwiUXVhcnRlciA0XCJdLFxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDQwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgICAgIGdldExhYmVsKHZhbCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmZhcl9ubyArIFwiIC0gXCIgKyB2YWwubmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gYXN5bmMgZ2V0X21hY2hpbmUoKSB7XG4gICAgICAgIC8vICAgICBheGlvc1xuICAgICAgICAvLyAgICAgICAgIC5nZXQoXCIvYXBpL3JlcG9ydHMvbWFjaGluZXNcIiwge1xuICAgICAgICAvLyAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNpdGVfaWQ6IHRoaXMuc2VhcmNoLnNpdGVfaWQsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjYXRlZ29yeV9pZDogdGhpcy5zZWFyY2guY2F0ZWdvcnlfaWQsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6IHRoaXMuc2VhcmNoLnN1Yl9jYXRlZ29yeV9pZCxcbiAgICAgICAgLy8gICAgICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAvLyAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAvLyAgICAgICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oXCJPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmdcIikpO1xuICAgICAgICAvLyB9LFxuICAgIH0sXG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuLmRhc2hib2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmgyLnRpY2tldC1jb3VudCB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmg0IHtcbiAgY29sb3I6ICMzMzM7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4udGV4dC1zdWNjZXNzIHtcbiAgY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRhc2hib2FyZFtkYXRhLXYtZDlkODc2ODJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuLmNhcmRbZGF0YS12LWQ5ZDg3NjgyXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY2FyZC1ib2R5W2RhdGEtdi1kOWQ4NzY4Ml0ge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5oMi50aWNrZXQtY291bnRbZGF0YS12LWQ5ZDg3NjgyXSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuaDRbZGF0YS12LWQ5ZDg3NjgyXSB7XFxuICBjb2xvcjogIzMzMztcXG59XFxucFtkYXRhLXYtZDlkODc2ODJdIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnNoYWRvd1tkYXRhLXYtZDlkODc2ODJdIHtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi50ZXh0LXN1Y2Nlc3NbZGF0YS12LWQ5ZDg3NjgyXSB7XFxuICBjb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvc3VqYW4vRGVza3RvcC9Xb3JrL3Byb2plY3QgZnJlZWxhbmNlL1NhbmtoYS9hdG1fcHJvai9hdG0vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZsQkE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0NBQ0E7QUFFQTtFQUNBLG9CQUFBO0NBQ0E7QUFFQTtFQUNBLGFBQUE7Q0FDQTtBQUVBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtDQUNBO0FBRUE7RUFDQSxZQUFBO0NBQ0E7QUFFQTtFQUNBLFVBQUE7Q0FDQTtBQUVBO0VBQ0EseUNBQUE7Q0FDQTtBQUVBO0VBQ0EsMEJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIGRhc2hib2FyZFxcXCI+XFxuICAgICAgPCEtLSBIZWFkZXIgUm93IC0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTIgdGV4dC1jZW50ZXIgcHktM1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6ICM0MEUwRDA7XFxcIj5cXG4gICAgICAgICAgPGg0PkRhc2hib2FyZDwvaDQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8IS0tIFRvcCBSb3cgZm9yIFRpY2tldHMgLS0+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXktNFxcXCI+XFxuICAgICAgICA8IS0tIFRvdGFsIFRpY2tldHMgLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgdGV4dC1jZW50ZXIgc2hhZG93XFxcIiBzdHlsZT1cXFwiYm9yZGVyLXJhZGl1czogNTBweDtcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZjdlNjcsICNmZmIzYTcpOyBib3JkZXItcmFkaXVzOiA1MHB4O1xcXCI+XFxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRpY2tldC1jb3VudFxcXCI+e3sgdG90YWxUaWNrZXRzIH19PC9oMj5cXG4gICAgICAgICAgICAgIDxwPlRvdGFsIFRpY2tldHM8L3A+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1zbVxcXCI+VmlldyBEZXRhaWxzPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPCEtLSBQZW5kaW5nIFRpY2tldHMgLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgdGV4dC1jZW50ZXIgc2hhZG93XFxcIiBzdHlsZT1cXFwiYm9yZGVyLXJhZGl1czogNTBweDtcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM5MThhZjQsICNiM2E2ZjYpOyBib3JkZXItcmFkaXVzOiA1MHB4O1xcXCI+XFxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRpY2tldC1jb3VudFxcXCI+e3sgcGVuZGluZ1RpY2tldHMgfX08L2gyPlxcbiAgICAgICAgICAgICAgPHA+UGVuZGluZyBUaWNrZXRzPC9wPlxcbiAgICAgICAgICAgICAgPHA+RkxNOiB7eyBmbG1QZW5kaW5nIH19IHwgU0xNOiB7eyBzbG1QZW5kaW5nIH19IHwgSk9JTkVEOiB7eyBqb2luZWRQZW5kaW5nIH19PC9wPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc21cXFwiPlZpZXcgRGV0YWlsczwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwhLS0gUHJvY2Vzc2luZyBUaWNrZXRzIC0tPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtY2VudGVyIHNoYWRvd1xcXCIgc3R5bGU9XFxcImJvcmRlci1yYWRpdXM6IDUwcHg7XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZDM4MWYyLCAjZDlhNGY0KTsgYm9yZGVyLXJhZGl1czogNTBweDtcXFwiPlxcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJ0aWNrZXQtY291bnRcXFwiPnt7IHByb2Nlc3NpbmdUaWNrZXRzIH19PC9oMj5cXG4gICAgICAgICAgICAgIDxwPlByb2Nlc3NpbmcgVGlja2V0czwvcD5cXG4gICAgICAgICAgICAgIDxwPkZMTToge3sgZmxtUHJvY2Vzc2luZyB9fSB8IFNMTToge3sgc2xtUHJvY2Vzc2luZyB9fSB8IEpPSU5FRDoge3sgam9pbmVkUHJvY2Vzc2luZyB9fTwvcD5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYnRuLXNtXFxcIj5WaWV3IERldGFpbHM8L2E+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPCEtLSBUaWNrZXQgU3RhdHVzIFNlY3Rpb24gLS0+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHNoYWRvd1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgIDxoND5OZXcgVGlja2V0czwvaDQ+XFxuICAgICAgICAgICAgICA8cD4wMHt7IG5ld1RpY2tldHMgfX08L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgc2hhZG93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGg0PkNsb3NlZCBUaWNrZXRzPC9oND5cXG4gICAgICAgICAgICAgIDxwPnt7IGNsb3NlZFRpY2tldHMgfX08L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPCEtLSBVc2VyIFJvbGUgU2VjdGlvbiAtLT5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC00XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMiB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgIDxwPllvdSBoYXZlIGxvZ2dlZCBpbiBhcyA8c3Ryb25nIGNsYXNzPVxcXCJ0ZXh0LXN1Y2Nlc3NcXFwiPnt7IHVzZXJSb2xlIH19PC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmV4cG9ydCBkZWZhdWx0IHtcXG5cXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgZmFyX2RldGFpbHM6IHtcXG4gICAgICAgICAgICAgICAgYWN0dWFsX21hdGVyaWFsX2Nvc3Q6IDAsXFxuICAgICAgICAgICAgICAgIGFjdHVhbF9zZXJ2aWNlX2Nvc3Q6IDAsXFxuICAgICAgICAgICAgICAgIHJlY29yZHM6IFtdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICByZWNvcmRzOiAnJyxcXG4gICAgICAgICAgICBzZWFyY2g6IHtcXG4gICAgICAgICAgICAgICAgZmluYW5jaWFsX3llYXI6ICcnLFxcbiAgICAgICAgICAgICAgICBxdWFydGVyOiAnJyxcXG4gICAgICAgICAgICAgICAgbW9udGg6ICcnLFxcbiAgICAgICAgICAgICAgICBkYXRlX2Zyb206ICcnLFxcbiAgICAgICAgICAgICAgICBkYXRlX3RvOiAnJyxcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBtb250aE5hbWVzOiBbXFxcIkphbnVhcnlcXFwiLCBcXFwiRmVicnVhcnlcXFwiLCBcXFwiTWFyY2hcXFwiLCBcXFwiQXByaWxcXFwiLCBcXFwiTWF5XFxcIiwgXFxcIkp1bmVcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiSnVseVxcXCIsIFxcXCJBdWd1c3RcXFwiLCBcXFwiU2VwdGVtYmVyXFxcIiwgXFxcIk9jdG9iZXJcXFwiLCBcXFwiTm92ZW1iZXJcXFwiLCBcXFwiRGVjZW1iZXJcXFwiXSxcXG5cXG4gICAgICAgICAgICBjaGFydE9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcXFwidnVlY2hhcnQtZXhhbXBsZVxcXCIsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbMTk5MSwgMTk5MiwgMTk5MywgMTk5NCwgMTk5NSwgMTk5NiwgMTk5NywgMTk5OF0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBzZXJpZXM6IFtcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXFxcInNlcmllcy0xXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgNDAsIDM1LCA1MCwgNDksIDYwLCA3MCwgOTFdLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIF0sXFxuXFxuICAgICAgICAgICAgLy8qKioqKioqKioqKiAqL1xcblxcbiAgICAgICAgICAgIGRvbnV0U2VyaWVzOiBbNDQsIDU1XSxcXG4gICAgICAgICAgICBkb251dENoYXJ0T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFsnIzAwNDQ4OCcsICcjMzhjMTcyJ10sXFxuXFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICBpZDogXFxcImRudDFcXFwiXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGxhYmVsczogW1xcXCJNYWpvclxcXCIsIFxcXCJNaW5vclxcXCJdLFxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXFxcIkNvbXBsYWludCBOYXR1cmVcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxcbiAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbe1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfV0sXFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnY2VudGVyJyxcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgYmFyQ291bnRPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUwLFxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyNGRjU3MzMnLCAnIzMzRkY1NyddLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZmJ11cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHVuZGVmaW5lZFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW1xcXCJRdWFydGVyIDFcXFwiLCBcXFwiUXVhcnRlciAyXFxcIiwgXFxcIlF1YXJ0ZXIgM1xcXCIsIFxcXCJRdWFydGVyIDRcXFwiXSxcXG5cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdW5kZWZpbmVkXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICBmaWxsOiB7XFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiA0MFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICBiYXJFcXVpcG1lbnRPcHRpb25zOiB7XFxuXFxuICAgICAgICAgICAgICAgIHNlcmllczogW10sXFxuICAgICAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2VxdWlwbWVudENoYXJ0JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgem9vbToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBvaW50U2VsZWN0aW9uOiAoZXZlbnQsIGNoYXJ0Q29udGV4dCwgY29uZmlnKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFydENvbnRleHQpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnlJbmRleCA9IGNvbmZpZy5kYXRhUG9pbnRJbmRleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmYXJfbm8gPSB0aGlzLmJhckVxdWlwbWVudE9wdGlvbnMuY2hhcnRPcHRpb25zLnhheGlzLmNhdGVnb3JpZXNbY2F0ZWdvcnlJbmRleF07XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBheGlvcy5nZXQoJ2FwaS9nZXRfbWFjaGluZV9mb3JfZGFzaGJvYXJkJywge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAnZmFyX25vJzogZmFyX25vXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5mYXJfZGV0YWlscyA9IHJlc3BvbnNlLmRhdGEuZGF0YVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAkKCcjY291bnRDb21wbGFpbnRNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciEnLCBlcnJvcik7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBZb3UgY2FuIHJlcGxhY2UgdGhlIGFsZXJ0IHdpdGggeW91ciBjdXN0b20gcG9wdXAgbG9naWNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBleGFtcGxlLCBvcGVuIGEgbW9kYWwgb3IgYSBjdXN0b20gcG9wdXBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogLTEwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfV0sXFxuICAgICAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhcjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXNBcHBsaWNhdGlvbjogJ2VuZCcsIC8vICdhcm91bmQnLCAnZW5kJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXNXaGVuU3RhY2tlZDogJ2xhc3QnLCAvLyAnYWxsJywgJ2xhc3QnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzlweCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAtNDVcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tQbGFjZW1lbnQ6ICdvbidcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAvLyoqKioqKiogKi9cXG5cXG4gICAgICAgICAgICBiYXJQcm9qZWN0T3B0aW9uczoge1xcblxcbiAgICAgICAgICAgICAgICBzZXJpZXM6IFtdLFxcbiAgICAgICAgICAgICAgICBjaGFydE9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IC0xMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IDBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1dLFxcbiAgICAgICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IDBcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICBmaW5hbmNpYWxfeWVhcnM6IFtdLFxcbiAgICAgICAgICAgIHNlYXJjaF9tYWNoaW5lczogW10sXFxuICAgICAgICAgICAgc2VhcmNoX3NpdGVzOiBbXSxcXG4gICAgICAgICAgICBzZWFyY2hfdGlja2V0czogW10sXFxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXFxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXM6IFtdLFxcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXFxuICAgICAgICAgICAgdG90YWxUaWNrZXRzOiAxODQ2MTMsXFxuICAgICAgcGVuZGluZ1RpY2tldHM6IDAsXFxuICAgICAgZmxtUGVuZGluZzogMCxcXG4gICAgICBzbG1QZW5kaW5nOiAwLFxcbiAgICAgIGpvaW5lZFBlbmRpbmc6IDAsXFxuICAgICAgcHJvY2Vzc2luZ1RpY2tldHM6IDQ5LFxcbiAgICAgIGZsbVByb2Nlc3Npbmc6IDM5LFxcbiAgICAgIHNsbVByb2Nlc3Npbmc6IDEsXFxuICAgICAgam9pbmVkUHJvY2Vzc2luZzogOSxcXG4gICAgICBuZXdUaWNrZXRzOiAwLFxcbiAgICAgIGNsb3NlZFRpY2tldHM6IDE4NDU2NCxcXG4gICAgICB1c2VyUm9sZTogJ0NhbGwgQ2VudGVyIFVzZXInLFxcbiAgICAgICAgfTtcXG4gICAgfSxcXG4gICAgdXBkYXRlZDogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgIC8vIHRoaXMuYXNpZ25fZ3JhcGhzKCk7XFxuICAgICAgICB9KVxcbiAgICB9LFxcbiAgICB3YXRjaDoge1xcbiAgICAgICAgJ3NlYXJjaC5xdWFydGVyJyhuKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV9mcm9tID0gJydcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV90byA9ICcnXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLm1vbnRoID0gJydcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgJ3NlYXJjaC5kYXRlX2Zyb20nKG4pIHtcXG4gICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnF1YXJ0ZXIgPSAnJ1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICAnc2VhcmNoLmRhdGVfdG8nKG4pIHtcXG4gICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnF1YXJ0ZXIgPSAnJ1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICAnc2VhcmNoLm1vbnRoJyhuKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV9mcm9tID0gJydcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV90byA9ICcnXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnF1YXJ0ZXIgPSAnJ1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBzZWFyY2g6IHtcXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobikge1xcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvZGFzaGJvYXJkJywgdGhpcy5zZWFyY2gpXFxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlcy5kYXRhLmRhdGFcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhckVxdWlwbWVudE9wdGlvbnMuY2hhcnRPcHRpb25zLnhheGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLkVxdWlwbWVudENoYXJ0LnNlcmllc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyRXF1aXBtZW50T3B0aW9ucy5zZXJpZXMgPSByZXMuZGF0YS5kYXRhLkVxdWlwbWVudENoYXJ0LmRhdGFcXG5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmJhckNvdW50Q2hhcnQudXBkYXRlU2VyaWVzKHRoaXMucmVjb3Jkcy5iYXJDb3VudENoYXJ0LnNlcmllcywgdHJ1ZSlcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmJhckNvdW50Q2hhcnQudXBkYXRlT3B0aW9ucyh0aGlzLnJlY29yZHMuYmFyQ291bnRDaGFydC5vcHRpb25zLCBmYWxzZSwgdHJ1ZSlcXG5cXG4gICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XFxuICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZGVlcDogdHJ1ZVxcbiAgICAgICAgfSxcXG4gICAgICAgIGFzeW5jIFxcXCJzZWFyY2guc3ViX2NhdGVnb3J5X2lkXFxcIihuLCBvKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBhc3luYyBcXFwic2VhcmNoLnNpdGVfaWRcXFwiKG4sIG8pIHtcXG4gICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIFxcXCJzZWFyY2guY2F0ZWdvcnlfaWRcXFwiOiB7XFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcXG4gICAgICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldChcXFwiYXBpL2NhdGVnb3J5L1xcXCIgKyBuKS50aGVuKChyZXMpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yl9jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxcbiAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICB9LFxcbiAgICBjcmVhdGVkKCkge1xcbiAgICAgICAgdmFyIHllYXJzTGVuZ3RoID0gMzA7XFxuICAgICAgICB2YXIgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XFxuICAgICAgICBmb3IgKHZhciBpID0gMjAyMjsgaSA8PSBjdXJyZW50WWVhcjsgaSsrKSB7XFxuICAgICAgICAgICAgdmFyIG5leHQgPSBpICsgMTtcXG4gICAgICAgICAgICB2YXIgeWVhciA9IGkgKyAnLScgKyBuZXh0LnRvU3RyaW5nKCk7XFxuICAgICAgICAgICAgdGhpcy5maW5hbmNpYWxfeWVhcnMucHVzaCh5ZWFyKVxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XFxuICAgICAgICBheGlvcy5nZXQoJ2FwaS9kYXNoYm9hcmQnKVxcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlcy5kYXRhLmRhdGFcXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXFxcInRoaXMucmVjb3Jkc1xcXCIsdGhpcy5yZWNvcmRzKTtcXG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbFRpY2tldHM9IHRoaXMucmVjb3Jkcy50b3RhbF90aWNrZXRzO1xcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdUaWNrZXRzPSB0aGlzLnJlY29yZHMucGVuZGluZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICB0aGlzLmZsbVBlbmRpbmc9IHRoaXMucmVjb3Jkcy5mbG1fcGVuZGluZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICB0aGlzLnNsbVBlbmRpbmc9IHRoaXMucmVjb3Jkcy5zbG1fcGVuZGluZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICB0aGlzLmpvaW5lZFBlbmRpbmc9IHRoaXMucmVjb3Jkcy5qb2luZWRfcGVuZGluZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmdUaWNrZXRzPSB0aGlzLnJlY29yZHMucHJvY2Vzc2luZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICB0aGlzLmZsbVByb2Nlc3Npbmc9IHRoaXMucmVjb3Jkcy5mbG1fcHJvY2Vzc2luZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICB0aGlzLnNsbVByb2Nlc3Npbmc9IHRoaXMucmVjb3Jkcy5zbG1fcHJvY2Vzc2luZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICB0aGlzLmpvaW5lZFByb2Nlc3Npbmc9IHRoaXMucmVjb3Jkcy5qb2luZWRfcHJvY2Vzc2luZ190aWNrZXRzO1xcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1RpY2tldHM9IHRoaXMucmVjb3Jkcy5uZXdfdGlja2V0cztcXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZWRUaWNrZXRzPSB0aGlzLnJlY29yZHMuY2xvc2VkX3RpY2tldHM7XFxuICAgICAgICAgICAgICAgIHRoaXMudXNlclJvbGU9ICdDYWxsIENlbnRlciBVc2VyJztcXG5cXG5cXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XFxuICAgICAgICAgICAgfSlcXG5cXG4gICAgICAgIC8vIGF4aW9zLmdldChcXFwiYXBpL2dldF9wcmVfbWFjaGluZVxcXCIpLnRoZW4oKHJlcykgPT4ge1xcbiAgICAgICAgLy8gICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuQ2F0ZWdvcnk7XFxuICAgICAgICAvLyAgICAgdGhpcy5zaXRlcyA9IHJlcy5kYXRhLmRhdGEuc2l0ZXM7XFxuICAgICAgICAvLyB9KTtcXG4gICAgICAgIC8vIGF4aW9zXFxuICAgICAgICAvLyAgICAgLmdldChcXFwiL2FwaS9pbml0aWFsX3RpY2tldFxcXCIpXFxuICAgICAgICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAvLyAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEudmVuZG9ycztcXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZWFyY2hfbWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XFxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2VhcmNoX3NpdGVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnNpdGVzO1xcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNyZWF0ZWRfdXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEuY3JlYXRlZF91c2VycztcXG4gICAgICAgIC8vICAgICB9KVxcbiAgICAgICAgLy8gICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oXFxcIk9oLiBTb21ldGhpbmcgd2VudCB3cm9uZ1xcXCIpKTtcXG5cXG5cXG4gICAgfSxcXG4gICAgbW91bnRlZCgpIHtcXG4gICAgICAgIC8vIGlmICh0aGlzLiRnYXRlLmlzQWRtaW4oKSkge1xcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuJHJvdXRlci5wdXNoKCcvdXNlcnMnKS5jYXRjaCgoKSA9PiB7IH0pO1xcbiAgICAgICAgLy8gfSBlbHNlIHtcXG4gICAgICAgIC8vICAgICB0aGlzLiRyb3V0ZXIucHVzaChcXFwiL3RpY2tldHNcXFwiKS5jYXRjaCgoKSA9PiB7IH0pO1xcbiAgICAgICAgLy8gfVxcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBhc2lnbl9ncmFwaHMoKSB7XFxuICAgICAgICAgICAgdGhpcy5yZWNvcmRzID0gdGhpcy5yZWNvcmRzXFxuICAgICAgICAgICAgdGhpcy5jaGFydE9wdGlvbnMgPSB7XFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICBpZDogXFxcInZ1ZWNoYXJ0LWV4YW1wbGVcXFwiLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWzE5OTEsIDE5OTIsIDE5OTMsIDE5OTQsIDE5OTUsIDE5OTYsIDE5OTcsIDE5OThdLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAvLyoqKioqKioqKioqICovXFxuICAgICAgICAgICAgdGhpcy5kb251dENoYXJ0T3B0aW9ucyA9IHtcXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJyMwMDY4YjknLCAnIzAwNjhiOWFkJ10sXFxuXFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICBpZDogXFxcImRudDFcXFwiXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGxhYmVsczogW1xcXCJNYWpvclxcXCIsIFxcXCJNaW5vclxcXCJdLFxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXFxcIkNvbXBsYWludCBOYXR1cmVcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxcbiAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbe1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfV0sXFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnY2VudGVyJyxcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB0aGlzLmJhckNvdW50T3B0aW9ucyA9IHtcXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXFxuICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA5MDBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZiddXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2FsbCBTdGF0dXMnXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXFxcIlF1YXJ0ZXIgMVxcXCIsIFxcXCJRdWFydGVyIDJcXFwiLCBcXFwiUXVhcnRlciAzXFxcIiwgXFxcIlF1YXJ0ZXIgNFxcXCJdLFxcblxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1bmRlZmluZWRcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgIGZpbGw6IHtcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDQwXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICB9LFxcbiAgICAgICAgZ2V0TGFiZWwodmFsKSB7XFxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFxcXCJvYmplY3RcXFwiKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZmFyX25vICsgXFxcIiAtIFxcXCIgKyB2YWwubmFtZTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICAvLyBhc3luYyBnZXRfbWFjaGluZSgpIHtcXG4gICAgICAgIC8vICAgICBheGlvc1xcbiAgICAgICAgLy8gICAgICAgICAuZ2V0KFxcXCIvYXBpL3JlcG9ydHMvbWFjaGluZXNcXFwiLCB7XFxuICAgICAgICAvLyAgICAgICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzaXRlX2lkOiB0aGlzLnNlYXJjaC5zaXRlX2lkLFxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiB0aGlzLnNlYXJjaC5jYXRlZ29yeV9pZCxcXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6IHRoaXMuc2VhcmNoLnN1Yl9jYXRlZ29yeV9pZCxcXG4gICAgICAgIC8vICAgICAgICAgICAgIH0sXFxuICAgICAgICAvLyAgICAgICAgIH0pXFxuICAgICAgICAvLyAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zZWFyY2hfbWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGE7XFxuICAgICAgICAvLyAgICAgICAgIH0pXFxuICAgICAgICAvLyAgICAgICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oXFxcIk9oLiBTb21ldGhpbmcgd2VudCB3cm9uZ1xcXCIpKTtcXG4gICAgICAgIC8vIH0sXFxuICAgIH0sXFxufTtcXG48L3NjcmlwdD5cXG48c3R5bGUgc2NvcGVkPlxcbi5kYXNoYm9hcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2FyZC1ib2R5IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaDIudGlja2V0LWNvdW50IHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oNCB7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zaGFkb3cge1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnRleHQtc3VjY2VzcyB7XFxuICBjb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkIGRhc2hib2FyZFwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG15LTRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgdGV4dC1jZW50ZXIgc2hhZG93XCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImJvcmRlci1yYWRpdXNcIjogXCI1MHB4XCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmY3ZTY3LCAjZmZiM2E3KVwiLFxuICAgICAgICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiNTBweFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpY2tldC1jb3VudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRvdGFsVGlja2V0cykpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlRvdGFsIFRpY2tldHNcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc21cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJWaWV3IERldGFpbHNcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgdGV4dC1jZW50ZXIgc2hhZG93XCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImJvcmRlci1yYWRpdXNcIjogXCI1MHB4XCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOTE4YWY0LCAjYjNhNmY2KVwiLFxuICAgICAgICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiNTBweFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpY2tldC1jb3VudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBlbmRpbmdUaWNrZXRzKSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiUGVuZGluZyBUaWNrZXRzXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIkZMTTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZmxtUGVuZGluZykgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiIHwgU0xNOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zbG1QZW5kaW5nKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCIgfCBKT0lORUQ6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmpvaW5lZFBlbmRpbmcpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYnRuLXNtXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVmlldyBEZXRhaWxzXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkIHRleHQtY2VudGVyIHNoYWRvd1wiLFxuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJib3JkZXItcmFkaXVzXCI6IFwiNTBweFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2QzODFmMiwgI2Q5YTRmNClcIixcbiAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjUwcHhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJ0aWNrZXQtY291bnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wcm9jZXNzaW5nVGlja2V0cykpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlByb2Nlc3NpbmcgVGlja2V0c1wiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJGTE06IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZsbVByb2Nlc3NpbmcpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIiB8IFNMTTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc2xtUHJvY2Vzc2luZykgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiIHwgSk9JTkVEOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5qb2luZWRQcm9jZXNzaW5nKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlZpZXcgRGV0YWlsc1wiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIHNoYWRvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIk5ldyBUaWNrZXRzXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCIwMFwiICsgX3ZtLl9zKF92bS5uZXdUaWNrZXRzKSldKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgc2hhZG93XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiQ2xvc2VkIFRpY2tldHNcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3ZtLmNsb3NlZFRpY2tldHMpKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMiB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXCJZb3UgaGF2ZSBsb2dnZWQgaW4gYXMgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlclJvbGUpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyIHRleHQtY2VudGVyIHB5LTNcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImJhY2tncm91bmQtY29sb3JcIjogXCIjNDBFMEQwXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJoNFwiLCBbX3ZtLl92KFwiRGFzaGJvYXJkXCIpXSldXG4gICAgICApXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWQ5ZDg3NjgyXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWQ5ZDg3NjgyXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjE2NmFmYjVhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZDlkODc2ODJcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWQ5ZDg3NjgyXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoY29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWQ5ZDg3NjgyXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWQ5ZDg3NjgyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LWQ5ZDg3NjgyXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcRGFzaGJvYXJkXFxcXERhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kOWQ4NzY4MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWQ5ZDg3NjgyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=