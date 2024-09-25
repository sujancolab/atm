/*! For license information please see 0.bundle.0549e55444957910cf8f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{233:function(t,e,r){"use strict";function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e);var s=r(9).a,o=r(2),n=Object(o.a)(s,(function(){var t,e,r,s,o,n,i,c,l,u,v,d,f=this,m=f._self._c;return m("div",[f._m(0),f._v(" "),m("section",{staticClass:"content"},[m("div",{staticClass:"card box-warning"},[m("div",{staticClass:"box-body"},[m("div",{staticClass:"tabssection"},[f._m(1),f._v(" "),m("div",{staticClass:"tab-content"},[m("div",{staticClass:"tab-pane fade in active",attrs:{id:"menu1"}},[m("form",{attrs:{"data-vv-scope":"frmStep1"},on:{submit:function(t){return t.preventDefault(),f.next_step("frmStep1")}}},[m("div",{staticClass:"row"},[m("div",{staticClass:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},[m("div",{staticClass:"form-group"},[m("label",[f._v("Organization")]),f._v(" "),m("select",{directives:[{name:"model",rawName:"v-model",value:f.frm_user.organization,expression:"frm_user.organization"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:(t={error:f.errors.organization},a(t,"error",f.verrors.has("organization")),a(t,"haveValue",f.frm_user.organization),t),attrs:{"data-vv-name":"organization","data-vv-scope":"frmStep1"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));f.$set(f.frm_user,"organization",t.target.multiple?e:e[0])}}},[m("option",{attrs:{value:"United Scrap Metal"}},[f._v("United Scrap Metal")]),f._v(" "),m("option",{attrs:{value:"Others"}},[f._v("Others")])]),f._v(" "),f.verrors.has("frmStep1.organization")?m("p",{staticClass:"errormsg"},[f._v(" "+f._s(f.verrors.first("frmStep1.organization")))]):f._e()])]),f._v(" "),m("div",{staticClass:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},[m("div",{staticClass:"form-group"},[m("label",[f._v("Full Name ")]),f._v(" "),m("input",{directives:[{name:"model",rawName:"v-model",value:f.frm_user.name,expression:"frm_user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:(e={error:f.errors.name},a(e,"error",f.verrors.has("name")),a(e,"haveValue",f.frm_user.name),e),attrs:{type:"text",placeholder:"Enter Full Name ...","data-vv-name":"name","data-vv-scope":"frmStep1"},domProps:{value:f.frm_user.name},on:{input:function(t){t.target.composing||f.$set(f.frm_user,"name",t.target.value)}}}),f._v(" "),f.verrors.has("frmStep1.name")?m("p",{staticClass:"errormsg"},[f._v("  "+f._s(f.verrors.first("frmStep1.name")))]):f._e()])]),f._v(" "),m("div",{staticClass:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},[m("div",{staticClass:"form-group"},[m("label",[f._v("Address 1")]),f._v(" "),m("input",{directives:[{name:"model",rawName:"v-model",value:f.frm_user.address_1,expression:"frm_user.address_1"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:(r={error:f.errors.address_1},a(r,"error",f.verrors.has("address_1")),a(r,"haveValue",f.frm_user.address_1),r),attrs:{type:"text",placeholder:"Enter Address 1 ...","data-vv-name":"address_1","data-vv-scope":"frmStep1","data-vv-as":"Address 1"},domProps:{value:f.frm_user.address_1},on:{input:function(t){t.target.composing||f.$set(f.frm_user,"address_1",t.target.value)}}}),f._v(" "),f.verrors.has("frmStep1.address_1")?m("p",{staticClass:"errormsg"},[f._v("  "+f._s(f.verrors.first("frmStep1.address_1")))]):f._e()])]),f._v(" "),m("div",{staticClass:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},[m("div",{staticClass:"form-group"},[f._m(2),f._v(" "),m("input",{directives:[{name:"model",rawName:"v-model",value:f.frm_user.address_2,expression:"frm_user.address_2"},{name:"validate",rawName:"v-validate",value:"",expression:"''"}],staticClass:"form-control",class:(s={error:f.errors.address_2},a(s,"error",f.verrors.has("address_2")),a(s,"haveValue",f.frm_user.address_2),s),attrs:{type:"text",placeholder:"Enter Address 2 ...","data-vv-name":"address_2","data-vv-scope":"frmStep1","data-vv-as":"Address 2"},domProps:{value:f.frm_user.address_2},on:{input:function(t){t.target.composing||f.$set(f.frm_user,"address_2",t.target.value)}}}),f._v(" "),f.verrors.has("frmStep1.address_2")?m("p",{staticClass:"errormsg"},[f._v("  "+f._s(f.verrors.first("frmStep1.address_2")))]):f._e()])]),f._v(" "),m("div",{staticClass:"col-xs-12 col-sm-12 col-md-3 col-lg-3"},[m("div",{staticClass:"form-group"},[m("label",[f._v("City ")]),f._v(" "),m("input",{directives:[{name:"model",rawName:"v-model",value:f.frm_user.city,expression:"frm_user.city"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:(o={error:f.errors.city},a(o,"error",f.verrors.has("city")),a(o,"haveValue",f.frm_user.city),o),attrs:{type:"text",placeholder:"Enter City ...","data-vv-name":"city","data-vv-scope":"frmStep1"},domProps:{value:f.frm_user.city},on:{input:function(t){t.target.composing||f.$set(f.frm_user,"city",t.target.value)}}}),f._v(" "),f.verrors.has("frmStep1.city")?m("p",{staticClass:"errormsg"},[f._v("  "+f._s(f.verrors.first("frmStep1.city")))]):f._e()])]),f._v(" "),m("div",{staticClass:"col-xs-12 col-sm-12 col-md-3 col-lg-3"},[m("div",{staticClass:"form-group"},[m("label",[f._v("State ")]),f._v(" "),m("input",{directives:[{name:"model",rawName:"v-model",value:f.frm_user.state,expression:"frm_user.state"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:(n={error:f.errors.state},a(n,"error",f.verrors.has("state")),a(n,"haveValue",f.frm_user.state),n),attrs:{type:"text",placeholder:"Enter State ...","data-vv-name":"state","data-vv-scope":"frmStep1"},domProps:{value:f.frm_user.state},on:{input:function(t){t.target.composing||f.$set(f.frm_user,"state",t.target.value)}}}),f._v(" "),f.verrors.has("frmStep1.state")?m("p",{staticClass:"errormsg"},[f._v("  "+f._s(f.verrors.first("frmStep1.state")))]):f._e()])]),f._v(" "),m("div",{staticClass:"col-xs-12 col-sm-12 col-md-3 col-lg-3"},[m("div",{staticClass:"form-group"},[m("label",[f._v("Zip ")]),f._v(" "),m("input",{directives:[{name:"model",rawName:"v-model",value:f.frm_user.zip_code,expression:"frm_user.zip_code"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:(i={error:f.errors.zip_code},a(i,"error",f.verrors.has("zip_code")),a(i,"haveValue",f.frm_user.zip_code),i),attrs:{type:"text",placeholder:"Enter Zip ...","data-vv-name":"zip_code","data-vv-scope":"frmStep1","data-vv-as":"zip code"},domProps:{value:f.frm_user.zip_code},on:{input:function(t){t.target.composing||f.$set(f.frm_user,"zip_code",t.target.value)}}}),f._v(" "),f.verrors.has("frmStep1.zip_code")?m("p",{staticClass:"errormsg"},[f._v("  "+f._s(f.verrors.first("frmStep1.zip_code")))]):f._e()])]),f._v(" "),m("div",{staticClass:"col-xs-12 col-sm-12 col-md-3 col-lg-3"},[m("div",{staticClass:"form-group"},[m("label",[f._v("Country ")]),f._v(" "),m("input",{directives:[{name:"model",rawName:"v-model",value:f.frm_user.country,expression:"frm_user.country"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:(c={error:f.errors.country},a(c,"error",f.verrors.has("country")),a(c,"haveValue",f.frm_user.country),c),attrs:{type:"text",placeholder:"Enter Country ...","data-vv-name":"country","data-vv-scope":"frmStep1"},domProps:{value:f.frm_user.country},on:{input:function(t){t.target.composing||f.$set(f.frm_user,"country",t.target.value)}}}),f._v(" "),f.verrors.has("frmStep1.country")?m("p",{staticClass:"errormsg"},[f._v("  "+f._s(f.verrors.first("frmStep1.country")))]):f._e()])]),f._v(" "),m("div",{staticClass:"col-xs-12 col-sm-12 col-md-3 col-lg-3"},[m("div",{staticClass:"form-group"},[m("label",[f._v("Phone ")]),f._v(" "),m("input",{directives:[{name:"model",rawName:"v-model",value:f.frm_user.phone,expression:"frm_user.phone"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:(l={error:f.errors.phone},a(l,"error",f.verrors.has("phone")),a(l,"haveValue",f.frm_user.phone),l),attrs:{type:"text",placeholder:"Enter Phone ...","data-vv-name":"phone","data-vv-scope":"frmStep1"},domProps:{value:f.frm_user.phone},on:{input:function(t){t.target.composing||f.$set(f.frm_user,"phone",t.target.value)}}}),f._v(" "),f.verrors.has("frmStep1.phone")?m("p",{staticClass:"errormsg"},[f._v("  "+f._s(f.verrors.first("frmStep1.phone")))]):f._e()])]),f._v(" "),m("div",{staticClass:"col-xs-12 col-sm-12 col-md-3 col-lg-3"},[m("div",{staticClass:"form-group"},[m("label",[f._v("Email ")]),f._v(" "),m("input",{directives:[{name:"model",rawName:"v-model",value:f.frm_user.email,expression:"frm_user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:(u={error:f.errors.email},a(u,"error",f.verrors.has("email")),a(u,"haveValue",f.frm_user.email),u),attrs:{type:"text",placeholder:"Enter Email ...","data-vv-name":"email","data-vv-scope":"frmStep1"},domProps:{value:f.frm_user.email},on:{input:function(t){t.target.composing||f.$set(f.frm_user,"email",t.target.value)}}}),f._v(" "),f.verrors.has("frmStep1.email")?m("p",{staticClass:"errormsg"},[f._v("  "+f._s(f.verrors.first("frmStep1.email")))]):f._e()])]),f._v(" "),m("div",{staticClass:"col-xs-12 col-sm-12 col-md-3 col-lg-3"},[m("div",{staticClass:"form-group"},[f._m(3),f._v(" "),m("input",{directives:[{name:"model",rawName:"v-model",value:f.frm_user.fax,expression:"frm_user.fax"},{name:"validate",rawName:"v-validate",value:"",expression:"''"}],staticClass:"form-control",class:(v={error:f.errors.fax},a(v,"error",f.verrors.has("fax")),a(v,"haveValue",f.frm_user.fax),v),attrs:{type:"text",placeholder:"Enter Fax ...","data-vv-name":"fax","data-vv-scope":"frmStep1"},domProps:{value:f.frm_user.fax},on:{input:function(t){t.target.composing||f.$set(f.frm_user,"fax",t.target.value)}}}),f._v(" "),f.verrors.has("frmStep1.fax")?m("p",{staticClass:"errormsg"},[f._v("  "+f._s(f.verrors.first("frmStep1.fax")))]):f._e()])]),f._v(" "),m("div",{staticClass:"col-xs-12 col-sm-12 col-md-3 col-lg-3"},[m("div",{staticClass:"form-group"},[m("label",[f._v("User Type ")]),f._v(" "),m("select",{directives:[{name:"model",rawName:"v-model",value:f.frm_user.type,expression:"frm_user.type"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:(d={error:f.errors.type},a(d,"error",f.verrors.has("type")),a(d,"haveValue",f.frm_user.type),d),attrs:{"data-vv-name":"type","data-vv-scope":"frmStep1"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));f.$set(f.frm_user,"type",t.target.multiple?e:e[0])}}},[m("option",{attrs:{value:""}},[f._v("Choose user type")]),f._v(" "),"United Scrap Metal"==f.frm_user.organization?[m("option",{attrs:{value:"Admin"}},[f._v("Admin")]),f._v(" "),m("option",{attrs:{value:"Finance Team"}},[f._v("Finance Team")]),f._v(" "),m("option",{attrs:{value:"Transportation Team"}},[f._v(" Transportation Team")]),f._v(" "),m("option",{attrs:{value:"Sales Team "}},[f._v("Sales Team ")]),f._v(" "),m("option",{attrs:{value:"CEC"}},[f._v("CEC ")])]:[m("option",{attrs:{value:"Primary"}},[f._v("Primary")]),f._v(" "),m("option",{attrs:{value:"Finance"}},[f._v("Finance")]),f._v(" "),m("option",{attrs:{value:"Transportation"}},[f._v("Transportation ")])]],2),f._v(" "),f.verrors.has("frmStep1.type")?m("p",{staticClass:"errormsg"},[f._v(" "+f._s(f.verrors.first("frmStep1.type")))]):f._e()])])]),f._v(" "),f._m(4)])]),f._v(" "),m("div",{staticClass:"tab-pane fade",attrs:{id:"menu2"}},[m("form",{attrs:{"data-vv-scope":"frmStep2"},on:{submit:function(t){return t.preventDefault(),f.next_step("frmStep2")}}},[m("div",{staticClass:"tablesection"},[m("div",{staticClass:"table-responsive"},[m("table",{staticClass:"table table-striped table-hover"},[f._m(5),f._v(" "),m("tbody",f._l(f.frm_user.account_info,(function(t,e){return m("tr",{key:"up"+e},[m("td",{attrs:{align:"center"}},[f._v(f._s(e+1))]),f._v(" "),m("td",[m("input",{directives:[{name:"model",rawName:"v-model",value:t.account_no,expression:"item.account_no"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"text",name:"account_no"+e,"data-vv-scope":"frmStep2","data-vv-as":"account no"},domProps:{value:t.account_no},on:{input:function(e){e.target.composing||f.$set(t,"account_no",e.target.value)}}}),f._v(" "),f.verrors.has("frmStep2.account_no"+e)?m("p",{staticClass:"errormsg"},[f._v(" "+f._s(f.verrors.first("frmStep2.account_no"+e)))]):f._e()]),f._v(" "),m("td",[e>0?m("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return f.frm_user.account_info.splice(e,1)}}},[m("i",{staticClass:"fa fa-trash-o",attrs:{"aria-hidden":"true"}})]):f._e(),f._v(" "),f.frm_user.account_info.length==e+1?m("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(t){return f.addInfo()}}},[m("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})]):f._e()])])})),0)])])]),f._v(" "),m("div",{staticClass:"box-footer"},[m("div",{staticClass:"text-center"},[m("button",{staticClass:"btn link2 mx-1",attrs:{type:"button"},on:{click:function(t){f.step--}}},[f._v("Back")]),f._v(" "),m("button",{staticClass:"btn link1 mx-1",attrs:{type:"submit"}},[f._v("Next")])])])])]),f._v(" "),m("div",{staticClass:"tab-pane fade",attrs:{id:"menu3"}},[m("form",{attrs:{"data-vv-scope":"frmStep2"},on:{submit:function(t){return t.preventDefault(),f.submit_user("submit")}}},[f._m(6),f._v(" "),m("div",{staticClass:"box-body"},[f._m(7),f._v(" "),m("div",{staticClass:"box-footer"},[m("div",{staticClass:"text-center"},[m("button",{staticClass:"btn link2 mx-1",attrs:{type:"button"},on:{click:function(t){f.step--}}},[f._v("Back")]),f._v(" "),m("button",{staticClass:"btn link1 mx-1",attrs:{type:"submit"}},[f._v("Submit")])])])])])])])])])])])])}),[function(){var t=this._self._c;return t("section",{staticClass:"content-header"},[t("h1",[this._v("Add User")])])},function(){var t=this._self._c;return t("ul",{staticClass:"nav nav-tabs"},[t("li",{staticClass:"active"},[t("a",{staticClass:"disabled",attrs:{"data-toggle":"tab",href:"#menu1"}},[this._v("User Information")])]),this._v(" "),t("li",[t("a",{staticClass:"disabled",attrs:{"data-toggle":"tab",href:"#menu2"}},[this._v("Account Information")])]),this._v(" "),t("li",[t("a",{staticClass:"disabled",attrs:{"data-toggle":"tab",href:"#menu3"}},[this._v("User Settings")])])])},function(){var t=this._self._c;return t("label",[this._v("Address 2 "),t("span",[this._v("(optional)")])])},function(){var t=this._self._c;return t("label",[this._v("Fax "),t("span",[this._v(" (optional)")])])},function(){var t=this._self._c;return t("div",{staticClass:"box-footer"},[t("div",{staticClass:"text-center"},[t("button",{staticClass:"btn link1",attrs:{type:"submit"}},[this._v("Next")])])])},function(){var t=this._self._c;return t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"},attrs:{width:"70"}},[this._v("Sl No.")]),this._v(" "),t("th",[this._v("Account No")]),this._v(" "),t("th",{attrs:{width:"100"}},[this._v("Action")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"box-header with-border bor"},[e("div",{staticClass:"pull-left"},[e("h3",{staticClass:"box-title card-text"},[t._v("Permissions Granted")])]),t._v(" "),e("div",{staticClass:"pull-right dropdown"},[e("a",{staticClass:"btn link2 widthauto",attrs:{href:"add_permission.html"}},[e("span",[e("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})]),t._v(" Add Permission")]),t._v("   \r\n                    "),e("button",{staticClass:"btn link1 widthauto",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"fa fa-cog",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("ul",{staticClass:"dropdown-menu"},[e("li",[e("a",{attrs:{href:"#"}},[t._v("HTML")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("CSS")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("JavaScript")])])])]),t._v(" "),e("div",{staticClass:"clearfix"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tablesection"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-striped table-hover"},[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"},attrs:{width:"70"}},[t._v("Sl No.")]),t._v(" "),e("th",[e("input",{attrs:{type:"checkbox"}})]),t._v(" "),e("th",[t._v("Permission Name")]),t._v(" "),e("th",[t._v("Permission Deseripton")]),t._v(" "),e("th",[t._v("Action")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{attrs:{align:"center"}},[t._v("01")]),t._v(" "),e("td",[e("input",{attrs:{type:"checkbox"}})]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",{attrs:{align:"center"}},[t._v("02")]),t._v(" "),e("td",[e("input",{attrs:{type:"checkbox"}})]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",{attrs:{align:"center"}},[t._v("03")]),t._v(" "),e("td",[e("input",{attrs:{type:"checkbox"}})]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])])]),t._v(" "),e("tfoot",[e("tr",[e("td",{attrs:{align:"center",colspan:"5"}},[t._v("No Permissions Granted")])])])])])])}],!1,null,null,null);e.default=n.exports},9:function(t,e,r){"use strict";(function(t){var a=r(7);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var s=e&&e.prototype instanceof f?e:f,o=Object.create(s.prototype),n=new P(a||[]);return o._invoke=function(t,e,r){var a="suspendedStart";return function(s,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===s)throw o;return E()}for(r.method=s,r.arg=o;;){var n=r.delegate;if(n){var i=w(n,r);if(i){if(i===d)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var c=v(t,e,r);if("normal"===c.type){if(a=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a="completed",r.method="throw",r.arg=c.arg)}}}(t,r,n),o}function v(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function f(){}function m(){}function p(){}var _={};l(_,n,(function(){return this}));var h=Object.getPrototypeOf,g=h&&h(h(N([])));g&&g!==e&&r.call(g,n)&&(_=g);var y=p.prototype=f.prototype=Object.create(_);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var a;this._invoke=function(o,n){function i(){return new e((function(a,i){!function a(o,n,i,c){var l=v(t[o],t,n);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==s(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,i,c)}),(function(t){a("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return a("throw",t,i,c)}))}c(l.arg)}(o,n,a,i)}))}return a=a?a.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=v(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var s=a.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function N(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,s=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return s.next=s}}return{next:E}}function E(){return{value:void 0,done:!0}}return m.prototype=p,l(y,"constructor",p),l(p,"constructor",m),m.displayName=l(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,a,s,o){void 0===o&&(o=Promise);var n=new x(u(e,r,a,s),o);return t.isGeneratorFunction(r)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},b(y),l(y,c,"Generator"),l(y,n,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=N,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return n.type="throw",n.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],n=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a];if(s.tryLoc<=this.prev&&r.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var o=s;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var n=o?o.completion:{};return n.type=t,n.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var s=a.arg;S(r)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function n(t,e,r,a,s,o,n){try{var i=t[o](n),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(a,s)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(a,s){var o=t.apply(e,r);function i(t){n(o,a,s,i,c,"next",t)}function c(t){n(o,a,s,i,c,"throw",t)}i(void 0)}))}}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.a={name:"UserAddEdit",data:function(){return{editmode:!1,step:1,users:{},frm_user:new Form({id:"",organization:"",name:"",address_1:"",address_2:"",city:"",state:"",zip_code:"",country:"",phone:"",email:"",fax:"",type:"",account_info:[]})}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(a.b)(["errors"])),methods:{addInfo:function(){var t=this;return i(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.frm_user.account_info.push({id:"",account_no:""});case 1:case"end":return e.stop()}}),e)})))()},next_step:function(){var t=arguments,e=this;return i(o().mark((function r(){var a;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=t.length>0&&void 0!==t[0]&&t[0],e.$validator.validateAll("frmStep"+e.step).then(function(){var t=i(o().mark((function t(r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r&&(e.step++,"submit"==a&&(e.step=1,e.submit_user()));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return r.stop()}}),r)})))()},submit_user:function(){var e=this;this.frm_user.id>0?this.frm_user.put("api/user/"+this.frm_user.id).then((function(t){1==t.data.success&&(e.frm_user.reset(),Toast.fire({icon:"success",title:t.data.message}),e.$router.push("/users").catch((function(){})))})):this.frm_user.post("api/user").then((function(r){e.frm_user.reset(),t('a[href="#menu1"]').tab("show"),e.frm_user.account_info=[],e.addInfo(),Toast.fire({icon:"success",title:r.data.message})}))},getResults:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$Progress.start(),axios.get("api/user?page="+e).then((function(e){var r=e.data;return t.users=r.data})),this.$Progress.finish()},updateUser:function(){var e=this;this.$Progress.start(),this.form.put("api/user/"+this.form.id).then((function(r){t("#addNew").modal("hide"),Toast.fire({icon:"success",title:r.data.message}),e.$Progress.finish(),e.loadUsers()})).catch((function(){e.$Progress.fail()}))},editModal:function(e){this.editmode=!0,this.form.reset(),t("#addNew").modal("show"),this.form.fill(e)},newModal:function(){this.editmode=!1,this.form.reset(),t("#addNew").modal("show")},deleteUser:function(t){var e=this;Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then((function(r){r.value&&e.form.delete("api/user/"+t).then((function(){Swal.fire("Deleted!","Your file has been deleted.","success"),e.loadUsers()})).catch((function(t){Swal.fire("Failed!",t.message,"warning")}))}))},loadUsers:function(){var t=this;this.$Progress.start(),this.$gate.isAdmin()&&axios.get("api/user").then((function(e){var r=e.data;return t.users=r.data})),this.$Progress.finish()},createUser:function(){var e=this;this.form.post("api/user").then((function(r){t("#addNew").modal("hide"),Toast.fire({icon:"success",title:r.data.message}),e.$Progress.finish(),e.loadUsers()})).catch((function(){Toast.fire({icon:"error",title:"Some error occured! Please try again"})}))}},mounted:function(){var t=this;this.$route.params.id&&(this.frm_user.id=this.$route.params.id,axios.get("api/user/"+this.$route.params.id).then((function(e){t.frm_user.fill(e.data.data)})))},created:function(){this.$Progress.start(),this.addInfo(),this.$Progress.finish()},watch:{step:function(e){return i(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t('a[href="#menu'+e+'"]').tab("show");case 1:case"end":return r.stop()}}),r)})))()},"frm_user.organization":function(t){var e=this;return i(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:console.log(t),"United Scrap Metal"==t?["Admin","Finance Team","Transportation Team","Sales Team","CEC"].includes(e.frm_user.type)||(e.frm_user.type=""):["Primary","Finance","Transportation"].includes(e.frm_user.type)||(e.frm_user.type="");case 2:case"end":return r.stop()}}),r)})))()}}}}).call(this,r(3))}}]);
//# sourceMappingURL=0.bundle.0549e55444957910cf8f.js.map