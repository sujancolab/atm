/*! For license information please see 3.bundle.bd895a36a6e2cd672b63.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{21:function(t,e,r){"use strict";(function(t){var n=r(8);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),s=new O(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return L()}for(r.method=a,r.arg=i;;){var s=r.delegate;if(s){var o=w(s,r);if(o){if(o===h)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=p(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,s),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h={};function f(){}function d(){}function v(){}var y={};l(y,s,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(P([])));b&&b!==e&&r.call(b,s)&&(y=b);var g=v.prototype=f.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;this._invoke=function(i,s){function o(){return new e((function(n,o){!function n(i,s,o,c){var l=p(t[i],t,s);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==a(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,o,c)}),(function(t){n("throw",t,o,c)})):e.resolve(h).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,c)}))}c(l.arg)}(i,s,n,o)}))}return n=n?n.then(o,o):o()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function P(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=v,l(g,"constructor",v),l(v,"constructor",d),d.displayName=l(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},_(x.prototype),l(x.prototype,o,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var s=new x(u(e,r,n,a),i);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},_(g),l(g,c,"Generator"),l(g,s,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return s.type="throw",s.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var o=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(o&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function s(t,e,r,n,a,i,s){try{var o=t[i](s),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(n,a)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(t){s(i,n,a,o,c,"next",t)}function c(t){s(i,n,a,o,c,"throw",t)}o(void 0)}))}}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.a={name:"UserAddPermission",data:function(){return{countries:[],states:[],cities:[],editmode:!1,step:1,users:{},frm_user:new Form({id:"",organization:"",name:"",address_1:"",address_2:"",city:"",state:"",zip_code:"",country:"united states",phone:"",email:"",fax:"",type:"",account_info:[]})}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(n.c)(["errors"])),beforeCreate:function(){var t=this;axios.get("api/getCountries").then((function(e){t.countries=e.data.data}))},methods:{addInfo:function(){var t=this;return o(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.frm_user.account_info.push({id:"",account_no:""});case 1:case"end":return e.stop()}}),e)})))()},next_step:function(){var t=arguments,e=this;return o(i().mark((function r(){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=t.length>0&&void 0!==t[0]&&t[0],e.$validator.validateAll("frmStep"+e.step).then(function(){var t=o(i().mark((function t(r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r&&(e.step++,"submit"==n&&(e.step=1,e.submit_user()));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return r.stop()}}),r)})))()},submit_user:function(){var e=this,r=this.$loading.show({container:this.$refs.ref_load_user});this.frm_user.id>0?this.frm_user.put("api/user/"+this.frm_user.id).then((function(t){r.hide(),1==t.data.success&&(e.frm_user.reset(),Toast.fire({icon:"success",title:t.data.message}),e.$router.push("/users").catch((function(){})))})).catch((function(){r.hide()})):this.frm_user.post("api/user").then((function(n){r.hide(),e.frm_user.reset(),t('a[href="#menu1"]').tab("show"),e.frm_user.account_info=[],e.addInfo(),Toast.fire({icon:"success",title:n.data.message})})).catch((function(){r.hide()}))}},mounted:function(){var t=this;if(this.$route.params.id){this.frm_user.id=this.$route.params.id;var e=this.$loading.show({container:this.$refs.ref_load_user});axios.get("api/user/"+this.$route.params.id).then((function(r){t.frm_user.fill(r.data.data),e.hide()})).catch((function(){e.hide(),t.$router.push("/users/").catch((function(){}))}))}},created:function(){this.$Progress.start(),this.addInfo(),this.$Progress.finish()},watch:{step:function(e){return o(i().mark((function r(){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t('a[href="#menu'+e+'"]').tab("show");case 1:case"end":return r.stop()}}),r)})))()},"frm_user.organization":function(t){var e=this;return o(i().mark((function r(){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:"United Scrap Metal"==t?["Admin","Finance Team","Transportation Team","Sales Team","CEC"].includes(e.frm_user.type)||(e.frm_user.type=""):["Primary","Finance","Transportation"].includes(e.frm_user.type)||(e.frm_user.type="");case 1:case"end":return r.stop()}}),r)})))()},"frm_user.country":{immediate:!0,handler:function(t){var e=this;t&&axios.get("api/getStates",{params:{country:t}}).then((function(t){e.states=t.data.data}))}}}}}).call(this,r(3))},383:function(t,e,r){"use strict";r.r(e);var n=r(21).a,a=r(2),i=Object(a.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("main",[e("section",{staticClass:"content-header"},[e("h1",[t._v("Add Permission")])]),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-4"},[e("button",{staticClass:"permissionbox",attrs:{type:"button"}},[e("div",{staticClass:"pull-left cogs1"},[e("i",{staticClass:"fa fa-cogs",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("div",{staticClass:"pull-left cogs2"},[t._v("Add Permission Directly ")]),t._v(" "),e("div",{staticClass:"clearfix"})])]),t._v(" "),e("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-4"},[e("button",{staticClass:"permissionbox",attrs:{type:"button"}},[e("div",{staticClass:"pull-left cogs1"},[e("i",{staticClass:"fa fa-cogs",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("div",{staticClass:"pull-left cogs2"},[t._v("Add User to Group")]),t._v(" "),e("div",{staticClass:"clearfix"})])]),t._v(" "),e("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-4"},[e("button",{staticClass:"permissionbox",attrs:{type:"button"}},[e("div",{staticClass:"pull-left cogs1"},[e("i",{staticClass:"fa fa-cogs",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("div",{staticClass:"pull-left cogs2"},[t._v("Copy Permission from Existing User")]),t._v(" "),e("div",{staticClass:"clearfix"})])])]),t._v(" "),e("div",{staticClass:"card box-warning"},[e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title card-text"},[t._v("Apply Permissions")])]),t._v(" "),e("div",{staticClass:"box-body"},[e("div",{staticClass:"panel-group",attrs:{id:"accordion"}},[e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[e("h4",{staticClass:"panel-title"},[e("label",[e("input",{attrs:{type:"checkbox"}})]),t._v(" "),e("a",{staticClass:"accordion-toggle",attrs:{"data-toggle":"collapse","data-parent":"#accordion",href:"#collapseOne"}},[t._v(" Settlement Statement Viewing Options ")])])]),t._v(" "),e("div",{staticClass:"panel-collapse collapse",attrs:{id:"collapseOne"}},[e("div",{staticClass:"panel-body"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        Price Per UM ")])]),t._v(" "),e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        Scale Ticket ")])]),t._v(" "),e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        Net Weights ")])]),t._v(" "),e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        Gross Weights ")])]),t._v(" "),e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        Add Comments / Descriptions")])])])])])]),t._v(" "),e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[e("h4",{staticClass:"panel-title"},[e("label",[e("input",{attrs:{type:"checkbox"}})]),t._v(" "),e("a",{staticClass:"accordion-toggle",attrs:{"data-toggle":"collapse","data-parent":"#accordion",href:"#collapseTwo"}},[t._v(" Supporting Documentation Viewing Options ")])])]),t._v(" "),e("div",{staticClass:"panel-collapse collapse",attrs:{id:"collapseTwo"}},[e("div",{staticClass:"panel-body"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        Scale Ticket ")])]),t._v(" "),e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        All Pictures")])]),t._v(" "),e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        Selected Pictures ")])]),t._v(" "),e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        Driver's Ticket ")])])])])])]),t._v(" "),e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[e("h4",{staticClass:"panel-title"},[e("label",[e("input",{attrs:{type:"checkbox"}})]),t._v(" "),e("a",{staticClass:"accordion-toggle",attrs:{"data-toggle":"collapse","data-parent":"#accordion",href:"#collapseThree"}},[t._v("Add Task Viewing Options")])])]),t._v(" "),e("div",{staticClass:"panel-collapse collapse",attrs:{id:"collapseThree"}},[e("div",{staticClass:"panel-body"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        Scale Ticket ")])]),t._v(" "),e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        All Pictures")])]),t._v(" "),e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        Selected Pictures ")])]),t._v(" "),e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        Driver's Ticket ")])])])])])]),t._v(" "),e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[e("h4",{staticClass:"panel-title"},[e("label",[e("input",{attrs:{type:"checkbox"}})]),t._v(" "),e("a",{staticClass:"accordion-toggle",attrs:{"data-toggle":"collapse","data-parent":"#accordion",href:"#collapseFour"}},[t._v("Add Report Viewing Options")])])]),t._v(" "),e("div",{staticClass:"panel-collapse collapse",attrs:{id:"collapseFour"}},[e("div",{staticClass:"panel-body"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        Scale Ticket ")])]),t._v(" "),e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        All Pictures")])]),t._v(" "),e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        Selected Pictures ")])]),t._v(" "),e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v("\r\n                        Driver's Ticket ")])])])])])])]),t._v(" "),e("div",{staticClass:"box-footer"},[e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn link1 widthauto",attrs:{type:"button"}},[t._v("Grant Permission")])])])])])])])}],!1,null,null,null);e.default=i.exports}}]);
//# sourceMappingURL=3.bundle.bd895a36a6e2cd672b63.js.map