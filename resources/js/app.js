/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 window.Vue = require('vue');
 import moment from 'moment-timezone'
 moment.tz.setDefault('Asia/Kolkata')
 import router from './routes';
 import store from "./store";
 import axios from "axios";
 import mixin from './mixin.js'
 Vue.use(mixin)

 import VueRouter from 'vue-router';
 Vue.use(VueRouter);

 import VueScrollTo from 'vue-scrollto'
 Vue.use(VueScrollTo)

 import VTooltip from 'v-tooltip'
 Vue.use(VTooltip)

import VueMask from 'v-mask'
Vue.use(VueMask);

 import VueEasyLightbox from 'vue-easy-lightbox'
 Vue.use(VueEasyLightbox)

 import MultiRangeSlider from "multi-range-slider-vue";
 import "multi-range-slider-vue/MultiRangeSliderBlack.css";
import "multi-range-slider-vue/MultiRangeSliderBarOnly.css";
 Vue.use(MultiRangeSlider)

 import VueCompositionApi from '@vue/composition-api'
 Vue.use(VueCompositionApi)

 //import 'vue-suggestion/dist/vue-suggestion.css';
 import VueSuggestion from 'vue-suggestion';
 Vue.use(VueSuggestion);

 import Loading from 'vue-loading-overlay';
 import 'vue-loading-overlay/dist/vue-loading.css';

 // define the plugin and pass object for config
 Vue.use(Loading, {
     color: '#0dc07f',
     width: 64,
     height: 64,
     backgroundColor: '#ffffff',
     opacity: 0.5,
     zIndex: 999
 });
 Vue.component('loading', Loading)

 import { MonthPicker } from 'vue-month-picker'
 import { MonthPickerInput } from 'vue-month-picker'

 Vue.use(MonthPicker)
 Vue.use(MonthPickerInput)

 import VueApexCharts from 'vue-apexcharts'
 Vue.use(VueApexCharts)

 Vue.component('apexchart', VueApexCharts)

 import VueLazyload from 'vue-lazyload'
 Vue.use(VueLazyload,{
   error:   'images/img_404.png',
   loading: 'images/lazyloading.gif',
 });

 import  VueBottomSheetVue2 from "@webzlodimir/vue-bottom-sheet-vue2";
 Vue.use(VueBottomSheetVue2)

 import VeeValidate from 'vee-validate';
 Vue.use(VeeValidate, {
     classes: true, // instead of `enableAutoClasses`
     fieldsBagName: 'veeFields',
     errorBagName: 'verrors',
   });

   const maxDimensionsRule = {
     getMessage(field, [width, height], data) {
         return (data && data.message) || `The ${field} field must be Minimum ${width} X ${height} pixels.`;
     },
     validate(files, [width, height]) {
       const validateImage = (file, width, height) => {
       const URL = window.URL || window.webkitURL;
         return new Promise(resolve => {
           const image = new Image();
           image.onerror = () => resolve({ valid: false });
           image.onload = () => resolve({
             valid: image.width >= Number(width) && image.height >= Number(height) // only change from official rule
           });

           image.src = URL.createObjectURL(file);
         });
       };
       const list = [];
       for (let i = 0; i < files.length; i++) {
         // if file is not an image, reject.
         if (! /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
           return false;
         }
         list.push(files[i]);
       }
       return Promise.all(list.map(file => validateImage(file, width, height)));
     }
   };



 /*  */


   Vue.prototype.$setErrorsFromResponse = function(errorResponse) {
     // only allow this function to be run if the validator exists
     if(!this.hasOwnProperty('$validator')) {
         return;
     }

     // clear errors
     this.$validator.errors.clear();

     // check if errors exist
     if(!errorResponse.hasOwnProperty('errors')) {
         return;
     }

     let errorFields = Object.keys(errorResponse.errors);

     // insert laravel errors
     errorFields.map(field => {
         let errorString = errorResponse.errors[field].join(', ');
         this.$validator.errors.add({
             field:field,
             msg: errorString
         });
     });
 };

 var baseHref = document.getElementsByTagName('base')[0].href;
 window.baseHref = baseHref;

 baseHref = (baseHref.substr(-1) === '/') ? baseHref.slice(0, -1) : baseHref;

 import VueAxios from 'vue-axios'
 Vue.use(VueAxios, axios)

 Vue.config.productionTip = false;

 import VueProgressBar from 'vue-progressbar'
 Vue.use(VueProgressBar, {
     color: 'rgb(143, 255, 199)',
     failedColor: 'red',
     height: '3px'
   });

     let newVue = new Vue({});

     axios.interceptors.response.use(
     response => {
         store.commit("setErrors", []);
         if (response.status === 200 || response.status === 201) {
             newVue.$Progress.finish();
         return Promise.resolve(response);
         } else {
         return Promise.reject(response);
         }
     },
     error => {
         newVue.$Progress.fail();
         if (error.response.status === 422) {
             var msg= error.response.data.message
             if(msg=='The given data was invalid.'){
             var msg= 'Invalid input OR some mandatory fields are blank.'
             }
             if(msg.trim()){
             Toast.fire({
                 icon: 'warning',
                 title: msg
             });
         }
         store.commit("setErrors", error.response.data.errors);
         return Promise.reject(error);
         } else if (error.response.status === 401) {
         store.commit("auth/setUserData", null);
         localStorage.removeItem("authToken");
         window.location.href="/login"
         }else if (error.response.status === 500 || error.response.status === 404|| error.response.status === 405) {
         if (typeof error.response.data.message === 'undefined') {
             Toast.fire({
                 icon: 'error',
                 title: error.response.status === 404 ?'Record not found for processing.' : 'Internal Server error please try again.'
             });
         } else{
             Toast.fire({
                 icon: 'error',
                 title:  error.response.data.message
             });
         }
         }else if (error.response.status === 403  ) {
             Toast.fire({
                 icon: 'error',
                 title: error.response.data.message
             });
         } else {
             return Promise.reject(error);
         }
     }
     );

       axios.interceptors.request.use(function(config) {
         newVue.$Progress.start();
         config.headers.common = {
             "Content-Type": "application/json",
             Accept: "application/json"
         };
     return config;
     });


 import { Form, HasError, AlertError } from 'vform';
 window.Form = Form;

 import Gate from "./Gate";
 Vue.prototype.$gate = new Gate(window.user);

 import Swal from 'sweetalert2';


 const Toast = Swal.mixin({
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
     timer: 2000,
     timerProgressBar: true,
     showCloseButton: true,
     onOpen: (toast) => {
         toast.addEventListener('mouseenter', Swal.stopTimer)
         toast.addEventListener('mouseleave', Swal.resumeTimer)
     }
 })
 window.Swal = Swal;
 window.Toast = Toast;
 window.moment=moment;


 Vue.component(HasError.name, HasError)
 Vue.component(AlertError.name, AlertError)


 //excel export
 import JsonExcel from "vue-json-excel";

 Vue.component("downloadExcel", JsonExcel);




 import { Datetime } from 'vue-datetime'
 // You need a specific loader for CSS files
 import 'vue-datetime/dist/vue-datetime.css'

 Vue.use(Datetime)

 Vue.component('datetime', Datetime);


 /**
  * Next, we will create a fresh Vue application instance and attach it to
  * the page. Then, you may begin adding components to this application
  * or customize the JavaScript scaffolding to fit your unique needs.
  */

  import vSelect from "vue-select";
  import "vue-select/dist/vue-select.css";
  Vue.component("v-select", vSelect);


 //Elements

 Vue.component('SidebarMenu',
    require('./components/SidebarMenu.vue').default
);

 // Components
 Vue.component('pagination', require('laravel-vue-pagination'));
 //Vue.component('dashboard', require('./components/Dashboard.vue'));

