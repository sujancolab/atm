(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      },
      barCountOptions: {
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
      },
      barEquipmentOptions: {
        chart: {
          height: 350,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            borderRadius: 2,
            columnWidth: '50%'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2
        },
        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },
        xaxis: {
          labels: {
            rotate: -45
          },
          categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas', 'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'],
          tickPlacement: 'on'
        },
        yaxis: {
          title: {
            text: 'Count of Complaint'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
          }
        }
      },
      //******* */

      barProjectOptions: {
        chart: {
          height: 350,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            borderRadius: 2,
            columnWidth: '50%'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2
        },
        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },
        xaxis: {
          labels: {
            rotate: -45
          },
          categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas', 'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'],
          tickPlacement: 'on'
        },
        yaxis: {
          title: {
            text: 'Count of Complaint'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
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
      machines: []
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
          this.barEquipmentOptions.xaxis.categories = res.data.data.EquipmentChart.options.xaxis.categories;
          this.barProjectOptions.xaxis.categories = res.data.data.ProjectChart.options.xaxis.categories;
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
    console.log(this.barEquipmentOptions.xaxis);
    var yearsLength = 30;
    var currentYear = new Date().getFullYear();
    for (var i = 2022; i <= currentYear; i++) {
      var next = i + 1;
      var year = i + '-' + next.toString();
      this.financial_years.push(year);
    }
  },
  beforeCreate() {
    axios.post('api/dashboard', this.search).then(res => {
      this.records = res.data.data;
      this.barEquipmentOptions.xaxis.categories = res.data.data.EquipmentChart.options.xaxis.categories;
      this.barProjectOptions.xaxis.categories = res.data.data.ProjectChart.options.xaxis.categories;
      this.barCountOptions.xaxis.categories = res.data.data.barCountChart.options.xaxis.categories;
      this.$forceUpdate();
    }).catch(err => {
      console.error(err);
    });
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
    }).catch(() => console.warn("Oh. Something went wrong"));
  },
  mounted() {
    if (this.$gate.isAdmin()) {
      // this.$router.push('/users').catch(() => { });
    } else {
      this.$router.push("/tickets").catch(() => {});
    }
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
      this.barEquipmentOptions = {
        chart: {
          height: 350,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            borderRadius: 2,
            columnWidth: '50%'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2
        },
        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },
        xaxis: {
          labels: {
            rotate: -45
          },
          categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas', 'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'],
          tickPlacement: 'on'
        },
        yaxis: {
          title: {
            text: 'Count of Complaint'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
          }
        }
      };
      //******* */

      this.barProjectOptions = {
        chart: {
          height: 350,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            borderRadius: 2,
            columnWidth: '50%'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2
        },
        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },
        xaxis: {
          labels: {
            rotate: -45
          },
          categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas', 'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'],
          tickPlacement: 'on'
        },
        yaxis: {
          title: {
            text: 'Count of Complaint'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
          }
        }
      };
    },
    getLabel(val) {
      if (typeof val === "object") {
        return val.far_no + " - " + val.name;
      } else {
        return val;
      }
    },
    async get_machine() {
      axios.get("/api/reports/machines", {
        params: {
          site_id: this.search.site_id,
          category_id: this.search.category_id,
          sub_category_id: this.search.sub_category_id
        }
      }).then(response => {
        this.search_machines = response.data.data;
      }).catch(() => console.warn("Oh. Something went wrong"));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n#apexchartsdnt1 {\r\n    margin-left: -60px !important;\n}\r\n", "", {"version":3,"sources":["C:/wamp64/www/rmm/resources/js/components/Dashboard/resources/js/components/Dashboard/DashboardCallLockStatus.vue"],"names":[],"mappings":";AA4yBA;IACA,8BAAA;CACA","file":"DashboardCallLockStatus.vue","sourcesContent":["<template>\r\n    <section class=\"content\">\r\n        <div class=\"container-fluid\" v-if=\"records\">\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col\">\r\n                            <label for=\"\">FY</label>\r\n                            <v-select :options=\"financial_years\" placeholder=\"Select FY...\" v-model=\"search.financial_year\"\r\n                                name=\"financial_year\">\r\n                            </v-select>\r\n                        </div>\r\n                        <div class=\"col\"\r\n                            v-if=\"!search.date_from && !search.date_to && !search.month && search.financial_year\">\r\n                            <label for=\"\">Quarter</label>\r\n                            <select v-model=\"search.quarter\" class=\"form-control\">\r\n                                <option value=\"\">--</option>\r\n                                <Option value=\"4-6\">1</Option>\r\n                                <Option value=\"7-9\">2</Option>\r\n                                <Option value=\"10-12\">3</Option>\r\n                                <Option value=\"1-3\">4</Option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col\" v-if=\"!search.date_from && !search.date_to && !search.quarter\">\r\n                            <label for=\"\">Month</label>\r\n                            <select v-model=\"search.month\" class=\"form-control\">\r\n                                <option value=\"\">--</option>\r\n                                <Option :value=\"(x + 1)\" v-for=\"(it, x) in monthNames\" :key=\"'m' + x\">{{ it }}</Option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <div class=\"col\" v-if=\"!search.month && !search.quarter\">\r\n                            <label for=\"\">From Date</label>\r\n                            <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.date_from\" input-class=\"form-control\"\r\n                                placeholder=\"Created from date\" />\r\n                        </div>\r\n                        <div class=\"col\" v-if=\"!search.month && !search.quarter\">\r\n                            <label for=\"\">To Date</label>\r\n                            <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.date_to\" input-class=\"form-control\"\r\n                                placeholder=\"Created to date\" />\r\n                        </div>\r\n\r\n                        <div class=\"col\">\r\n                            <label for=\"\">Project Name</label>\r\n                            <v-select label=\"site_name\" :reduce=\"(option) => option.id\" :options=\"search_sites\"\r\n                                placeholder=\"Choose Project...\" v-model=\"search.site_id\" name=\"site_id\">\r\n                            </v-select>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <label for=\"\">Equipment Category</label>\r\n                            <v-select label=\"name\" :reduce=\"(option) => option.id\" :options=\"categories\"\r\n                                placeholder=\"Choose Category ...\" v-model=\"search.category_id\">\\\r\n                            </v-select>\r\n                        </div>\r\n                        <div class=\"col  \">\r\n                            <label for=\"\">Description</label>\r\n                            <v-select label=\"name\" :reduce=\"(option) => option.id\" :options=\"sub_categories\"\r\n                                placeholder=\"Choose description ...\" v-model=\"search.sub_category_id\">\r\n                            </v-select>\r\n                        </div>\r\n                        <div class=\"col  \">\r\n                            <label for=\"\">Equipment Name</label>\r\n                            <v-select label=\"name\" :get-option-label=\"getLabel\" :reduce=\"(option) => option.id\"\r\n                                :options=\"search_machines\" placeholder=\"Choose Equipment ...\" v-model=\"search.machine_id\"\r\n                                name=\"machine_id\">\r\n                            </v-select>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"row row-eq-height mt-2\">\r\n                <!-- Left col -->\r\n                <div class=\"col-md-6\">\r\n                    <!-- MAP & BOX PANE -->\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">Complain</h3>\r\n                            <div class=\"card-tools\">\r\n                                <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\">\r\n                                    <i class=\"fas fa-minus\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <!-- /.card-header -->\r\n                        <div class=\"card-body p-1\">\r\n                            <div class=\"col-12\">\r\n                                <div class=\"row text-center\">\r\n\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-12\">\r\n                                <div class=\"row text-center\">\r\n                                    <div class=\"col-6 p-1\">\r\n                                        <apexchart width=\"440\" type=\"donut\" :options=\"donutChartOptions\"\r\n                                            :series=\"records.complain_nature_chart.series\">\r\n                                        </apexchart>\r\n                                    </div>\r\n                                    <div class=\"col-6 p-1\">\r\n\r\n                                        <div class=\"col-12 p-1\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-6 pr-1\">\r\n                                                    <div class=\"info-box bg-yellow\">\r\n                                                        <div class=\"info-box-content\">\r\n                                                            <span class=\"info-box-number\">{{ records.total_tickets }}</span>\r\n                                                            <span class=\"info-box-text\">Total Complaint </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-6 pl-1\">\r\n                                                    <div class=\"info-box\" style=\"background-color: #cf34dcba !important;\">\r\n                                                        <div class=\"info-box-content\">\r\n                                                            <span class=\"info-box-number\">{{ records.avg_tat }}</span>\r\n                                                            <span class=\"info-box-text\">Average TAT (Days)</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-6 pr-1\">\r\n                                                    <div class=\"info-box\" style=\"background-color:#1FDEC3 !important;\">\r\n                                                        <div class=\"info-box-content\">\r\n                                                            <span class=\"info-box-number\">{{ records.closed_tickets\r\n                                                            }}</span>\r\n                                                            <span class=\"info-box-text\">Closed Call</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-6 pl-1\">\r\n                                                    <div class=\"info-box\"  style=\"background-color: #ea70f5ba !important;\">\r\n                                                        <div class=\"info-box-content\">\r\n                                                            <span class=\"info-box-number\">{{ records.within_tat }}</span>\r\n                                                            <span class=\"info-box-text\">Within TAT</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-6 pr-1\">\r\n                                                    <div class=\"info-box \" style=\"background-color: #EA5F5F !important;\">\r\n                                                        <div class=\"info-box-content\">\r\n                                                            <span class=\"info-box-number\">{{ records.open_tickets }}</span>\r\n                                                            <span class=\"info-box-text\">Open Call</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-6 pl-1\">\r\n                                                    <div class=\"info-box\" style=\"background-color: #890b95ba !important;\">\r\n                                                        <div class=\"info-box-content\">\r\n                                                            <span class=\"info-box-number\">{{ records.exceeding_tat }}</span>\r\n                                                            <span class=\"info-box-text\">Exceeding TAT</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- /.card-body -->\r\n                    </div>\r\n                    <!-- /.card -->\r\n                    <!-- /.card -->\r\n                </div>\r\n                <!-- /.col -->\r\n\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">Count of Complaint Nature by FY, Quarter and Call Status</h3>\r\n                            <div class=\"card-tools\">\r\n                                <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\">\r\n                                    <i class=\"fas fa-minus\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body p-1\">\r\n                            <apexchart type=\"bar\" height=\"328\" style=\"max-height: 328px !important;\" :options=\"records.barCountChart.options\"\r\n                                :series=\"records.barCountChart.series\">\r\n                            </apexchart>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">Count of Complaint by Equipment Type</h3>\r\n                            <div class=\"card-tools\">\r\n                                <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\">\r\n                                    <i class=\"fas fa-minus\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body p-1\">\r\n                            <apexchart type=\"bar\" height=\"350\" :options=\"records.EquipmentChart.options\"\r\n                                :series=\"records.EquipmentChart.series\">\r\n                            </apexchart>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">Count of Complaint by Project</h3>\r\n                            <div class=\"card-tools\">\r\n                                <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\">\r\n                                    <i class=\"fas fa-minus\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body p-1\">\r\n                            <apexchart type=\"bar\" height=\"350\" :options=\"records.ProjectChart.options\"\r\n                                :series=\"records.ProjectChart.series\">\r\n                            </apexchart>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- /.col -->\r\n            </div>\r\n            <!-- /.row -->\r\n        </div>\r\n        <!--/. container-fluid -->\r\n    </section>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n\r\n    data() {\r\n        return {\r\n            records: '',\r\n            search: {\r\n                financial_year: '',\r\n                quarter: '',\r\n                month:'',\r\n                date_from: '',\r\n                date_to: '',\r\n                site_id: '',\r\n                category_id: '',\r\n                sub_category_id: '',\r\n                machine_id: ''\r\n            },\r\n            monthNames: [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\",\r\n                \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"],\r\n\r\n            chartOptions: {\r\n                chart: {\r\n                    id: \"vuechart-example\",\r\n                },\r\n                xaxis: {\r\n                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],\r\n                },\r\n            },\r\n            series: [\r\n                {\r\n                    name: \"series-1\",\r\n                    data: [30, 40, 35, 50, 49, 60, 70, 91],\r\n                },\r\n            ],\r\n\r\n            //*********** */\r\n\r\n            donutSeries: [44, 55],\r\n            donutChartOptions: {\r\n             colors: ['#0068b9', '#0068b9ad'],\r\n                \r\n                chart: {\r\n                    id: \"dnt1\"\r\n                },\r\n                labels: [\"Major\", \"Minor\"],\r\n                title: {\r\n                    text: \"Complaint Nature\",\r\n                    align: 'center',\r\n                },\r\n\r\n                responsive: [{\r\n                    breakpoint: 480,\r\n                    options: {\r\n                        chart: {\r\n                            width: 200\r\n                        },\r\n\r\n                        legend: {\r\n                            position: 'bottom',\r\n                            horizontalAlign: 'left',\r\n                        }\r\n                    }\r\n                }],\r\n                legend: {\r\n                    position: 'bottom',\r\n                    horizontalAlign: 'center',\r\n                }\r\n            },\r\n\r\n            barCountOptions: {\r\n                chart: {\r\n                    type: 'bar',\r\n                    height: 350,\r\n                    stacked: true,\r\n                },\r\n                plotOptions: {\r\n                    bar: {\r\n                        horizontal: true,\r\n                        dataLabels: {\r\n                            total: {\r\n                                enabled: true,\r\n                                offsetX: 0,\r\n                                style: {\r\n                                    fontSize: '13px',\r\n                                    fontWeight: 900\r\n                                }\r\n                            }\r\n                        }\r\n                    },\r\n                },\r\n                stroke: {\r\n                    width: 1,\r\n                    colors: ['#fff']\r\n                },\r\n                title: {\r\n                    text: 'Call Status'\r\n                },\r\n                xaxis: {\r\n                    categories: [\"Quarter 1\", \"Quarter 2\", \"Quarter 3\", \"Quarter 4\"],\r\n\r\n                },\r\n                yaxis: {\r\n                    title: {\r\n                        text: undefined\r\n                    },\r\n                },\r\n\r\n                fill: {\r\n                    opacity: 1\r\n                },\r\n                legend: {\r\n                    position: 'top',\r\n                    horizontalAlign: 'left',\r\n                    offsetX: 40\r\n                }\r\n            },\r\n\r\n            barEquipmentOptions: {\r\n\r\n                chart: {\r\n                    height: 350,\r\n                    type: 'bar',\r\n                },\r\n                plotOptions: {\r\n                    bar: {\r\n                        borderRadius: 2,\r\n                        columnWidth: '50%',\r\n                    }\r\n                },\r\n                dataLabels: {\r\n                    enabled: false\r\n                },\r\n                stroke: {\r\n                    width: 2\r\n                },\r\n\r\n                grid: {\r\n                    row: {\r\n                        colors: ['#fff', '#f2f2f2']\r\n                    }\r\n                },\r\n                xaxis: {\r\n                    labels: {\r\n                        rotate: -45\r\n                    },\r\n                    categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',\r\n                        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'\r\n                    ],\r\n                    tickPlacement: 'on'\r\n                },\r\n                yaxis: {\r\n                    title: {\r\n                        text: 'Count of Complaint',\r\n                    },\r\n                },\r\n                fill: {\r\n                    type: 'gradient',\r\n                    gradient: {\r\n                        shade: 'light',\r\n                        type: \"horizontal\",\r\n                        shadeIntensity: 0.25,\r\n                        gradientToColors: undefined,\r\n                        inverseColors: true,\r\n                        opacityFrom: 0.85,\r\n                        opacityTo: 0.85,\r\n                        stops: [50, 0, 100]\r\n                    },\r\n                }\r\n            },\r\n            //******* */\r\n\r\n            barProjectOptions: {\r\n\r\n                chart: {\r\n                    height: 350,\r\n                    type: 'bar',\r\n                },\r\n                plotOptions: {\r\n                    bar: {\r\n                        borderRadius: 2,\r\n                        columnWidth: '50%',\r\n                    }\r\n                },\r\n                dataLabels: {\r\n                    enabled: false\r\n                },\r\n                stroke: {\r\n                    width: 2\r\n                },\r\n\r\n                grid: {\r\n                    row: {\r\n                        colors: ['#fff', '#f2f2f2']\r\n                    }\r\n                },\r\n                xaxis: {\r\n                    labels: {\r\n                        rotate: -45\r\n                    },\r\n                    categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',\r\n                        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'\r\n                    ],\r\n                    tickPlacement: 'on'\r\n                },\r\n                yaxis: {\r\n                    title: {\r\n                        text: 'Count of Complaint',\r\n                    },\r\n                },\r\n                fill: {\r\n                    type: 'gradient',\r\n                    gradient: {\r\n                        shade: 'light',\r\n                        type: \"horizontal\",\r\n                        shadeIntensity: 0.25,\r\n                        gradientToColors: undefined,\r\n                        inverseColors: true,\r\n                        opacityFrom: 0.85,\r\n                        opacityTo: 0.85,\r\n                        stops: [50, 0, 100]\r\n                    },\r\n                }\r\n            },\r\n\r\n            financial_years: [],\r\n            search_machines: [],\r\n            search_sites: [],\r\n            search_tickets: [],\r\n            categories: [],\r\n            sub_categories: [],\r\n            sites: [],\r\n            machines: [],\r\n        };\r\n    },\r\n    updated: function () {\r\n        this.$nextTick(function () {\r\n           // this.asign_graphs(); \r\n        })\r\n    },\r\n    watch: {\r\n        'search.quarter'(n) {\r\n            if (n) {\r\n                this.search.date_from = ''\r\n                this.search.date_to = ''\r\n                this.search.month = ''\r\n            }\r\n        },\r\n        'search.date_from'(n) {\r\n            if (n) {\r\n                this.search.month = ''\r\n                this.search.quarter = ''\r\n            }\r\n        },\r\n        'search.date_to'(n) {\r\n            if (n) {\r\n                this.search.month = ''\r\n                this.search.quarter = ''\r\n            }\r\n        },\r\n        'search.month'(n) {\r\n            if (n) {\r\n                this.search.date_from = ''\r\n                this.search.date_to = ''\r\n                this.search.quarter = ''\r\n            }\r\n        },\r\n\r\n        search: {\r\n            handler: function (n) {\r\n                axios.post('api/dashboard', this.search)\r\n                    .then(res => {\r\n                        this.records = res.data.data\r\n                        this.barEquipmentOptions.xaxis.categories = res.data.data.EquipmentChart.options.xaxis.categories\r\n                        this.barProjectOptions.xaxis.categories = res.data.data.ProjectChart.options.xaxis.categories\r\n                    })\r\n                    .catch(err => {\r\n                        console.error(err);\r\n                    })\r\n            },\r\n            deep: true\r\n        },\r\n        async \"search.sub_category_id\"(n, o) {\r\n            if (n) {\r\n                this.get_machine();\r\n            }\r\n        },\r\n        async \"search.site_id\"(n, o) {\r\n            if (n) {\r\n                this.get_machine();\r\n            }\r\n        },\r\n\r\n        \"search.category_id\": {\r\n            handler: function (n, o) {\r\n                if (n) {\r\n                    axios.get(\"api/category/\" + n).then((res) => {\r\n                        this.sub_categories = res.data.data;\r\n                    });\r\n                    this.get_machine();\r\n                }\r\n            },\r\n            deep: true,\r\n            initial: true,\r\n        },\r\n    },\r\n    created() {\r\n        console.log(this.barEquipmentOptions.xaxis);\r\n        var yearsLength = 30;\r\n        var currentYear = new Date().getFullYear();\r\n        for (var i = 2022; i <= currentYear; i++) {\r\n            var next = i + 1;\r\n            var year = i + '-' + next.toString();\r\n            this.financial_years.push(year)\r\n        }\r\n    },\r\n    beforeCreate() {\r\n        axios.post('api/dashboard', this.search)\r\n            .then(res => {\r\n                this.records = res.data.data\r\n\r\n                this.barEquipmentOptions.xaxis.categories = res.data.data.EquipmentChart.options.xaxis.categories\r\n                this.barProjectOptions.xaxis.categories = res.data.data.ProjectChart.options.xaxis.categories\r\n\r\n                this.barCountOptions.xaxis.categories = res.data.data.barCountChart.options.xaxis.categories\r\n                this.$forceUpdate();\r\n            })\r\n            .catch(err => {\r\n                console.error(err);\r\n            })\r\n\r\n        axios.get(\"api/get_pre_machine\").then((res) => {\r\n            this.categories = res.data.data.Category;\r\n            this.sites = res.data.data.sites;\r\n        });\r\n        axios\r\n            .get(\"/api/initial_ticket\")\r\n            .then((response) => {\r\n                this.users = response.data.data.vendors;\r\n                this.machines = response.data.data.machines;\r\n                this.search_machines = response.data.data.machines;\r\n                this.search_sites = response.data.data.sites;\r\n                this.created_users = response.data.data.created_users;\r\n            })\r\n            .catch(() => console.warn(\"Oh. Something went wrong\"));\r\n\r\n\r\n    },\r\n    mounted() {\r\n        if (this.$gate.isAdmin()) {\r\n            // this.$router.push('/users').catch(() => { });\r\n        } else {\r\n            this.$router.push(\"/tickets\").catch(() => { });\r\n        }\r\n    },\r\n    methods: {\r\n        asign_graphs(){\r\nthis.records=this.records\r\n            this.chartOptions= {\r\n                chart: {\r\n                    id: \"vuechart-example\",\r\n                },\r\n                xaxis: {\r\n                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],\r\n                },\r\n            } \r\n            //*********** */ \r\n            this.donutChartOptions= {\r\n             colors: ['#0068b9', '#0068b9ad'],\r\n                \r\n                chart: {\r\n                    id: \"dnt1\"\r\n                },\r\n                labels: [\"Major\", \"Minor\"],\r\n                title: {\r\n                    text: \"Complaint Nature\",\r\n                    align: 'center',\r\n                },\r\n\r\n                responsive: [{\r\n                    breakpoint: 480,\r\n                    options: {\r\n                        chart: {\r\n                            width: 200\r\n                        },\r\n\r\n                        legend: {\r\n                            position: 'bottom',\r\n                            horizontalAlign: 'left',\r\n                        }\r\n                    }\r\n                }],\r\n                legend: {\r\n                    position: 'bottom',\r\n                    horizontalAlign: 'center',\r\n                }\r\n            }\r\n\r\n            this.barCountOptions= {\r\n                chart: {\r\n                    type: 'bar',\r\n                    height: 350,\r\n                    stacked: true,\r\n                },\r\n                plotOptions: {\r\n                    bar: {\r\n                        horizontal: true,\r\n                        dataLabels: {\r\n                            total: {\r\n                                enabled: true,\r\n                                offsetX: 0,\r\n                                style: {\r\n                                    fontSize: '13px',\r\n                                    fontWeight: 900\r\n                                }\r\n                            }\r\n                        }\r\n                    },\r\n                },\r\n                stroke: {\r\n                    width: 1,\r\n                    colors: ['#fff']\r\n                },\r\n                title: {\r\n                    text: 'Call Status'\r\n                },\r\n                xaxis: {\r\n                    categories: [\"Quarter 1\", \"Quarter 2\", \"Quarter 3\", \"Quarter 4\"],\r\n\r\n                },\r\n                yaxis: {\r\n                    title: {\r\n                        text: undefined\r\n                    },\r\n                },\r\n\r\n                fill: {\r\n                    opacity: 1\r\n                },\r\n                legend: {\r\n                    position: 'top',\r\n                    horizontalAlign: 'left',\r\n                    offsetX: 40\r\n                }\r\n            }\r\n\r\n            this.barEquipmentOptions= {\r\n\r\n                chart: {\r\n                    height: 350,\r\n                    type: 'bar',\r\n                },\r\n                plotOptions: {\r\n                    bar: {\r\n                        borderRadius: 2,\r\n                        columnWidth: '50%',\r\n                    }\r\n                },\r\n                dataLabels: {\r\n                    enabled: false\r\n                },\r\n                stroke: {\r\n                    width: 2\r\n                },\r\n\r\n                grid: {\r\n                    row: {\r\n                        colors: ['#fff', '#f2f2f2']\r\n                    }\r\n                },\r\n                xaxis: {\r\n                    labels: {\r\n                        rotate: -45\r\n                    },\r\n                    categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',\r\n                        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'\r\n                    ],\r\n                    tickPlacement: 'on'\r\n                },\r\n                yaxis: {\r\n                    title: {\r\n                        text: 'Count of Complaint',\r\n                    },\r\n                },\r\n                fill: {\r\n                    type: 'gradient',\r\n                    gradient: {\r\n                        shade: 'light',\r\n                        type: \"horizontal\",\r\n                        shadeIntensity: 0.25,\r\n                        gradientToColors: undefined,\r\n                        inverseColors: true,\r\n                        opacityFrom: 0.85,\r\n                        opacityTo: 0.85,\r\n                        stops: [50, 0, 100]\r\n                    },\r\n                }\r\n            }\r\n            //******* */\r\n\r\n            this.barProjectOptions={\r\n\r\n                chart: {\r\n                    height: 350,\r\n                    type: 'bar',\r\n                },\r\n                plotOptions: {\r\n                    bar: {\r\n                        borderRadius: 2,\r\n                        columnWidth: '50%',\r\n                    }\r\n                },\r\n                dataLabels: {\r\n                    enabled: false\r\n                },\r\n                stroke: {\r\n                    width: 2\r\n                },\r\n\r\n                grid: {\r\n                    row: {\r\n                        colors: ['#fff', '#f2f2f2']\r\n                    }\r\n                },\r\n                xaxis: {\r\n                    labels: {\r\n                        rotate: -45\r\n                    },\r\n                    categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',\r\n                        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'\r\n                    ],\r\n                    tickPlacement: 'on'\r\n                },\r\n                yaxis: {\r\n                    title: {\r\n                        text: 'Count of Complaint',\r\n                    },\r\n                },\r\n                fill: {\r\n                    type: 'gradient',\r\n                    gradient: {\r\n                        shade: 'light',\r\n                        type: \"horizontal\",\r\n                        shadeIntensity: 0.25,\r\n                        gradientToColors: undefined,\r\n                        inverseColors: true,\r\n                        opacityFrom: 0.85,\r\n                        opacityTo: 0.85,\r\n                        stops: [50, 0, 100]\r\n                    },\r\n                }\r\n            }\r\n\r\n        },\r\n        getLabel(val) {\r\n            if (typeof val === \"object\") {\r\n                return val.far_no + \" - \" + val.name;\r\n            } else {\r\n                return val;\r\n            }\r\n        },\r\n        async get_machine() {\r\n            axios\r\n                .get(\"/api/reports/machines\", {\r\n                    params: {\r\n                        site_id: this.search.site_id,\r\n                        category_id: this.search.category_id,\r\n                        sub_category_id: this.search.sub_category_id,\r\n                    },\r\n                })\r\n                .then((response) => {\r\n                    this.search_machines = response.data.data;\r\n                })\r\n                .catch(() => console.warn(\"Oh. Something went wrong\"));\r\n        },\r\n    },\r\n};\r\n</script>\r\n<style>\r\n#apexchartsdnt1 {\r\n    margin-left: -60px !important;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d9d87682\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d9d87682","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
    _vm.records
      ? _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "form-row" }, [
                _c(
                  "div",
                  { staticClass: "col" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("FY")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        options: _vm.financial_years,
                        placeholder: "Select FY...",
                        name: "financial_year"
                      },
                      model: {
                        value: _vm.search.financial_year,
                        callback: function($$v) {
                          _vm.$set(_vm.search, "financial_year", $$v)
                        },
                        expression: "search.financial_year"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                !_vm.search.date_from &&
                !_vm.search.date_to &&
                !_vm.search.month &&
                _vm.search.financial_year
                  ? _c("div", { staticClass: "col" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Quarter")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.search.quarter,
                              expression: "search.quarter"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.search,
                                "quarter",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("--")
                          ]),
                          _vm._v(" "),
                          _c("Option", { attrs: { value: "4-6" } }, [
                            _vm._v("1")
                          ]),
                          _vm._v(" "),
                          _c("Option", { attrs: { value: "7-9" } }, [
                            _vm._v("2")
                          ]),
                          _vm._v(" "),
                          _c("Option", { attrs: { value: "10-12" } }, [
                            _vm._v("3")
                          ]),
                          _vm._v(" "),
                          _c("Option", { attrs: { value: "1-3" } }, [
                            _vm._v("4")
                          ])
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.search.date_from &&
                !_vm.search.date_to &&
                !_vm.search.quarter
                  ? _c("div", { staticClass: "col" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Month")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.search.month,
                              expression: "search.month"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.search,
                                "month",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("--")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.monthNames, function(it, x) {
                            return _c(
                              "Option",
                              { key: "m" + x, attrs: { value: x + 1 } },
                              [_vm._v(_vm._s(it))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.search.month && !_vm.search.quarter
                  ? _c(
                      "div",
                      { staticClass: "col" },
                      [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("From Date")
                        ]),
                        _vm._v(" "),
                        _c("datetime", {
                          attrs: {
                            "value-zone": "Asia/Kolkata",
                            "input-class": "form-control",
                            placeholder: "Created from date"
                          },
                          model: {
                            value: _vm.search.date_from,
                            callback: function($$v) {
                              _vm.$set(_vm.search, "date_from", $$v)
                            },
                            expression: "search.date_from"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.search.month && !_vm.search.quarter
                  ? _c(
                      "div",
                      { staticClass: "col" },
                      [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("To Date")
                        ]),
                        _vm._v(" "),
                        _c("datetime", {
                          attrs: {
                            "value-zone": "Asia/Kolkata",
                            "input-class": "form-control",
                            placeholder: "Created to date"
                          },
                          model: {
                            value: _vm.search.date_to,
                            callback: function($$v) {
                              _vm.$set(_vm.search, "date_to", $$v)
                            },
                            expression: "search.date_to"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Project Name")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        label: "site_name",
                        reduce: function(option) {
                          return option.id
                        },
                        options: _vm.search_sites,
                        placeholder: "Choose Project...",
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
                  { staticClass: "col" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Equipment Category")
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-select",
                      {
                        attrs: {
                          label: "name",
                          reduce: function(option) {
                            return option.id
                          },
                          options: _vm.categories,
                          placeholder: "Choose Category ..."
                        },
                        model: {
                          value: _vm.search.category_id,
                          callback: function($$v) {
                            _vm.$set(_vm.search, "category_id", $$v)
                          },
                          expression: "search.category_id"
                        }
                      },
                      [_vm._v("\\\n                        ")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Description")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        label: "name",
                        reduce: function(option) {
                          return option.id
                        },
                        options: _vm.sub_categories,
                        placeholder: "Choose description ..."
                      },
                      model: {
                        value: _vm.search.sub_category_id,
                        callback: function($$v) {
                          _vm.$set(_vm.search, "sub_category_id", $$v)
                        },
                        expression: "search.sub_category_id"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Equipment Name")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        label: "name",
                        "get-option-label": _vm.getLabel,
                        reduce: function(option) {
                          return option.id
                        },
                        options: _vm.search_machines,
                        placeholder: "Choose Equipment ...",
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
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row row-eq-height mt-2" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "card-body p-1" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "row text-center" }, [
                      _c(
                        "div",
                        { staticClass: "col-6 p-1" },
                        [
                          _c("apexchart", {
                            attrs: {
                              width: "440",
                              type: "donut",
                              options: _vm.donutChartOptions,
                              series: _vm.records.complain_nature_chart.series
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6 p-1" }, [
                        _c("div", { staticClass: "col-12 p-1" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-6 pr-1" }, [
                              _c("div", { staticClass: "info-box bg-yellow" }, [
                                _c("div", { staticClass: "info-box-content" }, [
                                  _c(
                                    "span",
                                    { staticClass: "info-box-number" },
                                    [_vm._v(_vm._s(_vm.records.total_tickets))]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "info-box-text" }, [
                                    _vm._v("Total Complaint ")
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-6 pl-1" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "info-box",
                                  staticStyle: {
                                    "background-color": "#cf34dcba !important"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "info-box-content" },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "info-box-number" },
                                        [_vm._v(_vm._s(_vm.records.avg_tat))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "info-box-text" },
                                        [_vm._v("Average TAT (Days)")]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-6 pr-1" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "info-box",
                                  staticStyle: {
                                    "background-color": "#1FDEC3 !important"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "info-box-content" },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "info-box-number" },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.records.closed_tickets)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "info-box-text" },
                                        [_vm._v("Closed Call")]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-6 pl-1" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "info-box",
                                  staticStyle: {
                                    "background-color": "#ea70f5ba !important"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "info-box-content" },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "info-box-number" },
                                        [_vm._v(_vm._s(_vm.records.within_tat))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "info-box-text" },
                                        [_vm._v("Within TAT")]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-6 pr-1" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "info-box",
                                  staticStyle: {
                                    "background-color": "#EA5F5F !important"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "info-box-content" },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "info-box-number" },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.records.open_tickets)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "info-box-text" },
                                        [_vm._v("Open Call")]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-6 pl-1" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "info-box",
                                  staticStyle: {
                                    "background-color": "#890b95ba !important"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "info-box-content" },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "info-box-number" },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.records.exceeding_tat)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "info-box-text" },
                                        [_vm._v("Exceeding TAT")]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body p-1" },
                  [
                    _c("apexchart", {
                      staticStyle: { "max-height": "328px !important" },
                      attrs: {
                        type: "bar",
                        height: "328",
                        options: _vm.records.barCountChart.options,
                        series: _vm.records.barCountChart.series
                      }
                    })
                  ],
                  1
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body p-1" },
                  [
                    _c("apexchart", {
                      attrs: {
                        type: "bar",
                        height: "350",
                        options: _vm.records.EquipmentChart.options,
                        series: _vm.records.EquipmentChart.series
                      }
                    })
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(4),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body p-1" },
                  [
                    _c("apexchart", {
                      attrs: {
                        type: "bar",
                        height: "350",
                        options: _vm.records.ProjectChart.options,
                        series: _vm.records.ProjectChart.series
                      }
                    })
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Complain")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-tool",
            attrs: { type: "button", "data-card-widget": "collapse" }
          },
          [_c("i", { staticClass: "fas fa-minus" })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "row text-center" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [
        _vm._v("Count of Complaint Nature by FY, Quarter and Call Status")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-tool",
            attrs: { type: "button", "data-card-widget": "collapse" }
          },
          [_c("i", { staticClass: "fas fa-minus" })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [
        _vm._v("Count of Complaint by Equipment Type")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-tool",
            attrs: { type: "button", "data-card-widget": "collapse" }
          },
          [_c("i", { staticClass: "fas fa-minus" })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [
        _vm._v("Count of Complaint by Project")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-tool",
            attrs: { type: "button", "data-card-widget": "collapse" }
          },
          [_c("i", { staticClass: "fas fa-minus" })]
        )
      ])
    ])
  }
]
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DashboardCallLockStatus.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("053e45b6", content, false, {});
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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d9d87682_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DashboardCallLockStatus_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-d9d87682","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./DashboardCallLockStatus.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d9d87682\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./DashboardCallLockStatus.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Dashboard/DashboardCallLockStatus.vue")
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DashboardCallLockStatus_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d9d87682_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DashboardCallLockStatus_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d9d87682_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DashboardCallLockStatus_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlPzczYTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZT83NjFlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWU/MzY5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJyZWNvcmRzIiwic2VhcmNoIiwiZmluYW5jaWFsX3llYXIiLCJxdWFydGVyIiwibW9udGgiLCJkYXRlX2Zyb20iLCJkYXRlX3RvIiwic2l0ZV9pZCIsImNhdGVnb3J5X2lkIiwic3ViX2NhdGVnb3J5X2lkIiwibWFjaGluZV9pZCIsIm1vbnRoTmFtZXMiLCJjaGFydE9wdGlvbnMiLCJjaGFydCIsImlkIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwic2VyaWVzIiwibmFtZSIsImRvbnV0U2VyaWVzIiwiZG9udXRDaGFydE9wdGlvbnMiLCJjb2xvcnMiLCJsYWJlbHMiLCJ0aXRsZSIsInRleHQiLCJhbGlnbiIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwib3B0aW9ucyIsIndpZHRoIiwibGVnZW5kIiwicG9zaXRpb24iLCJob3Jpem9udGFsQWxpZ24iLCJiYXJDb3VudE9wdGlvbnMiLCJ0eXBlIiwiaGVpZ2h0Iiwic3RhY2tlZCIsInBsb3RPcHRpb25zIiwiYmFyIiwiaG9yaXpvbnRhbCIsImRhdGFMYWJlbHMiLCJ0b3RhbCIsImVuYWJsZWQiLCJvZmZzZXRYIiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJzdHJva2UiLCJ5YXhpcyIsImZpbGwiLCJvcGFjaXR5IiwiYmFyRXF1aXBtZW50T3B0aW9ucyIsImJvcmRlclJhZGl1cyIsImNvbHVtbldpZHRoIiwiZ3JpZCIsInJvdyIsInJvdGF0ZSIsInRpY2tQbGFjZW1lbnQiLCJncmFkaWVudCIsInNoYWRlIiwic2hhZGVJbnRlbnNpdHkiLCJncmFkaWVudFRvQ29sb3JzIiwiaW52ZXJzZUNvbG9ycyIsIm9wYWNpdHlGcm9tIiwib3BhY2l0eVRvIiwic3RvcHMiLCJiYXJQcm9qZWN0T3B0aW9ucyIsImZpbmFuY2lhbF95ZWFycyIsInNlYXJjaF9tYWNoaW5lcyIsInNlYXJjaF9zaXRlcyIsInNlYXJjaF90aWNrZXRzIiwic3ViX2NhdGVnb3JpZXMiLCJzaXRlcyIsIm1hY2hpbmVzIiwidXBkYXRlZCIsIndhdGNoIiwiaGFuZGxlciIsImF4aW9zIiwidGhlbiIsImNhdGNoIiwiY29uc29sZSIsImRlZXAiLCJpbml0aWFsIiwiY3JlYXRlZCIsImJlZm9yZUNyZWF0ZSIsImdldCIsIm1vdW50ZWQiLCJtZXRob2RzIiwiYXNpZ25fZ3JhcGhzIiwiZ2V0TGFiZWwiLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJPZTtFQUVmQTtJQUNBO01BQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FD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OztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvNS5idW5kbGUuMmFhMmY1NTFiNGYwNzYxZWE0NjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCIgdi1pZj1cInJlY29yZHNcIj5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5GWTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgOm9wdGlvbnM9XCJmaW5hbmNpYWxfeWVhcnNcIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCBGWS4uLlwiIHYtbW9kZWw9XCJzZWFyY2guZmluYW5jaWFsX3llYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaW5hbmNpYWxfeWVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIiFzZWFyY2guZGF0ZV9mcm9tICYmICFzZWFyY2guZGF0ZV90byAmJiAhc2VhcmNoLm1vbnRoICYmIHNlYXJjaC5maW5hbmNpYWxfeWVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPlF1YXJ0ZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwic2VhcmNoLnF1YXJ0ZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCI0LTZcIj4xPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjctOVwiPjI8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMTAtMTJcIj4zPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjEtM1wiPjQ8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIHYtaWY9XCIhc2VhcmNoLmRhdGVfZnJvbSAmJiAhc2VhcmNoLmRhdGVfdG8gJiYgIXNlYXJjaC5xdWFydGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+TW9udGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwic2VhcmNoLm1vbnRoXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIDp2YWx1ZT1cIih4ICsgMSlcIiB2LWZvcj1cIihpdCwgeCkgaW4gbW9udGhOYW1lc1wiIDprZXk9XCInbScgKyB4XCI+e3sgaXQgfX08L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiB2LWlmPVwiIXNlYXJjaC5tb250aCAmJiAhc2VhcmNoLnF1YXJ0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5Gcm9tIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XCJBc2lhL0tvbGthdGFcIiB2LW1vZGVsPVwic2VhcmNoLmRhdGVfZnJvbVwiIGlucHV0LWNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNyZWF0ZWQgZnJvbSBkYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiB2LWlmPVwiIXNlYXJjaC5tb250aCAmJiAhc2VhcmNoLnF1YXJ0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5UbyBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVwiQXNpYS9Lb2xrYXRhXCIgdi1tb2RlbD1cInNlYXJjaC5kYXRlX3RvXCIgaW5wdXQtY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ3JlYXRlZCB0byBkYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInNpdGVfbmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cInNlYXJjaF9zaXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgUHJvamVjdC4uLlwiIHYtbW9kZWw9XCJzZWFyY2guc2l0ZV9pZFwiIG5hbWU9XCJzaXRlX2lkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPkVxdWlwbWVudCBDYXRlZ29yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIDpvcHRpb25zPVwiY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgQ2F0ZWdvcnkgLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5jYXRlZ29yeV9pZFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwibmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cInN1Yl9jYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBkZXNjcmlwdGlvbiAuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnN1Yl9jYXRlZ29yeV9pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPkVxdWlwbWVudCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6Z2V0LW9wdGlvbi1sYWJlbD1cImdldExhYmVsXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzZWFyY2hfbWFjaGluZXNcIiBwbGFjZWhvbGRlcj1cIkNob29zZSBFcXVpcG1lbnQgLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5tYWNoaW5lX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFjaGluZV9pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWVxLWhlaWdodCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIExlZnQgY29sIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBNQVAgJiBCT1ggUEFORSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj5Db21wbGFpbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10b29sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi10b29sXCIgZGF0YS1jYXJkLXdpZGdldD1cImNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLW1pbnVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1oZWFkZXIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB0ZXh0LWNlbnRlclwiPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXBleGNoYXJ0IHdpZHRoPVwiNDQwXCIgdHlwZT1cImRvbnV0XCIgOm9wdGlvbnM9XCJkb251dENoYXJ0T3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcmllcz1cInJlY29yZHMuY29tcGxhaW5fbmF0dXJlX2NoYXJ0LnNlcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcGV4Y2hhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcC0xXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBwLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3ggYmcteWVsbG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC1udW1iZXJcIj57eyByZWNvcmRzLnRvdGFsX3RpY2tldHMgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtdGV4dFwiPlRvdGFsIENvbXBsYWludCA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwbC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3hcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNjZjM0ZGNiYSAhaW1wb3J0YW50O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtbnVtYmVyXCI+e3sgcmVjb3Jkcy5hdmdfdGF0IH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LXRleHRcIj5BdmVyYWdlIFRBVCAoRGF5cyk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3hcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzFGREVDMyAhaW1wb3J0YW50O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtbnVtYmVyXCI+e3sgcmVjb3Jkcy5jbG9zZWRfdGlja2V0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC10ZXh0XCI+Q2xvc2VkIENhbGw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwbC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3hcIiAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZWE3MGY1YmEgIWltcG9ydGFudDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LW51bWJlclwiPnt7IHJlY29yZHMud2l0aGluX3RhdCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC10ZXh0XCI+V2l0aGluIFRBVDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveCBcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNFQTVGNUYgIWltcG9ydGFudDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LW51bWJlclwiPnt7IHJlY29yZHMub3Blbl90aWNrZXRzIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LXRleHRcIj5PcGVuIENhbGw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwbC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3hcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM4OTBiOTViYSAhaW1wb3J0YW50O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtbnVtYmVyXCI+e3sgcmVjb3Jkcy5leGNlZWRpbmdfdGF0IH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LXRleHRcIj5FeGNlZWRpbmcgVEFUPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQtYm9keSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZCAtLT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPCEtLSAvLmNvbCAtLT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj5Db3VudCBvZiBDb21wbGFpbnQgTmF0dXJlIGJ5IEZZLCBRdWFydGVyIGFuZCBDYWxsIFN0YXR1czwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10b29sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi10b29sXCIgZGF0YS1jYXJkLXdpZGdldD1cImNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLW1pbnVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFwZXhjaGFydCB0eXBlPVwiYmFyXCIgaGVpZ2h0PVwiMzI4XCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiAzMjhweCAhaW1wb3J0YW50O1wiIDpvcHRpb25zPVwicmVjb3Jkcy5iYXJDb3VudENoYXJ0Lm9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzZXJpZXM9XCJyZWNvcmRzLmJhckNvdW50Q2hhcnQuc2VyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FwZXhjaGFydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj5Db3VudCBvZiBDb21wbGFpbnQgYnkgRXF1aXBtZW50IFR5cGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdG9vbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tdG9vbFwiIGRhdGEtY2FyZC13aWRnZXQ9XCJjb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1taW51c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcGV4Y2hhcnQgdHlwZT1cImJhclwiIGhlaWdodD1cIjM1MFwiIDpvcHRpb25zPVwicmVjb3Jkcy5FcXVpcG1lbnRDaGFydC5vcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2VyaWVzPVwicmVjb3Jkcy5FcXVpcG1lbnRDaGFydC5zZXJpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBleGNoYXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj5Db3VudCBvZiBDb21wbGFpbnQgYnkgUHJvamVjdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10b29sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi10b29sXCIgZGF0YS1jYXJkLXdpZGdldD1cImNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLW1pbnVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFwZXhjaGFydCB0eXBlPVwiYmFyXCIgaGVpZ2h0PVwiMzUwXCIgOm9wdGlvbnM9XCJyZWNvcmRzLlByb2plY3RDaGFydC5vcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2VyaWVzPVwicmVjb3Jkcy5Qcm9qZWN0Q2hhcnQuc2VyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FwZXhjaGFydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIC8uY29sIC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLSAvLnJvdyAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tLy4gY29udGFpbmVyLWZsdWlkIC0tPlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVjb3JkczogJycsXHJcbiAgICAgICAgICAgIHNlYXJjaDoge1xyXG4gICAgICAgICAgICAgICAgZmluYW5jaWFsX3llYXI6ICcnLFxyXG4gICAgICAgICAgICAgICAgcXVhcnRlcjogJycsXHJcbiAgICAgICAgICAgICAgICBtb250aDonJyxcclxuICAgICAgICAgICAgICAgIGRhdGVfZnJvbTogJycsXHJcbiAgICAgICAgICAgICAgICBkYXRlX3RvOiAnJyxcclxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiAnJyxcclxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsXHJcbiAgICAgICAgICAgICAgICBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXSxcclxuXHJcbiAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ2dWVjaGFydC1leGFtcGxlXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbMTk5MSwgMTk5MiwgMTk5MywgMTk5NCwgMTk5NSwgMTk5NiwgMTk5NywgMTk5OF0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNlcmllcy0xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzMwLCA0MCwgMzUsIDUwLCA0OSwgNjAsIDcwLCA5MV0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG5cclxuICAgICAgICAgICAgLy8qKioqKioqKioqKiAqL1xyXG5cclxuICAgICAgICAgICAgZG9udXRTZXJpZXM6IFs0NCwgNTVdLFxyXG4gICAgICAgICAgICBkb251dENoYXJ0T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgY29sb3JzOiBbJyMwMDY4YjknLCAnIzAwNjhiOWFkJ10sXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZG50MVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXCJNYWpvclwiLCBcIk1pbm9yXCJdLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkNvbXBsYWludCBOYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgYmFyQ291bnRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZiddXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2FsbCBTdGF0dXMnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXCJRdWFydGVyIDFcIiwgXCJRdWFydGVyIDJcIiwgXCJRdWFydGVyIDNcIiwgXCJRdWFydGVyIDRcIl0sXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogNDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGJhckVxdWlwbWVudE9wdGlvbnM6IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZmJywgJyNmMmYyZjInXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGU6IC00NVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydBcHBsZXMnLCAnT3JhbmdlcycsICdTdHJhd2JlcnJpZXMnLCAnUGluZWFwcGxlcycsICdNYW5nb2VzJywgJ0JhbmFuYXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQmxhY2tiZXJyaWVzJywgJ1BlYXJzJywgJ1dhdGVybWVsb25zJywgJ0NoZXJyaWVzJywgJ1BvbWVncmFuYXRlcycsICdUYW5nZXJpbmVzJywgJ1BhcGF5YXMnXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB0aWNrUGxhY2VtZW50OiAnb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ291bnQgb2YgQ29tcGxhaW50JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ3JhZGllbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlOiAnbGlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImhvcml6b250YWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGVJbnRlbnNpdHk6IDAuMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VG9Db2xvcnM6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJzZUNvbG9yczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eUZyb206IDAuODUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlUbzogMC44NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHM6IFs1MCwgMCwgMTAwXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vKioqKioqKiAqL1xyXG5cclxuICAgICAgICAgICAgYmFyUHJvamVjdE9wdGlvbnM6IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZmJywgJyNmMmYyZjInXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGU6IC00NVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydBcHBsZXMnLCAnT3JhbmdlcycsICdTdHJhd2JlcnJpZXMnLCAnUGluZWFwcGxlcycsICdNYW5nb2VzJywgJ0JhbmFuYXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQmxhY2tiZXJyaWVzJywgJ1BlYXJzJywgJ1dhdGVybWVsb25zJywgJ0NoZXJyaWVzJywgJ1BvbWVncmFuYXRlcycsICdUYW5nZXJpbmVzJywgJ1BhcGF5YXMnXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB0aWNrUGxhY2VtZW50OiAnb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ291bnQgb2YgQ29tcGxhaW50JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ3JhZGllbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlOiAnbGlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImhvcml6b250YWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGVJbnRlbnNpdHk6IDAuMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VG9Db2xvcnM6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJzZUNvbG9yczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eUZyb206IDAuODUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlUbzogMC44NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHM6IFs1MCwgMCwgMTAwXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBmaW5hbmNpYWxfeWVhcnM6IFtdLFxyXG4gICAgICAgICAgICBzZWFyY2hfbWFjaGluZXM6IFtdLFxyXG4gICAgICAgICAgICBzZWFyY2hfc2l0ZXM6IFtdLFxyXG4gICAgICAgICAgICBzZWFyY2hfdGlja2V0czogW10sXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcclxuICAgICAgICAgICAgbWFjaGluZXM6IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAvLyB0aGlzLmFzaWduX2dyYXBocygpOyBcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgJ3NlYXJjaC5xdWFydGVyJyhuKSB7XHJcbiAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX2Zyb20gPSAnJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV90byA9ICcnXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdzZWFyY2guZGF0ZV9mcm9tJyhuKSB7XHJcbiAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5xdWFydGVyID0gJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3NlYXJjaC5kYXRlX3RvJyhuKSB7XHJcbiAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5xdWFydGVyID0gJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3NlYXJjaC5tb250aCcobikge1xyXG4gICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV9mcm9tID0gJydcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfdG8gPSAnJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gucXVhcnRlciA9ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZWFyY2g6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2FwaS9kYXNoYm9hcmQnLCB0aGlzLnNlYXJjaClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMgPSByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyRXF1aXBtZW50T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5FcXVpcG1lbnRDaGFydC5vcHRpb25zLnhheGlzLmNhdGVnb3JpZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJQcm9qZWN0T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5Qcm9qZWN0Q2hhcnQub3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlZXA6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIFwic2VhcmNoLnN1Yl9jYXRlZ29yeV9pZFwiKG4sIG8pIHtcclxuICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgXCJzZWFyY2guc2l0ZV9pZFwiKG4sIG8pIHtcclxuICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFwic2VhcmNoLmNhdGVnb3J5X2lkXCI6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2NhdGVnb3J5L1wiICsgbikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5iYXJFcXVpcG1lbnRPcHRpb25zLnhheGlzKTtcclxuICAgICAgICB2YXIgeWVhcnNMZW5ndGggPSAzMDtcclxuICAgICAgICB2YXIgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDIwMjI7IGkgPD0gY3VycmVudFllYXI7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbmV4dCA9IGkgKyAxO1xyXG4gICAgICAgICAgICB2YXIgeWVhciA9IGkgKyAnLScgKyBuZXh0LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmluYW5jaWFsX3llYXJzLnB1c2goeWVhcilcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJ2FwaS9kYXNoYm9hcmQnLCB0aGlzLnNlYXJjaClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlcy5kYXRhLmRhdGFcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhckVxdWlwbWVudE9wdGlvbnMueGF4aXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuRXF1aXBtZW50Q2hhcnQub3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhclByb2plY3RPcHRpb25zLnhheGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLlByb2plY3RDaGFydC5vcHRpb25zLnhheGlzLmNhdGVnb3JpZXNcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhckNvdW50T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5iYXJDb3VudENoYXJ0Lm9wdGlvbnMueGF4aXMuY2F0ZWdvcmllc1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIGF4aW9zLmdldChcImFwaS9nZXRfcHJlX21hY2hpbmVcIikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuQ2F0ZWdvcnk7XHJcbiAgICAgICAgICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoXCIvYXBpL2luaXRpYWxfdGlja2V0XCIpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS52ZW5kb3JzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2l0ZXMgPSByZXNwb25zZS5kYXRhLmRhdGEuc2l0ZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRfdXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEuY3JlYXRlZF91c2VycztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybihcIk9oLiBTb21ldGhpbmcgd2VudCB3cm9uZ1wiKSk7XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLiRnYXRlLmlzQWRtaW4oKSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLiRyb3V0ZXIucHVzaCgnL3VzZXJzJykuY2F0Y2goKCkgPT4geyB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi90aWNrZXRzXCIpLmNhdGNoKCgpID0+IHsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBhc2lnbl9ncmFwaHMoKXtcclxudGhpcy5yZWNvcmRzPXRoaXMucmVjb3Jkc1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJ0T3B0aW9ucz0ge1xyXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ2dWVjaGFydC1leGFtcGxlXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbMTk5MSwgMTk5MiwgMTk5MywgMTk5NCwgMTk5NSwgMTk5NiwgMTk5NywgMTk5OF0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAvLyoqKioqKioqKioqICovIFxyXG4gICAgICAgICAgICB0aGlzLmRvbnV0Q2hhcnRPcHRpb25zPSB7XHJcbiAgICAgICAgICAgICBjb2xvcnM6IFsnIzAwNjhiOScsICcjMDA2OGI5YWQnXSxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJkbnQxXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFtcIk1ham9yXCIsIFwiTWlub3JcIl0sXHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ29tcGxhaW50IE5hdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmFyQ291bnRPcHRpb25zPSB7XHJcbiAgICAgICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZiddXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2FsbCBTdGF0dXMnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXCJRdWFydGVyIDFcIiwgXCJRdWFydGVyIDJcIiwgXCJRdWFydGVyIDNcIiwgXCJRdWFydGVyIDRcIl0sXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogNDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5iYXJFcXVpcG1lbnRPcHRpb25zPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZicsICcjZjJmMmYyJ11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAtNDVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnQXBwbGVzJywgJ09yYW5nZXMnLCAnU3RyYXdiZXJyaWVzJywgJ1BpbmVhcHBsZXMnLCAnTWFuZ29lcycsICdCYW5hbmFzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0JsYWNrYmVycmllcycsICdQZWFycycsICdXYXRlcm1lbG9ucycsICdDaGVycmllcycsICdQb21lZ3JhbmF0ZXMnLCAnVGFuZ2VyaW5lcycsICdQYXBheWFzJ1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGlja1BsYWNlbWVudDogJ29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NvdW50IG9mIENvbXBsYWludCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dyYWRpZW50JyxcclxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkZTogJ2xpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAwLjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFRvQ29sb3JzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVyc2VDb2xvcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlGcm9tOiAwLjg1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5VG86IDAuODUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BzOiBbNTAsIDAsIDEwMF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vKioqKioqKiAqL1xyXG5cclxuICAgICAgICAgICAgdGhpcy5iYXJQcm9qZWN0T3B0aW9ucz17XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZicsICcjZjJmMmYyJ11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAtNDVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnQXBwbGVzJywgJ09yYW5nZXMnLCAnU3RyYXdiZXJyaWVzJywgJ1BpbmVhcHBsZXMnLCAnTWFuZ29lcycsICdCYW5hbmFzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0JsYWNrYmVycmllcycsICdQZWFycycsICdXYXRlcm1lbG9ucycsICdDaGVycmllcycsICdQb21lZ3JhbmF0ZXMnLCAnVGFuZ2VyaW5lcycsICdQYXBheWFzJ1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGlja1BsYWNlbWVudDogJ29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NvdW50IG9mIENvbXBsYWludCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dyYWRpZW50JyxcclxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkZTogJ2xpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAwLjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFRvQ29sb3JzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVyc2VDb2xvcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlGcm9tOiAwLjg1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5VG86IDAuODUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BzOiBbNTAsIDAsIDEwMF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0TGFiZWwodmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmZhcl9ubyArIFwiIC0gXCIgKyB2YWwubmFtZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGdldF9tYWNoaW5lKCkge1xyXG4gICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgICAgLmdldChcIi9hcGkvcmVwb3J0cy9tYWNoaW5lc1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVfaWQ6IHRoaXMuc2VhcmNoLnNpdGVfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiB0aGlzLnNlYXJjaC5jYXRlZ29yeV9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiB0aGlzLnNlYXJjaC5zdWJfY2F0ZWdvcnlfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFwiT2guIFNvbWV0aGluZyB3ZW50IHdyb25nXCIpKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuI2FwZXhjaGFydHNkbnQxIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNjBweCAhaW1wb3J0YW50O1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jYXBleGNoYXJ0c2RudDEge1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTYwcHggIWltcG9ydGFudDtcXG59XFxyXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L3dhbXA2NC93d3cvcm1tL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE0eUJBO0lBQ0EsOEJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIiB2LWlmPVxcXCJyZWNvcmRzXFxcIj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1yb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIlxcXCI+Rlk8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgOm9wdGlvbnM9XFxcImZpbmFuY2lhbF95ZWFyc1xcXCIgcGxhY2Vob2xkZXI9XFxcIlNlbGVjdCBGWS4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLmZpbmFuY2lhbF95ZWFyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiZmluYW5jaWFsX3llYXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiIXNlYXJjaC5kYXRlX2Zyb20gJiYgIXNlYXJjaC5kYXRlX3RvICYmICFzZWFyY2gubW9udGggJiYgc2VhcmNoLmZpbmFuY2lhbF95ZWFyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiXFxcIj5RdWFydGVyPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVxcXCJzZWFyY2gucXVhcnRlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJcXFwiPi0tPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVxcXCI0LTZcXFwiPjE8L09wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XFxcIjctOVxcXCI+MjwvT3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cXFwiMTAtMTJcXFwiPjM8L09wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XFxcIjEtM1xcXCI+NDwvT3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiIHYtaWY9XFxcIiFzZWFyY2guZGF0ZV9mcm9tICYmICFzZWFyY2guZGF0ZV90byAmJiAhc2VhcmNoLnF1YXJ0ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJcXFwiPk1vbnRoPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVxcXCJzZWFyY2gubW9udGhcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiXFxcIj4tLTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiA6dmFsdWU9XFxcIih4ICsgMSlcXFwiIHYtZm9yPVxcXCIoaXQsIHgpIGluIG1vbnRoTmFtZXNcXFwiIDprZXk9XFxcIidtJyArIHhcXFwiPnt7IGl0IH19PC9PcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCIgdi1pZj1cXFwiIXNlYXJjaC5tb250aCAmJiAhc2VhcmNoLnF1YXJ0ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJcXFwiPkZyb20gRGF0ZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVxcXCJBc2lhL0tvbGthdGFcXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5kYXRlX2Zyb21cXFwiIGlucHV0LWNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQ3JlYXRlZCBmcm9tIGRhdGVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIiB2LWlmPVxcXCIhc2VhcmNoLm1vbnRoICYmICFzZWFyY2gucXVhcnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIlxcXCI+VG8gRGF0ZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVxcXCJBc2lhL0tvbGthdGFcXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5kYXRlX3RvXFxcIiBpbnB1dC1jbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkNyZWF0ZWQgdG8gZGF0ZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJcXFwiPlByb2plY3QgTmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwic2l0ZV9uYW1lXFxcIiA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiIDpvcHRpb25zPVxcXCJzZWFyY2hfc2l0ZXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQ2hvb3NlIFByb2plY3QuLi5cXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5zaXRlX2lkXFxcIiBuYW1lPVxcXCJzaXRlX2lkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJcXFwiPkVxdWlwbWVudCBDYXRlZ29yeTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwibmFtZVxcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIiA6b3B0aW9ucz1cXFwiY2F0ZWdvcmllc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJDaG9vc2UgQ2F0ZWdvcnkgLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guY2F0ZWdvcnlfaWRcXFwiPlxcXFxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgIFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIlxcXCI+RGVzY3JpcHRpb248L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcIm5hbWVcXFwiIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCIgOm9wdGlvbnM9XFxcInN1Yl9jYXRlZ29yaWVzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkNob29zZSBkZXNjcmlwdGlvbiAuLi5cXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5zdWJfY2F0ZWdvcnlfaWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCAgXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiXFxcIj5FcXVpcG1lbnQgTmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwibmFtZVxcXCIgOmdldC1vcHRpb24tbGFiZWw9XFxcImdldExhYmVsXFxcIiA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwic2VhcmNoX21hY2hpbmVzXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ2hvb3NlIEVxdWlwbWVudCAuLi5cXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5tYWNoaW5lX2lkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwibWFjaGluZV9pZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IHJvdy1lcS1oZWlnaHQgbXQtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS0gTGVmdCBjb2wgLS0+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTUFQICYgQk9YIFBBTkUgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+Q29tcGxhaW48L2gzPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXRvb2xzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi10b29sXFxcIiBkYXRhLWNhcmQtd2lkZ2V0PVxcXCJjb2xsYXBzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1taW51c1xcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRlciAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgcC0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02IHAtMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcGV4Y2hhcnQgd2lkdGg9XFxcIjQ0MFxcXCIgdHlwZT1cXFwiZG9udXRcXFwiIDpvcHRpb25zPVxcXCJkb251dENoYXJ0T3B0aW9uc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzZXJpZXM9XFxcInJlY29yZHMuY29tcGxhaW5fbmF0dXJlX2NoYXJ0LnNlcmllc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBleGNoYXJ0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02IHAtMVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMiBwLTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNiBwci0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3ggYmcteWVsbG93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm8tYm94LWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC1udW1iZXJcXFwiPnt7IHJlY29yZHMudG90YWxfdGlja2V0cyB9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtdGV4dFxcXCI+VG90YWwgQ29tcGxhaW50IDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNiBwbC0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3hcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiAjY2YzNGRjYmEgIWltcG9ydGFudDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3gtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LW51bWJlclxcXCI+e3sgcmVjb3Jkcy5hdmdfdGF0IH19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC10ZXh0XFxcIj5BdmVyYWdlIFRBVCAoRGF5cyk8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTYgcHItMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm8tYm94XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojMUZERUMzICFpbXBvcnRhbnQ7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm8tYm94LWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC1udW1iZXJcXFwiPnt7IHJlY29yZHMuY2xvc2VkX3RpY2tldHNcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtdGV4dFxcXCI+Q2xvc2VkIENhbGw8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTYgcGwtMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm8tYm94XFxcIiAgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6ICNlYTcwZjViYSAhaW1wb3J0YW50O1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtbnVtYmVyXFxcIj57eyByZWNvcmRzLndpdGhpbl90YXQgfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LXRleHRcXFwiPldpdGhpbiBUQVQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTYgcHItMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm8tYm94IFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6ICNFQTVGNUYgIWltcG9ydGFudDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3gtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LW51bWJlclxcXCI+e3sgcmVjb3Jkcy5vcGVuX3RpY2tldHMgfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LXRleHRcXFwiPk9wZW4gQ2FsbDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNiBwbC0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3hcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiAjODkwYjk1YmEgIWltcG9ydGFudDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3gtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LW51bWJlclxcXCI+e3sgcmVjb3Jkcy5leGNlZWRpbmdfdGF0IH19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC10ZXh0XFxcIj5FeGNlZWRpbmcgVEFUPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWJvZHkgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQgLS0+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8IS0tIC8uY29sIC0tPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+Q291bnQgb2YgQ29tcGxhaW50IE5hdHVyZSBieSBGWSwgUXVhcnRlciBhbmQgQ2FsbCBTdGF0dXM8L2gzPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXRvb2xzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi10b29sXFxcIiBkYXRhLWNhcmQtd2lkZ2V0PVxcXCJjb2xsYXBzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1taW51c1xcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSBwLTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXBleGNoYXJ0IHR5cGU9XFxcImJhclxcXCIgaGVpZ2h0PVxcXCIzMjhcXFwiIHN0eWxlPVxcXCJtYXgtaGVpZ2h0OiAzMjhweCAhaW1wb3J0YW50O1xcXCIgOm9wdGlvbnM9XFxcInJlY29yZHMuYmFyQ291bnRDaGFydC5vcHRpb25zXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcmllcz1cXFwicmVjb3Jkcy5iYXJDb3VudENoYXJ0LnNlcmllc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBleGNoYXJ0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+Q291bnQgb2YgQ29tcGxhaW50IGJ5IEVxdWlwbWVudCBUeXBlPC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC10b29sc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tdG9vbFxcXCIgZGF0YS1jYXJkLXdpZGdldD1cXFwiY29sbGFwc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtbWludXNcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgcC0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFwZXhjaGFydCB0eXBlPVxcXCJiYXJcXFwiIGhlaWdodD1cXFwiMzUwXFxcIiA6b3B0aW9ucz1cXFwicmVjb3Jkcy5FcXVpcG1lbnRDaGFydC5vcHRpb25zXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcmllcz1cXFwicmVjb3Jkcy5FcXVpcG1lbnRDaGFydC5zZXJpZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FwZXhjaGFydD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5Db3VudCBvZiBDb21wbGFpbnQgYnkgUHJvamVjdDwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdG9vbHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXRvb2xcXFwiIGRhdGEtY2FyZC13aWRnZXQ9XFxcImNvbGxhcHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLW1pbnVzXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHAtMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcGV4Y2hhcnQgdHlwZT1cXFwiYmFyXFxcIiBoZWlnaHQ9XFxcIjM1MFxcXCIgOm9wdGlvbnM9XFxcInJlY29yZHMuUHJvamVjdENoYXJ0Lm9wdGlvbnNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2VyaWVzPVxcXCJyZWNvcmRzLlByb2plY3RDaGFydC5zZXJpZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FwZXhjaGFydD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLSAvLmNvbCAtLT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8IS0tIC8ucm93IC0tPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8IS0tLy4gY29udGFpbmVyLWZsdWlkIC0tPlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbmV4cG9ydCBkZWZhdWx0IHtcXHJcXG5cXHJcXG4gICAgZGF0YSgpIHtcXHJcXG4gICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgcmVjb3JkczogJycsXFxyXFxuICAgICAgICAgICAgc2VhcmNoOiB7XFxyXFxuICAgICAgICAgICAgICAgIGZpbmFuY2lhbF95ZWFyOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgcXVhcnRlcjogJycsXFxyXFxuICAgICAgICAgICAgICAgIG1vbnRoOicnLFxcclxcbiAgICAgICAgICAgICAgICBkYXRlX2Zyb206ICcnLFxcclxcbiAgICAgICAgICAgICAgICBkYXRlX3RvOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXFxyXFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJydcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IFtcXFwiSmFudWFyeVxcXCIsIFxcXCJGZWJydWFyeVxcXCIsIFxcXCJNYXJjaFxcXCIsIFxcXCJBcHJpbFxcXCIsIFxcXCJNYXlcXFwiLCBcXFwiSnVuZVxcXCIsXFxyXFxuICAgICAgICAgICAgICAgIFxcXCJKdWx5XFxcIiwgXFxcIkF1Z3VzdFxcXCIsIFxcXCJTZXB0ZW1iZXJcXFwiLCBcXFwiT2N0b2JlclxcXCIsIFxcXCJOb3ZlbWJlclxcXCIsIFxcXCJEZWNlbWJlclxcXCJdLFxcclxcblxcclxcbiAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xcclxcbiAgICAgICAgICAgICAgICBjaGFydDoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFxcXCJ2dWVjaGFydC1leGFtcGxlXFxcIixcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsxOTkxLCAxOTkyLCAxOTkzLCAxOTk0LCAxOTk1LCAxOTk2LCAxOTk3LCAxOTk4XSxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHNlcmllczogW1xcclxcbiAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcXFwic2VyaWVzLTFcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzMwLCA0MCwgMzUsIDUwLCA0OSwgNjAsIDcwLCA5MV0sXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgXSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvLyoqKioqKioqKioqICovXFxyXFxuXFxyXFxuICAgICAgICAgICAgZG9udXRTZXJpZXM6IFs0NCwgNTVdLFxcclxcbiAgICAgICAgICAgIGRvbnV0Q2hhcnRPcHRpb25zOiB7XFxyXFxuICAgICAgICAgICAgIGNvbG9yczogWycjMDA2OGI5JywgJyMwMDY4YjlhZCddLFxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcXFwiZG50MVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXFxcIk1ham9yXFxcIiwgXFxcIk1pbm9yXFxcIl0sXFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcXFwiQ29tcGxhaW50IE5hdHVyZVxcXCIsXFxyXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XFxyXFxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXFxyXFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XSxcXHJcXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXFxyXFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdjZW50ZXInLFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICBiYXJDb3VudE9wdGlvbnM6IHtcXHJcXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXFxyXFxuICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA5MDBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZiddXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2FsbCBTdGF0dXMnXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXFxcIlF1YXJ0ZXIgMVxcXCIsIFxcXCJRdWFydGVyIDJcXFwiLCBcXFwiUXVhcnRlciAzXFxcIiwgXFxcIlF1YXJ0ZXIgNFxcXCJdLFxcclxcblxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1bmRlZmluZWRcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGZpbGw6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDQwXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIGJhckVxdWlwbWVudE9wdGlvbnM6IHtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxcclxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYXI6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6ICc1MCUnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGdyaWQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJvdzoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZmJywgJyNmMmYyZjInXVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAtNDVcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0FwcGxlcycsICdPcmFuZ2VzJywgJ1N0cmF3YmVycmllcycsICdQaW5lYXBwbGVzJywgJ01hbmdvZXMnLCAnQmFuYW5hcycsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0JsYWNrYmVycmllcycsICdQZWFycycsICdXYXRlcm1lbG9ucycsICdDaGVycmllcycsICdQb21lZ3JhbmF0ZXMnLCAnVGFuZ2VyaW5lcycsICdQYXBheWFzJ1xcclxcbiAgICAgICAgICAgICAgICAgICAgXSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRpY2tQbGFjZW1lbnQ6ICdvbidcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NvdW50IG9mIENvbXBsYWludCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBmaWxsOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ3JhZGllbnQnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkZTogJ2xpZ2h0JyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwiaG9yaXpvbnRhbFxcXCIsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGVJbnRlbnNpdHk6IDAuMjUsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRUb0NvbG9yczogdW5kZWZpbmVkLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVyc2VDb2xvcnM6IHRydWUsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eUZyb206IDAuODUsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eVRvOiAwLjg1LFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BzOiBbNTAsIDAsIDEwMF1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIC8vKioqKioqKiAqL1xcclxcblxcclxcbiAgICAgICAgICAgIGJhclByb2plY3RPcHRpb25zOiB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiAnNTAlJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMlxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgICAgICBncmlkOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICByb3c6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZicsICcjZjJmMmYyJ11cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogLTQ1XFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydBcHBsZXMnLCAnT3JhbmdlcycsICdTdHJhd2JlcnJpZXMnLCAnUGluZWFwcGxlcycsICdNYW5nb2VzJywgJ0JhbmFuYXMnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICdCbGFja2JlcnJpZXMnLCAnUGVhcnMnLCAnV2F0ZXJtZWxvbnMnLCAnQ2hlcnJpZXMnLCAnUG9tZWdyYW5hdGVzJywgJ1RhbmdlcmluZXMnLCAnUGFwYXlhcydcXHJcXG4gICAgICAgICAgICAgICAgICAgIF0sXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aWNrUGxhY2VtZW50OiAnb24nXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb3VudCBvZiBDb21wbGFpbnQnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgZmlsbDoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dyYWRpZW50JyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50OiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGU6ICdsaWdodCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcImhvcml6b250YWxcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAwLjI1LFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VG9Db2xvcnM6IHVuZGVmaW5lZCxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlQ29sb3JzOiB0cnVlLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlGcm9tOiAwLjg1LFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlUbzogMC44NSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wczogWzUwLCAwLCAxMDBdXFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICBmaW5hbmNpYWxfeWVhcnM6IFtdLFxcclxcbiAgICAgICAgICAgIHNlYXJjaF9tYWNoaW5lczogW10sXFxyXFxuICAgICAgICAgICAgc2VhcmNoX3NpdGVzOiBbXSxcXHJcXG4gICAgICAgICAgICBzZWFyY2hfdGlja2V0czogW10sXFxyXFxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXFxyXFxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXM6IFtdLFxcclxcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcXHJcXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXFxyXFxuICAgICAgICB9O1xcclxcbiAgICB9LFxcclxcbiAgICB1cGRhdGVkOiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICAgICAvLyB0aGlzLmFzaWduX2dyYXBocygpOyBcXHJcXG4gICAgICAgIH0pXFxyXFxuICAgIH0sXFxyXFxuICAgIHdhdGNoOiB7XFxyXFxuICAgICAgICAnc2VhcmNoLnF1YXJ0ZXInKG4pIHtcXHJcXG4gICAgICAgICAgICBpZiAobikge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX2Zyb20gPSAnJ1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX3RvID0gJydcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gubW9udGggPSAnJ1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICAnc2VhcmNoLmRhdGVfZnJvbScobikge1xcclxcbiAgICAgICAgICAgIGlmIChuKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLm1vbnRoID0gJydcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gucXVhcnRlciA9ICcnXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgICdzZWFyY2guZGF0ZV90bycobikge1xcclxcbiAgICAgICAgICAgIGlmIChuKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLm1vbnRoID0gJydcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gucXVhcnRlciA9ICcnXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgICdzZWFyY2gubW9udGgnKG4pIHtcXHJcXG4gICAgICAgICAgICBpZiAobikge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX2Zyb20gPSAnJ1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX3RvID0gJydcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gucXVhcnRlciA9ICcnXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgIHNlYXJjaDoge1xcclxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuKSB7XFxyXFxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2FwaS9kYXNoYm9hcmQnLCB0aGlzLnNlYXJjaClcXHJcXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRzID0gcmVzLmRhdGEuZGF0YVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyRXF1aXBtZW50T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5FcXVpcG1lbnRDaGFydC5vcHRpb25zLnhheGlzLmNhdGVnb3JpZXNcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhclByb2plY3RPcHRpb25zLnhheGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLlByb2plY3RDaGFydC5vcHRpb25zLnhheGlzLmNhdGVnb3JpZXNcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZGVlcDogdHJ1ZVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGFzeW5jIFxcXCJzZWFyY2guc3ViX2NhdGVnb3J5X2lkXFxcIihuLCBvKSB7XFxyXFxuICAgICAgICAgICAgaWYgKG4pIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBhc3luYyBcXFwic2VhcmNoLnNpdGVfaWRcXFwiKG4sIG8pIHtcXHJcXG4gICAgICAgICAgICBpZiAobikge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgIFxcXCJzZWFyY2guY2F0ZWdvcnlfaWRcXFwiOiB7XFxyXFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKG4pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldChcXFwiYXBpL2NhdGVnb3J5L1xcXCIgKyBuKS50aGVuKChyZXMpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yl9jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxcclxcbiAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXFxyXFxuICAgICAgICB9LFxcclxcbiAgICB9LFxcclxcbiAgICBjcmVhdGVkKCkge1xcclxcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5iYXJFcXVpcG1lbnRPcHRpb25zLnhheGlzKTtcXHJcXG4gICAgICAgIHZhciB5ZWFyc0xlbmd0aCA9IDMwO1xcclxcbiAgICAgICAgdmFyIGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xcclxcbiAgICAgICAgZm9yICh2YXIgaSA9IDIwMjI7IGkgPD0gY3VycmVudFllYXI7IGkrKykge1xcclxcbiAgICAgICAgICAgIHZhciBuZXh0ID0gaSArIDE7XFxyXFxuICAgICAgICAgICAgdmFyIHllYXIgPSBpICsgJy0nICsgbmV4dC50b1N0cmluZygpO1xcclxcbiAgICAgICAgICAgIHRoaXMuZmluYW5jaWFsX3llYXJzLnB1c2goeWVhcilcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xcclxcbiAgICAgICAgYXhpb3MucG9zdCgnYXBpL2Rhc2hib2FyZCcsIHRoaXMuc2VhcmNoKVxcclxcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlcy5kYXRhLmRhdGFcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5iYXJFcXVpcG1lbnRPcHRpb25zLnhheGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLkVxdWlwbWVudENoYXJ0Lm9wdGlvbnMueGF4aXMuY2F0ZWdvcmllc1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmJhclByb2plY3RPcHRpb25zLnhheGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLlByb2plY3RDaGFydC5vcHRpb25zLnhheGlzLmNhdGVnb3JpZXNcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5iYXJDb3VudE9wdGlvbnMueGF4aXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuYmFyQ291bnRDaGFydC5vcHRpb25zLnhheGlzLmNhdGVnb3JpZXNcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKTtcXHJcXG4gICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xcclxcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XFxyXFxuICAgICAgICAgICAgfSlcXHJcXG5cXHJcXG4gICAgICAgIGF4aW9zLmdldChcXFwiYXBpL2dldF9wcmVfbWFjaGluZVxcXCIpLnRoZW4oKHJlcykgPT4ge1xcclxcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuQ2F0ZWdvcnk7XFxyXFxuICAgICAgICAgICAgdGhpcy5zaXRlcyA9IHJlcy5kYXRhLmRhdGEuc2l0ZXM7XFxyXFxuICAgICAgICB9KTtcXHJcXG4gICAgICAgIGF4aW9zXFxyXFxuICAgICAgICAgICAgLmdldChcXFwiL2FwaS9pbml0aWFsX3RpY2tldFxcXCIpXFxyXFxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEudmVuZG9ycztcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfbWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoX3NpdGVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnNpdGVzO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRfdXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEuY3JlYXRlZF91c2VycztcXHJcXG4gICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oXFxcIk9oLiBTb21ldGhpbmcgd2VudCB3cm9uZ1xcXCIpKTtcXHJcXG5cXHJcXG5cXHJcXG4gICAgfSxcXHJcXG4gICAgbW91bnRlZCgpIHtcXHJcXG4gICAgICAgIGlmICh0aGlzLiRnYXRlLmlzQWRtaW4oKSkge1xcclxcbiAgICAgICAgICAgIC8vIHRoaXMuJHJvdXRlci5wdXNoKCcvdXNlcnMnKS5jYXRjaCgoKSA9PiB7IH0pO1xcclxcbiAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChcXFwiL3RpY2tldHNcXFwiKS5jYXRjaCgoKSA9PiB7IH0pO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICBhc2lnbl9ncmFwaHMoKXtcXHJcXG50aGlzLnJlY29yZHM9dGhpcy5yZWNvcmRzXFxyXFxuICAgICAgICAgICAgdGhpcy5jaGFydE9wdGlvbnM9IHtcXHJcXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcXFwidnVlY2hhcnQtZXhhbXBsZVxcXCIsXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbMTk5MSwgMTk5MiwgMTk5MywgMTk5NCwgMTk5NSwgMTk5NiwgMTk5NywgMTk5OF0sXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgfSBcXHJcXG4gICAgICAgICAgICAvLyoqKioqKioqKioqICovIFxcclxcbiAgICAgICAgICAgIHRoaXMuZG9udXRDaGFydE9wdGlvbnM9IHtcXHJcXG4gICAgICAgICAgICAgY29sb3JzOiBbJyMwMDY4YjknLCAnIzAwNjhiOWFkJ10sXFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICBjaGFydDoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFxcXCJkbnQxXFxcIlxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFtcXFwiTWFqb3JcXFwiLCBcXFwiTWlub3JcXFwiXSxcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFxcXCJDb21wbGFpbnQgTmF0dXJlXFxcIixcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1dLFxcclxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2NlbnRlcicsXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgdGhpcy5iYXJDb3VudE9wdGlvbnM9IHtcXHJcXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXFxyXFxuICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA5MDBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZiddXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2FsbCBTdGF0dXMnXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXFxcIlF1YXJ0ZXIgMVxcXCIsIFxcXCJRdWFydGVyIDJcXFwiLCBcXFwiUXVhcnRlciAzXFxcIiwgXFxcIlF1YXJ0ZXIgNFxcXCJdLFxcclxcblxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1bmRlZmluZWRcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGZpbGw6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDQwXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgdGhpcy5iYXJFcXVpcG1lbnRPcHRpb25zPSB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiAnNTAlJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMlxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgICAgICBncmlkOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICByb3c6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZicsICcjZjJmMmYyJ11cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogLTQ1XFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydBcHBsZXMnLCAnT3JhbmdlcycsICdTdHJhd2JlcnJpZXMnLCAnUGluZWFwcGxlcycsICdNYW5nb2VzJywgJ0JhbmFuYXMnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICdCbGFja2JlcnJpZXMnLCAnUGVhcnMnLCAnV2F0ZXJtZWxvbnMnLCAnQ2hlcnJpZXMnLCAnUG9tZWdyYW5hdGVzJywgJ1RhbmdlcmluZXMnLCAnUGFwYXlhcydcXHJcXG4gICAgICAgICAgICAgICAgICAgIF0sXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aWNrUGxhY2VtZW50OiAnb24nXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb3VudCBvZiBDb21wbGFpbnQnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgZmlsbDoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dyYWRpZW50JyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50OiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGU6ICdsaWdodCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcImhvcml6b250YWxcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAwLjI1LFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VG9Db2xvcnM6IHVuZGVmaW5lZCxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlQ29sb3JzOiB0cnVlLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlGcm9tOiAwLjg1LFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlUbzogMC44NSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wczogWzUwLCAwLCAxMDBdXFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIC8vKioqKioqKiAqL1xcclxcblxcclxcbiAgICAgICAgICAgIHRoaXMuYmFyUHJvamVjdE9wdGlvbnM9e1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBjaGFydDoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXFxyXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogJzUwJScsXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgZ3JpZDoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcm93OiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyNmZmYnLCAnI2YyZjJmMiddXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGU6IC00NVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnQXBwbGVzJywgJ09yYW5nZXMnLCAnU3RyYXdiZXJyaWVzJywgJ1BpbmVhcHBsZXMnLCAnTWFuZ29lcycsICdCYW5hbmFzJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAnQmxhY2tiZXJyaWVzJywgJ1BlYXJzJywgJ1dhdGVybWVsb25zJywgJ0NoZXJyaWVzJywgJ1BvbWVncmFuYXRlcycsICdUYW5nZXJpbmVzJywgJ1BhcGF5YXMnXFxyXFxuICAgICAgICAgICAgICAgICAgICBdLFxcclxcbiAgICAgICAgICAgICAgICAgICAgdGlja1BsYWNlbWVudDogJ29uJ1xcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ291bnQgb2YgQ29tcGxhaW50JyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIGZpbGw6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdncmFkaWVudCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudDoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlOiAnbGlnaHQnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCJob3Jpem9udGFsXFxcIixcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkZUludGVuc2l0eTogMC4yNSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFRvQ29sb3JzOiB1bmRlZmluZWQsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJzZUNvbG9yczogdHJ1ZSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5RnJvbTogMC44NSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5VG86IDAuODUsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHM6IFs1MCwgMCwgMTAwXVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBnZXRMYWJlbCh2YWwpIHtcXHJcXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gXFxcIm9iamVjdFxcXCIpIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5mYXJfbm8gKyBcXFwiIC0gXFxcIiArIHZhbC5uYW1lO1xcclxcbiAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGFzeW5jIGdldF9tYWNoaW5lKCkge1xcclxcbiAgICAgICAgICAgIGF4aW9zXFxyXFxuICAgICAgICAgICAgICAgIC5nZXQoXFxcIi9hcGkvcmVwb3J0cy9tYWNoaW5lc1xcXCIsIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVfaWQ6IHRoaXMuc2VhcmNoLnNpdGVfaWQsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IHRoaXMuc2VhcmNoLmNhdGVnb3J5X2lkLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yeV9pZDogdGhpcy5zZWFyY2guc3ViX2NhdGVnb3J5X2lkLFxcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybihcXFwiT2guIFNvbWV0aGluZyB3ZW50IHdyb25nXFxcIikpO1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgfSxcXHJcXG59O1xcclxcbjwvc2NyaXB0PlxcclxcbjxzdHlsZT5cXHJcXG4jYXBleGNoYXJ0c2RudDEge1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTYwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgIF92bS5yZWNvcmRzXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIlwiIH0gfSwgW192bS5fdihcIkZZXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uZmluYW5jaWFsX3llYXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IEZZLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZpbmFuY2lhbF95ZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5maW5hbmNpYWxfeWVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJmaW5hbmNpYWxfeWVhclwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guZmluYW5jaWFsX3llYXJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICFfdm0uc2VhcmNoLmRhdGVfZnJvbSAmJlxuICAgICAgICAgICAgICAgICFfdm0uc2VhcmNoLmRhdGVfdG8gJiZcbiAgICAgICAgICAgICAgICAhX3ZtLnNlYXJjaC5tb250aCAmJlxuICAgICAgICAgICAgICAgIF92bS5zZWFyY2guZmluYW5jaWFsX3llYXJcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJcIiB9IH0sIFtfdm0uX3YoXCJRdWFydGVyXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnF1YXJ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5xdWFydGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1YXJ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCItLVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJPcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI0LTZcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIk9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjctOVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiT3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMTAtMTJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIk9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjEtM1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICFfdm0uc2VhcmNoLmRhdGVfZnJvbSAmJlxuICAgICAgICAgICAgICAgICFfdm0uc2VhcmNoLmRhdGVfdG8gJiZcbiAgICAgICAgICAgICAgICAhX3ZtLnNlYXJjaC5xdWFydGVyXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbX3ZtLl92KFwiTW9udGhcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gubW9udGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5tb250aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb250aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIi0tXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm1vbnRoTmFtZXMsIGZ1bmN0aW9uKGl0LCB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBcIm1cIiArIHgsIGF0dHJzOiB7IHZhbHVlOiB4ICsgMSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICFfdm0uc2VhcmNoLm1vbnRoICYmICFfdm0uc2VhcmNoLnF1YXJ0ZXJcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRnJvbSBEYXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRhdGV0aW1lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlLXpvbmVcIjogXCJBc2lhL0tvbGthdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ3JlYXRlZCBmcm9tIGRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLmRhdGVfZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImRhdGVfZnJvbVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5kYXRlX2Zyb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgIV92bS5zZWFyY2gubW9udGggJiYgIV92bS5zZWFyY2gucXVhcnRlclxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUbyBEYXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRhdGV0aW1lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlLXpvbmVcIjogXCJBc2lhL0tvbGthdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ3JlYXRlZCB0byBkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5kYXRlX3RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiZGF0ZV90b1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5kYXRlX3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQcm9qZWN0IE5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaXRlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2VhcmNoX3NpdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIFByb2plY3QuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2l0ZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guc2l0ZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJzaXRlX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5zaXRlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRXF1aXBtZW50IENhdGVnb3J5XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmNhdGVnb3JpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNob29zZSBDYXRlZ29yeSAuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLmNhdGVnb3J5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJjYXRlZ29yeV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmNhdGVnb3J5X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXFxcXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRGVzY3JpcHRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnN1Yl9jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIGRlc2NyaXB0aW9uIC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guc3ViX2NhdGVnb3J5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcInN1Yl9jYXRlZ29yeV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guc3ViX2NhdGVnb3J5X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRXF1aXBtZW50IE5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImdldC1vcHRpb24tbGFiZWxcIjogX3ZtLmdldExhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zZWFyY2hfbWFjaGluZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9vc2UgRXF1aXBtZW50IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYWNoaW5lX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5tYWNoaW5lX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcIm1hY2hpbmVfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLm1hY2hpbmVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHJvdy1lcS1oZWlnaHQgbXQtMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSBwLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgcC0xXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhcGV4Y2hhcnRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0NDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZG9udXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5kb251dENoYXJ0T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllczogX3ZtLnJlY29yZHMuY29tcGxhaW5fbmF0dXJlX2NoYXJ0LnNlcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgcC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTIgcC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02IHByLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94IGJnLXllbGxvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LW51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ucmVjb3Jkcy50b3RhbF90aWNrZXRzKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUb3RhbCBDb21wbGFpbnQgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02IHBsLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImluZm8tYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNjZjM0ZGNiYSAhaW1wb3J0YW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LW51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnJlY29yZHMuYXZnX3RhdCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LXRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBdmVyYWdlIFRBVCAoRGF5cylcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgcHItMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzFGREVDMyAhaW1wb3J0YW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LW51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnJlY29yZHMuY2xvc2VkX3RpY2tldHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LXRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDbG9zZWQgQ2FsbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNiBwbC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbmZvLWJveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZWE3MGY1YmEgIWltcG9ydGFudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1udW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5yZWNvcmRzLndpdGhpbl90YXQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiV2l0aGluIFRBVFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNiBwci0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbmZvLWJveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjRUE1RjVGICFpbXBvcnRhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtbnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucmVjb3Jkcy5vcGVuX3RpY2tldHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LXRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJPcGVuIENhbGxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgcGwtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzg5MGI5NWJhICFpbXBvcnRhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtbnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucmVjb3Jkcy5leGNlZWRpbmdfdGF0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRXhjZWVkaW5nIFRBVFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHkgcC0xXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJhcGV4Y2hhcnRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWF4LWhlaWdodFwiOiBcIjMyOHB4ICFpbXBvcnRhbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMyOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnJlY29yZHMuYmFyQ291bnRDaGFydC5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzOiBfdm0ucmVjb3Jkcy5iYXJDb3VudENoYXJ0LnNlcmllc1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSBwLTFcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImFwZXhjaGFydFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzUwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ucmVjb3Jkcy5FcXVpcG1lbnRDaGFydC5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzOiBfdm0ucmVjb3Jkcy5FcXVpcG1lbnRDaGFydC5zZXJpZXNcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHkgcC0xXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJhcGV4Y2hhcnRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnJlY29yZHMuUHJvamVjdENoYXJ0Lm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXM6IF92bS5yZWNvcmRzLlByb2plY3RDaGFydC5zZXJpZXNcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtfdm0uX3YoXCJDb21wbGFpblwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10b29sc1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXRvb2xcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIFwiZGF0YS1jYXJkLXdpZGdldFwiOiBcImNvbGxhcHNlXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1taW51c1wiIH0pXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgdGV4dC1jZW50ZXJcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiQ291bnQgb2YgQ29tcGxhaW50IE5hdHVyZSBieSBGWSwgUXVhcnRlciBhbmQgQ2FsbCBTdGF0dXNcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10b29sc1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXRvb2xcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIFwiZGF0YS1jYXJkLXdpZGdldFwiOiBcImNvbGxhcHNlXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1taW51c1wiIH0pXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiQ291bnQgb2YgQ29tcGxhaW50IGJ5IEVxdWlwbWVudCBUeXBlXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdG9vbHNcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi10b29sXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBcImRhdGEtY2FyZC13aWRnZXRcIjogXCJjb2xsYXBzZVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtbWludXNcIiB9KV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIkNvdW50IG9mIENvbXBsYWludCBieSBQcm9qZWN0XCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdG9vbHNcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi10b29sXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBcImRhdGEtY2FyZC13aWRnZXRcIjogXCJjb2xsYXBzZVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtbWludXNcIiB9KV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtZDlkODc2ODJcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwNTNlNDViNlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1kOWQ4NzY4MlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxEYXNoYm9hcmRcXFxcRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWQ5ZDg3NjgyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZDlkODc2ODJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==