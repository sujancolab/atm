(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Reports/Mileage.vue":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Reports/Mileage.vue ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var multi_range_slider_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multi-range-slider-vue */ "./node_modules/multi-range-slider-vue/MultiRangeSlider.vue");
/* harmony import */ var multi_range_slider_vue_MultiRangeSliderBlack_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multi-range-slider-vue/MultiRangeSliderBlack.css */ "./node_modules/multi-range-slider-vue/MultiRangeSliderBlack.css");
/* harmony import */ var multi_range_slider_vue_MultiRangeSliderBlack_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multi_range_slider_vue_MultiRangeSliderBlack_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var multi_range_slider_vue_MultiRangeSliderBarOnly_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multi-range-slider-vue/MultiRangeSliderBarOnly.css */ "./node_modules/multi-range-slider-vue/MultiRangeSliderBarOnly.css");
/* harmony import */ var multi_range_slider_vue_MultiRangeSliderBarOnly_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(multi_range_slider_vue_MultiRangeSliderBarOnly_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SideBarModal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../SideBarModal.vue */ "./resources/js/components/SideBarModal.vue");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_4___default()),
    MultiRangeSlider: multi_range_slider_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SidebarModal: _SideBarModal_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    MachinePop: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../MachineFarPop.vue */ "./resources/js/components/MachineFarPop.vue"))
  },
  data() {
    return {
      pmModalData: '',
      created_users: [],
      search_machines: [],
      search_sites: [],
      search: {
        page: 1,
        machine_id: '',
        site_id: '',
        start_at: '',
        end_at: ''
      },
      categories: [],
      sub_categories: [],
      sites: [],
      selected_machine: '',
      users: [],
      machines: [],
      MainData: {}
    };
  },
  methods: {
    download() {
      let cloaderd = this.$loading.show();
      this.search.page = "";
      this.search.export = "export";
      axios({
        url: '/api/get_hsd_data',
        method: 'GET',
        responseType: 'blob',
        // Important
        params: this.search
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'hsd_readings.xlsx'); // Set the file name
        document.body.appendChild(link);
        link.click();
        cloaderd.hide();
      }).catch(error => {
        console.error("There was an error downloading the file:", error);
        cloaderd.hide();
      });
    },
    openSideModal() {
      this.$refs.sidebarModal.openSideModal();
    },
    closeSideModal() {
      this.$refs.sidebarModal.closeSideModal();
    },
    view_site_details(data) {
      this.pmModalData = data;
      $('#MachineSiteModal2').modal('show');
    },
    reset_filter() {
      this.search = {
        page: 1,
        machine_id: '',
        site_id: '',
        start_at: '',
        end_at: ''
      };
      this.getResults();
    },
    UpdateValues(e) {
      this.search.tat_from = e.minValue;
      this.search.tat_to = e.maxValue;
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
      axios.get('api/get_mileage_data', {
        params: {
          page: page,
          search: this.search
        }
      }).then(({
        data
      }) => {
        this.MainData = data.data;
        cloaderd.hide();
      });
    },
    loadData() {
      let cloaderd = this.$loading.show();
      axios.get("/api/get_mileage_data", {
        params: this.search
      }).then(({
        data
      }) => {
        this.MainData = data.data;
        cloaderd.hide();
      });
    }
  },
  created() {
    this.loadData();
  },
  beforeCreate() {
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
exports.push([module.i, "\n.close[data-v-461a4589]{\n  position: absolute;\n  right: 10px;\n  border: 1px solid black;\n  width: 33px;\n  height: 33px;\n  background: white;\n  border-radius: 50px;\n}\n.sidebar-modal[data-v-461a4589] {\n  padding: 10px 0 10px;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 450px; /* Adjust as needed */\n  background-color: #fff;\n  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);\n  transition: transform 0.3s ease;\n  transform: translateX(100%);\n  z-index: 9999;\n  overflow-y: auto;\n}\n.sidebar-modal.active[data-v-461a4589] {\n  transform: translateX(0);\n}\n.sidebar-content[data-v-461a4589] {\n  height: 100%;\n  overflow-y: auto;\n}\n.sidebar-overlay[data-v-461a4589] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n", "", {"version":3,"sources":["F:/wamp64/www/rmm/resources/js/components/resources/js/components/SideBarModal.vue"],"names":[],"mappings":";AA8BA;EACA,mBAAA;EACA,YAAA;EACA,wBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,oBAAA;CACA;AACA;EACA,qBAAA;EACA,gBAAA;EACA,OAAA;EACA,UAAA;EACA,SAAA;EACA,aAAA,CAAA,sBAAA;EACA,uBAAA;EACA,6CAAA;EACA,gCAAA;EACA,4BAAA;EACA,cAAA;EACA,iBAAA;CACA;AAEA;EACA,yBAAA;CACA;AAEA;EACA,aAAA;EACA,iBAAA;CACA;AAEA;EACA,mBAAA;EACA,OAAA;EACA,UAAA;EACA,QAAA;EACA,SAAA;EACA,qCAAA;CACA","file":"SideBarModal.vue","sourcesContent":["<template>\n    <div class=\"sidebar-modal\" :class=\"{ 'active': isOpen }\">\n      <div class=\"container-fluid\">\n        <button class=\"close\" @click=\"closeSideModal\"><i class=\"fa fa-times\" aria-hidden=\"true\" style=\"font-size: 17px;color: black;\"></i></button>\n        <!-- Content of the sidebar modal -->\n        <slot></slot>\n      </div>\n      <div @click=\"closeSideModal\"></div>\n    </div>\n  </template>\n  \n  <script>\n  export default {\n    data() {\n      return {\n        isOpen: false,\n      };\n    },\n    methods: {\n        openSideModal() {\n        this.isOpen = true;\n      },\n      closeSideModal() {\n        this.isOpen = false;\n      },\n    },\n  };\n  </script>\n  \n  <style scoped>\n  .close{\n    position: absolute;\n    right: 10px;\n    border: 1px solid black;\n    width: 33px;\n    height: 33px;\n    background: white;\n    border-radius: 50px;\n  }\n  .sidebar-modal {\n    padding: 10px 0 10px;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    width: 450px; /* Adjust as needed */\n    background-color: #fff;\n    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);\n    transition: transform 0.3s ease;\n    transform: translateX(100%);\n    z-index: 9999;\n    overflow-y: auto;\n  }\n  \n  .sidebar-modal.active {\n    transform: translateX(0);\n  }\n  \n  .sidebar-content {\n    height: 100%;\n    overflow-y: auto;\n  }\n  \n  .sidebar-overlay {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  </style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Reports/Mileage.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Reports/Mileage.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.bg-red {\n  background-color: #ef5563 !important;\n}\n.bg-green {\n  background-color: #70ed70 !important;\n}\n.bg-yellow {\n  background-color: #f1c84c !important;\n}\n", "", {"version":3,"sources":["F:/wamp64/www/rmm/resources/js/components/Reports/resources/js/components/Reports/Mileage.vue"],"names":[],"mappings":";AAkSA;EACA,qCAAA;CACA;AACA;EACA,qCAAA;CACA;AACA;EACA,qCAAA;CACA","file":"Mileage.vue","sourcesContent":["<template>\n    <section class=\"content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n\n                <div class=\"col-12\">\n\n                    <div class=\"card\" >\n                        <div class=\"card-header\">\n                            <h3 class=\"card-title\">Mileage Report</h3>\n                            <div class=\"card-tools\">\n                                <button class=\"btn btn-sm btn-primary\" @click=\"download\"><i\n                                    class=\"fa fa-download mr-2\" aria-hidden=\"true\"></i> Download Excel</button>\n                                <button class=\"btn btn-sm btn-blue\" @click=\"openSideModal\"><i\n                                    class=\"fa fa-sliders-h mr-2\" aria-hidden=\"true\"></i> Filter</button>\n                            </div>\n                        </div>\n\n                        <SidebarModal ref=\"sidebarModal\">\n                            <!-- Content of the sidebar modal goes here -->\n                            <h3><i class=\"fa fa-sliders-h mr-2\" aria-hidden=\"true\" style=\"font-size: 22px;\"></i> Filter\n                            </h3>\n                            <hr>\n                            <form autocomplete=\"off\" @submit.prevent=\"getResults()\">\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">FAR No</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"name\" :get-option-label=\"getLabel\"\n                                            :reduce=\"(option) => option.id\" :options=\"search_machines\"\n                                            placeholder=\"Enter machines ...\" v-model=\"search.machine_id\"\n                                            name=\"machine_id\">\n                                        </v-select>\n                                    </div>\n                                </div>\n\n                                <!-- <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">Select Site</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"site_name\" :reduce=\"(option) => option.id\"\n                                            :options=\"search_sites\" placeholder=\"Select Site...\"\n                                            v-model=\"search.site_id\" name=\"site_id\">\n                                        </v-select>\n                                    </div>\n                                </div> -->\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">From Date</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.start_at\" input-class=\"form-control\" placeholder=\"Date\" />\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">To Date</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.end_at\" input-class=\"form-control\" placeholder=\"Date\" />\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-6 mb-2 pr-1\">\n                                        <button type=\"submit\" class=\"btn btn-success btn-block\">Search</button>\n                                    </div>\n                                    <div class=\"col-6 mb-2 pl-1\">\n                                        <button type=\"button\" class=\"btn btn-danger btn-block\"\n                                            @click=\"reset_filter()\">Reset</button>\n                                    </div>\n                                </div>\n                            </form>\n                        </SidebarModal>\n\n                        <!-- /.card-header -->\n                        <div class=\"card-body table-responsive p-0 ticketTable\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th class=\"stickey\">FAR No</th>\n                                        <th>Name</th>\n                                        <th>Current Site</th>\n                                        <th>Model</th>\n                                        <th>Total Oil Consumption</th>\n                                        <th>Official Mileage (Kms/Ltr)</th>\n                                        <th>Actual Mileage (Kms/Ltr)</th>\n                                        <th>Last Mileage (Kms/Ltr)</th>\n                                        <th>Official Consumption (Ltrs/Hr)</th>\n                                        <th>Actual Consumption (Ltrs/Hr)</th>\n                                        <th>Last Consumption (Ltrs/Hr)</th>\n                                        <th>Current Consumption (Ltrs/Hr)</th>\n                                        <th>Total Entries</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr v-for=\"(d, index)  in MainData.data\" :key=\"index\">\n                                        <td>{{ d.far_no }}</td>\n                                        <td >{{ d.name }}</td>\n                                        <td class=\"pb-2\">{{ d.current_site?d.current_site.site_name:\"\" }}</td>\n                                        <td >{{ d.machine_model.name }}</td>\n                                        <td >{{ d.total_oil_consumtion }} / {{d.total_entries}} entries</td>\n                                        <td >{{ d.standard_consumption_hr_per_ltr?d.standard_consumption_hr_per_ltr:0 }}</td>\n                                        <td >{{ d.actual_milage }}</td>\n                                        <td >{{ d.last_milage }}</td>\n                                        <td >{{ d.standard_consumption_km_per_ltr?d.standard_consumption_km_per_ltr:0}}</td>\n                                        <td >{{ d.actual_consumption }}</td>\n                                        <td ></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <!-- /.card-body -->\n                        <div class=\"card-footer\">\n                            <pagination :data=\"MainData\" :limit=\"10\" @pagination-change-page=\"getResults\" v-if=\"MainData\"></pagination>\n                        </div>\n                    </div>\n                    <!-- /.card -->\n                </div>\n            </div>\n        </div>\n    </section>\n</template>\n\n<script>\nimport MultiRangeSlider from \"multi-range-slider-vue\";\nimport \"multi-range-slider-vue/MultiRangeSliderBlack.css\";\nimport \"multi-range-slider-vue/MultiRangeSliderBarOnly.css\";\nimport SidebarModal from './../SideBarModal.vue';\n\nimport VueTagsInput from '@johmun/vue-tags-input';\nexport default {\n    components: {\n        VueTagsInput,\n        MultiRangeSlider,SidebarModal,\n        MachinePop: () => import('../MachineFarPop.vue'),\n    },\n    data() {\n        return {\n            pmModalData:'',\n            created_users: [],\n            search_machines: [],\n            search_sites: [],\n            search: {\n                page: 1,\n                machine_id: '',\n                site_id: '',\n                start_at: '',\n                end_at: '',\n            },\n            categories: [],\n            sub_categories: [],\n            sites: [],\n            selected_machine: '',\n            users: [],\n            machines: [],\n            MainData: {},\n\n        }\n    },\n    methods: {\n        download(){\n            let cloaderd = this.$loading.show();\n            this.search.page = \"\";\n            this.search.export = \"export\";\n            axios({\n                url: '/api/get_hsd_data',\n                method: 'GET',\n                responseType: 'blob', // Important\n                params: this.search\n            }).then(response => {\n                const url = window.URL.createObjectURL(new Blob([response.data]));\n                const link = document.createElement('a');\n                link.href = url;\n                link.setAttribute('download', 'hsd_readings.xlsx'); // Set the file name\n                document.body.appendChild(link);\n                link.click();\n                cloaderd.hide();\n            }).catch(error => {\n                console.error(\"There was an error downloading the file:\", error);\n                cloaderd.hide();\n            });\n        },\n        openSideModal() {\n            this.$refs.sidebarModal.openSideModal();\n        },\n        closeSideModal() {\n            this.$refs.sidebarModal.closeSideModal();\n        },\n        view_site_details(data) {\n            this.pmModalData = data\n            $('#MachineSiteModal2').modal('show');\n        },\n        reset_filter(){\n            this.search= {\n                page: 1,\n                machine_id: '',\n                site_id: '',\n                start_at: '',\n                end_at: '',\n            }\n            this.getResults()\n        },\n        UpdateValues(e) {\n            this.search.tat_from = e.minValue;\n            this.search.tat_to = e.maxValue;\n        },\n\n\n        getLabel(val) {\n            if (typeof val === 'object') {\n                return val.far_no + ' - ' + val.name;\n            } else {\n                return val;\n            }\n        },\n        getResults(page = 1) {\n\n            let cloaderd = this.$loading.show();\n            axios.get('api/get_mileage_data', {\n                params: {\n                    page: page,\n                    search:this.search\n                }\n            }).then(({ data }) => {\n                this.MainData = data.data\n                cloaderd.hide();\n            });\n        },\n        loadData() {\n            let cloaderd = this.$loading.show();\n            axios.get(\"/api/get_mileage_data\", {\n                params: this.search\n            }).then(({\n                data\n            }) => {\n                this.MainData = data.data;\n                cloaderd.hide();\n            });\n        },\n\n    },\n    created() {\n        this.loadData();\n    },\n    beforeCreate() {\n        axios.get(\"/api/initial_ticket\").then(response => {\n            this.users = response.data.data.vendors;\n            this.machines = response.data.data.machines;\n            this.search_machines = response.data.data.machines;\n            this.search_sites = response.data.data.sites;\n            this.created_users = response.data.data.created_users;\n        }).catch(() => console.warn('Oh. Something went wrong'));\n    },\n    watch: {\n        async 'form.sub_category_id'(n, o) {\n            if (n) {\n                this.get_machine()\n            }\n        },\n        async 'form.site_id'(n, o) {\n            if (n) {\n                this.get_machine()\n            }\n        },\n\n        'form.category_id': {\n            handler: function (n, o) {\n\n                if (n) {\n                    axios.get(\"api/category/\" + n)\n                        .then((res) => {\n                            this.sub_categories = res.data.data;\n                        })\n                    this.get_machine()\n                }\n            },\n            deep: true,\n            initial: true\n        },\n\n    },\n}\n</script>\n<style>\n.bg-red {\n  background-color: #ef5563 !important;\n}\n.bg-green {\n  background-color: #70ed70 !important;\n}\n.bg-yellow {\n  background-color: #f1c84c !important;\n}\n</style>\n"],"sourceRoot":""}]);

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d0b9d5f6\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Reports/Mileage.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d0b9d5f6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Reports/Mileage.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c(
            "div",
            { staticClass: "card" },
            [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", { staticClass: "card-title" }, [
                  _vm._v("Mileage Report")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-tools" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-primary",
                      on: { click: _vm.download }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-download mr-2",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" Download Excel")
                    ]
                  ),
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
                ])
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
                    _c("div", { staticClass: "row align-items-center mb-2" }, [
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
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row align-items-center mb-2" }, [
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
                              value: _vm.search.start_at,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "start_at", $$v)
                              },
                              expression: "search.start_at"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row align-items-center mb-2" }, [
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
                              value: _vm.search.end_at,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "end_at", $$v)
                              },
                              expression: "search.end_at"
                            }
                          })
                        ],
                        1
                      )
                    ]),
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
                { staticClass: "card-body table-responsive p-0 ticketTable" },
                [
                  _c("table", { staticClass: "table table-hover" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.MainData.data, function(d, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(d.far_no))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(d.name))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "pb-2" }, [
                            _vm._v(
                              _vm._s(
                                d.current_site ? d.current_site.site_name : ""
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(d.machine_model.name))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(d.total_oil_consumtion) +
                                " / " +
                                _vm._s(d.total_entries) +
                                " entries"
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                d.standard_consumption_hr_per_ltr
                                  ? d.standard_consumption_hr_per_ltr
                                  : 0
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(d.actual_milage))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(d.last_milage))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                d.standard_consumption_km_per_ltr
                                  ? d.standard_consumption_km_per_ltr
                                  : 0
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(d.actual_consumption))]),
                          _vm._v(" "),
                          _c("td")
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
                  _vm.MainData
                    ? _c("pagination", {
                        attrs: { data: _vm.MainData, limit: 10 },
                        on: { "pagination-change-page": _vm.getResults }
                      })
                    : _vm._e()
                ],
                1
              )
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
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "stickey" }, [_vm._v("FAR No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Current Site")]),
        _vm._v(" "),
        _c("th", [_vm._v("Model")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Oil Consumption")]),
        _vm._v(" "),
        _c("th", [_vm._v("Official Mileage (Kms/Ltr)")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actual Mileage (Kms/Ltr)")]),
        _vm._v(" "),
        _c("th", [_vm._v("Last Mileage (Kms/Ltr)")]),
        _vm._v(" "),
        _c("th", [_vm._v("Official Consumption (Ltrs/Hr)")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actual Consumption (Ltrs/Hr)")]),
        _vm._v(" "),
        _c("th", [_vm._v("Last Consumption (Ltrs/Hr)")]),
        _vm._v(" "),
        _c("th", [_vm._v("Current Consumption (Ltrs/Hr)")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Entries")])
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Reports/Mileage.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Reports/Mileage.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Mileage.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Reports/Mileage.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6ee7d152", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/js/components/Reports/Mileage.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Reports/Mileage.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Mileage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Mileage.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Reports/Mileage.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d0b9d5f6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Mileage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-d0b9d5f6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Mileage.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d0b9d5f6\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Reports/Mileage.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Mileage.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Reports/Mileage.vue")
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Mileage_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d0b9d5f6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Mileage_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d0b9d5f6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Mileage_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\Reports\\Mileage.vue"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVwb3J0cy9NaWxlYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvU2lkZUJhck1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9TaWRlQmFyTW9kYWwudnVlPzRmN2QiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVwb3J0cy9NaWxlYWdlLnZ1ZT8yYWM1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1NpZGVCYXJNb2RhbC52dWU/MTg4MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9SZXBvcnRzL01pbGVhZ2UudnVlPzU1ODYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvU2lkZUJhck1vZGFsLnZ1ZT9jYmIxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlcG9ydHMvTWlsZWFnZS52dWU/ZmZmMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9SZXBvcnRzL01pbGVhZ2UudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1NpZGVCYXJNb2RhbC52dWUiXSwibmFtZXMiOlsiY29tcG9uZW50cyIsIlZ1ZVRhZ3NJbnB1dCIsIk11bHRpUmFuZ2VTbGlkZXIiLCJTaWRlYmFyTW9kYWwiLCJNYWNoaW5lUG9wIiwiZGF0YSIsInBtTW9kYWxEYXRhIiwiY3JlYXRlZF91c2VycyIsInNlYXJjaF9tYWNoaW5lcyIsInNlYXJjaF9zaXRlcyIsInNlYXJjaCIsInBhZ2UiLCJtYWNoaW5lX2lkIiwic2l0ZV9pZCIsInN0YXJ0X2F0IiwiZW5kX2F0IiwiY2F0ZWdvcmllcyIsInN1Yl9jYXRlZ29yaWVzIiwic2l0ZXMiLCJzZWxlY3RlZF9tYWNoaW5lIiwidXNlcnMiLCJtYWNoaW5lcyIsIk1haW5EYXRhIiwibWV0aG9kcyIsImRvd25sb2FkIiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJyZXNwb25zZVR5cGUiLCJwYXJhbXMiLCJsaW5rIiwiZG9jdW1lbnQiLCJjbG9hZGVyZCIsImNvbnNvbGUiLCJvcGVuU2lkZU1vZGFsIiwiY2xvc2VTaWRlTW9kYWwiLCJ2aWV3X3NpdGVfZGV0YWlscyIsIiQiLCJyZXNldF9maWx0ZXIiLCJVcGRhdGVWYWx1ZXMiLCJnZXRMYWJlbCIsImdldFJlc3VsdHMiLCJsb2FkRGF0YSIsImNyZWF0ZWQiLCJiZWZvcmVDcmVhdGUiLCJ3YXRjaCIsImhhbmRsZXIiLCJ0aGVuIiwiZGVlcCIsImluaXRpYWwiLCJpc09wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0lzRDtBQUNJO0FBQ0U7QUFDWDtBQUVDO0FBQ25DO0VBQ2ZBO0lBQ0FDO0lBQ0FDO0lBQUFDO0lBQ0FDO0VBQ0E7RUFDQUM7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztNQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO0lBRUE7RUFDQTtFQUNBQztJQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUFBO1FBQ0FDO01BQ0E7UUFDQTtRQUNBO1FBQ0FDO1FBQ0FBO1FBQ0FDO1FBQ0FEO1FBQ0FFO01BQ0E7UUFDQUM7UUFDQUQ7TUFDQTtJQUNBO0lBQ0FFO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBQztJQUNBO0lBQ0FDO01BQ0E7UUFDQTNCO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0F3QjtNQUNBO01BQ0E7SUFDQTtJQUdBQztNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUVBO01BQ0FoQjtRQUNBSTtVQUNBbEI7VUFDQUQ7UUFDQTtNQUNBO1FBQUFMO01BQUE7UUFDQTtRQUNBMkI7TUFDQTtJQUNBO0lBQ0FVO01BQ0E7TUFDQWpCO1FBQ0FJO01BQ0E7UUFDQXhCO01BQ0E7UUFDQTtRQUNBMkI7TUFDQTtJQUNBO0VBRUE7RUFDQVc7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FuQjtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FvQjtJQUNBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUE7TUFDQUM7UUFFQTtVQUNBckIsK0JBQ0FzQjtZQUNBO1VBQ0E7VUFDQTtRQUNBO01BQ0E7TUFDQUM7TUFDQUM7SUFDQTtFQUVBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25SRDtFQUNBNUM7SUFDQTtNQUNBNkM7SUFDQTtFQUNBO0VBQ0EzQjtJQUNBVztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0VBQ0E7QUFDQSxHOzs7Ozs7Ozs7OztBQzFCQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBa0Q7QUFDckY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDZCQUE2Qix1QkFBdUIsZ0JBQWdCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHNCQUFzQix3QkFBd0IsR0FBRyxtQ0FBbUMseUJBQXlCLG9CQUFvQixXQUFXLGNBQWMsYUFBYSxpQkFBaUIsa0RBQWtELGlEQUFpRCxvQ0FBb0MsZ0NBQWdDLGtCQUFrQixxQkFBcUIsR0FBRywwQ0FBMEMsNkJBQTZCLEdBQUcscUNBQXFDLGlCQUFpQixxQkFBcUIsR0FBRyxxQ0FBcUMsdUJBQXVCLFdBQVcsY0FBYyxZQUFZLGFBQWEseUNBQXlDLEdBQUcsVUFBVSxxSUFBcUksTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUscUJBQXFCLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLDBHQUEwRyxtQkFBbUIsNEtBQTRLLGFBQWEsZ05BQWdOLGNBQWMsZ0JBQWdCLGtDQUFrQyxPQUFPLGlCQUFpQiwyQkFBMkIsNkJBQTZCLFNBQVMsMkJBQTJCLDhCQUE4QixTQUFTLFFBQVEsT0FBTyw4Q0FBOEMseUJBQXlCLGtCQUFrQiw4QkFBOEIsa0JBQWtCLG1CQUFtQix3QkFBd0IsMEJBQTBCLEtBQUssb0JBQW9CLDJCQUEyQixzQkFBc0IsYUFBYSxnQkFBZ0IsZUFBZSxtQkFBbUIsb0RBQW9ELG1EQUFtRCxzQ0FBc0Msa0NBQWtDLG9CQUFvQix1QkFBdUIsS0FBSywrQkFBK0IsK0JBQStCLEtBQUssMEJBQTBCLG1CQUFtQix1QkFBdUIsS0FBSywwQkFBMEIseUJBQXlCLGFBQWEsZ0JBQWdCLGNBQWMsZUFBZSwyQ0FBMkMsS0FBSywrQkFBK0I7O0FBRWg3Rjs7Ozs7Ozs7Ozs7O0FDUEEsMkJBQTJCLG1CQUFPLENBQUMsc0dBQXFEO0FBQ3hGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxjQUFjLHlDQUF5QyxHQUFHLGFBQWEseUNBQXlDLEdBQUcsY0FBYyx5Q0FBeUMsR0FBRyxVQUFVLGdKQUFnSixNQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcseXBDQUF5cEMsOGhLQUE4aEssWUFBWSxzREFBc0QsVUFBVSxvRUFBb0UsZ0RBQWdELHNEQUFzRCx3QkFBd0Isc0RBQXNELDBCQUEwQixLQUFLLGlCQUFpQiw4REFBOEQseUVBQXlFLHNEQUFzRCxtQkFBbUIsc0RBQXNELGlCQUFpQixzREFBc0Qsd0VBQXdFLHNEQUFzRCx3QkFBd0Isd3NCQUF3c0IsOERBQThELGdFQUFnRSxtREFBbUQsc0RBQXNELGtCQUFrQixtQkFBbUIsaUlBQWlJLGVBQWUsa0JBQWtCLHFKQUFxSixvS0FBb0ssdU1BQXVNLGNBQWMsT0FBTyxpQkFBaUIscUJBQXFCLGtEQUFrRCxzQ0FBc0MsOENBQThDLHFCQUFxQixtTEFBbUwsb0JBQW9CLG9GQUFvRiwyREFBMkQsa0NBQWtDLHFFQUFxRSx1RUFBdUUsK0JBQStCLGtDQUFrQyxlQUFlLGtCQUFrQixxRkFBcUYsa0NBQWtDLGVBQWUsRUFBRSxXQUFXLDRCQUE0QixzREFBc0QsV0FBVyw2QkFBNkIsdURBQXVELFdBQVcsb0NBQW9DLHlGQUF5RixXQUFXLDBCQUEwQiw0QkFBNEIsb0tBQW9LLDBDQUEwQyw0QkFBNEIsZ0RBQWdELDhDQUE4QyxXQUFXLDhCQUE4Qiw0Q0FBNEMsdURBQXVELGVBQWUsT0FBTyw2QkFBNkIsZUFBZSxXQUFXLGlDQUFpQyxvREFBb0QsaURBQWlELDJCQUEyQiw0RkFBNEYsZUFBZSxTQUFTLE9BQU8sTUFBTSw2RUFBNkUsZUFBZSxFQUFFLFdBQVcsdUJBQXVCLGtEQUFrRCxvREFBb0Qsb0RBQW9ELFNBQVMscUNBQXFDLE1BQU0sNENBQTRDLGtDQUFrQyxlQUFlLEVBQUUsV0FBVyxVQUFVLGtCQUFrQiwwQkFBMEIsT0FBTyx1QkFBdUIsK0RBQStELHNEQUFzRCwwREFBMEQsaUVBQWlFLDJEQUEyRCxvRUFBb0UsV0FBVyx3REFBd0QsT0FBTyxlQUFlLDhDQUE4QyxzQkFBc0IsbURBQW1ELFdBQVcsdUNBQXVDLHNCQUFzQixtREFBbUQsV0FBVyxrQ0FBa0Msd0NBQXdDLDRCQUE0QixnR0FBZ0csa0VBQWtFLDJCQUEyQiw0REFBNEQsZUFBZSxnRUFBZ0UsVUFBVSxJQUFJLCtCQUErQix5Q0FBeUMsR0FBRyxhQUFhLHlDQUF5QyxHQUFHLGNBQWMseUNBQXlDLEdBQUcsK0JBQStCOztBQUVuaGE7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVDQUF1QyxxQkFBcUIsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGlDQUFpQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxhQUFhLDRCQUE0Qiw0QkFBNEIsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsc0NBQXNDO0FBQ3BFLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixNQUFNLDRCQUE0QixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0M7QUFDbEMsSUFBSSxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDcENoQjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQsZUFBZSxpQ0FBaUM7QUFDaEQsaUJBQWlCLHFCQUFxQjtBQUN0QyxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQztBQUNBLHlCQUF5Qiw2QkFBNkI7QUFDdEQsMEJBQTBCLDRCQUE0QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNEJBQTRCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHNCQUFzQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msc0JBQXNCO0FBQ3hELDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsK0JBQStCLDZDQUE2QztBQUM1RSxpQ0FBaUMscUNBQXFDO0FBQ3RFLHFDQUFxQyxTQUFTLG9CQUFvQixFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw2Q0FBNkM7QUFDNUUsaUNBQWlDLHFDQUFxQztBQUN0RSxxQ0FBcUMsU0FBUyxvQkFBb0IsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUJBQXFCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkNBQTZDO0FBQzVFLGlDQUFpQyxxQ0FBcUM7QUFDdEUscUNBQXFDLFNBQVMsb0JBQW9CLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFCQUFxQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFCQUFxQjtBQUNwRCxpQ0FBaUMsaUNBQWlDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpQ0FBaUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNERBQTREO0FBQzdFO0FBQ0EsK0JBQStCLG1DQUFtQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGFBQWE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msc0JBQXNCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkJBQTZCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQ0FBZ0M7QUFDaEUsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQztBQUNsQyxJQUFJLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ3pVaEI7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsZ2tCQUE2UztBQUNuVTtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsNkhBQWdFO0FBQ2xGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDWGY7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsdWhCQUF1UjtBQUM3UztBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsZ0lBQW1FO0FBQ3JGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ1hmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtQkFBTyxDQUFDLDJqQkFBZ1E7QUFDMVE7QUFDQTtBQUNpSDtBQUNhO0FBQzlIO0FBQ2dWO0FBQ2hWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0c7QUFDdEcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLDBIQUFjO0FBQ2hCLEVBQUUsa09BQWM7QUFDaEIsRUFBRSwyT0FBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUI7Ozs7Ozs7Ozs7Ozs7QUM5Q2hDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtQkFBTyxDQUFDLHVtQkFBeVI7QUFDblM7QUFDQTtBQUNtSDtBQUNhO0FBQ2hJO0FBQzhVO0FBQzlVO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUc7QUFDbkcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLCtIQUFjO0FBQ2hCLEVBQUUsc09BQWM7QUFDaEIsRUFBRSwrT0FBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvOC5idW5kbGUuZWFlZGFkNzZiMjRkM2Y4MjdkNWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj5NaWxlYWdlIFJlcG9ydDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdG9vbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJkb3dubG9hZFwiPjxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWRvd25sb2FkIG1yLTJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IERvd25sb2FkIEV4Y2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1ibHVlXCIgQGNsaWNrPVwib3BlblNpZGVNb2RhbFwiPjxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLXNsaWRlcnMtaCBtci0yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBGaWx0ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2lkZWJhck1vZGFsIHJlZj1cInNpZGViYXJNb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQ29udGVudCBvZiB0aGUgc2lkZWJhciBtb2RhbCBnb2VzIGhlcmUgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpIGNsYXNzPVwiZmEgZmEtc2xpZGVycy1oIG1yLTJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT1cImZvbnQtc2l6ZTogMjJweDtcIj48L2k+IEZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cIm9mZlwiIEBzdWJtaXQucHJldmVudD1cImdldFJlc3VsdHMoKVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBjb2wtY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1hY2hpbmVfaWRcIj5GQVIgTm88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwibmFtZVwiIDpnZXQtb3B0aW9uLWxhYmVsPVwiZ2V0TGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJzZWFyY2hfbWFjaGluZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG1hY2hpbmVzIC4uLlwiIHYtbW9kZWw9XCJzZWFyY2gubWFjaGluZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtYWNoaW5lX2lkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBjb2wtY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1hY2hpbmVfaWRcIj5TZWxlY3QgU2l0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJzaXRlX25hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzZWFyY2hfc2l0ZXNcIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCBTaXRlLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaC5zaXRlX2lkXCIgbmFtZT1cInNpdGVfaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gY29sLWN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYWNoaW5lX2lkXCI+RnJvbSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVwiQXNpYS9Lb2xrYXRhXCIgdi1tb2RlbD1cInNlYXJjaC5zdGFydF9hdFwiIGlucHV0LWNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJEYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gY29sLWN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYWNoaW5lX2lkXCI+VG8gRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXRpbWUgdmFsdWUtem9uZT1cIkFzaWEvS29sa2F0YVwiIHYtbW9kZWw9XCJzZWFyY2guZW5kX2F0XCIgaW5wdXQtY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkRhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBtYi0yIHByLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IG1iLTIgcGwtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVzZXRfZmlsdGVyKClcIj5SZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2lkZWJhck1vZGFsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1oZWFkZXIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmUgcC0wIHRpY2tldFRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInN0aWNrZXlcIj5GQVIgTm88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3VycmVudCBTaXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TW9kZWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBPaWwgQ29uc3VtcHRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5PZmZpY2lhbCBNaWxlYWdlIChLbXMvTHRyKTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdHVhbCBNaWxlYWdlIChLbXMvTHRyKTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxhc3QgTWlsZWFnZSAoS21zL0x0cik8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5PZmZpY2lhbCBDb25zdW1wdGlvbiAoTHRycy9Icik8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3R1YWwgQ29uc3VtcHRpb24gKEx0cnMvSHIpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGFzdCBDb25zdW1wdGlvbiAoTHRycy9Icik8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DdXJyZW50IENvbnN1bXB0aW9uIChMdHJzL0hyKTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIEVudHJpZXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiKGQsIGluZGV4KSAgaW4gTWFpbkRhdGEuZGF0YVwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBkLmZhcl9ubyB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID57eyBkLm5hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInBiLTJcIj57eyBkLmN1cnJlbnRfc2l0ZT9kLmN1cnJlbnRfc2l0ZS5zaXRlX25hbWU6XCJcIiB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID57eyBkLm1hY2hpbmVfbW9kZWwubmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID57eyBkLnRvdGFsX29pbF9jb25zdW10aW9uIH19IC8ge3tkLnRvdGFsX2VudHJpZXN9fSBlbnRyaWVzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt7IGQuc3RhbmRhcmRfY29uc3VtcHRpb25faHJfcGVyX2x0cj9kLnN0YW5kYXJkX2NvbnN1bXB0aW9uX2hyX3Blcl9sdHI6MCB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID57eyBkLmFjdHVhbF9taWxhZ2UgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+e3sgZC5sYXN0X21pbGFnZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID57eyBkLnN0YW5kYXJkX2NvbnN1bXB0aW9uX2ttX3Blcl9sdHI/ZC5zdGFuZGFyZF9jb25zdW1wdGlvbl9rbV9wZXJfbHRyOjB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID57eyBkLmFjdHVhbF9jb25zdW1wdGlvbiB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1ib2R5IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhZ2luYXRpb24gOmRhdGE9XCJNYWluRGF0YVwiIDpsaW1pdD1cIjEwXCIgQHBhZ2luYXRpb24tY2hhbmdlLXBhZ2U9XCJnZXRSZXN1bHRzXCIgdi1pZj1cIk1haW5EYXRhXCI+PC9wYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZCAtLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE11bHRpUmFuZ2VTbGlkZXIgZnJvbSBcIm11bHRpLXJhbmdlLXNsaWRlci12dWVcIjtcbmltcG9ydCBcIm11bHRpLXJhbmdlLXNsaWRlci12dWUvTXVsdGlSYW5nZVNsaWRlckJsYWNrLmNzc1wiO1xuaW1wb3J0IFwibXVsdGktcmFuZ2Utc2xpZGVyLXZ1ZS9NdWx0aVJhbmdlU2xpZGVyQmFyT25seS5jc3NcIjtcbmltcG9ydCBTaWRlYmFyTW9kYWwgZnJvbSAnLi8uLi9TaWRlQmFyTW9kYWwudnVlJztcblxuaW1wb3J0IFZ1ZVRhZ3NJbnB1dCBmcm9tICdAam9obXVuL3Z1ZS10YWdzLWlucHV0JztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFZ1ZVRhZ3NJbnB1dCxcbiAgICAgICAgTXVsdGlSYW5nZVNsaWRlcixTaWRlYmFyTW9kYWwsXG4gICAgICAgIE1hY2hpbmVQb3A6ICgpID0+IGltcG9ydCgnLi4vTWFjaGluZUZhclBvcC52dWUnKSxcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwbU1vZGFsRGF0YTonJyxcbiAgICAgICAgICAgIGNyZWF0ZWRfdXNlcnM6IFtdLFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaF9zaXRlczogW10sXG4gICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0X2F0OiAnJyxcbiAgICAgICAgICAgICAgICBlbmRfYXQ6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXM6IFtdLFxuICAgICAgICAgICAgc2l0ZXM6IFtdLFxuICAgICAgICAgICAgc2VsZWN0ZWRfbWFjaGluZTogJycsXG4gICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXG4gICAgICAgICAgICBNYWluRGF0YToge30sXG5cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBkb3dubG9hZCgpe1xuICAgICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5wYWdlID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmV4cG9ydCA9IFwiZXhwb3J0XCI7XG4gICAgICAgICAgICBheGlvcyh7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9nZXRfaHNkX2RhdGEnLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsIC8vIEltcG9ydGFudFxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICdoc2RfcmVhZGluZ3MueGxzeCcpOyAvLyBTZXQgdGhlIGZpbGUgbmFtZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgICAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIGRvd25sb2FkaW5nIHRoZSBmaWxlOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9wZW5TaWRlTW9kYWwoKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLnNpZGViYXJNb2RhbC5vcGVuU2lkZU1vZGFsKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlU2lkZU1vZGFsKCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5zaWRlYmFyTW9kYWwuY2xvc2VTaWRlTW9kYWwoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdmlld19zaXRlX2RldGFpbHMoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wbU1vZGFsRGF0YSA9IGRhdGFcbiAgICAgICAgICAgICQoJyNNYWNoaW5lU2l0ZU1vZGFsMicpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0X2ZpbHRlcigpe1xuICAgICAgICAgICAgdGhpcy5zZWFyY2g9IHtcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0X2F0OiAnJyxcbiAgICAgICAgICAgICAgICBlbmRfYXQ6ICcnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nZXRSZXN1bHRzKClcbiAgICAgICAgfSxcbiAgICAgICAgVXBkYXRlVmFsdWVzKGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRhdF9mcm9tID0gZS5taW5WYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRhdF90byA9IGUubWF4VmFsdWU7XG4gICAgICAgIH0sXG5cblxuICAgICAgICBnZXRMYWJlbCh2YWwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZmFyX25vICsgJyAtICcgKyB2YWwubmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmVzdWx0cyhwYWdlID0gMSkge1xuXG4gICAgICAgICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coKTtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnYXBpL2dldF9taWxlYWdlX2RhdGEnLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDp0aGlzLnNlYXJjaFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5NYWluRGF0YSA9IGRhdGEuZGF0YVxuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkRGF0YSgpIHtcbiAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdygpO1xuICAgICAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9nZXRfbWlsZWFnZV9kYXRhXCIsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMuc2VhcmNoXG4gICAgICAgICAgICB9KS50aGVuKCh7XG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuTWFpbkRhdGEgPSBkYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9pbml0aWFsX3RpY2tldFwiKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEudmVuZG9ycztcbiAgICAgICAgICAgIHRoaXMubWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoX3NpdGVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnNpdGVzO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVkX3VzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLmNyZWF0ZWRfdXNlcnM7XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybignT2guIFNvbWV0aGluZyB3ZW50IHdyb25nJykpO1xuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgYXN5bmMgJ2Zvcm0uc3ViX2NhdGVnb3J5X2lkJyhuLCBvKSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyAnZm9ybS5zaXRlX2lkJyhuLCBvKSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgICdmb3JtLmNhdGVnb3J5X2lkJzoge1xuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcblxuICAgICAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9jYXRlZ29yeS9cIiArIG4pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgICAgIGluaXRpYWw6IHRydWVcbiAgICAgICAgfSxcblxuICAgIH0sXG59XG48L3NjcmlwdD5cbjxzdHlsZT5cbi5iZy1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY1NTYzICFpbXBvcnRhbnQ7XG59XG4uYmctZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBlZDcwICFpbXBvcnRhbnQ7XG59XG4uYmcteWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYzg0YyAhaW1wb3J0YW50O1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1tb2RhbFwiIDpjbGFzcz1cInsgJ2FjdGl2ZSc6IGlzT3BlbiB9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZVwiIEBjbGljaz1cImNsb3NlU2lkZU1vZGFsXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHN0eWxlPVwiZm9udC1zaXplOiAxN3B4O2NvbG9yOiBibGFjaztcIj48L2k+PC9idXR0b24+XG4gICAgICAgIDwhLS0gQ29udGVudCBvZiB0aGUgc2lkZWJhciBtb2RhbCAtLT5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IEBjbGljaz1cImNsb3NlU2lkZU1vZGFsXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG4gIFxuICA8c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvcGVuU2lkZU1vZGFsKCkge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICB9LFxuICAgICAgY2xvc2VTaWRlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIDwvc2NyaXB0PlxuICBcbiAgPHN0eWxlIHNjb3BlZD5cbiAgLmNsb3Nle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogMzNweDtcbiAgICBoZWlnaHQ6IDMzcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgfVxuICAuc2lkZWJhci1tb2RhbCB7XG4gICAgcGFkZGluZzogMTBweCAwIDEwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDQ1MHB4OyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAycmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbiAgXG4gIC5zaWRlYmFyLW1vZGFsLmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIFxuICAuc2lkZWJhci1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICBcbiAgLnNpZGViYXItb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIH1cbiAgPC9zdHlsZT4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNsb3NlW2RhdGEtdi00NjFhNDU4OV17XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDMzcHg7XFxuICBoZWlnaHQ6IDMzcHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcbi5zaWRlYmFyLW1vZGFsW2RhdGEtdi00NjFhNDU4OV0ge1xcbiAgcGFkZGluZzogMTBweCAwIDEwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiA0NTBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4uc2lkZWJhci1tb2RhbC5hY3RpdmVbZGF0YS12LTQ2MWE0NTg5XSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufVxcbi5zaWRlYmFyLWNvbnRlbnRbZGF0YS12LTQ2MWE0NTg5XSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4uc2lkZWJhci1vdmVybGF5W2RhdGEtdi00NjFhNDU4OV0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiRjovd2FtcDY0L3d3dy9ybW0vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvU2lkZUJhck1vZGFsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBOEJBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7Q0FDQTtBQUNBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUEsQ0FBQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0NBQ0E7QUFFQTtFQUNBLHlCQUFBO0NBQ0E7QUFFQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtDQUNBO0FBRUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJTaWRlQmFyTW9kYWwudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2lkZWJhci1tb2RhbFxcXCIgOmNsYXNzPVxcXCJ7ICdhY3RpdmUnOiBpc09wZW4gfVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNsb3NlXFxcIiBAY2xpY2s9XFxcImNsb3NlU2lkZU1vZGFsXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdGltZXNcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBzdHlsZT1cXFwiZm9udC1zaXplOiAxN3B4O2NvbG9yOiBibGFjaztcXFwiPjwvaT48L2J1dHRvbj5cXG4gICAgICAgIDwhLS0gQ29udGVudCBvZiB0aGUgc2lkZWJhciBtb2RhbCAtLT5cXG4gICAgICAgIDxzbG90Pjwvc2xvdD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IEBjbGljaz1cXFwiY2xvc2VTaWRlTW9kYWxcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvdGVtcGxhdGU+XFxuICBcXG4gIDxzY3JpcHQ+XFxuICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIGRhdGEoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXFxuICAgICAgfTtcXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgb3BlblNpZGVNb2RhbCgpIHtcXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcXG4gICAgICB9LFxcbiAgICAgIGNsb3NlU2lkZU1vZGFsKCkge1xcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcXG4gICAgICB9LFxcbiAgICB9LFxcbiAgfTtcXG4gIDwvc2NyaXB0PlxcbiAgXFxuICA8c3R5bGUgc2NvcGVkPlxcbiAgLmNsb3Nle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDMzcHg7XFxuICAgIGhlaWdodDogMzNweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICB9XFxuICAuc2lkZWJhci1tb2RhbCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgd2lkdGg6IDQ1MHB4OyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICB9XFxuICBcXG4gIC5zaWRlYmFyLW1vZGFsLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG4gIFxcbiAgLnNpZGViYXItY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gIH1cXG4gIFxcbiAgLnNpZGViYXItb3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICB9XFxuICA8L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJnLXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY1NTYzICFpbXBvcnRhbnQ7XFxufVxcbi5iZy1ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBlZDcwICFpbXBvcnRhbnQ7XFxufVxcbi5iZy15ZWxsb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYzg0YyAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiRjovd2FtcDY0L3d3dy9ybW0vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVwb3J0cy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9SZXBvcnRzL01pbGVhZ2UudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFrU0E7RUFDQSxxQ0FBQTtDQUNBO0FBQ0E7RUFDQSxxQ0FBQTtDQUNBO0FBQ0E7RUFDQSxxQ0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJNaWxlYWdlLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiID5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+TWlsZWFnZSBSZXBvcnQ8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXRvb2xzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXByaW1hcnlcXFwiIEBjbGljaz1cXFwiZG93bmxvYWRcXFwiPjxpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZhIGZhLWRvd25sb2FkIG1yLTJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IERvd25sb2FkIEV4Y2VsPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1ibHVlXFxcIiBAY2xpY2s9XFxcIm9wZW5TaWRlTW9kYWxcXFwiPjxpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZhIGZhLXNsaWRlcnMtaCBtci0yXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiBGaWx0ZXI8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJNb2RhbCByZWY9XFxcInNpZGViYXJNb2RhbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQ29udGVudCBvZiB0aGUgc2lkZWJhciBtb2RhbCBnb2VzIGhlcmUgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48aSBjbGFzcz1cXFwiZmEgZmEtc2xpZGVycy1oIG1yLTJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBzdHlsZT1cXFwiZm9udC1zaXplOiAyMnB4O1xcXCI+PC9pPiBGaWx0ZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgQHN1Ym1pdC5wcmV2ZW50PVxcXCJnZXRSZXN1bHRzKClcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtYXV0byBjb2wtY3VzdG9tXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibWFjaGluZV9pZFxcXCI+RkFSIE5vPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcIm5hbWVcXFwiIDpnZXQtb3B0aW9uLWxhYmVsPVxcXCJnZXRMYWJlbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCIgOm9wdGlvbnM9XFxcInNlYXJjaF9tYWNoaW5lc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBtYWNoaW5lcyAuLi5cXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5tYWNoaW5lX2lkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwibWFjaGluZV9pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtYXV0byBjb2wtY3VzdG9tXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibWFjaGluZV9pZFxcXCI+U2VsZWN0IFNpdGU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwic2l0ZV9uYW1lXFxcIiA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwic2VhcmNoX3NpdGVzXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VsZWN0IFNpdGUuLi5cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2guc2l0ZV9pZFxcXCIgbmFtZT1cXFwic2l0ZV9pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1hdXRvIGNvbC1jdXN0b21cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJtYWNoaW5lX2lkXFxcIj5Gcm9tIERhdGU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVxcXCJBc2lhL0tvbGthdGFcXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5zdGFydF9hdFxcXCIgaW5wdXQtY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkRhdGVcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWF1dG8gY29sLWN1c3RvbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm1hY2hpbmVfaWRcXFwiPlRvIERhdGU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVxcXCJBc2lhL0tvbGthdGFcXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5lbmRfYXRcXFwiIGlucHV0LWNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJEYXRlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02IG1iLTIgcHItMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1xcXCI+U2VhcmNoPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTYgbWItMiBwbC0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInJlc2V0X2ZpbHRlcigpXFxcIj5SZXNldDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NpZGViYXJNb2RhbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1oZWFkZXIgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmUgcC0wIHRpY2tldFRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ob3ZlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInN0aWNrZXlcXFwiPkZBUiBObzwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkN1cnJlbnQgU2l0ZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nb2RlbDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBPaWwgQ29uc3VtcHRpb248L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+T2ZmaWNpYWwgTWlsZWFnZSAoS21zL0x0cik8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0dWFsIE1pbGVhZ2UgKEttcy9MdHIpPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxhc3QgTWlsZWFnZSAoS21zL0x0cik8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+T2ZmaWNpYWwgQ29uc3VtcHRpb24gKEx0cnMvSHIpPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdHVhbCBDb25zdW1wdGlvbiAoTHRycy9Icik8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGFzdCBDb25zdW1wdGlvbiAoTHRycy9Icik8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3VycmVudCBDb25zdW1wdGlvbiAoTHRycy9Icik8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgRW50cmllczwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCIoZCwgaW5kZXgpICBpbiBNYWluRGF0YS5kYXRhXFxcIiA6a2V5PVxcXCJpbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBkLmZhcl9ubyB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+e3sgZC5uYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJwYi0yXFxcIj57eyBkLmN1cnJlbnRfc2l0ZT9kLmN1cnJlbnRfc2l0ZS5zaXRlX25hbWU6XFxcIlxcXCIgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt7IGQubWFjaGluZV9tb2RlbC5uYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID57eyBkLnRvdGFsX29pbF9jb25zdW10aW9uIH19IC8ge3tkLnRvdGFsX2VudHJpZXN9fSBlbnRyaWVzPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID57eyBkLnN0YW5kYXJkX2NvbnN1bXB0aW9uX2hyX3Blcl9sdHI/ZC5zdGFuZGFyZF9jb25zdW1wdGlvbl9ocl9wZXJfbHRyOjAgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt7IGQuYWN0dWFsX21pbGFnZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+e3sgZC5sYXN0X21pbGFnZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+e3sgZC5zdGFuZGFyZF9jb25zdW1wdGlvbl9rbV9wZXJfbHRyP2Quc3RhbmRhcmRfY29uc3VtcHRpb25fa21fcGVyX2x0cjowfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt7IGQuYWN0dWFsX2NvbnN1bXB0aW9uIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID48L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWJvZHkgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6ZGF0YT1cXFwiTWFpbkRhdGFcXFwiIDpsaW1pdD1cXFwiMTBcXFwiIEBwYWdpbmF0aW9uLWNoYW5nZS1wYWdlPVxcXCJnZXRSZXN1bHRzXFxcIiB2LWlmPVxcXCJNYWluRGF0YVxcXCI+PC9wYWdpbmF0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZCAtLT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgTXVsdGlSYW5nZVNsaWRlciBmcm9tIFxcXCJtdWx0aS1yYW5nZS1zbGlkZXItdnVlXFxcIjtcXG5pbXBvcnQgXFxcIm11bHRpLXJhbmdlLXNsaWRlci12dWUvTXVsdGlSYW5nZVNsaWRlckJsYWNrLmNzc1xcXCI7XFxuaW1wb3J0IFxcXCJtdWx0aS1yYW5nZS1zbGlkZXItdnVlL011bHRpUmFuZ2VTbGlkZXJCYXJPbmx5LmNzc1xcXCI7XFxuaW1wb3J0IFNpZGViYXJNb2RhbCBmcm9tICcuLy4uL1NpZGVCYXJNb2RhbC52dWUnO1xcblxcbmltcG9ydCBWdWVUYWdzSW5wdXQgZnJvbSAnQGpvaG11bi92dWUtdGFncy1pbnB1dCc7XFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICBWdWVUYWdzSW5wdXQsXFxuICAgICAgICBNdWx0aVJhbmdlU2xpZGVyLFNpZGViYXJNb2RhbCxcXG4gICAgICAgIE1hY2hpbmVQb3A6ICgpID0+IGltcG9ydCgnLi4vTWFjaGluZUZhclBvcC52dWUnKSxcXG4gICAgfSxcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgcG1Nb2RhbERhdGE6JycsXFxuICAgICAgICAgICAgY3JlYXRlZF91c2VyczogW10sXFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcXG4gICAgICAgICAgICBzZWFyY2hfc2l0ZXM6IFtdLFxcbiAgICAgICAgICAgIHNlYXJjaDoge1xcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXFxuICAgICAgICAgICAgICAgIHN0YXJ0X2F0OiAnJyxcXG4gICAgICAgICAgICAgICAgZW5kX2F0OiAnJyxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxcbiAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzOiBbXSxcXG4gICAgICAgICAgICBzaXRlczogW10sXFxuICAgICAgICAgICAgc2VsZWN0ZWRfbWFjaGluZTogJycsXFxuICAgICAgICAgICAgdXNlcnM6IFtdLFxcbiAgICAgICAgICAgIG1hY2hpbmVzOiBbXSxcXG4gICAgICAgICAgICBNYWluRGF0YToge30sXFxuXFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGRvd25sb2FkKCl7XFxuICAgICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KCk7XFxuICAgICAgICAgICAgdGhpcy5zZWFyY2gucGFnZSA9IFxcXCJcXFwiO1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmV4cG9ydCA9IFxcXCJleHBvcnRcXFwiO1xcbiAgICAgICAgICAgIGF4aW9zKHtcXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9nZXRfaHNkX2RhdGEnLFxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxcbiAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJywgLy8gSW1wb3J0YW50XFxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3Jlc3BvbnNlLmRhdGFdKSk7XFxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XFxuICAgICAgICAgICAgICAgIGxpbmsuaHJlZiA9IHVybDtcXG4gICAgICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ2hzZF9yZWFkaW5ncy54bHN4Jyk7IC8vIFNldCB0aGUgZmlsZSBuYW1lXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XFxuICAgICAgICAgICAgICAgIGxpbmsuY2xpY2soKTtcXG4gICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcXFwiVGhlcmUgd2FzIGFuIGVycm9yIGRvd25sb2FkaW5nIHRoZSBmaWxlOlxcXCIsIGVycm9yKTtcXG4gICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIG9wZW5TaWRlTW9kYWwoKSB7XFxuICAgICAgICAgICAgdGhpcy4kcmVmcy5zaWRlYmFyTW9kYWwub3BlblNpZGVNb2RhbCgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNsb3NlU2lkZU1vZGFsKCkge1xcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuc2lkZWJhck1vZGFsLmNsb3NlU2lkZU1vZGFsKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgdmlld19zaXRlX2RldGFpbHMoZGF0YSkge1xcbiAgICAgICAgICAgIHRoaXMucG1Nb2RhbERhdGEgPSBkYXRhXFxuICAgICAgICAgICAgJCgnI01hY2hpbmVTaXRlTW9kYWwyJykubW9kYWwoJ3Nob3cnKTtcXG4gICAgICAgIH0sXFxuICAgICAgICByZXNldF9maWx0ZXIoKXtcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaD0ge1xcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXFxuICAgICAgICAgICAgICAgIHN0YXJ0X2F0OiAnJyxcXG4gICAgICAgICAgICAgICAgZW5kX2F0OiAnJyxcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgdGhpcy5nZXRSZXN1bHRzKClcXG4gICAgICAgIH0sXFxuICAgICAgICBVcGRhdGVWYWx1ZXMoZSkge1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRhdF9mcm9tID0gZS5taW5WYWx1ZTtcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC50YXRfdG8gPSBlLm1heFZhbHVlO1xcbiAgICAgICAgfSxcXG5cXG5cXG4gICAgICAgIGdldExhYmVsKHZhbCkge1xcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmZhcl9ubyArICcgLSAnICsgdmFsLm5hbWU7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgZ2V0UmVzdWx0cyhwYWdlID0gMSkge1xcblxcbiAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdygpO1xcbiAgICAgICAgICAgIGF4aW9zLmdldCgnYXBpL2dldF9taWxlYWdlX2RhdGEnLCB7XFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogcGFnZSxcXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDp0aGlzLnNlYXJjaFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5NYWluRGF0YSA9IGRhdGEuZGF0YVxcbiAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgbG9hZERhdGEoKSB7XFxuICAgICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KCk7XFxuICAgICAgICAgICAgYXhpb3MuZ2V0KFxcXCIvYXBpL2dldF9taWxlYWdlX2RhdGFcXFwiLCB7XFxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcXG4gICAgICAgICAgICB9KS50aGVuKCh7XFxuICAgICAgICAgICAgICAgIGRhdGFcXG4gICAgICAgICAgICB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuTWFpbkRhdGEgPSBkYXRhLmRhdGE7XFxuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuXFxuICAgIH0sXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XFxuICAgIH0sXFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcXG4gICAgICAgIGF4aW9zLmdldChcXFwiL2FwaS9pbml0aWFsX3RpY2tldFxcXCIpLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEudmVuZG9ycztcXG4gICAgICAgICAgICB0aGlzLm1hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoX3NpdGVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnNpdGVzO1xcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlZF91c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5jcmVhdGVkX3VzZXJzO1xcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKCdPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmcnKSk7XFxuICAgIH0sXFxuICAgIHdhdGNoOiB7XFxuICAgICAgICBhc3luYyAnZm9ybS5zdWJfY2F0ZWdvcnlfaWQnKG4sIG8pIHtcXG4gICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgYXN5bmMgJ2Zvcm0uc2l0ZV9pZCcobiwgbykge1xcbiAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICAnZm9ybS5jYXRlZ29yeV9pZCc6IHtcXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobiwgbykge1xcblxcbiAgICAgICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvY2F0ZWdvcnkvXFxcIiArIG4pXFxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yl9jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZVxcbiAgICAgICAgfSxcXG5cXG4gICAgfSxcXG59XFxuPC9zY3JpcHQ+XFxuPHN0eWxlPlxcbi5iZy1yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTU2MyAhaW1wb3J0YW50O1xcbn1cXG4uYmctZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwZWQ3MCAhaW1wb3J0YW50O1xcbn1cXG4uYmcteWVsbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWM4NGMgIWltcG9ydGFudDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwic2lkZWJhci1tb2RhbFwiLCBjbGFzczogeyBhY3RpdmU6IF92bS5pc09wZW4gfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VTaWRlTW9kYWwgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRpbWVzXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxN3B4XCIsIGNvbG9yOiBcImJsYWNrXCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgb246IHsgY2xpY2s6IF92bS5jbG9zZVNpZGVNb2RhbCB9IH0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00NjFhNDU4OVwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJNaWxlYWdlIFJlcG9ydFwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRvb2xzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5kb3dubG9hZCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZG93bmxvYWQgbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIERvd25sb2FkIEV4Y2VsXCIpXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1ibHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcGVuU2lkZU1vZGFsIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1zbGlkZXJzLWggbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEZpbHRlclwiKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiU2lkZWJhck1vZGFsXCIsIHsgcmVmOiBcInNpZGViYXJNb2RhbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXNsaWRlcnMtaCBtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMjJweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgRmlsdGVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYXV0b2NvbXBsZXRlOiBcIm9mZlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldFJlc3VsdHMoKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtYXV0byBjb2wtY3VzdG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJtYWNoaW5lX2lkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZBUiBOb1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0LW9wdGlvbi1sYWJlbFwiOiBfdm0uZ2V0TGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnNlYXJjaF9tYWNoaW5lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIG1hY2hpbmVzIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYWNoaW5lX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5tYWNoaW5lX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcIm1hY2hpbmVfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLm1hY2hpbmVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtYXV0byBjb2wtY3VzdG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJtYWNoaW5lX2lkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZyb20gRGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkYXRldGltZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWUtem9uZVwiOiBcIkFzaWEvS29sa2F0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guc3RhcnRfYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwic3RhcnRfYXRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnN0YXJ0X2F0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWF1dG8gY29sLWN1c3RvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibWFjaGluZV9pZFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUbyBEYXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRhdGV0aW1lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZS16b25lXCI6IFwiQXNpYS9Lb2xrYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5lbmRfYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiZW5kX2F0XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5lbmRfYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNiBtYi0yIHByLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlYXJjaFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgbWItMiBwbC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXNldF9maWx0ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJlc2V0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSB0YWJsZS1yZXNwb25zaXZlIHAtMCB0aWNrZXRUYWJsZVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLk1haW5EYXRhLmRhdGEsIGZ1bmN0aW9uKGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGQuZmFyX25vKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhkLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwicGItMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuY3VycmVudF9zaXRlID8gZC5jdXJyZW50X3NpdGUuc2l0ZV9uYW1lIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoZC5tYWNoaW5lX21vZGVsLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZC50b3RhbF9vaWxfY29uc3VtdGlvbikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGQudG90YWxfZW50cmllcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBlbnRyaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuc3RhbmRhcmRfY29uc3VtcHRpb25faHJfcGVyX2x0clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZC5zdGFuZGFyZF9jb25zdW1wdGlvbl9ocl9wZXJfbHRyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhkLmFjdHVhbF9taWxhZ2UpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGQubGFzdF9taWxhZ2UpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuc3RhbmRhcmRfY29uc3VtcHRpb25fa21fcGVyX2x0clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZC5zdGFuZGFyZF9jb25zdW1wdGlvbl9rbV9wZXJfbHRyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhkLmFjdHVhbF9jb25zdW1wdGlvbikpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtZm9vdGVyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uTWFpbkRhdGFcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGF0YTogX3ZtLk1haW5EYXRhLCBsaW1pdDogMTAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IFwicGFnaW5hdGlvbi1jaGFuZ2UtcGFnZVwiOiBfdm0uZ2V0UmVzdWx0cyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJzdGlja2V5XCIgfSwgW192bS5fdihcIkZBUiBOb1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkN1cnJlbnQgU2l0ZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJNb2RlbFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUb3RhbCBPaWwgQ29uc3VtcHRpb25cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiT2ZmaWNpYWwgTWlsZWFnZSAoS21zL0x0cilcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQWN0dWFsIE1pbGVhZ2UgKEttcy9MdHIpXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkxhc3QgTWlsZWFnZSAoS21zL0x0cilcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiT2ZmaWNpYWwgQ29uc3VtcHRpb24gKEx0cnMvSHIpXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFjdHVhbCBDb25zdW1wdGlvbiAoTHRycy9IcilcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTGFzdCBDb25zdW1wdGlvbiAoTHRycy9IcilcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ3VycmVudCBDb25zdW1wdGlvbiAoTHRycy9IcilcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVG90YWwgRW50cmllc1wiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1kMGI5ZDVmNlwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NjFhNDU4OVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1NpZGVCYXJNb2RhbC52dWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYTA3NzM4ZDRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NjFhNDU4OVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1NpZGVCYXJNb2RhbC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ2MWE0NTg5XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2lkZUJhck1vZGFsLnZ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9NaWxlYWdlLnZ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2ZWU3ZDE1MlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9NaWxlYWdlLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01pbGVhZ2UudnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoY29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9NaWxlYWdlLnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9NaWxlYWdlLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTWlsZWFnZS52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZDBiOWQ1ZjZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTWlsZWFnZS52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxSZXBvcnRzXFxcXE1pbGVhZ2UudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWQwYjlkNWY2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZDBiOWQ1ZjZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDYxYTQ1ODlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaWRlQmFyTW9kYWwudnVlXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1NpZGVCYXJNb2RhbC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1NpZGVCYXJNb2RhbC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDYxYTQ1ODlcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TaWRlQmFyTW9kYWwudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTQ2MWE0NTg5XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcU2lkZUJhck1vZGFsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NjFhNDU4OVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ2MWE0NTg5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=