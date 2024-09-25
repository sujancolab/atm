(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"9Yv+":function(e,t,a){"use strict";a.r(t);var s=a("eyXw"),i={name:"CombinedExpenses",components:{MonthPicker:s.a,MonthPickerInput:s.b},data:()=>({sub_tickets:"",sub_index:"",pmModalData:"",created_users:[],search_machines:[],search_sites:[],search_tickets:[],search:{page:1,machine_id:"",site_id:"",category_id:"",sub_category_id:"",date_from:"",date_to:"",report_type:"machine wise"},categories:[],sub_categories:[],sites:[],selected_machine:"",users:[],machines:[],Tickets:{},clearEmittedText:"",default_month:"",json_fields:{"Machine Name":"name","FAR No":"far_no","Purchase Date":"purchase_date","Purchase Price":"purchase_price","No of Ticket":"total_tickets",Breakdown:"total_Breakdown",Preventive:"total_Periodic",Major:"total_major",Minor:"total_minor","Actual Material Expenses":"material_expenses","Actual Service Expenses":"service_expenses","Total Expenses":"total_expenses",PDV:"depreciated_amount"},json_site_fields:{"Site Name":"site_name","Site ID":"site_id","No of Ticket":"total_tickets",Breakdown:"total_Breakdown",Preventive:"total_Periodic",Major:"total_major",Minor:"total_minor","Actual Material Expenses":"material_expenses","Actual Service Expenses":"service_expenses","Total Expenses":"total_expenses"},json_meta:[[{key:"charset",value:"utf-8"}]]}),methods:{async get_tickets(e,t){this.sub_tickets="";let a={};a.machine_id=this.search.machine_id,a.site_id=this.search.site_id,a.category_id=this.search.category_id,a.sub_category_id=this.search.sub_category_id,a.date_from=this.search.date_from,a.date_to=this.search.date_to,a.report_type=this.search.report_type,"machine wise"==this.search.report_type&&(a.machine_id=e.id),"site wise"==this.search.report_type&&(a.site_id=e.id),axios.post("/api/reports_child",a).then(e=>{this.sub_tickets=e.data.data}).catch(e=>{console.error(e)})},showClearText(){this.clearEmittedText="emitted",this.default_month="",window.setTimeout(()=>{this.clearEmittedText=null},1e3)},async get_machine(){axios.get("/api/reports/machines",{params:{site_id:this.search.site_id,category_id:this.search.category_id,sub_category_id:this.search.sub_category_id}}).then(e=>{this.search_machines=e.data.data}).catch(()=>console.warn("Oh. Something went wrong"))},reset_filter(){this.search={page:1,machine_id:"",site_id:"",category_id:"",sub_category_id:"",monthYear:"",report_type:"machine wise"},this.getResults()},UpdateValues(e){this.search.tat_from=e.minValue,this.search.tat_to=e.maxValue},async export_csv(){this.search.report_type="machine wise"==this.search.report_type?"machine wise export":"site wise export";const e=await axios.post("api/reports",this.search);return this.search.report_type="machine wise export"==this.search.report_type?"machine wise":"site wise",e.data.data},startDownload(){Swal.fire({title:"Please Wait !",html:"Data populating",allowOutsideClick:!1,onBeforeOpen:()=>{Swal.showLoading()}})},finishDownload(){Swal.close()},getLabel:e=>"object"==typeof e?e.far_no+" - "+e.name:e,getResults(e=1){this.$Progress.start(),this.sub_tickets="",this.sub_index="",this.search.page=e,axios.post("/api/reports",this.search).then(e=>{this.Tickets=e.data.data}).catch(e=>{console.error(e)}),this.$Progress.finish()}},created(){this.getResults()},beforeCreate(){axios.get("api/get_pre_machine").then(e=>{this.categories=e.data.data.Category,this.sites=e.data.data.sites}),axios.get("/api/initial_ticket").then(e=>{this.users=e.data.data.vendors,this.machines=e.data.data.machines,this.search_machines=e.data.data.machines,this.search_sites=e.data.data.sites,this.created_users=e.data.data.created_users}).catch(()=>console.warn("Oh. Something went wrong"))},watch:{async"search.sub_category_id"(e,t){e&&this.get_machine()},async"search.site_id"(e,t){e&&this.get_machine()},"search.category_id":{handler:function(e,t){e&&(axios.get("api/category/"+e).then(e=>{this.sub_categories=e.data.data}),this.get_machine())},deep:!0,initial:!0}}},r=a("JFUb"),c=Object(r.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[e._m(0),e._v(" "),a("div",{staticClass:"card-body p-2"},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.getResults()}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col col-2"},[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search.report_type,expression:"search.report_type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"optradio",value:"site wise"},domProps:{checked:e._q(e.search.report_type,"site wise")},on:{change:function(t){return e.$set(e.search,"report_type","site wise")}}}),e._v("Site Wise\n                                        ")])]),e._v(" "),a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search.report_type,expression:"search.report_type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"optradio",value:"machine wise"},domProps:{checked:e._q(e.search.report_type,"machine wise")},on:{change:function(t){return e.$set(e.search,"report_type","machine wise")}}}),e._v("Machine Wise\n                                        ")])])]),e._v(" "),a("div",{staticClass:"col col-2"},[a("v-select",{attrs:{label:"site_name",reduce:function(e){return e.id},options:e.search_sites,placeholder:"Select Site...",name:"site_id"},model:{value:e.search.site_id,callback:function(t){e.$set(e.search,"site_id",t)},expression:"search.site_id"}})],1),e._v(" "),a("div",{staticClass:"col col-2"},[a("datetime",{attrs:{"value-zone":"Asia/Kolkata","input-class":"form-control",placeholder:"Created from date"},model:{value:e.search.date_from,callback:function(t){e.$set(e.search,"date_from",t)},expression:"search.date_from"}})],1),e._v(" "),a("div",{staticClass:"col col-2"},[a("datetime",{attrs:{"value-zone":"Asia/Kolkata","input-class":"form-control",placeholder:"Created to date"},model:{value:e.search.date_to,callback:function(t){e.$set(e.search,"date_to",t)},expression:"search.date_to"}})],1),e._v(" "),a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"name",reduce:function(e){return e.id},options:e.categories,placeholder:"Choose Category ..."},model:{value:e.search.category_id,callback:function(t){e.$set(e.search,"category_id",t)},expression:"search.category_id"}},[e._v("\\\n                                    ")])],1),e._v(" "),a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"name",reduce:function(e){return e.id},options:e.sub_categories,placeholder:"Choose description ..."},model:{value:e.search.sub_category_id,callback:function(t){e.$set(e.search,"sub_category_id",t)},expression:"search.sub_category_id"}})],1),e._v(" "),a("div",{staticClass:"col col-2"},[a("v-select",{attrs:{label:"name","get-option-label":e.getLabel,reduce:function(e){return e.id},options:e.search_machines,placeholder:"Enter machines ...",name:"machine_id"},model:{value:e.search.machine_id,callback:function(t){e.$set(e.search,"machine_id",t)},expression:"search.machine_id"}})],1),e._v(" "),a("div",{staticClass:"col"},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("\n                                        Search\n                                    ")]),e._v(" "),a("button",{staticClass:"btn btn-info ml-2",attrs:{type:"button"},on:{click:function(t){return e.reset_filter()}}},[e._v("\n                                        Reset\n                                    ")]),e._v(" "),"machine wise"==e.search.report_type?a("download-excel",{staticClass:"btn btn-warning ml-2",attrs:{fetch:e.export_csv,fields:e.json_fields,"before-generate":e.startDownload,"before-finish":e.finishDownload,worksheet:"My Worksheet",type:"csv",name:"machine_expenses.csv"}},[a("span",{staticClass:"labelText"},[a("i",{staticClass:"fa fa-file-excel-o",attrs:{"aria-hidden":"true"}}),e._v("\n                                            Export as CSV")])]):a("download-excel",{staticClass:"btn btn-warning ml-2",attrs:{fetch:e.export_csv,fields:e.json_site_fields,"before-generate":e.startDownload,"before-finish":e.finishDownload,worksheet:"My Worksheet",type:"csv",name:"site_expenses.csv"}},[a("span",{staticClass:"labelText"},[a("i",{staticClass:"fa fa-file-excel-o",attrs:{"aria-hidden":"true"}}),e._v("\n                                            Export as CSV")])])],1)])])]),e._v(" "),a("div",{staticClass:"card-body table-responsive p-0 ticketTable"},[e.Tickets&&e.Tickets.records?a("table",{staticClass:"table table-hover table-striped"},[a("thead",[a("tr",[a("th",[e._v(e._s("machine wise"==e.search.report_type?"Machine Name":"Site Name"))]),e._v(" "),a("th",[e._v(e._s("machine wise"==e.search.report_type?"FAR No":"Site ID"))]),e._v(" "),"machine wise"==e.search.report_type?a("th",[e._v("DOP")]):e._e(),e._v(" "),"machine wise"==e.search.report_type?a("th",[e._v("Purchase Price")]):e._e(),e._v(" "),"machine wise"==e.search.report_type?a("th",{staticStyle:{"text-align":"right"}},[e._v("PDV")]):e._e(),e._v(" "),a("th",[e._v("No of Ticket")]),e._v(" "),a("th",[e._v("Breakdown ")]),e._v(" "),a("th",[e._v("Preventive")]),e._v(" "),a("th",[e._v("Major")]),e._v(" "),a("th",[e._v("Minor")]),e._v(" "),a("th",{staticStyle:{"text-align":"right"}},[e._v("Material Expenses ")]),e._v(" "),a("th",{staticStyle:{"text-align":"right"}},[e._v("Service Expenses")]),e._v(" "),a("th",{staticStyle:{"text-align":"right"}},[e._v("Total Expenses")])])]),e._v(" "),a("tbody",[e._l(e.Tickets.records.data,(function(t,s){return[a("tr",{key:t.id,class:t.row_color},[a("td",[e._v(" "+e._s("machine wise"==e.search.report_type?t.name:t.site_name)+"\n                                        ")]),e._v(" "),a("td",{staticStyle:{"min-width":"130px"}},[e._v(" "+e._s("machine wise"==e.search.report_type?t.far_no:t.site_id)+"\n                                            "),a("span",{staticClass:"pl-2",staticStyle:{float:"right"},on:{click:function(a){e.get_tickets(t,s),e.sub_index=s+1}}},[a("i",{staticClass:"fa fa-plus bg-dark"})])]),e._v(" "),"machine wise"==e.search.report_type?a("td",{attrs:{align:"right"}},[e._v(e._s(e._f("myDate")(t.purchase_date)))]):e._e(),e._v(" "),"machine wise"==e.search.report_type?a("td",{attrs:{align:"right"}},[e._v(e._s(e._f("toCurrency")(t.purchase_price)))]):e._e(),e._v(" "),"machine wise"==e.search.report_type?a("td",{attrs:{align:"right"}},[e._v(e._s(e._f("toCurrency")(t.depreciated_amount)))]):e._e(),e._v(" "),a("td",{attrs:{align:"center"}},[e._v(e._s(t.total_tickets))]),e._v(" "),a("td",{attrs:{align:"center"}},[e._v(e._s(t.total_Breakdown))]),e._v(" "),a("td",{attrs:{align:"center"}},[e._v(e._s(t.total_Periodic))]),e._v(" "),a("td",{attrs:{align:"center"}},[e._v(e._s(t.total_major))]),e._v(" "),a("td",{attrs:{align:"center"}},[e._v(e._s(t.total_minor))]),e._v(" "),a("td",{attrs:{align:"right"}},[e._v(e._s(e._f("toCurrency")(t.material_expenses)))]),e._v(" "),a("td",{attrs:{align:"right"}},[e._v(e._s(e._f("toCurrency")(t.service_expenses)))]),e._v(" "),a("td",{attrs:{align:"right"}},[e._v(e._s(e._f("toCurrency")(t.total_expenses)))])]),e._v(" "),e.sub_tickets&&e.sub_index==s+1?a("tr",{key:"sk"+t.id},[a("td",{attrs:{colspan:"10",align:"center"}},[a("table",[a("thead",[a("tr",[a("th",[e._v("Machine Name")]),e._v(" "),a("th",[e._v(" "+e._s("machine wise"==e.search.report_type?"Site Name":"FAR No")+" ")]),e._v(" "),a("th",[e._v("Operator Name")]),e._v(" "),a("th",[e._v("Ticket No")]),e._v(" "),a("th",[e._v("DOM")]),e._v(" "),a("th",[e._v("Material Expenses ")]),e._v(" "),a("th",[e._v("Material PO")]),e._v(" "),a("th",[e._v("Service Expenses")]),e._v(" "),a("th",[e._v("Service PO")]),e._v(" "),a("th",[e._v("Total Expenses")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Fault")]),e._v(" "),a("th",[e._v("TAT")])])]),e._v(" "),a("tbody",e._l(e.sub_tickets,(function(s,i){return e.sub_tickets?a("tr",{key:t.id+"-"+i},[a("td",[e._v(" "+e._s(s.machine.name))]),e._v(" "),a("td",[e._v(" "+e._s("machine wise"==e.search.report_type?s.site.site_name:s.machine.far_no))]),e._v(" "),a("td",{attrs:{align:"center"}},[e._v(e._s(null!=s.machine.machine_operators?s.machine.machine_operators.operator_name:""))]),e._v(" "),a("td",[e._v(e._s(s.ticket_no))]),e._v(" "),a("td",[e._v(e._s(e._f("myDate")(s.actual_date)))]),e._v(" "),a("td",{attrs:{align:"right"}},[e._v(e._s(e._f("toCurrency")(s.actual_material_cost)))]),e._v(" "),a("td",{attrs:{align:"center"}},e._l(s.actual_estimated_material_files,(function(t,s){return a("a",{attrs:{href:t.file,target:"_blank"}},[a("i",{staticClass:"fa fa-file-pdf",staticStyle:{color:"red"},attrs:{"aria-hidden":"true"}}),e._v("  ")])})),0),e._v(" "),a("td",{attrs:{align:"right"}},[e._v(e._s(e._f("toCurrency")(s.actual_service_cost)))]),e._v(" "),a("td",{attrs:{align:"center"}},e._l(s.actual_estimated_service_files,(function(t,s){return a("a",{attrs:{href:t.file,target:"_blank"}},[a("i",{staticClass:"fa fa-file-pdf",staticStyle:{color:"red"},attrs:{"aria-hidden":"true"}}),e._v("  ")])})),0),e._v(" "),a("td",{attrs:{align:"right"}},[e._v(e._s(e._f("toCurrency")(s.actual_material_cost+s.actual_service_cost)))]),e._v(" "),a("td",["Breakdown Maintenance"==s.ticket_type?a("span",{staticClass:"red"},[e._v("Breakdown")]):e._e(),e._v(" "),"Periodic Maintenance"==s.ticket_type?a("span",[e._v("Preventive")]):e._e()]),e._v(" "),a("td",[a("span",{class:{red:"Major"==s.complaint_nature}},[e._v(e._s(s.complaint_nature))])]),e._v(" "),a("td",[e._v("\n                                                                "+e._s("Closed"==s.status?s.tat:"-")+"\n                                                            ")])]):e._e()})),0)])])]):e._e()]}))],2),e._v(" "),a("tfoot",[a("tr",{staticClass:"table-dark"},["machine wise"==e.search.report_type?a("td",{attrs:{colspan:"9"}},[a("strong",[e._v("Total")])]):e._e(),e._v(" "),"machine wise"==e.search.report_type?a("td"):a("td",{attrs:{colspan:"7"}},[a("strong",[e._v("Total")])]),e._v(" "),a("td",{attrs:{align:"right"}},[e.Tickets&&e.Tickets.actual_material_cost?a("span",[e._v(e._s(e._f("toCurrency")(e.Tickets.actual_material_cost)))]):e._e()]),e._v(" "),a("td",{attrs:{align:"right"}},[e.Tickets&&e.Tickets.actual_service_cost?a("span",[e._v(e._s(e._f("toCurrency")(e.Tickets.actual_service_cost)))]):e._e()]),e._v(" "),a("td",{attrs:{align:"right"}},[e._v(e._s(e._f("toCurrency")(e.Tickets.actual_material_cost+e.Tickets.actual_service_cost))+"\n                                    ")])])])]):e._e()]),e._v(" "),e.Tickets&&e.Tickets.records?a("div",{staticClass:"card-footer"},[a("pagination",{attrs:{data:e.Tickets.records},on:{"pagination-change-page":e.getResults}})],1):e._e()])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header"},[t("h3",{staticClass:"card-title"},[this._v("Combined Expense Expenses Report")]),this._v(" "),t("div",{staticClass:"card-tools"})])}],!1,null,null,null);t.default=c.exports}}]);
//# sourceMappingURL=21.bundle.d573418d6d47c7855723.js.map