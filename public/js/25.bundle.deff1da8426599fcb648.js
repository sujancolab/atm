(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"q/py":function(e,t,a){"use strict";a.r(t);var s=a("eyXw"),i={name:"SiteWiseExpenses",components:{MonthPicker:s.a,MonthPickerInput:s.b},data:()=>({pmModalData:"",created_users:[],search_machines:[],search_sites:[],search_tickets:[],search:{page:1,machine_id:"",site_id:"",category_id:"",sub_category_id:"",date_from:"",date_to:"",report_type:"machine wise"},categories:[],sub_categories:[],sites:[],selected_machine:"",users:[],machines:[],Tickets:{},clearEmittedText:"",default_month:"",json_fields:{"Machine Name":"name","FAR No":"far_no","Actual Material Expenses":"material_expenses","Actual Service Expenses":"service_expenses","Total Expenses":"total_expenses"},json_meta:[[{key:"charset",value:"utf-8"}]]}),methods:{showClearText(){this.clearEmittedText="emitted",this.default_month="",window.setTimeout(()=>{this.clearEmittedText=null},1e3)},async get_machine(){axios.get("/api/reports/machines",{params:{site_id:this.search.site_id,category_id:this.search.category_id,sub_category_id:this.search.sub_category_id}}).then(e=>{this.search_machines=e.data.data}).catch(()=>console.warn("Oh. Something went wrong"))},reset_filter(){this.search={page:1,machine_id:"",site_id:"",category_id:"",sub_category_id:"",monthYear:"",report_type:"machine wise"},this.getResults()},UpdateValues(e){this.search.tat_from=e.minValue,this.search.tat_to=e.maxValue},async export_csv(){this.search.report_type="machine wise export";const e=await axios.post("api/reports",this.search);return this.search.report_type="machine wise",e.data.data},startDownload(){Swal.fire({title:"Please Wait !",html:"Data populating",allowOutsideClick:!1,onBeforeOpen:()=>{Swal.showLoading()}})},finishDownload(){Swal.close()},getLabel:e=>"object"==typeof e?e.far_no+" - "+e.name:e,getResults(e=1){this.$Progress.start(),this.search.page=e,axios.post("/api/reports",this.search).then(e=>{this.Tickets=e.data.data}).catch(e=>{console.error(e)}),this.$Progress.finish()}},created(){this.getResults()},beforeCreate(){axios.get("api/get_pre_machine").then(e=>{this.categories=e.data.data.Category,this.sites=e.data.data.sites}),axios.get("/api/initial_ticket").then(e=>{this.users=e.data.data.vendors,this.machines=e.data.data.machines,this.search_machines=e.data.data.machines,this.search_sites=e.data.data.sites,this.created_users=e.data.data.created_users}).catch(()=>console.warn("Oh. Something went wrong"))},watch:{async"search.sub_category_id"(e,t){e&&this.get_machine()},async"search.site_id"(e,t){e&&this.get_machine()},"search.category_id":{handler:function(e,t){e&&(axios.get("api/category/"+e).then(e=>{this.sub_categories=e.data.data}),this.get_machine())},deep:!0,initial:!0}}},c=a("JFUb"),r=Object(c.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[e._m(0),e._v(" "),a("div",{staticClass:"card-body p-2"},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.getResults()}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col col-2"},[a("v-select",{attrs:{label:"site_name",reduce:function(e){return e.id},options:e.search_sites,placeholder:"Select Site...",name:"site_id"},model:{value:e.search.site_id,callback:function(t){e.$set(e.search,"site_id",t)},expression:"search.site_id"}})],1),e._v(" "),a("div",{staticClass:"col col-2 pt-2"},[a("datetime",{attrs:{"value-zone":"Asia/Kolkata","input-class":"form-control",placeholder:"Created from date"},model:{value:e.search.date_from,callback:function(t){e.$set(e.search,"date_from",t)},expression:"search.date_from"}})],1),e._v(" "),a("div",{staticClass:"col col-2 pt-2"},[a("datetime",{attrs:{"value-zone":"Asia/Kolkata","input-class":"form-control",placeholder:"Created to date"},model:{value:e.search.date_to,callback:function(t){e.$set(e.search,"date_to",t)},expression:"search.date_to"}})],1),e._v(" "),a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"name",reduce:function(e){return e.id},options:e.categories,placeholder:"Choose Category ..."},model:{value:e.search.category_id,callback:function(t){e.$set(e.search,"category_id",t)},expression:"search.category_id"}},[e._v("\\\n                                        ")])],1),e._v(" "),a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"name",reduce:function(e){return e.id},options:e.sub_categories,placeholder:"Choose description ..."},model:{value:e.search.sub_category_id,callback:function(t){e.$set(e.search,"sub_category_id",t)},expression:"search.sub_category_id"}})],1),e._v(" "),a("div",{staticClass:"col col-2"},[a("v-select",{attrs:{label:"name","get-option-label":e.getLabel,reduce:function(e){return e.id},options:e.search_machines,placeholder:"Enter machines ...",name:"machine_id"},model:{value:e.search.machine_id,callback:function(t){e.$set(e.search,"machine_id",t)},expression:"search.machine_id"}})],1),e._v(" "),a("div",{staticClass:"col pt-2"},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("\n                                            Search\n                                        ")]),e._v(" "),a("button",{staticClass:"btn btn-info ml-2",attrs:{type:"button"},on:{click:function(t){return e.reset_filter()}}},[e._v("\n                                            Reset\n                                        ")]),e._v(" "),a("download-excel",{staticClass:"btn btn-warning ml-2",attrs:{fetch:e.export_csv,fields:e.json_fields,"before-generate":e.startDownload,"before-finish":e.finishDownload,worksheet:"My Worksheet",type:"csv",name:"machine_expenses.csv"}},[a("span",{staticClass:"labelText"},[a("i",{staticClass:"fa fa-file-excel-o",attrs:{"aria-hidden":"true"}}),e._v("\n                                                Export as CSV")])])],1)])])]),e._v(" "),a("div",{staticClass:"card-body table-responsive p-0 ticketTable"},[e.Tickets&&e.Tickets.records?a("table",{staticClass:"table table-hover table-striped"},[e._m(1),e._v(" "),a("tbody",e._l(e.Tickets.records.data,(function(t){return a("tr",{key:t.id,class:t.row_color},[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.far_no))]),e._v(" "),a("td",[e._v(e._s(e._f("toCurrency")(t.material_expenses)))]),e._v(" "),a("td",[e._v(e._s(e._f("toCurrency")(t.service_expenses)))]),e._v(" "),a("td",[e._v(e._s(e._f("toCurrency")(t.total_expenses)))])])})),0),e._v(" "),a("tfoot",[a("tr",{staticClass:"table-dark"},[a("td",{attrs:{colspan:"2"}},[e._v("Total")]),e._v(" "),a("td",[e.Tickets&&e.Tickets.actual_material_cost?a("span",[e._v(e._s(e._f("toCurrency")(e.Tickets.actual_material_cost)))]):e._e()]),e._v(" "),a("td",[e.Tickets&&e.Tickets.actual_service_cost?a("span",[e._v(e._s(e._f("toCurrency")(e.Tickets.actual_service_cost)))]):e._e()]),e._v(" "),a("td",[e._v(e._s(e._f("toCurrency")(e.Tickets.actual_material_cost+e.Tickets.actual_service_cost)))])])])]):e._e()]),e._v(" "),e.Tickets&&e.Tickets.records?a("div",{staticClass:"card-footer"},[a("pagination",{attrs:{data:e.Tickets},on:{"pagination-change-page":e.getResults}})],1):e._e()])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header"},[t("h3",{staticClass:"card-title"},[this._v("Machine Wise Expenses Report")]),this._v(" "),t("div",{staticClass:"card-tools"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("Machine Name")]),e._v(" "),a("th",[e._v("FAR No")]),e._v(" "),a("th",[e._v("Actual Material Expenses ")]),e._v(" "),a("th",[e._v("Actual Service Expenses")]),e._v(" "),a("th",[e._v("Total Expenses")])])])}],!1,null,null,null);t.default=r.exports}}]);
//# sourceMappingURL=25.bundle.deff1da8426599fcb648.js.map