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
        colors: ['#ffc107', '#38c172'],
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
exports.push([module.i, "\n#apexchartsdnt1 {\r\n    margin-left: -60px !important;\n}\r\n", "", {"version":3,"sources":["C:/wamp64/www/rmm/resources/js/components/Dashboard/resources/js/components/Dashboard/DashboardCallLockStatus.vue"],"names":[],"mappings":";AA4lBA;IACA,8BAAA;CACA","file":"DashboardCallLockStatus.vue","sourcesContent":["<template>\r\n    <section class=\"content\">\r\n        <div class=\"container-fluid\" v-if=\"records\">\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col\">\r\n                            <label for=\"\">FY</label>\r\n                            <v-select :options=\"financial_years\" placeholder=\"Select FY...\" v-model=\"search.financial_year\"\r\n                                name=\"financial_year\">\r\n                            </v-select>\r\n                        </div>\r\n                        <div class=\"col\"\r\n                            v-if=\"!search.date_from && !search.date_to && !search.month && search.financial_year\">\r\n                            <label for=\"\">Quarter</label>\r\n                            <select v-model=\"search.quarter\" class=\"form-control\">\r\n                                <option value=\"\">--</option>\r\n                                <Option value=\"4-6\">1</Option>\r\n                                <Option value=\"7-9\">2</Option>\r\n                                <Option value=\"10-12\">3</Option>\r\n                                <Option value=\"1-3\">4</Option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col\" v-if=\"!search.date_from && !search.date_to && !search.quarter\">\r\n                            <label for=\"\">Month</label>\r\n                            <select v-model=\"search.month\" class=\"form-control\">\r\n                                <option value=\"\">--</option>\r\n                                <Option :value=\"(x + 1)\" v-for=\"(it, x) in monthNames\" :key=\"'m' + x\">{{ it }}</Option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <div class=\"col\" v-if=\"!search.month && !search.quarter\">\r\n                            <label for=\"\">From Date</label>\r\n                            <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.date_from\" input-class=\"form-control\"\r\n                                placeholder=\"Created from date\" />\r\n                        </div>\r\n                        <div class=\"col\" v-if=\"!search.month && !search.quarter\">\r\n                            <label for=\"\">To Date</label>\r\n                            <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.date_to\" input-class=\"form-control\"\r\n                                placeholder=\"Created to date\" />\r\n                        </div>\r\n\r\n                        <div class=\"col\">\r\n                            <label for=\"\">Project Name</label>\r\n                            <v-select label=\"site_name\" :reduce=\"(option) => option.id\" :options=\"search_sites\"\r\n                                placeholder=\"Choose Project...\" v-model=\"search.site_id\" name=\"site_id\">\r\n                            </v-select>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <label for=\"\">Equipment Category</label>\r\n                            <v-select label=\"name\" :reduce=\"(option) => option.id\" :options=\"categories\"\r\n                                placeholder=\"Choose Category ...\" v-model=\"search.category_id\">\\\r\n                            </v-select>\r\n                        </div>\r\n                        <div class=\"col  \">\r\n                            <label for=\"\">Description</label>\r\n                            <v-select label=\"name\" :reduce=\"(option) => option.id\" :options=\"sub_categories\"\r\n                                placeholder=\"Choose description ...\" v-model=\"search.sub_category_id\">\r\n                            </v-select>\r\n                        </div>\r\n                        <div class=\"col  \">\r\n                            <label for=\"\">Equipment Name</label>\r\n                            <v-select label=\"name\" :get-option-label=\"getLabel\" :reduce=\"(option) => option.id\"\r\n                                :options=\"search_machines\" placeholder=\"Choose Equipment ...\" v-model=\"search.machine_id\"\r\n                                name=\"machine_id\">\r\n                            </v-select>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"row row-eq-height mt-2\">\r\n                <!-- Left col -->\r\n                <div class=\"col-md-6\">\r\n                    <!-- MAP & BOX PANE -->\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">Complain</h3>\r\n                            <div class=\"card-tools\">\r\n                                <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\">\r\n                                    <i class=\"fas fa-minus\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <!-- /.card-header -->\r\n                        <div class=\"card-body p-1\">\r\n                            <div class=\"col-12\">\r\n                                <div class=\"row text-center\">\r\n\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-12\">\r\n                                <div class=\"row text-center\">\r\n                                    <div class=\"col-6 p-1\">\r\n                                        <apexchart width=\"440\" type=\"donut\" :options=\"donutChartOptions\"\r\n                                            :series=\"records.complain_nature_chart.series\">\r\n                                        </apexchart>\r\n                                    </div>\r\n                                    <div class=\"col-6 p-1\">\r\n\r\n                                        <div class=\"col-12 p-1\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-6 pr-1\">\r\n                                                    <div class=\"info-box bg-yellow\">\r\n                                                        <div class=\"info-box-content\">\r\n                                                            <span class=\"info-box-number\">{{ records.total_tickets }}</span>\r\n                                                            <span class=\"info-box-text\">Total Complaint </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-6 pl-1\">\r\n                                                    <div class=\"info-box bg-success\">\r\n                                                        <div class=\"info-box-content\">\r\n                                                            <span class=\"info-box-number\">{{ records.avg_tat }}</span>\r\n                                                            <span class=\"info-box-text\">Average TAT (Days)</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-6 pr-1\">\r\n                                                    <div class=\"info-box\" style=\"background-color: rgba(255, 193, 7, 0.78) !important;\">\r\n                                                        <div class=\"info-box-content\">\r\n                                                            <span class=\"info-box-number\">{{ records.closed_tickets\r\n                                                            }}</span>\r\n                                                            <span class=\"info-box-text\">Closed Call</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-6 pl-1\">\r\n                                                    <div class=\"info-box\"  style=\"background-color: #38c171c5 !important;\">\r\n                                                        <div class=\"info-box-content\">\r\n                                                            <span class=\"info-box-number\">{{ records.within_tat }}</span>\r\n                                                            <span class=\"info-box-text\">Within TAT</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-6 pr-1\">\r\n                                                    <div class=\"info-box \" style=\"background-color: rgba(255, 193, 7, 0.495) !important;\">\r\n                                                        <div class=\"info-box-content\">\r\n                                                            <span class=\"info-box-number\">{{ records.open_tickets }}</span>\r\n                                                            <span class=\"info-box-text\">Open Call</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-6 pl-1\">\r\n                                                    <div class=\"info-box\" style=\"background-color: #38c1719f !important;\">\r\n                                                        <div class=\"info-box-content\">\r\n                                                            <span class=\"info-box-number\">{{ records.exceeding_tat }}</span>\r\n                                                            <span class=\"info-box-text\">Exceeding TAT</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- /.card-body -->\r\n                    </div>\r\n                    <!-- /.card -->\r\n                    <!-- /.card -->\r\n                </div>\r\n                <!-- /.col -->\r\n\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">Count of Complaint Nature by FY, Quarter and Call Status</h3>\r\n                            <div class=\"card-tools\">\r\n                                <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\">\r\n                                    <i class=\"fas fa-minus\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body p-1\">\r\n                            <apexchart type=\"bar\" height=\"328\" :options=\"barCountOptions\"\r\n                                :series=\"records.barCountChart.series\">\r\n                            </apexchart>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">Count of Complaint by Equipment Type</h3>\r\n                            <div class=\"card-tools\">\r\n                                <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\">\r\n                                    <i class=\"fas fa-minus\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body p-1\">\r\n                            <apexchart type=\"bar\" height=\"350\" :options=\"records.EquipmentChart.options\"\r\n                                :series=\"records.EquipmentChart.series\">\r\n                            </apexchart>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">Count of Complaint by Project</h3>\r\n                            <div class=\"card-tools\">\r\n                                <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\">\r\n                                    <i class=\"fas fa-minus\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body p-1\">\r\n                            <apexchart type=\"bar\" height=\"350\" :options=\"records.ProjectChart.options\"\r\n                                :series=\"records.ProjectChart.series\">\r\n                            </apexchart>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- /.col -->\r\n            </div>\r\n            <!-- /.row -->\r\n        </div>\r\n        <!--/. container-fluid -->\r\n    </section>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n\r\n    data() {\r\n        return {\r\n            records: '',\r\n            search: {\r\n                financial_year: '',\r\n                quarter: '',\r\n                date_from: '',\r\n                date_to: '',\r\n                site_id: '',\r\n                category_id: '',\r\n                sub_category_id: '',\r\n                machine_id: ''\r\n            },\r\n            monthNames: [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\",\r\n                \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"],\r\n\r\n            chartOptions: {\r\n                chart: {\r\n                    id: \"vuechart-example\",\r\n                },\r\n                xaxis: {\r\n                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],\r\n                },\r\n            },\r\n            series: [\r\n                {\r\n                    name: \"series-1\",\r\n                    data: [30, 40, 35, 50, 49, 60, 70, 91],\r\n                },\r\n            ],\r\n\r\n            //*********** */\r\n\r\n            donutSeries: [44, 55],\r\n            donutChartOptions: {\r\n                colors: ['#ffc107', '#38c172'],\r\n                chart: {\r\n                    id: \"dnt1\"\r\n                },\r\n                labels: [\"Major\", \"Minor\"],\r\n                title: {\r\n                    text: \"Complaint Nature\",\r\n                    align: 'center',\r\n                },\r\n\r\n                responsive: [{\r\n                    breakpoint: 480,\r\n                    options: {\r\n                        chart: {\r\n                            width: 200\r\n                        },\r\n\r\n                        legend: {\r\n                            position: 'bottom',\r\n                            horizontalAlign: 'left',\r\n                        }\r\n                    }\r\n                }],\r\n                legend: {\r\n                    position: 'bottom',\r\n                    horizontalAlign: 'center',\r\n                }\r\n            },\r\n\r\n            barCountOptions: {\r\n                chart: {\r\n                    type: 'bar',\r\n                    height: 350,\r\n                    stacked: true,\r\n                },\r\n                plotOptions: {\r\n                    bar: {\r\n                        horizontal: true,\r\n                        dataLabels: {\r\n                            total: {\r\n                                enabled: true,\r\n                                offsetX: 0,\r\n                                style: {\r\n                                    fontSize: '13px',\r\n                                    fontWeight: 900\r\n                                }\r\n                            }\r\n                        }\r\n                    },\r\n                },\r\n                stroke: {\r\n                    width: 1,\r\n                    colors: ['#fff']\r\n                },\r\n                title: {\r\n                    text: 'Call Status'\r\n                },\r\n                xaxis: {\r\n                    categories: [\"Quarter 1\", \"Quarter 2\", \"Quarter 3\", \"Quarter 4\"],\r\n\r\n                },\r\n                yaxis: {\r\n                    title: {\r\n                        text: undefined\r\n                    },\r\n                },\r\n\r\n                fill: {\r\n                    opacity: 1\r\n                },\r\n                legend: {\r\n                    position: 'top',\r\n                    horizontalAlign: 'left',\r\n                    offsetX: 40\r\n                }\r\n            },\r\n\r\n            barEquipmentOptions: {\r\n\r\n                chart: {\r\n                    height: 350,\r\n                    type: 'bar',\r\n                },\r\n                plotOptions: {\r\n                    bar: {\r\n                        borderRadius: 2,\r\n                        columnWidth: '50%',\r\n                    }\r\n                },\r\n                dataLabels: {\r\n                    enabled: false\r\n                },\r\n                stroke: {\r\n                    width: 2\r\n                },\r\n\r\n                grid: {\r\n                    row: {\r\n                        colors: ['#fff', '#f2f2f2']\r\n                    }\r\n                },\r\n                xaxis: {\r\n                    labels: {\r\n                        rotate: -45\r\n                    },\r\n                    categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',\r\n                        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'\r\n                    ],\r\n                    tickPlacement: 'on'\r\n                },\r\n                yaxis: {\r\n                    title: {\r\n                        text: 'Count of Complaint',\r\n                    },\r\n                },\r\n                fill: {\r\n                    type: 'gradient',\r\n                    gradient: {\r\n                        shade: 'light',\r\n                        type: \"horizontal\",\r\n                        shadeIntensity: 0.25,\r\n                        gradientToColors: undefined,\r\n                        inverseColors: true,\r\n                        opacityFrom: 0.85,\r\n                        opacityTo: 0.85,\r\n                        stops: [50, 0, 100]\r\n                    },\r\n                }\r\n            },\r\n            //******* */\r\n\r\n            barProjectOptions: {\r\n\r\n                chart: {\r\n                    height: 350,\r\n                    type: 'bar',\r\n                },\r\n                plotOptions: {\r\n                    bar: {\r\n                        borderRadius: 2,\r\n                        columnWidth: '50%',\r\n                    }\r\n                },\r\n                dataLabels: {\r\n                    enabled: false\r\n                },\r\n                stroke: {\r\n                    width: 2\r\n                },\r\n\r\n                grid: {\r\n                    row: {\r\n                        colors: ['#fff', '#f2f2f2']\r\n                    }\r\n                },\r\n                xaxis: {\r\n                    labels: {\r\n                        rotate: -45\r\n                    },\r\n                    categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',\r\n                        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'\r\n                    ],\r\n                    tickPlacement: 'on'\r\n                },\r\n                yaxis: {\r\n                    title: {\r\n                        text: 'Count of Complaint',\r\n                    },\r\n                },\r\n                fill: {\r\n                    type: 'gradient',\r\n                    gradient: {\r\n                        shade: 'light',\r\n                        type: \"horizontal\",\r\n                        shadeIntensity: 0.25,\r\n                        gradientToColors: undefined,\r\n                        inverseColors: true,\r\n                        opacityFrom: 0.85,\r\n                        opacityTo: 0.85,\r\n                        stops: [50, 0, 100]\r\n                    },\r\n                }\r\n            },\r\n\r\n            financial_years: [],\r\n            search_machines: [],\r\n            search_sites: [],\r\n            search_tickets: [],\r\n            categories: [],\r\n            sub_categories: [],\r\n            sites: [],\r\n            machines: [],\r\n        };\r\n    },\r\n    watch: {\r\n        'search.quarter'(n) {\r\n            if (n) {\r\n                this.search.date_from = ''\r\n                this.search.date_to = ''\r\n                this.search.month = ''\r\n            }\r\n        },\r\n        'search.date_from'(n) {\r\n            if (n) {\r\n                this.search.month = ''\r\n                this.search.quarter = ''\r\n            }\r\n        },\r\n        'search.date_to'(n) {\r\n            if (n) {\r\n                this.search.month = ''\r\n                this.search.quarter = ''\r\n            }\r\n        },\r\n        'search.month'(n) {\r\n            if (n) {\r\n                this.search.date_from = ''\r\n                this.search.date_to = ''\r\n                this.search.quarter = ''\r\n            }\r\n        },\r\n\r\n        search: {\r\n            handler: function (n) {\r\n                axios.post('api/dashboard', this.search)\r\n                    .then(res => {\r\n                        this.records = res.data.data\r\n                        this.barEquipmentOptions.xaxis.categories = res.data.data.EquipmentChart.options.xaxis.categories\r\n                        this.barProjectOptions.xaxis.categories = res.data.data.ProjectChart.options.xaxis.categories\r\n                    })\r\n                    .catch(err => {\r\n                        console.error(err);\r\n                    })\r\n            },\r\n            deep: true\r\n        },\r\n        async \"search.sub_category_id\"(n, o) {\r\n            if (n) {\r\n                this.get_machine();\r\n            }\r\n        },\r\n        async \"search.site_id\"(n, o) {\r\n            if (n) {\r\n                this.get_machine();\r\n            }\r\n        },\r\n\r\n        \"search.category_id\": {\r\n            handler: function (n, o) {\r\n                if (n) {\r\n                    axios.get(\"api/category/\" + n).then((res) => {\r\n                        this.sub_categories = res.data.data;\r\n                    });\r\n                    this.get_machine();\r\n                }\r\n            },\r\n            deep: true,\r\n            initial: true,\r\n        },\r\n    },\r\n    created() {\r\n        console.log(this.barEquipmentOptions.xaxis);\r\n        var yearsLength = 30;\r\n        var currentYear = new Date().getFullYear();\r\n        for (var i = 2022; i <= currentYear; i++) {\r\n            var next = i + 1;\r\n            var year = i + '-' + next.toString();\r\n            this.financial_years.push(year)\r\n        }\r\n    },\r\n    beforeCreate() {\r\n        axios.post('api/dashboard', this.search)\r\n            .then(res => {\r\n                this.records = res.data.data\r\n\r\n                this.barEquipmentOptions.xaxis.categories = res.data.data.EquipmentChart.options.xaxis.categories\r\n                this.barProjectOptions.xaxis.categories = res.data.data.ProjectChart.options.xaxis.categories\r\n            })\r\n            .catch(err => {\r\n                console.error(err);\r\n            })\r\n\r\n        axios.get(\"api/get_pre_machine\").then((res) => {\r\n            this.categories = res.data.data.Category;\r\n            this.sites = res.data.data.sites;\r\n        });\r\n        axios\r\n            .get(\"/api/initial_ticket\")\r\n            .then((response) => {\r\n                this.users = response.data.data.vendors;\r\n                this.machines = response.data.data.machines;\r\n                this.search_machines = response.data.data.machines;\r\n                this.search_sites = response.data.data.sites;\r\n                this.created_users = response.data.data.created_users;\r\n            })\r\n            .catch(() => console.warn(\"Oh. Something went wrong\"));\r\n\r\n\r\n    },\r\n    mounted() {\r\n        if (this.$gate.isAdmin()) {\r\n            // this.$router.push('/users').catch(() => { });\r\n        } else {\r\n            this.$router.push(\"/tickets\").catch(() => { });\r\n        }\r\n    },\r\n    methods: {\r\n        getLabel(val) {\r\n            if (typeof val === \"object\") {\r\n                return val.far_no + \" - \" + val.name;\r\n            } else {\r\n                return val;\r\n            }\r\n        },\r\n        async get_machine() {\r\n            axios\r\n                .get(\"/api/reports/machines\", {\r\n                    params: {\r\n                        site_id: this.search.site_id,\r\n                        category_id: this.search.category_id,\r\n                        sub_category_id: this.search.sub_category_id,\r\n                    },\r\n                })\r\n                .then((response) => {\r\n                    this.search_machines = response.data.data;\r\n                })\r\n                .catch(() => console.warn(\"Oh. Something went wrong\"));\r\n        },\r\n    },\r\n};\r\n</script>\r\n<style>\r\n#apexchartsdnt1 {\r\n    margin-left: -60px !important;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);

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
                                { staticClass: "info-box bg-success" },
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
                                    "background-color":
                                      "rgba(255, 193, 7, 0.78) !important"
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
                                    "background-color": "#38c171c5 !important"
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
                                    "background-color":
                                      "rgba(255, 193, 7, 0.495) !important"
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
                                    "background-color": "#38c1719f !important"
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
                      attrs: {
                        type: "bar",
                        height: "328",
                        options: _vm.barCountOptions,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlPzczYTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZT83NjFlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWU/MzY5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJyZWNvcmRzIiwic2VhcmNoIiwiZmluYW5jaWFsX3llYXIiLCJxdWFydGVyIiwiZGF0ZV9mcm9tIiwiZGF0ZV90byIsInNpdGVfaWQiLCJjYXRlZ29yeV9pZCIsInN1Yl9jYXRlZ29yeV9pZCIsIm1hY2hpbmVfaWQiLCJtb250aE5hbWVzIiwiY2hhcnRPcHRpb25zIiwiY2hhcnQiLCJpZCIsInhheGlzIiwiY2F0ZWdvcmllcyIsInNlcmllcyIsIm5hbWUiLCJkb251dFNlcmllcyIsImRvbnV0Q2hhcnRPcHRpb25zIiwiY29sb3JzIiwibGFiZWxzIiwidGl0bGUiLCJ0ZXh0IiwiYWxpZ24iLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsIm9wdGlvbnMiLCJ3aWR0aCIsImxlZ2VuZCIsInBvc2l0aW9uIiwiaG9yaXpvbnRhbEFsaWduIiwiYmFyQ291bnRPcHRpb25zIiwidHlwZSIsImhlaWdodCIsInN0YWNrZWQiLCJwbG90T3B0aW9ucyIsImJhciIsImhvcml6b250YWwiLCJkYXRhTGFiZWxzIiwidG90YWwiLCJlbmFibGVkIiwib2Zmc2V0WCIsInN0eWxlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwic3Ryb2tlIiwieWF4aXMiLCJmaWxsIiwib3BhY2l0eSIsImJhckVxdWlwbWVudE9wdGlvbnMiLCJib3JkZXJSYWRpdXMiLCJjb2x1bW5XaWR0aCIsImdyaWQiLCJyb3ciLCJyb3RhdGUiLCJ0aWNrUGxhY2VtZW50IiwiZ3JhZGllbnQiLCJzaGFkZSIsInNoYWRlSW50ZW5zaXR5IiwiZ3JhZGllbnRUb0NvbG9ycyIsImludmVyc2VDb2xvcnMiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInN0b3BzIiwiYmFyUHJvamVjdE9wdGlvbnMiLCJmaW5hbmNpYWxfeWVhcnMiLCJzZWFyY2hfbWFjaGluZXMiLCJzZWFyY2hfc2l0ZXMiLCJzZWFyY2hfdGlja2V0cyIsInN1Yl9jYXRlZ29yaWVzIiwic2l0ZXMiLCJtYWNoaW5lcyIsIndhdGNoIiwiaGFuZGxlciIsImF4aW9zIiwidGhlbiIsImNhdGNoIiwiY29uc29sZSIsImRlZXAiLCJpbml0aWFsIiwiY3JlYXRlZCIsImJlZm9yZUNyZWF0ZSIsImdldCIsIm1vdW50ZWQiLCJtZXRob2RzIiwiZ2V0TGFiZWwiLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJPZTtFQUVmQTtJQUNBO01BQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQUMscUVBQ0E7TUFFQUM7UUFD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QkFBb0I7QUFDcEIsV0FBVztBQUNYLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZCQUE2QjtBQUNuRCxnQkFBZ0IsNEJBQTRCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDO0FBQ2xDLElBQUksS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDaHRCaEI7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMseWpCQUF1UztBQUM3VDtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsZ0lBQW1FO0FBQ3JGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ1hmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtQkFBTyxDQUFDLDZsQkFBZ1I7QUFDMVI7QUFDQTtBQUNpSTtBQUNhO0FBQzlJO0FBQ2dXO0FBQ2hXO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0c7QUFDdEcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLDBJQUFjO0FBQ2hCLEVBQUUsa1BBQWM7QUFDaEIsRUFBRSwyUEFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvNS5idW5kbGUuNjUzNGRiYzcwMTY2OWYxN2NlODAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCIgdi1pZj1cInJlY29yZHNcIj5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5GWTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgOm9wdGlvbnM9XCJmaW5hbmNpYWxfeWVhcnNcIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCBGWS4uLlwiIHYtbW9kZWw9XCJzZWFyY2guZmluYW5jaWFsX3llYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaW5hbmNpYWxfeWVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIiFzZWFyY2guZGF0ZV9mcm9tICYmICFzZWFyY2guZGF0ZV90byAmJiAhc2VhcmNoLm1vbnRoICYmIHNlYXJjaC5maW5hbmNpYWxfeWVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPlF1YXJ0ZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwic2VhcmNoLnF1YXJ0ZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCI0LTZcIj4xPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjctOVwiPjI8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMTAtMTJcIj4zPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjEtM1wiPjQ8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIHYtaWY9XCIhc2VhcmNoLmRhdGVfZnJvbSAmJiAhc2VhcmNoLmRhdGVfdG8gJiYgIXNlYXJjaC5xdWFydGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+TW9udGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwic2VhcmNoLm1vbnRoXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIDp2YWx1ZT1cIih4ICsgMSlcIiB2LWZvcj1cIihpdCwgeCkgaW4gbW9udGhOYW1lc1wiIDprZXk9XCInbScgKyB4XCI+e3sgaXQgfX08L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiB2LWlmPVwiIXNlYXJjaC5tb250aCAmJiAhc2VhcmNoLnF1YXJ0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5Gcm9tIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XCJBc2lhL0tvbGthdGFcIiB2LW1vZGVsPVwic2VhcmNoLmRhdGVfZnJvbVwiIGlucHV0LWNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNyZWF0ZWQgZnJvbSBkYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiB2LWlmPVwiIXNlYXJjaC5tb250aCAmJiAhc2VhcmNoLnF1YXJ0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5UbyBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVwiQXNpYS9Lb2xrYXRhXCIgdi1tb2RlbD1cInNlYXJjaC5kYXRlX3RvXCIgaW5wdXQtY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ3JlYXRlZCB0byBkYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInNpdGVfbmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cInNlYXJjaF9zaXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgUHJvamVjdC4uLlwiIHYtbW9kZWw9XCJzZWFyY2guc2l0ZV9pZFwiIG5hbWU9XCJzaXRlX2lkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPkVxdWlwbWVudCBDYXRlZ29yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIDpvcHRpb25zPVwiY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgQ2F0ZWdvcnkgLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5jYXRlZ29yeV9pZFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwibmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cInN1Yl9jYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBkZXNjcmlwdGlvbiAuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnN1Yl9jYXRlZ29yeV9pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPkVxdWlwbWVudCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6Z2V0LW9wdGlvbi1sYWJlbD1cImdldExhYmVsXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzZWFyY2hfbWFjaGluZXNcIiBwbGFjZWhvbGRlcj1cIkNob29zZSBFcXVpcG1lbnQgLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5tYWNoaW5lX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFjaGluZV9pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWVxLWhlaWdodCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIExlZnQgY29sIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBNQVAgJiBCT1ggUEFORSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj5Db21wbGFpbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10b29sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi10b29sXCIgZGF0YS1jYXJkLXdpZGdldD1cImNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLW1pbnVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1oZWFkZXIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB0ZXh0LWNlbnRlclwiPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXBleGNoYXJ0IHdpZHRoPVwiNDQwXCIgdHlwZT1cImRvbnV0XCIgOm9wdGlvbnM9XCJkb251dENoYXJ0T3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcmllcz1cInJlY29yZHMuY29tcGxhaW5fbmF0dXJlX2NoYXJ0LnNlcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcGV4Y2hhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcC0xXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBwLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3ggYmcteWVsbG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC1udW1iZXJcIj57eyByZWNvcmRzLnRvdGFsX3RpY2tldHMgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtdGV4dFwiPlRvdGFsIENvbXBsYWludCA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwbC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3ggYmctc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtbnVtYmVyXCI+e3sgcmVjb3Jkcy5hdmdfdGF0IH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LXRleHRcIj5BdmVyYWdlIFRBVCAoRGF5cyk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3hcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTMsIDcsIDAuNzgpICFpbXBvcnRhbnQ7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC1udW1iZXJcIj57eyByZWNvcmRzLmNsb3NlZF90aWNrZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LXRleHRcIj5DbG9zZWQgQ2FsbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHBsLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveFwiICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICMzOGMxNzFjNSAhaW1wb3J0YW50O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1ib3gtbnVtYmVyXCI+e3sgcmVjb3Jkcy53aXRoaW5fdGF0IH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LXRleHRcIj5XaXRoaW4gVEFUPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94IFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE5MywgNywgMC40OTUpICFpbXBvcnRhbnQ7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC1udW1iZXJcIj57eyByZWNvcmRzLm9wZW5fdGlja2V0cyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC10ZXh0XCI+T3BlbiBDYWxsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcGwtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMzhjMTcxOWYgIWltcG9ydGFudDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tYm94LW51bWJlclwiPnt7IHJlY29yZHMuZXhjZWVkaW5nX3RhdCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWJveC10ZXh0XCI+RXhjZWVkaW5nIFRBVDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQgLS0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwhLS0gLy5jb2wgLS0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+Q291bnQgb2YgQ29tcGxhaW50IE5hdHVyZSBieSBGWSwgUXVhcnRlciBhbmQgQ2FsbCBTdGF0dXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdG9vbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tdG9vbFwiIGRhdGEtY2FyZC13aWRnZXQ9XCJjb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1taW51c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcGV4Y2hhcnQgdHlwZT1cImJhclwiIGhlaWdodD1cIjMyOFwiIDpvcHRpb25zPVwiYmFyQ291bnRPcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2VyaWVzPVwicmVjb3Jkcy5iYXJDb3VudENoYXJ0LnNlcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcGV4Y2hhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+Q291bnQgb2YgQ29tcGxhaW50IGJ5IEVxdWlwbWVudCBUeXBlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRvb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXRvb2xcIiBkYXRhLWNhcmQtd2lkZ2V0PVwiY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbWludXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXBleGNoYXJ0IHR5cGU9XCJiYXJcIiBoZWlnaHQ9XCIzNTBcIiA6b3B0aW9ucz1cInJlY29yZHMuRXF1aXBtZW50Q2hhcnQub3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcmllcz1cInJlY29yZHMuRXF1aXBtZW50Q2hhcnQuc2VyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FwZXhjaGFydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+Q291bnQgb2YgQ29tcGxhaW50IGJ5IFByb2plY3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdG9vbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tdG9vbFwiIGRhdGEtY2FyZC13aWRnZXQ9XCJjb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1taW51c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcGV4Y2hhcnQgdHlwZT1cImJhclwiIGhlaWdodD1cIjM1MFwiIDpvcHRpb25zPVwicmVjb3Jkcy5Qcm9qZWN0Q2hhcnQub3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcmllcz1cInJlY29yZHMuUHJvamVjdENoYXJ0LnNlcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcGV4Y2hhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSAvLmNvbCAtLT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gLy5yb3cgLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLS8uIGNvbnRhaW5lci1mbHVpZCAtLT5cclxuICAgIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlY29yZHM6ICcnLFxyXG4gICAgICAgICAgICBzZWFyY2g6IHtcclxuICAgICAgICAgICAgICAgIGZpbmFuY2lhbF95ZWFyOiAnJyxcclxuICAgICAgICAgICAgICAgIHF1YXJ0ZXI6ICcnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZV9mcm9tOiAnJyxcclxuICAgICAgICAgICAgICAgIGRhdGVfdG86ICcnLFxyXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeV9pZDogJycsXHJcbiAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW9udGhOYW1lczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIixcclxuICAgICAgICAgICAgICAgIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdLFxyXG5cclxuICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInZ1ZWNoYXJ0LWV4YW1wbGVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsxOTkxLCAxOTkyLCAxOTkzLCAxOTk0LCAxOTk1LCAxOTk2LCAxOTk3LCAxOTk4XSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlcmllczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2VyaWVzLTFcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMzAsIDQwLCAzNSwgNTAsIDQ5LCA2MCwgNzAsIDkxXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgICAgICAvLyoqKioqKioqKioqICovXHJcblxyXG4gICAgICAgICAgICBkb251dFNlcmllczogWzQ0LCA1NV0sXHJcbiAgICAgICAgICAgIGRvbnV0Q2hhcnRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmYzEwNycsICcjMzhjMTcyJ10sXHJcbiAgICAgICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImRudDFcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxhYmVsczogW1wiTWFqb3JcIiwgXCJNaW5vclwiXSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJDb21wbGFpbnQgTmF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGJhckNvdW50T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyNmZmYnXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NhbGwgU3RhdHVzJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW1wiUXVhcnRlciAxXCIsIFwiUXVhcnRlciAyXCIsIFwiUXVhcnRlciAzXCIsIFwiUXVhcnRlciA0XCJdLFxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDQwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBiYXJFcXVpcG1lbnRPcHRpb25zOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZicsICcjZjJmMmYyJ11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAtNDVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnQXBwbGVzJywgJ09yYW5nZXMnLCAnU3RyYXdiZXJyaWVzJywgJ1BpbmVhcHBsZXMnLCAnTWFuZ29lcycsICdCYW5hbmFzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0JsYWNrYmVycmllcycsICdQZWFycycsICdXYXRlcm1lbG9ucycsICdDaGVycmllcycsICdQb21lZ3JhbmF0ZXMnLCAnVGFuZ2VyaW5lcycsICdQYXBheWFzJ1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGlja1BsYWNlbWVudDogJ29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NvdW50IG9mIENvbXBsYWludCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dyYWRpZW50JyxcclxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkZTogJ2xpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAwLjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFRvQ29sb3JzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVyc2VDb2xvcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlGcm9tOiAwLjg1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5VG86IDAuODUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BzOiBbNTAsIDAsIDEwMF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyoqKioqKiogKi9cclxuXHJcbiAgICAgICAgICAgIGJhclByb2plY3RPcHRpb25zOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZicsICcjZjJmMmYyJ11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAtNDVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnQXBwbGVzJywgJ09yYW5nZXMnLCAnU3RyYXdiZXJyaWVzJywgJ1BpbmVhcHBsZXMnLCAnTWFuZ29lcycsICdCYW5hbmFzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0JsYWNrYmVycmllcycsICdQZWFycycsICdXYXRlcm1lbG9ucycsICdDaGVycmllcycsICdQb21lZ3JhbmF0ZXMnLCAnVGFuZ2VyaW5lcycsICdQYXBheWFzJ1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGlja1BsYWNlbWVudDogJ29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NvdW50IG9mIENvbXBsYWludCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dyYWRpZW50JyxcclxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkZTogJ2xpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAwLjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFRvQ29sb3JzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVyc2VDb2xvcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlGcm9tOiAwLjg1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5VG86IDAuODUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BzOiBbNTAsIDAsIDEwMF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZmluYW5jaWFsX3llYXJzOiBbXSxcclxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcclxuICAgICAgICAgICAgc2VhcmNoX3NpdGVzOiBbXSxcclxuICAgICAgICAgICAgc2VhcmNoX3RpY2tldHM6IFtdLFxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgICAgICBzaXRlczogW10sXHJcbiAgICAgICAgICAgIG1hY2hpbmVzOiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgJ3NlYXJjaC5xdWFydGVyJyhuKSB7XHJcbiAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5kYXRlX2Zyb20gPSAnJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV90byA9ICcnXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdzZWFyY2guZGF0ZV9mcm9tJyhuKSB7XHJcbiAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5xdWFydGVyID0gJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3NlYXJjaC5kYXRlX3RvJyhuKSB7XHJcbiAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5xdWFydGVyID0gJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3NlYXJjaC5tb250aCcobikge1xyXG4gICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV9mcm9tID0gJydcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmRhdGVfdG8gPSAnJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gucXVhcnRlciA9ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZWFyY2g6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2FwaS9kYXNoYm9hcmQnLCB0aGlzLnNlYXJjaClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMgPSByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyRXF1aXBtZW50T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5FcXVpcG1lbnRDaGFydC5vcHRpb25zLnhheGlzLmNhdGVnb3JpZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJQcm9qZWN0T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5Qcm9qZWN0Q2hhcnQub3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlZXA6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIFwic2VhcmNoLnN1Yl9jYXRlZ29yeV9pZFwiKG4sIG8pIHtcclxuICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgXCJzZWFyY2guc2l0ZV9pZFwiKG4sIG8pIHtcclxuICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFwic2VhcmNoLmNhdGVnb3J5X2lkXCI6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2NhdGVnb3J5L1wiICsgbikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5iYXJFcXVpcG1lbnRPcHRpb25zLnhheGlzKTtcclxuICAgICAgICB2YXIgeWVhcnNMZW5ndGggPSAzMDtcclxuICAgICAgICB2YXIgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDIwMjI7IGkgPD0gY3VycmVudFllYXI7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbmV4dCA9IGkgKyAxO1xyXG4gICAgICAgICAgICB2YXIgeWVhciA9IGkgKyAnLScgKyBuZXh0LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmluYW5jaWFsX3llYXJzLnB1c2goeWVhcilcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJ2FwaS9kYXNoYm9hcmQnLCB0aGlzLnNlYXJjaClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlcy5kYXRhLmRhdGFcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhckVxdWlwbWVudE9wdGlvbnMueGF4aXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuRXF1aXBtZW50Q2hhcnQub3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhclByb2plY3RPcHRpb25zLnhheGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLlByb2plY3RDaGFydC5vcHRpb25zLnhheGlzLmNhdGVnb3JpZXNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIGF4aW9zLmdldChcImFwaS9nZXRfcHJlX21hY2hpbmVcIikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuQ2F0ZWdvcnk7XHJcbiAgICAgICAgICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoXCIvYXBpL2luaXRpYWxfdGlja2V0XCIpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS52ZW5kb3JzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2l0ZXMgPSByZXNwb25zZS5kYXRhLmRhdGEuc2l0ZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRfdXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEuY3JlYXRlZF91c2VycztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybihcIk9oLiBTb21ldGhpbmcgd2VudCB3cm9uZ1wiKSk7XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLiRnYXRlLmlzQWRtaW4oKSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLiRyb3V0ZXIucHVzaCgnL3VzZXJzJykuY2F0Y2goKCkgPT4geyB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi90aWNrZXRzXCIpLmNhdGNoKCgpID0+IHsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBnZXRMYWJlbCh2YWwpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZmFyX25vICsgXCIgLSBcIiArIHZhbC5uYW1lO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgZ2V0X21hY2hpbmUoKSB7XHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KFwiL2FwaS9yZXBvcnRzL21hY2hpbmVzXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZV9pZDogdGhpcy5zZWFyY2guc2l0ZV9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IHRoaXMuc2VhcmNoLmNhdGVnb3J5X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6IHRoaXMuc2VhcmNoLnN1Yl9jYXRlZ29yeV9pZCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oXCJPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmdcIikpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG4jYXBleGNoYXJ0c2RudDEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbiNhcGV4Y2hhcnRzZG50MSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtNjBweCAhaW1wb3J0YW50O1xcbn1cXHJcXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovd2FtcDY0L3d3dy9ybW0vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTRsQkE7SUFDQSw4QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJEYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiIHYtaWY9XFxcInJlY29yZHNcXFwiPlxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLXJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiXFxcIj5GWTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6b3B0aW9ucz1cXFwiZmluYW5jaWFsX3llYXJzXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VsZWN0IEZZLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guZmluYW5jaWFsX3llYXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJmaW5hbmNpYWxfeWVhclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCIhc2VhcmNoLmRhdGVfZnJvbSAmJiAhc2VhcmNoLmRhdGVfdG8gJiYgIXNlYXJjaC5tb250aCAmJiBzZWFyY2guZmluYW5jaWFsX3llYXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJcXFwiPlF1YXJ0ZXI8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XFxcInNlYXJjaC5xdWFydGVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIlxcXCI+LS08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XFxcIjQtNlxcXCI+MTwvT3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cXFwiNy05XFxcIj4yPC9PcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVxcXCIxMC0xMlxcXCI+MzwvT3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cXFwiMS0zXFxcIj40PC9PcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCIgdi1pZj1cXFwiIXNlYXJjaC5kYXRlX2Zyb20gJiYgIXNlYXJjaC5kYXRlX3RvICYmICFzZWFyY2gucXVhcnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIlxcXCI+TW9udGg8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XFxcInNlYXJjaC5tb250aFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJcXFwiPi0tPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIDp2YWx1ZT1cXFwiKHggKyAxKVxcXCIgdi1mb3I9XFxcIihpdCwgeCkgaW4gbW9udGhOYW1lc1xcXCIgOmtleT1cXFwiJ20nICsgeFxcXCI+e3sgaXQgfX08L09wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIiB2LWlmPVxcXCIhc2VhcmNoLm1vbnRoICYmICFzZWFyY2gucXVhcnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIlxcXCI+RnJvbSBEYXRlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XFxcIkFzaWEvS29sa2F0YVxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLmRhdGVfZnJvbVxcXCIgaW5wdXQtY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJDcmVhdGVkIGZyb20gZGF0ZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiIHYtaWY9XFxcIiFzZWFyY2gubW9udGggJiYgIXNlYXJjaC5xdWFydGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiXFxcIj5UbyBEYXRlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XFxcIkFzaWEvS29sa2F0YVxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLmRhdGVfdG9cXFwiIGlucHV0LWNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQ3JlYXRlZCB0byBkYXRlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIlxcXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJzaXRlX25hbWVcXFwiIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCIgOm9wdGlvbnM9XFxcInNlYXJjaF9zaXRlc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJDaG9vc2UgUHJvamVjdC4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLnNpdGVfaWRcXFwiIG5hbWU9XFxcInNpdGVfaWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIlxcXCI+RXF1aXBtZW50IENhdGVnb3J5PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJuYW1lXFxcIiA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiIDpvcHRpb25zPVxcXCJjYXRlZ29yaWVzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkNob29zZSBDYXRlZ29yeSAuLi5cXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5jYXRlZ29yeV9pZFxcXCI+XFxcXFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCAgXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiXFxcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwibmFtZVxcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIiA6b3B0aW9ucz1cXFwic3ViX2NhdGVnb3JpZXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQ2hvb3NlIGRlc2NyaXB0aW9uIC4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLnN1Yl9jYXRlZ29yeV9pZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sICBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJcXFwiPkVxdWlwbWVudCBOYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJuYW1lXFxcIiA6Z2V0LW9wdGlvbi1sYWJlbD1cXFwiZ2V0TGFiZWxcXFwiIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVxcXCJzZWFyY2hfbWFjaGluZXNcXFwiIHBsYWNlaG9sZGVyPVxcXCJDaG9vc2UgRXF1aXBtZW50IC4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLm1hY2hpbmVfaWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJtYWNoaW5lX2lkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgcm93LWVxLWhlaWdodCBtdC0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLSBMZWZ0IGNvbCAtLT5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBNQVAgJiBCT1ggUEFORSAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5Db21wbGFpbjwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdG9vbHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXRvb2xcXFwiIGRhdGEtY2FyZC13aWRnZXQ9XFxcImNvbGxhcHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLW1pbnVzXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQtaGVhZGVyIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSBwLTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IHRleHQtY2VudGVyXFxcIj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTYgcC0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFwZXhjaGFydCB3aWR0aD1cXFwiNDQwXFxcIiB0eXBlPVxcXCJkb251dFxcXCIgOm9wdGlvbnM9XFxcImRvbnV0Q2hhcnRPcHRpb25zXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcmllcz1cXFwicmVjb3Jkcy5jb21wbGFpbl9uYXR1cmVfY2hhcnQuc2VyaWVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcGV4Y2hhcnQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTYgcC0xXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyIHAtMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02IHByLTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveCBiZy15ZWxsb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1ib3gtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LW51bWJlclxcXCI+e3sgcmVjb3Jkcy50b3RhbF90aWNrZXRzIH19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC10ZXh0XFxcIj5Ub3RhbCBDb21wbGFpbnQgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02IHBsLTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveCBiZy1zdWNjZXNzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm8tYm94LWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC1udW1iZXJcXFwiPnt7IHJlY29yZHMuYXZnX3RhdCB9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtdGV4dFxcXCI+QXZlcmFnZSBUQVQgKERheXMpPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02IHByLTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTMsIDcsIDAuNzgpICFpbXBvcnRhbnQ7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm8tYm94LWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmZvLWJveC1udW1iZXJcXFwiPnt7IHJlY29yZHMuY2xvc2VkX3RpY2tldHNcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtdGV4dFxcXCI+Q2xvc2VkIENhbGw8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTYgcGwtMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm8tYm94XFxcIiAgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6ICMzOGMxNzFjNSAhaW1wb3J0YW50O1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtbnVtYmVyXFxcIj57eyByZWNvcmRzLndpdGhpbl90YXQgfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LXRleHRcXFwiPldpdGhpbiBUQVQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTYgcHItMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm8tYm94IFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTMsIDcsIDAuNDk1KSAhaW1wb3J0YW50O1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtbnVtYmVyXFxcIj57eyByZWNvcmRzLm9wZW5fdGlja2V0cyB9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtdGV4dFxcXCI+T3BlbiBDYWxsPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02IHBsLTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6ICMzOGMxNzE5ZiAhaW1wb3J0YW50O1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLWJveC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5mby1ib3gtbnVtYmVyXFxcIj57eyByZWNvcmRzLmV4Y2VlZGluZ190YXQgfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluZm8tYm94LXRleHRcXFwiPkV4Y2VlZGluZyBUQVQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQtYm9keSAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZCAtLT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS0gLy5jb2wgLS0+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5Db3VudCBvZiBDb21wbGFpbnQgTmF0dXJlIGJ5IEZZLCBRdWFydGVyIGFuZCBDYWxsIFN0YXR1czwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdG9vbHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXRvb2xcXFwiIGRhdGEtY2FyZC13aWRnZXQ9XFxcImNvbGxhcHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLW1pbnVzXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHAtMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcGV4Y2hhcnQgdHlwZT1cXFwiYmFyXFxcIiBoZWlnaHQ9XFxcIjMyOFxcXCIgOm9wdGlvbnM9XFxcImJhckNvdW50T3B0aW9uc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzZXJpZXM9XFxcInJlY29yZHMuYmFyQ291bnRDaGFydC5zZXJpZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FwZXhjaGFydD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkNvdW50IG9mIENvbXBsYWludCBieSBFcXVpcG1lbnQgVHlwZTwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdG9vbHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXRvb2xcXFwiIGRhdGEtY2FyZC13aWRnZXQ9XFxcImNvbGxhcHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLW1pbnVzXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHAtMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcGV4Y2hhcnQgdHlwZT1cXFwiYmFyXFxcIiBoZWlnaHQ9XFxcIjM1MFxcXCIgOm9wdGlvbnM9XFxcInJlY29yZHMuRXF1aXBtZW50Q2hhcnQub3B0aW9uc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzZXJpZXM9XFxcInJlY29yZHMuRXF1aXBtZW50Q2hhcnQuc2VyaWVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcGV4Y2hhcnQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+Q291bnQgb2YgQ29tcGxhaW50IGJ5IFByb2plY3Q8L2gzPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXRvb2xzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi10b29sXFxcIiBkYXRhLWNhcmQtd2lkZ2V0PVxcXCJjb2xsYXBzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1taW51c1xcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSBwLTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXBleGNoYXJ0IHR5cGU9XFxcImJhclxcXCIgaGVpZ2h0PVxcXCIzNTBcXFwiIDpvcHRpb25zPVxcXCJyZWNvcmRzLlByb2plY3RDaGFydC5vcHRpb25zXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcmllcz1cXFwicmVjb3Jkcy5Qcm9qZWN0Q2hhcnQuc2VyaWVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcGV4Y2hhcnQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDwhLS0gLy5jb2wgLS0+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPCEtLSAvLnJvdyAtLT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPCEtLS8uIGNvbnRhaW5lci1mbHVpZCAtLT5cXHJcXG4gICAgPC9zZWN0aW9uPlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG5leHBvcnQgZGVmYXVsdCB7XFxyXFxuXFxyXFxuICAgIGRhdGEoKSB7XFxyXFxuICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgIHJlY29yZHM6ICcnLFxcclxcbiAgICAgICAgICAgIHNlYXJjaDoge1xcclxcbiAgICAgICAgICAgICAgICBmaW5hbmNpYWxfeWVhcjogJycsXFxyXFxuICAgICAgICAgICAgICAgIHF1YXJ0ZXI6ICcnLFxcclxcbiAgICAgICAgICAgICAgICBkYXRlX2Zyb206ICcnLFxcclxcbiAgICAgICAgICAgICAgICBkYXRlX3RvOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXFxyXFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJydcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IFtcXFwiSmFudWFyeVxcXCIsIFxcXCJGZWJydWFyeVxcXCIsIFxcXCJNYXJjaFxcXCIsIFxcXCJBcHJpbFxcXCIsIFxcXCJNYXlcXFwiLCBcXFwiSnVuZVxcXCIsXFxyXFxuICAgICAgICAgICAgICAgIFxcXCJKdWx5XFxcIiwgXFxcIkF1Z3VzdFxcXCIsIFxcXCJTZXB0ZW1iZXJcXFwiLCBcXFwiT2N0b2JlclxcXCIsIFxcXCJOb3ZlbWJlclxcXCIsIFxcXCJEZWNlbWJlclxcXCJdLFxcclxcblxcclxcbiAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xcclxcbiAgICAgICAgICAgICAgICBjaGFydDoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFxcXCJ2dWVjaGFydC1leGFtcGxlXFxcIixcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsxOTkxLCAxOTkyLCAxOTkzLCAxOTk0LCAxOTk1LCAxOTk2LCAxOTk3LCAxOTk4XSxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHNlcmllczogW1xcclxcbiAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcXFwic2VyaWVzLTFcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzMwLCA0MCwgMzUsIDUwLCA0OSwgNjAsIDcwLCA5MV0sXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgXSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvLyoqKioqKioqKioqICovXFxyXFxuXFxyXFxuICAgICAgICAgICAgZG9udXRTZXJpZXM6IFs0NCwgNTVdLFxcclxcbiAgICAgICAgICAgIGRvbnV0Q2hhcnRPcHRpb25zOiB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZjMTA3JywgJyMzOGMxNzInXSxcXHJcXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcXFwiZG50MVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXFxcIk1ham9yXFxcIiwgXFxcIk1pbm9yXFxcIl0sXFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcXFwiQ29tcGxhaW50IE5hdHVyZVxcXCIsXFxyXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XFxyXFxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXFxyXFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XSxcXHJcXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXFxyXFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdjZW50ZXInLFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICBiYXJDb3VudE9wdGlvbnM6IHtcXHJcXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXFxyXFxuICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA5MDBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZiddXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2FsbCBTdGF0dXMnXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXFxcIlF1YXJ0ZXIgMVxcXCIsIFxcXCJRdWFydGVyIDJcXFwiLCBcXFwiUXVhcnRlciAzXFxcIiwgXFxcIlF1YXJ0ZXIgNFxcXCJdLFxcclxcblxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1bmRlZmluZWRcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGZpbGw6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDQwXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIGJhckVxdWlwbWVudE9wdGlvbnM6IHtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxcclxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYXI6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6ICc1MCUnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGdyaWQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJvdzoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZmJywgJyNmMmYyZjInXVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAtNDVcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0FwcGxlcycsICdPcmFuZ2VzJywgJ1N0cmF3YmVycmllcycsICdQaW5lYXBwbGVzJywgJ01hbmdvZXMnLCAnQmFuYW5hcycsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0JsYWNrYmVycmllcycsICdQZWFycycsICdXYXRlcm1lbG9ucycsICdDaGVycmllcycsICdQb21lZ3JhbmF0ZXMnLCAnVGFuZ2VyaW5lcycsICdQYXBheWFzJ1xcclxcbiAgICAgICAgICAgICAgICAgICAgXSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRpY2tQbGFjZW1lbnQ6ICdvbidcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NvdW50IG9mIENvbXBsYWludCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBmaWxsOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ3JhZGllbnQnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkZTogJ2xpZ2h0JyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwiaG9yaXpvbnRhbFxcXCIsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGVJbnRlbnNpdHk6IDAuMjUsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRUb0NvbG9yczogdW5kZWZpbmVkLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVyc2VDb2xvcnM6IHRydWUsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eUZyb206IDAuODUsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eVRvOiAwLjg1LFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BzOiBbNTAsIDAsIDEwMF1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIC8vKioqKioqKiAqL1xcclxcblxcclxcbiAgICAgICAgICAgIGJhclByb2plY3RPcHRpb25zOiB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiAnNTAlJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMlxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgICAgICBncmlkOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICByb3c6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZicsICcjZjJmMmYyJ11cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogLTQ1XFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydBcHBsZXMnLCAnT3JhbmdlcycsICdTdHJhd2JlcnJpZXMnLCAnUGluZWFwcGxlcycsICdNYW5nb2VzJywgJ0JhbmFuYXMnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICdCbGFja2JlcnJpZXMnLCAnUGVhcnMnLCAnV2F0ZXJtZWxvbnMnLCAnQ2hlcnJpZXMnLCAnUG9tZWdyYW5hdGVzJywgJ1RhbmdlcmluZXMnLCAnUGFwYXlhcydcXHJcXG4gICAgICAgICAgICAgICAgICAgIF0sXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aWNrUGxhY2VtZW50OiAnb24nXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb3VudCBvZiBDb21wbGFpbnQnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgZmlsbDoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dyYWRpZW50JyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50OiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGU6ICdsaWdodCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcImhvcml6b250YWxcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAwLjI1LFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VG9Db2xvcnM6IHVuZGVmaW5lZCxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlQ29sb3JzOiB0cnVlLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlGcm9tOiAwLjg1LFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlUbzogMC44NSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wczogWzUwLCAwLCAxMDBdXFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICBmaW5hbmNpYWxfeWVhcnM6IFtdLFxcclxcbiAgICAgICAgICAgIHNlYXJjaF9tYWNoaW5lczogW10sXFxyXFxuICAgICAgICAgICAgc2VhcmNoX3NpdGVzOiBbXSxcXHJcXG4gICAgICAgICAgICBzZWFyY2hfdGlja2V0czogW10sXFxyXFxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXFxyXFxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXM6IFtdLFxcclxcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcXHJcXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXFxyXFxuICAgICAgICB9O1xcclxcbiAgICB9LFxcclxcbiAgICB3YXRjaDoge1xcclxcbiAgICAgICAgJ3NlYXJjaC5xdWFydGVyJyhuKSB7XFxyXFxuICAgICAgICAgICAgaWYgKG4pIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV9mcm9tID0gJydcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV90byA9ICcnXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLm1vbnRoID0gJydcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgJ3NlYXJjaC5kYXRlX2Zyb20nKG4pIHtcXHJcXG4gICAgICAgICAgICBpZiAobikge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnF1YXJ0ZXIgPSAnJ1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICAnc2VhcmNoLmRhdGVfdG8nKG4pIHtcXHJcXG4gICAgICAgICAgICBpZiAobikge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5tb250aCA9ICcnXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnF1YXJ0ZXIgPSAnJ1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICAnc2VhcmNoLm1vbnRoJyhuKSB7XFxyXFxuICAgICAgICAgICAgaWYgKG4pIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV9mcm9tID0gJydcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZGF0ZV90byA9ICcnXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnF1YXJ0ZXIgPSAnJ1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICBzZWFyY2g6IHtcXHJcXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobikge1xcclxcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvZGFzaGJvYXJkJywgdGhpcy5zZWFyY2gpXFxyXFxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlcy5kYXRhLmRhdGFcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhckVxdWlwbWVudE9wdGlvbnMueGF4aXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuRXF1aXBtZW50Q2hhcnQub3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJQcm9qZWN0T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5Qcm9qZWN0Q2hhcnQub3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzXFxyXFxuICAgICAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGRlZXA6IHRydWVcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBhc3luYyBcXFwic2VhcmNoLnN1Yl9jYXRlZ29yeV9pZFxcXCIobiwgbykge1xcclxcbiAgICAgICAgICAgIGlmIChuKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgYXN5bmMgXFxcInNlYXJjaC5zaXRlX2lkXFxcIihuLCBvKSB7XFxyXFxuICAgICAgICAgICAgaWYgKG4pIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICBcXFwic2VhcmNoLmNhdGVnb3J5X2lkXFxcIjoge1xcclxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuLCBvKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmIChuKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9jYXRlZ29yeS9cXFwiICsgbikudGhlbigocmVzKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcXHJcXG4gICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgfSxcXHJcXG4gICAgY3JlYXRlZCgpIHtcXHJcXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYmFyRXF1aXBtZW50T3B0aW9ucy54YXhpcyk7XFxyXFxuICAgICAgICB2YXIgeWVhcnNMZW5ndGggPSAzMDtcXHJcXG4gICAgICAgIHZhciBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcXHJcXG4gICAgICAgIGZvciAodmFyIGkgPSAyMDIyOyBpIDw9IGN1cnJlbnRZZWFyOyBpKyspIHtcXHJcXG4gICAgICAgICAgICB2YXIgbmV4dCA9IGkgKyAxO1xcclxcbiAgICAgICAgICAgIHZhciB5ZWFyID0gaSArICctJyArIG5leHQudG9TdHJpbmcoKTtcXHJcXG4gICAgICAgICAgICB0aGlzLmZpbmFuY2lhbF95ZWFycy5wdXNoKHllYXIpXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcXHJcXG4gICAgICAgIGF4aW9zLnBvc3QoJ2FwaS9kYXNoYm9hcmQnLCB0aGlzLnNlYXJjaClcXHJcXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMgPSByZXMuZGF0YS5kYXRhXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuYmFyRXF1aXBtZW50T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5FcXVpcG1lbnRDaGFydC5vcHRpb25zLnhheGlzLmNhdGVnb3JpZXNcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5iYXJQcm9qZWN0T3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5Qcm9qZWN0Q2hhcnQub3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzXFxyXFxuICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xcclxcbiAgICAgICAgICAgIH0pXFxyXFxuXFxyXFxuICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9nZXRfcHJlX21hY2hpbmVcXFwiKS50aGVuKChyZXMpID0+IHtcXHJcXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLkNhdGVnb3J5O1xcclxcbiAgICAgICAgICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xcclxcbiAgICAgICAgfSk7XFxyXFxuICAgICAgICBheGlvc1xcclxcbiAgICAgICAgICAgIC5nZXQoXFxcIi9hcGkvaW5pdGlhbF90aWNrZXRcXFwiKVxcclxcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnZlbmRvcnM7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMubWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaF9zaXRlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zaXRlcztcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkX3VzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLmNyZWF0ZWRfdXNlcnM7XFxyXFxuICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFxcXCJPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmdcXFwiKSk7XFxyXFxuXFxyXFxuXFxyXFxuICAgIH0sXFxyXFxuICAgIG1vdW50ZWQoKSB7XFxyXFxuICAgICAgICBpZiAodGhpcy4kZ2F0ZS5pc0FkbWluKCkpIHtcXHJcXG4gICAgICAgICAgICAvLyB0aGlzLiRyb3V0ZXIucHVzaCgnL3VzZXJzJykuY2F0Y2goKCkgPT4geyB9KTtcXHJcXG4gICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goXFxcIi90aWNrZXRzXFxcIikuY2F0Y2goKCkgPT4geyB9KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgZ2V0TGFiZWwodmFsKSB7XFxyXFxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFxcXCJvYmplY3RcXFwiKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZmFyX25vICsgXFxcIiAtIFxcXCIgKyB2YWwubmFtZTtcXHJcXG4gICAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBhc3luYyBnZXRfbWFjaGluZSgpIHtcXHJcXG4gICAgICAgICAgICBheGlvc1xcclxcbiAgICAgICAgICAgICAgICAuZ2V0KFxcXCIvYXBpL3JlcG9ydHMvbWFjaGluZXNcXFwiLCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXRlX2lkOiB0aGlzLnNlYXJjaC5zaXRlX2lkLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiB0aGlzLnNlYXJjaC5jYXRlZ29yeV9pZCxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6IHRoaXMuc2VhcmNoLnN1Yl9jYXRlZ29yeV9pZCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfbWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGE7XFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oXFxcIk9oLiBTb21ldGhpbmcgd2VudCB3cm9uZ1xcXCIpKTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgIH0sXFxyXFxufTtcXHJcXG48L3NjcmlwdD5cXHJcXG48c3R5bGU+XFxyXFxuI2FwZXhjaGFydHNkbnQxIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfdm0ucmVjb3Jkc1xuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJcIiB9IH0sIFtfdm0uX3YoXCJGWVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmZpbmFuY2lhbF95ZWFycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBGWS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmaW5hbmNpYWxfeWVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guZmluYW5jaWFsX3llYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiZmluYW5jaWFsX3llYXJcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmZpbmFuY2lhbF95ZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAhX3ZtLnNlYXJjaC5kYXRlX2Zyb20gJiZcbiAgICAgICAgICAgICAgICAhX3ZtLnNlYXJjaC5kYXRlX3RvICYmXG4gICAgICAgICAgICAgICAgIV92bS5zZWFyY2gubW9udGggJiZcbiAgICAgICAgICAgICAgICBfdm0uc2VhcmNoLmZpbmFuY2lhbF95ZWFyXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbX3ZtLl92KFwiUXVhcnRlclwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5xdWFydGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gucXVhcnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdWFydGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiLS1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiT3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNC02XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJPcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI3LTlcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIk9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjEwLTEyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiM1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJPcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxLTNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCI0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAhX3ZtLnNlYXJjaC5kYXRlX2Zyb20gJiZcbiAgICAgICAgICAgICAgICAhX3ZtLnNlYXJjaC5kYXRlX3RvICYmXG4gICAgICAgICAgICAgICAgIV92bS5zZWFyY2gucXVhcnRlclxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIlwiIH0gfSwgW192bS5fdihcIk1vbnRoXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLm1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gubW9udGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9udGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCItLVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5tb250aE5hbWVzLCBmdW5jdGlvbihpdCwgeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogXCJtXCIgKyB4LCBhdHRyczogeyB2YWx1ZTogeCArIDEgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAhX3ZtLnNlYXJjaC5tb250aCAmJiAhX3ZtLnNlYXJjaC5xdWFydGVyXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZyb20gRGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkYXRldGltZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZS16b25lXCI6IFwiQXNpYS9Lb2xrYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNyZWF0ZWQgZnJvbSBkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5kYXRlX2Zyb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJkYXRlX2Zyb21cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guZGF0ZV9mcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICFfdm0uc2VhcmNoLm1vbnRoICYmICFfdm0uc2VhcmNoLnF1YXJ0ZXJcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVG8gRGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkYXRldGltZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZS16b25lXCI6IFwiQXNpYS9Lb2xrYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNyZWF0ZWQgdG8gZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guZGF0ZV90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImRhdGVfdG9cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guZGF0ZV90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUHJvamVjdCBOYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2l0ZV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnNlYXJjaF9zaXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNob29zZSBQcm9qZWN0Li4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNpdGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnNpdGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwic2l0ZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guc2l0ZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVxdWlwbWVudCBDYXRlZ29yeVwiKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9vc2UgQ2F0ZWdvcnkgLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5jYXRlZ29yeV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiY2F0ZWdvcnlfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5jYXRlZ29yeV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxcXFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zdWJfY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNob29zZSBkZXNjcmlwdGlvbiAuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnN1Yl9jYXRlZ29yeV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJzdWJfY2F0ZWdvcnlfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnN1Yl9jYXRlZ29yeV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVxdWlwbWVudCBOYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXQtb3B0aW9uLWxhYmVsXCI6IF92bS5nZXRMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2VhcmNoX21hY2hpbmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIEVxdWlwbWVudCAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWFjaGluZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gubWFjaGluZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJtYWNoaW5lX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5tYWNoaW5lX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyByb3ctZXEtaGVpZ2h0IG10LTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHkgcC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC02IHAtMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYXBleGNoYXJ0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRvbnV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uZG9udXRDaGFydE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXM6IF92bS5yZWNvcmRzLmNvbXBsYWluX25hdHVyZV9jaGFydC5zZXJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02IHAtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyIHAtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNiBwci0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveCBiZy15ZWxsb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1udW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnJlY29yZHMudG90YWxfdGlja2V0cykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVG90YWwgQ29tcGxhaW50IFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNiBwbC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3ggYmctc3VjY2Vzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LW51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnJlY29yZHMuYXZnX3RhdCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LXRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBdmVyYWdlIFRBVCAoRGF5cylcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgcHItMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmdiYSgyNTUsIDE5MywgNywgMC43OCkgIWltcG9ydGFudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1udW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5yZWNvcmRzLmNsb3NlZF90aWNrZXRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2xvc2VkIENhbGxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgcGwtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzM4YzE3MWM1ICFpbXBvcnRhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtbnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ucmVjb3Jkcy53aXRoaW5fdGF0KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIldpdGhpbiBUQVRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgcHItMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmdiYSgyNTUsIDE5MywgNywgMC40OTUpICFpbXBvcnRhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtbnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucmVjb3Jkcy5vcGVuX3RpY2tldHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LXRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJPcGVuIENhbGxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgcGwtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzM4YzE3MTlmICFpbXBvcnRhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtbnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucmVjb3Jkcy5leGNlZWRpbmdfdGF0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRXhjZWVkaW5nIFRBVFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHkgcC0xXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJhcGV4Y2hhcnRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMyOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmJhckNvdW50T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllczogX3ZtLnJlY29yZHMuYmFyQ291bnRDaGFydC5zZXJpZXNcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHkgcC0xXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJhcGV4Y2hhcnRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnJlY29yZHMuRXF1aXBtZW50Q2hhcnQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllczogX3ZtLnJlY29yZHMuRXF1aXBtZW50Q2hhcnQuc2VyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IHAtMVwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYXBleGNoYXJ0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJiYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzNTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5yZWNvcmRzLlByb2plY3RDaGFydC5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzOiBfdm0ucmVjb3Jkcy5Qcm9qZWN0Q2hhcnQuc2VyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbX3ZtLl92KFwiQ29tcGxhaW5cIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdG9vbHNcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi10b29sXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBcImRhdGEtY2FyZC13aWRnZXRcIjogXCJjb2xsYXBzZVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtbWludXNcIiB9KV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHRleHQtY2VudGVyXCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIkNvdW50IG9mIENvbXBsYWludCBOYXR1cmUgYnkgRlksIFF1YXJ0ZXIgYW5kIENhbGwgU3RhdHVzXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdG9vbHNcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi10b29sXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBcImRhdGEtY2FyZC13aWRnZXRcIjogXCJjb2xsYXBzZVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtbWludXNcIiB9KV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIkNvdW50IG9mIENvbXBsYWludCBieSBFcXVpcG1lbnQgVHlwZVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRvb2xzXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tdG9vbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgXCJkYXRhLWNhcmQtd2lkZ2V0XCI6IFwiY29sbGFwc2VcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLW1pbnVzXCIgfSldXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJDb3VudCBvZiBDb21wbGFpbnQgYnkgUHJvamVjdFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRvb2xzXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tdG9vbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgXCJkYXRhLWNhcmQtd2lkZ2V0XCI6IFwiY29sbGFwc2VcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLW1pbnVzXCIgfSldXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWQ5ZDg3NjgyXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMDUzZTQ1YjZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoY29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIilcbn1cbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9EYXNoYm9hcmRDYWxsTG9ja1N0YXR1cy52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZDlkODc2ODJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRGFzaGJvYXJkQ2FsbExvY2tTdGF0dXMudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcRGFzaGJvYXJkXFxcXERhc2hib2FyZENhbGxMb2NrU3RhdHVzLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kOWQ4NzY4MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWQ5ZDg3NjgyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=