Vue.component('headerbar',
    require('./components/HeaderBar.vue').default
);

 Vue.component(
     'not-found',
     require('./components/NotFound.vue').default
 );

 // Filter Section

 Vue.filter('myDate',function(created){
    if(created  && new Date(created).toString() !== 'Invalid Date'){
     return moment(created).format('DD-MMM-YY')
    }else{
        return '-';
    }
 });
 Vue.filter('myDateTime',function(created){
    if(created && new Date(created).toString() !== 'Invalid Date'){
     return moment(created).format('DD-MMM-YYYY  h:mm a')
    }else{
        return '-';
    }
 });

 Vue.filter('yesno', value => (value ? '<i class="fas fa-check green"></i>' : '<i class="fas fa-times red"></i>'));

 Vue.filter('toCurrency', function (value) {
     var formatter = new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: 'INR',
         minimumFractionDigits: 0,
     });
     value=Number(value);
     return formatter.format(value).replace(/^(\D+)/, '$1 ');
 });

 // end Filter

 Vue.filter('handleNewLine', function (value) {
     if(value)
     return value.replace(/(\\r)*\\n/g, '<br>')
 });

 Vue.config.productionTip = false;

//  if (window.Laravel && window.Laravel.user) {
//     store.commit('setUser', window.Laravel.user);
// }

 const app = new Vue({
     el: '#app',
     router,
     store,
     created() {
         this.$validator.extend('maxdimensions', maxDimensionsRule);
       }
 });

