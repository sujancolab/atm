(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{35:function(t,e,a){"use strict";(function(t){var s=a(15),i=a(7),c=a.n(i);e.a={components:{VueTagsInput:c(),MultiRangeSlider:s.a,MachinePop:()=>a.e(0).then(a.bind(null,47))},data(){return{pmModalData:"",created_users:[],search_machines:[],search_sites:[],search:{page:1,machine_id:"",site_id:"",created_by:"",created_from:"",created_to:"",tat_from:0,tat_to:90},categories:[],sub_categories:[],sites:[],selected_machine:"",users:[],machines:[],Tickets:{},sl:1,json_fields:{"Sl No":{callback:()=>this.sl++},"Site name":"site_name","Equipment Description":"machine_name","FAR No":"far_no","Complaint No":"ticket_no","Complaint date":"created_at","Complaint Raised By":"created_by_name","Complaint Nature":"complaint_nature","Status During Complaint":"status_during_complaint","Problem description":"problem_description","Additional Problem":{field:"problems",callback:t=>{let e="";return t&&(e=t.map(t=>t.problem).join("\r\n")),e}},"Current Status":{field:"status",callback:t=>"created by user"==t.toLowerCase()?"Open":t},"Current Stage":{field:"last_stage",callback:t=>t?t.description:"-"},"Current Ticket Condition":"machine_status","Expected Resolution date":"likely_date","Actual Resolve Date":"actual_date",TAT:"tat","Estimated Cost":"estimated_service_cost","Actual Cost":"actual_service_cost","Production Loss":"production_loss"},json_meta:[[{key:"charset",value:"utf-8"}]],sl:0}},methods:{view_site_details(e){this.pmModalData=e,t("#MachineSiteModal3").modal("show")},reset_filter(){this.search={page:1,machine_id:"",site_id:"",created_by:"",created_from:"",created_to:"",tat_from:0,tat_to:90},this.getResults()},UpdateValues(t){this.search.tat_from=t.minValue,this.search.tat_to=t.maxValue},export_csv:async()=>(await axios.get("api/ticket/export")).data.data,startDownload(){this.sl=1,Swal.fire({title:"Please Wait !",html:"Data populating",allowOutsideClick:!1,onBeforeOpen:()=>{Swal.showLoading()}})},finishDownload(){Swal.close()},getLabel:t=>"object"==typeof t?t.far_no+" - "+t.name:t,getResults(t=1){this.$Progress.start(),this.search.page=t,axios.get("/api/ticket/report",{params:this.search}).then(({data:t})=>this.Tickets=t.data),this.$Progress.finish()},loadTickets(){axios.get("/api/ticket/report",{params:this.search}).then(({data:t})=>this.Tickets=t.data)}},created(){this.loadTickets()},beforeCreate(){axios.get("api/get_pre_machine").then(t=>{this.categories=t.data.data.Category,this.sites=t.data.data.sites}),axios.get("/api/initial_ticket").then(t=>{this.users=t.data.data.vendors,this.machines=t.data.data.machines,this.search_machines=t.data.data.machines,this.search_sites=t.data.data.sites,this.created_users=t.data.data.created_users}).catch(()=>console.warn("Oh. Something went wrong"))},watch:{async"form.sub_category_id"(t,e){t&&this.get_machine()},async"form.site_id"(t,e){t&&this.get_machine()},"form.category_id":{handler:function(t,e){t&&(axios.get("api/category/"+t).then(t=>{this.sub_categories=t.data.data}),this.get_machine())},deep:!0,initial:!0}}}}).call(this,a(3))},395:function(t,e,a){"use strict";a.r(e);var s=a(35),i=a(1),c=Object(i.a)(s.a,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[t._v("Master Report")]),t._v(" "),a("div",{staticClass:"card-tools"},[a("download-excel",{staticClass:"btn btn-sm btn-primary",attrs:{fetch:t.export_csv,fields:t.json_fields,"before-generate":t.startDownload,"before-finish":t.finishDownload,worksheet:"My Worksheet",type:"csv",name:"master_report.csv"}},[a("span",{staticClass:"labelText"},[a("img",{staticClass:"icon",attrs:{src:t.set_image("images/file.png"),width:"20"}}),t._v("Export CSV")])])],1)]),t._v(" "),a("div",{staticClass:"card-body p-2"},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.getResults()}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"name","get-option-label":t.getLabel,reduce:function(t){return t.id},options:t.search_machines,placeholder:"Enter machines ...",name:"machine_id"},model:{value:t.search.machine_id,callback:function(e){t.$set(t.search,"machine_id",e)},expression:"search.machine_id"}})],1),t._v(" "),a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"site_name",reduce:function(t){return t.id},options:t.search_sites,placeholder:"Select Site...",name:"site_id"},model:{value:t.search.site_id,callback:function(e){t.$set(t.search,"site_id",e)},expression:"search.site_id"}})],1),t._v(" "),a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"site_name",options:["Open","Closed"],placeholder:"Select Status...",name:"status"},model:{value:t.search.status,callback:function(e){t.$set(t.search,"status",e)},expression:"search.status"}})],1),t._v(" "),a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"name",options:t.created_users,reduce:function(t){return t.id},placeholder:"Created by...",name:"created_by"},model:{value:t.search.created_by,callback:function(e){t.$set(t.search,"created_by",e)},expression:"search.created_by"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("datetime",{attrs:{"value-zone":"Asia/Kolkata","input-class":"form-control",placeholder:"Created from date"},model:{value:t.search.created_from,callback:function(e){t.$set(t.search,"created_from",e)},expression:"search.created_from"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("datetime",{attrs:{"value-zone":"Asia/Kolkata","input-class":"form-control",placeholder:"Created to date"},model:{value:t.search.created_to,callback:function(e){t.$set(t.search,"created_to",e)},expression:"search.created_to"}})],1),t._v(" "),a("div",{staticClass:"col col-4 pt-2"},[a("fieldset",{staticStyle:{"max-width":"400px",margin:"auto","text-align":"left"}},[a("div",{staticStyle:{display:"flex","justify-content":"space-between","text-align":"center",height:"39px"}},[a("span",{staticStyle:{display:"inline-block",padding:"5px",border:"solid 1px","border-radius":"5px",width:"100px",margin:"3px"}},[t._v(t._s(t.search.tat_from))]),t._v(" "),a("span",{staticStyle:{top:"25%",position:"relative"}},[t._v("TAT")]),t._v(" "),a("span",{staticStyle:{display:"inline-block",padding:"5px",border:"solid 1px","border-radius":"5px",width:"100px",margin:"3px"}},[t._v(t._s(t.search.tat_to))])]),t._v(" "),a("MultiRangeSlider",{attrs:{baseClassName:"multi-range-slider-bar-only",minValue:t.search.tat_from,maxValue:t.search.tat_to,max:100,min:0,step:1,rangeMargin:0},on:{input:t.UpdateValues}})],1)]),t._v(" "),a("div",{staticClass:"col pt-2"},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Search")]),t._v(" "),a("button",{staticClass:"btn btn-info ml-2",attrs:{type:"button"},on:{click:function(e){return t.reset_filter()}}},[t._v("Reset")])])])])]),t._v(" "),a("div",{staticClass:"card-body table-responsive p-0"},[a("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),a("tbody",t._l(t.Tickets.data,(function(e,s){return a("tr",{key:e.id},[a("td",[t._v(t._s(t.Tickets.from+s))]),t._v(" "),a("td",{staticClass:"text-capitalize"},[t._v(t._s(e.site_name))]),t._v(" "),a("td",[t._v(t._s(e.machine.name))]),t._v(" "),a("td",{on:{click:function(a){return t.view_site_details(e.machine)}}},[t._v(t._s(e.far_no))]),t._v(" "),a("td",[t._v(t._s(e.ticket_no))]),t._v(" "),a("td",[t._v(t._s(e.created_at))]),t._v(" "),a("td",[t._v(t._s(e.created_by_name))]),t._v(" "),a("td",[t._v(t._s(e.complaint_nature))]),t._v(" "),a("td",[t._v(t._s(e.status_during_complaint))]),t._v(" "),a("td",[t._v(t._s(e.problem_description))]),t._v(" "),a("td",t._l(e.problems,(function(s,i){return e.problems?a("p",{key:"p"+i,domProps:{innerHTML:t._s(s.problem)}}):t._e()})),0),t._v(" "),a("td",[t._v(t._s("created by user"==e.status.toLowerCase()?"Open":e.status))]),t._v(" "),a("td",[t._v(t._s("Closed"==e.status?"-":e.current_stage))]),t._v(" "),a("td",[t._v(t._s(t._f("myDate")("Closed"==e.status?"-":e.last_stage?e.last_stage.stage_date:"")))]),t._v(" "),a("td",[t._v(t._s("Closed"==e.status?"-":e.last_stage?e.last_stage.description:"-"))]),t._v(" "),a("td",[t._v(t._s(e.machine_status))]),t._v(" "),a("td",[t._v(t._s(t._f("myDate")(e.likely_date)))]),t._v(" "),a("td",[t._v(t._s(e.actual_date))]),t._v(" "),a("td",[t._v(t._s(e.actual_date?e.tat:"-"))]),t._v(" "),a("td",[t._v(t._s(t._f("toCurrency")(e.estimated_service_cost+e.estimated_material_cost+e.ad_estimated_material_cost+e.ad_estimated_service_cost)))]),t._v(" "),a("td",[t._v(t._s(t._f("toCurrency")(e.actual_service_cost+e.actual_material_cost)))]),t._v(" "),a("td",[t._v(t._s(t._f("toCurrency")(e.production_loss)))])])})),0)])]),t._v(" "),a("div",{staticClass:"card-footer"},[a("pagination",{attrs:{data:t.Tickets},on:{"pagination-change-page":t.getResults}})],1)])])])]),t._v(" "),a("MachinePop",{attrs:{id:"MachineSiteModal3",machine:t.pmModalData}})],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Sl no")]),t._v(" "),a("th",[t._v("Site name")]),t._v(" "),a("th",[t._v("Equipment Description")]),t._v(" "),a("th",[t._v("FAR No")]),t._v(" "),a("th",[t._v("Complaint No")]),t._v(" "),a("th",[t._v("Complaint date")]),t._v(" "),a("th",[t._v("Complaint Raised By")]),t._v(" "),a("th",[t._v("Complaint Nature")]),t._v(" "),a("th",[t._v("Status During Complaint")]),t._v(" "),a("th",[t._v("Problem description")]),t._v(" "),a("th",[t._v("Additional Problems")]),t._v(" "),a("th",[t._v("Current Status")]),t._v(" "),a("th",[t._v("Current Stage")]),t._v(" "),a("th",[t._v("Current Stage Date")]),t._v(" "),a("th",[t._v("Current Stage Description")]),t._v(" "),a("th",[t._v("Current Ticket Condition")]),t._v(" "),a("th",[t._v("Expected Resolution date")]),t._v(" "),a("th",[t._v("Actual Resolve Date")]),t._v(" "),a("th",[t._v("TAT")]),t._v(" "),a("th",[t._v("Estimated Cost")]),t._v(" "),a("th",[t._v("Actual Cost")]),t._v(" "),a("th",[t._v("Production Loss")])])])}],!1,null,null,null);e.default=c.exports}}]);
//# sourceMappingURL=11.bundle.f713e30b5468e22db8a3.js.map