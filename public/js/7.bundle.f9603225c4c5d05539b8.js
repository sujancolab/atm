(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{241:function(t,e,a){var s=a(242);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(18).default)("9f491726",s,!0,{})},242:function(t,e,a){(t.exports=a(9)(!1)).push([t.i,"\n.bg-red {\n  background-color: #ef5563 !important;\n}\n.bg-green {\n  background-color: #70ed70 !important;\n}\n.bg-yellow {\n  background-color: #f1c84c !important;\n}\n",""])},35:function(t,e,a){"use strict";(function(t){var s=a(16),i=(a(60),a(61),a(7)),c=a.n(i);e.a={components:{VueTagsInput:c(),MultiRangeSlider:s.a,MachinePop:()=>a.e(0).then(a.bind(null,49))},data:()=>({pmModalData:"",created_users:[],search_machines:[],search_sites:[],search:{page:1,machine_id:"",site_id:"",created_by:"",created_from:"",created_to:"",tat_from:0,tat_to:90,color:""},categories:[],sub_categories:[],sites:[],selected_machine:"",users:[],machines:[],Tickets:{},json_fields:{"Ticket no":"ticket_no","Last Name":"last_name",Email:"email",Type:"type","Country Code":"country_code","Phone Number":"phone_number","VSD ID":"vsd_id","License Number":"license_number"},json_meta:[[{key:"charset",value:"utf-8"}]]}),methods:{view_site_details(e){this.pmModalData=e,t("#MachineSiteModal2").modal("show")},reset_filter(){this.search={page:1,machine_id:"",site_id:"",created_by:"",created_from:"",created_to:"",tat_from:0,tat_to:90},this.getResults()},UpdateValues(t){this.search.tat_from=t.minValue,this.search.tat_to=t.maxValue},export_csv:async()=>(await axios.get("api/ticket/export")).data.data,startDownload(){Swal.fire({title:"Please Wait !",html:"Data populating",allowOutsideClick:!1,onBeforeOpen:()=>{Swal.showLoading()}})},finishDownload(){Swal.close()},getLabel:t=>"object"==typeof t?t.far_no+" - "+t.name:t,getResults(t=1){this.$Progress.start(),this.search.page=t,axios.get("/api/ticket",{params:this.search}).then(({data:t})=>this.Tickets=t.data),this.$Progress.finish()},loadTickets(){axios.get("/api/ticket",{params:this.search}).then(({data:t})=>this.Tickets=t.data)}},created(){this.loadTickets()},beforeCreate(){axios.get("api/get_pre_machine").then(t=>{this.categories=t.data.data.Category,this.sites=t.data.data.sites}),axios.get("/api/initial_ticket").then(t=>{this.users=t.data.data.vendors,this.machines=t.data.data.machines,this.search_machines=t.data.data.machines,this.search_sites=t.data.data.sites,this.created_users=t.data.data.created_users}).catch(()=>console.warn("Oh. Something went wrong"))},watch:{async"form.sub_category_id"(t,e){t&&this.get_machine()},async"form.site_id"(t,e){t&&this.get_machine()},"form.category_id":{handler:function(t,e){t&&(axios.get("api/category/"+t).then(t=>{this.sub_categories=t.data.data}),this.get_machine())},deep:!0,initial:!0}}}}).call(this,a(3))},401:function(t,e,a){"use strict";a.r(e);var s=a(35),i=a(1);var c=function(t){a(241)},o=Object(i.a)(s.a,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body p-2"},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.getResults()}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"name","get-option-label":t.getLabel,reduce:function(t){return t.id},options:t.search_machines,placeholder:"Enter machines ...",name:"machine_id"},model:{value:t.search.machine_id,callback:function(e){t.$set(t.search,"machine_id",e)},expression:"search.machine_id"}})],1),t._v(" "),a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"site_name",reduce:function(t){return t.id},options:t.search_sites,placeholder:"Select Site...",name:"site_id"},model:{value:t.search.site_id,callback:function(e){t.$set(t.search,"site_id",e)},expression:"search.site_id"}})],1),t._v(" "),a("div",{staticClass:"col col-2"},[a("v-select",{attrs:{label:"site_name",options:["Open","Closed"],placeholder:"Select Status...",name:"status"},model:{value:t.search.status,callback:function(e){t.$set(t.search,"status",e)},expression:"search.status"}})],1),t._v(" "),a("div",{staticClass:"col col-2"},[a("v-select",{attrs:{label:"name",options:t.created_users,reduce:function(t){return t.id},placeholder:"Created by...",name:"created_by"},model:{value:t.search.created_by,callback:function(e){t.$set(t.search,"created_by",e)},expression:"search.created_by"}})],1),t._v(" "),a("div",{staticClass:"col col-2"},[a("v-select",{attrs:{label:"name",options:["Red","Yellow","Green"],placeholder:"Choose Color...",name:"color"},model:{value:t.search.color,callback:function(e){t.$set(t.search,"color",e)},expression:"search.color"}})],1),t._v(" "),a("div",{staticClass:"col col-2 pt-2"},[a("datetime",{attrs:{"value-zone":"Asia/Kolkata","input-class":"form-control",placeholder:"Created from date"},model:{value:t.search.created_from,callback:function(e){t.$set(t.search,"created_from",e)},expression:"search.created_from"}})],1),t._v(" "),a("div",{staticClass:"col col-2 pt-2"},[a("datetime",{attrs:{"value-zone":"Asia/Kolkata","input-class":"form-control",placeholder:"Created to date"},model:{value:t.search.created_to,callback:function(e){t.$set(t.search,"created_to",e)},expression:"search.created_to"}})],1),t._v(" "),a("div",{staticClass:"col col-2 pt-2"},[a("v-select",{attrs:{label:"site_name",options:["Major","Minor"],placeholder:"Select Complaint Nature...",name:"complaint_nature"},model:{value:t.search.complaint_nature,callback:function(e){t.$set(t.search,"complaint_nature",e)},expression:"search.complaint_nature"}})],1),t._v(" "),a("div",{staticClass:"col col-4 pt-2"},[a("fieldset",{staticStyle:{"max-width":"400px",margin:"auto","text-align":"left"}},[a("div",{staticStyle:{display:"flex","justify-content":"space-between","text-align":"center",height:"39px"}},[a("span",{staticStyle:{display:"inline-block",padding:"5px",border:"solid 1px","border-radius":"5px",width:"100px",margin:"3px"}},[t._v(t._s(t.search.tat_from))]),t._v(" "),a("span",{staticStyle:{top:"25%",position:"relative"}},[t._v("TAT")]),t._v(" "),a("span",{staticStyle:{display:"inline-block",padding:"5px",border:"solid 1px","border-radius":"5px",width:"100px",margin:"3px"}},[t._v(t._s(t.search.tat_to))])]),t._v(" "),a("MultiRangeSlider",{attrs:{baseClassName:"multi-range-slider-bar-only",minValue:t.search.tat_from,maxValue:t.search.tat_to,max:100,min:0,step:1,rangeMargin:0},on:{input:t.UpdateValues}})],1)]),t._v(" "),a("div",{staticClass:"col pt-2"},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Search")]),t._v(" "),a("button",{staticClass:"btn btn-info ml-2",attrs:{type:"button"},on:{click:function(e){return t.reset_filter()}}},[t._v("Reset")])])])])]),t._v(" "),a("div",{staticClass:"card-body table-responsive p-0 ticketTable"},[a("table",{staticClass:"table table-hover"},[t._m(1),t._v(" "),a("tbody",t._l(t.Tickets.data,(function(e){return a("tr",{key:e.id,class:e.row_color},[a("td",[t._v(t._s(e.ticket_no))]),t._v(" "),a("td",{staticClass:"text-capitalize"},[t._v(t._s(e.machine.name))]),t._v(" "),a("td",{on:{click:function(a){return t.view_site_details(e.machine)}}},[t._v(t._s(e.machine.far_no))]),t._v(" "),a("td",[t._v(t._s(e.site?e.site.site_name:"-"))]),t._v(" "),a("td",[t._v(t._s(e.created_by_name))]),t._v(" "),a("td",[t._v(t._s(t._f("myDate")(e.created_at)))]),t._v(" "),a("td",[t._v(t._s(t._f("myDate")(e.likely_date)))]),t._v(" "),a("td",[t._v(t._s(e.actual_date))]),t._v(" "),a("td",[t._v(t._s("created by user"==e.status.toLowerCase()?"Open":e.status))]),t._v(" "),a("td",[t._v(t._s(e.complaint_nature))]),t._v(" "),a("td",[t._v(t._s(e.actual_date?e.tat:"-"))])])})),0)])]),t._v(" "),a("div",{staticClass:"card-footer"},[a("pagination",{attrs:{data:t.Tickets},on:{"pagination-change-page":t.getResults}})],1)])])])]),t._v(" "),a("MachinePop",{attrs:{id:"MachineSiteModal2",machine:t.pmModalData}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title"},[this._v("Ticket Report")]),this._v(" "),e("div",{staticClass:"card-tools"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Ticket No ")]),t._v(" "),a("th",[t._v("Machine Name")]),t._v(" "),a("th",[t._v("Machine Far No")]),t._v(" "),a("th",[t._v("Site")]),t._v(" "),a("th",[t._v("Created By")]),t._v(" "),a("th",[t._v("Created Date")]),t._v(" "),a("th",[t._v("Expected date")]),t._v(" "),a("th",[t._v("Resolution date")]),t._v(" "),a("th",[t._v("Ticket Status")]),t._v(" "),a("th",[t._v("Complaint Nature")]),t._v(" "),a("th",[t._v("TAT")])])])}],!1,c,null,null);e.default=o.exports}}]);
//# sourceMappingURL=7.bundle.f9603225c4c5d05539b8.js.map