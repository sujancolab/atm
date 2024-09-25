(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-month-picker/src/MonthPicker.vue":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-month-picker/src/MonthPicker.vue ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languages */ "./node_modules/vue-month-picker/src/languages.js");
/* harmony import */ var _month_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./month-picker */ "./node_modules/vue-month-picker/src/month-picker.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'MonthPicker',
  mixins: [_month_picker__WEBPACK_IMPORTED_MODULE_1__["default"]],
  emits: ['change', 'clear', 'input', 'change-year'],
  data: () => ({
    currentMonthIndex: null,
    firstRangeMonthIndex: null,
    secondRangeMonthIndex: null,
    year: new Date().getFullYear(),
    selectedYear: new Date().getFullYear()
  }),
  computed: {
    currentMonth: function () {
      if (this.currentMonthIndex !== null) {
        return this.monthsByLang[this.currentMonthIndex];
      }
      return null;
    },
    firstRangemonth: function () {
      if (this.firstRangeMonthIndex !== null) {
        return this.monthsByLang[this.firstRangeMonthIndex];
      }
      return null;
    },
    secondRangemonth: function () {
      if (this.secondRangeMonthIndex !== null) {
        return this.monthsByLang[this.secondRangeMonthIndex];
      }
      return null;
    },
    date: function () {
      const month = this.monthsByLang.indexOf(this.currentMonth) + 1;
      let dateFrom = new Date(`${this.year}/${month}/01`);
      let dateTo = new Date(this.year, month, 1);
      const dateResult = {
        from: dateFrom,
        to: dateTo,
        month: this.monthsByLang[month - 1],
        monthIndex: month,
        year: this.year,
        rangeFrom: null,
        rangeTo: null,
        rangeFromMonth: null,
        rangeToMonth: null
      };
      if (this.range) {
        const monthRangeFrom = this.monthsByLang.indexOf(this.firstRangeMonthIndex) + 1;
        const monthRangeTo = this.monthsByLang.indexOf(this.secondRangeMonthIndex) + 1;
        dateFrom = new Date(`${this.year}/${monthRangeFrom}/01`);
        dateTo = new Date(`${this.year}/${monthRangeTo}/01`);
        dateResult.rangeFrom = this.firstRangeMonthIndex;
        dateResult.rangeTo = this.secondRangeMonthIndex;
        dateResult.rangeFromMonth = this.monthsByLang[this.firstRangeMonthIndex];
        dateResult.rangeToMonth = this.monthsByLang[this.secondRangeMonthIndex];
      }
      return dateResult;
    }
  },
  watch: {
    defaultMonth(newVal) {
      this.currentMonthIndex = newVal - 1;
    },
    defaultYear(newVal) {
      this.year = newVal;
    }
  },
  mounted() {
    if (this.defaultYear) {
      this.year = this.defaultYear;
    }
    if (this.range) {
      this.setDefaultMonthRange();
      return;
    }
    if (this.defaultMonth) {
      this.selectMonth(this.defaultMonth - 1);
    } else if (!this.noDefault) {
      this.selectMonth(0);
    }
  },
  methods: {
    onChange() {
      if (!Number.parseInt(this.year)) {
        this.year = this.defaultYear || new Date().getFullYear();
      }
      this.$emit('change', this.date);
    },
    selectMonth(index, input = false) {
      if (this.isInactive(index)) {
        return;
      }
      if (this.range) {
        return this.selectMonthRange(index, input);
      }
      const isAlreadySelected = this.currentMonthIndex === index;
      if (this.clearable && isAlreadySelected) {
        this.currentMonthIndex = null;
        this.$emit('clear');
        return;
      }
      if (this.isAlreadySelected) {
        return;
      }
      this.currentMonthIndex = index;
      this.onChange();
      if (input) {
        this.$emit('input', this.date);
      }
    },
    selectMonthRange(index, input) {
      if (this.firstRangeMonthIndex === null) {
        this.firstRangeMonthIndex = index;
        return;
      }
      if (this.firstRangeMonthIndex !== null && this.secondRangeMonthIndex !== null) {
        this.firstRangeMonthIndex = index;
        this.secondRangeMonthIndex = null;
        return;
      }
      if (index >= this.firstRangeMonthIndex) {
        this.secondRangeMonthIndex = index;
        this.onChange();
        if (input) {
          this.$emit('input', this.date);
        }
        return;
      }
      this.firstRangeMonthIndex = index;
    },
    setDefaultMonthRange() {
      if (this.defaultMonthRange === null || this.defaultMonthRange.length !== 2) {
        return;
      }
      const [firstRange, secondRange] = this.defaultMonthRange;
      if (secondRange <= firstRange) {
        return;
      }
      this.firstRangeMonthIndex = firstRange;
      this.secondRangeMonthIndex = secondRange;
    },
    changeYear(value) {
      this.year += value;
      if (this.isInactive(value)) {
        return;
      }
      this.onChange();
      this.$emit('change-year', this.year);
    },
    isInactive(month) {
      let monthValue = month;
      if (this.minDate === null && this.maxDate === null) {
        return false;
      }
      if (Number.isInteger(monthValue)) {
        monthValue = this.monthsByLang[monthValue];
      }
      const monthKey = this.monthsByLang.indexOf(monthValue) + 1;
      const date = new Date(`${this.year}/${monthKey}/01`);
      const isValidDate = date => date !== null && date instanceof Date;
      if (isValidDate(this.minDate) && date < this.minDate) {
        return true;
      }
      if (isValidDate(this.maxDate) && date > this.maxDate) {
        return true;
      }
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-month-picker/src/MonthPickerInput.vue":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-month-picker/src/MonthPickerInput.vue ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MonthPicker_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonthPicker.vue */ "./node_modules/vue-month-picker/src/MonthPicker.vue");
/* harmony import */ var _month_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./month-picker */ "./node_modules/vue-month-picker/src/month-picker.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'MonthPickerInput',
  directives: {
    clickOutside: {
      bind: function (el, binding, vnode) {
        el.event = function (event) {
          if (!(el === event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener('click', el.event);
      },
      unbind: function (el) {
        document.body.removeEventListener('click', el.event);
      },
      beforeMount: (el, binding) => {
        el.clickOutsideEvent = event => {
          if (!(el == event.target || el.contains(event.target))) {
            binding.value();
          }
        };
        document.addEventListener('click', el.clickOutsideEvent);
      },
      unmounted: el => {
        document.removeEventListener('click', el.clickOutsideEvent);
      }
    }
  },
  components: {
    MonthPicker: _MonthPicker_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [_month_picker__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    placeholder: {
      type: String,
      default: null
    }
  },
  emits: ['change', 'input'],
  data() {
    return {
      monthPickerVisible: false,
      selectedDate: null
    };
  },
  watch: {
    defaultYear: {
      immediate: true,
      handler(value) {
        if (!value || !this.inputPreFilled) return;
        this.selectedDate = this.dateFormat.replace('%n', this.monthsByLang[this.defaultMonth - 1]).replace('%Y', value);
      }
    },
    defaultMonth: {
      immediate: true,
      handler(value) {
        if (!value || !this.inputPreFilled) return;
        this.selectedDate = this.dateFormat.replace('%n', this.monthsByLang[value - 1]).replace('%Y', this.defaultYear);
      }
    }
  },
  methods: {
    populateInput(date) {
      if (this.range) {
        this.selectedDate = `${date.rangeFromMonth} - ${date.rangeToMonth}, ${date.year}`;
      } else {
        this.selectedDate = this.dateFormat.replace('%n', date.month).replace('%Y', date.year);
      }
      this.monthPickerVisible = false;
      this.$emit('input', date);
    },
    showMonthPicker() {
      this.monthPickerVisible = !this.monthPickerVisible;
    },
    hide() {
      this.monthPickerVisible = false;
    },
    updateDate(date) {
      if (this.range) {
        this.selectedDate = `${date.rangeFromMonth} - ${date.rangeToMonth}, ${date.year}`;
      } else {
        this.selectedDate = this.dateFormat.replace('%n', date.month).replace('%Y', date.year);
      }
      this.$emit('change', date);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-3f6f02ec\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vue-month-picker/src/MonthPickerInput.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-3f6f02ec","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vue-month-picker/src/MonthPickerInput.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.month-picker-input-container[data-v-3f6f02ec] {\r\n    position: relative;\r\n    width: 180px;\r\n    min-width: 140px;\n}\n.month-picker-input[data-v-3f6f02ec] {\r\n    padding: 1em 1.5em;\r\n    font-size: 0.85em;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    border: 1px solid rgba(0, 0, 0, 0.15);\r\n    transition: all 350ms cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.month-picker-input[data-v-3f6f02ec]:focus {\r\n    border-color: rgba(0, 0, 0, 0.25);\r\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.month-picker__container[data-v-3f6f02ec] {\r\n    position: absolute;\r\n    top: 3.5em;\n}\r\n", "", {"version":3,"sources":["C:/devlopment/wamp64/www/royal-infraconstruction/node_modules/vue-month-picker/src/node_modules/vue-month-picker/src/MonthPickerInput.vue"],"names":[],"mappings":";AAsIA;IACA,mBAAA;IACA,aAAA;IACA,iBAAA;CACA;AAEA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;IACA,cAAA;IACA,sCAAA;IACA,yDAAA;CACA;AAEA;IACA,kCAAA;IACA,yCAAA;CACA;AAEA;IACA,mBAAA;IACA,WAAA;CACA","file":"MonthPickerInput.vue","sourcesContent":["<template>\r\n    <div v-click-outside=\"hide\" class=\"month-picker-input-container\">\r\n        <input\r\n            v-model=\"selectedDate\"\r\n            class=\"month-picker-input\"\r\n            type=\"text\"\r\n            :placeholder=\"placeholder\"\r\n            readonly\r\n            @click=\"showMonthPicker()\"\r\n        />\r\n        <month-picker\r\n            v-show=\"monthPickerVisible\"\r\n            :default-year=\"defaultYear\"\r\n            :default-month=\"defaultMonth\"\r\n            :lang=\"lang\"\r\n            :months=\"months\"\r\n            :no-default=\"noDefault\"\r\n            :show-year=\"showYear\"\r\n            :highlight-exact-date=\"highlightExactDate\"\r\n            :clearable=\"clearable\"\r\n            :variant=\"variant\"\r\n            :editable-year=\"editableYear\"\r\n            :max-date=\"maxDate\"\r\n            :min-date=\"minDate\"\r\n            :year-only=\"yearOnly\"\r\n            :range=\"range\"\r\n            @input=\"populateInput\"\r\n            @change=\"updateDate\"\r\n        />\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport MonthPicker from './MonthPicker.vue'\r\nimport monthPicker from './month-picker'\r\n\r\nexport default {\r\n    name: 'MonthPickerInput',\r\n    directives: {\r\n        clickOutside: {\r\n            bind: function (el, binding, vnode) {\r\n                el.event = function (event) {\r\n                    if (!(el === event.target || el.contains(event.target))) {\r\n                        vnode.context[binding.expression](event)\r\n                    }\r\n                }\r\n                document.body.addEventListener('click', el.event)\r\n            },\r\n            unbind: function (el) {\r\n                document.body.removeEventListener('click', el.event)\r\n            },\r\n            beforeMount: (el, binding) => {\r\n                el.clickOutsideEvent = (event) => {\r\n                    if (!(el == event.target || el.contains(event.target))) {\r\n                        binding.value()\r\n                    }\r\n                }\r\n                document.addEventListener('click', el.clickOutsideEvent)\r\n            },\r\n            unmounted: (el) => {\r\n                document.removeEventListener('click', el.clickOutsideEvent)\r\n            },\r\n        },\r\n    },\r\n    components: {\r\n        MonthPicker,\r\n    },\r\n    mixins: [monthPicker],\r\n    props: {\r\n        placeholder: {\r\n            type: String,\r\n            default: null,\r\n        },\r\n    },\r\n    emits: ['change', 'input'],\r\n    data() {\r\n        return {\r\n            monthPickerVisible: false,\r\n            selectedDate: null,\r\n        }\r\n    },\r\n    watch: {\r\n        defaultYear: {\r\n            immediate: true,\r\n            handler(value) {\r\n                if (!value || !this.inputPreFilled) return\r\n                this.selectedDate = this.dateFormat\r\n                    .replace('%n', this.monthsByLang[this.defaultMonth - 1])\r\n                    .replace('%Y', value)\r\n            },\r\n        },\r\n        defaultMonth: {\r\n            immediate: true,\r\n            handler(value) {\r\n                if (!value || !this.inputPreFilled) return\r\n                this.selectedDate = this.dateFormat\r\n                    .replace('%n', this.monthsByLang[value - 1])\r\n                    .replace('%Y', this.defaultYear)\r\n            },\r\n        },\r\n    },\r\n    methods: {\r\n        populateInput(date) {\r\n            if (this.range) {\r\n                this.selectedDate = `${date.rangeFromMonth} - ${date.rangeToMonth}, ${date.year}`\r\n            } else {\r\n                this.selectedDate = this.dateFormat\r\n                    .replace('%n', date.month)\r\n                    .replace('%Y', date.year)\r\n            }\r\n\r\n            this.monthPickerVisible = false\r\n            this.$emit('input', date)\r\n        },\r\n        showMonthPicker() {\r\n            this.monthPickerVisible = !this.monthPickerVisible\r\n        },\r\n        hide() {\r\n            this.monthPickerVisible = false\r\n        },\r\n        updateDate(date) {\r\n            if (this.range) {\r\n                this.selectedDate = `${date.rangeFromMonth} - ${date.rangeToMonth}, ${date.year}`\r\n            } else {\r\n                this.selectedDate = this.dateFormat\r\n                    .replace('%n', date.month)\r\n                    .replace('%Y', date.year)\r\n            }\r\n            this.$emit('change', date)\r\n        },\r\n    },\r\n}\r\n</script>\r\n<style scoped>\r\n.month-picker-input-container {\r\n    position: relative;\r\n    width: 180px;\r\n    min-width: 140px;\r\n}\r\n\r\n.month-picker-input {\r\n    padding: 1em 1.5em;\r\n    font-size: 0.85em;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    border: 1px solid rgba(0, 0, 0, 0.15);\r\n    transition: all 350ms cubic-bezier(0.165, 0.84, 0.44, 1);\r\n}\r\n\r\n.month-picker-input:focus {\r\n    border-color: rgba(0, 0, 0, 0.25);\r\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.month-picker__container {\r\n    position: absolute;\r\n    top: 3.5em;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vue-month-picker/src/MonthPicker.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vue-month-picker/src/MonthPicker.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.month-picker__container {\r\n    width: 400px;\r\n    position: relative;\r\n    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1),\r\n        inset 0 -1px 0 rgba(0, 0, 0, 0.1);\r\n    border-radius: 5px;\n}\n.month-picker__container.year-picker {\r\n    width: 20rem;\n}\n.month-picker {\r\n    box-sizing: border-box;\r\n    flex: 1;\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);\r\n    font-family: sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\n}\n.month-picker__year {\r\n    padding: 0.2rem;\r\n    background-color: #fcfcfc;\r\n    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1),\r\n        inset 0 -1px 0 rgba(0, 0, 0, 0.1);\n}\n.month-picker__year p {\r\n    width: 100%;\r\n    font-weight: 600;\r\n    letter-spacing: 1px;\r\n    font-size: 1.2rem;\r\n    margin: 1rem 0;\n}\n.month-picker__year input {\r\n    padding: 0;\r\n    font-weight: 600;\r\n    border-radius: 5px 5px 0 0;\r\n    outline: none;\r\n    border: none;\r\n    font-size: 1.2rem;\r\n    width: auto;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 3.5rem;\r\n    position: relative;\r\n    z-index: 1;\n}\n.month-picker__year input:focus {\r\n    border: 1px solid #55b0f2;\n}\n.month-picker__year div,\r\n.month-picker__year button,\r\n.month-picker__year p {\r\n    text-align: center;\r\n    flex: 1;\n}\n.month-picker__year button {\r\n    background-color: #f4f4f4;\r\n    position: absolute;\r\n    width: 5rem;\r\n    height: 2.75rem;\r\n    font-size: 2rem;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    border: 0;\r\n    top: 0.5rem;\r\n    border: 1px solid #e8e8e8;\r\n    z-index: 2;\r\n    color: #686868;\n}\n.month-picker__year button:hover {\r\n    background-color: rgba(0, 0, 0, 0.025);\n}\n.month-picker__year button:active {\r\n    background-color: rgba(0, 0, 0, 0.04);\n}\n.month-picker__year button:first-child {\r\n    left: 10px;\n}\n.month-picker__year button:last-child {\r\n    right: 10px;\n}\n.month-picker__month {\r\n    padding: 0.85rem 0.25rem;\r\n    flex-basis: calc(33.333% - 10px);\r\n    padding: 0.75rem 0.25rem;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    border: 1px solid rgba(245, 245, 245, 0.75);\r\n    transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);\r\n    background-color: #fefefe;\r\n    user-select: none;\r\n    position: relative;\n}\n.month-picker__month:hover::after {\r\n    display: block;\r\n    content: '';\r\n    position: absolute;\r\n    width: 95%;\r\n    height: 95%;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    z-index: 10;\n}\n.month-picker__month.selected,\r\n.month-picker__month.selected-range-first,\r\n.month-picker__month.selected-range-second {\r\n    background-color: #55b0f2;\r\n    color: #ffffff;\r\n    border-radius: 5px;\r\n    box-shadow: inset 0 0 3px #3490d2, 0px 2px 5px rgba(85, 176, 242, 0.2);\r\n    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);\n}\n.month-picker__month.selected-range-first,\r\n.month-picker__month.selected-range-second {\r\n    border-color: transparent;\n}\n.month-picker__month.selected-range {\r\n    background-color: #7eb9e2;\r\n    color: #ffffff;\r\n    border-color: transparent;\n}\n.month-picker__month.inactive {\r\n    background-color: #f0f0f0;\r\n    color: #8a8a8a;\r\n    cursor: not-allowed;\r\n    box-shadow: none;\r\n    text-shadow: none;\n}\n.month-picker__month.inactive:hover {\r\n    box-shadow: none;\n}\r\n\r\n/* Dark threme */\n.month-picker--dark {\r\n    background-color: #5f5f5f;\n}\n.month-picker--dark .month-picker__year {\r\n    background-color: #2f2f30;\n}\n.month-picker--dark .month-picker__year p,\r\n.month-picker--dark .month-picker__year input {\r\n    color: #ebebeb;\n}\n.month-picker--dark .month-picker__year input {\r\n    background-color: #5f5f5f;\n}\n.month-picker--dark .month-picker__year button {\r\n    background-color: #505050;\r\n    color: #c9c9c9;\r\n    border-color: #1e1e1e;\n}\n.month-picker--dark .month-picker__year button:hover {\r\n    background-color: rgba(0, 0, 0, 0.3);\n}\n.month-picker--dark .month-picker__year button:active {\r\n    background-color: rgba(0, 0, 0, 0.6);\n}\n.month-picker--dark .month-picker__month {\r\n    background-color: #2f2f30;\r\n    border-color: rgba(245, 245, 245, 0.15);\r\n    color: #c9c9c9;\n}\n.month-picker--dark .month-picker__month.selected,\r\n.month-picker--dark .month-picker__month.selected-range-first,\r\n.month-picker--dark .month-picker__month.selected-range-second {\r\n    background-color: #505050;\r\n    box-shadow: inset 0 0 3px #505050, 0px 2px 5px #505050;\r\n    color: #ffffff;\r\n    border-color: #1d1b1b;\n}\n.month-picker--dark .month-picker__month.selected-range {\r\n    background-color: #636363;\r\n    color: #ffffff;\r\n    border-color: transparent;\n}\n.month-picker--dark .month-picker__month:hover {\r\n    box-shadow: 0 0 6px rgba(0, 0, 0, 0.8);\r\n    z-index: 10;\n}\n.month-picker--dark .month-picker__month.inactive {\r\n    background-color: #3f3f3f;\r\n    color: #8a8a8a;\r\n    cursor: not-allowed;\r\n    box-shadow: none;\r\n    text-shadow: none;\n}\n@media only screen and (max-width: 768px) {\n.month-picker__container {\r\n        width: 100%;\n}\n}\r\n", "", {"version":3,"sources":["C:/devlopment/wamp64/www/royal-infraconstruction/node_modules/vue-month-picker/src/node_modules/vue-month-picker/src/MonthPicker.vue"],"names":[],"mappings":";AAuQA;IACA,aAAA;IACA,mBAAA;IACA;0CACA;IACA,mBAAA;CACA;AAEA;IACA,aAAA;CACA;AAEA;IACA,uBAAA;IACA,QAAA;IACA,YAAA;IACA,cAAA;IACA,oBAAA;IACA,gBAAA;IACA,2CAAA;IACA,wBAAA;IACA,mBAAA;IACA,iBAAA;IACA,cAAA;IACA,mCAAA;CACA;AAEA;IACA,gBAAA;IACA,0BAAA;IACA;0CACA;CACA;AAEA;IACA,YAAA;IACA,iBAAA;IACA,oBAAA;IACA,kBAAA;IACA,eAAA;CACA;AAEA;IACA,WAAA;IACA,iBAAA;IACA,2BAAA;IACA,cAAA;IACA,aAAA;IACA,kBAAA;IACA,YAAA;IACA,mBAAA;IACA,uBAAA;IACA,YAAA;IACA,eAAA;IACA,mBAAA;IACA,WAAA;CACA;AAEA;IACA,0BAAA;CACA;AAEA;;;IAGA,mBAAA;IACA,QAAA;CACA;AAEA;IACA,0BAAA;IACA,mBAAA;IACA,YAAA;IACA,gBAAA;IACA,gBAAA;IACA,mBAAA;IACA,cAAA;IACA,UAAA;IACA,YAAA;IACA,0BAAA;IACA,WAAA;IACA,eAAA;CACA;AAEA;IACA,uCAAA;CACA;AAEA;IACA,sCAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;IACA,YAAA;CACA;AAEA;IACA,yBAAA;IACA,iCAAA;IACA,yBAAA;IACA,gBAAA;IACA,mBAAA;IACA,4CAAA;IACA,yDAAA;IACA,0BAAA;IACA,kBAAA;IACA,mBAAA;CACA;AAEA;IACA,eAAA;IACA,YAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;IACA,SAAA;IACA,UAAA;IACA,iCAAA;IACA,wCAAA;IACA,YAAA;CACA;AAEA;;;IAGA,0BAAA;IACA,eAAA;IACA,mBAAA;IACA,uEAAA;IACA,2CAAA;CACA;AAEA;;IAEA,0BAAA;CACA;AAEA;IACA,0BAAA;IACA,eAAA;IACA,0BAAA;CACA;AAEA;IACA,0BAAA;IACA,eAAA;IACA,oBAAA;IACA,iBAAA;IACA,kBAAA;CACA;AAEA;IACA,iBAAA;CACA;;AAEA,iBAAA;AACA;IACA,0BAAA;CACA;AAEA;IACA,0BAAA;CACA;AAEA;;IAEA,eAAA;CACA;AAEA;IACA,0BAAA;CACA;AAEA;IACA,0BAAA;IACA,eAAA;IACA,sBAAA;CACA;AAEA;IACA,qCAAA;CACA;AAEA;IACA,qCAAA;CACA;AAEA;IACA,0BAAA;IACA,wCAAA;IACA,eAAA;CACA;AAEA;;;IAGA,0BAAA;IACA,uDAAA;IACA,eAAA;IACA,sBAAA;CACA;AAEA;IACA,0BAAA;IACA,eAAA;IACA,0BAAA;CACA;AAEA;IACA,uCAAA;IACA,YAAA;CACA;AAEA;IACA,0BAAA;IACA,eAAA;IACA,oBAAA;IACA,iBAAA;IACA,kBAAA;CACA;AAEA;AACA;QACA,YAAA;CACA;CACA","file":"MonthPicker.vue","sourcesContent":["<template>\r\n    <div\r\n        class=\"month-picker__container\"\r\n        :class=\"{\r\n            [`month-picker--${variant}`]: true,\r\n            'year-picker': yearOnly,\r\n        }\"\r\n    >\r\n        <div v-if=\"showYear\" class=\"month-picker__year\">\r\n            <button type=\"button\" @click=\"changeYear(-1)\">&lsaquo;</button>\r\n            <p v-if=\"!editableYear\">\r\n                {{ year }}\r\n            </p>\r\n            <input\r\n                v-else\r\n                v-model.number=\"year\"\r\n                type=\"text\"\r\n                @change=\"onChange()\"\r\n            />\r\n            <button type=\"button\" @click=\"changeYear(+1)\">&rsaquo;</button>\r\n        </div>\r\n        <div v-if=\"!yearOnly\" class=\"month-picker\">\r\n            <div\r\n                v-for=\"(month, monthIndex) in monthsByLang\"\r\n                :key=\"month\"\r\n                :class=\"{\r\n                    inactive: isInactive(month),\r\n                    clearable: clearable,\r\n                    selected:\r\n                        (highlightExactDate &&\r\n                            !range &&\r\n                            showYear &&\r\n                            currentMonthIndex === monthIndex &&\r\n                            year === selectedYear) ||\r\n                        (!range &&\r\n                            !showYear &&\r\n                            currentMonthIndex == monthIndex) ||\r\n                        (!highlightExactDate &&\r\n                            !range &&\r\n                            currentMonthIndex === monthIndex),\r\n                }\"\r\n                class=\"month-picker__month\"\r\n                @click=\"selectMonth(monthIndex, true)\"\r\n            >\r\n                {{ month }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport languages from './languages'\r\nimport monthPicker from './month-picker'\r\n\r\nexport default {\r\n    name: 'MonthPicker',\r\n    mixins: [monthPicker],\r\n    emits: ['change', 'clear', 'input', 'change-year'],\r\n    data: () => ({\r\n        currentMonthIndex: null,\r\n        firstRangeMonthIndex: null,\r\n        secondRangeMonthIndex: null,\r\n        year: new Date().getFullYear(),\r\n        selectedYear: new Date().getFullYear(),\r\n    }),\r\n    computed: {\r\n        currentMonth: function () {\r\n            if (this.currentMonthIndex !== null) {\r\n                return this.monthsByLang[this.currentMonthIndex]\r\n            }\r\n\r\n            return null\r\n        },\r\n        firstRangemonth: function () {\r\n            if (this.firstRangeMonthIndex !== null) {\r\n                return this.monthsByLang[this.firstRangeMonthIndex]\r\n            }\r\n\r\n            return null\r\n        },\r\n        secondRangemonth: function () {\r\n            if (this.secondRangeMonthIndex !== null) {\r\n                return this.monthsByLang[this.secondRangeMonthIndex]\r\n            }\r\n\r\n            return null\r\n        },\r\n        date: function () {\r\n            const month = this.monthsByLang.indexOf(this.currentMonth) + 1\r\n            let dateFrom = new Date(`${this.year}/${month}/01`)\r\n            let dateTo = new Date(this.year, month, 1)\r\n\r\n            const dateResult = {\r\n                from: dateFrom,\r\n                to: dateTo,\r\n                month: this.monthsByLang[month - 1],\r\n                monthIndex: month,\r\n                year: this.year,\r\n                rangeFrom: null,\r\n                rangeTo: null,\r\n                rangeFromMonth: null,\r\n                rangeToMonth: null,\r\n            }\r\n\r\n            if (this.range) {\r\n                const monthRangeFrom =\r\n                    this.monthsByLang.indexOf(this.firstRangeMonthIndex) + 1\r\n                const monthRangeTo =\r\n                    this.monthsByLang.indexOf(this.secondRangeMonthIndex) + 1\r\n\r\n                dateFrom = new Date(`${this.year}/${monthRangeFrom}/01`)\r\n                dateTo = new Date(`${this.year}/${monthRangeTo}/01`)\r\n\r\n                dateResult.rangeFrom = this.firstRangeMonthIndex\r\n                dateResult.rangeTo = this.secondRangeMonthIndex\r\n                dateResult.rangeFromMonth =\r\n                    this.monthsByLang[this.firstRangeMonthIndex]\r\n                dateResult.rangeToMonth =\r\n                    this.monthsByLang[this.secondRangeMonthIndex]\r\n            }\r\n\r\n            return dateResult\r\n        },\r\n    },\r\n    watch: {\r\n        defaultMonth(newVal) {\r\n            this.currentMonthIndex = newVal - 1\r\n        },\r\n        defaultYear(newVal) {\r\n            this.year = newVal\r\n        },\r\n    },\r\n    mounted() {\r\n        if (this.defaultYear) {\r\n            this.year = this.defaultYear\r\n        }\r\n\r\n        if (this.range) {\r\n            this.setDefaultMonthRange()\r\n            return\r\n        }\r\n\r\n        if (this.defaultMonth) {\r\n            this.selectMonth(this.defaultMonth - 1)\r\n        } else if (!this.noDefault) {\r\n            this.selectMonth(0)\r\n        }\r\n    },\r\n    methods: {\r\n        onChange() {\r\n            if (!Number.parseInt(this.year)) {\r\n                this.year = this.defaultYear || new Date().getFullYear()\r\n            }\r\n            this.$emit('change', this.date)\r\n        },\r\n        selectMonth(index, input = false) {\r\n            if (this.isInactive(index)) {\r\n                return\r\n            }\r\n\r\n            if (this.range) {\r\n                return this.selectMonthRange(index, input)\r\n            }\r\n\r\n            const isAlreadySelected = this.currentMonthIndex === index\r\n            if (this.clearable && isAlreadySelected) {\r\n                this.currentMonthIndex = null\r\n                this.$emit('clear')\r\n                return\r\n            }\r\n\r\n            if (this.isAlreadySelected) {\r\n                return\r\n            }\r\n\r\n            this.currentMonthIndex = index\r\n            this.onChange()\r\n\r\n            if (input) {\r\n                this.$emit('input', this.date)\r\n            }\r\n        },\r\n        selectMonthRange(index, input) {\r\n            if (this.firstRangeMonthIndex === null) {\r\n                this.firstRangeMonthIndex = index\r\n                return\r\n            }\r\n\r\n            if (\r\n                this.firstRangeMonthIndex !== null &&\r\n                this.secondRangeMonthIndex !== null\r\n            ) {\r\n                this.firstRangeMonthIndex = index\r\n                this.secondRangeMonthIndex = null\r\n                return\r\n            }\r\n\r\n            if (index >= this.firstRangeMonthIndex) {\r\n                this.secondRangeMonthIndex = index\r\n                this.onChange()\r\n\r\n                if (input) {\r\n                    this.$emit('input', this.date)\r\n                }\r\n                return\r\n            }\r\n\r\n            this.firstRangeMonthIndex = index\r\n        },\r\n        setDefaultMonthRange() {\r\n            if (\r\n                this.defaultMonthRange === null ||\r\n                this.defaultMonthRange.length !== 2\r\n            ) {\r\n                return\r\n            }\r\n\r\n            const [firstRange, secondRange] = this.defaultMonthRange\r\n            if (secondRange <= firstRange) {\r\n                return\r\n            }\r\n\r\n            this.firstRangeMonthIndex = firstRange\r\n            this.secondRangeMonthIndex = secondRange\r\n        },\r\n        changeYear(value) {\r\n            this.year += value\r\n            if (this.isInactive(value)) {\r\n                return\r\n            }\r\n\r\n            this.onChange()\r\n            this.$emit('change-year', this.year)\r\n        },\r\n        isInactive(month) {\r\n            let monthValue = month\r\n            if (this.minDate === null && this.maxDate === null) {\r\n                return false\r\n            }\r\n\r\n            if (Number.isInteger(monthValue)) {\r\n                monthValue = this.monthsByLang[monthValue]\r\n            }\r\n\r\n            const monthKey = this.monthsByLang.indexOf(monthValue) + 1\r\n            const date = new Date(`${this.year}/${monthKey}/01`)\r\n            const isValidDate = (date) => date !== null && date instanceof Date\r\n\r\n            if (isValidDate(this.minDate) && date < this.minDate) {\r\n                return true\r\n            }\r\n\r\n            if (isValidDate(this.maxDate) && date > this.maxDate) {\r\n                return true\r\n            }\r\n\r\n            return false\r\n        },\r\n    },\r\n}\r\n</script>\r\n\r\n<style>\r\n.month-picker__container {\r\n    width: 400px;\r\n    position: relative;\r\n    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1),\r\n        inset 0 -1px 0 rgba(0, 0, 0, 0.1);\r\n    border-radius: 5px;\r\n}\r\n\r\n.month-picker__container.year-picker {\r\n    width: 20rem;\r\n}\r\n\r\n.month-picker {\r\n    box-sizing: border-box;\r\n    flex: 1;\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);\r\n    font-family: sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\r\n.month-picker__year {\r\n    padding: 0.2rem;\r\n    background-color: #fcfcfc;\r\n    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1),\r\n        inset 0 -1px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.month-picker__year p {\r\n    width: 100%;\r\n    font-weight: 600;\r\n    letter-spacing: 1px;\r\n    font-size: 1.2rem;\r\n    margin: 1rem 0;\r\n}\r\n\r\n.month-picker__year input {\r\n    padding: 0;\r\n    font-weight: 600;\r\n    border-radius: 5px 5px 0 0;\r\n    outline: none;\r\n    border: none;\r\n    font-size: 1.2rem;\r\n    width: auto;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 3.5rem;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.month-picker__year input:focus {\r\n    border: 1px solid #55b0f2;\r\n}\r\n\r\n.month-picker__year div,\r\n.month-picker__year button,\r\n.month-picker__year p {\r\n    text-align: center;\r\n    flex: 1;\r\n}\r\n\r\n.month-picker__year button {\r\n    background-color: #f4f4f4;\r\n    position: absolute;\r\n    width: 5rem;\r\n    height: 2.75rem;\r\n    font-size: 2rem;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    border: 0;\r\n    top: 0.5rem;\r\n    border: 1px solid #e8e8e8;\r\n    z-index: 2;\r\n    color: #686868;\r\n}\r\n\r\n.month-picker__year button:hover {\r\n    background-color: rgba(0, 0, 0, 0.025);\r\n}\r\n\r\n.month-picker__year button:active {\r\n    background-color: rgba(0, 0, 0, 0.04);\r\n}\r\n\r\n.month-picker__year button:first-child {\r\n    left: 10px;\r\n}\r\n\r\n.month-picker__year button:last-child {\r\n    right: 10px;\r\n}\r\n\r\n.month-picker__month {\r\n    padding: 0.85rem 0.25rem;\r\n    flex-basis: calc(33.333% - 10px);\r\n    padding: 0.75rem 0.25rem;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    border: 1px solid rgba(245, 245, 245, 0.75);\r\n    transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);\r\n    background-color: #fefefe;\r\n    user-select: none;\r\n    position: relative;\r\n}\r\n\r\n.month-picker__month:hover::after {\r\n    display: block;\r\n    content: '';\r\n    position: absolute;\r\n    width: 95%;\r\n    height: 95%;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    z-index: 10;\r\n}\r\n\r\n.month-picker__month.selected,\r\n.month-picker__month.selected-range-first,\r\n.month-picker__month.selected-range-second {\r\n    background-color: #55b0f2;\r\n    color: #ffffff;\r\n    border-radius: 5px;\r\n    box-shadow: inset 0 0 3px #3490d2, 0px 2px 5px rgba(85, 176, 242, 0.2);\r\n    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.month-picker__month.selected-range-first,\r\n.month-picker__month.selected-range-second {\r\n    border-color: transparent;\r\n}\r\n\r\n.month-picker__month.selected-range {\r\n    background-color: #7eb9e2;\r\n    color: #ffffff;\r\n    border-color: transparent;\r\n}\r\n\r\n.month-picker__month.inactive {\r\n    background-color: #f0f0f0;\r\n    color: #8a8a8a;\r\n    cursor: not-allowed;\r\n    box-shadow: none;\r\n    text-shadow: none;\r\n}\r\n\r\n.month-picker__month.inactive:hover {\r\n    box-shadow: none;\r\n}\r\n\r\n/* Dark threme */\r\n.month-picker--dark {\r\n    background-color: #5f5f5f;\r\n}\r\n\r\n.month-picker--dark .month-picker__year {\r\n    background-color: #2f2f30;\r\n}\r\n\r\n.month-picker--dark .month-picker__year p,\r\n.month-picker--dark .month-picker__year input {\r\n    color: #ebebeb;\r\n}\r\n\r\n.month-picker--dark .month-picker__year input {\r\n    background-color: #5f5f5f;\r\n}\r\n\r\n.month-picker--dark .month-picker__year button {\r\n    background-color: #505050;\r\n    color: #c9c9c9;\r\n    border-color: #1e1e1e;\r\n}\r\n\r\n.month-picker--dark .month-picker__year button:hover {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.month-picker--dark .month-picker__year button:active {\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.month-picker--dark .month-picker__month {\r\n    background-color: #2f2f30;\r\n    border-color: rgba(245, 245, 245, 0.15);\r\n    color: #c9c9c9;\r\n}\r\n\r\n.month-picker--dark .month-picker__month.selected,\r\n.month-picker--dark .month-picker__month.selected-range-first,\r\n.month-picker--dark .month-picker__month.selected-range-second {\r\n    background-color: #505050;\r\n    box-shadow: inset 0 0 3px #505050, 0px 2px 5px #505050;\r\n    color: #ffffff;\r\n    border-color: #1d1b1b;\r\n}\r\n\r\n.month-picker--dark .month-picker__month.selected-range {\r\n    background-color: #636363;\r\n    color: #ffffff;\r\n    border-color: transparent;\r\n}\r\n\r\n.month-picker--dark .month-picker__month:hover {\r\n    box-shadow: 0 0 6px rgba(0, 0, 0, 0.8);\r\n    z-index: 10;\r\n}\r\n\r\n.month-picker--dark .month-picker__month.inactive {\r\n    background-color: #3f3f3f;\r\n    color: #8a8a8a;\r\n    cursor: not-allowed;\r\n    box-shadow: none;\r\n    text-shadow: none;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .month-picker__container {\r\n        width: 100%;\r\n    }\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3f6f02ec\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-month-picker/src/MonthPickerInput.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3f6f02ec","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-month-picker/src/MonthPickerInput.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
    {
      directives: [
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.hide,
          expression: "hide"
        }
      ],
      staticClass: "month-picker-input-container"
    },
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.selectedDate,
            expression: "selectedDate"
          }
        ],
        staticClass: "month-picker-input",
        attrs: { type: "text", placeholder: _vm.placeholder, readonly: "" },
        domProps: { value: _vm.selectedDate },
        on: {
          click: function($event) {
            return _vm.showMonthPicker()
          },
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.selectedDate = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("month-picker", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.monthPickerVisible,
            expression: "monthPickerVisible"
          }
        ],
        attrs: {
          "default-year": _vm.defaultYear,
          "default-month": _vm.defaultMonth,
          lang: _vm.lang,
          months: _vm.months,
          "no-default": _vm.noDefault,
          "show-year": _vm.showYear,
          "highlight-exact-date": _vm.highlightExactDate,
          clearable: _vm.clearable,
          variant: _vm.variant,
          "editable-year": _vm.editableYear,
          "max-date": _vm.maxDate,
          "min-date": _vm.minDate,
          "year-only": _vm.yearOnly,
          range: _vm.range
        },
        on: { input: _vm.populateInput, change: _vm.updateDate }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5886bc50\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-month-picker/src/MonthPicker.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5886bc50","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-month-picker/src/MonthPicker.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _obj
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "month-picker__container",
      class:
        ((_obj = {}),
        (_obj["month-picker--" + _vm.variant] = true),
        (_obj["year-picker"] = _vm.yearOnly),
        _obj)
    },
    [
      _vm.showYear
        ? _c("div", { staticClass: "month-picker__year" }, [
            _c(
              "button",
              {
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.changeYear(-1)
                  }
                }
              },
              [_vm._v("‹")]
            ),
            _vm._v(" "),
            !_vm.editableYear
              ? _c("p", [
                  _vm._v("\n            " + _vm._s(_vm.year) + "\n        ")
                ])
              : _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.year,
                      expression: "year",
                      modifiers: { number: true }
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.year },
                  on: {
                    change: function($event) {
                      return _vm.onChange()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.year = _vm._n($event.target.value)
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
            _vm._v(" "),
            _c(
              "button",
              {
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.changeYear(+1)
                  }
                }
              },
              [_vm._v("›")]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.yearOnly
        ? _c(
            "div",
            { staticClass: "month-picker" },
            _vm._l(_vm.monthsByLang, function(month, monthIndex) {
              return _c(
                "div",
                {
                  key: month,
                  staticClass: "month-picker__month",
                  class: {
                    inactive: _vm.isInactive(month),
                    clearable: _vm.clearable,
                    selected:
                      (_vm.highlightExactDate &&
                        !_vm.range &&
                        _vm.showYear &&
                        _vm.currentMonthIndex === monthIndex &&
                        _vm.year === _vm.selectedYear) ||
                      (!_vm.range &&
                        !_vm.showYear &&
                        _vm.currentMonthIndex == monthIndex) ||
                      (!_vm.highlightExactDate &&
                        !_vm.range &&
                        _vm.currentMonthIndex === monthIndex)
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectMonth(monthIndex, true)
                    }
                  }
                },
                [_vm._v("\n            " + _vm._s(month) + "\n        ")]
              )
            }),
            0
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-month-picker/src/MonthPicker.vue":
/*!***********************************************************!*\
  !*** ./node_modules/vue-month-picker/src/MonthPicker.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_vue_loader_lib_selector_type_script_index_0_MonthPicker_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../vue-loader/lib/selector?type=script&index=0!./MonthPicker.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-month-picker/src/MonthPicker.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_template_compiler_index_id_data_v_5886bc50_hasScoped_false_optionsId_0_buble_transforms_vue_loader_lib_selector_type_template_index_0_MonthPicker_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../vue-loader/lib/template-compiler/index?{"id":"data-v-5886bc50","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../vue-loader/lib/selector?type=template&index=0!./MonthPicker.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5886bc50\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-month-picker/src/MonthPicker.vue");
/* harmony import */ var _vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../vue-loader/lib/selector?type=styles&index=0!./MonthPicker.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vue-month-picker/src/MonthPicker.vue")
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

var Component = Object(_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_vue_loader_lib_selector_type_script_index_0_MonthPicker_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _vue_loader_lib_template_compiler_index_id_data_v_5886bc50_hasScoped_false_optionsId_0_buble_transforms_vue_loader_lib_selector_type_template_index_0_MonthPicker_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _vue_loader_lib_template_compiler_index_id_data_v_5886bc50_hasScoped_false_optionsId_0_buble_transforms_vue_loader_lib_selector_type_template_index_0_MonthPicker_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\vue-month-picker\\src\\MonthPicker.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/vue-month-picker/src/MonthPickerInput.vue":
/*!****************************************************************!*\
  !*** ./node_modules/vue-month-picker/src/MonthPickerInput.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_vue_loader_lib_selector_type_script_index_0_MonthPickerInput_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../vue-loader/lib/selector?type=script&index=0!./MonthPickerInput.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-month-picker/src/MonthPickerInput.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_template_compiler_index_id_data_v_3f6f02ec_hasScoped_true_optionsId_0_buble_transforms_vue_loader_lib_selector_type_template_index_0_MonthPickerInput_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../vue-loader/lib/template-compiler/index?{"id":"data-v-3f6f02ec","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../vue-loader/lib/selector?type=template&index=0!./MonthPickerInput.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3f6f02ec\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-month-picker/src/MonthPickerInput.vue");
/* harmony import */ var _vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-3f6f02ec","scoped":true,"sourceMap":true}!../../vue-loader/lib/selector?type=styles&index=0!./MonthPickerInput.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-3f6f02ec\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vue-month-picker/src/MonthPickerInput.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3f6f02ec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_vue_loader_lib_selector_type_script_index_0_MonthPickerInput_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _vue_loader_lib_template_compiler_index_id_data_v_3f6f02ec_hasScoped_true_optionsId_0_buble_transforms_vue_loader_lib_selector_type_template_index_0_MonthPickerInput_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _vue_loader_lib_template_compiler_index_id_data_v_3f6f02ec_hasScoped_true_optionsId_0_buble_transforms_vue_loader_lib_selector_type_template_index_0_MonthPickerInput_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\vue-month-picker\\src\\MonthPickerInput.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/vue-month-picker/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-month-picker/src/index.js ***!
  \****************************************************/
/*! exports provided: default, MonthPicker, MonthPickerInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MonthPicker_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonthPicker.vue */ "./node_modules/vue-month-picker/src/MonthPicker.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthPicker", function() { return _MonthPicker_vue__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _MonthPickerInput_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MonthPickerInput.vue */ "./node_modules/vue-month-picker/src/MonthPickerInput.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthPickerInput", function() { return _MonthPickerInput_vue__WEBPACK_IMPORTED_MODULE_1__["default"]; });




function plugin (Vue) {
  Vue.component('month-picker', _MonthPicker_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
  Vue.component('month-picker-input', _MonthPickerInput_vue__WEBPACK_IMPORTED_MODULE_1__["default"])
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);




/***/ }),

/***/ "./node_modules/vue-month-picker/src/languages.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-month-picker/src/languages.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// prettier-ignore
/* harmony default export */ __webpack_exports__["default"] = ({
  af: ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'],
  ar: ['كانون الثاني', 'شهر فبراير', 'مارس', 'أبريل', 'قد', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'شهر اكتوبر', 'شهر نوفمبر', 'ديسمبر'],
  cs: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
  da: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
  de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  el: ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  et: ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'],
  fi: ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'],
  fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
  he: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
  hi: ['जनवरी ', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसम्बर'],
  hr: ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'],
  hu: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
  id: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  is: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", 'September', 'Október', "Nóvember", "Desember"],
  it: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
  ja: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  km: ['មករា', 'កុម្ភៈ', 'ខែមីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'ខែវិច្ឆិកា', 'ខែធ្នូ'],
  ko: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  ku: ['Rêbendan', 'Reşemî', 'Adar', 'Avrêl', 'Gulan', 'Pûşper', 'Tîrmeh', 'Tebax', 'Îlon', 'Cotmeh', 'Mijdar', 'Berfanbar'],
  lt: ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'],
  lv: ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", 'Jūnijs', "Jūlijs", 'Augusts', "Septembris", "Oktobris", "Novembris", 'Decembris'],
  ms: ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'],
  ne: ['जनवरी', 'फेब्रुअरी', 'मार्च', 'अप्रिल', 'सक्छ', 'जुन', 'जुलाई', 'अगस्ट', 'सेप्टेम्बर', 'अक्टोबर', 'नोभेम्बर', 'डिसेम्बर'],
  nl: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
  no: ['Januar', 'Februar', 'Mars', 'April', 'May', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
  pa: ['ਜਨਵਰੀ', 'ਫਰਵਰੀ', 'ਮਾਰਚ', 'ਅਪ੍ਰੈਲ', 'ਮਈ', 'ਜੂਨ', 'ਜੁਲਾਈ', 'ਅਗਸਤ', 'ਸਤੰਬਰ', 'ਅਕਤੂਬਰ', 'ਨਵੰਬਰ', 'ਦਸੰਬਰ'],
  pl: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
  pt: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  ro: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
  ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  sv: ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
  sk: ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'],
  sl: ['Januar', "Februar", "Marec", "April", "Maj", 'Junij', "Julij", "Avgust", "September", "Oktober", "November", "December"],
  sr: ['Januar', "Februar", "Mart", "April", "Maj", 'Jun', "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
  so: ['Janaayo', 'Febraayo', 'Maarso', 'Abriil', 'Laga yaabaa', 'Juun', 'July', 'Agoosto', 'Sebtembar', 'Oktoobar', 'November', 'December'],
  sq: ['Janar', 'Shkurt', 'Marsh', 'Prill', 'Mund', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'],
  th: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
  tr: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs ayı', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
  uk: ["Січень", "Лютий", "Березень", "Квітень", 'Може', "Червень", "Липень", "Серпень", 'Вересень', "Жовтень", 'Листопад', 'Грудень'],
  ur: ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
  vi: ['Tháng một', 'Tháng hai', 'Tháng ba', 'Tháng tư', 'Tháng năm', 'Tháng sáu', 'Tháng bảy', 'Tháng tám', 'Tháng chín', 'Tháng mười', 'Tháng mười một', 'Tháng mười hai'],
  yi: ['יאנואר', 'פעברואַר', 'מאַרץ', 'אפריל', 'מייַ', 'יוני', 'יולי', 'אויגוסט', 'סעפטעמבער', 'אקטאבער', 'נאוועמבער', 'דעצעמבער'],
  zh: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  zu: ['Januwari', 'Febhuwari', 'Mashi', 'April', 'Kwangathi', 'Juni', 'Julayi', 'Agasti', 'September', 'Okthoba', 'Novemba', 'December'],
  tm: ['ஜனவரி', 'பிப்ரவரி', 'மார்ச்', 'ஏப்ரல்', 'மே', 'ஜூன்', 'ஜூலை', 'ஆகஸ்ட்', 'செப்டம்பர்', 'அக்டோபர்', 'நவம்பர்', 'டிசம்பர்']
});


/***/ }),

/***/ "./node_modules/vue-month-picker/src/month-picker.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-month-picker/src/month-picker.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languages */ "./node_modules/vue-month-picker/src/languages.js");


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        lang: {
            type: String,
            default: 'en',
            validator: function (value) {
                return Object.keys(_languages__WEBPACK_IMPORTED_MODULE_0__["default"]).some((l) => Object.is(l, value))
            },
            required: false,
        },
        months: {
            type: Array,
            default: null,
            validator: function (value) {
                return value.length === 12
            },
            required: false,
        },
        defaultMonth: {
            type: Number,
            default: null,
            required: false,
        },
        defaultYear: {
            type: Number,
            default: null,
            required: false,
        },
        showYear: {
            type: Boolean,
            default: true,
            required: false,
        },
        editableYear: {
            type: Boolean,
            default: false,
            required: false,
        },
        yearOnly: {
            type: Boolean,
            default: false,
            required: false,
        },
        noDefault: {
            type: Boolean,
            default: false,
            required: false,
        },
        clearable: {
            type: Boolean,
            default: false,
            required: false,
        },
        minDate: {
            type: Date,
            default: null,
            required: false,
        },
        maxDate: {
            type: Date,
            default: null,
        },
        inputPreFilled: {
            type: Boolean,
            default: false,
            required: false,
        },
        range: {
            type: Boolean,
            default: false,
            required: false,
        },
        defaultMonthRange: {
            type: Array,
            default: null,
            required: false,
            validator: function (value) {
                if (value === null || value.length !== 2) {
                    return false
                }

                const [firstRange, secondRange] = value
                if (secondRange <= firstRange) {
                    return false
                }

                return true
            },
        },
        variant: {
            type: String,
            default: 'default',
            required: false,
            validator: function (value) {
                return ['default', 'dark'].includes(value)
            },
        },
        dateFormat: {
            type: String,
            default: '%n, %Y',
        },
        highlightExactDate: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
    computed: {
        monthsByLang: function () {
            if (this.months !== null && this.months.length === 12) {
                return this.months
            }
            return _languages__WEBPACK_IMPORTED_MODULE_0__["default"][this.lang]
        },
    },
});


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-3f6f02ec\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vue-month-picker/src/MonthPickerInput.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-3f6f02ec","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vue-month-picker/src/MonthPickerInput.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader?sourceMap!../../vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-3f6f02ec","scoped":true,"sourceMap":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./MonthPickerInput.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-3f6f02ec\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vue-month-picker/src/MonthPickerInput.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6752911e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vue-month-picker/src/MonthPicker.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vue-month-picker/src/MonthPicker.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader?sourceMap!../../vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./MonthPicker.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vue-month-picker/src/MonthPicker.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7aa1c9ec", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Z1ZS1tb250aC1waWNrZXIvc3JjL01vbnRoUGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Z1ZS1tb250aC1waWNrZXIvc3JjL01vbnRoUGlja2VySW5wdXQudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbW9udGgtcGlja2VyL3NyYy9Nb250aFBpY2tlcklucHV0LnZ1ZT9kMTgzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbW9udGgtcGlja2VyL3NyYy9Nb250aFBpY2tlci52dWU/N2ZmMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLW1vbnRoLXBpY2tlci9zcmMvTW9udGhQaWNrZXJJbnB1dC52dWU/ZGY1YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLW1vbnRoLXBpY2tlci9zcmMvTW9udGhQaWNrZXIudnVlP2JiNjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1tb250aC1waWNrZXIvc3JjL01vbnRoUGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLW1vbnRoLXBpY2tlci9zcmMvTW9udGhQaWNrZXJJbnB1dC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1tb250aC1waWNrZXIvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbW9udGgtcGlja2VyL3NyYy9sYW5ndWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1tb250aC1waWNrZXIvc3JjL21vbnRoLXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLW1vbnRoLXBpY2tlci9zcmMvTW9udGhQaWNrZXJJbnB1dC52dWU/ZjMwNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLW1vbnRoLXBpY2tlci9zcmMvTW9udGhQaWNrZXIudnVlP2JmZjEiXSwibmFtZXMiOlsibmFtZSIsIm1peGlucyIsImVtaXRzIiwiZGF0YSIsImN1cnJlbnRNb250aEluZGV4IiwiZmlyc3RSYW5nZU1vbnRoSW5kZXgiLCJzZWNvbmRSYW5nZU1vbnRoSW5kZXgiLCJ5ZWFyIiwic2VsZWN0ZWRZZWFyIiwiY29tcHV0ZWQiLCJjdXJyZW50TW9udGgiLCJmaXJzdFJhbmdlbW9udGgiLCJzZWNvbmRSYW5nZW1vbnRoIiwiZGF0ZSIsImZyb20iLCJ0byIsIm1vbnRoIiwibW9udGhJbmRleCIsInJhbmdlRnJvbSIsInJhbmdlVG8iLCJyYW5nZUZyb21Nb250aCIsInJhbmdlVG9Nb250aCIsImRhdGVGcm9tIiwiZGF0ZVRvIiwiZGF0ZVJlc3VsdCIsIndhdGNoIiwiZGVmYXVsdE1vbnRoIiwiZGVmYXVsdFllYXIiLCJtb3VudGVkIiwibWV0aG9kcyIsIm9uQ2hhbmdlIiwic2VsZWN0TW9udGgiLCJzZWxlY3RNb250aFJhbmdlIiwic2V0RGVmYXVsdE1vbnRoUmFuZ2UiLCJjaGFuZ2VZZWFyIiwiaXNJbmFjdGl2ZSIsIm1vbnRoVmFsdWUiLCJkaXJlY3RpdmVzIiwiY2xpY2tPdXRzaWRlIiwiYmluZCIsImVsIiwidm5vZGUiLCJkb2N1bWVudCIsInVuYmluZCIsImJlZm9yZU1vdW50IiwiYmluZGluZyIsInVubW91bnRlZCIsImNvbXBvbmVudHMiLCJNb250aFBpY2tlciIsInByb3BzIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiZGVmYXVsdCIsIm1vbnRoUGlja2VyVmlzaWJsZSIsInNlbGVjdGVkRGF0ZSIsImltbWVkaWF0ZSIsImhhbmRsZXIiLCJyZXBsYWNlIiwicG9wdWxhdGVJbnB1dCIsInNob3dNb250aFBpY2tlciIsImhpZGUiLCJ1cGRhdGVEYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBO0FBQ0E7QUFFZTtFQUNmQTtFQUNBQztFQUNBQztFQUNBQztJQUNBQztJQUNBQztJQUNBQztJQUNBQztJQUNBQztFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7UUFDQTtNQUNBO01BRUE7SUFDQTtJQUNBQztNQUNBO1FBQ0E7TUFDQTtNQUVBO0lBQ0E7SUFDQUM7TUFDQTtRQUNBO01BQ0E7TUFFQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BRUE7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQVY7UUFDQVc7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUVBO1FBQ0EsdUJBQ0E7UUFDQSxxQkFDQTtRQUVBQztRQUNBQztRQUVBQztRQUNBQTtRQUNBQSw0QkFDQTtRQUNBQSwwQkFDQTtNQUNBO01BRUE7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO01BQ0E7SUFDQTtJQUVBO01BQ0E7TUFDQTtJQUNBO0lBRUE7TUFDQTtJQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO1FBQ0E7TUFDQTtNQUVBO1FBQ0E7TUFDQTtNQUVBO01BQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUVBO1FBQ0E7TUFDQTtNQUVBO01BQ0E7TUFFQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO1FBQ0E7UUFDQTtNQUNBO01BRUEsSUFDQSxzQ0FDQSxxQ0FDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO01BRUE7UUFDQTtRQUNBO1FBRUE7VUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUVBO0lBQ0E7SUFDQUM7TUFDQSxJQUNBLG1DQUNBLHFDQUNBO1FBQ0E7TUFDQTtNQUVBO01BQ0E7UUFDQTtNQUNBO01BRUE7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtRQUNBO01BQ0E7TUFFQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUVBO1FBQ0FDO01BQ0E7TUFFQTtNQUNBO01BQ0E7TUFFQTtRQUNBO01BQ0E7TUFFQTtRQUNBO01BQ0E7TUFF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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsREQ7QUFBQTtBQUFtQzs7QUFFcEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtEQUFTO0FBQzVDLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrREFBUztBQUM1QixTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7OztBQ3JIRDs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxraUJBQWlRO0FBQ3ZSO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw2R0FBZ0Q7QUFDbEUsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNYZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyx3ZUFBa087QUFDeFA7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLDZHQUFnRDtBQUNsRSwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImpzLzE1LmJ1bmRsZS4wMTE1MDBjZDY2NDBkZGE1OWM3MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cIm1vbnRoLXBpY2tlcl9fY29udGFpbmVyXCJcclxuICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgIFtgbW9udGgtcGlja2VyLS0ke3ZhcmlhbnR9YF06IHRydWUsXHJcbiAgICAgICAgICAgICd5ZWFyLXBpY2tlcic6IHllYXJPbmx5LFxyXG4gICAgICAgIH1cIlxyXG4gICAgPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cInNob3dZZWFyXCIgY2xhc3M9XCJtb250aC1waWNrZXJfX3llYXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwiY2hhbmdlWWVhcigtMSlcIj4mbHNhcXVvOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8cCB2LWlmPVwiIWVkaXRhYmxlWWVhclwiPlxyXG4gICAgICAgICAgICAgICAge3sgeWVhciB9fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdi1lbHNlXHJcbiAgICAgICAgICAgICAgICB2LW1vZGVsLm51bWJlcj1cInllYXJcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cIm9uQ2hhbmdlKClcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJjaGFuZ2VZZWFyKCsxKVwiPiZyc2FxdW87PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiIXllYXJPbmx5XCIgY2xhc3M9XCJtb250aC1waWNrZXJcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgdi1mb3I9XCIobW9udGgsIG1vbnRoSW5kZXgpIGluIG1vbnRoc0J5TGFuZ1wiXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwibW9udGhcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgIGluYWN0aXZlOiBpc0luYWN0aXZlKG1vbnRoKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IGNsZWFyYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGhpZ2hsaWdodEV4YWN0RGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJhbmdlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93WWVhciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE1vbnRoSW5kZXggPT09IG1vbnRoSW5kZXggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXIgPT09IHNlbGVjdGVkWWVhcikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCFyYW5nZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNob3dZZWFyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TW9udGhJbmRleCA9PSBtb250aEluZGV4KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoIWhpZ2hsaWdodEV4YWN0RGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJhbmdlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TW9udGhJbmRleCA9PT0gbW9udGhJbmRleCksXHJcbiAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwibW9udGgtcGlja2VyX19tb250aFwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RNb250aChtb250aEluZGV4LCB0cnVlKVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt7IG1vbnRoIH19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgbGFuZ3VhZ2VzIGZyb20gJy4vbGFuZ3VhZ2VzJ1xyXG5pbXBvcnQgbW9udGhQaWNrZXIgZnJvbSAnLi9tb250aC1waWNrZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnTW9udGhQaWNrZXInLFxyXG4gICAgbWl4aW5zOiBbbW9udGhQaWNrZXJdLFxyXG4gICAgZW1pdHM6IFsnY2hhbmdlJywgJ2NsZWFyJywgJ2lucHV0JywgJ2NoYW5nZS15ZWFyJ10sXHJcbiAgICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgICAgIGN1cnJlbnRNb250aEluZGV4OiBudWxsLFxyXG4gICAgICAgIGZpcnN0UmFuZ2VNb250aEluZGV4OiBudWxsLFxyXG4gICAgICAgIHNlY29uZFJhbmdlTW9udGhJbmRleDogbnVsbCxcclxuICAgICAgICB5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgc2VsZWN0ZWRZZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXHJcbiAgICB9KSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgY3VycmVudE1vbnRoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb250aEluZGV4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tb250aHNCeUxhbmdbdGhpcy5jdXJyZW50TW9udGhJbmRleF1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpcnN0UmFuZ2Vtb250aDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdFJhbmdlTW9udGhJbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9udGhzQnlMYW5nW3RoaXMuZmlyc3RSYW5nZU1vbnRoSW5kZXhdXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWNvbmRSYW5nZW1vbnRoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlY29uZFJhbmdlTW9udGhJbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9udGhzQnlMYW5nW3RoaXMuc2Vjb25kUmFuZ2VNb250aEluZGV4XVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBtb250aCA9IHRoaXMubW9udGhzQnlMYW5nLmluZGV4T2YodGhpcy5jdXJyZW50TW9udGgpICsgMVxyXG4gICAgICAgICAgICBsZXQgZGF0ZUZyb20gPSBuZXcgRGF0ZShgJHt0aGlzLnllYXJ9LyR7bW9udGh9LzAxYClcclxuICAgICAgICAgICAgbGV0IGRhdGVUbyA9IG5ldyBEYXRlKHRoaXMueWVhciwgbW9udGgsIDEpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRlUmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgZnJvbTogZGF0ZUZyb20sXHJcbiAgICAgICAgICAgICAgICB0bzogZGF0ZVRvLFxyXG4gICAgICAgICAgICAgICAgbW9udGg6IHRoaXMubW9udGhzQnlMYW5nW21vbnRoIC0gMV0sXHJcbiAgICAgICAgICAgICAgICBtb250aEluZGV4OiBtb250aCxcclxuICAgICAgICAgICAgICAgIHllYXI6IHRoaXMueWVhcixcclxuICAgICAgICAgICAgICAgIHJhbmdlRnJvbTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHJhbmdlVG86IG51bGwsXHJcbiAgICAgICAgICAgICAgICByYW5nZUZyb21Nb250aDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHJhbmdlVG9Nb250aDogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoUmFuZ2VGcm9tID1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoc0J5TGFuZy5pbmRleE9mKHRoaXMuZmlyc3RSYW5nZU1vbnRoSW5kZXgpICsgMVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGhSYW5nZVRvID1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoc0J5TGFuZy5pbmRleE9mKHRoaXMuc2Vjb25kUmFuZ2VNb250aEluZGV4KSArIDFcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRlRnJvbSA9IG5ldyBEYXRlKGAke3RoaXMueWVhcn0vJHttb250aFJhbmdlRnJvbX0vMDFgKVxyXG4gICAgICAgICAgICAgICAgZGF0ZVRvID0gbmV3IERhdGUoYCR7dGhpcy55ZWFyfS8ke21vbnRoUmFuZ2VUb30vMDFgKVxyXG5cclxuICAgICAgICAgICAgICAgIGRhdGVSZXN1bHQucmFuZ2VGcm9tID0gdGhpcy5maXJzdFJhbmdlTW9udGhJbmRleFxyXG4gICAgICAgICAgICAgICAgZGF0ZVJlc3VsdC5yYW5nZVRvID0gdGhpcy5zZWNvbmRSYW5nZU1vbnRoSW5kZXhcclxuICAgICAgICAgICAgICAgIGRhdGVSZXN1bHQucmFuZ2VGcm9tTW9udGggPVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGhzQnlMYW5nW3RoaXMuZmlyc3RSYW5nZU1vbnRoSW5kZXhdXHJcbiAgICAgICAgICAgICAgICBkYXRlUmVzdWx0LnJhbmdlVG9Nb250aCA9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aHNCeUxhbmdbdGhpcy5zZWNvbmRSYW5nZU1vbnRoSW5kZXhdXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlUmVzdWx0XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIGRlZmF1bHRNb250aChuZXdWYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9udGhJbmRleCA9IG5ld1ZhbCAtIDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlZmF1bHRZZWFyKG5ld1ZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnllYXIgPSBuZXdWYWxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFllYXIpIHtcclxuICAgICAgICAgICAgdGhpcy55ZWFyID0gdGhpcy5kZWZhdWx0WWVhclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREZWZhdWx0TW9udGhSYW5nZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdE1vbnRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW9udGgodGhpcy5kZWZhdWx0TW9udGggLSAxKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMubm9EZWZhdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW9udGgoMClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uQ2hhbmdlKCkge1xyXG4gICAgICAgICAgICBpZiAoIU51bWJlci5wYXJzZUludCh0aGlzLnllYXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnllYXIgPSB0aGlzLmRlZmF1bHRZZWFyIHx8IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMuZGF0ZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdE1vbnRoKGluZGV4LCBpbnB1dCA9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW5hY3RpdmUoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdE1vbnRoUmFuZ2UoaW5kZXgsIGlucHV0KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpc0FscmVhZHlTZWxlY3RlZCA9IHRoaXMuY3VycmVudE1vbnRoSW5kZXggPT09IGluZGV4XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyYWJsZSAmJiBpc0FscmVhZHlTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9udGhJbmRleCA9IG51bGxcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsZWFyJylcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0FscmVhZHlTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbnRoSW5kZXggPSBpbmRleFxyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKClcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmRhdGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdE1vbnRoUmFuZ2UoaW5kZXgsIGlucHV0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0UmFuZ2VNb250aEluZGV4ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0UmFuZ2VNb250aEluZGV4ID0gaW5kZXhcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0UmFuZ2VNb250aEluZGV4ICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY29uZFJhbmdlTW9udGhJbmRleCAhPT0gbnVsbFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RSYW5nZU1vbnRoSW5kZXggPSBpbmRleFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWNvbmRSYW5nZU1vbnRoSW5kZXggPSBudWxsXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuZmlyc3RSYW5nZU1vbnRoSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kUmFuZ2VNb250aEluZGV4ID0gaW5kZXhcclxuICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy5kYXRlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RSYW5nZU1vbnRoSW5kZXggPSBpbmRleFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0RGVmYXVsdE1vbnRoUmFuZ2UoKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdE1vbnRoUmFuZ2UgPT09IG51bGwgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdE1vbnRoUmFuZ2UubGVuZ3RoICE9PSAyXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IFtmaXJzdFJhbmdlLCBzZWNvbmRSYW5nZV0gPSB0aGlzLmRlZmF1bHRNb250aFJhbmdlXHJcbiAgICAgICAgICAgIGlmIChzZWNvbmRSYW5nZSA8PSBmaXJzdFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5maXJzdFJhbmdlTW9udGhJbmRleCA9IGZpcnN0UmFuZ2VcclxuICAgICAgICAgICAgdGhpcy5zZWNvbmRSYW5nZU1vbnRoSW5kZXggPSBzZWNvbmRSYW5nZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhbmdlWWVhcih2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnllYXIgKz0gdmFsdWVcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbmFjdGl2ZSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKClcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlLXllYXInLCB0aGlzLnllYXIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc0luYWN0aXZlKG1vbnRoKSB7XHJcbiAgICAgICAgICAgIGxldCBtb250aFZhbHVlID0gbW9udGhcclxuICAgICAgICAgICAgaWYgKHRoaXMubWluRGF0ZSA9PT0gbnVsbCAmJiB0aGlzLm1heERhdGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihtb250aFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgbW9udGhWYWx1ZSA9IHRoaXMubW9udGhzQnlMYW5nW21vbnRoVmFsdWVdXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoS2V5ID0gdGhpcy5tb250aHNCeUxhbmcuaW5kZXhPZihtb250aFZhbHVlKSArIDFcclxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGAke3RoaXMueWVhcn0vJHttb250aEtleX0vMDFgKVxyXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkRGF0ZSA9IChkYXRlKSA9PiBkYXRlICE9PSBudWxsICYmIGRhdGUgaW5zdGFuY2VvZiBEYXRlXHJcblxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZERhdGUodGhpcy5taW5EYXRlKSAmJiBkYXRlIDwgdGhpcy5taW5EYXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZERhdGUodGhpcy5tYXhEYXRlKSAmJiBkYXRlID4gdGhpcy5tYXhEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLm1vbnRoLXBpY2tlcl9fY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbiAgICAgICAgaW5zZXQgMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubW9udGgtcGlja2VyX19jb250YWluZXIueWVhci1waWNrZXIge1xyXG4gICAgd2lkdGg6IDIwcmVtO1xyXG59XHJcblxyXG4ubW9udGgtcGlja2VyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG59XHJcblxyXG4ubW9udGgtcGlja2VyX195ZWFyIHtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgICAgIGluc2V0IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLm1vbnRoLXBpY2tlcl9feWVhciBwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcblxyXG4ubW9udGgtcGlja2VyX195ZWFyIGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMy41cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm1vbnRoLXBpY2tlcl9feWVhciBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTViMGYyO1xyXG59XHJcblxyXG4ubW9udGgtcGlja2VyX195ZWFyIGRpdixcclxuLm1vbnRoLXBpY2tlcl9feWVhciBidXR0b24sXHJcbi5tb250aC1waWNrZXJfX3llYXIgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4ubW9udGgtcGlja2VyX195ZWFyIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgICBoZWlnaHQ6IDIuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgdG9wOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbG9yOiAjNjg2ODY4O1xyXG59XHJcblxyXG4ubW9udGgtcGlja2VyX195ZWFyIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDI1KTtcclxufVxyXG5cclxuLm1vbnRoLXBpY2tlcl9feWVhciBidXR0b246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbn1cclxuXHJcbi5tb250aC1waWNrZXJfX3llYXIgYnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tb250aC1waWNrZXJfX3llYXIgYnV0dG9uOmxhc3QtY2hpbGQge1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tb250aC1waWNrZXJfX21vbnRoIHtcclxuICAgIHBhZGRpbmc6IDAuODVyZW0gMC4yNXJlbTtcclxuICAgIGZsZXgtYmFzaXM6IGNhbGMoMzMuMzMzJSAtIDEwcHgpO1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAwLjI1cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjc1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubW9udGgtcGlja2VyX19tb250aDpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLm1vbnRoLXBpY2tlcl9fbW9udGguc2VsZWN0ZWQsXHJcbi5tb250aC1waWNrZXJfX21vbnRoLnNlbGVjdGVkLXJhbmdlLWZpcnN0LFxyXG4ubW9udGgtcGlja2VyX19tb250aC5zZWxlY3RlZC1yYW5nZS1zZWNvbmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1YjBmMjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjMzQ5MGQyLCAwcHggMnB4IDVweCByZ2JhKDg1LCAxNzYsIDI0MiwgMC4yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuLm1vbnRoLXBpY2tlcl9fbW9udGguc2VsZWN0ZWQtcmFuZ2UtZmlyc3QsXHJcbi5tb250aC1waWNrZXJfX21vbnRoLnNlbGVjdGVkLXJhbmdlLXNlY29uZCB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubW9udGgtcGlja2VyX19tb250aC5zZWxlY3RlZC1yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ViOWUyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubW9udGgtcGlja2VyX19tb250aC5pbmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgY29sb3I6ICM4YThhOGE7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ubW9udGgtcGlja2VyX19tb250aC5pbmFjdGl2ZTpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4vKiBEYXJrIHRocmVtZSAqL1xyXG4ubW9udGgtcGlja2VyLS1kYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjVmNWY7XHJcbn1cclxuXHJcbi5tb250aC1waWNrZXItLWRhcmsgLm1vbnRoLXBpY2tlcl9feWVhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjMwO1xyXG59XHJcblxyXG4ubW9udGgtcGlja2VyLS1kYXJrIC5tb250aC1waWNrZXJfX3llYXIgcCxcclxuLm1vbnRoLXBpY2tlci0tZGFyayAubW9udGgtcGlja2VyX195ZWFyIGlucHV0IHtcclxuICAgIGNvbG9yOiAjZWJlYmViO1xyXG59XHJcblxyXG4ubW9udGgtcGlja2VyLS1kYXJrIC5tb250aC1waWNrZXJfX3llYXIgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNWY1ZjtcclxufVxyXG5cclxuLm1vbnRoLXBpY2tlci0tZGFyayAubW9udGgtcGlja2VyX195ZWFyIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MDUwO1xyXG4gICAgY29sb3I6ICNjOWM5Yzk7XHJcbiAgICBib3JkZXItY29sb3I6ICMxZTFlMWU7XHJcbn1cclxuXHJcbi5tb250aC1waWNrZXItLWRhcmsgLm1vbnRoLXBpY2tlcl9feWVhciBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4ubW9udGgtcGlja2VyLS1kYXJrIC5tb250aC1waWNrZXJfX3llYXIgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbn1cclxuXHJcbi5tb250aC1waWNrZXItLWRhcmsgLm1vbnRoLXBpY2tlcl9fbW9udGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmYzMDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjE1KTtcclxuICAgIGNvbG9yOiAjYzljOWM5O1xyXG59XHJcblxyXG4ubW9udGgtcGlja2VyLS1kYXJrIC5tb250aC1waWNrZXJfX21vbnRoLnNlbGVjdGVkLFxyXG4ubW9udGgtcGlja2VyLS1kYXJrIC5tb250aC1waWNrZXJfX21vbnRoLnNlbGVjdGVkLXJhbmdlLWZpcnN0LFxyXG4ubW9udGgtcGlja2VyLS1kYXJrIC5tb250aC1waWNrZXJfX21vbnRoLnNlbGVjdGVkLXJhbmdlLXNlY29uZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MDUwO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjNTA1MDUwLCAwcHggMnB4IDVweCAjNTA1MDUwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMxZDFiMWI7XHJcbn1cclxuXHJcbi5tb250aC1waWNrZXItLWRhcmsgLm1vbnRoLXBpY2tlcl9fbW9udGguc2VsZWN0ZWQtcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNjM2MztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1vbnRoLXBpY2tlci0tZGFyayAubW9udGgtcGlja2VyX19tb250aDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4ubW9udGgtcGlja2VyLS1kYXJrIC5tb250aC1waWNrZXJfX21vbnRoLmluYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjNmM2Y7XHJcbiAgICBjb2xvcjogIzhhOGE4YTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5tb250aC1waWNrZXJfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiB2LWNsaWNrLW91dHNpZGU9XCJoaWRlXCIgY2xhc3M9XCJtb250aC1waWNrZXItaW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZERhdGVcIlxyXG4gICAgICAgICAgICBjbGFzcz1cIm1vbnRoLXBpY2tlci1pbnB1dFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICByZWFkb25seVxyXG4gICAgICAgICAgICBAY2xpY2s9XCJzaG93TW9udGhQaWNrZXIoKVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bW9udGgtcGlja2VyXHJcbiAgICAgICAgICAgIHYtc2hvdz1cIm1vbnRoUGlja2VyVmlzaWJsZVwiXHJcbiAgICAgICAgICAgIDpkZWZhdWx0LXllYXI9XCJkZWZhdWx0WWVhclwiXHJcbiAgICAgICAgICAgIDpkZWZhdWx0LW1vbnRoPVwiZGVmYXVsdE1vbnRoXCJcclxuICAgICAgICAgICAgOmxhbmc9XCJsYW5nXCJcclxuICAgICAgICAgICAgOm1vbnRocz1cIm1vbnRoc1wiXHJcbiAgICAgICAgICAgIDpuby1kZWZhdWx0PVwibm9EZWZhdWx0XCJcclxuICAgICAgICAgICAgOnNob3cteWVhcj1cInNob3dZZWFyXCJcclxuICAgICAgICAgICAgOmhpZ2hsaWdodC1leGFjdC1kYXRlPVwiaGlnaGxpZ2h0RXhhY3REYXRlXCJcclxuICAgICAgICAgICAgOmNsZWFyYWJsZT1cImNsZWFyYWJsZVwiXHJcbiAgICAgICAgICAgIDp2YXJpYW50PVwidmFyaWFudFwiXHJcbiAgICAgICAgICAgIDplZGl0YWJsZS15ZWFyPVwiZWRpdGFibGVZZWFyXCJcclxuICAgICAgICAgICAgOm1heC1kYXRlPVwibWF4RGF0ZVwiXHJcbiAgICAgICAgICAgIDptaW4tZGF0ZT1cIm1pbkRhdGVcIlxyXG4gICAgICAgICAgICA6eWVhci1vbmx5PVwieWVhck9ubHlcIlxyXG4gICAgICAgICAgICA6cmFuZ2U9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgIEBpbnB1dD1cInBvcHVsYXRlSW5wdXRcIlxyXG4gICAgICAgICAgICBAY2hhbmdlPVwidXBkYXRlRGF0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IE1vbnRoUGlja2VyIGZyb20gJy4vTW9udGhQaWNrZXIudnVlJ1xyXG5pbXBvcnQgbW9udGhQaWNrZXIgZnJvbSAnLi9tb250aC1waWNrZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnTW9udGhQaWNrZXJJbnB1dCcsXHJcbiAgICBkaXJlY3RpdmVzOiB7XHJcbiAgICAgICAgY2xpY2tPdXRzaWRlOiB7XHJcbiAgICAgICAgICAgIGJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGVsLmV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZWwgPT09IGV2ZW50LnRhcmdldCB8fCBlbC5jb250YWlucyhldmVudC50YXJnZXQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bm9kZS5jb250ZXh0W2JpbmRpbmcuZXhwcmVzc2lvbl0oZXZlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVsLmV2ZW50KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1bmJpbmQ6IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVsLmV2ZW50KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiZWZvcmVNb3VudDogKGVsLCBiaW5kaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbC5jbGlja091dHNpZGVFdmVudCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGVsID09IGV2ZW50LnRhcmdldCB8fCBlbC5jb250YWlucyhldmVudC50YXJnZXQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kaW5nLnZhbHVlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVsLmNsaWNrT3V0c2lkZUV2ZW50KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1bm1vdW50ZWQ6IChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbC5jbGlja091dHNpZGVFdmVudClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBNb250aFBpY2tlcixcclxuICAgIH0sXHJcbiAgICBtaXhpbnM6IFttb250aFBpY2tlcl0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHBsYWNlaG9sZGVyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGVtaXRzOiBbJ2NoYW5nZScsICdpbnB1dCddLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtb250aFBpY2tlclZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZERhdGU6IG51bGwsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgZGVmYXVsdFllYXI6IHtcclxuICAgICAgICAgICAgaW1tZWRpYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlIHx8ICF0aGlzLmlucHV0UHJlRmlsbGVkKSByZXR1cm5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdGhpcy5kYXRlRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVuJywgdGhpcy5tb250aHNCeUxhbmdbdGhpcy5kZWZhdWx0TW9udGggLSAxXSlcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJVknLCB2YWx1ZSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlZmF1bHRNb250aDoge1xyXG4gICAgICAgICAgICBpbW1lZGlhdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGhhbmRsZXIodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUgfHwgIXRoaXMuaW5wdXRQcmVGaWxsZWQpIHJldHVyblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB0aGlzLmRhdGVGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJW4nLCB0aGlzLm1vbnRoc0J5TGFuZ1t2YWx1ZSAtIDFdKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclWScsIHRoaXMuZGVmYXVsdFllYXIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcG9wdWxhdGVJbnB1dChkYXRlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGAke2RhdGUucmFuZ2VGcm9tTW9udGh9IC0gJHtkYXRlLnJhbmdlVG9Nb250aH0sICR7ZGF0ZS55ZWFyfWBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdGhpcy5kYXRlRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVuJywgZGF0ZS5tb250aClcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJVknLCBkYXRlLnllYXIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubW9udGhQaWNrZXJWaXNpYmxlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBkYXRlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd01vbnRoUGlja2VyKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbnRoUGlja2VyVmlzaWJsZSA9ICF0aGlzLm1vbnRoUGlja2VyVmlzaWJsZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5tb250aFBpY2tlclZpc2libGUgPSBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlRGF0ZShkYXRlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGAke2RhdGUucmFuZ2VGcm9tTW9udGh9IC0gJHtkYXRlLnJhbmdlVG9Nb250aH0sICR7ZGF0ZS55ZWFyfWBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdGhpcy5kYXRlRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVuJywgZGF0ZS5tb250aClcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJVknLCBkYXRlLnllYXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZGF0ZSlcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuLm1vbnRoLXBpY2tlci1pbnB1dC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNDBweDtcclxufVxyXG5cclxuLm1vbnRoLXBpY2tlci1pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAxZW0gMS41ZW07XHJcbiAgICBmb250LXNpemU6IDAuODVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDM1MG1zIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcbn1cclxuXHJcbi5tb250aC1waWNrZXItaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLm1vbnRoLXBpY2tlcl9fY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMy41ZW07XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1vbnRoLXBpY2tlci1pbnB1dC1jb250YWluZXJbZGF0YS12LTNmNmYwMmVjXSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDE4MHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xcbn1cXG4ubW9udGgtcGlja2VyLWlucHV0W2RhdGEtdi0zZjZmMDJlY10ge1xcclxcbiAgICBwYWRkaW5nOiAxZW0gMS41ZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAzNTBtcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xcbn1cXG4ubW9udGgtcGlja2VyLWlucHV0W2RhdGEtdi0zZjZmMDJlY106Zm9jdXMge1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi5tb250aC1waWNrZXJfX2NvbnRhaW5lcltkYXRhLXYtM2Y2ZjAyZWNdIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDMuNWVtO1xcbn1cXHJcXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovZGV2bG9wbWVudC93YW1wNjQvd3d3L3JveWFsLWluZnJhY29uc3RydWN0aW9uL25vZGVfbW9kdWxlcy92dWUtbW9udGgtcGlja2VyL3NyYy9ub2RlX21vZHVsZXMvdnVlLW1vbnRoLXBpY2tlci9zcmMvTW9udGhQaWNrZXJJbnB1dC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXNJQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0NBQ0E7QUFFQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxzQ0FBQTtJQUNBLHlEQUFBO0NBQ0E7QUFFQTtJQUNBLGtDQUFBO0lBQ0EseUNBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0NBQ0FcIixcImZpbGVcIjpcIk1vbnRoUGlja2VySW5wdXQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdiB2LWNsaWNrLW91dHNpZGU9XFxcImhpZGVcXFwiIGNsYXNzPVxcXCJtb250aC1waWNrZXItaW5wdXQtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dFxcclxcbiAgICAgICAgICAgIHYtbW9kZWw9XFxcInNlbGVjdGVkRGF0ZVxcXCJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwibW9udGgtcGlja2VyLWlucHV0XFxcIlxcclxcbiAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxyXFxuICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVxcXCJwbGFjZWhvbGRlclxcXCJcXHJcXG4gICAgICAgICAgICByZWFkb25seVxcclxcbiAgICAgICAgICAgIEBjbGljaz1cXFwic2hvd01vbnRoUGlja2VyKClcXFwiXFxyXFxuICAgICAgICAvPlxcclxcbiAgICAgICAgPG1vbnRoLXBpY2tlclxcclxcbiAgICAgICAgICAgIHYtc2hvdz1cXFwibW9udGhQaWNrZXJWaXNpYmxlXFxcIlxcclxcbiAgICAgICAgICAgIDpkZWZhdWx0LXllYXI9XFxcImRlZmF1bHRZZWFyXFxcIlxcclxcbiAgICAgICAgICAgIDpkZWZhdWx0LW1vbnRoPVxcXCJkZWZhdWx0TW9udGhcXFwiXFxyXFxuICAgICAgICAgICAgOmxhbmc9XFxcImxhbmdcXFwiXFxyXFxuICAgICAgICAgICAgOm1vbnRocz1cXFwibW9udGhzXFxcIlxcclxcbiAgICAgICAgICAgIDpuby1kZWZhdWx0PVxcXCJub0RlZmF1bHRcXFwiXFxyXFxuICAgICAgICAgICAgOnNob3cteWVhcj1cXFwic2hvd1llYXJcXFwiXFxyXFxuICAgICAgICAgICAgOmhpZ2hsaWdodC1leGFjdC1kYXRlPVxcXCJoaWdobGlnaHRFeGFjdERhdGVcXFwiXFxyXFxuICAgICAgICAgICAgOmNsZWFyYWJsZT1cXFwiY2xlYXJhYmxlXFxcIlxcclxcbiAgICAgICAgICAgIDp2YXJpYW50PVxcXCJ2YXJpYW50XFxcIlxcclxcbiAgICAgICAgICAgIDplZGl0YWJsZS15ZWFyPVxcXCJlZGl0YWJsZVllYXJcXFwiXFxyXFxuICAgICAgICAgICAgOm1heC1kYXRlPVxcXCJtYXhEYXRlXFxcIlxcclxcbiAgICAgICAgICAgIDptaW4tZGF0ZT1cXFwibWluRGF0ZVxcXCJcXHJcXG4gICAgICAgICAgICA6eWVhci1vbmx5PVxcXCJ5ZWFyT25seVxcXCJcXHJcXG4gICAgICAgICAgICA6cmFuZ2U9XFxcInJhbmdlXFxcIlxcclxcbiAgICAgICAgICAgIEBpbnB1dD1cXFwicG9wdWxhdGVJbnB1dFxcXCJcXHJcXG4gICAgICAgICAgICBAY2hhbmdlPVxcXCJ1cGRhdGVEYXRlXFxcIlxcclxcbiAgICAgICAgLz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbmltcG9ydCBNb250aFBpY2tlciBmcm9tICcuL01vbnRoUGlja2VyLnZ1ZSdcXHJcXG5pbXBvcnQgbW9udGhQaWNrZXIgZnJvbSAnLi9tb250aC1waWNrZXInXFxyXFxuXFxyXFxuZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICBuYW1lOiAnTW9udGhQaWNrZXJJbnB1dCcsXFxyXFxuICAgIGRpcmVjdGl2ZXM6IHtcXHJcXG4gICAgICAgIGNsaWNrT3V0c2lkZToge1xcclxcbiAgICAgICAgICAgIGJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgZWwuZXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGVsID09PSBldmVudC50YXJnZXQgfHwgZWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2bm9kZS5jb250ZXh0W2JpbmRpbmcuZXhwcmVzc2lvbl0oZXZlbnQpXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVsLmV2ZW50KVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgdW5iaW5kOiBmdW5jdGlvbiAoZWwpIHtcXHJcXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVsLmV2ZW50KVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgYmVmb3JlTW91bnQ6IChlbCwgYmluZGluZykgPT4ge1xcclxcbiAgICAgICAgICAgICAgICBlbC5jbGlja091dHNpZGVFdmVudCA9IChldmVudCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZWwgPT0gZXZlbnQudGFyZ2V0IHx8IGVsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZy52YWx1ZSgpXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbC5jbGlja091dHNpZGVFdmVudClcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHVubW91bnRlZDogKGVsKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWwuY2xpY2tPdXRzaWRlRXZlbnQpXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgIH0sXFxyXFxuICAgIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgICAgIE1vbnRoUGlja2VyLFxcclxcbiAgICB9LFxcclxcbiAgICBtaXhpbnM6IFttb250aFBpY2tlcl0sXFxyXFxuICAgIHByb3BzOiB7XFxyXFxuICAgICAgICBwbGFjZWhvbGRlcjoge1xcclxcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgfSxcXHJcXG4gICAgZW1pdHM6IFsnY2hhbmdlJywgJ2lucHV0J10sXFxyXFxuICAgIGRhdGEoKSB7XFxyXFxuICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgIG1vbnRoUGlja2VyVmlzaWJsZTogZmFsc2UsXFxyXFxuICAgICAgICAgICAgc2VsZWN0ZWREYXRlOiBudWxsLFxcclxcbiAgICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICB3YXRjaDoge1xcclxcbiAgICAgICAgZGVmYXVsdFllYXI6IHtcXHJcXG4gICAgICAgICAgICBpbW1lZGlhdGU6IHRydWUsXFxyXFxuICAgICAgICAgICAgaGFuZGxlcih2YWx1ZSkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlIHx8ICF0aGlzLmlucHV0UHJlRmlsbGVkKSByZXR1cm5cXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB0aGlzLmRhdGVGb3JtYXRcXHJcXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclbicsIHRoaXMubW9udGhzQnlMYW5nW3RoaXMuZGVmYXVsdE1vbnRoIC0gMV0pXFxyXFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJVknLCB2YWx1ZSlcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGRlZmF1bHRNb250aDoge1xcclxcbiAgICAgICAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcXHJcXG4gICAgICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUgfHwgIXRoaXMuaW5wdXRQcmVGaWxsZWQpIHJldHVyblxcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHRoaXMuZGF0ZUZvcm1hdFxcclxcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVuJywgdGhpcy5tb250aHNCeUxhbmdbdmFsdWUgLSAxXSlcXHJcXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclWScsIHRoaXMuZGVmYXVsdFllYXIpXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgIH0sXFxyXFxuICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICAgIHBvcHVsYXRlSW5wdXQoZGF0ZSkge1xcclxcbiAgICAgICAgICAgIGlmICh0aGlzLnJhbmdlKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gYCR7ZGF0ZS5yYW5nZUZyb21Nb250aH0gLSAke2RhdGUucmFuZ2VUb01vbnRofSwgJHtkYXRlLnllYXJ9YFxcclxcbiAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdGhpcy5kYXRlRm9ybWF0XFxyXFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJW4nLCBkYXRlLm1vbnRoKVxcclxcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVZJywgZGF0ZS55ZWFyKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICB0aGlzLm1vbnRoUGlja2VyVmlzaWJsZSA9IGZhbHNlXFxyXFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBkYXRlKVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHNob3dNb250aFBpY2tlcigpIHtcXHJcXG4gICAgICAgICAgICB0aGlzLm1vbnRoUGlja2VyVmlzaWJsZSA9ICF0aGlzLm1vbnRoUGlja2VyVmlzaWJsZVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGhpZGUoKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy5tb250aFBpY2tlclZpc2libGUgPSBmYWxzZVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHVwZGF0ZURhdGUoZGF0ZSkge1xcclxcbiAgICAgICAgICAgIGlmICh0aGlzLnJhbmdlKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gYCR7ZGF0ZS5yYW5nZUZyb21Nb250aH0gLSAke2RhdGUucmFuZ2VUb01vbnRofSwgJHtkYXRlLnllYXJ9YFxcclxcbiAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdGhpcy5kYXRlRm9ybWF0XFxyXFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJW4nLCBkYXRlLm1vbnRoKVxcclxcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVZJywgZGF0ZS55ZWFyKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBkYXRlKVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgfSxcXHJcXG59XFxyXFxuPC9zY3JpcHQ+XFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4ubW9udGgtcGlja2VyLWlucHV0LWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDE4MHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9udGgtcGlja2VyLWlucHV0IHtcXHJcXG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xcclxcbiAgICBmb250LXNpemU6IDAuODVlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlci1pbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlcl9fY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDMuNWVtO1xcclxcbn1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubW9udGgtcGlja2VyX19jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcXHJcXG4gICAgICAgIGluc2V0IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ubW9udGgtcGlja2VyX19jb250YWluZXIueWVhci1waWNrZXIge1xcclxcbiAgICB3aWR0aDogMjByZW07XFxufVxcbi5tb250aC1waWNrZXIge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxufVxcbi5tb250aC1waWNrZXJfX3llYXIge1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksXFxyXFxuICAgICAgICBpbnNldCAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi5tb250aC1waWNrZXJfX3llYXIgcCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcbi5tb250aC1waWNrZXJfX3llYXIgaW5wdXQge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMy41cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxufVxcbi5tb250aC1waWNrZXJfX3llYXIgaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTViMGYyO1xcbn1cXG4ubW9udGgtcGlja2VyX195ZWFyIGRpdixcXHJcXG4ubW9udGgtcGlja2VyX195ZWFyIGJ1dHRvbixcXHJcXG4ubW9udGgtcGlja2VyX195ZWFyIHAge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZsZXg6IDE7XFxufVxcbi5tb250aC1waWNrZXJfX3llYXIgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyLjc1cmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICB0b3A6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgY29sb3I6ICM2ODY4Njg7XFxufVxcbi5tb250aC1waWNrZXJfX3llYXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyNSk7XFxufVxcbi5tb250aC1waWNrZXJfX3llYXIgYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XFxufVxcbi5tb250aC1waWNrZXJfX3llYXIgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgbGVmdDogMTBweDtcXG59XFxuLm1vbnRoLXBpY2tlcl9feWVhciBidXR0b246bGFzdC1jaGlsZCB7XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcbn1cXG4ubW9udGgtcGlja2VyX19tb250aCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuODVyZW0gMC4yNXJlbTtcXHJcXG4gICAgZmxleC1iYXNpczogY2FsYygzMy4zMzMlIC0gMTBweCk7XFxyXFxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMC4yNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC43NSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubW9udGgtcGlja2VyX19tb250aDpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgaGVpZ2h0OiA5NSU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG4ubW9udGgtcGlja2VyX19tb250aC5zZWxlY3RlZCxcXHJcXG4ubW9udGgtcGlja2VyX19tb250aC5zZWxlY3RlZC1yYW5nZS1maXJzdCxcXHJcXG4ubW9udGgtcGlja2VyX19tb250aC5zZWxlY3RlZC1yYW5nZS1zZWNvbmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTViMGYyO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4ICMzNDkwZDIsIDBweCAycHggNXB4IHJnYmEoODUsIDE3NiwgMjQyLCAwLjIpO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcbi5tb250aC1waWNrZXJfX21vbnRoLnNlbGVjdGVkLXJhbmdlLWZpcnN0LFxcclxcbi5tb250aC1waWNrZXJfX21vbnRoLnNlbGVjdGVkLXJhbmdlLXNlY29uZCB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5tb250aC1waWNrZXJfX21vbnRoLnNlbGVjdGVkLXJhbmdlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdlYjllMjtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5tb250aC1waWNrZXJfX21vbnRoLmluYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXHJcXG4gICAgY29sb3I6ICM4YThhOGE7XFxyXFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG4ubW9udGgtcGlja2VyX19tb250aC5pbmFjdGl2ZTpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcclxcblxcclxcbi8qIERhcmsgdGhyZW1lICovXFxuLm1vbnRoLXBpY2tlci0tZGFyayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjVmNWY7XFxufVxcbi5tb250aC1waWNrZXItLWRhcmsgLm1vbnRoLXBpY2tlcl9feWVhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjJmMzA7XFxufVxcbi5tb250aC1waWNrZXItLWRhcmsgLm1vbnRoLXBpY2tlcl9feWVhciBwLFxcclxcbi5tb250aC1waWNrZXItLWRhcmsgLm1vbnRoLXBpY2tlcl9feWVhciBpbnB1dCB7XFxyXFxuICAgIGNvbG9yOiAjZWJlYmViO1xcbn1cXG4ubW9udGgtcGlja2VyLS1kYXJrIC5tb250aC1waWNrZXJfX3llYXIgaW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZjVmO1xcbn1cXG4ubW9udGgtcGlja2VyLS1kYXJrIC5tb250aC1waWNrZXJfX3llYXIgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcXHJcXG4gICAgY29sb3I6ICNjOWM5Yzk7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzFlMWUxZTtcXG59XFxuLm1vbnRoLXBpY2tlci0tZGFyayAubW9udGgtcGlja2VyX195ZWFyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuLm1vbnRoLXBpY2tlci0tZGFyayAubW9udGgtcGlja2VyX195ZWFyIGJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcbi5tb250aC1waWNrZXItLWRhcmsgLm1vbnRoLXBpY2tlcl9fbW9udGgge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjMwO1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC4xNSk7XFxyXFxuICAgIGNvbG9yOiAjYzljOWM5O1xcbn1cXG4ubW9udGgtcGlja2VyLS1kYXJrIC5tb250aC1waWNrZXJfX21vbnRoLnNlbGVjdGVkLFxcclxcbi5tb250aC1waWNrZXItLWRhcmsgLm1vbnRoLXBpY2tlcl9fbW9udGguc2VsZWN0ZWQtcmFuZ2UtZmlyc3QsXFxyXFxuLm1vbnRoLXBpY2tlci0tZGFyayAubW9udGgtcGlja2VyX19tb250aC5zZWxlY3RlZC1yYW5nZS1zZWNvbmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MDUwO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4ICM1MDUwNTAsIDBweCAycHggNXB4ICM1MDUwNTA7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMxZDFiMWI7XFxufVxcbi5tb250aC1waWNrZXItLWRhcmsgLm1vbnRoLXBpY2tlcl9fbW9udGguc2VsZWN0ZWQtcmFuZ2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM2MzYzO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLm1vbnRoLXBpY2tlci0tZGFyayAubW9udGgtcGlja2VyX19tb250aDpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuLm1vbnRoLXBpY2tlci0tZGFyayAubW9udGgtcGlja2VyX19tb250aC5pbmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjNmM2Y7XFxyXFxuICAgIGNvbG9yOiAjOGE4YThhO1xcclxcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbi5tb250aC1waWNrZXJfX2NvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG59XFxufVxcclxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9kZXZsb3BtZW50L3dhbXA2NC93d3cvcm95YWwtaW5mcmFjb25zdHJ1Y3Rpb24vbm9kZV9tb2R1bGVzL3Z1ZS1tb250aC1waWNrZXIvc3JjL25vZGVfbW9kdWxlcy92dWUtbW9udGgtcGlja2VyL3NyYy9Nb250aFBpY2tlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXVRQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBOzBDQUNBO0lBQ0EsbUJBQUE7Q0FDQTtBQUVBO0lBQ0EsYUFBQTtDQUNBO0FBRUE7SUFDQSx1QkFBQTtJQUNBLFFBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLG9CQUFBO0lBQ0EsZ0JBQUE7SUFDQSwyQ0FBQTtJQUNBLHdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxtQ0FBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtJQUNBLDBCQUFBO0lBQ0E7MENBQ0E7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7Q0FDQTtBQUVBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsMkJBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtDQUNBO0FBRUE7SUFDQSwwQkFBQTtDQUNBO0FBRUE7OztJQUdBLG1CQUFBO0lBQ0EsUUFBQTtDQUNBO0FBRUE7SUFDQSwwQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7Q0FDQTtBQUVBO0lBQ0EsdUNBQUE7Q0FDQTtBQUVBO0lBQ0Esc0NBQUE7Q0FDQTtBQUVBO0lBQ0EsV0FBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLHlCQUFBO0lBQ0EsaUNBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSw0Q0FBQTtJQUNBLHlEQUFBO0lBQ0EsMEJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0NBQ0E7QUFFQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsaUNBQUE7SUFDQSx3Q0FBQTtJQUNBLFlBQUE7Q0FDQTtBQUVBOzs7SUFHQSwwQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLHVFQUFBO0lBQ0EsMkNBQUE7Q0FDQTtBQUVBOztJQUVBLDBCQUFBO0NBQ0E7QUFFQTtJQUNBLDBCQUFBO0lBQ0EsZUFBQTtJQUNBLDBCQUFBO0NBQ0E7QUFFQTtJQUNBLDBCQUFBO0lBQ0EsZUFBQTtJQUNBLG9CQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtDQUNBO0FBRUE7SUFDQSxpQkFBQTtDQUNBOztBQUVBLGlCQUFBO0FBQ0E7SUFDQSwwQkFBQTtDQUNBO0FBRUE7SUFDQSwwQkFBQTtDQUNBO0FBRUE7O0lBRUEsZUFBQTtDQUNBO0FBRUE7SUFDQSwwQkFBQTtDQUNBO0FBRUE7SUFDQSwwQkFBQTtJQUNBLGVBQUE7SUFDQSxzQkFBQTtDQUNBO0FBRUE7SUFDQSxxQ0FBQTtDQUNBO0FBRUE7SUFDQSxxQ0FBQTtDQUNBO0FBRUE7SUFDQSwwQkFBQTtJQUNBLHdDQUFBO0lBQ0EsZUFBQTtDQUNBO0FBRUE7OztJQUdBLDBCQUFBO0lBQ0EsdURBQUE7SUFDQSxlQUFBO0lBQ0Esc0JBQUE7Q0FDQTtBQUVBO0lBQ0EsMEJBQUE7SUFDQSxlQUFBO0lBQ0EsMEJBQUE7Q0FDQTtBQUVBO0lBQ0EsdUNBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLDBCQUFBO0lBQ0EsZUFBQTtJQUNBLG9CQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtDQUNBO0FBRUE7QUFDQTtRQUNBLFlBQUE7Q0FDQTtDQUNBXCIsXCJmaWxlXCI6XCJNb250aFBpY2tlci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2XFxyXFxuICAgICAgICBjbGFzcz1cXFwibW9udGgtcGlja2VyX19jb250YWluZXJcXFwiXFxyXFxuICAgICAgICA6Y2xhc3M9XFxcIntcXHJcXG4gICAgICAgICAgICBbYG1vbnRoLXBpY2tlci0tJHt2YXJpYW50fWBdOiB0cnVlLFxcclxcbiAgICAgICAgICAgICd5ZWFyLXBpY2tlcic6IHllYXJPbmx5LFxcclxcbiAgICAgICAgfVxcXCJcXHJcXG4gICAgPlxcclxcbiAgICAgICAgPGRpdiB2LWlmPVxcXCJzaG93WWVhclxcXCIgY2xhc3M9XFxcIm1vbnRoLXBpY2tlcl9feWVhclxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIEBjbGljaz1cXFwiY2hhbmdlWWVhcigtMSlcXFwiPiZsc2FxdW87PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPHAgdi1pZj1cXFwiIWVkaXRhYmxlWWVhclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIHt7IHllYXIgfX1cXHJcXG4gICAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgICAgPGlucHV0XFxyXFxuICAgICAgICAgICAgICAgIHYtZWxzZVxcclxcbiAgICAgICAgICAgICAgICB2LW1vZGVsLm51bWJlcj1cXFwieWVhclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cXFwib25DaGFuZ2UoKVxcXCJcXHJcXG4gICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBAY2xpY2s9XFxcImNoYW5nZVllYXIoKzEpXFxcIj4mcnNhcXVvOzwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IHYtaWY9XFxcIiF5ZWFyT25seVxcXCIgY2xhc3M9XFxcIm1vbnRoLXBpY2tlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdlxcclxcbiAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKG1vbnRoLCBtb250aEluZGV4KSBpbiBtb250aHNCeUxhbmdcXFwiXFxyXFxuICAgICAgICAgICAgICAgIDprZXk9XFxcIm1vbnRoXFxcIlxcclxcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIntcXHJcXG4gICAgICAgICAgICAgICAgICAgIGluYWN0aXZlOiBpc0luYWN0aXZlKG1vbnRoKSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogY2xlYXJhYmxlLFxcclxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgKGhpZ2hsaWdodEV4YWN0RGF0ZSAmJlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmFuZ2UgJiZcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1llYXIgJiZcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE1vbnRoSW5kZXggPT09IG1vbnRoSW5kZXggJiZcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhciA9PT0gc2VsZWN0ZWRZZWFyKSB8fFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICghcmFuZ2UgJiZcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNob3dZZWFyICYmXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNb250aEluZGV4ID09IG1vbnRoSW5kZXgpIHx8XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgKCFoaWdobGlnaHRFeGFjdERhdGUgJiZcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJhbmdlICYmXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNb250aEluZGV4ID09PSBtb250aEluZGV4KSxcXHJcXG4gICAgICAgICAgICAgICAgfVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1vbnRoLXBpY2tlcl9fbW9udGhcXFwiXFxyXFxuICAgICAgICAgICAgICAgIEBjbGljaz1cXFwic2VsZWN0TW9udGgobW9udGhJbmRleCwgdHJ1ZSlcXFwiXFxyXFxuICAgICAgICAgICAgPlxcclxcbiAgICAgICAgICAgICAgICB7eyBtb250aCB9fVxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG5pbXBvcnQgbGFuZ3VhZ2VzIGZyb20gJy4vbGFuZ3VhZ2VzJ1xcclxcbmltcG9ydCBtb250aFBpY2tlciBmcm9tICcuL21vbnRoLXBpY2tlcidcXHJcXG5cXHJcXG5leHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIG5hbWU6ICdNb250aFBpY2tlcicsXFxyXFxuICAgIG1peGluczogW21vbnRoUGlja2VyXSxcXHJcXG4gICAgZW1pdHM6IFsnY2hhbmdlJywgJ2NsZWFyJywgJ2lucHV0JywgJ2NoYW5nZS15ZWFyJ10sXFxyXFxuICAgIGRhdGE6ICgpID0+ICh7XFxyXFxuICAgICAgICBjdXJyZW50TW9udGhJbmRleDogbnVsbCxcXHJcXG4gICAgICAgIGZpcnN0UmFuZ2VNb250aEluZGV4OiBudWxsLFxcclxcbiAgICAgICAgc2Vjb25kUmFuZ2VNb250aEluZGV4OiBudWxsLFxcclxcbiAgICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxcclxcbiAgICAgICAgc2VsZWN0ZWRZZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXFxyXFxuICAgIH0pLFxcclxcbiAgICBjb21wdXRlZDoge1xcclxcbiAgICAgICAgY3VycmVudE1vbnRoOiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vbnRoSW5kZXggIT09IG51bGwpIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9udGhzQnlMYW5nW3RoaXMuY3VycmVudE1vbnRoSW5kZXhdXFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHJldHVybiBudWxsXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZmlyc3RSYW5nZW1vbnRoOiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RSYW5nZU1vbnRoSW5kZXggIT09IG51bGwpIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9udGhzQnlMYW5nW3RoaXMuZmlyc3RSYW5nZU1vbnRoSW5kZXhdXFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHJldHVybiBudWxsXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgc2Vjb25kUmFuZ2Vtb250aDogZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgICAgIGlmICh0aGlzLnNlY29uZFJhbmdlTW9udGhJbmRleCAhPT0gbnVsbCkge1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tb250aHNCeUxhbmdbdGhpcy5zZWNvbmRSYW5nZU1vbnRoSW5kZXhdXFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHJldHVybiBudWxsXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZGF0ZTogZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gdGhpcy5tb250aHNCeUxhbmcuaW5kZXhPZih0aGlzLmN1cnJlbnRNb250aCkgKyAxXFxyXFxuICAgICAgICAgICAgbGV0IGRhdGVGcm9tID0gbmV3IERhdGUoYCR7dGhpcy55ZWFyfS8ke21vbnRofS8wMWApXFxyXFxuICAgICAgICAgICAgbGV0IGRhdGVUbyA9IG5ldyBEYXRlKHRoaXMueWVhciwgbW9udGgsIDEpXFxyXFxuXFxyXFxuICAgICAgICAgICAgY29uc3QgZGF0ZVJlc3VsdCA9IHtcXHJcXG4gICAgICAgICAgICAgICAgZnJvbTogZGF0ZUZyb20sXFxyXFxuICAgICAgICAgICAgICAgIHRvOiBkYXRlVG8sXFxyXFxuICAgICAgICAgICAgICAgIG1vbnRoOiB0aGlzLm1vbnRoc0J5TGFuZ1ttb250aCAtIDFdLFxcclxcbiAgICAgICAgICAgICAgICBtb250aEluZGV4OiBtb250aCxcXHJcXG4gICAgICAgICAgICAgICAgeWVhcjogdGhpcy55ZWFyLFxcclxcbiAgICAgICAgICAgICAgICByYW5nZUZyb206IG51bGwsXFxyXFxuICAgICAgICAgICAgICAgIHJhbmdlVG86IG51bGwsXFxyXFxuICAgICAgICAgICAgICAgIHJhbmdlRnJvbU1vbnRoOiBudWxsLFxcclxcbiAgICAgICAgICAgICAgICByYW5nZVRvTW9udGg6IG51bGwsXFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIGlmICh0aGlzLnJhbmdlKSB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoUmFuZ2VGcm9tID1cXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGhzQnlMYW5nLmluZGV4T2YodGhpcy5maXJzdFJhbmdlTW9udGhJbmRleCkgKyAxXFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoUmFuZ2VUbyA9XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoc0J5TGFuZy5pbmRleE9mKHRoaXMuc2Vjb25kUmFuZ2VNb250aEluZGV4KSArIDFcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgZGF0ZUZyb20gPSBuZXcgRGF0ZShgJHt0aGlzLnllYXJ9LyR7bW9udGhSYW5nZUZyb219LzAxYClcXHJcXG4gICAgICAgICAgICAgICAgZGF0ZVRvID0gbmV3IERhdGUoYCR7dGhpcy55ZWFyfS8ke21vbnRoUmFuZ2VUb30vMDFgKVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBkYXRlUmVzdWx0LnJhbmdlRnJvbSA9IHRoaXMuZmlyc3RSYW5nZU1vbnRoSW5kZXhcXHJcXG4gICAgICAgICAgICAgICAgZGF0ZVJlc3VsdC5yYW5nZVRvID0gdGhpcy5zZWNvbmRSYW5nZU1vbnRoSW5kZXhcXHJcXG4gICAgICAgICAgICAgICAgZGF0ZVJlc3VsdC5yYW5nZUZyb21Nb250aCA9XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoc0J5TGFuZ1t0aGlzLmZpcnN0UmFuZ2VNb250aEluZGV4XVxcclxcbiAgICAgICAgICAgICAgICBkYXRlUmVzdWx0LnJhbmdlVG9Nb250aCA9XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoc0J5TGFuZ1t0aGlzLnNlY29uZFJhbmdlTW9udGhJbmRleF1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgcmV0dXJuIGRhdGVSZXN1bHRcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgIH0sXFxyXFxuICAgIHdhdGNoOiB7XFxyXFxuICAgICAgICBkZWZhdWx0TW9udGgobmV3VmFsKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9udGhJbmRleCA9IG5ld1ZhbCAtIDFcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBkZWZhdWx0WWVhcihuZXdWYWwpIHtcXHJcXG4gICAgICAgICAgICB0aGlzLnllYXIgPSBuZXdWYWxcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgIH0sXFxyXFxuICAgIG1vdW50ZWQoKSB7XFxyXFxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0WWVhcikge1xcclxcbiAgICAgICAgICAgIHRoaXMueWVhciA9IHRoaXMuZGVmYXVsdFllYXJcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGlmICh0aGlzLnJhbmdlKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy5zZXREZWZhdWx0TW9udGhSYW5nZSgpXFxyXFxuICAgICAgICAgICAgcmV0dXJuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0TW9udGgpIHtcXHJcXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vbnRoKHRoaXMuZGVmYXVsdE1vbnRoIC0gMSlcXHJcXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMubm9EZWZhdWx0KSB7XFxyXFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb250aCgwKVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICBvbkNoYW5nZSgpIHtcXHJcXG4gICAgICAgICAgICBpZiAoIU51bWJlci5wYXJzZUludCh0aGlzLnllYXIpKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMueWVhciA9IHRoaXMuZGVmYXVsdFllYXIgfHwgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMuZGF0ZSlcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBzZWxlY3RNb250aChpbmRleCwgaW5wdXQgPSBmYWxzZSkge1xcclxcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW5hY3RpdmUoaW5kZXgpKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVyblxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBpZiAodGhpcy5yYW5nZSkge1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RNb250aFJhbmdlKGluZGV4LCBpbnB1dClcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgY29uc3QgaXNBbHJlYWR5U2VsZWN0ZWQgPSB0aGlzLmN1cnJlbnRNb250aEluZGV4ID09PSBpbmRleFxcclxcbiAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyYWJsZSAmJiBpc0FscmVhZHlTZWxlY3RlZCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb250aEluZGV4ID0gbnVsbFxcclxcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGVhcicpXFxyXFxuICAgICAgICAgICAgICAgIHJldHVyblxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBpZiAodGhpcy5pc0FscmVhZHlTZWxlY3RlZCkge1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm5cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9udGhJbmRleCA9IGluZGV4XFxyXFxuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSgpXFxyXFxuXFxyXFxuICAgICAgICAgICAgaWYgKGlucHV0KSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy5kYXRlKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBzZWxlY3RNb250aFJhbmdlKGluZGV4LCBpbnB1dCkge1xcclxcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0UmFuZ2VNb250aEluZGV4ID09PSBudWxsKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RSYW5nZU1vbnRoSW5kZXggPSBpbmRleFxcclxcbiAgICAgICAgICAgICAgICByZXR1cm5cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgaWYgKFxcclxcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0UmFuZ2VNb250aEluZGV4ICE9PSBudWxsICYmXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kUmFuZ2VNb250aEluZGV4ICE9PSBudWxsXFxyXFxuICAgICAgICAgICAgKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RSYW5nZU1vbnRoSW5kZXggPSBpbmRleFxcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlY29uZFJhbmdlTW9udGhJbmRleCA9IG51bGxcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuXFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSB0aGlzLmZpcnN0UmFuZ2VNb250aEluZGV4KSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kUmFuZ2VNb250aEluZGV4ID0gaW5kZXhcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSgpXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmIChpbnB1dCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmRhdGUpXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuXFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHRoaXMuZmlyc3RSYW5nZU1vbnRoSW5kZXggPSBpbmRleFxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHNldERlZmF1bHRNb250aFJhbmdlKCkge1xcclxcbiAgICAgICAgICAgIGlmIChcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0TW9udGhSYW5nZSA9PT0gbnVsbCB8fFxcclxcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRNb250aFJhbmdlLmxlbmd0aCAhPT0gMlxcclxcbiAgICAgICAgICAgICkge1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm5cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgY29uc3QgW2ZpcnN0UmFuZ2UsIHNlY29uZFJhbmdlXSA9IHRoaXMuZGVmYXVsdE1vbnRoUmFuZ2VcXHJcXG4gICAgICAgICAgICBpZiAoc2Vjb25kUmFuZ2UgPD0gZmlyc3RSYW5nZSkge1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm5cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgdGhpcy5maXJzdFJhbmdlTW9udGhJbmRleCA9IGZpcnN0UmFuZ2VcXHJcXG4gICAgICAgICAgICB0aGlzLnNlY29uZFJhbmdlTW9udGhJbmRleCA9IHNlY29uZFJhbmdlXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY2hhbmdlWWVhcih2YWx1ZSkge1xcclxcbiAgICAgICAgICAgIHRoaXMueWVhciArPSB2YWx1ZVxcclxcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW5hY3RpdmUodmFsdWUpKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVyblxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKClcXHJcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UteWVhcicsIHRoaXMueWVhcilcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBpc0luYWN0aXZlKG1vbnRoKSB7XFxyXFxuICAgICAgICAgICAgbGV0IG1vbnRoVmFsdWUgPSBtb250aFxcclxcbiAgICAgICAgICAgIGlmICh0aGlzLm1pbkRhdGUgPT09IG51bGwgJiYgdGhpcy5tYXhEYXRlID09PSBudWxsKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihtb250aFZhbHVlKSkge1xcclxcbiAgICAgICAgICAgICAgICBtb250aFZhbHVlID0gdGhpcy5tb250aHNCeUxhbmdbbW9udGhWYWx1ZV1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgY29uc3QgbW9udGhLZXkgPSB0aGlzLm1vbnRoc0J5TGFuZy5pbmRleE9mKG1vbnRoVmFsdWUpICsgMVxcclxcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShgJHt0aGlzLnllYXJ9LyR7bW9udGhLZXl9LzAxYClcXHJcXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkRGF0ZSA9IChkYXRlKSA9PiBkYXRlICE9PSBudWxsICYmIGRhdGUgaW5zdGFuY2VvZiBEYXRlXFxyXFxuXFxyXFxuICAgICAgICAgICAgaWYgKGlzVmFsaWREYXRlKHRoaXMubWluRGF0ZSkgJiYgZGF0ZSA8IHRoaXMubWluRGF0ZSkge1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBpZiAoaXNWYWxpZERhdGUodGhpcy5tYXhEYXRlKSAmJiBkYXRlID4gdGhpcy5tYXhEYXRlKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgfSxcXHJcXG59XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlPlxcclxcbi5tb250aC1waWNrZXJfX2NvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxcclxcbiAgICAgICAgaW5zZXQgMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb250aC1waWNrZXJfX2NvbnRhaW5lci55ZWFyLXBpY2tlciB7XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlcl9feWVhciB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcXHJcXG4gICAgICAgIGluc2V0IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlcl9feWVhciBwIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlcl9feWVhciBpbnB1dCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlcl9feWVhciBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NWIwZjI7XFxyXFxufVxcclxcblxcclxcbi5tb250aC1waWNrZXJfX3llYXIgZGl2LFxcclxcbi5tb250aC1waWNrZXJfX3llYXIgYnV0dG9uLFxcclxcbi5tb250aC1waWNrZXJfX3llYXIgcCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlcl9feWVhciBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiA1cmVtO1xcclxcbiAgICBoZWlnaHQ6IDIuNzVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHRvcDogMC41cmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBjb2xvcjogIzY4Njg2ODtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlcl9feWVhciBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlcl9feWVhciBidXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlcl9feWVhciBidXR0b246Zmlyc3QtY2hpbGQge1xcclxcbiAgICBsZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9udGgtcGlja2VyX195ZWFyIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb250aC1waWNrZXJfX21vbnRoIHtcXHJcXG4gICAgcGFkZGluZzogMC44NXJlbSAwLjI1cmVtO1xcclxcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDMzLjMzMyUgLSAxMHB4KTtcXHJcXG4gICAgcGFkZGluZzogMC43NXJlbSAwLjI1cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjc1KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5tb250aC1waWNrZXJfX21vbnRoOmhvdmVyOjphZnRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogOTUlO1xcclxcbiAgICBoZWlnaHQ6IDk1JTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbi5tb250aC1waWNrZXJfX21vbnRoLnNlbGVjdGVkLFxcclxcbi5tb250aC1waWNrZXJfX21vbnRoLnNlbGVjdGVkLXJhbmdlLWZpcnN0LFxcclxcbi5tb250aC1waWNrZXJfX21vbnRoLnNlbGVjdGVkLXJhbmdlLXNlY29uZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWIwZjI7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzM0OTBkMiwgMHB4IDJweCA1cHggcmdiYSg4NSwgMTc2LCAyNDIsIDAuMik7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlcl9fbW9udGguc2VsZWN0ZWQtcmFuZ2UtZmlyc3QsXFxyXFxuLm1vbnRoLXBpY2tlcl9fbW9udGguc2VsZWN0ZWQtcmFuZ2Utc2Vjb25kIHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlcl9fbW9udGguc2VsZWN0ZWQtcmFuZ2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ViOWUyO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlcl9fbW9udGguaW5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbiAgICBjb2xvcjogIzhhOGE4YTtcXHJcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb250aC1waWNrZXJfX21vbnRoLmluYWN0aXZlOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRGFyayB0aHJlbWUgKi9cXHJcXG4ubW9udGgtcGlja2VyLS1kYXJrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNWY1ZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlci0tZGFyayAubW9udGgtcGlja2VyX195ZWFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmYzMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlci0tZGFyayAubW9udGgtcGlja2VyX195ZWFyIHAsXFxyXFxuLm1vbnRoLXBpY2tlci0tZGFyayAubW9udGgtcGlja2VyX195ZWFyIGlucHV0IHtcXHJcXG4gICAgY29sb3I6ICNlYmViZWI7XFxyXFxufVxcclxcblxcclxcbi5tb250aC1waWNrZXItLWRhcmsgLm1vbnRoLXBpY2tlcl9feWVhciBpbnB1dCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjVmNWY7XFxyXFxufVxcclxcblxcclxcbi5tb250aC1waWNrZXItLWRhcmsgLm1vbnRoLXBpY2tlcl9feWVhciBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MDUwO1xcclxcbiAgICBjb2xvcjogI2M5YzljOTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjMWUxZTFlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9udGgtcGlja2VyLS1kYXJrIC5tb250aC1waWNrZXJfX3llYXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9udGgtcGlja2VyLS1kYXJrIC5tb250aC1waWNrZXJfX3llYXIgYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlci0tZGFyayAubW9udGgtcGlja2VyX19tb250aCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjJmMzA7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjE1KTtcXHJcXG4gICAgY29sb3I6ICNjOWM5Yzk7XFxyXFxufVxcclxcblxcclxcbi5tb250aC1waWNrZXItLWRhcmsgLm1vbnRoLXBpY2tlcl9fbW9udGguc2VsZWN0ZWQsXFxyXFxuLm1vbnRoLXBpY2tlci0tZGFyayAubW9udGgtcGlja2VyX19tb250aC5zZWxlY3RlZC1yYW5nZS1maXJzdCxcXHJcXG4ubW9udGgtcGlja2VyLS1kYXJrIC5tb250aC1waWNrZXJfX21vbnRoLnNlbGVjdGVkLXJhbmdlLXNlY29uZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzUwNTA1MCwgMHB4IDJweCA1cHggIzUwNTA1MDtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzFkMWIxYjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRoLXBpY2tlci0tZGFyayAubW9udGgtcGlja2VyX19tb250aC5zZWxlY3RlZC1yYW5nZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MzYzNjM7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9udGgtcGlja2VyLS1kYXJrIC5tb250aC1waWNrZXJfX21vbnRoOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9udGgtcGlja2VyLS1kYXJrIC5tb250aC1waWNrZXJfX21vbnRoLmluYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmM2YzZjtcXHJcXG4gICAgY29sb3I6ICM4YThhOGE7XFxyXFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIC5tb250aC1waWNrZXJfX2NvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJjbGljay1vdXRzaWRlXCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LWNsaWNrLW91dHNpZGVcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLmhpZGUsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJoaWRlXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1vbnRoLXBpY2tlci1pbnB1dC1jb250YWluZXJcIlxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWREYXRlLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZERhdGVcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9udGgtcGlja2VyLWlucHV0XCIsXG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogX3ZtLnBsYWNlaG9sZGVyLCByZWFkb25seTogXCJcIiB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNlbGVjdGVkRGF0ZSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd01vbnRoUGlja2VyKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF92bS5zZWxlY3RlZERhdGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIm1vbnRoLXBpY2tlclwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1vbnRoUGlja2VyVmlzaWJsZSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9udGhQaWNrZXJWaXNpYmxlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJkZWZhdWx0LXllYXJcIjogX3ZtLmRlZmF1bHRZZWFyLFxuICAgICAgICAgIFwiZGVmYXVsdC1tb250aFwiOiBfdm0uZGVmYXVsdE1vbnRoLFxuICAgICAgICAgIGxhbmc6IF92bS5sYW5nLFxuICAgICAgICAgIG1vbnRoczogX3ZtLm1vbnRocyxcbiAgICAgICAgICBcIm5vLWRlZmF1bHRcIjogX3ZtLm5vRGVmYXVsdCxcbiAgICAgICAgICBcInNob3cteWVhclwiOiBfdm0uc2hvd1llYXIsXG4gICAgICAgICAgXCJoaWdobGlnaHQtZXhhY3QtZGF0ZVwiOiBfdm0uaGlnaGxpZ2h0RXhhY3REYXRlLFxuICAgICAgICAgIGNsZWFyYWJsZTogX3ZtLmNsZWFyYWJsZSxcbiAgICAgICAgICB2YXJpYW50OiBfdm0udmFyaWFudCxcbiAgICAgICAgICBcImVkaXRhYmxlLXllYXJcIjogX3ZtLmVkaXRhYmxlWWVhcixcbiAgICAgICAgICBcIm1heC1kYXRlXCI6IF92bS5tYXhEYXRlLFxuICAgICAgICAgIFwibWluLWRhdGVcIjogX3ZtLm1pbkRhdGUsXG4gICAgICAgICAgXCJ5ZWFyLW9ubHlcIjogX3ZtLnllYXJPbmx5LFxuICAgICAgICAgIHJhbmdlOiBfdm0ucmFuZ2VcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgaW5wdXQ6IF92bS5wb3B1bGF0ZUlucHV0LCBjaGFuZ2U6IF92bS51cGRhdGVEYXRlIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTNmNmYwMmVjXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfb2JqXG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibW9udGgtcGlja2VyX19jb250YWluZXJcIixcbiAgICAgIGNsYXNzOlxuICAgICAgICAoKF9vYmogPSB7fSksXG4gICAgICAgIChfb2JqW1wibW9udGgtcGlja2VyLS1cIiArIF92bS52YXJpYW50XSA9IHRydWUpLFxuICAgICAgICAoX29ialtcInllYXItcGlja2VyXCJdID0gX3ZtLnllYXJPbmx5KSxcbiAgICAgICAgX29iailcbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5zaG93WWVhclxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9udGgtcGlja2VyX195ZWFyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VZZWFyKC0xKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuKAuVwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgIV92bS5lZGl0YWJsZVllYXJcbiAgICAgICAgICAgICAgPyBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnllYXIpICsgXCJcXG4gICAgICAgIFwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ueWVhcixcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInllYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHsgbnVtYmVyOiB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnllYXIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNoYW5nZSgpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBfdm0ueWVhciA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBibHVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVllYXIoKzEpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi4oC6XCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS55ZWFyT25seVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9udGgtcGlja2VyXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ubW9udGhzQnlMYW5nLCBmdW5jdGlvbihtb250aCwgbW9udGhJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IG1vbnRoLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9udGgtcGlja2VyX19tb250aFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5hY3RpdmU6IF92bS5pc0luYWN0aXZlKG1vbnRoKSxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiBfdm0uY2xlYXJhYmxlLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDpcbiAgICAgICAgICAgICAgICAgICAgICAoX3ZtLmhpZ2hsaWdodEV4YWN0RGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5yYW5nZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dZZWFyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudE1vbnRoSW5kZXggPT09IG1vbnRoSW5kZXggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS55ZWFyID09PSBfdm0uc2VsZWN0ZWRZZWFyKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICghX3ZtLnJhbmdlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnNob3dZZWFyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudE1vbnRoSW5kZXggPT0gbW9udGhJbmRleCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAoIV92bS5oaWdobGlnaHRFeGFjdERhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ucmFuZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50TW9udGhJbmRleCA9PT0gbW9udGhJbmRleClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RNb250aChtb250aEluZGV4LCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MobW9udGgpICsgXCJcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01ODg2YmM1MFwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb250aFBpY2tlci52dWVcIilcbn1cbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Nb250aFBpY2tlci52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTW9udGhQaWNrZXIudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTg4NmJjNTBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Nb250aFBpY2tlci52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlc1xcXFx2dWUtbW9udGgtcGlja2VyXFxcXHNyY1xcXFxNb250aFBpY2tlci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTg4NmJjNTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ODg2YmM1MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTNmNmYwMmVjXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb250aFBpY2tlcklucHV0LnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01vbnRoUGlja2VySW5wdXQudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01vbnRoUGlja2VySW5wdXQudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2Y2ZjAyZWNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL01vbnRoUGlja2VySW5wdXQudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTNmNmYwMmVjXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXNcXFxcdnVlLW1vbnRoLXBpY2tlclxcXFxzcmNcXFxcTW9udGhQaWNrZXJJbnB1dC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtM2Y2ZjAyZWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zZjZmMDJlY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iLCJpbXBvcnQgTW9udGhQaWNrZXIgZnJvbSAnLi9Nb250aFBpY2tlci52dWUnXHJcbmltcG9ydCBNb250aFBpY2tlcklucHV0IGZyb20gJy4vTW9udGhQaWNrZXJJbnB1dC52dWUnXHJcblxyXG5mdW5jdGlvbiBwbHVnaW4gKFZ1ZSkge1xyXG4gIFZ1ZS5jb21wb25lbnQoJ21vbnRoLXBpY2tlcicsIE1vbnRoUGlja2VyKVxyXG4gIFZ1ZS5jb21wb25lbnQoJ21vbnRoLXBpY2tlci1pbnB1dCcsIE1vbnRoUGlja2VySW5wdXQpXHJcbn1cclxuXHJcbi8vIEluc3RhbGwgYnkgZGVmYXVsdCBpZiB1c2luZyB0aGUgc2NyaXB0IHRhZ1xyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xyXG4gIHdpbmRvdy5WdWUudXNlKHBsdWdpbilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXHJcblxyXG5leHBvcnQge1xyXG4gIE1vbnRoUGlja2VyLFxyXG4gIE1vbnRoUGlja2VySW5wdXRcclxufVxyXG4iLCIvLyBwcmV0dGllci1pZ25vcmVcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGFmOiBbJ0phbnVhcmllJywgJ0ZlYnJ1YXJpZScsICdNYWFydCcsICdBcHJpbCcsICdNZWknLCAnSnVuaWUnLCAnSnVsaWUnLCAnQXVndXN0dXMnLCAnU2VwdGVtYmVyJywgJ09rdG9iZXInLCAnTm92ZW1iZXInLCAnRGVzZW1iZXInXSxcclxuICBhcjogWyfZg9in2YbZiNmGINin2YTYq9in2YbZiicsICfYtNmH2LEg2YHYqNix2KfZitixJywgJ9mF2KfYsdizJywgJ9ij2KjYsdmK2YQnLCAn2YLYrycsICfZitmI2YbZitmIJywgJ9mK2YjZhNmK2YgnLCAn2KPYutiz2LfYsycsICfYs9io2KrZhdio2LEnLCAn2LTZh9ixINin2YPYqtmI2KjYsScsICfYtNmH2LEg2YbZiNmB2YXYqNixJywgJ9iv2YrYs9mF2KjYsSddLFxyXG4gIGNzOiBbJ0xlZGVuJywgJ8Oabm9yJywgJ0LFmWV6ZW4nLCAnRHViZW4nLCAnS3bEm3RlbicsICfEjGVydmVuJywgJ8SMZXJ2ZW5lYycsICdTcnBlbicsICdaw6HFmcOtJywgJ8WYw61qZW4nLCAnTGlzdG9wYWQnLCAnUHJvc2luZWMnXSxcclxuICBkYTogWydKYW51YXInLCAnRmVicnVhcicsICdNYXJ0cycsICdBcHJpbCcsICdNYWonLCAnSnVuaScsICdKdWxpJywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2t0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddLFxyXG4gIGRlOiBbJ0phbnVhcicsICdGZWJydWFyJywgJ03DpHJ6JywgJ0FwcmlsJywgJ01haScsICdKdW5pJywgJ0p1bGknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPa3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlemVtYmVyJ10sXHJcbiAgZWw6IFsnzpnOsc69zr/Phc6sz4HOuc6/z4InLCAnzqbOtc6yz4HOv8+FzqzPgc65zr/PgicsICfOnM6sz4HPhM65zr/PgicsICfOkc+Az4HOr867zrnOv8+CJywgJ86czqzOuc6/z4InLCAnzpnOv8+Nzr3Ouc6/z4InLCAnzpnOv8+NzrvOuc6/z4InLCAnzpHPjc6zzr/Phc+Dz4TOv8+CJywgJ86jzrXPgM+Ezq3OvM6yz4HOuc6/z4InLCAnzp/Ous+Ez47Oss+BzrnOv8+CJywgJ86dzr/Orc68zrLPgc65zr/PgicsICfOlM61zrrOrc68zrLPgc65zr/PgiddLFxyXG4gIGVuOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXSxcclxuICBlczogWydFbmVybycsICdGZWJyZXJvJywgJ01hcnpvJywgJ0FicmlsJywgJ01heW8nLCAnSnVuaW8nLCAnSnVsaW8nLCAnQWdvc3RvJywgJ1NlcHRpZW1icmUnLCAnT2N0dWJyZScsICdOb3ZpZW1icmUnLCAnRGljaWVtYnJlJ10sXHJcbiAgZXQ6IFsnSmFhbnVhcicsICdWZWVicnVhcicsICdNw6RydHMnLCAnQXByaWxsJywgJ01haScsICdKdXVuaScsICdKdXVsaScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09rdG9vYmVyJywgJ05vdmVtYmVyJywgJ0RldHNlbWJlciddLFxyXG4gIGZpOiBbJ1RhbW1pa3V1JywgJ0hlbG1pa3V1JywgJ01hYWxpc2t1dScsICdIdWh0aWt1dScsICdUb3Vrb2t1dScsICdLZXPDpGt1dScsICdIZWluw6RrdXUnLCAnRWxva3V1JywgJ1N5eXNrdXUnLCAnTG9rYWt1dScsICdNYXJyYXNrdXUnLCAnSm91bHVrdXUnXSxcclxuICBmcjogWydKYW52aWVyJywgJ0bDqXZyaWVyJywgJ01hcnMnLCAnQXZyaWwnLCAnTWFpJywgJ0p1aW4nLCAnSnVpbGxldCcsICdBb8O7dCcsICdTZXB0ZW1icmUnLCAnT2N0b2JyZScsICdOb3ZlbWJyZScsICdEw6ljZW1icmUnXSxcclxuICBoZTogWyfXmdeg15XXkNeoJywgJ9ek15HXqNeV15DXqCcsICfXnteo16UnLCAn15DXpNeo15nXnCcsICfXnteQ15knLCAn15nXldeg15knLCAn15nXldec15knLCAn15DXldeS15XXodeYJywgJ9eh16TXmNee15HXqCcsICfXkNeV16fXmNeV15HXqCcsICfXoNeV15HXnteR16gnLCAn15PXptee15HXqCddLFxyXG4gIGhpOiBbJ+CknOCkqOCkteCksOClgCAnLCAn4KSr4KS84KSw4KS14KSw4KWAJywgJ+CkruCkvuCksOCljeCkmicsICfgpIXgpKrgpY3gpLDgpYjgpLInLCAn4KSu4KSIJywgJ+CknOClguCkqCcsICfgpJzgpYHgpLLgpL7gpIgnLCAn4KSF4KSX4KS44KWN4KSkJywgJ+CkuOCkv+CkpOCkguCkrOCksCcsICfgpIXgpJXgpY3gpJ/gpYLgpKzgpLAnLCAn4KSo4KS14KSC4KSs4KSwJywgJ+CkpuCkv+CkuOCkruCljeCkrOCksCddLFxyXG4gIGhyOiBbJ1NpamXEjWFuaicsICdWZWxqYcSNYScsICdPxb51amFrJywgJ1RyYXZhbmonLCAnU3ZpYmFuaicsICdMaXBhbmonLCAnU3JwYW5qJywgJ0tvbG92b3onLCAnUnVqYW4nLCAnTGlzdG9wYWQnLCAnU3R1ZGVuaScsICdQcm9zaW5hYyddLFxyXG4gIGh1OiBbJ0phbnXDoXInLCAnRmVicnXDoXInLCAnTcOhcmNpdXMnLCAnw4FwcmlsaXMnLCAnTcOhanVzJywgJ0rDum5pdXMnLCAnSsO6bGl1cycsICdBdWd1c3p0dXMnLCAnU3plcHRlbWJlcicsICdPa3TDs2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddLFxyXG4gIGlkOiBbJ0phbnVhcmknLCAnRmVicnVhcmknLCAnTWFyZXQnLCAnQXByaWwnLCAnTWVpJywgJ0p1bmknLCAnSnVsaScsICdBZ3VzdHVzJywgJ1NlcHRlbWJlcicsICdPa3RvYmVyJywgJ05vdmVtYmVyJywgJ0Rlc2VtYmVyJ10sXHJcbiAgaXM6IFtcIkphbsO6YXJcIiwgXCJGZWJyw7phclwiLCBcIk1hcnNcIiwgXCJBcHLDrWxcIiwgXCJNYcOtXCIsIFwiSsO6bsOtXCIsIFwiSsO6bMOtXCIsIFwiw4Fnw7pzdFwiLCAnU2VwdGVtYmVyJywgJ09rdMOzYmVyJywgXCJOw7N2ZW1iZXJcIiwgXCJEZXNlbWJlclwiXSxcclxuICBpdDogWydHZW5uYWlvJywgJ0ZlYmJyYWlvJywgJ01hcnpvJywgJ0FwcmlsZScsICdNYWdnaW8nLCAnR2l1Z25vJywgJ0x1Z2xpbycsICdBZ29zdG8nLCAnU2V0dGVtYnJlJywgJ090dG9icmUnLCAnTm92ZW1icmUnLCAnRGljZW1icmUnXSxcclxuICBqYTogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxyXG4gIGttOiBbJ+GemOGegOGemuGeticsICfhnoDhnrvhnpjhn5Lhnpfhn4gnLCAn4Z6B4Z+C4Z6Y4Z644Z6T4Z62JywgJ+GemOGfgeGen+GeticsICfhnqfhnp/hnpfhnrYnLCAn4Z6Y4Z634Z6Q4Z674Z6T4Z62JywgJ+GegOGegOGfkuGegOGeiuGeticsICfhnp/hnrjhnqDhnrYnLCAn4Z6A4Z6J4Z+S4Z6J4Z62JywgJ+Gej+Geu+Gem+GeticsICfhnoHhn4LhnpzhnrfhnoXhn5LhnobhnrfhnoDhnrYnLCAn4Z6B4Z+C4Z6S4Z+S4Z6T4Z68J10sXHJcbiAga286IFtcIjHsm5RcIiwgXCIy7JuUXCIsIFwiM+yblFwiLCBcIjTsm5RcIiwgXCI17JuUXCIsIFwiNuyblFwiLCBcIjfsm5RcIiwgXCI47JuUXCIsIFwiOeyblFwiLCBcIjEw7JuUXCIsIFwiMTHsm5RcIiwgXCIxMuyblFwiXSxcclxuICBrdTogWydSw6piZW5kYW4nLCAnUmXFn2Vtw64nLCAnQWRhcicsICdBdnLDqmwnLCAnR3VsYW4nLCAnUMO7xZ9wZXInLCAnVMOucm1laCcsICdUZWJheCcsICfDjmxvbicsICdDb3RtZWgnLCAnTWlqZGFyJywgJ0JlcmZhbmJhciddLFxyXG4gIGx0OiBbJ1NhdXNpcycsICdWYXNhcmlzJywgJ0tvdmFzJywgJ0JhbGFuZGlzJywgJ0dlZ3XFvsSXJywgJ0JpcsW+ZWxpcycsICdMaWVwYScsICdSdWdwasWrdGlzJywgJ1J1Z3PEl2ppcycsICdTcGFsaXMnLCAnTGFwa3JpdGlzJywgJ0dydW9kaXMnXSxcclxuICBsdjogW1wiSmFudsSBcmlzXCIsIFwiRmVicnXEgXJpc1wiLCBcIk1hcnRzXCIsIFwiQXByxKtsaXNcIiwgXCJNYWlqc1wiLCAnSsWrbmlqcycsIFwiSsWrbGlqc1wiLCAnQXVndXN0cycsIFwiU2VwdGVtYnJpc1wiLCBcIk9rdG9icmlzXCIsIFwiTm92ZW1icmlzXCIsICdEZWNlbWJyaXMnXSxcclxuICBtczogWydKYW51YXJpJywgJ0ZlYnJ1YXJpJywgJ01hYycsICdBcHJpbCcsICdNZWknLCAnSnVuJywgJ0p1bGFpJywgJ09nb3MnLCAnU2VwdGVtYmVyJywgJ09rdG9iZXInLCAnTm92ZW1iZXInLCAnRGlzZW1iZXInXSxcclxuICBuZTogWyfgpJzgpKjgpLXgpLDgpYAnLCAn4KSr4KWH4KSs4KWN4KSw4KWB4KSF4KSw4KWAJywgJ+CkruCkvuCksOCljeCkmicsICfgpIXgpKrgpY3gpLDgpL/gpLInLCAn4KS44KSV4KWN4KSbJywgJ+CknOClgeCkqCcsICfgpJzgpYHgpLLgpL7gpIgnLCAn4KSF4KSX4KS44KWN4KSfJywgJ+CkuOClh+CkquCljeCkn+Clh+CkruCljeCkrOCksCcsICfgpIXgpJXgpY3gpJ/gpYvgpKzgpLAnLCAn4KSo4KWL4KSt4KWH4KSu4KWN4KSs4KSwJywgJ+CkoeCkv+CkuOClh+CkruCljeCkrOCksCddLFxyXG4gIG5sOiBbJ0phbnVhcmknLCAnRmVicnVhcmknLCAnTWFhcnQnLCAnQXByaWwnLCAnTWVpJywgJ0p1bmknLCAnSnVsaScsICdBdWd1c3R1cycsICdTZXB0ZW1iZXInLCAnT2t0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddLFxyXG4gIG5vOiBbJ0phbnVhcicsICdGZWJydWFyJywgJ01hcnMnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmknLCAnSnVsaScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09rdG9iZXInLCAnTm92ZW1iZXInLCAnRGVzZW1iZXInXSxcclxuICBwYTogWyfgqJzgqKjgqLXgqLDgqYAnLCAn4Kir4Kiw4Ki14Kiw4KmAJywgJ+CoruCovuCosOComicsICfgqIXgqKrgqY3gqLDgqYjgqLInLCAn4Kiu4KiIJywgJ+ConOCpguCoqCcsICfgqJzgqYHgqLLgqL7gqIgnLCAn4KiF4KiX4Ki44KikJywgJ+CouOCopOCpsOCorOCosCcsICfgqIXgqJXgqKTgqYLgqKzgqLAnLCAn4Kio4Ki14Kmw4Kis4KiwJywgJ+CopuCouOCpsOCorOCosCddLFxyXG4gIHBsOiBbJ1N0eWN6ZcWEJywgJ0x1dHknLCAnTWFyemVjJywgJ0t3aWVjaWXFhCcsICdNYWonLCAnQ3plcndpZWMnLCAnTGlwaWVjJywgJ1NpZXJwaWXFhCcsICdXcnplc2llxYQnLCAnUGHFumR6aWVybmlrJywgJ0xpc3RvcGFkJywgJ0dydWR6aWXFhCddLFxyXG4gIHB0OiBbJ0phbmVpcm8nLCAnRmV2ZXJlaXJvJywgJ01hcsOnbycsICdBYnJpbCcsICdNYWlvJywgJ0p1bmhvJywgJ0p1bGhvJywgJ0Fnb3N0bycsICdTZXRlbWJybycsICdPdXR1YnJvJywgJ05vdmVtYnJvJywgJ0RlemVtYnJvJ10sXHJcbiAgcm86IFsnSWFudWFyaWUnLCAnRmVicnVhcmllJywgJ01hcnRpZScsICdBcHJpbGllJywgJ01haScsICdJdW5pZScsICdJdWxpZScsICdBdWd1c3QnLCAnU2VwdGVtYnJpZScsICdPY3RvbWJyaWUnLCAnTm9pZW1icmllJywgJ0RlY2VtYnJpZSddLFxyXG4gIHJ1OiBbJ9Cv0L3QstCw0YDRjCcsICfQpNC10LLRgNCw0LvRjCcsICfQnNCw0YDRgicsICfQkNC/0YDQtdC70YwnLCAn0JzQsNC5JywgJ9CY0Y7QvdGMJywgJ9CY0Y7Qu9GMJywgJ9CQ0LLQs9GD0YHRgicsICfQodC10L3RgtGP0LHRgNGMJywgJ9Ce0LrRgtGP0LHRgNGMJywgJ9Cd0L7Rj9Cx0YDRjCcsICfQlNC10LrQsNCx0YDRjCddLFxyXG4gIHN2OiBbJ0phbnVhcmknLCAnRmVicnVhcmknLCAnTWFycycsICdBcHJpbCcsICdNYWonLCAnSnVuaScsICdKdWxpJywgJ0F1Z3VzdGknLCAnU2VwdGVtYmVyJywgJ09rdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXSxcclxuICBzazogWydKYW51w6FyJywgJ0ZlYnJ1w6FyJywgJ01hcmVjJywgJ0FwcsOtbCcsICdNw6FqJywgJ0rDum4nLCAnSsO6bCcsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09rdMOzYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ10sXHJcbiAgc2w6IFsnSmFudWFyJywgXCJGZWJydWFyXCIsIFwiTWFyZWNcIiwgXCJBcHJpbFwiLCBcIk1halwiLCAnSnVuaWonLCBcIkp1bGlqXCIsIFwiQXZndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2t0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXHJcbiAgc3I6IFsnSmFudWFyJywgXCJGZWJydWFyXCIsIFwiTWFydFwiLCBcIkFwcmlsXCIsIFwiTWFqXCIsICdKdW4nLCBcIkp1bFwiLCBcIkF2Z3VzdFwiLCBcIlNlcHRlbWJhclwiLCBcIk9rdG9iYXJcIiwgXCJOb3ZlbWJhclwiLCBcIkRlY2VtYmFyXCJdLFxyXG4gIHNvOiBbJ0phbmFheW8nLCAnRmVicmFheW8nLCAnTWFhcnNvJywgJ0FicmlpbCcsICdMYWdhIHlhYWJhYScsICdKdXVuJywgJ0p1bHknLCAnQWdvb3N0bycsICdTZWJ0ZW1iYXInLCAnT2t0b29iYXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXSxcclxuICBzcTogWydKYW5hcicsICdTaGt1cnQnLCAnTWFyc2gnLCAnUHJpbGwnLCAnTXVuZCcsICdRZXJzaG9yJywgJ0tvcnJpaycsICdHdXNodCcsICdTaHRhdG9yJywgJ1RldG9yJywgJ07Dq250b3InLCAnRGhqZXRvciddLFxyXG4gIHRoOiBbJ+C4oeC4geC4o+C4suC4hOC4oScsICfguIHguLjguKHguKDguLLguJ7guLHguJnguJjguYwnLCAn4Lih4Li14LiZ4Liy4LiE4LihJywgJ+C5gOC4oeC4qeC4suC4ouC4mScsICfguJ7guKTguKnguKDguLLguITguKEnLCAn4Lih4Li04LiW4Li44LiZ4Liy4Lii4LiZJywgJ+C4geC4o+C4geC4juC4suC4hOC4oScsICfguKrguLTguIfguKvguLLguITguKEnLCAn4LiB4Lix4LiZ4Lii4Liy4Lii4LiZJywgJ+C4leC4uOC4peC4suC4hOC4oScsICfguJ7guKTguKjguIjguLTguIHguLLguKLguJknLCAn4LiY4Lix4LiZ4Lin4Liy4LiE4LihJ10sXHJcbiAgdHI6IFsnT2NhaycsICfFnnViYXQnLCAnTWFydCcsICdOaXNhbicsICdNYXnEsXMgYXnEsScsICdIYXppcmFuJywgJ1RlbW11eicsICdBxJ91c3RvcycsICdFeWzDvGwnLCAnRWtpbScsICdLYXPEsW0nLCAnQXJhbMSxayddLFxyXG4gIHVrOiBbXCLQodGW0YfQtdC90YxcIiwgXCLQm9GO0YLQuNC5XCIsIFwi0JHQtdGA0LXQt9C10L3RjFwiLCBcItCa0LLRltGC0LXQvdGMXCIsICfQnNC+0LbQtScsIFwi0KfQtdGA0LLQtdC90YxcIiwgXCLQm9C40L/QtdC90YxcIiwgXCLQodC10YDQv9C10L3RjFwiLCAn0JLQtdGA0LXRgdC10L3RjCcsIFwi0JbQvtCy0YLQtdC90YxcIiwgJ9Cb0LjRgdGC0L7Qv9Cw0LQnLCAn0JPRgNGD0LTQtdC90YwnXSxcclxuICB1cjogWyfYrNmG2YjYsduMJywgJ9mB2LHZiNix24wnLCAn2YXYp9ix2oYnLCAn2KfZvtix24zZhCcsICfZhdim24wnLCAn2KzZiNmGJywgJ9is2YjZhNin2KbbjCcsICfYp9qv2LPYqicsICfYs9iq2YXYqNixJywgJ9in2qnYqtmI2KjYsScsICfZhtmI2YXYqNixJywgJ9iv2LPZhdio2LEnXSxcclxuICB2aTogWydUaMOhbmcgbeG7mXQnLCAnVGjDoW5nIGhhaScsICdUaMOhbmcgYmEnLCAnVGjDoW5nIHTGsCcsICdUaMOhbmcgbsSDbScsICdUaMOhbmcgc8OhdScsICdUaMOhbmcgYuG6o3knLCAnVGjDoW5nIHTDoW0nLCAnVGjDoW5nIGNow61uJywgJ1Row6FuZyBtxrDhu51pJywgJ1Row6FuZyBtxrDhu51pIG3hu5l0JywgJ1Row6FuZyBtxrDhu51pIGhhaSddLFxyXG4gIHlpOiBbJ9eZ15DXoNeV15DXqCcsICfXpNei15HXqNeV15DWt9eoJywgJ9ee15DWt9eo16UnLCAn15DXpNeo15nXnCcsICfXnteZ15nWtycsICfXmdeV16DXmScsICfXmdeV15zXmScsICfXkNeV15nXkteV16HXmCcsICfXodei16TXmNei157Xkdei16gnLCAn15DXp9eY15DXkdei16gnLCAn16DXkNeV15XXotee15HXoteoJywgJ9eT16LXptei157Xkdei16gnXSxcclxuICB6aDogWyfkuIDmnIgnLCAn5LqM5pyIJywgJ+S4ieaciCcsICflm5vmnIgnLCAn5LqU5pyIJywgJ+WFreaciCcsICfkuIPmnIgnLCAn5YWr5pyIJywgJ+S5neaciCcsICfljYHmnIgnLCAn5Y2B5LiA5pyIJywgJ+WNgeS6jOaciCddLFxyXG4gIHp1OiBbJ0phbnV3YXJpJywgJ0ZlYmh1d2FyaScsICdNYXNoaScsICdBcHJpbCcsICdLd2FuZ2F0aGknLCAnSnVuaScsICdKdWxheWknLCAnQWdhc3RpJywgJ1NlcHRlbWJlcicsICdPa3Rob2JhJywgJ05vdmVtYmEnLCAnRGVjZW1iZXInXSxcclxuICB0bTogWyfgrpzgrqngrrXgrrDgrr8nLCAn4K6q4K6/4K6q4K+N4K6w4K614K6w4K6/JywgJ+CuruCuvuCusOCvjeCumuCvjScsICfgro/grqrgr43grrDgrrLgr40nLCAn4K6u4K+HJywgJ+CunOCvguCuqeCvjScsICfgrpzgr4LgrrLgr4gnLCAn4K6G4K6V4K644K+N4K6f4K+NJywgJ+CumuCvhuCuquCvjeCun+CuruCvjeCuquCusOCvjScsICfgroXgrpXgr43grp/gr4vgrqrgrrDgr40nLCAn4K6o4K614K6u4K+N4K6q4K6w4K+NJywgJ+Cun+Cuv+CumuCuruCvjeCuquCusOCvjSddXHJcbn1cclxuIiwiaW1wb3J0IGxhbmd1YWdlcyBmcm9tICcuL2xhbmd1YWdlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbGFuZzoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdlbicsXHJcbiAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobGFuZ3VhZ2VzKS5zb21lKChsKSA9PiBPYmplY3QuaXMobCwgdmFsdWUpKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb250aHM6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAxMlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWZhdWx0TW9udGg6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWZhdWx0WWVhcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dZZWFyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVkaXRhYmxlWWVhcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeWVhck9ubHk6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vRGVmYXVsdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJhYmxlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtaW5EYXRlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IERhdGUsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1heERhdGU6IHtcclxuICAgICAgICAgICAgdHlwZTogRGF0ZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlucHV0UHJlRmlsbGVkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVmYXVsdE1vbnRoUmFuZ2U6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZS5sZW5ndGggIT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBbZmlyc3RSYW5nZSwgc2Vjb25kUmFuZ2VdID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIGlmIChzZWNvbmRSYW5nZSA8PSBmaXJzdFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhcmlhbnQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbJ2RlZmF1bHQnLCAnZGFyayddLmluY2x1ZGVzKHZhbHVlKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZUZvcm1hdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICclbiwgJVknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlnaGxpZ2h0RXhhY3REYXRlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIG1vbnRoc0J5TGFuZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb250aHMgIT09IG51bGwgJiYgdGhpcy5tb250aHMubGVuZ3RoID09PSAxMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9udGhzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlc1t0aGlzLmxhbmddXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn1cclxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2Y2ZjAyZWNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vbnRoUGlja2VySW5wdXQudnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNjc1MjkxMWVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2Y2ZjAyZWNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vbnRoUGlja2VySW5wdXQudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2Y2ZjAyZWNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vbnRoUGlja2VySW5wdXQudnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vbnRoUGlja2VyLnZ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjdhYTFjOWVjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vbnRoUGlja2VyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vbnRoUGlja2VyLnZ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9