(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{391:function(e,t,a){"use strict";a.r(t);var s=a(6),i={name:"UserAddEdit",data:()=>({pop_ticket:"",popticket:{},categories:[],sub_categories:[],sites:[],selected_machine:"",users:[],machines:[],MaterialCost:null,ServiceCost:null,form:new Form({id:"",site_id:"",category_id:"",sub_category_id:"",free_service_no:"",ticket_type:"Periodic Maintenance",service_type:"Paid Service",machine_id:"",ticket_no:"",vendor_id:[],user_id:"",likely_date:"",estimated_material_cost:"",estimated_service_cost:"",maintenance_provider:"vendor",problem_description:"",complaint_nature:"Major",stages:[],problems:[]}),stages:[{id:"",stage_no:"",stage_date:"",description:"",file:"",new_file:""}],problems:[{id:"",problem:"",estimated_material_cost:"",estimated_service_cost:""}],opn_stage:["Vendor created","Vendor Assigned","Order issued","Payment under process","Payment Done","Logistics under process","Materials despatched","Material received at site","Maintainace under progress"],last_stage_index:0,last_stage_date:""}),computed:{...Object(s.c)(["errors"])},beforeCreate(){axios.get("api/get_pre_machine").then(e=>{this.categories=e.data.data.Category,this.sites=e.data.data.sites}),axios.get("/api/initial_ticket").then(e=>{this.users=e.data.data.vendors,this.machines=e.data.data.machines,this.search_machines=e.data.data.machines,this.search_sites=e.data.data.sites}).catch(()=>console.warn("Oh. Something went wrong"))},methods:{getLabel:e=>"object"==typeof e?e.far_no+" - "+e.name+" - "+(e.machine_model?e.machine_model.name:"null")+" - "+e.machine_sr_no:e,AddStage(){this.form.stages.push({stage_no:"",stage_date:"",description:""})},AddProblem(){this.form.problems.push({problem:"",estimated_material_cost:"",estimated_service_cost:""})},async uploadMaterialCost(e){this.MaterialCost=e.target.files},async uploadServiceCost(e){this.ServiceCost=e.target.files},async upload_files(e,t=!1){this.MaterialCost&&this.MaterialCost.forEach(a=>{var s=new FormData;s.append("file",a),t?s.append("file_type","Actual Estimated Material"):s.append("file_type","Estimated Material"),s.append("ticket_id",e),axios.post("api/ticket/files",s).then(e=>{console.log("gallery uploaded")})}),this.ServiceCost&&this.ServiceCost.forEach(a=>{var s=new FormData;s.append("file",a),t?s.append("file_type","Actual Estimated Service"):s.append("file_type","Estimated Service"),s.append("ticket_id",e),axios.post("api/ticket/files",s).then(e=>{console.log("gallery uploaded")})})},async upload_stages(e){this.stages&&this.stages.forEach(t=>{var a=new FormData;a.append("id",t.id),a.append("stage_no",t.stage_no),a.append("stage_date",t.stage_date),a.append("description",t.description),a.append("ticket_id",e),axios.post("api/ticket/stages",a).then(e=>{console.log("stages uploaded")})})},submitTicket(){this.$forceUpdate(),this.$validator.validateAll().then(async e=>{if(e){let e=this.$loading.show({container:this.$refs.vps_submit_pop});this.form.id?this.form.put("/api/ticket/"+this.form.id).then(t=>{t.data.success&&(this.$router.push("/tickets/").catch(()=>{}),Toast.fire({icon:"success",title:t.data.message}),this.upload_files(this.form.id),this.loadTickets()),e.hide()}).catch(t=>{e.hide(),void 0!==t.response.data&&this.$setErrorsFromResponse(t.response.data)}):this.form.post("/api/ticket").then(t=>{t.data.success&&(this.$router.push("/tickets/").catch(()=>{}),Toast.fire({icon:"success",title:t.data.message}),this.upload_files(t.data.data.id),this.loadTickets()),e.hide()}).catch(t=>{e.hide(),void 0!==t.response.data&&this.$setErrorsFromResponse(t.response.data)})}})},async check_free_service(){this.selected_machine&&(this.selected_machine.completed_free_service>=this.selected_machine.free_service_no?(this.form.service_type="Paid Service",this.form.free_service_no=""):this.form.free_service_no=this.selected_machine.completed_free_service+1,this.selected_machine&&"New"==this.selected_machine.machine_type&&this.form.service_type)},async get_machine(){""==this.form.id&&(this.form.machine_id=""),axios.get("/api/ticket_machine",{params:{site_id:this.form.site_id,category_id:this.form.category_id,sub_category_id:this.form.sub_category_id,id:this.form.id}}).then(e=>{this.machines=e.data.data}).catch(()=>console.warn("Oh. Something went wrong"))}},mounted(){if(this.$route.params.id){this.form.id=this.$route.params.id;let e=this.$loading.show({container:this.$refs.ref_load_user});axios.get("api/ticket/"+this.$route.params.id).then(t=>{let a=t.data.data;this.$validator.pause(),this.form.reset(),this.pop_ticket=a,this.$gate.isAdmin()&&(this.$refs.fileservice.value=null,this.$refs.filematerial.value=null),this.MaterialCost=null,this.ServiceCost=null,this.form.fill(a),this.form.likely_date=a.likely_date?new Date(a.likely_date).toISOString():"",this.stages=[],a.stages&&a.stages.length>0&&(this.stages=a.stages),this.form.vendor_id=a.allocated_vendors.map(e=>e.id),this.$validator.resume(),e.hide()}).catch(()=>{e.hide(),this.$router.push("/tickets/").catch(()=>{})})}},created(){},watch:{async"form.sub_category_id"(e,t){e&&this.get_machine()},async"form.site_id"(e,t){e&&this.get_machine()},"form.category_id":{handler:function(e,t){e&&(""==this.form.id&&(this.form.sub_category_id=""),axios.get("api/category/"+e).then(e=>{this.sub_categories=e.data.data}),this.get_machine())},deep:!0,initial:!0},"form.stages":{handler:function(e,t){if(e&&e.length>0){let t=e[e.length-1];t.stage_no&&(this.last_stage_index=this.opn_stage.indexOf(t.stage_no)),t.stage_date&&(this.last_stage_date=new Date(t.stage_date).toISOString())}else this.last_stage_index=0,this.pop_ticket&&this.pop_ticket.created_at?this.last_stage_date=new Date(this.pop_ticket.created_at).toISOString():this.last_stage_date=(new Date).toISOString()},deep:!0,initial:!0},async"form.maintenance_provider"(e,t){"vendor"!=e&&(this.form.service_type="Paid Service"),"vendor"==e&&"user"==t&&(this.form.user_id=""),"user"==e&&"vendor"==t&&(this.form.vendor_id=[]),axios.get("api/user/list",{params:{type:e}}).then(e=>{this.users=e.data.data}).catch(()=>console.warn("Oh. Something went wrong"))},async"form.machine_id"(e){this.selected_machine=this.machines.find(t=>t.id===e),await this.check_free_service()},async"form.service_type"(e){"Free Service"==e&&await this.check_free_service()}}},r=a(1),o=Object(r.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[e._v(e._s(e.form.id?"Update":"Add")+" Ticket")])]),e._v(" "),a("div",{staticClass:"card-body"},[a("form",{staticClass:"form-horizontal row",on:{submit:function(t){return t.preventDefault(),e.submitTicket()}}},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Machine Site")]),e._v(" "),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"required",class:{"is-invalid":e.verrors.has("site_id")},attrs:{label:"site_name",reduce:function(e){return e.id},options:e.sites,placeholder:"Choose Site ...","data-vv-as":"site",name:"site_id",disabled:""!=e.form.id},model:{value:e.form.site_id,callback:function(t){e.$set(e.form,"site_id",t)},expression:"form.site_id"}}),e._v(" "),e.verrors.has("site_id")?a("div",{staticClass:"help-block invalid-feedback"},[e._v("\n                                            "+e._s(e.verrors.first("site_id"))+"\n                                        ")]):e._e()],1)]),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Machine Category")]),e._v(" "),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"required",class:{"is-invalid":e.verrors.has("category_id")},attrs:{label:"name",reduce:function(e){return e.id},options:e.categories,placeholder:"Choose Category ...","data-vv-as":"Category",name:"category_id",disabled:""!=e.form.id},model:{value:e.form.category_id,callback:function(t){e.$set(e.form,"category_id",t)},expression:"form.category_id"}}),e._v(" "),e.verrors.has("category_id")?a("div",{staticClass:"help-block invalid-feedback"},[e._v("\n                                            "+e._s(e.verrors.first("category_id"))+"\n                                        ")]):e._e()],1)]),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Machine Description")]),e._v(" "),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"required",class:{"is-invalid":e.verrors.has("sub_category_id")},attrs:{label:"name",reduce:function(e){return e.id},options:e.sub_categories,placeholder:"Choose description ...","data-vv-as":"description",name:"sub_category_id",disabled:""!=e.form.id},model:{value:e.form.sub_category_id,callback:function(t){e.$set(e.form,"sub_category_id",t)},expression:"form.sub_category_id"}}),e._v(" "),e.verrors.has("sub_category_id")?a("div",{staticClass:"help-block invalid-feedback"},[e._v("\n                                            "+e._s(e.verrors.first("sub_category_id"))+"\n                                        ")]):e._e()],1)]),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Select Machine")]),e._v(" "),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.verrors.has("machine_id")},attrs:{label:"name","get-option-label":e.getLabel,reduce:function(e){return e.id},options:e.machines,placeholder:"Enter machines ...",name:"machine_id","data-vv-as":"Select machine",disabled:""!=e.form.id},model:{value:e.form.machine_id,callback:function(t){e.$set(e.form,"machine_id",t)},expression:"form.machine_id"}}),e._v(" "),e.verrors.has("machine_id")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(e._s(e.verrors.first("machine_id")))]):e._e()],1)]),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Machine's problem description")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.problem_description,expression:"form.problem_description"},{name:"validate",rawName:"v-validate",value:"",expression:"''"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("problem_description")},attrs:{placeholder:"Enter Machine's problem ...",name:"problem_description","data-vv-as":"Machine's problem",disabled:""!=e.form.id},domProps:{value:e.form.problem_description},on:{input:function(t){t.target.composing||e.$set(e.form,"problem_description",t.target.value)}}}),e._v(" "),e.verrors.has("problem_description")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(e._s(e.verrors.first("problem_description")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Complaint Nature")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.complaint_nature,expression:"form.complaint_nature"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("complaint_nature")},attrs:{name:"complaint_nature","data-vv-as":"Complaint Nature",disabled:""!=e.form.id},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"complaint_nature",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Major"}},[e._v("Major")]),e._v(" "),a("option",{attrs:{value:"Minor"}},[e._v("Minor")])]),e._v(" "),e.verrors.has("complaint_nature")?a("div",{staticClass:"help-block invalid-feedback"},[e._v("\n                                            "+e._s(e.verrors.first("complaint_nature")))]):e._e()])]),e._v(" "),e.$gate.isAdmin()?[a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Maintenance Provider")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.maintenance_provider,expression:"form.maintenance_provider"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("maintenance_provider")},attrs:{name:"maintenance_provider","data-vv-as":"Maintenance Provider"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"maintenance_provider",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"vendor"}},[e._v("Vendor")]),e._v(" "),a("option",{attrs:{value:"user"}},[e._v("Internal User")])]),e._v(" "),e.verrors.has("maintenance_provider")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(e._s(e.verrors.first("maintenance_provider")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Select "+e._s("user"==e.form.maintenance_provider?"user":"vendor")+"\n                                            ")]),e._v(" "),"vendor"==e.form.maintenance_provider?a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],key:"vn",class:{"is-invalid":e.verrors.has("vendor_id")},attrs:{label:"name",reduce:function(e){return e.id},options:e.users,placeholder:"Enter users ...",name:"vendor_id","data-vv-as":"Select vendor",multiple:""},model:{value:e.form.vendor_id,callback:function(t){e.$set(e.form,"vendor_id",t)},expression:"form.vendor_id"}}):e._e(),e._v(" "),e.verrors.has("vendor_id")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(e._s(e.verrors.first("vendor_id")))]):e._e(),e._v(" "),"user"==e.form.maintenance_provider?a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],key:"un",class:{"is-invalid":e.verrors.has("user_id")},attrs:{label:"name",reduce:function(e){return e.id},options:e.users,placeholder:"Enter users ...",name:"user_id","data-vv-as":"Select user"},model:{value:e.form.user_id,callback:function(t){e.$set(e.form,"user_id",t)},expression:"form.user_id"}}):e._e(),e._v(" "),e.verrors.has("user_id")?a("div",{staticClass:"help-block invalid-feedback"},[e._v("\n                                                "+e._s(e.verrors.first("user_id")))]):e._e()],1)]),e._v(" "),"vendor"==e.form.maintenance_provider?a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Service Type")]),e._v(" "),a("div",{staticClass:"custom-control custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.service_type,expression:"form.service_type"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"customRadio1",name:"customRadio",value:"Paid Service",disabled:""!=e.form.id&&e.form.ticket_type&&e.pop_ticket&&"Open"==e.pop_ticket.status},domProps:{checked:e._q(e.form.service_type,"Paid Service")},on:{change:function(t){return e.$set(e.form,"service_type","Paid Service")}}}),e._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"customRadio1"}},[e._v("Paid\n                                                    Service")])]),e._v(" "),a("div",{staticClass:"custom-control custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.service_type,expression:"form.service_type"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"customRadio2",name:"customRadio",value:"Free Service",disabled:e.selected_machine&&e.selected_machine.completed_free_service>=e.selected_machine.free_service_no||""!=e.form.id&&e.form.ticket_type&&e.pop_ticket&&"Open"==e.pop_ticket.status},domProps:{checked:e._q(e.form.service_type,"Free Service")},on:{change:function(t){return e.$set(e.form,"service_type","Free Service")}}}),e._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"customRadio2"}},[e._v("Free\n                                                    Service")])])])]):e._e(),e._v(" "),"Free Service"==e.form.service_type?a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Free service no")]),e._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.free_service_no,expression:"form.free_service_no"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("free_service_no")},attrs:{type:"text",name:"free_service_no","data-vv-as":"free service no",readonly:"","aria-describedby":"free_service_no"},domProps:{value:e.form.free_service_no},on:{input:function(t){t.target.composing||e.$set(e.form,"free_service_no",t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text",attrs:{id:"free_service_no"}},[e._v(" /\n                                                        "+e._s(e.selected_machine?e.selected_machine.free_service_no:""))])])]),e._v(" "),e.verrors.has("free_service_no")?a("div",{staticClass:"help-block invalid-feedback"},[e._v("\n                                                "+e._s(e.verrors.first("free_service_no")))]):e._e()])]):e._e(),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Ticket Type ")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.ticket_type,expression:"form.ticket_type"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("ticket_type")},attrs:{name:"ticket_type","data-vv-as":"Ticket Type",disabled:e.form&&""!=e.form.id&&""!=e.form.ticket_type&&"null"!=e.form.ticket_type&&e.form.ticket_type&&e.pop_ticket&&"Open"==e.pop_ticket.status},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"ticket_type",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Periodic Maintenance"}},[e._v("Periodic Maintenance")]),e._v(" "),a("option",{attrs:{value:"Breakdown Maintenance"}},[e._v("Breakdown Maintenance")])]),e._v(" "),e.verrors.has("ticket_type")?a("div",{staticClass:"help-block invalid-feedback"},[e._v("\n                                                "+e._s(e.verrors.first("ticket_type"))+"\n                                            ")]):e._e()])]),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Expected date of Maintenance")]),e._v(" "),a("datetime",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.verrors.has("likely_date")},attrs:{"value-zone":"Asia/Kolkata",name:"likely_date","input-class":"form-control","data-vv-as":"Expected date",disabled:""!=e.form.id&&""!=e.form.likely_date&&e.pop_ticket&&"Open"==e.pop_ticket.status,"min-datetime":(new Date).toISOString()},model:{value:e.form.likely_date,callback:function(t){e.$set(e.form,"likely_date",t)},expression:"form.likely_date"}}),e._v(" "),e.verrors.has("likely_date")?a("div",{staticClass:"help-block invalid-feedback"},[e._v("\n                                                "+e._s(e.verrors.first("likely_date")))]):e._e()],1)]),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Estimated Material cost")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.estimated_material_cost,expression:"form.estimated_material_cost"},{name:"validate",rawName:"v-validate",value:"required|decimal:2",expression:"'required|decimal:2'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("estimated_material_cost")},attrs:{type:"text",name:"estimated_material_cost","data-vv-as":"Estimated Material cost",disabled:e.form&&""!=e.form.id&&""!=e.form.estimated_material_cost&&e.form.estimated_material_cost>=0&&e.pop_ticket&&"Open"==e.pop_ticket.status},domProps:{value:e.form.estimated_material_cost},on:{input:function(t){t.target.composing||e.$set(e.form,"estimated_material_cost",t.target.value)}}}),e._v(" "),e.verrors.has("estimated_material_cost")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("estimated_material_cost")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v(" Estimated Material cost File")]),e._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"",expression:"''"}],ref:"filematerial",staticClass:"form-control",class:{"is-invalid":e.verrors.has("material_cost")},attrs:{type:"file",multiple:"",name:"material_cost","data-vv-as":"Estimated Material cost"},on:{change:e.uploadMaterialCost}}),e._v(" "),e.pop_ticket&&e.pop_ticket.estimated_material_files?a("div",{staticClass:"clearfix"},e._l(e.pop_ticket.estimated_material_files,(function(t,s){return a("a",{key:t.id,attrs:{href:t.file,target:"_blank"}},[e._v("View\n                                                    "+e._s(e.pop_ticket.estimated_material_files.length>1?s+1:""))])})),0):e._e(),e._v(" "),e.verrors.has("material_cost")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("material_cost")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Estimated Service cost")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.estimated_service_cost,expression:"form.estimated_service_cost"},{name:"validate",rawName:"v-validate",value:"required|decimal:2",expression:"'required|decimal:2'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("estimated_service_cost")},attrs:{type:"text",name:"estimated_service_cost","data-vv-as":"Estimated Service cost",disabled:""!=e.form.id&&""!=e.form.estimated_service_cost&&e.form.estimated_service_cost>0&&e.form.estimated_service_cost&&e.pop_ticket&&"Open"==e.pop_ticket.status},domProps:{value:e.form.estimated_service_cost},on:{input:function(t){t.target.composing||e.$set(e.form,"estimated_service_cost",t.target.value)}}}),e._v(" "),e.verrors.has("estimated_service_cost")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("estimated_service_cost")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v(" Estimated Service cost ")]),e._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"",expression:"''"}],ref:"fileservice",staticClass:"form-control",class:{"is-invalid":e.verrors.has("service_cost")},attrs:{type:"file",multiple:"",name:"service_cost","data-vv-as":"Estimated Service cost"},on:{change:e.uploadServiceCost}}),e._v(" "),e.pop_ticket&&e.pop_ticket.estimated_service_files?a("div",{staticClass:"clearfix"},e._l(e.pop_ticket.estimated_service_files,(function(t,s){return a("a",{key:t.id,attrs:{href:t.file,target:"_blank"}},[e._v("View\n                                                    "+e._s(e.pop_ticket.estimated_service_files.length>1?s+1:""))])})),0):e._e(),e._v(" "),e.verrors.has("service_cost")?a("div",{staticClass:"help-block invalid-feedback"},[e._v("\n                                                "+e._s(e.verrors.first("service_cost")))]):e._e()])]),e._v(" "),e.form.id?a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[e._v("\n    Stage\n  ")]),e._v(" "),a("div",{staticClass:"card-body"},[e._l(e.form.stages,(function(t,s){return[a("div",{key:"s"+s,staticClass:"row"},[a("div",{staticClass:"col-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.stage_no,expression:"field.stage_no"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("stage_no")},attrs:{name:"stage_no",disabled:s<e.form.stages.length-1},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t,"stage_no",a.target.multiple?s:s[0])}}},[a("option",{attrs:{value:"",disabled:""}},[e._v("Select stage")]),e._v(" "),e._l(e.opn_stage,(function(t,s){return a("option",{key:s,attrs:{disabled:s<e.last_stage_index},domProps:{value:t}},[e._v("\n                                                            "+e._s(t))])}))],2)]),e._v(" "),a("div",{staticClass:"col-3"},[a("datetime",{directives:[{name:"validate",rawName:"v-validate",value:"",expression:"''"}],key:"stgdate"+s,class:{"is-invalid":e.verrors.has("stage_date")},attrs:{"value-zone":"Asia/Kolkata",name:"stage_date","input-class":"form-control",placeholder:"Select date","data-vv-as":"Date","min-datetime":e.last_stage_date?new Date(e.last_stage_date).toISOString():"","max-datetime":(new Date).toISOString()},model:{value:t.stage_date,callback:function(a){e.$set(t,"stage_date",a)},expression:"field.stage_date"}})],1),e._v(" "),a("div",{staticClass:"col-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"field.description"}],staticClass:"form-control",attrs:{placeholder:"Enter Description"},domProps:{value:t.description},on:{input:function(a){a.target.composing||e.$set(t,"description",a.target.value)}}})]),e._v(" "),a("div",{staticClass:"col-1"},[e.form.stages.length==s+1?a("span",{on:{click:function(t){return e.form.stages.splice(s,1)}}},[a("i",{staticClass:"fa fa-times red",attrs:{"aria-hidden":"true"}})]):e._e()])])]})),e._v(" "),a("button",{staticClass:"btn btn-success float-right",attrs:{type:"button",disabled:e.form.stages.length>0&&!e.last_stage_index&&!e.last_stage_date},on:{click:e.AddStage}},[e._v("Add\n                                            +")])],2)])]):e._e(),e._v(" "),e.form.id?a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[e._v("\n    Additional Problems\n  ")]),e._v(" "),a("div",{staticClass:"card-body"},[e._l(e.form.problems,(function(t,s){return[a("div",{key:"ap"+s,staticClass:"row"},[a("div",{staticClass:"col-5"},[a("label",[e._v("Problem")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.problem,expression:"field.problem"}],staticClass:"form-control",attrs:{placeholder:"Enter Machine's problem ...",name:"problem"},domProps:{value:t.problem},on:{input:function(a){a.target.composing||e.$set(t,"problem",a.target.value)}}})]),e._v(" "),a("div",{staticClass:"col-3"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Estimated Material cost")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.estimated_material_cost,expression:"field.estimated_material_cost"},{name:"validate",rawName:"v-validate",value:"required|decimal:2",expression:"'required|decimal:2'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("estimated_material_cost"+s)},attrs:{type:"text",name:"estimated_material_cost"+s,"data-vv-as":"Estimated Material cost"},domProps:{value:t.estimated_material_cost},on:{input:function(a){a.target.composing||e.$set(t,"estimated_material_cost",a.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-3"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Estimated Service cost")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.estimated_service_cost,expression:"field.estimated_service_cost"},{name:"validate",rawName:"v-validate",value:"required|decimal:2",expression:"'required|decimal:2'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("estimated_service_cost"+s)},attrs:{type:"text",name:"estimated_service_cost"+s,"data-vv-as":"Estimated Service cost"},domProps:{value:t.estimated_service_cost},on:{input:function(a){a.target.composing||e.$set(t,"estimated_service_cost",a.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-1"},[a("span",{on:{click:function(t){return e.form.problems.splice(s,1)}}},[a("i",{staticClass:"fa fa-times red",attrs:{"aria-hidden":"true"}})])])])]})),e._v(" "),a("button",{staticClass:"btn btn-warning float-right",attrs:{type:"button"},on:{click:e.AddProblem}},[e._v("Add +")])],2)])]):e._e()]:e._e(),e._v(" "),e._m(0)],2)])])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"col text-center"},[t("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[this._v("Submit")])])])}],!1,null,null,null);t.default=o.exports}}]);
//# sourceMappingURL=3.bundle.d86d0fb87b844584450c.js.map