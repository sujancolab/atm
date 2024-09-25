(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Dashboard/index.vue":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Dashboard/index.vue ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
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
  components: {},
  data() {
    return {
      step: 1,
      items: [],
      layout: {
        showroom: "",
        floorplan: "",
        floorTemplate: "",
        template: ""
      }
    };
  },
  watch: {
    user: {
      handler: function (newValue) {
        if (newValue) {
          if (this.user.type != 'User') {
            this.$router.push("/").catch(() => {});
            Toast.fire({
              icon: 'warning',
              title: 'Sorry, you are not authorized to access this page.'
            });
          }
        }
      },
      deep: true
    }
  },
  methods: {},
  async mounted() {
    this.$root.$on('set_steps', x => {
      this.step = x;
    });
    this.$root.$on('visualize_item', text => {
      var retrievedItem = localStorage.getItem('my_item');
      var my_object = {};
      if (retrievedItem) {
        my_object = JSON.parse(retrievedItem);
      }
      if (text.showroom) my_object.showroom = text.showroom;
      if (text.floorplan) my_object.floorplan = text.floorplan;
      if (text.floorTemplate) my_object.floorTemplate = text.floorTemplate;
      if (text.template) my_object.template = text.template;
      if (text.items) my_object.items = text.items;
      localStorage.setItem('my_item', JSON.stringify(my_object));
      this.layout = my_object;
    });
    this.$root.$on('add_to_cart', item => {
      let vsd_cart = JSON.parse(localStorage.getItem('vsd_cart'));
      if (vsd_cart) {
        this.items = vsd_cart;
      }
      this.items.push(item);
      const parsed = JSON.stringify(this.items);
      localStorage.setItem('vsd_cart', parsed);
      this.set_cart_price();
    });
    this.$root.$on('remove_cart', x => {
      this.items = JSON.parse(localStorage.getItem('vsd_cart'));
      this.items.splice(x, 1);
      const parsed = JSON.stringify(this.items);
      localStorage.setItem('vsd_cart', parsed);
      Toast.fire({
        icon: 'success',
        title: 'Product removed from your cart.'
      });
      this.set_cart_price();
    });
  },
  async created() {
    if (this.user && this.user.type != 'User') {
      this.$router.push("/").catch(() => {});
      Toast.fire({
        icon: 'warning',
        title: 'Sorry, you are not authorized to access this page.'
      });
    }
  },
  filters: {},
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("auth", ["user"])
  },
  methods: {
    set_cart_price() {
      var cart_price = 0;
      let items = JSON.parse(localStorage.getItem('vsd_cart'));
      if (items) {
        for (let index = 0; index < items.length; index++) {
          const element = items[index];
          cart_price = Number(cart_price) + Number(element.calculate.price);
        }
      }
      localStorage.setItem('vsd_cart_price', cart_price);
    },
    async push_to_step(x = 1) {
      var retrievedItem = JSON.parse(localStorage.getItem('my_item'));
      if (retrievedItem) {
        if (this.step != x) {
          if (x == 2) {
            if (retrievedItem.showroom) {
              this.$router.push('/visualize/floorplan').catch(() => {});
            } else {
              Toast.fire({
                icon: 'warning',
                title: 'Please Enter Showroom Id to Proceed.'
              });
            }
          } else if (x == 3) {
            if (retrievedItem.showroom && retrievedItem.floorplan) {
              this.$router.push('/visualize/template').catch(() => {});
            } else {
              Toast.fire({
                icon: 'warning',
                title: 'Please Choose Floor-plan to Proceed.'
              });
            }
          } else if (x == 4) {
            if (retrievedItem.showroom && retrievedItem.floorplan && retrievedItem.floorTemplate) {
              this.$router.push('/visualize/checklist').catch(() => {});
            } else {
              Toast.fire({
                icon: 'warning',
                title: 'Please Choose Floor-Template to Proceed.'
              });
            }
          } else if (x == 5) {
            if (retrievedItem.showroom && retrievedItem.floorplan && retrievedItem.floorTemplate) {
              this.$router.push('/visualize/contractor').catch(() => {});
            } else {
              Toast.fire({
                icon: 'warning',
                title: 'Please Choose All Steps to Visualize your Room.'
              });
            }
          } else {
            this.$router.push('/visualize/').catch(() => {});
          }
        }
      } else if (x > 1) {
        Toast.fire({
          icon: 'warning',
          title: 'Please Enter Showroom Id to Proceed.'
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-69504082\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dashboard/index.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-69504082","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dashboard/index.vue ***!
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
  return _c(
    "main",
    [
      _vm.step != 5
        ? _c("div", { staticClass: "stepsBar" }, [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "progresbar-group" }, [
                _c("ul", { staticClass: "progressbar" }, [
                  _c(
                    "li",
                    {
                      staticClass: "pointer",
                      class: _vm.step == 1 ? "active" : "",
                      on: {
                        click: function($event) {
                          return _vm.push_to_step(1)
                        }
                      }
                    },
                    [_vm._v("Choose Showroom")]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "pointer",
                      class: _vm.step == 2 ? "active" : "",
                      on: {
                        click: function($event) {
                          return _vm.push_to_step(2)
                        }
                      }
                    },
                    [_vm._v("Choose Floorplan")]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "pointer",
                      class: _vm.step == 3 ? "active" : "",
                      on: {
                        click: function($event) {
                          return _vm.push_to_step(3)
                        }
                      }
                    },
                    [_vm._v("Choose Template")]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "pointer",
                      on: {
                        click: function($event) {
                          return _vm.push_to_step(5)
                        }
                      }
                    },
                    [_vm._v("Virtual Showroom")]
                  )
                ])
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("router-view", {
        attrs: { layout: _vm.layout },
        on: {
          "update:layout": function($event) {
            _vm.layout = $event
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./resources/js/components/Dashboard/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Dashboard/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Dashboard/index.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_69504082_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-69504082","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-69504082\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dashboard/index.vue");
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_69504082_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_69504082_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\Dashboard\\index.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvaW5kZXgudnVlPzFmZTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL2luZGV4LnZ1ZSJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiZGF0YSIsInN0ZXAiLCJpdGVtcyIsImxheW91dCIsInNob3dyb29tIiwiZmxvb3JwbGFuIiwiZmxvb3JUZW1wbGF0ZSIsInRlbXBsYXRlIiwid2F0Y2giLCJ1c2VyIiwiaGFuZGxlciIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwiZGVlcCIsIm1ldGhvZHMiLCJteV9vYmplY3QiLCJsb2NhbFN0b3JhZ2UiLCJmaWx0ZXJzIiwiY29tcHV0ZWQiLCJzZXRfY2FydF9wcmljZSIsImNhcnRfcHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNlO0VBQ2ZBLGFBRUE7RUFDQUM7SUFDQTtNQUNBQztNQUNBQztNQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUNBQztRQUNBO1VBQ0E7WUFDQTtZQUNBQztjQUNBQztjQUNBQztZQUNBO1VBQ0E7UUFDQTtNQUNBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQyxVQUVBO0VBQ0E7SUFFQTtNQUNBO0lBQ0E7SUFHQTtNQUNBO01BQ0E7TUFDQTtRQUNBQztNQUNBO01BRUEsbUJBQ0FBO01BRUEsb0JBQ0FBO01BRUEsd0JBQ0FBO01BRUEsbUJBQ0FBO01BRUEsZ0JBQ0FBO01BRUFDO01BQ0E7SUFDQTtJQUVBO01BQ0E7TUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0FBO01BQ0E7SUFDQTtJQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0FBO01BQ0FOO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQTtJQUNBO0VBRUE7RUFDQTtJQUNBO01BQ0E7TUFDQUY7UUFDQUM7UUFDQUM7TUFDQTtJQUNBO0VBQ0E7RUFDQUssVUFFQTtFQUNBQztJQUNBO0VBQ0E7RUFDQUo7SUFDQUs7TUFDQTtNQUNBO01BQ0E7UUFDQTtVQUNBO1VBQ0FDO1FBQ0E7TUFDQTtNQUNBSjtJQUNBO0lBRUE7TUFDQTtNQUVBO1FBQ0E7VUFDQTtZQUNBO2NBQ0E7WUFDQTtjQUNBTjtnQkFDQUM7Z0JBQ0FDO2NBQ0E7WUFDQTtVQUNBO1lBQ0E7Y0FDQTtZQUNBO2NBQ0FGO2dCQUNBQztnQkFDQUM7Y0FDQTtZQUNBO1VBQ0E7WUFDQTtjQUNBO1lBQ0E7Y0FDQUY7Z0JBQ0FDO2dCQUNBQztjQUNBO1lBQ0E7VUFDQTtZQUNBO2NBQ0E7WUFDQTtjQUNBRjtnQkFDQUM7Z0JBQ0FDO2NBQ0E7WUFDQTtVQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7UUFDQUY7VUFDQUM7VUFDQUM7UUFDQTtNQUNBO0lBQ0E7RUFFQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDdk1EO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMEJBQTBCO0FBQy9DLHVCQUF1QiwyQkFBMkI7QUFDbEQseUJBQXlCLGtDQUFrQztBQUMzRCwwQkFBMEIsNkJBQTZCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDO0FBQ2xDLElBQUksS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ3ZGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQytHO0FBQ2E7QUFDNUg7QUFDOFU7QUFDOVU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzRztBQUN0RyxnQkFBZ0IseUdBQWtCO0FBQ2xDLEVBQUUsd0hBQWM7QUFDaEIsRUFBRSxnT0FBYztBQUNoQixFQUFFLHlPQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWFYOztBQUVVLGdGQUFpQiIsImZpbGUiOiJqcy8yMS5idW5kbGUuNTNjOWI0YTQwYTZkY2FjZmY2ODEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbjxtYWluPlxyXG4gICAgXHQ8ZGl2IGNsYXNzPVwic3RlcHNCYXJcIiB2LWlmPVwic3RlcCE9NVwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHQ8ZGl2ICBjbGFzcz1cInByb2dyZXNiYXItZ3JvdXBcIj5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJwcm9ncmVzc2JhclwiPlxyXG5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cInBvaW50ZXJcIiA6Y2xhc3M9XCJzdGVwPT0xPydhY3RpdmUnOicnXCIgQGNsaWNrPVwicHVzaF90b19zdGVwKDEpXCI+Q2hvb3NlIFNob3dyb29tPC9saT5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cInBvaW50ZXJcIiA6Y2xhc3M9XCJzdGVwPT0yPydhY3RpdmUnOicnXCIgQGNsaWNrPVwicHVzaF90b19zdGVwKDIpXCI+Q2hvb3NlIEZsb29ycGxhbjwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJwb2ludGVyXCIgOmNsYXNzPVwic3RlcD09Mz8nYWN0aXZlJzonJ1wiIEBjbGljaz1cInB1c2hfdG9fc3RlcCgzKVwiPkNob29zZSBUZW1wbGF0ZTwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJwb2ludGVyXCIgQGNsaWNrPVwicHVzaF90b19zdGVwKDUpXCI+VmlydHVhbCBTaG93cm9vbTwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuICAgIDxyb3V0ZXItdmlldyA6bGF5b3V0LnN5bmM9XCJsYXlvdXRcIiA+PC9yb3V0ZXItdmlldz5cclxuXHJcbjwvbWFpbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcbiAgICBtYXBHZXR0ZXJzLFxyXG4gICAgbWFwQWN0aW9uc1xyXG59IGZyb20gXCJ2dWV4XCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICAgIGxheW91dDoge1xyXG4gICAgICAgICAgICAgICAgc2hvd3Jvb206IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBmbG9vcnBsYW46IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBmbG9vclRlbXBsYXRlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlci50eXBlICE9ICdVc2VyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi9cIikuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU29ycnksIHlvdSBhcmUgbm90IGF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoaXMgcGFnZS4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVlcDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIG1vdW50ZWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuJHJvb3QuJG9uKCdzZXRfc3RlcHMnLCAoeCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXAgPSB4XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIHRoaXMuJHJvb3QuJG9uKCd2aXN1YWxpemVfaXRlbScsICh0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXRyaWV2ZWRJdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215X2l0ZW0nKTtcclxuICAgICAgICAgICAgdmFyIG15X29iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICBpZiAocmV0cmlldmVkSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgbXlfb2JqZWN0ID0gSlNPTi5wYXJzZShyZXRyaWV2ZWRJdGVtKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGV4dC5zaG93cm9vbSlcclxuICAgICAgICAgICAgICAgIG15X29iamVjdC5zaG93cm9vbSA9IHRleHQuc2hvd3Jvb21cclxuXHJcbiAgICAgICAgICAgIGlmICh0ZXh0LmZsb29ycGxhbilcclxuICAgICAgICAgICAgICAgIG15X29iamVjdC5mbG9vcnBsYW4gPSB0ZXh0LmZsb29ycGxhblxyXG5cclxuICAgICAgICAgICAgaWYgKHRleHQuZmxvb3JUZW1wbGF0ZSlcclxuICAgICAgICAgICAgICAgIG15X29iamVjdC5mbG9vclRlbXBsYXRlID0gdGV4dC5mbG9vclRlbXBsYXRlXHJcblxyXG4gICAgICAgICAgICBpZiAodGV4dC50ZW1wbGF0ZSlcclxuICAgICAgICAgICAgICAgIG15X29iamVjdC50ZW1wbGF0ZSA9IHRleHQudGVtcGxhdGVcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZXh0Lml0ZW1zKVxyXG4gICAgICAgICAgICAgICAgbXlfb2JqZWN0Lml0ZW1zID0gdGV4dC5pdGVtc1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215X2l0ZW0nLCBKU09OLnN0cmluZ2lmeShteV9vYmplY3QpKTtcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQgPSBteV9vYmplY3RcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLiRyb290LiRvbignYWRkX3RvX2NhcnQnLCAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdnNkX2NhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2c2RfY2FydCcpKTtcclxuICAgICAgICAgICAgaWYgKHZzZF9jYXJ0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gdnNkX2NhcnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbXMpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndnNkX2NhcnQnLCBwYXJzZWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldF9jYXJ0X3ByaWNlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLiRyb290LiRvbigncmVtb3ZlX2NhcnQnLCAoeCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndnNkX2NhcnQnKSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1zKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ZzZF9jYXJ0JywgcGFyc2VkKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Byb2R1Y3QgcmVtb3ZlZCBmcm9tIHlvdXIgY2FydC4nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldF9jYXJ0X3ByaWNlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBhc3luYyBjcmVhdGVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVzZXIgJiYgdGhpcy51c2VyLnR5cGUgIT0gJ1VzZXInKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL1wiKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTb3JyeSwgeW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhpcyBwYWdlLidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZpbHRlcnM6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAuLi5tYXBHZXR0ZXJzKFwiYXV0aFwiLCBbXCJ1c2VyXCJdKSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgc2V0X2NhcnRfcHJpY2UoKSB7XHJcbiAgICAgICAgICAgIHZhciBjYXJ0X3ByaWNlID0gMDtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndnNkX2NhcnQnKSk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtcykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpdGVtc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydF9wcmljZSA9IE51bWJlcihjYXJ0X3ByaWNlKSArIE51bWJlcihlbGVtZW50LmNhbGN1bGF0ZS5wcmljZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndnNkX2NhcnRfcHJpY2UnLCBjYXJ0X3ByaWNlKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhc3luYyBwdXNoX3RvX3N0ZXAoeCA9IDEpIHtcclxuICAgICAgICAgICAgdmFyIHJldHJpZXZlZEl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteV9pdGVtJykpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJldHJpZXZlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0ZXAgIT0geCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4ID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldHJpZXZlZEl0ZW0uc2hvd3Jvb20pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvdmlzdWFsaXplL2Zsb29ycGxhbicpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1BsZWFzZSBFbnRlciBTaG93cm9vbSBJZCB0byBQcm9jZWVkLidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4ID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldHJpZXZlZEl0ZW0uc2hvd3Jvb20gJiYgcmV0cmlldmVkSXRlbS5mbG9vcnBsYW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvdmlzdWFsaXplL3RlbXBsYXRlJykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxlYXNlIENob29zZSBGbG9vci1wbGFuIHRvIFByb2NlZWQuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHggPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV0cmlldmVkSXRlbS5zaG93cm9vbSAmJiByZXRyaWV2ZWRJdGVtLmZsb29ycGxhbiAmJiByZXRyaWV2ZWRJdGVtLmZsb29yVGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvdmlzdWFsaXplL2NoZWNrbGlzdCcpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1BsZWFzZSBDaG9vc2UgRmxvb3ItVGVtcGxhdGUgdG8gUHJvY2VlZC4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeCA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXRyaWV2ZWRJdGVtLnNob3dyb29tICYmIHJldHJpZXZlZEl0ZW0uZmxvb3JwbGFuICYmIHJldHJpZXZlZEl0ZW0uZmxvb3JUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy92aXN1YWxpemUvY29udHJhY3RvcicpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1BsZWFzZSBDaG9vc2UgQWxsIFN0ZXBzIHRvIFZpc3VhbGl6ZSB5b3VyIFJvb20uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL3Zpc3VhbGl6ZS8nKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdQbGVhc2UgRW50ZXIgU2hvd3Jvb20gSWQgdG8gUHJvY2VlZC4nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJtYWluXCIsXG4gICAgW1xuICAgICAgX3ZtLnN0ZXAgIT0gNVxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3RlcHNCYXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9ncmVzYmFyLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9ncmVzc2JhclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zdGVwID09IDEgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnB1c2hfdG9fc3RlcCgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNob29zZSBTaG93cm9vbVwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnN0ZXAgPT0gMiA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHVzaF90b19zdGVwKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2hvb3NlIEZsb29ycGxhblwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnN0ZXAgPT0gMyA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHVzaF90b19zdGVwKDMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2hvb3NlIFRlbXBsYXRlXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHVzaF90b19zdGVwKDUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVmlydHVhbCBTaG93cm9vbVwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicm91dGVyLXZpZXdcIiwge1xuICAgICAgICBhdHRyczogeyBsYXlvdXQ6IF92bS5sYXlvdXQgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcInVwZGF0ZTpsYXlvdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0ubGF5b3V0ID0gJGV2ZW50XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi02OTUwNDA4MlwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59IiwidmFyIGRpc3Bvc2VkID0gZmFsc2Vcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjk1MDQwODJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5kZXgudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxEYXNoYm9hcmRcXFxcaW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY5NTA0MDgyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjk1MDQwODJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==