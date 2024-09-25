(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Reading/AddEditReadingData.vue":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Reading/AddEditReadingData.vue ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_month_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-month-picker */ "./node_modules/vue-month-picker/src/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SiteWiseExpenses",
  components: {
    MonthPicker: vue_month_picker__WEBPACK_IMPORTED_MODULE_0__["MonthPicker"],
    MonthPickerInput: vue_month_picker__WEBPACK_IMPORTED_MODULE_0__["MonthPickerInput"]
  },
  data() {
    return {
      pmModalData: "",
      created_users: [],
      search_machines: [],
      search_sites: [],
      search_tickets: [],
      search: {
        page: 1,
        machine_id: "",
        site_id: "",
        category_id: "",
        sub_category_id: "",
        date_from: "",
        date_to: "",
        report_type: "machine wise"
      },
      categories: [],
      sub_categories: [],
      sites: [],
      selected_machine: "",
      users: [],
      machines: [],
      Tickets: {},
      clearEmittedText: '',
      default_month: '',
      json_fields: {
        "Machine Name": "name",
        "FAR No": "far_no",
        "Actual Material Expenses": "material_expenses",
        "Actual Service Expenses": "service_expenses",
        "Total Expenses": "total_expenses"
      },
      json_meta: [[{
        key: "charset",
        value: "utf-8"
      }]]
    };
  },
  methods: {
    showClearText() {
      this.clearEmittedText = 'emitted';
      this.default_month = '';
      window.setTimeout(() => {
        this.clearEmittedText = null;
      }, 1000);
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
    },
    reset_filter() {
      this.search = {
        page: 1,
        site_id: "",
        report_type: "machine wise"
      };
      this.getResults();
    },
    UpdateValues(e) {
      this.search.tat_from = e.minValue;
      this.search.tat_to = e.maxValue;
    },
    // excel
    async export_csv() {
      this.search.report_type = 'machine wise export';
      const response = await axios.post("api/reports", this.search);
      this.search.report_type = 'machine wise';
      return response.data.data;
    },
    startDownload() {
      Swal.fire({
        title: "Please Wait !",
        html: "Data populating",
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
      if (typeof val === "object") {
        return val.far_no + " - " + val.name;
      } else {
        return val;
      }
    },
    getResults(page = 1) {
      this.$Progress.start();
      this.search.page = page;
      axios.post("/api/reports", this.search).then(res => {
        this.Tickets = res.data.data;
      }).catch(err => {
        console.error(err);
      });
      this.$Progress.finish();
    }
  },
  created() {
    //  this.getResults();
  },
  beforeCreate() {
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
  watch: {
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
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-406e7c33\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Reading/AddEditReadingData.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-406e7c33","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Reading/AddEditReadingData.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "card" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "card-body p-2" }, [
              _c("form", { attrs: { autocomplete: "off" } }, [
                _c("div", { staticClass: "form-row" }, [
                  _c(
                    "div",
                    { staticClass: "col col-2" },
                    [
                      _c("v-select", {
                        attrs: {
                          label: "site_name",
                          reduce: function(option) {
                            return option.id
                          },
                          options: _vm.search_sites,
                          placeholder: "Select Site...",
                          name: "site_id"
                        },
                        on: {
                          change: function($event) {
                            return _vm.getResults()
                          }
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
                  _vm._m(1)
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body table-responsive p-0 ticketTable" },
              [
                _vm.Tickets && _vm.Tickets.records
                  ? _c(
                      "table",
                      { staticClass: "table table-hover table-striped" },
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.Tickets.records.data, function(ticket) {
                            return _c(
                              "tr",
                              { key: ticket.id, class: ticket.row_color },
                              [
                                _c("td"),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(ticket.name))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(ticket.far_no))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(ticket.engine_model))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(ticket.regn_no))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(ticket.engine_no))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(ticket.chassis_no))]),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td")
                              ]
                            )
                          }),
                          0
                        )
                      ]
                    )
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _vm.Tickets && _vm.Tickets.records
              ? _c(
                  "div",
                  { staticClass: "card-footer" },
                  [
                    _c("pagination", {
                      attrs: { data: _vm.Tickets },
                      on: { "pagination-change-page": _vm.getResults }
                    })
                  ],
                  1
                )
              : _vm._e()
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [
        _vm._v("Machine Wise Expenses Report")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col pt-2" }, [
      _c(
        "button",
        { staticClass: "btn btn-success", attrs: { type: "submit" } },
        [
          _vm._v(
            "\n                                        Search\n                                    "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Current Site")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("FAR No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Model")]),
        _vm._v(" "),
        _c("th", [_vm._v("Regn No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine Sr No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Engine No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Chassis No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Starting Hourmeter")]),
        _vm._v(" "),
        _c("th", [_vm._v("Closing Hourmeter")]),
        _vm._v(" "),
        _c("th", [_vm._v("Starting KM")]),
        _vm._v(" "),
        _c("th", [_vm._v("Closing KM")]),
        _vm._v(" "),
        _c("th", [
          _vm._v(
            "If Hoursmeter or KM not working then-Total Daily running hours/km (Approx.)"
          )
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Diesel Issued (Ltrs)")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine running status")])
      ])
    ])
  }
]
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./resources/js/components/Reading/AddEditReadingData.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Reading/AddEditReadingData.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddEditReadingData_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./AddEditReadingData.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Reading/AddEditReadingData.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_406e7c33_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AddEditReadingData_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-406e7c33","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./AddEditReadingData.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-406e7c33\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Reading/AddEditReadingData.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddEditReadingData_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_406e7c33_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AddEditReadingData_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_406e7c33_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AddEditReadingData_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\Reading\\AddEditReadingData.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVhZGluZy9BZGRFZGl0UmVhZGluZ0RhdGEudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlYWRpbmcvQWRkRWRpdFJlYWRpbmdEYXRhLnZ1ZT8wOTNiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlYWRpbmcvQWRkRWRpdFJlYWRpbmdEYXRhLnZ1ZSJdLCJuYW1lcyI6WyJuYW1lIiwiY29tcG9uZW50cyIsIk1vbnRoUGlja2VyIiwiTW9udGhQaWNrZXJJbnB1dCIsImRhdGEiLCJwbU1vZGFsRGF0YSIsImNyZWF0ZWRfdXNlcnMiLCJzZWFyY2hfbWFjaGluZXMiLCJzZWFyY2hfc2l0ZXMiLCJzZWFyY2hfdGlja2V0cyIsInNlYXJjaCIsInBhZ2UiLCJtYWNoaW5lX2lkIiwic2l0ZV9pZCIsImNhdGVnb3J5X2lkIiwic3ViX2NhdGVnb3J5X2lkIiwiZGF0ZV9mcm9tIiwiZGF0ZV90byIsInJlcG9ydF90eXBlIiwiY2F0ZWdvcmllcyIsInN1Yl9jYXRlZ29yaWVzIiwic2l0ZXMiLCJzZWxlY3RlZF9tYWNoaW5lIiwidXNlcnMiLCJtYWNoaW5lcyIsIlRpY2tldHMiLCJjbGVhckVtaXR0ZWRUZXh0IiwiZGVmYXVsdF9tb250aCIsImpzb25fZmllbGRzIiwianNvbl9tZXRhIiwia2V5IiwidmFsdWUiLCJtZXRob2RzIiwic2hvd0NsZWFyVGV4dCIsIndpbmRvdyIsImF4aW9zIiwiZ2V0IiwicGFyYW1zIiwidGhlbiIsImNhdGNoIiwicmVzZXRfZmlsdGVyIiwiVXBkYXRlVmFsdWVzIiwic3RhcnREb3dubG9hZCIsIlN3YWwiLCJ0aXRsZSIsImh0bWwiLCJhbGxvd091dHNpZGVDbGljayIsIm9uQmVmb3JlT3BlbiIsImZpbmlzaERvd25sb2FkIiwiZ2V0TGFiZWwiLCJnZXRSZXN1bHRzIiwiY29uc29sZSIsImNyZWF0ZWQiLCJiZWZvcmVDcmVhdGUiLCJ3YXRjaCIsImhhbmRsZXIiLCJkZWVwIiwiaW5pdGlhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFGQTtBQUNBO0FBQ2U7RUFDZkE7RUFDQUM7SUFDQUM7SUFDQUM7RUFDQTtFQUNBQztJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQUMsWUFDQSxDQUNBO1FBQ0FDO1FBQ0FDO01BQ0EsRUFDQTtJQUVBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtNQUNBO01BQ0FDO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7TUFDQUMsTUFDQUM7UUFDQUM7VUFDQXhCO1VBQ0FDO1VBQ0FDO1FBQ0E7TUFDQSxHQUNBdUI7UUFDQTtNQUNBLEdBQ0FDO0lBQ0E7SUFDQUM7TUFDQTtRQUNBN0I7UUFDQUU7UUFDQUs7TUFDQTtNQUNBO0lBQ0E7SUFDQXVCO01BQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7VUFDQUo7UUFDQTtNQUNBO0lBQ0E7SUFDQUs7TUFDQUw7SUFDQTtJQUVBTTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFFQWYsd0NBQ0FHO1FBQ0E7TUFDQSxHQUNBQztRQUNBWTtNQUNBO01BQ0E7SUFDQTtFQUVBO0VBQ0FDO0lBQ0E7RUFBQSxDQUNBO0VBQ0FDO0lBQ0FsQjtNQUNBO01BQ0E7SUFDQTtJQUNBQSxNQUNBQywyQkFDQUU7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0EsR0FDQUM7RUFDQTtFQUNBZTtJQUNBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUE7TUFDQUM7UUFDQTtVQUNBcEI7WUFDQTtVQUNBO1VBQ0E7UUFDQTtNQUNBO01BQ0FxQjtNQUNBQztJQUNBO0VBQ0E7QUFHQSxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ25RRDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQsZUFBZSxpQ0FBaUM7QUFDaEQsaUJBQWlCLHFCQUFxQjtBQUN0QyxtQkFBbUIsd0JBQXdCO0FBQzNDLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBLHVCQUF1QiwrQkFBK0I7QUFDdEQsMEJBQTBCLFNBQVMsc0JBQXNCLEVBQUU7QUFDM0QsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNERBQTREO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFpRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBDQUEwQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNBLDhCQUE4QixvQkFBb0I7QUFDbEQsMkJBQTJCO0FBQzNCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkJBQTZCO0FBQ25ELGdCQUFnQiw0QkFBNEI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwQkFBMEI7QUFDaEQ7QUFDQTtBQUNBLFNBQVMseUNBQXlDLGlCQUFpQixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0M7QUFDbEMsSUFBSSxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDdk1oQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDNEg7QUFDYTtBQUN6STtBQUMyVjtBQUMzVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NHO0FBQ3RHLGdCQUFnQix5R0FBa0I7QUFDbEMsRUFBRSxxSUFBYztBQUNoQixFQUFFLDZPQUFjO0FBQ2hCLEVBQUUsc1BBQXlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLEVBYVg7O0FBRVUsZ0ZBQWlCIiwiZmlsZSI6ImpzLzE4LmJ1bmRsZS5kMjNmNjYyYWZlNzcwMTE3MTJhOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZVwiPk1hY2hpbmUgV2lzZSBFeHBlbnNlcyBSZXBvcnQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdG9vbHNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgIGxhYmVsPVwic2l0ZV9uYW1lXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIDpvcHRpb25zPVwic2VhcmNoX3NpdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBTaXRlLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5zaXRlX2lkXCIgbmFtZT1cInNpdGVfaWRcIiBAY2hhbmdlPVwiZ2V0UmVzdWx0cygpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgIHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRlciAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSB0YWJsZS1yZXNwb25zaXZlIHAtMCB0aWNrZXRUYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtc3RyaXBlZFwiICB2LWlmPVwiVGlja2V0cyAmJiBUaWNrZXRzLnJlY29yZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DdXJyZW50IFNpdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZBUiBObzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TW9kZWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlZ24gTm88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hY2hpbmUgU3IgTm88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVuZ2luZSBObzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2hhc3NpcyBObzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhcnRpbmcgSG91cm1ldGVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DbG9zaW5nIEhvdXJtZXRlcjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhcnRpbmcgS008L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNsb3NpbmcgS008L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPklmIEhvdXJzbWV0ZXIgb3IgS00gbm90IHdvcmtpbmcgdGhlbi1Ub3RhbCBEYWlseSBydW5uaW5nIGhvdXJzL2ttIChBcHByb3guKTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGllc2VsIElzc3VlZCAoTHRycyk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hY2hpbmUgcnVubmluZyBzdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJ0aWNrZXQgaW4gVGlja2V0cy5yZWNvcmRzLmRhdGFcIiA6a2V5PVwidGlja2V0LmlkXCIgOmNsYXNzPVwidGlja2V0LnJvd19jb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lm5hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5mYXJfbm8gfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5lbmdpbmVfbW9kZWwgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5yZWduX25vIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuZW5naW5lX25vIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuY2hhc3Npc19ubyB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWJvZHkgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiICB2LWlmPVwiVGlja2V0cyAmJiBUaWNrZXRzLnJlY29yZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYWdpbmF0aW9uIDpkYXRhPVwiVGlja2V0c1wiIEBwYWdpbmF0aW9uLWNoYW5nZS1wYWdlPVwiZ2V0UmVzdWx0c1wiPjwvcGFnaW5hdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQgLS0+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgTW9udGhQaWNrZXIgfSBmcm9tICd2dWUtbW9udGgtcGlja2VyJ1xuaW1wb3J0IHsgTW9udGhQaWNrZXJJbnB1dCB9IGZyb20gJ3Z1ZS1tb250aC1waWNrZXInXG5leHBvcnQgZGVmYXVsdCB7XG4gICBuYW1lOiBcIlNpdGVXaXNlRXhwZW5zZXNcIixcbiAgIGNvbXBvbmVudHM6IHtcbiAgICAgICBNb250aFBpY2tlcixcbiAgICAgICBNb250aFBpY2tlcklucHV0XG4gICB9LFxuICAgZGF0YSgpIHtcbiAgICAgICByZXR1cm4ge1xuICAgICAgICAgICBwbU1vZGFsRGF0YTogXCJcIixcbiAgICAgICAgICAgY3JlYXRlZF91c2VyczogW10sXG4gICAgICAgICAgIHNlYXJjaF9tYWNoaW5lczogW10sXG4gICAgICAgICAgIHNlYXJjaF9zaXRlczogW10sXG4gICAgICAgICAgIHNlYXJjaF90aWNrZXRzOltdLFxuICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICBtYWNoaW5lX2lkOiBcIlwiLFxuICAgICAgICAgICAgICAgc2l0ZV9pZDogXCJcIixcbiAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiBcIlwiLFxuICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiBcIlwiLFxuICAgICAgICAgICAgICAgZGF0ZV9mcm9tOiBcIlwiLFxuICAgICAgICAgICAgICAgZGF0ZV90bzpcIlwiLFxuICAgICAgICAgICAgICAgcmVwb3J0X3R5cGU6IFwibWFjaGluZSB3aXNlXCIsXG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgICAgICBzdWJfY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgIHNpdGVzOiBbXSxcbiAgICAgICAgICAgc2VsZWN0ZWRfbWFjaGluZTogXCJcIixcbiAgICAgICAgICAgdXNlcnM6IFtdLFxuICAgICAgICAgICBtYWNoaW5lczogW10sXG4gICAgICAgICAgIFRpY2tldHM6IHt9LFxuICAgICAgICAgICBjbGVhckVtaXR0ZWRUZXh0OiAnJyxcbiAgICAgICAgICAgZGVmYXVsdF9tb250aDogJycsXG4gICAgICAgICAgIGpzb25fZmllbGRzOiB7XG4gICAgICAgICAgICAgICBcIk1hY2hpbmUgTmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgIFwiRkFSIE5vXCI6IFwiZmFyX25vXCIsXG4gICAgICAgICAgICAgICBcIkFjdHVhbCBNYXRlcmlhbCBFeHBlbnNlc1wiOiBcIm1hdGVyaWFsX2V4cGVuc2VzXCIsXG4gICAgICAgICAgICAgICBcIkFjdHVhbCBTZXJ2aWNlIEV4cGVuc2VzXCI6IFwic2VydmljZV9leHBlbnNlc1wiLFxuICAgICAgICAgICAgICAgXCJUb3RhbCBFeHBlbnNlc1wiOiBcInRvdGFsX2V4cGVuc2VzXCIsXG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIGpzb25fbWV0YTogW1xuICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImNoYXJzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwidXRmLThcIixcbiAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgXSxcbiAgICAgICB9O1xuICAgfSxcbiAgIG1ldGhvZHM6IHtcbiAgICAgICBzaG93Q2xlYXJUZXh0KCkge1xuICAgICAgICAgICB0aGlzLmNsZWFyRW1pdHRlZFRleHQgPSAnZW1pdHRlZCdcbiAgICAgICAgICAgdGhpcy5kZWZhdWx0X21vbnRoID0gJydcbiAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgdGhpcy5jbGVhckVtaXR0ZWRUZXh0ID0gbnVsbFxuICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgIH0sXG4gICAgICAgYXN5bmMgZ2V0X21hY2hpbmUoKSB7XG4gICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAuZ2V0KFwiL2FwaS9yZXBvcnRzL21hY2hpbmVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgc2l0ZV9pZDogdGhpcy5zZWFyY2guc2l0ZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IHRoaXMuc2VhcmNoLmNhdGVnb3J5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6IHRoaXMuc2VhcmNoLnN1Yl9jYXRlZ29yeV9pZCxcbiAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oXCJPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmdcIikpO1xuICAgICAgIH0sXG4gICAgICAgcmVzZXRfZmlsdGVyKCkge1xuICAgICAgICAgICB0aGlzLnNlYXJjaCA9IHtcbiAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICBzaXRlX2lkOiBcIlwiLFxuICAgICAgICAgICAgICAgcmVwb3J0X3R5cGU6IFwibWFjaGluZSB3aXNlXCIsXG4gICAgICAgICAgIH07XG4gICAgICAgICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xuICAgICAgIH0sXG4gICAgICAgVXBkYXRlVmFsdWVzKGUpIHtcbiAgICAgICAgICAgdGhpcy5zZWFyY2gudGF0X2Zyb20gPSBlLm1pblZhbHVlO1xuICAgICAgICAgICB0aGlzLnNlYXJjaC50YXRfdG8gPSBlLm1heFZhbHVlO1xuICAgICAgIH0sXG4gICAgICAgLy8gZXhjZWxcbiAgICAgICBhc3luYyBleHBvcnRfY3N2KCkge1xuICAgICAgICAgICB0aGlzLnNlYXJjaC5yZXBvcnRfdHlwZSA9ICdtYWNoaW5lIHdpc2UgZXhwb3J0J1xuICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvcmVwb3J0c1wiLCB0aGlzLnNlYXJjaCk7XG4gICAgICAgICAgIHRoaXMuc2VhcmNoLnJlcG9ydF90eXBlID0gJ21hY2hpbmUgd2lzZSdcbiAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICB9LFxuICAgICAgIHN0YXJ0RG93bmxvYWQoKSB7XG4gICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICB0aXRsZTogXCJQbGVhc2UgV2FpdCAhXCIsXG4gICAgICAgICAgICAgICBodG1sOiBcIkRhdGEgcG9wdWxhdGluZ1wiLFxuICAgICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgb25CZWZvcmVPcGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgU3dhbC5zaG93TG9hZGluZygpO1xuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgfSk7XG4gICAgICAgfSxcbiAgICAgICBmaW5pc2hEb3dubG9hZCgpIHtcbiAgICAgICAgICAgU3dhbC5jbG9zZSgpO1xuICAgICAgIH0sXG5cbiAgICAgICBnZXRMYWJlbCh2YWwpIHtcbiAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgIHJldHVybiB2YWwuZmFyX25vICsgXCIgLSBcIiArIHZhbC5uYW1lO1xuICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgfVxuICAgICAgIH0sXG4gICAgICAgZ2V0UmVzdWx0cyhwYWdlID0gMSkge1xuICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICAgICB0aGlzLnNlYXJjaC5wYWdlID0gcGFnZTtcblxuICAgICAgICAgICBheGlvcy5wb3N0KFwiL2FwaS9yZXBvcnRzXCIsIHRoaXMuc2VhcmNoKVxuICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICB0aGlzLlRpY2tldHMgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XG4gICAgICAgfSxcblxuICAgfSxcbiAgIGNyZWF0ZWQoKSB7XG4gICAgICAvLyAgdGhpcy5nZXRSZXN1bHRzKCk7XG4gICB9LFxuICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgIGF4aW9zLmdldChcImFwaS9nZXRfcHJlX21hY2hpbmVcIikudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuQ2F0ZWdvcnk7XG4gICAgICAgICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xuICAgICAgIH0pO1xuICAgICAgIGF4aW9zXG4gICAgICAgICAgIC5nZXQoXCIvYXBpL2luaXRpYWxfdGlja2V0XCIpXG4gICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS52ZW5kb3JzO1xuICAgICAgICAgICAgICAgdGhpcy5tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcbiAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xuICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2l0ZXMgPSByZXNwb25zZS5kYXRhLmRhdGEuc2l0ZXM7XG4gICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRfdXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEuY3JlYXRlZF91c2VycztcbiAgICAgICAgICAgfSlcbiAgICAgICAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybihcIk9oLiBTb21ldGhpbmcgd2VudCB3cm9uZ1wiKSk7XG4gICB9LFxuICAgd2F0Y2g6IHtcbiAgICAgICBhc3luYyBcInNlYXJjaC5zdWJfY2F0ZWdvcnlfaWRcIihuLCBvKSB7XG4gICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKCk7XG4gICAgICAgICAgIH1cbiAgICAgICB9LFxuICAgICAgIGFzeW5jIFwic2VhcmNoLnNpdGVfaWRcIihuLCBvKSB7XG4gICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKCk7XG4gICAgICAgICAgIH1cbiAgICAgICB9LFxuXG4gICAgICAgXCJzZWFyY2guY2F0ZWdvcnlfaWRcIjoge1xuICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobiwgbykge1xuICAgICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvY2F0ZWdvcnkvXCIgKyBuKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9LFxuICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgIH0sXG4gICB9LFxuXG5cbn07XG5cblxuXG5cblxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IHAtMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJmb3JtXCIsIHsgYXR0cnM6IHsgYXV0b2NvbXBsZXRlOiBcIm9mZlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaXRlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zZWFyY2hfc2l0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBTaXRlLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2l0ZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldFJlc3VsdHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guc2l0ZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwic2l0ZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnNpdGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSB0YWJsZS1yZXNwb25zaXZlIHAtMCB0aWNrZXRUYWJsZVwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uVGlja2V0cyAmJiBfdm0uVGlja2V0cy5yZWNvcmRzXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLXN0cmlwZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLlRpY2tldHMucmVjb3Jkcy5kYXRhLCBmdW5jdGlvbih0aWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogdGlja2V0LmlkLCBjbGFzczogdGlja2V0LnJvd19jb2xvciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQuZmFyX25vKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQuZW5naW5lX21vZGVsKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQucmVnbl9ubykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0LmVuZ2luZV9ubykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0LmNoYXNzaXNfbm8pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5UaWNrZXRzICYmIF92bS5UaWNrZXRzLnJlY29yZHNcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtZm9vdGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkYXRhOiBfdm0uVGlja2V0cyB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IFwicGFnaW5hdGlvbi1jaGFuZ2UtcGFnZVwiOiBfdm0uZ2V0UmVzdWx0cyB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIk1hY2hpbmUgV2lzZSBFeHBlbnNlcyBSZXBvcnRcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10b29sc1wiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgcHQtMlwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLCBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ3VycmVudCBTaXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRkFSIE5vXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1vZGVsXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlJlZ24gTm9cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTWFjaGluZSBTciBOb1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJFbmdpbmUgTm9cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ2hhc3NpcyBOb1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTdGFydGluZyBIb3VybWV0ZXJcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ2xvc2luZyBIb3VybWV0ZXJcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU3RhcnRpbmcgS01cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ2xvc2luZyBLTVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIklmIEhvdXJzbWV0ZXIgb3IgS00gbm90IHdvcmtpbmcgdGhlbi1Ub3RhbCBEYWlseSBydW5uaW5nIGhvdXJzL2ttIChBcHByb3guKVwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRGllc2VsIElzc3VlZCAoTHRycylcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTWFjaGluZSBydW5uaW5nIHN0YXR1c1wiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00MDZlN2MzM1wiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59IiwidmFyIGRpc3Bvc2VkID0gZmFsc2Vcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQWRkRWRpdFJlYWRpbmdEYXRhLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQWRkRWRpdFJlYWRpbmdEYXRhLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00MDZlN2MzM1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BZGRFZGl0UmVhZGluZ0RhdGEudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxSZWFkaW5nXFxcXEFkZEVkaXRSZWFkaW5nRGF0YS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDA2ZTdjMzNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00MDZlN2MzM1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iXSwic291cmNlUm9vdCI6IiJ9