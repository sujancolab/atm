(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{378:function(t,e,a){"use strict";a.r(e);var s=a(15),i=(a(55),a(56),a(5)),c={components:{VueTagsInput:a.n(i).a,MultiRangeSlider:s.a},data:()=>({created_users:[],search_machines:[],search_sites:[],search:{page:1,machine_id:"",site_id:"",created_by:"",created_from:"",created_to:"",tat_from:0,tat_to:90},categories:[],sub_categories:[],sites:[],selected_machine:"",users:[],machines:[],Tickets:{},json_fields:{"Ticket no":"ticket_no","Last Name":"last_name",Email:"email",Type:"type","Country Code":"country_code","Phone Number":"phone_number","VSD ID":"vsd_id","License Number":"license_number"},json_meta:[[{key:"charset",value:"utf-8"}]]}),methods:{reset_filter(){this.search={page:1,machine_id:"",site_id:"",created_by:"",created_from:"",created_to:"",tat_from:0,tat_to:90},this.getResults()},UpdateValues(t){this.search.tat_from=t.minValue,this.search.tat_to=t.maxValue},export_csv:async()=>(await axios.get("api/ticket/export")).data.data,startDownload(){Swal.fire({title:"Please Wait !",html:"Data populating",allowOutsideClick:!1,onBeforeOpen:()=>{Swal.showLoading()}})},finishDownload(){Swal.close()},getLabel:t=>"object"==typeof t?t.far_no+" - "+t.name:t,getResults(t=1){this.$Progress.start(),this.search.page=t,axios.get("/api/ticket",{params:this.search}).then(({data:t})=>this.Tickets=t.data),this.$Progress.finish()},loadTickets(){axios.get("/api/ticket",{params:this.search}).then(({data:t})=>this.Tickets=t.data)}},created(){this.loadTickets()},beforeCreate(){axios.get("api/get_pre_machine").then(t=>{this.categories=t.data.data.Category,this.sites=t.data.data.sites}),axios.get("/api/initial_ticket").then(t=>{this.users=t.data.data.vendors,this.machines=t.data.data.machines,this.search_machines=t.data.data.machines,this.search_sites=t.data.data.sites,this.created_users=t.data.data.created_users}).catch(()=>console.warn("Oh. Something went wrong"))},watch:{async"form.sub_category_id"(t,e){t&&this.get_machine()},async"form.site_id"(t,e){t&&this.get_machine()},"form.category_id":{handler:function(t,e){t&&(axios.get("api/category/"+t).then(t=>{this.sub_categories=t.data.data}),this.get_machine())},deep:!0,initial:!0}}},r=a(1),n=Object(r.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body p-2"},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.getResults()}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"name","get-option-label":t.getLabel,reduce:function(t){return t.id},options:t.search_machines,placeholder:"Enter machines ...",name:"machine_id"},model:{value:t.search.machine_id,callback:function(e){t.$set(t.search,"machine_id",e)},expression:"search.machine_id"}})],1),t._v(" "),a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"site_name",reduce:function(t){return t.id},options:t.search_sites,placeholder:"Select Site...",name:"site_id"},model:{value:t.search.site_id,callback:function(e){t.$set(t.search,"site_id",e)},expression:"search.site_id"}})],1),t._v(" "),a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"site_name",options:["Open","Closed"],placeholder:"Select Status...",name:"status"},model:{value:t.search.status,callback:function(e){t.$set(t.search,"status",e)},expression:"search.status"}})],1),t._v(" "),a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"name",options:t.created_users,reduce:function(t){return t.id},placeholder:"Created by...",name:"created_by"},model:{value:t.search.created_by,callback:function(e){t.$set(t.search,"created_by",e)},expression:"search.created_by"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("datetime",{attrs:{"value-zone":"Asia/Kolkata","input-class":"form-control",placeholder:"Created from date"},model:{value:t.search.created_from,callback:function(e){t.$set(t.search,"created_from",e)},expression:"search.created_from"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("datetime",{attrs:{"value-zone":"Asia/Kolkata","input-class":"form-control",placeholder:"Created to date"},model:{value:t.search.created_to,callback:function(e){t.$set(t.search,"created_to",e)},expression:"search.created_to"}})],1),t._v(" "),a("div",{staticClass:"col col-4 pt-2"},[a("fieldset",{staticStyle:{"max-width":"400px",margin:"auto","text-align":"left"}},[a("div",{staticStyle:{display:"flex","justify-content":"space-between","text-align":"center",height:"39px"}},[a("span",{staticStyle:{display:"inline-block",padding:"5px",border:"solid 1px","border-radius":"5px",width:"100px",margin:"3px"}},[t._v(t._s(t.search.tat_from))]),t._v(" "),a("span",{staticStyle:{top:"25%",position:"relative"}},[t._v("TAT")]),t._v(" "),a("span",{staticStyle:{display:"inline-block",padding:"5px",border:"solid 1px","border-radius":"5px",width:"100px",margin:"3px"}},[t._v(t._s(t.search.tat_to))])]),t._v(" "),a("MultiRangeSlider",{attrs:{baseClassName:"multi-range-slider-bar-only",minValue:t.search.tat_from,maxValue:t.search.tat_to,max:100,min:0,step:1,rangeMargin:0},on:{input:t.UpdateValues}})],1)]),t._v(" "),a("div",{staticClass:"col pt-2"},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Search")]),t._v(" "),a("button",{staticClass:"btn btn-info ml-2",attrs:{type:"button"},on:{click:function(e){return t.reset_filter()}}},[t._v("Reset")])])])])]),t._v(" "),a("div",{staticClass:"card-body table-responsive p-0"},[a("table",{staticClass:"table table-hover"},[t._m(1),t._v(" "),a("tbody",t._l(t.Tickets.data,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.ticket_no))]),t._v(" "),a("td",{staticClass:"text-capitalize"},[t._v(t._s(e.machine.name))]),t._v(" "),a("td",[t._v(t._s(e.machine.far_no))]),t._v(" "),a("td",[t._v(t._s(e.site?e.site.site_name:"-"))]),t._v(" "),a("td",[t._v(t._s(e.created_by_name))]),t._v(" "),a("td",[t._v(t._s(t._f("myDate")(e.created_at)))]),t._v(" "),a("td",[t._v(t._s(t._f("myDate")(e.likely_date)))]),t._v(" "),a("td",[t._v(t._s(e.actual_date))]),t._v(" "),a("td",{domProps:{innerHTML:t._s(e.status)}}),t._v(" "),a("td",[t._v(t._s(e.actual_date?e.tat:"-"))])])})),0)])]),t._v(" "),a("div",{staticClass:"card-footer"},[a("pagination",{attrs:{data:t.Tickets},on:{"pagination-change-page":t.getResults}})],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title"},[this._v("Ticket Report")]),this._v(" "),e("div",{staticClass:"card-tools"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Ticket No ")]),t._v(" "),a("th",[t._v("Machine Name")]),t._v(" "),a("th",[t._v("Machine Far No")]),t._v(" "),a("th",[t._v("Site")]),t._v(" "),a("th",[t._v("Created By")]),t._v(" "),a("th",[t._v("Created Date")]),t._v(" "),a("th",[t._v("Expected date")]),t._v(" "),a("th",[t._v("Resoulution date")]),t._v(" "),a("th",[t._v("Ticket Status")]),t._v(" "),a("th",[t._v("TAT")])])])}],!1,null,null,null);e.default=n.exports}}]);
//# sourceMappingURL=15.bundle.0d52c8b93c3405ebc509.js.map