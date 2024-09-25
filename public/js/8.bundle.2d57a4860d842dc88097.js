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
exports.push([module.i, "\n.bg-red {\n  background-color: #ef5563 !important;\n}\n.bg-green {\n  background-color: #70ed70 !important;\n}\n.bg-yellow {\n  background-color: #f1c84c !important;\n}\n", "", {"version":3,"sources":["F:/wamp64/www/rmm/resources/js/components/Reports/resources/js/components/Reports/Mileage.vue"],"names":[],"mappings":";AAgSA;EACA,qCAAA;CACA;AACA;EACA,qCAAA;CACA;AACA;EACA,qCAAA;CACA","file":"Mileage.vue","sourcesContent":["<template>\n    <section class=\"content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n\n                <div class=\"col-12\">\n\n                    <div class=\"card\" >\n                        <div class=\"card-header\">\n                            <h3 class=\"card-title\">Mileage Report</h3>\n                            <div class=\"card-tools\">\n                                <button class=\"btn btn-sm btn-primary\" @click=\"download\"><i\n                                    class=\"fa fa-download mr-2\" aria-hidden=\"true\"></i> Download Excel</button>\n                                <button class=\"btn btn-sm btn-blue\" @click=\"openSideModal\"><i\n                                    class=\"fa fa-sliders-h mr-2\" aria-hidden=\"true\"></i> Filter</button>\n                            </div>\n                        </div>\n\n                        <SidebarModal ref=\"sidebarModal\">\n                            <!-- Content of the sidebar modal goes here -->\n                            <h3><i class=\"fa fa-sliders-h mr-2\" aria-hidden=\"true\" style=\"font-size: 22px;\"></i> Filter\n                            </h3>\n                            <hr>\n                            <form autocomplete=\"off\" @submit.prevent=\"getResults()\">\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">FAR No</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"name\" :get-option-label=\"getLabel\"\n                                            :reduce=\"(option) => option.id\" :options=\"search_machines\"\n                                            placeholder=\"Enter machines ...\" v-model=\"search.machine_id\"\n                                            name=\"machine_id\">\n                                        </v-select>\n                                    </div>\n                                </div>\n\n                                <!-- <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">Select Site</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"site_name\" :reduce=\"(option) => option.id\"\n                                            :options=\"search_sites\" placeholder=\"Select Site...\"\n                                            v-model=\"search.site_id\" name=\"site_id\">\n                                        </v-select>\n                                    </div>\n                                </div> -->\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">From Date</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.start_at\" input-class=\"form-control\" placeholder=\"Date\" />\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">To Date</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.end_at\" input-class=\"form-control\" placeholder=\"Date\" />\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-6 mb-2 pr-1\">\n                                        <button type=\"submit\" class=\"btn btn-success btn-block\">Search</button>\n                                    </div>\n                                    <div class=\"col-6 mb-2 pl-1\">\n                                        <button type=\"button\" class=\"btn btn-danger btn-block\"\n                                            @click=\"reset_filter()\">Reset</button>\n                                    </div>\n                                </div>\n                            </form>\n                        </SidebarModal>\n\n                        <!-- /.card-header -->\n                        <div class=\"card-body table-responsive p-0 ticketTable\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th class=\"stickey\">FAR No</th>\n                                        <th>Name</th>\n                                        <th>Current Site</th>\n                                        <th>Model</th>\n                                        <th>Total Oil Consumption</th>\n                                        <th>Official Mileage (Kms/Ltr)</th>\n                                        <th>Actual Mileage (Kms/Ltr)</th>\n                                        <th>Last Mileage (Kms/Ltr)</th>\n                                        <th>Official Consumption (Ltrs/Hr)</th>\n                                        <th>Actual Consumption (Ltrs/Hr)</th>\n                                        <th>Last Consumption (Ltrs/Hr)</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr v-for=\"(d, index)  in MainData.data\" :key=\"index\">\n                                        <td>{{ d.far_no }}</td>\n                                        <td >{{ d.name }}</td>\n                                        <td class=\"pb-2\">{{ d.current_site?d.current_site.site_name:\"\" }}</td>\n                                        <td >{{ d.machine_model.name }}</td>\n                                        <td >{{ d.total_oil_consumtion }} / {{d.total_entries}} filling</td>\n                                        <td >{{ d.standard_consumption_hr_per_ltr?d.standard_consumption_hr_per_ltr:0 }}</td>\n                                        <td >{{ d.actual_milage }}</td>\n                                        <td >{{ d.last_milage }}</td>\n                                        <td >{{ d.standard_consumption_km_per_ltr?d.standard_consumption_km_per_ltr:0}}</td>\n                                        <td >{{ d.actual_consumption }}</td>\n                                        <td ></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <!-- /.card-body -->\n                        <div class=\"card-footer\">\n                            <pagination :data=\"MainData\" :limit=\"10\" @pagination-change-page=\"getResults\" v-if=\"MainData\"></pagination>\n                        </div>\n                    </div>\n                    <!-- /.card -->\n                </div>\n            </div>\n        </div>\n    </section>\n</template>\n\n<script>\nimport MultiRangeSlider from \"multi-range-slider-vue\";\nimport \"multi-range-slider-vue/MultiRangeSliderBlack.css\";\nimport \"multi-range-slider-vue/MultiRangeSliderBarOnly.css\";\nimport SidebarModal from './../SideBarModal.vue';\n\nimport VueTagsInput from '@johmun/vue-tags-input';\nexport default {\n    components: {\n        VueTagsInput,\n        MultiRangeSlider,SidebarModal,\n        MachinePop: () => import('../MachineFarPop.vue'),\n    },\n    data() {\n        return {\n            pmModalData:'',\n            created_users: [],\n            search_machines: [],\n            search_sites: [],\n            search: {\n                page: 1,\n                machine_id: '',\n                site_id: '',\n                start_at: '',\n                end_at: '',\n            },\n            categories: [],\n            sub_categories: [],\n            sites: [],\n            selected_machine: '',\n            users: [],\n            machines: [],\n            MainData: {},\n\n        }\n    },\n    methods: {\n        download(){\n            let cloaderd = this.$loading.show();\n            this.search.page = \"\";\n            this.search.export = \"export\";\n            axios({\n                url: '/api/get_hsd_data',\n                method: 'GET',\n                responseType: 'blob', // Important\n                params: this.search\n            }).then(response => {\n                const url = window.URL.createObjectURL(new Blob([response.data]));\n                const link = document.createElement('a');\n                link.href = url;\n                link.setAttribute('download', 'hsd_readings.xlsx'); // Set the file name\n                document.body.appendChild(link);\n                link.click();\n                cloaderd.hide();\n            }).catch(error => {\n                console.error(\"There was an error downloading the file:\", error);\n                cloaderd.hide();\n            });\n        },\n        openSideModal() {\n            this.$refs.sidebarModal.openSideModal();\n        },\n        closeSideModal() {\n            this.$refs.sidebarModal.closeSideModal();\n        },\n        view_site_details(data) {\n            this.pmModalData = data\n            $('#MachineSiteModal2').modal('show');\n        },\n        reset_filter(){\n            this.search= {\n                page: 1,\n                machine_id: '',\n                site_id: '',\n                start_at: '',\n                end_at: '',\n            }\n            this.getResults()\n        },\n        UpdateValues(e) {\n            this.search.tat_from = e.minValue;\n            this.search.tat_to = e.maxValue;\n        },\n\n\n        getLabel(val) {\n            if (typeof val === 'object') {\n                return val.far_no + ' - ' + val.name;\n            } else {\n                return val;\n            }\n        },\n        getResults(page = 1) {\n\n            let cloaderd = this.$loading.show();\n            axios.get('api/get_mileage_data', {\n                params: {\n                    page: page,\n                    search:this.search\n                }\n            }).then(({ data }) => {\n                this.MainData = data.data\n                cloaderd.hide();\n            });\n        },\n        loadData() {\n            let cloaderd = this.$loading.show();\n            axios.get(\"/api/get_mileage_data\", {\n                params: this.search\n            }).then(({\n                data\n            }) => {\n                this.MainData = data.data;\n                cloaderd.hide();\n            });\n        },\n\n    },\n    created() {\n        this.loadData();\n    },\n    beforeCreate() {\n        axios.get(\"/api/initial_ticket\").then(response => {\n            this.users = response.data.data.vendors;\n            this.machines = response.data.data.machines;\n            this.search_machines = response.data.data.machines;\n            this.search_sites = response.data.data.sites;\n            this.created_users = response.data.data.created_users;\n        }).catch(() => console.warn('Oh. Something went wrong'));\n    },\n    watch: {\n        async 'form.sub_category_id'(n, o) {\n            if (n) {\n                this.get_machine()\n            }\n        },\n        async 'form.site_id'(n, o) {\n            if (n) {\n                this.get_machine()\n            }\n        },\n\n        'form.category_id': {\n            handler: function (n, o) {\n\n                if (n) {\n                    axios.get(\"api/category/\" + n)\n                        .then((res) => {\n                            this.sub_categories = res.data.data;\n                        })\n                    this.get_machine()\n                }\n            },\n            deep: true,\n            initial: true\n        },\n\n    },\n}\n</script>\n<style>\n.bg-red {\n  background-color: #ef5563 !important;\n}\n.bg-green {\n  background-color: #70ed70 !important;\n}\n.bg-yellow {\n  background-color: #f1c84c !important;\n}\n</style>\n"],"sourceRoot":""}]);

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
                                " filling"
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
        _c("th", [_vm._v("Last Consumption (Ltrs/Hr)")])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVwb3J0cy9NaWxlYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvU2lkZUJhck1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9TaWRlQmFyTW9kYWwudnVlPzRmN2QiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVwb3J0cy9NaWxlYWdlLnZ1ZT8yYWM1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1NpZGVCYXJNb2RhbC52dWU/MTg4MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9SZXBvcnRzL01pbGVhZ2UudnVlPzU1ODYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvU2lkZUJhck1vZGFsLnZ1ZT9jYmIxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlcG9ydHMvTWlsZWFnZS52dWU/ZmZmMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9SZXBvcnRzL01pbGVhZ2UudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1NpZGVCYXJNb2RhbC52dWUiXSwibmFtZXMiOlsiY29tcG9uZW50cyIsIlZ1ZVRhZ3NJbnB1dCIsIk11bHRpUmFuZ2VTbGlkZXIiLCJTaWRlYmFyTW9kYWwiLCJNYWNoaW5lUG9wIiwiZGF0YSIsInBtTW9kYWxEYXRhIiwiY3JlYXRlZF91c2VycyIsInNlYXJjaF9tYWNoaW5lcyIsInNlYXJjaF9zaXRlcyIsInNlYXJjaCIsInBhZ2UiLCJtYWNoaW5lX2lkIiwic2l0ZV9pZCIsInN0YXJ0X2F0IiwiZW5kX2F0IiwiY2F0ZWdvcmllcyIsInN1Yl9jYXRlZ29yaWVzIiwic2l0ZXMiLCJzZWxlY3RlZF9tYWNoaW5lIiwidXNlcnMiLCJtYWNoaW5lcyIsIk1haW5EYXRhIiwibWV0aG9kcyIsImRvd25sb2FkIiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJyZXNwb25zZVR5cGUiLCJwYXJhbXMiLCJsaW5rIiwiZG9jdW1lbnQiLCJjbG9hZGVyZCIsImNvbnNvbGUiLCJvcGVuU2lkZU1vZGFsIiwiY2xvc2VTaWRlTW9kYWwiLCJ2aWV3X3NpdGVfZGV0YWlscyIsIiQiLCJyZXNldF9maWx0ZXIiLCJVcGRhdGVWYWx1ZXMiLCJnZXRMYWJlbCIsImdldFJlc3VsdHMiLCJsb2FkRGF0YSIsImNyZWF0ZWQiLCJiZWZvcmVDcmVhdGUiLCJ3YXRjaCIsImhhbmRsZXIiLCJ0aGVuIiwiZGVlcCIsImluaXRpYWwiLCJpc09wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdJc0Q7QUFDSTtBQUNFO0FBQ1g7QUFFQztBQUNuQztFQUNmQTtJQUNBQztJQUNBQztJQUFBQztJQUNBQztFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUVBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFBQTtRQUNBQztNQUNBO1FBQ0E7UUFDQTtRQUNBQztRQUNBQTtRQUNBQztRQUNBRDtRQUNBRTtNQUNBO1FBQ0FDO1FBQ0FEO01BQ0E7SUFDQTtJQUNBRTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQUM7SUFDQTtJQUNBQztNQUNBO1FBQ0EzQjtRQUNBQztR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LGdGQUFpQiIsImZpbGUiOiJqcy84LmJ1bmRsZS4yZDU3YTQ4NjBkODQyZGM4ODA5Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZVwiPk1pbGVhZ2UgUmVwb3J0PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10b29sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiIEBjbGljaz1cImRvd25sb2FkXCI+PGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtZG93bmxvYWQgbXItMlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gRG93bmxvYWQgRXhjZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWJsdWVcIiBAY2xpY2s9XCJvcGVuU2lkZU1vZGFsXCI+PGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtc2xpZGVycy1oIG1yLTJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEZpbHRlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyTW9kYWwgcmVmPVwic2lkZWJhck1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBDb250ZW50IG9mIHRoZSBzaWRlYmFyIG1vZGFsIGdvZXMgaGVyZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PGkgY2xhc3M9XCJmYSBmYS1zbGlkZXJzLWggbXItMlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHN0eWxlPVwiZm9udC1zaXplOiAyMnB4O1wiPjwvaT4gRmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYXV0b2NvbXBsZXRlPVwib2ZmXCIgQHN1Ym1pdC5wcmV2ZW50PVwiZ2V0UmVzdWx0cygpXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIGNvbC1jdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWFjaGluZV9pZFwiPkZBUiBObzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOmdldC1vcHRpb24tbGFiZWw9XCJnZXRMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cInNlYXJjaF9tYWNoaW5lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbWFjaGluZXMgLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5tYWNoaW5lX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1hY2hpbmVfaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIGNvbC1jdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWFjaGluZV9pZFwiPlNlbGVjdCBTaXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInNpdGVfbmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInNlYXJjaF9zaXRlc1wiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFNpdGUuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoLnNpdGVfaWRcIiBuYW1lPVwic2l0ZV9pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBjb2wtY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1hY2hpbmVfaWRcIj5Gcm9tIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XCJBc2lhL0tvbGthdGFcIiB2LW1vZGVsPVwic2VhcmNoLnN0YXJ0X2F0XCIgaW5wdXQtY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkRhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBjb2wtY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1hY2hpbmVfaWRcIj5UbyBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVwiQXNpYS9Lb2xrYXRhXCIgdi1tb2RlbD1cInNlYXJjaC5lbmRfYXRcIiBpbnB1dC1jbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IG1iLTIgcHItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1wiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgbWItMiBwbC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZXNldF9maWx0ZXIoKVwiPlJlc2V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TaWRlYmFyTW9kYWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRlciAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgdGFibGUtcmVzcG9uc2l2ZSBwLTAgdGlja2V0VGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwic3RpY2tleVwiPkZBUiBObzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DdXJyZW50IFNpdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nb2RlbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIE9pbCBDb25zdW1wdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk9mZmljaWFsIE1pbGVhZ2UgKEttcy9MdHIpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0dWFsIE1pbGVhZ2UgKEttcy9MdHIpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGFzdCBNaWxlYWdlIChLbXMvTHRyKTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk9mZmljaWFsIENvbnN1bXB0aW9uIChMdHJzL0hyKTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdHVhbCBDb25zdW1wdGlvbiAoTHRycy9Icik8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5MYXN0IENvbnN1bXB0aW9uIChMdHJzL0hyKTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIoZCwgaW5kZXgpICBpbiBNYWluRGF0YS5kYXRhXCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IGQuZmFyX25vIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt7IGQubmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicGItMlwiPnt7IGQuY3VycmVudF9zaXRlP2QuY3VycmVudF9zaXRlLnNpdGVfbmFtZTpcIlwiIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt7IGQubWFjaGluZV9tb2RlbC5uYW1lIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt7IGQudG90YWxfb2lsX2NvbnN1bXRpb24gfX0gLyB7e2QudG90YWxfZW50cmllc319IGZpbGxpbmc8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+e3sgZC5zdGFuZGFyZF9jb25zdW1wdGlvbl9ocl9wZXJfbHRyP2Quc3RhbmRhcmRfY29uc3VtcHRpb25faHJfcGVyX2x0cjowIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt7IGQuYWN0dWFsX21pbGFnZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID57eyBkLmxhc3RfbWlsYWdlIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt7IGQuc3RhbmRhcmRfY29uc3VtcHRpb25fa21fcGVyX2x0cj9kLnN0YW5kYXJkX2NvbnN1bXB0aW9uX2ttX3Blcl9sdHI6MH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt7IGQuYWN0dWFsX2NvbnN1bXB0aW9uIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWJvZHkgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6ZGF0YT1cIk1haW5EYXRhXCIgOmxpbWl0PVwiMTBcIiBAcGFnaW5hdGlvbi1jaGFuZ2UtcGFnZT1cImdldFJlc3VsdHNcIiB2LWlmPVwiTWFpbkRhdGFcIj48L3BhZ2luYXRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkIC0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTXVsdGlSYW5nZVNsaWRlciBmcm9tIFwibXVsdGktcmFuZ2Utc2xpZGVyLXZ1ZVwiO1xuaW1wb3J0IFwibXVsdGktcmFuZ2Utc2xpZGVyLXZ1ZS9NdWx0aVJhbmdlU2xpZGVyQmxhY2suY3NzXCI7XG5pbXBvcnQgXCJtdWx0aS1yYW5nZS1zbGlkZXItdnVlL011bHRpUmFuZ2VTbGlkZXJCYXJPbmx5LmNzc1wiO1xuaW1wb3J0IFNpZGViYXJNb2RhbCBmcm9tICcuLy4uL1NpZGVCYXJNb2RhbC52dWUnO1xuXG5pbXBvcnQgVnVlVGFnc0lucHV0IGZyb20gJ0Bqb2htdW4vdnVlLXRhZ3MtaW5wdXQnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgVnVlVGFnc0lucHV0LFxuICAgICAgICBNdWx0aVJhbmdlU2xpZGVyLFNpZGViYXJNb2RhbCxcbiAgICAgICAgTWFjaGluZVBvcDogKCkgPT4gaW1wb3J0KCcuLi9NYWNoaW5lRmFyUG9wLnZ1ZScpLFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBtTW9kYWxEYXRhOicnLFxuICAgICAgICAgICAgY3JlYXRlZF91c2VyczogW10sXG4gICAgICAgICAgICBzZWFyY2hfbWFjaGluZXM6IFtdLFxuICAgICAgICAgICAgc2VhcmNoX3NpdGVzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRfYXQ6ICcnLFxuICAgICAgICAgICAgICAgIGVuZF9hdDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICBzaXRlczogW10sXG4gICAgICAgICAgICBzZWxlY3RlZF9tYWNoaW5lOiAnJyxcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcbiAgICAgICAgICAgIG1hY2hpbmVzOiBbXSxcbiAgICAgICAgICAgIE1haW5EYXRhOiB7fSxcblxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGRvd25sb2FkKCl7XG4gICAgICAgICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnBhZ2UgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2guZXhwb3J0ID0gXCJleHBvcnRcIjtcbiAgICAgICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2dldF9oc2RfZGF0YScsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJywgLy8gSW1wb3J0YW50XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxuICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3Jlc3BvbnNlLmRhdGFdKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ2hzZF9yZWFkaW5ncy54bHN4Jyk7IC8vIFNldCB0aGUgZmlsZSBuYW1lXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgZG93bmxvYWRpbmcgdGhlIGZpbGU6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb3BlblNpZGVNb2RhbCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuc2lkZWJhck1vZGFsLm9wZW5TaWRlTW9kYWwoKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VTaWRlTW9kYWwoKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLnNpZGViYXJNb2RhbC5jbG9zZVNpZGVNb2RhbCgpO1xuICAgICAgICB9LFxuICAgICAgICB2aWV3X3NpdGVfZGV0YWlscyhkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnBtTW9kYWxEYXRhID0gZGF0YVxuICAgICAgICAgICAgJCgnI01hY2hpbmVTaXRlTW9kYWwyJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXRfZmlsdGVyKCl7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaD0ge1xuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRfYXQ6ICcnLFxuICAgICAgICAgICAgICAgIGVuZF9hdDogJycsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdldFJlc3VsdHMoKVxuICAgICAgICB9LFxuICAgICAgICBVcGRhdGVWYWx1ZXMoZSkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gudGF0X2Zyb20gPSBlLm1pblZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gudGF0X3RvID0gZS5tYXhWYWx1ZTtcbiAgICAgICAgfSxcblxuXG4gICAgICAgIGdldExhYmVsKHZhbCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5mYXJfbm8gKyAnIC0gJyArIHZhbC5uYW1lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXRSZXN1bHRzKHBhZ2UgPSAxKSB7XG5cbiAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdygpO1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCdhcGkvZ2V0X21pbGVhZ2VfZGF0YScsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoOnRoaXMuc2VhcmNoXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLk1haW5EYXRhID0gZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWREYXRhKCkge1xuICAgICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KCk7XG4gICAgICAgICAgICBheGlvcy5nZXQoXCIvYXBpL2dldF9taWxlYWdlX2RhdGFcIiwge1xuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcbiAgICAgICAgICAgIH0pLnRoZW4oKHtcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5NYWluRGF0YSA9IGRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICBheGlvcy5nZXQoXCIvYXBpL2luaXRpYWxfdGlja2V0XCIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS52ZW5kb3JzO1xuICAgICAgICAgICAgdGhpcy5tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2l0ZXMgPSByZXNwb25zZS5kYXRhLmRhdGEuc2l0ZXM7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZWRfdXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEuY3JlYXRlZF91c2VycztcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKCdPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmcnKSk7XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBhc3luYyAnZm9ybS5zdWJfY2F0ZWdvcnlfaWQnKG4sIG8pIHtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jICdmb3JtLnNpdGVfaWQnKG4sIG8pIHtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgJ2Zvcm0uY2F0ZWdvcnlfaWQnOiB7XG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobiwgbykge1xuXG4gICAgICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2NhdGVnb3J5L1wiICsgbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yl9jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuPHN0eWxlPlxuLmJnLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjU1NjMgIWltcG9ydGFudDtcbn1cbi5iZy1ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MGVkNzAgIWltcG9ydGFudDtcbn1cbi5iZy15ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFjODRjICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLW1vZGFsXCIgOmNsYXNzPVwieyAnYWN0aXZlJzogaXNPcGVuIH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlXCIgQGNsaWNrPVwiY2xvc2VTaWRlTW9kYWxcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3R5bGU9XCJmb250LXNpemU6IDE3cHg7Y29sb3I6IGJsYWNrO1wiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgPCEtLSBDb250ZW50IG9mIHRoZSBzaWRlYmFyIG1vZGFsIC0tPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgQGNsaWNrPVwiY2xvc2VTaWRlTW9kYWxcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbiAgXG4gIDxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9wZW5TaWRlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBjbG9zZVNpZGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgPC9zY3JpcHQ+XG4gIFxuICA8c3R5bGUgc2NvcGVkPlxuICAuY2xvc2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAzM3B4O1xuICAgIGhlaWdodDogMzNweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB9XG4gIC5zaWRlYmFyLW1vZGFsIHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogNDUwcHg7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICBcbiAgLnNpZGViYXItbW9kYWwuYWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgXG4gIC5zaWRlYmFyLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG4gIFxuICAuc2lkZWJhci1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxuICA8L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY2xvc2VbZGF0YS12LTQ2MWE0NTg5XXtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMzNweDtcXG4gIGhlaWdodDogMzNweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuLnNpZGViYXItbW9kYWxbZGF0YS12LTQ2MWE0NTg5XSB7XFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDQ1MHB4OyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5zaWRlYmFyLW1vZGFsLmFjdGl2ZVtkYXRhLXYtNDYxYTQ1ODldIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuLnNpZGViYXItY29udGVudFtkYXRhLXYtNDYxYTQ1ODldIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5zaWRlYmFyLW92ZXJsYXlbZGF0YS12LTQ2MWE0NTg5XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJGOi93YW1wNjQvd3d3L3JtbS9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9TaWRlQmFyTW9kYWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE4QkE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtDQUNBO0FBQ0E7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQSxDQUFBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7Q0FDQTtBQUVBO0VBQ0EseUJBQUE7Q0FDQTtBQUVBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0NBQ0E7QUFFQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0NBQ0FcIixcImZpbGVcIjpcIlNpZGVCYXJNb2RhbC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaWRlYmFyLW1vZGFsXFxcIiA6Y2xhc3M9XFxcInsgJ2FjdGl2ZSc6IGlzT3BlbiB9XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2xvc2VcXFwiIEBjbGljaz1cXFwiY2xvc2VTaWRlTW9kYWxcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aW1lc1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIHN0eWxlPVxcXCJmb250LXNpemU6IDE3cHg7Y29sb3I6IGJsYWNrO1xcXCI+PC9pPjwvYnV0dG9uPlxcbiAgICAgICAgPCEtLSBDb250ZW50IG9mIHRoZSBzaWRlYmFyIG1vZGFsIC0tPlxcbiAgICAgICAgPHNsb3Q+PC9zbG90PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgQGNsaWNrPVxcXCJjbG9zZVNpZGVNb2RhbFxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC90ZW1wbGF0ZT5cXG4gIFxcbiAgPHNjcmlwdD5cXG4gIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgZGF0YSgpIHtcXG4gICAgICByZXR1cm4ge1xcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcXG4gICAgICB9O1xcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBvcGVuU2lkZU1vZGFsKCkge1xcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xcbiAgICAgIH0sXFxuICAgICAgY2xvc2VTaWRlTW9kYWwoKSB7XFxuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xcbiAgICAgIH0sXFxuICAgIH0sXFxuICB9O1xcbiAgPC9zY3JpcHQ+XFxuICBcXG4gIDxzdHlsZSBzY29wZWQ+XFxuICAuY2xvc2V7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMzNweDtcXG4gICAgaGVpZ2h0OiAzM3B4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIH1cXG4gIC5zaWRlYmFyLW1vZGFsIHtcXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB3aWR0aDogNDUwcHg7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gICAgei1pbmRleDogOTk5OTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gIH1cXG4gIFxcbiAgLnNpZGViYXItbW9kYWwuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbiAgXFxuICAuc2lkZWJhci1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAuc2lkZWJhci1vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIH1cXG4gIDwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYmctcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjU1NjMgIWltcG9ydGFudDtcXG59XFxuLmJnLWdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MGVkNzAgIWltcG9ydGFudDtcXG59XFxuLmJnLXllbGxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFjODRjICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJGOi93YW1wNjQvd3d3L3JtbS9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9SZXBvcnRzL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlcG9ydHMvTWlsZWFnZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWdTQTtFQUNBLHFDQUFBO0NBQ0E7QUFDQTtFQUNBLHFDQUFBO0NBQ0E7QUFDQTtFQUNBLHFDQUFBO0NBQ0FcIixcImZpbGVcIjpcIk1pbGVhZ2UudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTJcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5NaWxlYWdlIFJlcG9ydDwvaDM+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdG9vbHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVxcXCIgQGNsaWNrPVxcXCJkb3dubG9hZFxcXCI+PGlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZmEgZmEtZG93bmxvYWQgbXItMlxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gRG93bmxvYWQgRXhjZWw8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLWJsdWVcXFwiIEBjbGljaz1cXFwib3BlblNpZGVNb2RhbFxcXCI+PGlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZmEgZmEtc2xpZGVycy1oIG1yLTJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IEZpbHRlcjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2lkZWJhck1vZGFsIHJlZj1cXFwic2lkZWJhck1vZGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBDb250ZW50IG9mIHRoZSBzaWRlYmFyIG1vZGFsIGdvZXMgaGVyZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpIGNsYXNzPVxcXCJmYSBmYS1zbGlkZXJzLWggbXItMlxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIHN0eWxlPVxcXCJmb250LXNpemU6IDIycHg7XFxcIj48L2k+IEZpbHRlclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBAc3VibWl0LnByZXZlbnQ9XFxcImdldFJlc3VsdHMoKVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1hdXRvIGNvbC1jdXN0b21cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJtYWNoaW5lX2lkXFxcIj5GQVIgTm88L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwibmFtZVxcXCIgOmdldC1vcHRpb24tbGFiZWw9XFxcImdldExhYmVsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIiA6b3B0aW9ucz1cXFwic2VhcmNoX21hY2hpbmVzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkVudGVyIG1hY2hpbmVzIC4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLm1hY2hpbmVfaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJtYWNoaW5lX2lkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1hdXRvIGNvbC1jdXN0b21cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJtYWNoaW5lX2lkXFxcIj5TZWxlY3QgU2l0ZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJzaXRlX25hbWVcXFwiIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVxcXCJzZWFyY2hfc2l0ZXNcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWxlY3QgU2l0ZS4uLlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInNlYXJjaC5zaXRlX2lkXFxcIiBuYW1lPVxcXCJzaXRlX2lkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWF1dG8gY29sLWN1c3RvbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm1hY2hpbmVfaWRcXFwiPkZyb20gRGF0ZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XFxcIkFzaWEvS29sa2F0YVxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLnN0YXJ0X2F0XFxcIiBpbnB1dC1jbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRGF0ZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtYXV0byBjb2wtY3VzdG9tXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibWFjaGluZV9pZFxcXCI+VG8gRGF0ZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XFxcIkFzaWEvS29sa2F0YVxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLmVuZF9hdFxcXCIgaW5wdXQtY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkRhdGVcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTYgbWItMiBwci0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXFxcIj5TZWFyY2g8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNiBtYi0yIHBsLTFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1ibG9ja1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwicmVzZXRfZmlsdGVyKClcXFwiPlJlc2V0PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2lkZWJhck1vZGFsPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRlciAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgdGFibGUtcmVzcG9uc2l2ZSBwLTAgdGlja2V0VGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWhvdmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwic3RpY2tleVxcXCI+RkFSIE5vPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3VycmVudCBTaXRlPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1vZGVsPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIE9pbCBDb25zdW1wdGlvbjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5PZmZpY2lhbCBNaWxlYWdlIChLbXMvTHRyKTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3R1YWwgTWlsZWFnZSAoS21zL0x0cik8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGFzdCBNaWxlYWdlIChLbXMvTHRyKTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5PZmZpY2lhbCBDb25zdW1wdGlvbiAoTHRycy9Icik8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0dWFsIENvbnN1bXB0aW9uIChMdHJzL0hyKTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5MYXN0IENvbnN1bXB0aW9uIChMdHJzL0hyKTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCIoZCwgaW5kZXgpICBpbiBNYWluRGF0YS5kYXRhXFxcIiA6a2V5PVxcXCJpbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBkLmZhcl9ubyB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+e3sgZC5uYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJwYi0yXFxcIj57eyBkLmN1cnJlbnRfc2l0ZT9kLmN1cnJlbnRfc2l0ZS5zaXRlX25hbWU6XFxcIlxcXCIgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt7IGQubWFjaGluZV9tb2RlbC5uYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID57eyBkLnRvdGFsX29pbF9jb25zdW10aW9uIH19IC8ge3tkLnRvdGFsX2VudHJpZXN9fSBmaWxsaW5nPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID57eyBkLnN0YW5kYXJkX2NvbnN1bXB0aW9uX2hyX3Blcl9sdHI/ZC5zdGFuZGFyZF9jb25zdW1wdGlvbl9ocl9wZXJfbHRyOjAgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt7IGQuYWN0dWFsX21pbGFnZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+e3sgZC5sYXN0X21pbGFnZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+e3sgZC5zdGFuZGFyZF9jb25zdW1wdGlvbl9rbV9wZXJfbHRyP2Quc3RhbmRhcmRfY29uc3VtcHRpb25fa21fcGVyX2x0cjowfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt7IGQuYWN0dWFsX2NvbnN1bXB0aW9uIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID48L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWJvZHkgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6ZGF0YT1cXFwiTWFpbkRhdGFcXFwiIDpsaW1pdD1cXFwiMTBcXFwiIEBwYWdpbmF0aW9uLWNoYW5nZS1wYWdlPVxcXCJnZXRSZXN1bHRzXFxcIiB2LWlmPVxcXCJNYWluRGF0YVxcXCI+PC9wYWdpbmF0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZCAtLT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgTXVsdGlSYW5nZVNsaWRlciBmcm9tIFxcXCJtdWx0aS1yYW5nZS1zbGlkZXItdnVlXFxcIjtcXG5pbXBvcnQgXFxcIm11bHRpLXJhbmdlLXNsaWRlci12dWUvTXVsdGlSYW5nZVNsaWRlckJsYWNrLmNzc1xcXCI7XFxuaW1wb3J0IFxcXCJtdWx0aS1yYW5nZS1zbGlkZXItdnVlL011bHRpUmFuZ2VTbGlkZXJCYXJPbmx5LmNzc1xcXCI7XFxuaW1wb3J0IFNpZGViYXJNb2RhbCBmcm9tICcuLy4uL1NpZGVCYXJNb2RhbC52dWUnO1xcblxcbmltcG9ydCBWdWVUYWdzSW5wdXQgZnJvbSAnQGpvaG11bi92dWUtdGFncy1pbnB1dCc7XFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICBWdWVUYWdzSW5wdXQsXFxuICAgICAgICBNdWx0aVJhbmdlU2xpZGVyLFNpZGViYXJNb2RhbCxcXG4gICAgICAgIE1hY2hpbmVQb3A6ICgpID0+IGltcG9ydCgnLi4vTWFjaGluZUZhclBvcC52dWUnKSxcXG4gICAgfSxcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgcG1Nb2RhbERhdGE6JycsXFxuICAgICAgICAgICAgY3JlYXRlZF91c2VyczogW10sXFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcXG4gICAgICAgICAgICBzZWFyY2hfc2l0ZXM6IFtdLFxcbiAgICAgICAgICAgIHNlYXJjaDoge1xcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXFxuICAgICAgICAgICAgICAgIHN0YXJ0X2F0OiAnJyxcXG4gICAgICAgICAgICAgICAgZW5kX2F0OiAnJyxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxcbiAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzOiBbXSxcXG4gICAgICAgICAgICBzaXRlczogW10sXFxuICAgICAgICAgICAgc2VsZWN0ZWRfbWFjaGluZTogJycsXFxuICAgICAgICAgICAgdXNlcnM6IFtdLFxcbiAgICAgICAgICAgIG1hY2hpbmVzOiBbXSxcXG4gICAgICAgICAgICBNYWluRGF0YToge30sXFxuXFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGRvd25sb2FkKCl7XFxuICAgICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KCk7XFxuICAgICAgICAgICAgdGhpcy5zZWFyY2gucGFnZSA9IFxcXCJcXFwiO1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmV4cG9ydCA9IFxcXCJleHBvcnRcXFwiO1xcbiAgICAgICAgICAgIGF4aW9zKHtcXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9nZXRfaHNkX2RhdGEnLFxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxcbiAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJywgLy8gSW1wb3J0YW50XFxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3Jlc3BvbnNlLmRhdGFdKSk7XFxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XFxuICAgICAgICAgICAgICAgIGxpbmsuaHJlZiA9IHVybDtcXG4gICAgICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ2hzZF9yZWFkaW5ncy54bHN4Jyk7IC8vIFNldCB0aGUgZmlsZSBuYW1lXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XFxuICAgICAgICAgICAgICAgIGxpbmsuY2xpY2soKTtcXG4gICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcXFwiVGhlcmUgd2FzIGFuIGVycm9yIGRvd25sb2FkaW5nIHRoZSBmaWxlOlxcXCIsIGVycm9yKTtcXG4gICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIG9wZW5TaWRlTW9kYWwoKSB7XFxuICAgICAgICAgICAgdGhpcy4kcmVmcy5zaWRlYmFyTW9kYWwub3BlblNpZGVNb2RhbCgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNsb3NlU2lkZU1vZGFsKCkge1xcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuc2lkZWJhck1vZGFsLmNsb3NlU2lkZU1vZGFsKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgdmlld19zaXRlX2RldGFpbHMoZGF0YSkge1xcbiAgICAgICAgICAgIHRoaXMucG1Nb2RhbERhdGEgPSBkYXRhXFxuICAgICAgICAgICAgJCgnI01hY2hpbmVTaXRlTW9kYWwyJykubW9kYWwoJ3Nob3cnKTtcXG4gICAgICAgIH0sXFxuICAgICAgICByZXNldF9maWx0ZXIoKXtcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaD0ge1xcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXFxuICAgICAgICAgICAgICAgIHN0YXJ0X2F0OiAnJyxcXG4gICAgICAgICAgICAgICAgZW5kX2F0OiAnJyxcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgdGhpcy5nZXRSZXN1bHRzKClcXG4gICAgICAgIH0sXFxuICAgICAgICBVcGRhdGVWYWx1ZXMoZSkge1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRhdF9mcm9tID0gZS5taW5WYWx1ZTtcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC50YXRfdG8gPSBlLm1heFZhbHVlO1xcbiAgICAgICAgfSxcXG5cXG5cXG4gICAgICAgIGdldExhYmVsKHZhbCkge1xcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmZhcl9ubyArICcgLSAnICsgdmFsLm5hbWU7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgZ2V0UmVzdWx0cyhwYWdlID0gMSkge1xcblxcbiAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdygpO1xcbiAgICAgICAgICAgIGF4aW9zLmdldCgnYXBpL2dldF9taWxlYWdlX2RhdGEnLCB7XFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogcGFnZSxcXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDp0aGlzLnNlYXJjaFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5NYWluRGF0YSA9IGRhdGEuZGF0YVxcbiAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgbG9hZERhdGEoKSB7XFxuICAgICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KCk7XFxuICAgICAgICAgICAgYXhpb3MuZ2V0KFxcXCIvYXBpL2dldF9taWxlYWdlX2RhdGFcXFwiLCB7XFxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcXG4gICAgICAgICAgICB9KS50aGVuKCh7XFxuICAgICAgICAgICAgICAgIGRhdGFcXG4gICAgICAgICAgICB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuTWFpbkRhdGEgPSBkYXRhLmRhdGE7XFxuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuXFxuICAgIH0sXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XFxuICAgIH0sXFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcXG4gICAgICAgIGF4aW9zLmdldChcXFwiL2FwaS9pbml0aWFsX3RpY2tldFxcXCIpLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEudmVuZG9ycztcXG4gICAgICAgICAgICB0aGlzLm1hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoX3NpdGVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnNpdGVzO1xcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlZF91c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5jcmVhdGVkX3VzZXJzO1xcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKCdPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmcnKSk7XFxuICAgIH0sXFxuICAgIHdhdGNoOiB7XFxuICAgICAgICBhc3luYyAnZm9ybS5zdWJfY2F0ZWdvcnlfaWQnKG4sIG8pIHtcXG4gICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgYXN5bmMgJ2Zvcm0uc2l0ZV9pZCcobiwgbykge1xcbiAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICAnZm9ybS5jYXRlZ29yeV9pZCc6IHtcXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobiwgbykge1xcblxcbiAgICAgICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvY2F0ZWdvcnkvXFxcIiArIG4pXFxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yl9jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZVxcbiAgICAgICAgfSxcXG5cXG4gICAgfSxcXG59XFxuPC9zY3JpcHQ+XFxuPHN0eWxlPlxcbi5iZy1yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTU2MyAhaW1wb3J0YW50O1xcbn1cXG4uYmctZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwZWQ3MCAhaW1wb3J0YW50O1xcbn1cXG4uYmcteWVsbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWM4NGMgIWltcG9ydGFudDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwic2lkZWJhci1tb2RhbFwiLCBjbGFzczogeyBhY3RpdmU6IF92bS5pc09wZW4gfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VTaWRlTW9kYWwgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRpbWVzXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxN3B4XCIsIGNvbG9yOiBcImJsYWNrXCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgb246IHsgY2xpY2s6IF92bS5jbG9zZVNpZGVNb2RhbCB9IH0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00NjFhNDU4OVwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJNaWxlYWdlIFJlcG9ydFwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRvb2xzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5kb3dubG9hZCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZG93bmxvYWQgbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIERvd25sb2FkIEV4Y2VsXCIpXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1ibHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcGVuU2lkZU1vZGFsIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1zbGlkZXJzLWggbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEZpbHRlclwiKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiU2lkZWJhck1vZGFsXCIsIHsgcmVmOiBcInNpZGViYXJNb2RhbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXNsaWRlcnMtaCBtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMjJweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgRmlsdGVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYXV0b2NvbXBsZXRlOiBcIm9mZlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldFJlc3VsdHMoKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtYXV0byBjb2wtY3VzdG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJtYWNoaW5lX2lkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZBUiBOb1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0LW9wdGlvbi1sYWJlbFwiOiBfdm0uZ2V0TGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnNlYXJjaF9tYWNoaW5lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIG1hY2hpbmVzIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYWNoaW5lX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5tYWNoaW5lX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcIm1hY2hpbmVfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLm1hY2hpbmVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtYXV0byBjb2wtY3VzdG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJtYWNoaW5lX2lkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZyb20gRGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkYXRldGltZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWUtem9uZVwiOiBcIkFzaWEvS29sa2F0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guc3RhcnRfYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwic3RhcnRfYXRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnN0YXJ0X2F0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWF1dG8gY29sLWN1c3RvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibWFjaGluZV9pZFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUbyBEYXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRhdGV0aW1lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZS16b25lXCI6IFwiQXNpYS9Lb2xrYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5lbmRfYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiZW5kX2F0XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5lbmRfYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNiBtYi0yIHByLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlYXJjaFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgbWItMiBwbC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXNldF9maWx0ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJlc2V0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSB0YWJsZS1yZXNwb25zaXZlIHAtMCB0aWNrZXRUYWJsZVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLk1haW5EYXRhLmRhdGEsIGZ1bmN0aW9uKGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGQuZmFyX25vKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhkLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwicGItMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuY3VycmVudF9zaXRlID8gZC5jdXJyZW50X3NpdGUuc2l0ZV9uYW1lIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoZC5tYWNoaW5lX21vZGVsLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZC50b3RhbF9vaWxfY29uc3VtdGlvbikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGQudG90YWxfZW50cmllcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBmaWxsaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuc3RhbmRhcmRfY29uc3VtcHRpb25faHJfcGVyX2x0clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZC5zdGFuZGFyZF9jb25zdW1wdGlvbl9ocl9wZXJfbHRyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhkLmFjdHVhbF9taWxhZ2UpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGQubGFzdF9taWxhZ2UpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuc3RhbmRhcmRfY29uc3VtcHRpb25fa21fcGVyX2x0clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZC5zdGFuZGFyZF9jb25zdW1wdGlvbl9rbV9wZXJfbHRyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhkLmFjdHVhbF9jb25zdW1wdGlvbikpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtZm9vdGVyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uTWFpbkRhdGFcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGF0YTogX3ZtLk1haW5EYXRhLCBsaW1pdDogMTAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IFwicGFnaW5hdGlvbi1jaGFuZ2UtcGFnZVwiOiBfdm0uZ2V0UmVzdWx0cyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJzdGlja2V5XCIgfSwgW192bS5fdihcIkZBUiBOb1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkN1cnJlbnQgU2l0ZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJNb2RlbFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUb3RhbCBPaWwgQ29uc3VtcHRpb25cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiT2ZmaWNpYWwgTWlsZWFnZSAoS21zL0x0cilcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQWN0dWFsIE1pbGVhZ2UgKEttcy9MdHIpXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkxhc3QgTWlsZWFnZSAoS21zL0x0cilcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiT2ZmaWNpYWwgQ29uc3VtcHRpb24gKEx0cnMvSHIpXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFjdHVhbCBDb25zdW1wdGlvbiAoTHRycy9IcilcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTGFzdCBDb25zdW1wdGlvbiAoTHRycy9IcilcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtZDBiOWQ1ZjZcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDYxYTQ1ODlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaWRlQmFyTW9kYWwudnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImEwNzczOGQ0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDYxYTQ1ODlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaWRlQmFyTW9kYWwudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NjFhNDU4OVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1NpZGVCYXJNb2RhbC52dWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTWlsZWFnZS52dWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNmVlN2QxNTJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTWlsZWFnZS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9NaWxlYWdlLnZ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTWlsZWFnZS52dWVcIilcbn1cbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTWlsZWFnZS52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01pbGVhZ2UudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWQwYjlkNWY2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL01pbGVhZ2UudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcUmVwb3J0c1xcXFxNaWxlYWdlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kMGI5ZDVmNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWQwYjlkNWY2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoY29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ2MWE0NTg5XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2lkZUJhck1vZGFsLnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TaWRlQmFyTW9kYWwudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TaWRlQmFyTW9kYWwudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQ2MWE0NTg5XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2lkZUJhck1vZGFsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi00NjFhNDU4OVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXFNpZGVCYXJNb2RhbC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDYxYTQ1ODlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NjFhNDU4OVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iXSwic291cmNlUm9vdCI6IiJ9