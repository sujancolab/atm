(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
exports.push([module.i, "\n#apexchartsdnt1 {\n    margin-left: -60px !important;\n}\n", "", {"version":3,"sources":["F:/wamp64/www/rmm/resources/js/components/Dashboard/resources/js/components/Dashboard/DashboardCallLockStatus.vue"],"names":[],"mappings":";AAs4BA;IACA,8BAAA;CACA","file":"DashboardCallLockStatus.vue","sourcesContent":["<template>\n    <section class=\"content\">\n        <div class=\"\" v-if=\"records\">\n            <div class=\"row\">\n                <div class=\"col-md-3 col-sm-6 col-12\">\n                    <div class=\"info-box bg-danger\">\n                        <span class=\"info-box-icon\"><i class=\"fas fa-comments\"></i></span>\n                        <div class=\"info-box-content\">\n                            <span class=\"info-box-text\">Comments</span>\n                            <span class=\"info-box-number\">41,410</span>\n                            <div class=\"progress\">\n                                <div class=\"progress-bar\" style=\"width: 70%\"></div>\n                            </div>\n                            <span class=\"progress-description\">\n                                70% Increase in 30 Days\n                            </span>\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class=\"col-md-3 col-sm-6 col-12\">\n                    <div class=\"info-box bg-warning\">\n                        <span class=\"info-box-icon\"><i class=\"far fa-calendar-alt\"></i></span>\n                        <div class=\"info-box-content\">\n                            <span class=\"info-box-text\">Events</span>\n                            <span class=\"info-box-number\">41,410</span>\n                            <div class=\"progress\">\n                                <div class=\"progress-bar\" style=\"width: 70%\"></div>\n                            </div>\n                            <span class=\"progress-description\">\n                                70% Increase in 30 Days\n                            </span>\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class=\"col-md-3 col-sm-6 col-12\">\n                    <div class=\"info-box bg-success\">\n                        <span class=\"info-box-icon\"><i class=\"far fa-thumbs-up\"></i></span>\n                        <div class=\"info-box-content\">\n                            <span class=\"info-box-text\">Likes</span>\n                            <span class=\"info-box-number\">41,410</span>\n                            <div class=\"progress\">\n                                <div class=\"progress-bar\" style=\"width: 70%\"></div>\n                            </div>\n                            <span class=\"progress-description\">\n                                70% Increase in 30 Days\n                            </span>\n                        </div>\n\n                    </div>\n\n                </div>\n\n\n\n\n\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"card\">\n                        <!-- /.card-header -->\n                        <div class=\"card-body\">\n                            <div class=\"form-row\">\n                                <div class=\"col\">\n                                    <label for=\"\">FY</label>\n                                    <v-select :options=\"financial_years\" placeholder=\"Select FY...\"\n                                        v-model=\"search.financial_year\" name=\"financial_year\">\n                                    </v-select>\n                                </div>\n                                <div class=\"col\"\n                                    v-if=\"!search.date_from && !search.date_to && !search.month && search.financial_year\">\n                                    <label for=\"\">Quarter</label>\n                                    <select v-model=\"search.quarter\" class=\"form-control\">\n                                        <option value=\"\">--</option>\n                                        <Option value=\"4-6\">First</Option>\n                                        <Option value=\"7-9\">Second</Option>\n                                        <Option value=\"10-12\">Third</Option>\n                                        <Option value=\"1-3\">Fourth</Option>\n                                    </select>\n                                </div>\n                                <div class=\"col\" v-if=\"!search.date_from && !search.date_to && !search.quarter\">\n                                    <label for=\"\">Month</label>\n                                    <select v-model=\"search.month\" class=\"form-control\">\n                                        <option value=\"\">--</option>\n                                        <Option :value=\"(x + 1)\" v-for=\"(it, x) in monthNames\" :key=\"'m' + x\">{{ it }}\n                                        </Option>\n                                    </select>\n                                </div>\n\n                                <div class=\"col\" v-if=\"!search.month && !search.quarter\">\n                                    <label for=\"\">From Date</label>\n                                    <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.date_from\"\n                                        input-class=\"form-control\" placeholder=\"Created from date\" />\n                                </div>\n                                <div class=\"col\" v-if=\"!search.month && !search.quarter\">\n                                    <label for=\"\">To Date</label>\n                                    <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.date_to\"\n                                        input-class=\"form-control\" placeholder=\"Created to date\" />\n                                </div>\n\n                                <div class=\"col\">\n                                    <label for=\"\">Project Name</label>\n                                    <v-select label=\"site_name\" :reduce=\"(option) => option.id\" :options=\"search_sites\"\n                                        placeholder=\"Choose Project...\" v-model=\"search.site_id\" name=\"site_id\">\n                                    </v-select>\n                                </div>\n                                <div class=\"col\">\n                                    <label for=\"\">Equipment Category</label>\n                                    <v-select label=\"name\" :reduce=\"(option) => option.id\" :options=\"categories\"\n                                        placeholder=\"Choose Category ...\" v-model=\"search.category_id\">\\\n                                    </v-select>\n                                </div>\n                                <div class=\"col  \">\n                                    <label for=\"\">Description</label>\n                                    <v-select label=\"name\" :reduce=\"(option) => option.id\" :options=\"sub_categories\"\n                                        placeholder=\"Choose description ...\" v-model=\"search.sub_category_id\">\n                                    </v-select>\n                                </div>\n                                <div class=\"col  \">\n                                    <label for=\"\">Equipment Name</label>\n                                    <v-select label=\"name\" :get-option-label=\"getLabel\" :reduce=\"(option) => option.id\"\n                                        :options=\"search_machines\" placeholder=\"Choose Equipment ...\"\n                                        v-model=\"search.machine_id\" name=\"machine_id\">\n                                    </v-select>\n                                </div>\n\n\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"row row-eq-height mt-2\">\n                <!-- Left col -->\n                <div class=\"col-md-7\">\n                    <!-- MAP & BOX PANE -->\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            <h3 class=\"card-title\">Complain</h3>\n                            <div class=\"card-tools\">\n                                <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\">\n                                    <i class=\"fas fa-minus\"></i>\n                                </button>\n                            </div>\n                        </div>\n                        <!-- /.card-header -->\n                        <div class=\"card-body p-1\">\n                            <div class=\"col-12\">\n                                <div class=\"row text-center\">\n\n\n                                </div>\n                            </div>\n\n                            <div class=\"col-12\">\n                                <div class=\"row text-center\">\n                                    <div class=\"col-4 p-1\">\n                                        <div class=\"row\">\n                                            <div class=\"col-12\">\n                                                <div class=\"info-box\">\n                                                    <span class=\"info-box-icon bg-info\"><i\n                                                            class=\"fa fa-gavel\"></i></span>\n                                                    <div class=\"info-box-content\">\n                                                        <span class=\"info-box-text\">Total Complaint</span>\n                                                        <span class=\"info-box-number\">{{ records.total_tickets }}</span>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"col-12\">\n                                                <div class=\"info-box\">\n                                                    <span class=\"info-box-icon bg-success\"><i\n                                                            class=\"fa fa-lock\"></i></span>\n                                                    <div class=\"info-box-content\">\n                                                        <span class=\"info-box-text\">Closed Call</span>\n                                                        <span class=\"info-box-number\">{{ records.closed_tickets\n                                                            }}</span>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"col-12\">\n                                                <div class=\"info-box\">\n                                                    <span class=\"info-box-icon bg-danger\"><i\n                                                            class=\"fa fa-unlock\"></i></span>\n                                                    <div class=\"info-box-content\">\n                                                        <span class=\"info-box-text\">Open Call</span>\n                                                        <span class=\"info-box-number\">{{ records.open_tickets }}</span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-4 p-1\">\n                                        <apexchart width=\"380\" type=\"donut\" :options=\"donutChartOptions\"\n                                            :series=\"records.complain_nature_chart.series\">\n                                        </apexchart>\n                                    </div>\n                                    <div class=\"col-4 p-1\">\n                                        <div class=\"row\">\n                                            <div class=\"col-12\">\n                                                <div class=\"info-box\">\n                                                    <span class=\"info-box-icon bg-info\"><i\n                                                            class=\"far fa-envelope\"></i></span>\n                                                    <div class=\"info-box-content\">\n                                                        <span class=\"info-box-text\">Avg TAT (Days)</span>\n                                                        <span class=\"info-box-number\">{{ records.avg_tat }}</span>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"col-12\">\n                                                <div class=\"info-box\">\n                                                    <span class=\"info-box-icon bg-info\"><i\n                                                            class=\"far fa-envelope\"></i></span>\n                                                    <div class=\"info-box-content\">\n                                                        <span class=\"info-box-text\">Within TAT</span>\n                                                        <span class=\"info-box-number\">{{ records.within_tat }}</span>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"col-12\">\n                                                <div class=\"info-box\">\n                                                    <span class=\"info-box-icon bg-info\"><i\n                                                            class=\"far fa-envelope\"></i></span>\n                                                    <div class=\"info-box-content\">\n                                                        <span class=\"info-box-text\">Exceeding TAT</span>\n                                                        <span class=\"info-box-number\">{{ records.exceeding_tat }}</span>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- /.card-body -->\n                </div>\n                <!-- /.card -->\n                <div class=\"col-md-5\">\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            <h3 class=\"card-title\">Count of Complaint Nature by FY, Quarter and Call Status</h3>\n                            <div class=\"card-tools\">\n                                <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\">\n                                    <i class=\"fas fa-minus\"></i>\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"card-body p-1\">\n                            <apexchart type=\"bar\" ref=\"barCountChart\" height=\"328\" style=\"max-height: 328px !important;\"\n                                :options=\"records.barCountChart.options\" :series=\"records.barCountChart.series\">\n                            </apexchart>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- /.card -->\n        </div>\n        <!-- /.col -->\n\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h3 class=\"card-title\">Count of Complaint by Equipment Type</h3>\n                        <div class=\"card-tools\">\n                            <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\">\n                                <i class=\"fas fa-minus\"></i>\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"card-body p-1\">\n                        <apexchart type=\"bar\" height=\"350\" :options=\"records.EquipmentChart.options\"\n                            :series=\"records.EquipmentChart.series\">\n                        </apexchart>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h3 class=\"card-title\">Count of Complaint by Project</h3>\n                        <div class=\"card-tools\">\n                            <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\">\n                                <i class=\"fas fa-minus\"></i>\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"card-body p-1\">\n                        <apexchart type=\"bar\" height=\"350\" :options=\"records.ProjectChart.options\"\n                            :series=\"records.ProjectChart.series\">\n                        </apexchart>\n                    </div>\n                </div>\n            </div>\n\n            <!-- /.col -->\n        </div>\n        <!-- /.row -->\n        </div>\n        <!--/. container-fluid -->\n    </section>\n</template>\n\n<script>\nexport default {\n\n    data() {\n        return {\n            records: '',\n            search: {\n                financial_year: '',\n                quarter: '',\n                month: '',\n                date_from: '',\n                date_to: '',\n                site_id: '',\n                category_id: '',\n                sub_category_id: '',\n                machine_id: ''\n            },\n            monthNames: [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\",\n                \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"],\n\n            chartOptions: {\n                chart: {\n                    id: \"vuechart-example\",\n                },\n                xaxis: {\n                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],\n                },\n            },\n            series: [\n                {\n                    name: \"series-1\",\n                    data: [30, 40, 35, 50, 49, 60, 70, 91],\n                },\n            ],\n\n            //*********** */\n\n            donutSeries: [44, 55],\n            donutChartOptions: {\n                colors: ['#004488', '#38c172'],\n\n                chart: {\n                    id: \"dnt1\"\n                },\n                labels: [\"Major\", \"Minor\"],\n                title: {\n                    text: \"Complaint Nature\",\n                    align: 'center',\n                },\n\n                responsive: [{\n                    breakpoint: 480,\n                    options: {\n                        chart: {\n                            width: 200\n                        },\n\n                        legend: {\n                            position: 'bottom',\n                            horizontalAlign: 'left',\n                        }\n                    }\n                }],\n                legend: {\n                    position: 'bottom',\n                    horizontalAlign: 'center',\n                }\n            },\n\n            barCountOptions: {\n                chart: {\n                    type: 'bar',\n                    height: 350,\n                    stacked: true,\n                },\n                plotOptions: {\n                    bar: {\n                        horizontal: true,\n                        dataLabels: {\n                            total: {\n                                enabled: true,\n                                offsetX: 0,\n                                style: {\n                                    fontSize: '13px',\n                                    fontWeight: 900\n                                }\n                            }\n                        }\n                    },\n                },\n                stroke: {\n                    width: 1,\n                    colors: ['#fff']\n                },\n                title: {\n                    text: 'Call Status'\n                },\n                xaxis: {\n                    categories: [\"Quarter 1\", \"Quarter 2\", \"Quarter 3\", \"Quarter 4\"],\n\n                },\n                yaxis: {\n                    title: {\n                        text: undefined\n                    },\n                },\n\n                fill: {\n                    opacity: 1\n                },\n                legend: {\n                    position: 'top',\n                    horizontalAlign: 'left',\n                    offsetX: 40\n                }\n            },\n\n            barEquipmentOptions: {\n\n                chart: {\n                    height: 350,\n                    type: 'bar',\n                },\n                plotOptions: {\n                    bar: {\n                        borderRadius: 2,\n                        columnWidth: '50%',\n                    }\n                },\n                dataLabels: {\n                    enabled: false\n                },\n                stroke: {\n                    width: 2\n                },\n\n                grid: {\n                    row: {\n                        colors: ['#fff', '#f2f2f2']\n                    }\n                },\n                xaxis: {\n                    labels: {\n                        rotate: -45\n                    },\n                    categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',\n                        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'\n                    ],\n                    tickPlacement: 'on'\n                },\n                yaxis: {\n                    title: {\n                        text: 'Count of Complaint',\n                    },\n                },\n                fill: {\n                    type: 'gradient',\n                    gradient: {\n                        shade: 'light',\n                        type: \"horizontal\",\n                        shadeIntensity: 0.25,\n                        gradientToColors: undefined,\n                        inverseColors: true,\n                        opacityFrom: 0.85,\n                        opacityTo: 0.85,\n                        stops: [50, 0, 100]\n                    },\n                }\n            },\n            //******* */\n\n            barProjectOptions: {\n\n                chart: {\n                    height: 350,\n                    type: 'bar',\n                },\n                plotOptions: {\n                    bar: {\n                        borderRadius: 2,\n                        columnWidth: '50%',\n                    }\n                },\n                dataLabels: {\n                    enabled: false\n                },\n                stroke: {\n                    width: 2\n                },\n\n                grid: {\n                    row: {\n                        colors: ['#fff', '#f2f2f2']\n                    }\n                },\n                xaxis: {\n                    labels: {\n                        rotate: -45\n                    },\n                    categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',\n                        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'\n                    ],\n                    tickPlacement: 'on'\n                },\n                yaxis: {\n                    title: {\n                        text: 'Count of Complaint',\n                    },\n                },\n                fill: {\n                    type: 'gradient',\n                    gradient: {\n                        shade: 'light',\n                        type: \"horizontal\",\n                        shadeIntensity: 0.25,\n                        gradientToColors: undefined,\n                        inverseColors: true,\n                        opacityFrom: 0.85,\n                        opacityTo: 0.85,\n                        stops: [50, 0, 100]\n                    },\n                }\n            },\n\n            financial_years: [],\n            search_machines: [],\n            search_sites: [],\n            search_tickets: [],\n            categories: [],\n            sub_categories: [],\n            sites: [],\n            machines: [],\n        };\n    },\n    updated: function () {\n        this.$nextTick(function () {\n            // this.asign_graphs(); \n        })\n    },\n    watch: {\n        'search.quarter'(n) {\n            if (n) {\n                this.search.date_from = ''\n                this.search.date_to = ''\n                this.search.month = ''\n            }\n        },\n        'search.date_from'(n) {\n            if (n) {\n                this.search.month = ''\n                this.search.quarter = ''\n            }\n        },\n        'search.date_to'(n) {\n            if (n) {\n                this.search.month = ''\n                this.search.quarter = ''\n            }\n        },\n        'search.month'(n) {\n            if (n) {\n                this.search.date_from = ''\n                this.search.date_to = ''\n                this.search.quarter = ''\n            }\n        },\n\n        search: {\n            handler: function (n) {\n                axios.post('api/dashboard', this.search)\n                    .then(res => {\n                        this.records = res.data.data\n                        this.barEquipmentOptions.xaxis.categories = res.data.data.EquipmentChart.options.xaxis.categories\n                        this.barProjectOptions.xaxis.categories = res.data.data.ProjectChart.options.xaxis.categories\n\n\n                        this.$refs.barCountChart.updateSeries(this.records.barCountChart.series, true)\n                        this.$refs.barCountChart.updateOptions(this.records.barCountChart.options, false, true)\n\n                    })\n                    .catch(err => {\n                        console.error(err);\n                    })\n            },\n            deep: true\n        },\n        async \"search.sub_category_id\"(n, o) {\n            if (n) {\n                this.get_machine();\n            }\n        },\n        async \"search.site_id\"(n, o) {\n            if (n) {\n                this.get_machine();\n            }\n        },\n\n        \"search.category_id\": {\n            handler: function (n, o) {\n                if (n) {\n                    axios.get(\"api/category/\" + n).then((res) => {\n                        this.sub_categories = res.data.data;\n                    });\n                    this.get_machine();\n                }\n            },\n            deep: true,\n            initial: true,\n        },\n    },\n    created() {\n        console.log(this.barEquipmentOptions.xaxis);\n        var yearsLength = 30;\n        var currentYear = new Date().getFullYear();\n        for (var i = 2022; i <= currentYear; i++) {\n            var next = i + 1;\n            var year = i + '-' + next.toString();\n            this.financial_years.push(year)\n        }\n    },\n    beforeCreate() {\n        axios.post('api/dashboard', this.search)\n            .then(res => {\n                this.records = res.data.data\n\n                this.barEquipmentOptions.xaxis.categories = res.data.data.EquipmentChart.options.xaxis.categories\n                this.barProjectOptions.xaxis.categories = res.data.data.ProjectChart.options.xaxis.categories\n\n                this.barCountOptions.xaxis.categories = res.data.data.barCountChart.options.xaxis.categories\n                this.$forceUpdate();\n            })\n            .catch(err => {\n                console.error(err);\n            })\n\n        axios.get(\"api/get_pre_machine\").then((res) => {\n            this.categories = res.data.data.Category;\n            this.sites = res.data.data.sites;\n        });\n        axios\n            .get(\"/api/initial_ticket\")\n            .then((response) => {\n                this.users = response.data.data.vendors;\n                this.machines = response.data.data.machines;\n                this.search_machines = response.data.data.machines;\n                this.search_sites = response.data.data.sites;\n                this.created_users = response.data.data.created_users;\n            })\n            .catch(() => console.warn(\"Oh. Something went wrong\"));\n\n\n    },\n    mounted() {\n        // if (this.$gate.isAdmin()) {\n        //     // this.$router.push('/users').catch(() => { });\n        // } else {\n        //     this.$router.push(\"/tickets\").catch(() => { });\n        // }\n    },\n    methods: {\n        asign_graphs() {\n            this.records = this.records\n            this.chartOptions = {\n                chart: {\n                    id: \"vuechart-example\",\n                },\n                xaxis: {\n                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],\n                },\n            }\n            //*********** */ \n            this.donutChartOptions = {\n                colors: ['#0068b9', '#0068b9ad'],\n\n                chart: {\n                    id: \"dnt1\"\n                },\n                labels: [\"Major\", \"Minor\"],\n                title: {\n                    text: \"Complaint Nature\",\n                    align: 'center',\n                },\n\n                responsive: [{\n                    breakpoint: 480,\n                    options: {\n                        chart: {\n                            width: 200\n                        },\n\n                        legend: {\n                            position: 'bottom',\n                            horizontalAlign: 'left',\n                        }\n                    }\n                }],\n                legend: {\n                    position: 'bottom',\n                    horizontalAlign: 'center',\n                }\n            }\n\n            this.barCountOptions = {\n                chart: {\n                    type: 'bar',\n                    height: 350,\n                    stacked: true,\n                },\n                plotOptions: {\n                    bar: {\n                        horizontal: true,\n                        dataLabels: {\n                            total: {\n                                enabled: true,\n                                offsetX: 0,\n                                style: {\n                                    fontSize: '13px',\n                                    fontWeight: 900\n                                }\n                            }\n                        }\n                    },\n                },\n                stroke: {\n                    width: 1,\n                    colors: ['#fff']\n                },\n                title: {\n                    text: 'Call Status'\n                },\n                xaxis: {\n                    categories: [\"Quarter 1\", \"Quarter 2\", \"Quarter 3\", \"Quarter 4\"],\n\n                },\n                yaxis: {\n                    title: {\n                        text: undefined\n                    },\n                },\n\n                fill: {\n                    opacity: 1\n                },\n                legend: {\n                    position: 'top',\n                    horizontalAlign: 'left',\n                    offsetX: 40\n                }\n            }\n\n            this.barEquipmentOptions = {\n\n                chart: {\n                    height: 350,\n                    type: 'bar',\n                },\n                plotOptions: {\n                    bar: {\n                        borderRadius: 2,\n                        columnWidth: '50%',\n                    }\n                },\n                dataLabels: {\n                    enabled: false\n                },\n                stroke: {\n                    width: 2\n                },\n\n                grid: {\n                    row: {\n                        colors: ['#fff', '#f2f2f2']\n                    }\n                },\n                xaxis: {\n                    labels: {\n                        rotate: -45\n                    },\n                    categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',\n                        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'\n                    ],\n                    tickPlacement: 'on'\n                },\n                yaxis: {\n                    title: {\n                        text: 'Count of Complaint',\n                    },\n                },\n                fill: {\n                    type: 'gradient',\n                    gradient: {\n                        shade: 'light',\n                        type: \"horizontal\",\n                        shadeIntensity: 0.25,\n                        gradientToColors: undefined,\n                        inverseColors: true,\n                        opacityFrom: 0.85,\n                        opacityTo: 0.85,\n                        stops: [50, 0, 100]\n                    },\n                }\n            }\n            //******* */\n\n            this.barProjectOptions = {\n\n                chart: {\n                    height: 350,\n                    type: 'bar',\n                },\n                plotOptions: {\n                    bar: {\n                        borderRadius: 2,\n                        columnWidth: '50%',\n                    }\n                },\n                dataLabels: {\n                    enabled: false\n                },\n                stroke: {\n                    width: 2\n                },\n\n                grid: {\n                    row: {\n                        colors: ['#fff', '#f2f2f2']\n                    }\n                },\n                xaxis: {\n                    labels: {\n                        rotate: -45\n                    },\n                    categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',\n                        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'\n                    ],\n                    tickPlacement: 'on'\n                },\n                yaxis: {\n                    title: {\n                        text: 'Count of Complaint',\n                    },\n                },\n                fill: {\n                    type: 'gradient',\n                    gradient: {\n                        shade: 'light',\n                        type: \"horizontal\",\n                        shadeIntensity: 0.25,\n                        gradientToColors: undefined,\n                        inverseColors: true,\n                        opacityFrom: 0.85,\n                        opacityTo: 0.85,\n                        stops: [50, 0, 100]\n                    },\n                }\n            }\n\n        },\n        getLabel(val) {\n            if (typeof val === \"object\") {\n                return val.far_no + \" - \" + val.name;\n            } else {\n                return val;\n            }\n        },\n        async get_machine() {\n            axios\n                .get(\"/api/reports/machines\", {\n                    params: {\n                        site_id: this.search.site_id,\n                        category_id: this.search.category_id,\n                        sub_category_id: this.search.sub_category_id,\n                    },\n                })\n                .then((response) => {\n                    this.search_machines = response.data.data;\n                })\n                .catch(() => console.warn(\"Oh. Something went wrong\"));\n        },\n    },\n};\n</script>\n<style>\n#apexchartsdnt1 {\n    margin-left: -60px !important;\n}\n</style>\n"],"sourceRoot":""}]);

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
      ? _c("div", {}, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
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
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Quarter")
                          ]),
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
                                      var val =
                                        "_value" in o ? o._value : o.value
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
                                _vm._v("First")
                              ]),
                              _vm._v(" "),
                              _c("Option", { attrs: { value: "7-9" } }, [
                                _vm._v("Second")
                              ]),
                              _vm._v(" "),
                              _c("Option", { attrs: { value: "10-12" } }, [
                                _vm._v("Third")
                              ]),
                              _vm._v(" "),
                              _c("Option", { attrs: { value: "1-3" } }, [
                                _vm._v("Fourth")
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
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Month")
                          ]),
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
                                      var val =
                                        "_value" in o ? o._value : o.value
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
                                  [
                                    _vm._v(
                                      _vm._s(it) +
                                        "\n                                    "
                                    )
                                  ]
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
                          [_vm._v("\\\n                                ")]
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
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row row-eq-height mt-2" }, [
            _c("div", { staticClass: "col-md-7" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "card-body p-1" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "row text-center" }, [
                      _c("div", { staticClass: "col-4 p-1" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "info-box" }, [
                              _vm._m(3),
                              _vm._v(" "),
                              _c("div", { staticClass: "info-box-content" }, [
                                _c("span", { staticClass: "info-box-text" }, [
                                  _vm._v("Total Complaint")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "info-box-number" }, [
                                  _vm._v(_vm._s(_vm.records.total_tickets))
                                ])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "info-box" }, [
                              _vm._m(4),
                              _vm._v(" "),
                              _c("div", { staticClass: "info-box-content" }, [
                                _c("span", { staticClass: "info-box-text" }, [
                                  _vm._v("Closed Call")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "info-box-number" }, [
                                  _vm._v(_vm._s(_vm.records.closed_tickets))
                                ])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "info-box" }, [
                              _vm._m(5),
                              _vm._v(" "),
                              _c("div", { staticClass: "info-box-content" }, [
                                _c("span", { staticClass: "info-box-text" }, [
                                  _vm._v("Open Call")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "info-box-number" }, [
                                  _vm._v(_vm._s(_vm.records.open_tickets))
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-4 p-1" },
                        [
                          _c("apexchart", {
                            attrs: {
                              width: "380",
                              type: "donut",
                              options: _vm.donutChartOptions,
                              series: _vm.records.complain_nature_chart.series
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4 p-1" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "info-box" }, [
                              _vm._m(6),
                              _vm._v(" "),
                              _c("div", { staticClass: "info-box-content" }, [
                                _c("span", { staticClass: "info-box-text" }, [
                                  _vm._v("Avg TAT (Days)")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "info-box-number" }, [
                                  _vm._v(_vm._s(_vm.records.avg_tat))
                                ])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "info-box" }, [
                              _vm._m(7),
                              _vm._v(" "),
                              _c("div", { staticClass: "info-box-content" }, [
                                _c("span", { staticClass: "info-box-text" }, [
                                  _vm._v("Within TAT")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "info-box-number" }, [
                                  _vm._v(_vm._s(_vm.records.within_tat))
                                ])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "info-box" }, [
                              _vm._m(8),
                              _vm._v(" "),
                              _c("div", { staticClass: "info-box-content" }, [
                                _c("span", { staticClass: "info-box-text" }, [
                                  _vm._v("Exceeding TAT")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "info-box-number" }, [
                                  _vm._v(_vm._s(_vm.records.exceeding_tat))
                                ])
                              ])
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
            _c("div", { staticClass: "col-md-5" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(9),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body p-1" },
                  [
                    _c("apexchart", {
                      ref: "barCountChart",
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
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(10),
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
          _vm._m(11),
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3 col-sm-6 col-12" }, [
        _c("div", { staticClass: "info-box bg-danger" }, [
          _c("span", { staticClass: "info-box-icon" }, [
            _c("i", { staticClass: "fas fa-comments" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info-box-content" }, [
            _c("span", { staticClass: "info-box-text" }, [_vm._v("Comments")]),
            _vm._v(" "),
            _c("span", { staticClass: "info-box-number" }, [_vm._v("41,410")]),
            _vm._v(" "),
            _c("div", { staticClass: "progress" }, [
              _c("div", {
                staticClass: "progress-bar",
                staticStyle: { width: "70%" }
              })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "progress-description" }, [
              _vm._v(
                "\n                            70% Increase in 30 Days\n                        "
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3 col-sm-6 col-12" }, [
        _c("div", { staticClass: "info-box bg-warning" }, [
          _c("span", { staticClass: "info-box-icon" }, [
            _c("i", { staticClass: "far fa-calendar-alt" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info-box-content" }, [
            _c("span", { staticClass: "info-box-text" }, [_vm._v("Events")]),
            _vm._v(" "),
            _c("span", { staticClass: "info-box-number" }, [_vm._v("41,410")]),
            _vm._v(" "),
            _c("div", { staticClass: "progress" }, [
              _c("div", {
                staticClass: "progress-bar",
                staticStyle: { width: "70%" }
              })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "progress-description" }, [
              _vm._v(
                "\n                            70% Increase in 30 Days\n                        "
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3 col-sm-6 col-12" }, [
        _c("div", { staticClass: "info-box bg-success" }, [
          _c("span", { staticClass: "info-box-icon" }, [
            _c("i", { staticClass: "far fa-thumbs-up" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info-box-content" }, [
            _c("span", { staticClass: "info-box-text" }, [_vm._v("Likes")]),
            _vm._v(" "),
            _c("span", { staticClass: "info-box-number" }, [_vm._v("41,410")]),
            _vm._v(" "),
            _c("div", { staticClass: "progress" }, [
              _c("div", {
                staticClass: "progress-bar",
                staticStyle: { width: "70%" }
              })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "progress-description" }, [
              _vm._v(
                "\n                            70% Increase in 30 Days\n                        "
              )
            ])
          ])
        ])
      ])
    ])
  },
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
    return _c("span", { staticClass: "info-box-icon bg-info" }, [
      _c("i", { staticClass: "fa fa-gavel" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "info-box-icon bg-success" }, [
      _c("i", { staticClass: "fa fa-lock" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "info-box-icon bg-danger" }, [
      _c("i", { staticClass: "fa fa-unlock" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "info-box-icon bg-info" }, [
      _c("i", { staticClass: "far fa-envelope" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "info-box-icon bg-info" }, [
      _c("i", { staticClass: "far fa-envelope" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "info-box-icon bg-info" }, [
      _c("i", { staticClass: "far fa-envelope" })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlPzczYTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZT83NjFlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWU/MzY5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJyZWNvcmRzIiwic2VhcmNoIiwiZmluYW5jaWFsX3llYXIiLCJxdWFydGVyIiwibW9udGgiLCJkYXRlX2Zyb20iLCJkYXRlX3RvIiwic2l0ZV9pZCIsImNhdGVnb3J5X2lkIiwic3ViX2NhdGVnb3J5X2lkIiwibWFjaGluZV9pZCIsIm1vbnRoTmFtZXMiLCJjaGFydE9wdGlvbnMiLCJjaGFydCIsImlkIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwic2VyaWVzIiwibmFtZSIsImRvbnV0U2VyaWVzIiwiZG9udXRDaGFydE9wdGlvbnMiLCJjb2xvcnMiLCJsYWJlbHMiLCJ0aXRsZSIsInRleHQiLCJhbGlnbiIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwib3B0aW9ucyIsIndpZHRoIiwibGVnZW5kIiwicG9zaXRpb24iLCJob3Jpem9udGFsQWxpZ24iLCJiYXJDb3VudE9wdGlvbnMiLCJ0eXBlIiwiaGVpZ2h0Iiwic3RhY2tlZCIsInBsb3RPcHRpb25zIiwiYmFyIiwiaG9yaXpvbnRhbCIsImRhdGFMYWJlbHMiLCJ0b3RhbCIsImVuYWJsZWQiLCJvZmZzZXRYIiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJzdHJva2UiLCJ5YXhpcyIsImZpbGwiLCJvcGFjaXR5IiwiYmFyRXF1aXBtZW50T3B0aW9ucyIsImJvcmRlclJhZGl1cyIsImNvbHVtbldpZHRoIiwiZ3JpZCIsInJvdyIsInJvdGF0ZSIsInRpY2tQbGFjZW1lbnQiLCJncmFkaWVudCIsInNoYWRlIiwic2hhZGVJbnRlbnNpdHkiLCJncmFkaWVudFRvQ29sb3JzIiwiaW52ZXJzZUNvbG9ycyIsIm9wYWNpdHlGcm9tIiwib3BhY2l0eVRvIiwic3RvcHMiLCJiYXJQcm9qZWN0T3B0aW9ucyIsImZpbmFuY2lhbF95ZWFycyIsInNlYXJjaF9tYWNoaW5lcyIsInNlYXJjaF9zaXRlcyIsInNlYXJjaF90aWNrZXRzIiwic3ViX2NhdGVnb3JpZXMiLCJzaXRlcyIsIm1hY2hpbmVzIiwidXBkYXRlZCIsIndhdGNoIiwiaGFuZGxlciIsImF4aW9zIiwidGhlbiIsImNhdGNoIiwiY29uc29sZSIsImRlZXAiLCJpbml0aWFsIiwiY3JlYXRlZCIsImJlZm9yZUNyZWF0ZSIsImdldCIsIm1vdW50ZWQiLCJtZXRob2RzIiwiYXNpZ25fZ3JhcGhzIiwiZ2V0TGFiZWwiLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Qyw2bEJBQWdSO0FBQzFSO0FBQ0E7QUFDaUk7QUFDYTtBQUM5STtBQUNnVztBQUNoVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NHO0FBQ3RHLGdCQUFnQix5R0FBa0I7QUFDbEMsRUFBRSwwSUFBYztBQUNoQixFQUFFLGtQQUFjO0FBQ2hCLEVBQUUsMlBBQXlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLEVBYVg7O0FBRVUsZ0ZBQWlCIiwiZmlsZSI6ImpzLzYuYnVuZGxlLjZlZjcyOGJlZWFiMzRlZjFkNjFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiXCIgdi1pZj1cInJlY29yZHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgY29sLXNtLTYgY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveCBiZy1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtaWNvblwiPjxpIGNsYXNzPVwiZmFzIGZhLWNvbW1lbnRzXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC10ZXh0XCI+Q29tbWVudHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC1udW1iZXJcIj40MSw0MTA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiBzdHlsZT1cIndpZHRoOiA3MCVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2dyZXNzLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcwJSBJbmNyZWFzZSBpbiAzMCBEYXlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtc20tNiBjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94IGJnLXdhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtaWNvblwiPjxpIGNsYXNzPVwiZmFyIGZhLWNhbGVuZGFyLWFsdFwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3gtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtdGV4dFwiPkV2ZW50czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LW51bWJlclwiPjQxLDQxMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhclwiIHN0eWxlPVwid2lkdGg6IDcwJVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZ3Jlc3MtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNzAlIEluY3JlYXNlIGluIDMwIERheXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbC1zbS02IGNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3ggYmctc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC1pY29uXCI+PGkgY2xhc3M9XCJmYXIgZmEtdGh1bWJzLXVwXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC10ZXh0XCI+TGlrZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC1udW1iZXJcIj40MSw0MTA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiBzdHlsZT1cIndpZHRoOiA3MCVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2dyZXNzLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcwJSBJbmNyZWFzZSBpbiAzMCBEYXlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRlciAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPkZZPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6b3B0aW9ucz1cImZpbmFuY2lhbF95ZWFyc1wiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IEZZLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoLmZpbmFuY2lhbF95ZWFyXCIgbmFtZT1cImZpbmFuY2lhbF95ZWFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIXNlYXJjaC5kYXRlX2Zyb20gJiYgIXNlYXJjaC5kYXRlX3RvICYmICFzZWFyY2gubW9udGggJiYgc2VhcmNoLmZpbmFuY2lhbF95ZWFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+UXVhcnRlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJzZWFyY2gucXVhcnRlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjQtNlwiPkZpcnN0PC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjctOVwiPlNlY29uZDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIxMC0xMlwiPlRoaXJkPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjEtM1wiPkZvdXJ0aDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgdi1pZj1cIiFzZWFyY2guZGF0ZV9mcm9tICYmICFzZWFyY2guZGF0ZV90byAmJiAhc2VhcmNoLnF1YXJ0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5Nb250aDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJzZWFyY2gubW9udGhcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gOnZhbHVlPVwiKHggKyAxKVwiIHYtZm9yPVwiKGl0LCB4KSBpbiBtb250aE5hbWVzXCIgOmtleT1cIidtJyArIHhcIj57eyBpdCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiB2LWlmPVwiIXNlYXJjaC5tb250aCAmJiAhc2VhcmNoLnF1YXJ0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5Gcm9tIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XCJBc2lhL0tvbGthdGFcIiB2LW1vZGVsPVwic2VhcmNoLmRhdGVfZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQtY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNyZWF0ZWQgZnJvbSBkYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiB2LWlmPVwiIXNlYXJjaC5tb250aCAmJiAhc2VhcmNoLnF1YXJ0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5UbyBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVwiQXNpYS9Lb2xrYXRhXCIgdi1tb2RlbD1cInNlYXJjaC5kYXRlX3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC1jbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ3JlYXRlZCB0byBkYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPlByb2plY3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJzaXRlX25hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJzZWFyY2hfc2l0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIFByb2plY3QuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnNpdGVfaWRcIiBuYW1lPVwic2l0ZV9pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5FcXVpcG1lbnQgQ2F0ZWdvcnk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwibmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cImNhdGVnb3JpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIENhdGVnb3J5IC4uLlwiIHYtbW9kZWw9XCJzZWFyY2guY2F0ZWdvcnlfaWRcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJzdWJfY2F0ZWdvcmllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgZGVzY3JpcHRpb24gLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5zdWJfY2F0ZWdvcnlfaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sICBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5FcXVpcG1lbnQgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOmdldC1vcHRpb24tbGFiZWw9XCJnZXRMYWJlbFwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwic2VhcmNoX21hY2hpbmVzXCIgcGxhY2Vob2xkZXI9XCJDaG9vc2UgRXF1aXBtZW50IC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaC5tYWNoaW5lX2lkXCIgbmFtZT1cIm1hY2hpbmVfaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy1lcS1oZWlnaHQgbXQtMlwiPlxuICAgICAgICAgICAgICAgIDwhLS0gTGVmdCBjb2wgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTUFQICYgQk9YIFBBTkUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+Q29tcGxhaW48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi10b29sXCIgZGF0YS1jYXJkLXdpZGdldD1cImNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1taW51c1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRlciAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHRleHQtY2VudGVyXCI+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IHAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC1pY29uIGJnLWluZm9cIj48aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1nYXZlbFwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC10ZXh0XCI+VG90YWwgQ29tcGxhaW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LW51bWJlclwiPnt7IHJlY29yZHMudG90YWxfdGlja2V0cyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LWljb24gYmctc3VjY2Vzc1wiPjxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWxvY2tcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtdGV4dFwiPkNsb3NlZCBDYWxsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LW51bWJlclwiPnt7IHJlY29yZHMuY2xvc2VkX3RpY2tldHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtaWNvbiBiZy1kYW5nZXJcIj48aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS11bmxvY2tcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtdGV4dFwiPk9wZW4gQ2FsbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC1udW1iZXJcIj57eyByZWNvcmRzLm9wZW5fdGlja2V0cyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IHAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcGV4Y2hhcnQgd2lkdGg9XCIzODBcIiB0eXBlPVwiZG9udXRcIiA6b3B0aW9ucz1cImRvbnV0Q2hhcnRPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcmllcz1cInJlY29yZHMuY29tcGxhaW5fbmF0dXJlX2NoYXJ0LnNlcmllc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBleGNoYXJ0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LWljb24gYmctaW5mb1wiPjxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhciBmYS1lbnZlbG9wZVwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC10ZXh0XCI+QXZnIFRBVCAoRGF5cyk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtbnVtYmVyXCI+e3sgcmVjb3Jkcy5hdmdfdGF0IH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtaWNvbiBiZy1pbmZvXCI+PGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFyIGZhLWVudmVsb3BlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3gtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LXRleHRcIj5XaXRoaW4gVEFUPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LW51bWJlclwiPnt7IHJlY29yZHMud2l0aGluX3RhdCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LWljb24gYmctaW5mb1wiPjxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhciBmYS1lbnZlbG9wZVwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC10ZXh0XCI+RXhjZWVkaW5nIFRBVDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC1udW1iZXJcIj57eyByZWNvcmRzLmV4Y2VlZGluZ190YXQgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1ib2R5IC0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZVwiPkNvdW50IG9mIENvbXBsYWludCBOYXR1cmUgYnkgRlksIFF1YXJ0ZXIgYW5kIENhbGwgU3RhdHVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10b29sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tdG9vbFwiIGRhdGEtY2FyZC13aWRnZXQ9XCJjb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbWludXNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcGV4Y2hhcnQgdHlwZT1cImJhclwiIHJlZj1cImJhckNvdW50Q2hhcnRcIiBoZWlnaHQ9XCIzMjhcIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDMyOHB4ICFpbXBvcnRhbnQ7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJyZWNvcmRzLmJhckNvdW50Q2hhcnQub3B0aW9uc1wiIDpzZXJpZXM9XCJyZWNvcmRzLmJhckNvdW50Q2hhcnQuc2VyaWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcGV4Y2hhcnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gLy5jYXJkIC0tPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSAvLmNvbCAtLT5cblxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj5Db3VudCBvZiBDb21wbGFpbnQgYnkgRXF1aXBtZW50IFR5cGU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdG9vbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tdG9vbFwiIGRhdGEtY2FyZC13aWRnZXQ9XCJjb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1taW51c1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcGV4Y2hhcnQgdHlwZT1cImJhclwiIGhlaWdodD1cIjM1MFwiIDpvcHRpb25zPVwicmVjb3Jkcy5FcXVpcG1lbnRDaGFydC5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2VyaWVzPVwicmVjb3Jkcy5FcXVpcG1lbnRDaGFydC5zZXJpZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBleGNoYXJ0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+Q291bnQgb2YgQ29tcGxhaW50IGJ5IFByb2plY3Q8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdG9vbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tdG9vbFwiIGRhdGEtY2FyZC13aWRnZXQ9XCJjb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1taW51c1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcGV4Y2hhcnQgdHlwZT1cImJhclwiIGhlaWdodD1cIjM1MFwiIDpvcHRpb25zPVwicmVjb3Jkcy5Qcm9qZWN0Q2hhcnQub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcmllcz1cInJlY29yZHMuUHJvamVjdENoYXJ0LnNlcmllc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcGV4Y2hhcnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwhLS0gLy5jb2wgLS0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIC8ucm93IC0tPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLS8uIGNvbnRhaW5lci1mbHVpZCAtLT5cbiAgICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlY29yZHM6ICcnLFxuICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgZmluYW5jaWFsX3llYXI6ICcnLFxuICAgICAgICAgICAgICAgIHF1YXJ0ZXI6ICcnLFxuICAgICAgICAgICAgICAgIG1vbnRoOiAnJyxcbiAgICAgICAgICAgICAgICBkYXRlX2Zyb206ICcnLFxuICAgICAgICAgICAgICAgIGRhdGVfdG86ICcnLFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiAnJyxcbiAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9udGhOYW1lczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIixcbiAgICAgICAgICAgICAgICBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXSxcblxuICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidnVlY2hhcnQtZXhhbXBsZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWzE5OTEsIDE5OTIsIDE5OTMsIDE5OTQsIDE5OTUsIDE5OTYsIDE5OTcsIDE5OThdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNlcmllcy0xXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgNDAsIDM1LCA1MCwgNDksIDYwLCA3MCwgOTFdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICAvLyoqKioqKioqKioqICovXG5cbiAgICAgICAgICAgIGRvbnV0U2VyaWVzOiBbNDQsIDU1XSxcbiAgICAgICAgICAgIGRvbnV0Q2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJyMwMDQ0ODgnLCAnIzM4YzE3MiddLFxuXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZG50MVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFtcIk1ham9yXCIsIFwiTWlub3JcIl0sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJDb21wbGFpbnQgTmF0dXJlXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYmFyQ291bnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxuICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZmJ11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDYWxsIFN0YXR1cydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtcIlF1YXJ0ZXIgMVwiLCBcIlF1YXJ0ZXIgMlwiLCBcIlF1YXJ0ZXIgM1wiLCBcIlF1YXJ0ZXIgNFwiXSxcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiA0MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGJhckVxdWlwbWVudE9wdGlvbnM6IHtcblxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgICAgICByb3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZmJywgJyNmMmYyZjInXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogLTQ1XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnQXBwbGVzJywgJ09yYW5nZXMnLCAnU3RyYXdiZXJyaWVzJywgJ1BpbmVhcHBsZXMnLCAnTWFuZ29lcycsICdCYW5hbmFzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdCbGFja2JlcnJpZXMnLCAnUGVhcnMnLCAnV2F0ZXJtZWxvbnMnLCAnQ2hlcnJpZXMnLCAnUG9tZWdyYW5hdGVzJywgJ1RhbmdlcmluZXMnLCAnUGFwYXlhcydcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgdGlja1BsYWNlbWVudDogJ29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb3VudCBvZiBDb21wbGFpbnQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ3JhZGllbnQnLFxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGU6ICdsaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAwLjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRUb0NvbG9yczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJzZUNvbG9yczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlGcm9tOiAwLjg1LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eVRvOiAwLjg1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHM6IFs1MCwgMCwgMTAwXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyoqKioqKiogKi9cblxuICAgICAgICAgICAgYmFyUHJvamVjdE9wdGlvbnM6IHtcblxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgICAgICByb3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZmJywgJyNmMmYyZjInXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogLTQ1XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnQXBwbGVzJywgJ09yYW5nZXMnLCAnU3RyYXdiZXJyaWVzJywgJ1BpbmVhcHBsZXMnLCAnTWFuZ29lcycsICdCYW5hbmFzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdCbGFja2JlcnJpZXMnLCAnUGVhcnMnLCAnV2F0ZXJtZWxvbnMnLCAnQ2hlcnJpZXMnLCAnUG9tZWdyYW5hdGVzJywgJ1RhbmdlcmluZXMnLCAnUGFwYXlhcydcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgdGlja1BsYWNlbWVudDogJ29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb3VudCBvZiBDb21wbGFpbnQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ3JhZGllbnQnLFxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGU6ICdsaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAwLjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRUb0NvbG9yczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJzZUNvbG9yczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlGcm9tOiAwLjg1LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eVRvOiAwLjg1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHM6IFs1MCwgMCwgMTAwXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGZpbmFuY2lhbF95ZWFyczogW10sXG4gICAgICAgICAgICBzZWFyY2hfbWFjaGluZXM6IFtdLFxuICAgICAgICAgICAgc2VhcmNoX3NpdGVzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaF90aWNrZXRzOiBbXSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXM6IFtdLFxuICAgICAgICAgICAgc2l0ZXM6IFtdLFxuICAgICAgICAgICAgbWFjaGluZXM6IFtdLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgdXBkYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmFzaWduX2dyYXBocygpOyBcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgICdzZWFyY2gucXVhcnRlcicobikge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX2Zyb20gPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfdG8gPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLm1vbnRoID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3NlYXJjaC5kYXRlX2Zyb20nKG4pIHtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gubW9udGggPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnF1YXJ0ZXIgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnc2VhcmNoLmRhdGVfdG8nKG4pIHtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gubW9udGggPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnF1YXJ0ZXIgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnc2VhcmNoLm1vbnRoJyhuKSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfZnJvbSA9ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV90byA9ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gucXVhcnRlciA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2FwaS9kYXNoYm9hcmQnLCB0aGlzLnNlYXJjaClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlcy5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyRXF1aXBtZW50T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5FcXVpcG1lbnRDaGFydC5vcHRpb25zLnhheGlzLmNhdGVnb3JpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyUHJvamVjdE9wdGlvbnMueGF4aXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuUHJvamVjdENoYXJ0Lm9wdGlvbnMueGF4aXMuY2F0ZWdvcmllc1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuYmFyQ291bnRDaGFydC51cGRhdGVTZXJpZXModGhpcy5yZWNvcmRzLmJhckNvdW50Q2hhcnQuc2VyaWVzLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5iYXJDb3VudENoYXJ0LnVwZGF0ZU9wdGlvbnModGhpcy5yZWNvcmRzLmJhckNvdW50Q2hhcnQub3B0aW9ucywgZmFsc2UsIHRydWUpXG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBcInNlYXJjaC5zdWJfY2F0ZWdvcnlfaWRcIihuLCBvKSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgXCJzZWFyY2guc2l0ZV9pZFwiKG4sIG8pIHtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwic2VhcmNoLmNhdGVnb3J5X2lkXCI6IHtcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuLCBvKSB7XG4gICAgICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2NhdGVnb3J5L1wiICsgbikudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yl9jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJhckVxdWlwbWVudE9wdGlvbnMueGF4aXMpO1xuICAgICAgICB2YXIgeWVhcnNMZW5ndGggPSAzMDtcbiAgICAgICAgdmFyIGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBmb3IgKHZhciBpID0gMjAyMjsgaSA8PSBjdXJyZW50WWVhcjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmV4dCA9IGkgKyAxO1xuICAgICAgICAgICAgdmFyIHllYXIgPSBpICsgJy0nICsgbmV4dC50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5maW5hbmNpYWxfeWVhcnMucHVzaCh5ZWFyKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgICAgIGF4aW9zLnBvc3QoJ2FwaS9kYXNoYm9hcmQnLCB0aGlzLnNlYXJjaClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRzID0gcmVzLmRhdGEuZGF0YVxuXG4gICAgICAgICAgICAgICAgdGhpcy5iYXJFcXVpcG1lbnRPcHRpb25zLnhheGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLkVxdWlwbWVudENoYXJ0Lm9wdGlvbnMueGF4aXMuY2F0ZWdvcmllc1xuICAgICAgICAgICAgICAgIHRoaXMuYmFyUHJvamVjdE9wdGlvbnMueGF4aXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuUHJvamVjdENoYXJ0Lm9wdGlvbnMueGF4aXMuY2F0ZWdvcmllc1xuXG4gICAgICAgICAgICAgICAgdGhpcy5iYXJDb3VudE9wdGlvbnMueGF4aXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuYmFyQ291bnRDaGFydC5vcHRpb25zLnhheGlzLmNhdGVnb3JpZXNcbiAgICAgICAgICAgICAgICB0aGlzLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2dldF9wcmVfbWFjaGluZVwiKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuQ2F0ZWdvcnk7XG4gICAgICAgICAgICB0aGlzLnNpdGVzID0gcmVzLmRhdGEuZGF0YS5zaXRlcztcbiAgICAgICAgfSk7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAuZ2V0KFwiL2FwaS9pbml0aWFsX3RpY2tldFwiKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS52ZW5kb3JzO1xuICAgICAgICAgICAgICAgIHRoaXMubWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfbWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2l0ZXMgPSByZXNwb25zZS5kYXRhLmRhdGEuc2l0ZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkX3VzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLmNyZWF0ZWRfdXNlcnM7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybihcIk9oLiBTb21ldGhpbmcgd2VudCB3cm9uZ1wiKSk7XG5cblxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuJGdhdGUuaXNBZG1pbigpKSB7XG4gICAgICAgIC8vICAgICAvLyB0aGlzLiRyb3V0ZXIucHVzaCgnL3VzZXJzJykuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL3RpY2tldHNcIikuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgLy8gfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhc2lnbl9ncmFwaHMoKSB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZHMgPSB0aGlzLnJlY29yZHNcbiAgICAgICAgICAgIHRoaXMuY2hhcnRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInZ1ZWNoYXJ0LWV4YW1wbGVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsxOTkxLCAxOTkyLCAxOTkzLCAxOTk0LCAxOTk1LCAxOTk2LCAxOTk3LCAxOTk4XSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8qKioqKioqKioqKiAqLyBcbiAgICAgICAgICAgIHRoaXMuZG9udXRDaGFydE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJyMwMDY4YjknLCAnIzAwNjhiOWFkJ10sXG5cbiAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJkbnQxXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxhYmVsczogW1wiTWFqb3JcIiwgXCJNaW5vclwiXSxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkNvbXBsYWludCBOYXR1cmVcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbe1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYmFyQ291bnRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZiddXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2FsbCBTdGF0dXMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXCJRdWFydGVyIDFcIiwgXCJRdWFydGVyIDJcIiwgXCJRdWFydGVyIDNcIiwgXCJRdWFydGVyIDRcIl0sXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogNDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYmFyRXF1aXBtZW50T3B0aW9ucyA9IHtcblxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgICAgICByb3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZmJywgJyNmMmYyZjInXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogLTQ1XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnQXBwbGVzJywgJ09yYW5nZXMnLCAnU3RyYXdiZXJyaWVzJywgJ1BpbmVhcHBsZXMnLCAnTWFuZ29lcycsICdCYW5hbmFzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdCbGFja2JlcnJpZXMnLCAnUGVhcnMnLCAnV2F0ZXJtZWxvbnMnLCAnQ2hlcnJpZXMnLCAnUG9tZWdyYW5hdGVzJywgJ1RhbmdlcmluZXMnLCAnUGFwYXlhcydcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgdGlja1BsYWNlbWVudDogJ29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb3VudCBvZiBDb21wbGFpbnQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ3JhZGllbnQnLFxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGU6ICdsaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAwLjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRUb0NvbG9yczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJzZUNvbG9yczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlGcm9tOiAwLjg1LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eVRvOiAwLjg1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHM6IFs1MCwgMCwgMTAwXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vKioqKioqKiAqL1xuXG4gICAgICAgICAgICB0aGlzLmJhclByb2plY3RPcHRpb25zID0ge1xuXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMlxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyNmZmYnLCAnI2YyZjJmMiddXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAtNDVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydBcHBsZXMnLCAnT3JhbmdlcycsICdTdHJhd2JlcnJpZXMnLCAnUGluZWFwcGxlcycsICdNYW5nb2VzJywgJ0JhbmFuYXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0JsYWNrYmVycmllcycsICdQZWFycycsICdXYXRlcm1lbG9ucycsICdDaGVycmllcycsICdQb21lZ3JhbmF0ZXMnLCAnVGFuZ2VyaW5lcycsICdQYXBheWFzJ1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB0aWNrUGxhY2VtZW50OiAnb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NvdW50IG9mIENvbXBsYWludCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdncmFkaWVudCcsXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkZTogJ2xpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGVJbnRlbnNpdHk6IDAuMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFRvQ29sb3JzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlQ29sb3JzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eUZyb206IDAuODUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5VG86IDAuODUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wczogWzUwLCAwLCAxMDBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgICAgIGdldExhYmVsKHZhbCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmZhcl9ubyArIFwiIC0gXCIgKyB2YWwubmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgZ2V0X21hY2hpbmUoKSB7XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5nZXQoXCIvYXBpL3JlcG9ydHMvbWFjaGluZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVfaWQ6IHRoaXMuc2VhcmNoLnNpdGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeV9pZDogdGhpcy5zZWFyY2guY2F0ZWdvcnlfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6IHRoaXMuc2VhcmNoLnN1Yl9jYXRlZ29yeV9pZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oXCJPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmdcIikpO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuPC9zY3JpcHQ+XG48c3R5bGU+XG4jYXBleGNoYXJ0c2RudDEge1xuICAgIG1hcmdpbi1sZWZ0OiAtNjBweCAhaW1wb3J0YW50O1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jYXBleGNoYXJ0c2RudDEge1xcbiAgICBtYXJnaW4tbGVmdDogLTYwcHggIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkY6L3dhbXA2NC93d3cvcm1tL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFzNEJBO0lBQ0EsOEJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiXFxcIiB2LWlmPVxcXCJyZWNvcmRzXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMyBjb2wtc20tNiBjb2wtMTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3ggYmctZGFuZ2VyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtaWNvblxcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1jb21tZW50c1xcXCI+PC9pPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LXRleHRcXFwiPkNvbW1lbnRzPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtbnVtYmVyXFxcIj40MSw0MTA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzLWJhclxcXCIgc3R5bGU9XFxcIndpZHRoOiA3MCVcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInByb2dyZXNzLWRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcwJSBJbmNyZWFzZSBpbiAzMCBEYXlzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgY29sLXNtLTYgY29sLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm8tYm94IGJnLXdhcm5pbmdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC1pY29uXFxcIj48aSBjbGFzcz1cXFwiZmFyIGZhLWNhbGVuZGFyLWFsdFxcXCI+PC9pPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LXRleHRcXFwiPkV2ZW50czwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LW51bWJlclxcXCI+NDEsNDEwPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzcy1iYXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNzAlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwcm9ncmVzcy1kZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA3MCUgSW5jcmVhc2UgaW4gMzAgRGF5c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIGNvbC1zbS02IGNvbC0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveCBiZy1zdWNjZXNzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtaWNvblxcXCI+PGkgY2xhc3M9XFxcImZhciBmYS10aHVtYnMtdXBcXFwiPjwvaT48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3gtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC10ZXh0XFxcIj5MaWtlczwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LW51bWJlclxcXCI+NDEsNDEwPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzcy1iYXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNzAlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwcm9ncmVzcy1kZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA3MCUgSW5jcmVhc2UgaW4gMzAgRGF5c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuXFxuXFxuXFxuXFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRlciAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLXJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIlxcXCI+Rlk8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6b3B0aW9ucz1cXFwiZmluYW5jaWFsX3llYXJzXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VsZWN0IEZZLi4uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2guZmluYW5jaWFsX3llYXJcXFwiIG5hbWU9XFxcImZpbmFuY2lhbF95ZWFyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiIXNlYXJjaC5kYXRlX2Zyb20gJiYgIXNlYXJjaC5kYXRlX3RvICYmICFzZWFyY2gubW9udGggJiYgc2VhcmNoLmZpbmFuY2lhbF95ZWFyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJcXFwiPlF1YXJ0ZXI8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cXFwic2VhcmNoLnF1YXJ0ZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJcXFwiPi0tPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XFxcIjQtNlxcXCI+Rmlyc3Q8L09wdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cXFwiNy05XFxcIj5TZWNvbmQ8L09wdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cXFwiMTAtMTJcXFwiPlRoaXJkPC9PcHRpb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XFxcIjEtM1xcXCI+Rm91cnRoPC9PcHRpb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCIgdi1pZj1cXFwiIXNlYXJjaC5kYXRlX2Zyb20gJiYgIXNlYXJjaC5kYXRlX3RvICYmICFzZWFyY2gucXVhcnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiXFxcIj5Nb250aDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVxcXCJzZWFyY2gubW9udGhcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJcXFwiPi0tPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gOnZhbHVlPVxcXCIoeCArIDEpXFxcIiB2LWZvcj1cXFwiKGl0LCB4KSBpbiBtb250aE5hbWVzXFxcIiA6a2V5PVxcXCInbScgKyB4XFxcIj57eyBpdCB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIiB2LWlmPVxcXCIhc2VhcmNoLm1vbnRoICYmICFzZWFyY2gucXVhcnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiXFxcIj5Gcm9tIERhdGU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVxcXCJBc2lhL0tvbGthdGFcXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5kYXRlX2Zyb21cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LWNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJDcmVhdGVkIGZyb20gZGF0ZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIiB2LWlmPVxcXCIhc2VhcmNoLm1vbnRoICYmICFzZWFyY2gucXVhcnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiXFxcIj5UbyBEYXRlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXRpbWUgdmFsdWUtem9uZT1cXFwiQXNpYS9Lb2xrYXRhXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guZGF0ZV90b1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQtY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkNyZWF0ZWQgdG8gZGF0ZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJcXFwiPlByb2plY3QgTmFtZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJzaXRlX25hbWVcXFwiIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCIgOm9wdGlvbnM9XFxcInNlYXJjaF9zaXRlc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkNob29zZSBQcm9qZWN0Li4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guc2l0ZV9pZFxcXCIgbmFtZT1cXFwic2l0ZV9pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJcXFwiPkVxdWlwbWVudCBDYXRlZ29yeTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJuYW1lXFxcIiA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiIDpvcHRpb25zPVxcXCJjYXRlZ29yaWVzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQ2hvb3NlIENhdGVnb3J5IC4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLmNhdGVnb3J5X2lkXFxcIj5cXFxcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sICBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIlxcXCI+RGVzY3JpcHRpb248L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwibmFtZVxcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIiA6b3B0aW9ucz1cXFwic3ViX2NhdGVnb3JpZXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJDaG9vc2UgZGVzY3JpcHRpb24gLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guc3ViX2NhdGVnb3J5X2lkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgIFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiXFxcIj5FcXVpcG1lbnQgTmFtZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJuYW1lXFxcIiA6Z2V0LW9wdGlvbi1sYWJlbD1cXFwiZ2V0TGFiZWxcXFwiIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XFxcInNlYXJjaF9tYWNoaW5lc1xcXCIgcGxhY2Vob2xkZXI9XFxcIkNob29zZSBFcXVpcG1lbnQgLi4uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2gubWFjaGluZV9pZFxcXCIgbmFtZT1cXFwibWFjaGluZV9pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgcm93LWVxLWhlaWdodCBtdC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgPCEtLSBMZWZ0IGNvbCAtLT5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBNQVAgJiBCT1ggUEFORSAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5Db21wbGFpbjwvaDM+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdG9vbHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXRvb2xcXFwiIGRhdGEtY2FyZC13aWRnZXQ9XFxcImNvbGxhcHNlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLW1pbnVzXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQtaGVhZGVyIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSBwLTFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IHRleHQtY2VudGVyXFxcIj5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgcC0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3hcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtaWNvbiBiZy1pbmZvXFxcIj48aVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmYSBmYS1nYXZlbFxcXCI+PC9pPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3gtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtdGV4dFxcXCI+VG90YWwgQ29tcGxhaW50PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LW51bWJlclxcXCI+e3sgcmVjb3Jkcy50b3RhbF90aWNrZXRzIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC1pY29uIGJnLXN1Y2Nlc3NcXFwiPjxpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZhIGZhLWxvY2tcXFwiPjwvaT48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm8tYm94LWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LXRleHRcXFwiPkNsb3NlZCBDYWxsPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LW51bWJlclxcXCI+e3sgcmVjb3Jkcy5jbG9zZWRfdGlja2V0c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC1pY29uIGJnLWRhbmdlclxcXCI+PGlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrXFxcIj48L2k+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC10ZXh0XFxcIj5PcGVuIENhbGw8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtbnVtYmVyXFxcIj57eyByZWNvcmRzLm9wZW5fdGlja2V0cyB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgcC0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFwZXhjaGFydCB3aWR0aD1cXFwiMzgwXFxcIiB0eXBlPVxcXCJkb251dFxcXCIgOm9wdGlvbnM9XFxcImRvbnV0Q2hhcnRPcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcmllcz1cXFwicmVjb3Jkcy5jb21wbGFpbl9uYXR1cmVfY2hhcnQuc2VyaWVzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcGV4Y2hhcnQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgcC0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3hcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtaWNvbiBiZy1pbmZvXFxcIj48aVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmYXIgZmEtZW52ZWxvcGVcXFwiPjwvaT48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm8tYm94LWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LXRleHRcXFwiPkF2ZyBUQVQgKERheXMpPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LW51bWJlclxcXCI+e3sgcmVjb3Jkcy5hdmdfdGF0IH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC1pY29uIGJnLWluZm9cXFwiPjxpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZhciBmYS1lbnZlbG9wZVxcXCI+PC9pPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3gtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtdGV4dFxcXCI+V2l0aGluIFRBVDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC1udW1iZXJcXFwiPnt7IHJlY29yZHMud2l0aGluX3RhdCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3hcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtaWNvbiBiZy1pbmZvXFxcIj48aVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmYXIgZmEtZW52ZWxvcGVcXFwiPjwvaT48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm8tYm94LWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LXRleHRcXFwiPkV4Y2VlZGluZyBUQVQ8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtbnVtYmVyXFxcIj57eyByZWNvcmRzLmV4Y2VlZGluZ190YXQgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1ib2R5IC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQgLS0+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC01XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5Db3VudCBvZiBDb21wbGFpbnQgTmF0dXJlIGJ5IEZZLCBRdWFydGVyIGFuZCBDYWxsIFN0YXR1czwvaDM+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdG9vbHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXRvb2xcXFwiIGRhdGEtY2FyZC13aWRnZXQ9XFxcImNvbGxhcHNlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLW1pbnVzXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHAtMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcGV4Y2hhcnQgdHlwZT1cXFwiYmFyXFxcIiByZWY9XFxcImJhckNvdW50Q2hhcnRcXFwiIGhlaWdodD1cXFwiMzI4XFxcIiBzdHlsZT1cXFwibWF4LWhlaWdodDogMzI4cHggIWltcG9ydGFudDtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwicmVjb3Jkcy5iYXJDb3VudENoYXJ0Lm9wdGlvbnNcXFwiIDpzZXJpZXM9XFxcInJlY29yZHMuYmFyQ291bnRDaGFydC5zZXJpZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FwZXhjaGFydD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8IS0tIC8uY2FyZCAtLT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPCEtLSAvLmNvbCAtLT5cXG5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5Db3VudCBvZiBDb21wbGFpbnQgYnkgRXF1aXBtZW50IFR5cGU8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdG9vbHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tdG9vbFxcXCIgZGF0YS1jYXJkLXdpZGdldD1cXFwiY29sbGFwc2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1taW51c1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHAtMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwZXhjaGFydCB0eXBlPVxcXCJiYXJcXFwiIGhlaWdodD1cXFwiMzUwXFxcIiA6b3B0aW9ucz1cXFwicmVjb3Jkcy5FcXVpcG1lbnRDaGFydC5vcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2VyaWVzPVxcXCJyZWNvcmRzLkVxdWlwbWVudENoYXJ0LnNlcmllc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcGV4Y2hhcnQ+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5Db3VudCBvZiBDb21wbGFpbnQgYnkgUHJvamVjdDwvaDM+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC10b29sc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi10b29sXFxcIiBkYXRhLWNhcmQtd2lkZ2V0PVxcXCJjb2xsYXBzZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLW1pbnVzXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgcC0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBleGNoYXJ0IHR5cGU9XFxcImJhclxcXCIgaGVpZ2h0PVxcXCIzNTBcXFwiIDpvcHRpb25zPVxcXCJyZWNvcmRzLlByb2plY3RDaGFydC5vcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2VyaWVzPVxcXCJyZWNvcmRzLlByb2plY3RDaGFydC5zZXJpZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBleGNoYXJ0PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDwhLS0gLy5jb2wgLS0+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwhLS0gLy5yb3cgLS0+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwhLS0vLiBjb250YWluZXItZmx1aWQgLS0+XFxuICAgIDwvc2VjdGlvbj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuZXhwb3J0IGRlZmF1bHQge1xcblxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICByZWNvcmRzOiAnJyxcXG4gICAgICAgICAgICBzZWFyY2g6IHtcXG4gICAgICAgICAgICAgICAgZmluYW5jaWFsX3llYXI6ICcnLFxcbiAgICAgICAgICAgICAgICBxdWFydGVyOiAnJyxcXG4gICAgICAgICAgICAgICAgbW9udGg6ICcnLFxcbiAgICAgICAgICAgICAgICBkYXRlX2Zyb206ICcnLFxcbiAgICAgICAgICAgICAgICBkYXRlX3RvOiAnJyxcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJydcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IFtcXFwiSmFudWFyeVxcXCIsIFxcXCJGZWJydWFyeVxcXCIsIFxcXCJNYXJjaFxcXCIsIFxcXCJBcHJpbFxcXCIsIFxcXCJNYXlcXFwiLCBcXFwiSnVuZVxcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJKdWx5XFxcIiwgXFxcIkF1Z3VzdFxcXCIsIFxcXCJTZXB0ZW1iZXJcXFwiLCBcXFwiT2N0b2JlclxcXCIsIFxcXCJOb3ZlbWJlclxcXCIsIFxcXCJEZWNlbWJlclxcXCJdLFxcblxcbiAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICBjaGFydDoge1xcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFxcXCJ2dWVjaGFydC1leGFtcGxlXFxcIixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsxOTkxLCAxOTkyLCAxOTkzLCAxOTk0LCAxOTk1LCAxOTk2LCAxOTk3LCAxOTk4XSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHNlcmllczogW1xcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcXFwic2VyaWVzLTFcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzMwLCA0MCwgMzUsIDUwLCA0OSwgNjAsIDcwLCA5MV0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXSxcXG5cXG4gICAgICAgICAgICAvLyoqKioqKioqKioqICovXFxuXFxuICAgICAgICAgICAgZG9udXRTZXJpZXM6IFs0NCwgNTVdLFxcbiAgICAgICAgICAgIGRvbnV0Q2hhcnRPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgIGNvbG9yczogWycjMDA0NDg4JywgJyMzOGMxNzInXSxcXG5cXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcXFwiZG50MVxcXCJcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXFxcIk1ham9yXFxcIiwgXFxcIk1pbm9yXFxcIl0sXFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcXFwiQ29tcGxhaW50IE5hdHVyZVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXFxuICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XFxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XSxcXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdjZW50ZXInLFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICBiYXJDb3VudE9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXFxuICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA5MDBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZiddXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2FsbCBTdGF0dXMnXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXFxcIlF1YXJ0ZXIgMVxcXCIsIFxcXCJRdWFydGVyIDJcXFwiLCBcXFwiUXVhcnRlciAzXFxcIiwgXFxcIlF1YXJ0ZXIgNFxcXCJdLFxcblxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1bmRlZmluZWRcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgIGZpbGw6IHtcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDQwXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIGJhckVxdWlwbWVudE9wdGlvbnM6IHtcXG5cXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICBiYXI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6ICc1MCUnLFxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyXFxuICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgIGdyaWQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIHJvdzoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZmJywgJyNmMmYyZjInXVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAtNDVcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0FwcGxlcycsICdPcmFuZ2VzJywgJ1N0cmF3YmVycmllcycsICdQaW5lYXBwbGVzJywgJ01hbmdvZXMnLCAnQmFuYW5hcycsXFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0JsYWNrYmVycmllcycsICdQZWFycycsICdXYXRlcm1lbG9ucycsICdDaGVycmllcycsICdQb21lZ3JhbmF0ZXMnLCAnVGFuZ2VyaW5lcycsICdQYXBheWFzJ1xcbiAgICAgICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgICAgIHRpY2tQbGFjZW1lbnQ6ICdvbidcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NvdW50IG9mIENvbXBsYWludCcsXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBmaWxsOiB7XFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ3JhZGllbnQnLFxcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkZTogJ2xpZ2h0JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwiaG9yaXpvbnRhbFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGVJbnRlbnNpdHk6IDAuMjUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRUb0NvbG9yczogdW5kZWZpbmVkLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVyc2VDb2xvcnM6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eUZyb206IDAuODUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eVRvOiAwLjg1LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BzOiBbNTAsIDAsIDEwMF1cXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIC8vKioqKioqKiAqL1xcblxcbiAgICAgICAgICAgIGJhclByb2plY3RPcHRpb25zOiB7XFxuXFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiAnNTAlJyxcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMlxcbiAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICBncmlkOiB7XFxuICAgICAgICAgICAgICAgICAgICByb3c6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZicsICcjZjJmMmYyJ11cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogLTQ1XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydBcHBsZXMnLCAnT3JhbmdlcycsICdTdHJhd2JlcnJpZXMnLCAnUGluZWFwcGxlcycsICdNYW5nb2VzJywgJ0JhbmFuYXMnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICdCbGFja2JlcnJpZXMnLCAnUGVhcnMnLCAnV2F0ZXJtZWxvbnMnLCAnQ2hlcnJpZXMnLCAnUG9tZWdyYW5hdGVzJywgJ1RhbmdlcmluZXMnLCAnUGFwYXlhcydcXG4gICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgICAgICB0aWNrUGxhY2VtZW50OiAnb24nXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XFxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb3VudCBvZiBDb21wbGFpbnQnLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZmlsbDoge1xcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dyYWRpZW50JyxcXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50OiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGU6ICdsaWdodCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcImhvcml6b250YWxcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAwLjI1LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VG9Db2xvcnM6IHVuZGVmaW5lZCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlQ29sb3JzOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlGcm9tOiAwLjg1LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlUbzogMC44NSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wczogWzUwLCAwLCAxMDBdXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICBmaW5hbmNpYWxfeWVhcnM6IFtdLFxcbiAgICAgICAgICAgIHNlYXJjaF9tYWNoaW5lczogW10sXFxuICAgICAgICAgICAgc2VhcmNoX3NpdGVzOiBbXSxcXG4gICAgICAgICAgICBzZWFyY2hfdGlja2V0czogW10sXFxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXFxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXM6IFtdLFxcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXFxuICAgICAgICB9O1xcbiAgICB9LFxcbiAgICB1cGRhdGVkOiBmdW5jdGlvbiAoKSB7XFxuICAgICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgLy8gdGhpcy5hc2lnbl9ncmFwaHMoKTsgXFxuICAgICAgICB9KVxcbiAgICB9LFxcbiAgICB3YXRjaDoge1xcbiAgICAgICAgJ3NlYXJjaC5xdWFydGVyJyhuKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV9mcm9tID0gJydcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV90byA9ICcnXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLm1vbnRoID0gJydcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgJ3NlYXJjaC5kYXRlX2Zyb20nKG4pIHtcXG4gICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnF1YXJ0ZXIgPSAnJ1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICAnc2VhcmNoLmRhdGVfdG8nKG4pIHtcXG4gICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnF1YXJ0ZXIgPSAnJ1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICAnc2VhcmNoLm1vbnRoJyhuKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV9mcm9tID0gJydcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV90byA9ICcnXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnF1YXJ0ZXIgPSAnJ1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBzZWFyY2g6IHtcXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobikge1xcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvZGFzaGJvYXJkJywgdGhpcy5zZWFyY2gpXFxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlcy5kYXRhLmRhdGFcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhckVxdWlwbWVudE9wdGlvbnMueGF4aXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuRXF1aXBtZW50Q2hhcnQub3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJQcm9qZWN0T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5Qcm9qZWN0Q2hhcnQub3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzXFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5iYXJDb3VudENoYXJ0LnVwZGF0ZVNlcmllcyh0aGlzLnJlY29yZHMuYmFyQ291bnRDaGFydC5zZXJpZXMsIHRydWUpXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5iYXJDb3VudENoYXJ0LnVwZGF0ZU9wdGlvbnModGhpcy5yZWNvcmRzLmJhckNvdW50Q2hhcnQub3B0aW9ucywgZmFsc2UsIHRydWUpXFxuXFxuICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xcbiAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlZXA6IHRydWVcXG4gICAgICAgIH0sXFxuICAgICAgICBhc3luYyBcXFwic2VhcmNoLnN1Yl9jYXRlZ29yeV9pZFxcXCIobiwgbykge1xcbiAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgYXN5bmMgXFxcInNlYXJjaC5zaXRlX2lkXFxcIihuLCBvKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBcXFwic2VhcmNoLmNhdGVnb3J5X2lkXFxcIjoge1xcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuLCBvKSB7XFxuICAgICAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9jYXRlZ29yeS9cXFwiICsgbikudGhlbigocmVzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcXG4gICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYmFyRXF1aXBtZW50T3B0aW9ucy54YXhpcyk7XFxuICAgICAgICB2YXIgeWVhcnNMZW5ndGggPSAzMDtcXG4gICAgICAgIHZhciBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcXG4gICAgICAgIGZvciAodmFyIGkgPSAyMDIyOyBpIDw9IGN1cnJlbnRZZWFyOyBpKyspIHtcXG4gICAgICAgICAgICB2YXIgbmV4dCA9IGkgKyAxO1xcbiAgICAgICAgICAgIHZhciB5ZWFyID0gaSArICctJyArIG5leHQudG9TdHJpbmcoKTtcXG4gICAgICAgICAgICB0aGlzLmZpbmFuY2lhbF95ZWFycy5wdXNoKHllYXIpXFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcXG4gICAgICAgIGF4aW9zLnBvc3QoJ2FwaS9kYXNoYm9hcmQnLCB0aGlzLnNlYXJjaClcXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMgPSByZXMuZGF0YS5kYXRhXFxuXFxuICAgICAgICAgICAgICAgIHRoaXMuYmFyRXF1aXBtZW50T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5FcXVpcG1lbnRDaGFydC5vcHRpb25zLnhheGlzLmNhdGVnb3JpZXNcXG4gICAgICAgICAgICAgICAgdGhpcy5iYXJQcm9qZWN0T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5Qcm9qZWN0Q2hhcnQub3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzXFxuXFxuICAgICAgICAgICAgICAgIHRoaXMuYmFyQ291bnRPcHRpb25zLnhheGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLmJhckNvdW50Q2hhcnQub3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzXFxuICAgICAgICAgICAgICAgIHRoaXMuJGZvcmNlVXBkYXRlKCk7XFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xcbiAgICAgICAgICAgIH0pXFxuXFxuICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9nZXRfcHJlX21hY2hpbmVcXFwiKS50aGVuKChyZXMpID0+IHtcXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLkNhdGVnb3J5O1xcbiAgICAgICAgICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xcbiAgICAgICAgfSk7XFxuICAgICAgICBheGlvc1xcbiAgICAgICAgICAgIC5nZXQoXFxcIi9hcGkvaW5pdGlhbF90aWNrZXRcXFwiKVxcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnZlbmRvcnM7XFxuICAgICAgICAgICAgICAgIHRoaXMubWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaF9zaXRlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zaXRlcztcXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkX3VzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLmNyZWF0ZWRfdXNlcnM7XFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFxcXCJPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmdcXFwiKSk7XFxuXFxuXFxuICAgIH0sXFxuICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICAvLyBpZiAodGhpcy4kZ2F0ZS5pc0FkbWluKCkpIHtcXG4gICAgICAgIC8vICAgICAvLyB0aGlzLiRyb3V0ZXIucHVzaCgnL3VzZXJzJykuY2F0Y2goKCkgPT4geyB9KTtcXG4gICAgICAgIC8vIH0gZWxzZSB7XFxuICAgICAgICAvLyAgICAgdGhpcy4kcm91dGVyLnB1c2goXFxcIi90aWNrZXRzXFxcIikuY2F0Y2goKCkgPT4geyB9KTtcXG4gICAgICAgIC8vIH1cXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgYXNpZ25fZ3JhcGhzKCkge1xcbiAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHRoaXMucmVjb3Jkc1xcbiAgICAgICAgICAgIHRoaXMuY2hhcnRPcHRpb25zID0ge1xcbiAgICAgICAgICAgICAgICBjaGFydDoge1xcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFxcXCJ2dWVjaGFydC1leGFtcGxlXFxcIixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsxOTkxLCAxOTkyLCAxOTkzLCAxOTk0LCAxOTk1LCAxOTk2LCAxOTk3LCAxOTk4XSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLy8qKioqKioqKioqKiAqLyBcXG4gICAgICAgICAgICB0aGlzLmRvbnV0Q2hhcnRPcHRpb25zID0ge1xcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFsnIzAwNjhiOScsICcjMDA2OGI5YWQnXSxcXG5cXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcXFwiZG50MVxcXCJcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXFxcIk1ham9yXFxcIiwgXFxcIk1pbm9yXFxcIl0sXFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcXFwiQ29tcGxhaW50IE5hdHVyZVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXFxuICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XFxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XSxcXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdjZW50ZXInLFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHRoaXMuYmFyQ291bnRPcHRpb25zID0ge1xcbiAgICAgICAgICAgICAgICBjaGFydDoge1xcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICBiYXI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZmJ11cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDYWxsIFN0YXR1cydcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtcXFwiUXVhcnRlciAxXFxcIiwgXFxcIlF1YXJ0ZXIgMlxcXCIsIFxcXCJRdWFydGVyIDNcXFwiLCBcXFwiUXVhcnRlciA0XFxcIl0sXFxuXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XFxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVuZGVmaW5lZFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAgICAgZmlsbDoge1xcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogNDBcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB0aGlzLmJhckVxdWlwbWVudE9wdGlvbnMgPSB7XFxuXFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiAnNTAlJyxcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMlxcbiAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICBncmlkOiB7XFxuICAgICAgICAgICAgICAgICAgICByb3c6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZicsICcjZjJmMmYyJ11cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogLTQ1XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydBcHBsZXMnLCAnT3JhbmdlcycsICdTdHJhd2JlcnJpZXMnLCAnUGluZWFwcGxlcycsICdNYW5nb2VzJywgJ0JhbmFuYXMnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICdCbGFja2JlcnJpZXMnLCAnUGVhcnMnLCAnV2F0ZXJtZWxvbnMnLCAnQ2hlcnJpZXMnLCAnUG9tZWdyYW5hdGVzJywgJ1RhbmdlcmluZXMnLCAnUGFwYXlhcydcXG4gICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgICAgICB0aWNrUGxhY2VtZW50OiAnb24nXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XFxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb3VudCBvZiBDb21wbGFpbnQnLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZmlsbDoge1xcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dyYWRpZW50JyxcXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50OiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGU6ICdsaWdodCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcImhvcml6b250YWxcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAwLjI1LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VG9Db2xvcnM6IHVuZGVmaW5lZCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlQ29sb3JzOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlGcm9tOiAwLjg1LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlUbzogMC44NSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wczogWzUwLCAwLCAxMDBdXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC8vKioqKioqKiAqL1xcblxcbiAgICAgICAgICAgIHRoaXMuYmFyUHJvamVjdE9wdGlvbnMgPSB7XFxuXFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiAnNTAlJyxcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMlxcbiAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICBncmlkOiB7XFxuICAgICAgICAgICAgICAgICAgICByb3c6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZicsICcjZjJmMmYyJ11cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogLTQ1XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydBcHBsZXMnLCAnT3JhbmdlcycsICdTdHJhd2JlcnJpZXMnLCAnUGluZWFwcGxlcycsICdNYW5nb2VzJywgJ0JhbmFuYXMnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICdCbGFja2JlcnJpZXMnLCAnUGVhcnMnLCAnV2F0ZXJtZWxvbnMnLCAnQ2hlcnJpZXMnLCAnUG9tZWdyYW5hdGVzJywgJ1RhbmdlcmluZXMnLCAnUGFwYXlhcydcXG4gICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgICAgICB0aWNrUGxhY2VtZW50OiAnb24nXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XFxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb3VudCBvZiBDb21wbGFpbnQnLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZmlsbDoge1xcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dyYWRpZW50JyxcXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50OiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGU6ICdsaWdodCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcImhvcml6b250YWxcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAwLjI1LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VG9Db2xvcnM6IHVuZGVmaW5lZCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlQ29sb3JzOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlGcm9tOiAwLjg1LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlUbzogMC44NSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wczogWzUwLCAwLCAxMDBdXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgfSxcXG4gICAgICAgIGdldExhYmVsKHZhbCkge1xcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcXFwib2JqZWN0XFxcIikge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmZhcl9ubyArIFxcXCIgLSBcXFwiICsgdmFsLm5hbWU7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgYXN5bmMgZ2V0X21hY2hpbmUoKSB7XFxuICAgICAgICAgICAgYXhpb3NcXG4gICAgICAgICAgICAgICAgLmdldChcXFwiL2FwaS9yZXBvcnRzL21hY2hpbmVzXFxcIiwge1xcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZV9pZDogdGhpcy5zZWFyY2guc2l0ZV9pZCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeV9pZDogdGhpcy5zZWFyY2guY2F0ZWdvcnlfaWQsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiB0aGlzLnNlYXJjaC5zdWJfY2F0ZWdvcnlfaWQsXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFxcXCJPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmdcXFwiKSk7XFxuICAgICAgICB9LFxcbiAgICB9LFxcbn07XFxuPC9zY3JpcHQ+XFxuPHN0eWxlPlxcbiNhcGV4Y2hhcnRzZG50MSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNjBweCAhaW1wb3J0YW50O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX3ZtLnJlY29yZHNcbiAgICAgID8gX2MoXCJkaXZcIiwge30sIFtcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIlwiIH0gfSwgW192bS5fdihcIkZZXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmZpbmFuY2lhbF95ZWFycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QgRlkuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZpbmFuY2lhbF95ZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5maW5hbmNpYWxfeWVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImZpbmFuY2lhbF95ZWFyXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmZpbmFuY2lhbF95ZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgIV92bS5zZWFyY2guZGF0ZV9mcm9tICYmXG4gICAgICAgICAgICAgICAgICAgICFfdm0uc2VhcmNoLmRhdGVfdG8gJiZcbiAgICAgICAgICAgICAgICAgICAgIV92bS5zZWFyY2gubW9udGggJiZcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaC5maW5hbmNpYWxfeWVhclxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUXVhcnRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gucXVhcnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5xdWFydGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1YXJ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiLS1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiT3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNC02XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZpcnN0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIk9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjctOVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZWNvbmRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiT3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMTAtMTJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGhpcmRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiT3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMS0zXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZvdXJ0aFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAhX3ZtLnNlYXJjaC5kYXRlX2Zyb20gJiZcbiAgICAgICAgICAgICAgICAgICAgIV92bS5zZWFyY2guZGF0ZV90byAmJlxuICAgICAgICAgICAgICAgICAgICAhX3ZtLnNlYXJjaC5xdWFydGVyXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJNb250aFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gubW9udGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gubW9udGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9udGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiLS1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubW9udGhOYW1lcywgZnVuY3Rpb24oaXQsIHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IFwibVwiICsgeCwgYXR0cnM6IHsgdmFsdWU6IHggKyAxIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgIV92bS5zZWFyY2gubW9udGggJiYgIV92bS5zZWFyY2gucXVhcnRlclxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJGcm9tIERhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGF0ZXRpbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZS16b25lXCI6IFwiQXNpYS9Lb2xrYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ3JlYXRlZCBmcm9tIGRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLmRhdGVfZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiZGF0ZV9mcm9tXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guZGF0ZV9mcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgIV92bS5zZWFyY2gubW9udGggJiYgIV92bS5zZWFyY2gucXVhcnRlclxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUbyBEYXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRhdGV0aW1lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWUtem9uZVwiOiBcIkFzaWEvS29sa2F0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNyZWF0ZWQgdG8gZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guZGF0ZV90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiZGF0ZV90b1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmRhdGVfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQcm9qZWN0IE5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNpdGVfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2VhcmNoX3NpdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNob29zZSBQcm9qZWN0Li4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaXRlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5zaXRlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwic2l0ZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5zaXRlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRXF1aXBtZW50IENhdGVnb3J5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNob29zZSBDYXRlZ29yeSAuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLmNhdGVnb3J5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImNhdGVnb3J5X2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5jYXRlZ29yeV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxcXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEZXNjcmlwdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc3ViX2NhdGVnb3JpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIGRlc2NyaXB0aW9uIC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guc3ViX2NhdGVnb3J5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwic3ViX2NhdGVnb3J5X2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnN1Yl9jYXRlZ29yeV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVxdWlwbWVudCBOYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXQtb3B0aW9uLWxhYmVsXCI6IF92bS5nZXRMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnNlYXJjaF9tYWNoaW5lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9vc2UgRXF1aXBtZW50IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWFjaGluZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gubWFjaGluZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcIm1hY2hpbmVfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gubWFjaGluZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyByb3ctZXEtaGVpZ2h0IG10LTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHkgcC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IHAtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUb3RhbCBDb21wbGFpbnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LW51bWJlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5yZWNvcmRzLnRvdGFsX3RpY2tldHMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2xvc2VkIENhbGxcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LW51bWJlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5yZWNvcmRzLmNsb3NlZF90aWNrZXRzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk9wZW4gQ2FsbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtbnVtYmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnJlY29yZHMub3Blbl90aWNrZXRzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC00IHAtMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYXBleGNoYXJ0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzgwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRvbnV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uZG9udXRDaGFydE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXM6IF92bS5yZWNvcmRzLmNvbXBsYWluX25hdHVyZV9jaGFydC5zZXJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IHAtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBdmcgVEFUIChEYXlzKVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtbnVtYmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnJlY29yZHMuYXZnX3RhdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJXaXRoaW4gVEFUXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1udW1iZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucmVjb3Jkcy53aXRoaW5fdGF0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oOCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkV4Y2VlZGluZyBUQVRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LW51bWJlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5yZWNvcmRzLmV4Y2VlZGluZ190YXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSg5KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IHAtMVwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYXBleGNoYXJ0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiYmFyQ291bnRDaGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWF4LWhlaWdodFwiOiBcIjMyOHB4ICFpbXBvcnRhbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMyOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnJlY29yZHMuYmFyQ291bnRDaGFydC5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzOiBfdm0ucmVjb3Jkcy5iYXJDb3VudENoYXJ0LnNlcmllc1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMTApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHkgcC0xXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJhcGV4Y2hhcnRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1MFwiLFxuICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnJlY29yZHMuRXF1aXBtZW50Q2hhcnQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgIHNlcmllczogX3ZtLnJlY29yZHMuRXF1aXBtZW50Q2hhcnQuc2VyaWVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgIF92bS5fbSgxMSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSBwLTFcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImFwZXhjaGFydFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzUwXCIsXG4gICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ucmVjb3Jkcy5Qcm9qZWN0Q2hhcnQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgIHNlcmllczogX3ZtLnJlY29yZHMuUHJvamVjdENoYXJ0LnNlcmllc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zIGNvbC1zbS02IGNvbC0xMlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveCBiZy1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtaWNvblwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1jb21tZW50c1wiIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC10ZXh0XCIgfSwgW192bS5fdihcIkNvbW1lbnRzXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtbnVtYmVyXCIgfSwgW192bS5fdihcIjQxLDQxMFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3NcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzcy1iYXJcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI3MCVcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwcm9ncmVzcy1kZXNjcmlwdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcwJSBJbmNyZWFzZSBpbiAzMCBEYXlzXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtc20tNiBjb2wtMTJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3ggYmctd2FybmluZ1wiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1pY29uXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFyIGZhLWNhbGVuZGFyLWFsdFwiIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC10ZXh0XCIgfSwgW192bS5fdihcIkV2ZW50c1wiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LW51bWJlclwiIH0sIFtfdm0uX3YoXCI0MSw0MTBcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2dyZXNzXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3MtYmFyXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNzAlXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3MtZGVzY3JpcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3MCUgSW5jcmVhc2UgaW4gMzAgRGF5c1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLXNtLTYgY29sLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94IGJnLXN1Y2Nlc3NcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtaWNvblwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhciBmYS10aHVtYnMtdXBcIiB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtdGV4dFwiIH0sIFtfdm0uX3YoXCJMaWtlc1wiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LW51bWJlclwiIH0sIFtfdm0uX3YoXCI0MSw0MTBcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2dyZXNzXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3MtYmFyXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNzAlXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3MtZGVzY3JpcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3MCUgSW5jcmVhc2UgaW4gMzAgRGF5c1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW192bS5fdihcIkNvbXBsYWluXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRvb2xzXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tdG9vbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgXCJkYXRhLWNhcmQtd2lkZ2V0XCI6IFwiY29sbGFwc2VcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLW1pbnVzXCIgfSldXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyB0ZXh0LWNlbnRlclwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtaWNvbiBiZy1pbmZvXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZ2F2ZWxcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWljb24gYmctc3VjY2Vzc1wiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWxvY2tcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWljb24gYmctZGFuZ2VyXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdW5sb2NrXCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1pY29uIGJnLWluZm9cIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXIgZmEtZW52ZWxvcGVcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWljb24gYmctaW5mb1wiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhciBmYS1lbnZlbG9wZVwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtaWNvbiBiZy1pbmZvXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFyIGZhLWVudmVsb3BlXCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIkNvdW50IG9mIENvbXBsYWludCBOYXR1cmUgYnkgRlksIFF1YXJ0ZXIgYW5kIENhbGwgU3RhdHVzXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdG9vbHNcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi10b29sXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBcImRhdGEtY2FyZC13aWRnZXRcIjogXCJjb2xsYXBzZVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtbWludXNcIiB9KV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIkNvdW50IG9mIENvbXBsYWludCBieSBFcXVpcG1lbnQgVHlwZVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRvb2xzXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tdG9vbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgXCJkYXRhLWNhcmQtd2lkZ2V0XCI6IFwiY29sbGFwc2VcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLW1pbnVzXCIgfSldXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJDb3VudCBvZiBDb21wbGFpbnQgYnkgUHJvamVjdFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRvb2xzXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tdG9vbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgXCJkYXRhLWNhcmQtd2lkZ2V0XCI6IFwiY29sbGFwc2VcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLW1pbnVzXCIgfSldXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWQ5ZDg3NjgyXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMDUzZTQ1YjZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoY29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIilcbn1cbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZDlkODc2ODJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcRGFzaGJvYXJkXFxcXERhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kOWQ4NzY4MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWQ5ZDg3NjgyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=