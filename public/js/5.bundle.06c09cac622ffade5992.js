(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{237:function(e,t,a){var s=a(238);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(48).default)("f79a1f5a",s,!0,{})},238:function(e,t,a){(e.exports=a(10)(!1)).push([e.i,"\n.bs {\r\n    border: 1px solid #808080a8;\r\n    border-radius: 5px;\n}\r\n",""])},32:function(e,t,a){"use strict";(function(e){t.a={data:()=>({search_machines:[],search_sites:[],search:{page:1,machine_id:"",site_id:""},popticket:{},categories:[],sub_categories:[],sites:[],selected_machine:"",users:[],machines:[],Tickets:{},editmode:!1,MaterialCost:null,ServiceCost:null,form:new Form({id:"",site_id:"",category_id:"",sub_category_id:"",free_service_no:"",ticket_type:"Periodic Maintenance",service_type:"Paid Service",machine_id:"",ticket_no:"",vendor_id:"",user_id:"",likely_date:"",estimated_material_cost:"",estimated_service_cost:"",maintenance_provider:"vendor",problem_description:"",complaint_nature:"Major"}),stages:[{id:"",stage_no:"",stage_date:"",description:"",file:"",new_file:""}],formclose:new Form({id:"",machine_status:"",edit_type:"closeticket",ticket_type:"Periodic Maintenance",actual_date:"",actual_material_cost:"",actual_service_cost:"",current_run_hour:"",current_km_run:"",current_production_fig:"",production_loss:"",production_loss_amount:"",status:"Closed",vendor_resolve_date:"",vendor_attain_date:"",vendor_response_date:"",vendor_call_date:""}),pop_machine:"",pop_ticket:"",opn_stage:["Vendor created","Vendor Assigned","Order issued","Payment under process","Payment Done","Logistics under process","Materials despatched","Material received at site","Maintainace under progress"],last_stage_index:0,last_stage_date:""}),methods:{getLabel:e=>"object"==typeof e?e.far_no+" - "+e.name:e,viewModal(t){this.pop_ticket="",axios.get("api/ticket/"+t.id).then(e=>{this.pop_ticket=e.data.data}).catch(e=>{this.pop_ticket=t}),axios.get("api/category/"+t.category_id).then(e=>{this.sub_categories=e.data.data}),e("#viewmodal").modal("show")},AddStage(){this.stages.push({id:"",stage_no:"",stage_date:"",description:"",file:"",new_file:""})},async choose_stage_file(e,t){this.stages[t].new_file=e.target.files[0]},async uploadMaterialCost(e){this.MaterialCost=e.target.files},async uploadServiceCost(e){this.ServiceCost=e.target.files},getResults(e=1){this.$Progress.start(),this.search.page=e,axios.get("/api/ticket",{params:this.search}).then(({data:e})=>this.Tickets=e.data),this.$Progress.finish()},submitCloseTicket(){this.$forceUpdate(),this.$validator.validateAll("closeticket").then(async t=>{if(t){let t=this.pop_machine.last_maintenances?this.pop_machine.last_maintenances.datetime:this.pop_machine.last_maintenance_date;if(t&&this.formclose.actual_date&&Date.parse(moment(this.formclose.actual_date).format("MMM,DD YYYY"))<Date.parse(moment(t).format("MMM,DD YYYY")))Swal.fire("You can not add previous date's data, Please remove record from maintenance list.","","warning");else{let t=this.$loading.show({container:this.$refs.vps_submit_pop});this.formclose.put("/api/ticket/"+this.formclose.id).then(a=>{a.data.success&&(e("#closemodal").modal("hide"),Toast.fire({icon:"success",title:a.data.message}),this.upload_files(this.formclose.id,"actual"),this.$validator.reset(),this.formclose.reset(),this.loadTickets()),t.hide()}).catch(()=>{t.hide(),void 0!==err.response.data&&this.$setErrorsFromResponse(err.response.data)})}}})},closeModal(t){this.$validator.pause(),e("#closemodal").modal("show"),this.$validator.reset(),this.formclose.reset(),this.$refs.fileactualservice.value=null,this.$refs.fileactualmaterial.value=null,this.pop_ticket=t,this.pop_machine=t.machine,this.formclose.fill(t),this.formclose.edit_type="closeticket",this.$validator.resume()},editModal(t){this.editmode=!0,this.$validator.pause(),this.form.reset(),this.pop_ticket=t,this.$gate.isAdmin()&&(this.$refs.fileservice.value=null,this.$refs.filematerial.value=null),this.MaterialCost=null,this.ServiceCost=null,e("#addNew").modal("show"),this.form.fill(t),this.form.likely_date=t.likely_date?new Date(t.likely_date).toISOString():"",this.stages=[],t.stages&&t.stages.length>0&&(this.stages=t.stages),this.$validator.resume()},newModal(){this.stages=[],this.AddStage(),this.editmode=!1,this.$validator.reset(),this.$validator.pause(),this.form.reset(),this.$gate.isAdmin()&&(this.$refs.fileservice.value=null,this.$refs.filematerial.value=null),this.MaterialCost=null,this.ServiceCost=null,e("#addNew").modal("show"),this.$validator.resume()},loadTickets(){axios.get("/api/ticket",{params:this.search}).then(({data:e})=>this.Tickets=e.data)},async upload_files(e,t=!1){this.MaterialCost&&this.MaterialCost.forEach(a=>{var s=new FormData;s.append("file",a),t?s.append("file_type","Actual Estimated Material"):s.append("file_type","Estimated Material"),s.append("ticket_id",e),axios.post("api/ticket/files",s).then(e=>{console.log("gallery uploaded")})}),this.ServiceCost&&this.ServiceCost.forEach(a=>{var s=new FormData;s.append("file",a),t?s.append("file_type","Actual Estimated Service"):s.append("file_type","Estimated Service"),s.append("ticket_id",e),axios.post("api/ticket/files",s).then(e=>{console.log("gallery uploaded")})})},async upload_stages(e){this.stages&&this.stages.forEach(t=>{var a=new FormData;a.append("id",t.id),a.append("stage_no",t.stage_no),a.append("stage_date",t.stage_date),a.append("description",t.description),a.append("ticket_id",e),axios.post("api/ticket/stages",a).then(e=>{console.log("stages uploaded")})})},submitTicket(){this.$validator.validateAll().then(async t=>{if(t){let t=this.$loading.show({container:this.$refs.vps_submit_pop});this.form.id?this.form.put("/api/ticket/"+this.form.id).then(a=>{a.data.success&&(e("#addNew").modal("hide"),Toast.fire({icon:"success",title:a.data.message}),this.upload_stages(this.form.id),this.upload_files(this.form.id),this.loadTickets()),t.hide()}).catch(()=>{t.hide(),void 0!==err.response.data&&this.$setErrorsFromResponse(err.response.data)}):this.form.post("/api/ticket").then(a=>{a.data.success&&(e("#addNew").modal("hide"),Toast.fire({icon:"success",title:a.data.message}),this.upload_files(a.data.data.id),this.loadTickets()),t.hide()}).catch(()=>{t.hide(),void 0!==err.response.data&&this.$setErrorsFromResponse(err.response.data)})}})},async check_free_service(){this.selected_machine&&(this.selected_machine.completed_free_service>=this.selected_machine.free_service_no?(this.form.service_type="Paid Service",this.form.free_service_no=""):this.form.free_service_no=this.selected_machine.completed_free_service+1,this.selected_machine&&"New"==this.selected_machine.machine_type&&this.form.service_type)},async get_machine(){axios.get("/api/ticket_machine",{params:{site_id:this.form.site_id,category_id:this.form.category_id,sub_category_id:this.form.sub_category_id}}).then(e=>{this.machines=e.data.data}).catch(()=>console.warn("Oh. Something went wrong"))}},mounted(){},created(){this.loadTickets()},beforeCreate(){axios.get("api/get_pre_machine").then(e=>{this.categories=e.data.data.Category,this.sites=e.data.data.sites}),axios.get("/api/initial_ticket").then(e=>{this.users=e.data.data.vendors,this.machines=e.data.data.machines,this.search_machines=e.data.data.machines,this.search_sites=e.data.data.sites}).catch(()=>console.warn("Oh. Something went wrong"))},watch:{async"form.sub_category_id"(e,t){e&&this.get_machine()},async"form.site_id"(e,t){e&&this.get_machine()},"form.category_id":{handler:function(e,t){e&&(axios.get("api/category/"+e).then(e=>{this.sub_categories=e.data.data}),this.get_machine())},deep:!0,initial:!0},stages:{handler:function(e,t){if(e&&e.length>0){let t=e[e.length-1];t.stage_no&&(this.last_stage_index=this.opn_stage.indexOf(t.stage_no)),t.stage_date&&(this.last_stage_date=new Date(t.stage_date).toISOString())}else this.last_stage_index=0,this.pop_ticket&&this.pop_ticket.created_at?this.last_stage_date=new Date(this.pop_ticket.created_at).toISOString():this.last_stage_date=(new Date).toISOString()},deep:!0,initial:!0},async"form.maintenance_provider"(e){"vendor"!=e&&(this.form.service_type="Paid Service"),axios.get("api/user/list",{params:{type:e}}).then(e=>{this.users=e.data.data}).catch(()=>console.warn("Oh. Something went wrong"))},async"form.machine_id"(e){this.selected_machine=this.machines.find(t=>t.id===e),await this.check_free_service()},async"form.service_type"(e){"Free Service"==e&&await this.check_free_service()}}}}).call(this,a(3))},392:function(e,t,a){"use strict";a.r(t);var s=a(32),i=a(1);var o=function(e){a(237)},r=Object(i.a)(s.a,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[e._v("Ticket List")]),e._v(" "),a("div",{staticClass:"card-tools"},[a("router-link",{staticClass:"btn btn-sm btn-primary",attrs:{to:"/ticket/add"},on:{click:e.newModal}},[a("i",{staticClass:"fa fa-plus-square"}),e._v("\n                                    Add New\n                                ")])],1)]),e._v(" "),a("div",{staticClass:"card-body p-2"},[a("form",{attrs:{autocomplete:"off","data-vv-scope":"searchfr"},on:{submit:function(t){return t.preventDefault(),e.getResults()}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col"},[a("v-select",{attrs:{label:"name","get-option-label":e.getLabel,reduce:function(e){return e.id},options:e.search_machines,placeholder:"Enter machines ...",name:"machine_id"},model:{value:e.search.machine_id,callback:function(t){e.$set(e.search,"machine_id",t)},expression:"search.machine_id"}})],1),e._v(" "),a("div",{staticClass:"col"},[a("v-select",{attrs:{label:"site_name",reduce:function(e){return e.id},options:e.search_sites,placeholder:"Select Site...",name:"site_id"},model:{value:e.search.site_id,callback:function(t){e.$set(e.search,"site_id",t)},expression:"search.site_id"}})],1),e._v(" "),a("div",{staticClass:"col"},[a("v-select",{attrs:{label:"site_name",options:["Open","Closed"],placeholder:"Select Status...",name:"status"},model:{value:e.search.status,callback:function(t){e.$set(e.search,"status",t)},expression:"search.status"}})],1),e._v(" "),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Search")])])])]),e._v(" "),a("div",{staticClass:"card-body table-responsive p-0"},[a("table",{staticClass:"table table-hover"},[e._m(0),e._v(" "),a("tbody",e._l(e.Tickets.data,(function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.ticket_no))]),e._v(" "),a("td",{staticClass:"text-capitalize"},[e._v(e._s(t.machine.name))]),e._v(" "),a("td",[e._v(e._s(t.machine.far_no+" - "+t.machine.name+" - "+(t.machine.machine_model?t.machine.machine_model.name:"null")+" - "+t.machine.machine_sr_no))]),e._v(" "),a("td",[e._v(e._s(t.site?t.site.site_name:"-"))]),e._v(" "),a("td",[e._v(e._s(t.created_by_name))]),e._v(" "),a("td",[e._v(e._s(e._f("myDate")(t.created_at)))]),e._v(" "),a("td",[e._v(e._s(e._f("myDate")(t.likely_date)))]),e._v(" "),a("td",[e._v(e._s("created by user"==t.status.toLowerCase()?"Open":t.status))]),e._v(" "),a("td",[a("a",{staticClass:"btn btn-warning btn-sm",attrs:{href:"javascript:void(0);"},on:{click:function(a){return e.viewModal(t)}}},[e._v("\n                                                View\n                                            ")]),e._v(" "),"Closed"!=t.status&&e.$gate.isAdmin()?a("router-link",{staticClass:"btn btn-success btn-sm",attrs:{to:"/ticket/edit/"+t.id}},[e._v("Edit")]):e._e(),e._v(" "),"Closed"!=t.status&&e.$gate.isAdmin()?a("a",{staticClass:"btn btn-danger btn-sm",attrs:{href:"javascript:void(0);",title:"Close ticket"},on:{click:function(a){return e.closeModal(t)}}},[e._v("\n                                                Close\n                                            ")]):e._e()],1)])})),0)])]),e._v(" "),a("div",{staticClass:"card-footer"},[a("pagination",{attrs:{data:e.Tickets},on:{"pagination-change-page":e.getResults}})],1)])])])]),e._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"closemodal",tabindex:"-1",role:"dialog","aria-labelledby":"closemodal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[e._m(1),e._v(" "),a("form",{attrs:{"data-vv-scope":"closeticket"},on:{submit:function(t){return t.preventDefault(),e.submitCloseTicket()}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[e._v("\n                                "+e._s(e.verrors.closeticket)+"\n                                "),e.pop_ticket&&e.pop_ticket.likely_date?a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Actual Date")]),e._v(" "),a("datetime",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.verrors.has("closeticket.actual_date")},attrs:{"value-zone":"Asia/Kolkata",name:"actual_date","input-class":"form-control","data-vv-as":"Actual Date","min-datetime":new Date(e.pop_ticket.created_at).toISOString(),"max-datetime":(new Date).toISOString()},model:{value:e.formclose.actual_date,callback:function(t){e.$set(e.formclose,"actual_date",t)},expression:"formclose.actual_date"}}),e._v(" "),e.verrors.has("closeticket.actual_date")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(e._s(e.verrors.first("closeticket.actual_date")))]):e._e()],1)]):e._e(),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Machine Status")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.formclose.machine_status,expression:"formclose.machine_status"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("closeticket.machine_status")},attrs:{name:"machine_status","data-vv-as":"machine status"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.formclose,"machine_status",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Running"}},[e._v("Running")]),e._v(" "),a("option",{attrs:{value:"Running with Problem"}},[e._v("Running with Problem")])]),e._v(" "),e.verrors.has("closeticket.machine_status")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(e._s(e.verrors.first("closeticket.machine_status")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Estimated Material cost")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pop_ticket.estimated_material_cost,expression:"pop_ticket.estimated_material_cost"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:e.pop_ticket.estimated_material_cost},on:{input:function(t){t.target.composing||e.$set(e.pop_ticket,"estimated_material_cost",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Actual Material cost")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formclose.actual_material_cost,expression:"formclose.actual_material_cost"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("closeticket.actual_material_cost")},attrs:{type:"text",name:"actual_material_cost","data-vv-as":"Actual Material cost"},domProps:{value:e.formclose.actual_material_cost},on:{input:function(t){t.target.composing||e.$set(e.formclose,"actual_material_cost",t.target.value)}}}),e._v(" "),e.verrors.has("closeticket.actual_material_cost")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("closeticket.actual_material_cost")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v(" Actual Material cost File")]),e._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"",expression:"''"}],ref:"fileactualmaterial",staticClass:"form-control",class:{"is-invalid":e.verrors.has("closeticket.material_cost")},attrs:{type:"file",multiple:"",name:"material_cost","data-vv-as":"Actual Material cost"},on:{change:e.uploadMaterialCost}}),e._v(" "),e.pop_ticket.actual_estimated_material_files?a("div",{staticClass:"clearfix"},e._l(e.pop_ticket.actual_estimated_material_files,(function(t,s){return a("a",{key:t.id,attrs:{href:t.file,target:"_blank"}},[e._v("View\n                                                "+e._s(e.pop_ticket.actual_estimated_material_files.length>1?s+1:""))])})),0):e._e(),e._v(" "),e.verrors.has("closeticket.material_cost")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("closeticket.material_cost")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Estimated Service cost")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pop_ticket.estimated_service_cost,expression:"pop_ticket.estimated_service_cost"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:e.pop_ticket.estimated_service_cost},on:{input:function(t){t.target.composing||e.$set(e.pop_ticket,"estimated_service_cost",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Actual Service cost")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formclose.actual_service_cost,expression:"formclose.actual_service_cost"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("closeticket.actual_service_cost")},attrs:{type:"text",name:"actual_service_cost","data-vv-as":"Actual Service cost"},domProps:{value:e.formclose.actual_service_cost},on:{input:function(t){t.target.composing||e.$set(e.formclose,"actual_service_cost",t.target.value)}}}),e._v(" "),e.verrors.has("closeticket.actual_service_cost")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("closeticket.actual_service_cost")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v(" Actual Service cost File ")]),e._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"",expression:"''"}],ref:"fileactualservice",staticClass:"form-control",class:{"is-invalid":e.verrors.has("closeticket.service_cost")},attrs:{type:"file",multiple:"",name:"service_cost","data-vv-as":"Actual Service cost"},on:{change:e.uploadServiceCost}}),e._v(" "),e.pop_ticket.actual_estimated_service_files?a("div",{staticClass:"clearfix"},e._l(e.pop_ticket.actual_estimated_service_files,(function(t,s){return a("a",{key:t.id,attrs:{href:t.file,target:"_blank"}},[e._v("View\n                                                "+e._s(e.pop_ticket.actual_estimated_service_files.length>1?s+1:""))])})),0):e._e(),e._v(" "),e.verrors.has("closeticket.service_cost")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("closeticket.service_cost")))]):e._e()])]),e._v(" "),e.pop_machine.is_consumtion_hr_run?a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Current Run hour ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formclose.current_run_hour,expression:"formclose.current_run_hour"},{name:"validate",rawName:"v-validate",value:{required:!0,decimal:2,min_value:e.pop_machine.last_maintenances?e.pop_machine.last_maintenances.run_hour:e.pop_machine.last_hr_run},expression:"{ required: true, decimal: 2, min_value: pop_machine.last_maintenances ? pop_machine.last_maintenances.run_hour : pop_machine.last_hr_run }"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("closeticket.current_run_hour")},attrs:{name:"current_run_hour","data-vv-as":"Current Run hour"},domProps:{value:e.formclose.current_run_hour},on:{input:function(t){t.target.composing||e.$set(e.formclose,"current_run_hour",t.target.value)}}}),e._v(" "),e.verrors.has("closeticket.current_run_hour")?a("div",{staticClass:"help-block invalid-feedback"},[e._v("\n                                            "+e._s(e.verrors.first("closeticket.current_run_hour")))]):e._e()])]):e._e(),e._v(" "),e.pop_machine.is_consumtion_km_run?a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v(" Current KM Run ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formclose.current_km_run,expression:"formclose.current_km_run"},{name:"validate",rawName:"v-validate",value:{required:!0,decimal:2,min_value:e.pop_machine.last_maintenances?e.pop_machine.last_maintenances.km_run:e.pop_machine.last_km_run},expression:"{ required: true, decimal: 2, min_value: pop_machine.last_maintenances ? pop_machine.last_maintenances.km_run : pop_machine.last_km_run }"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("closeticket.current_km_run")},attrs:{name:"current_km_run","data-vv-as":"Current KM hour"},domProps:{value:e.formclose.current_km_run},on:{input:function(t){t.target.composing||e.$set(e.formclose,"current_km_run",t.target.value)}}}),e._v(" "),e.verrors.has("closeticket.current_km_run")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(e._s(e.verrors.first("closeticket.current_km_run")))]):e._e()])]):e._e(),e._v(" "),e.pop_machine.is_production_fig?a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v(" Current Production fig ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formclose.current_production_fig,expression:"formclose.current_production_fig"},{name:"validate",rawName:"v-validate",value:{required:!0,decimal:2,min_value:e.pop_machine.last_maintenances?e.pop_machine.last_maintenances.production_fig:e.pop_machine.periodic_maintenance_breakdown},expression:"{ required: true, decimal: 2, min_value: pop_machine.last_maintenances ? pop_machine.last_maintenances.production_fig : pop_machine.periodic_maintenance_breakdown }"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("closeticket.current_production_fig")},attrs:{name:"current_production_fig","data-vv-as":"Current Production fig"},domProps:{value:e.formclose.current_production_fig},on:{input:function(t){t.target.composing||e.$set(e.formclose,"current_production_fig",t.target.value)}}}),e._v(" "),e.verrors.has("closeticket.current_production_fig")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(e._s(e.verrors.first("closeticket.current_production_fig")))]):e._e()])]):e._e(),e._v(" "),"Breakdown Maintenance"==e.formclose.ticket_type?a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Production Loss")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formclose.production_loss,expression:"formclose.production_loss"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("closeticket.production_loss")},attrs:{name:"production_loss","data-vv-as":"Production Loss"},domProps:{value:e.formclose.production_loss},on:{input:function(t){t.target.composing||e.$set(e.formclose,"production_loss",t.target.value)}}}),e._v(" "),e.verrors.has("closeticket.production_loss")?a("div",{staticClass:"help-block invalid-feedback"},[e._v("\n                                            "+e._s(e.verrors.first("closeticket.production_loss")))]):e._e()])]):e._e(),e._v(" "),"Breakdown Maintenance"==e.formclose.ticket_type?a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Production loss amount")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formclose.production_loss_amount,expression:"formclose.production_loss_amount"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("closeticket.production_loss_amount")},attrs:{name:"production_loss_amount","data-vv-as":"Current Production fig"},domProps:{value:e.formclose.production_loss_amount},on:{input:function(t){t.target.composing||e.$set(e.formclose,"production_loss_amount",t.target.value)}}}),e._v(" "),e.verrors.has("closeticket.production_loss_amount")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(e._s(e.verrors.first("closeticket.production_loss_amount")))]):e._e()])]):e._e()])]),e._v(" "),e._m(2)])])])]),e._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"viewmodal",tabindex:"-1",role:"dialog","aria-labelledby":"viewmodal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[e._m(3),e._v(" "),e.pop_ticket?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Machine Site")]),e._v(" "),a("v-select",{attrs:{label:"site_name",reduce:function(e){return e.id},options:e.sites,placeholder:"Choose Site ...",disabled:""},model:{value:e.pop_ticket.site_id,callback:function(t){e.$set(e.pop_ticket,"site_id",t)},expression:"pop_ticket.site_id"}})],1)]),e._v(" "),a("div",{staticClass:"col-4 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Machine Category")]),e._v(" "),a("v-select",{attrs:{label:"name",reduce:function(e){return e.id},options:e.categories,placeholder:"Choose Category ...",disabled:""},model:{value:e.pop_ticket.category_id,callback:function(t){e.$set(e.pop_ticket,"category_id",t)},expression:"pop_ticket.category_id"}})],1)]),e._v(" "),a("div",{staticClass:"col-4 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Machine Description")]),e._v(" "),a("v-select",{attrs:{label:"name",reduce:function(e){return e.id},options:e.sub_categories,placeholder:"Choose description ...",name:"sub_category_id",disabled:""!=e.pop_ticket.id},model:{value:e.pop_ticket.sub_category_id,callback:function(t){e.$set(e.pop_ticket,"sub_category_id",t)},expression:"pop_ticket.sub_category_id"}})],1)]),e._v(" "),a("div",{staticClass:"col-4 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v(" Machine : ")]),e._v(" "),a("strong",[e._v("Far No :")]),e._v(" "+e._s(e.pop_ticket.machine.far_no)+"\n                                    "),a("br"),e._v(" "),a("strong",[e._v("Machine Name :")]),e._v(" "+e._s(e.pop_ticket.machine.name)+"\n                                    "),a("br"),e._v(" "),a("strong",[e._v("Machine Chassis No :")]),e._v(" "+e._s(e.pop_ticket.machine.chassis_no)+"\n                                    "),a("br"),e._v(" "),a("strong",[e._v("Machine Sl No:")]),e._v(" "+e._s(e.pop_ticket.machine.machine_sr_no)+"\n                                    "),a("br"),e._v(" "),a("strong",[e._v("Machine Regn No :")]),e._v(" "+e._s(e.pop_ticket.machine.regn_no)+"\n                                    "),a("br"),e._v(" "),a("strong",[e._v("Machine Engine No :")]),e._v(" "+e._s(e.pop_ticket.machine.engine_no)+"\n                                ")])]),e._v(" "),a("div",{staticClass:"col-4 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Maintenance Provider")]),e._v("\n                                    "+e._s(e.pop_ticket.maintenance_provider)+"\n\n                                ")])]),e._v(" "),a("div",{staticClass:"col-4 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v(" "+e._s("user"==e.pop_ticket.maintenance_provider?"user":"vendor")+"\n                                    ")]),e._v(" "),"vendor"==e.pop_ticket.maintenance_provider?[a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:{required:"vendor"==e.pop_ticket.maintenance_provider},expression:"{ required: pop_ticket.maintenance_provider == 'vendor' ? true : false }"}],attrs:{label:"name",reduce:function(e){return e.id},options:e.users,placeholder:"Enter users ...",disabled:""},model:{value:e.pop_ticket.vendor_id,callback:function(t){e.$set(e.pop_ticket,"vendor_id",t)},expression:"pop_ticket.vendor_id"}})]:[a("v-select",{attrs:{label:"name",reduce:function(e){return e.id},options:e.users,placeholder:"Enter users ...",disabled:""},model:{value:e.pop_ticket.user_id,callback:function(t){e.$set(e.pop_ticket,"user_id",t)},expression:"pop_ticket.user_id"}})]],2)]),e._v(" "),"vendor"==e.pop_ticket.maintenance_provider&&e.pop_ticket.service_type?a("div",{staticClass:"col-6 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Service Type")]),e._v("\n                                    "+e._s(e.pop_ticket.service_type)+"\n                                ")])]):e._e(),e._v(" "),"Free Service"==e.pop_ticket.service_type&&e.pop_ticket.free_service_no?a("div",{staticClass:"col-6 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Free service no:")]),e._v("\n                                    "+e._s(e.pop_ticket.free_service_no)+"/"+e._s(e.pop_ticket.machine.free_service_no)+"\n                                ")])]):e._e(),e._v(" "),e.pop_ticket.ticket_type?a("div",{staticClass:"col-6 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Ticket Type")]),e._v("\n                                    "+e._s(e.pop_ticket.ticket_type)+"\n                                ")])]):e._e(),e._v(" "),a("div",{staticClass:"col-3 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Estimated Material cost")]),e._v("\n                                    "+e._s(e._f("toCurrency")(e.pop_ticket.estimated_material_cost))+"\n                                    "),a("p",e._l(e.pop_ticket.estimated_material_files,(function(t,s){return a("a",{key:t.id,attrs:{href:t.file,target:"_blank"}},[e._v("View\n                                            "+e._s(e.pop_ticket.estimated_material_files.length>1?s+1:""))])})),0)])]),e._v(" "),a("div",{staticClass:"col-3 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Estimated Service cost : ")]),e._v("\n                                    "+e._s(e._f("toCurrency")(e.pop_ticket.estimated_service_cost))+"\n                                    "),a("p",e._l(e.pop_ticket.estimated_service_files,(function(t,s){return a("a",{key:t.id,attrs:{href:t.file,target:"_blank"}},[e._v("View\n                                            "+e._s(e.pop_ticket.estimated_service_files.length>1?s+1:""))])})),0)])]),e._v(" "),a("div",{staticClass:"col-3 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Actual Material Cost : ")]),e._v(" "),e.pop_ticket.actual_material_cost?a("span",[e._v(" "+e._s(e._f("toCurrency")(e.pop_ticket.actual_material_cost)))]):e._e(),e._v(" "),a("p",e._l(e.pop_ticket.actual_estimated_material_files,(function(t,s){return a("a",{key:t.id,attrs:{href:t.file,target:"_blank"}},[e._v("View\n                                            "+e._s(e.pop_ticket.actual_estimated_material_files.length>1?s+1:""))])})),0)])]),e._v(" "),a("div",{staticClass:"col-3 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Actual Service Cost : ")]),e._v(" "),e.pop_ticket.actual_service_cost?a("span",[e._v(e._s(e._f("toCurrency")(e.pop_ticket.actual_service_cost)))]):e._e(),e._v(" "),a("p",e._l(e.pop_ticket.actual_estimated_service_files,(function(t,s){return a("a",{key:t.id,attrs:{href:t.file,target:"_blank"}},[e._v("View "+e._s(e.pop_ticket.actual_estimated_service_files.length>1?s+1:""))])})),0)])]),e._v(" "),a("div",{staticClass:"col-4 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Ticket No : ")]),e._v("\n                                    "+e._s(e.pop_ticket.ticket_no)+"\n                                ")])]),e._v(" "),a("div",{staticClass:"col-4 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Likely Date : ")]),e._v("\n                                    "+e._s(e._f("myDate")(e.pop_ticket.likely_date))+"\n\n                                ")])]),e._v(" "),a("div",{staticClass:"col-4 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Actual Date : ")]),e._v("\n                                    "+e._s(e._f("myDate")(e.pop_ticket.actual_date))+"\n                                ")])]),e._v(" "),e.pop_ticket.current_run_hour?a("div",{staticClass:"col-4 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Current Run Hour : ")]),e._v("\n                                    "+e._s(e.pop_ticket.current_run_hour)+"\n                                ")])]):e._e(),e._v(" "),e.pop_ticket.current_km_run?a("div",{staticClass:"col-4 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Current KM Hour : ")]),e._v("\n                                    "+e._s(e.pop_ticket.current_km_run)+"\n                                ")])]):e._e(),e._v(" "),e.pop_ticket.current_production_fig?a("div",{staticClass:"col-4 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Current Production Fig : ")]),e._v("\n                                    "+e._s(e.pop_ticket.current_production_fig)+"\n                                ")])]):e._e(),e._v(" "),e.pop_ticket.production_loss?a("div",{staticClass:"col-4 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Production Loss : ")]),e._v("\n                                    "+e._s(e.pop_ticket.production_loss)+"\n                                ")])]):e._e(),e._v(" "),e.pop_ticket.production_loss_amount?a("div",{staticClass:"col-4 bs"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Production Loss Amount : ")]),e._v("\n                                    "+e._s(e._f("toCurrency")(e.pop_ticket.production_loss_amount))+"\n                                ")])]):e._e()])]):e._e()])])])])}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("Ticket No ")]),e._v(" "),a("th",[e._v("Machine Name")]),e._v(" "),a("th",[e._v("Machine Far No")]),e._v(" "),a("th",[e._v("Site")]),e._v(" "),a("th",[e._v("Created By")]),e._v(" "),a("th",[e._v("Created Date")]),e._v(" "),a("th",[e._v("Expected date")]),e._v(" "),a("th",[e._v("Ticket Status")]),e._v(" "),a("th",[e._v("Action")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title"},[this._v("Close Ticket")]),this._v(" "),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")]),this._v(" "),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Close Ticket")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title"},[this._v("View Ticket")]),this._v(" "),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}],!1,o,null,null);t.default=r.exports}}]);
//# sourceMappingURL=5.bundle.06c09cac622ffade5992.js.map