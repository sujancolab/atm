(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{29:function(e,t,a){"use strict";(function(e){var s=a(38);t.a={name:"Machine",components:{VueGauge:s.a,MachinePop:()=>a.e(0).then(a.bind(null,49))},data:()=>({MachineSite:"",categories:[],sub_categories:[],companies:[],models:[],search:{page:1,far_no:"",category_id:"",sub_category_id:"",machine_companies_id:"",machine_models_id:"",machine_type:"",condition_of_machine:"",purchase_date_from:"",purchase_date_to:"",Ownership:"",pm_due_status:"",site_id:""},cam_list:"",Machines:{},pmModalData:"",sites:[],machine_existing_site:{id:"",site_name:"",from_date:""},form:new Form({machine_id:"",site_id:"",from_date:"",to_date:"",redeployment_reason:""}),json_fields:{"Far No":"far_no",Name:"name",Owner:"owner","Purchase Date":"purchase_date","Machine Type":"machine_type","Manufacture Year":"manufacture_year","Regn No":"regn_no","Machine Sr No":"machine_sr_no","Engine No":"engine_no","Chassis No":"chassis_no","Condition of Machine":"condition_of_machine","Standard CPH":"standard_cph","Consumption Type":"consumption_type","Under Maintenance":"under_maintenance","Current Site":{field:"current_site",callback:e=>e.site_name}},json_meta:[[{key:"charset",value:"utf-8"}]]}),beforeCreate(){axios.get("api/get_pre_machine").then(e=>{this.sites=e.data.data.sites,this.categories=e.data.data.Category,this.companies=e.data.data.MachineCompany})},methods:{async export_csv(){return(await axios.get("api/machine?export=1",{params:this.search})).data.data},startDownload(){Swal.fire({title:"Please Wait !",html:"Data populating",allowOutsideClick:!1,onBeforeOpen:()=>{Swal.showLoading()}})},finishDownload(){Swal.close()},get_row_total(e){return this.MachineSite?this.MachineSite.reduce((t,a)=>t+Number(a[e]),0):0},isSourceSelectable(e){if(e.id!=this.machine_existing_site.id)return!0},reset_filter(){this.search={page:1,far_no:"",category_id:"",sub_category_id:"",machine_companies_id:"",machine_models_id:"",machine_type:"",condition_of_machine:"",purchase_date_from:"",purchase_date_to:"",Ownership:"",pm_due_status:"",site_id:""},this.getResults()},get_del:(e,t,a,s,i)=>[s,a,t],async view_pm_details(t){let a=this.$loading.show({container:this.$refs.ref_load_user});this.pmModalData=t,e("#pmModal").modal("show"),a.hide()},view_site_details(t){this.pmModalData=t,e("#MachineSiteModal").modal("show"),this.MachineSite=""},getResults(e=1){this.search.list=1,this.search.page=e,axios.get("api/machine",{params:this.search}).then(({data:e})=>this.Machines=e.data)},loadMachines(){this.search.list=1,axios.get("api/machine",{params:this.search}).then(({data:e})=>this.Machines=e.data)},AssingMachine(t,a){this.form.machine_id=t,this.machine_existing_site.site_name=a?a.site_name:"",this.machine_existing_site.from_date=a?a.from_date:"",this.machine_existing_site.id=a?a.id:"",e("#assignModal").modal("show")},get_machine_list(t){this.pmModalData=t;let a=this.$loading.show({container:this.$refs.ref_load_user});axios.get("/api/machine/site/"+t.id).then(t=>{this.cam_list=t.data.data,e("#CamListModal").modal("show"),a.hide()}).catch(e=>{a.hide()})},async submitAssignSite(){this.$validator.validateAll().then(async t=>{if(t){this.verrors.clear();let t=this.$loading.show({container:this.$refs.ref_load_user});this.form.post("api/machine/assign_site").then(a=>{this.$validator.reset(),t.hide(),this.form.id=a.data.data.id,this.form.reset(),this.machine_existing_site={site_name:"",from_date:""},e("#assignModal").modal("hide"),this.getResults(),Toast.fire({icon:"success",title:a.data.message})}).catch(e=>{e.response&&e.response.data&&this.$setErrorsFromResponse(e.response.data),t.hide()})}})},deleteMachine(e){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.value&&this.form.delete("api/machine/"+e).then(()=>{Swal.fire("Deleted!","Your file has been deleted.","success"),this.loadMachines()}).catch(e=>{Swal.fire("Failed!",e.message,"warning")})})}},created(){this.loadMachines()},watch:{async"search.category_id"(e,t){t&&(this.form.sub_category_id=""),e&&axios.get("api/category/"+e).then(e=>{this.sub_categories=e.data.data})},async"search.machine_companies_id"(e,t){t&&(this.form.machine_models_id=""),e&&axios.get("api/model/"+e).then(e=>{this.models=e.data.data})}}}}).call(this,a(3))},395:function(e,t,a){"use strict";a.r(t);var s=a(29),i=a(1),n=Object(i.a)(s.a,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[e._v("Machine List")]),e._v(" "),a("div",{staticClass:"card-tools"},[a("router-link",{staticClass:"btn btn-sm btn-primary",attrs:{to:"/machines/add"}},[a("i",{staticClass:"fa fa-plus-square",attrs:{"aria-hidden":"true"}}),e._v(" Add New\n                                ")])],1)]),e._v(" "),a("div",{staticClass:"card-body p-2"},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.getResults()}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col col-3 pt-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search.far_no,expression:"search.far_no"}],staticClass:"form-control",attrs:{placeholder:"Enter FAR No ..."},domProps:{value:e.search.far_no},on:{input:function(t){t.target.composing||e.$set(e.search,"far_no",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{label:"name",reduce:function(e){return e.id},options:e.categories,placeholder:"Choose Category ..."},model:{value:e.search.category_id,callback:function(t){e.$set(e.search,"category_id",t)},expression:"search.category_id"}})],1),e._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{label:"name",reduce:function(e){return e.id},options:e.sub_categories,placeholder:"Choose description ..."},model:{value:e.search.sub_category_id,callback:function(t){e.$set(e.search,"sub_category_id",t)},expression:"search.sub_category_id"}})],1),e._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{label:"name",reduce:function(e){return e.id},options:e.companies,placeholder:"Choose Company ..."},model:{value:e.search.machine_companies_id,callback:function(t){e.$set(e.search,"machine_companies_id",t)},expression:"search.machine_companies_id"}})],1),e._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{label:"name",reduce:function(e){return e.id},options:e.models,placeholder:"Choose Model ..."},model:{value:e.search.machine_models_id,callback:function(t){e.$set(e.search,"machine_models_id",t)},expression:"search.machine_models_id"}})],1),e._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{options:["New","Existing"],placeholder:"Select machine type...",name:"machine_type"},model:{value:e.search.machine_type,callback:function(t){e.$set(e.search,"machine_type",t)},expression:"search.machine_type"}})],1),e._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{label:"condition_of_machine",options:["Break Down","Running","Running with Problem","Idle"],placeholder:"Select condition of machine...",name:"condition_of_machine"},model:{value:e.search.condition_of_machine,callback:function(t){e.$set(e.search,"condition_of_machine",t)},expression:"search.condition_of_machine"}})],1),e._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{label:"site_name",reduce:function(e){return e.id},options:e.sites,placeholder:"Select Site...",name:"site_id"},model:{value:e.search.site_id,callback:function(t){e.$set(e.search,"site_id",t)},expression:"search.site_id"}})],1),e._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("datetime",{attrs:{"value-zone":"Asia/Kolkata","input-class":"form-control",placeholder:"Purchase Date From"},model:{value:e.search.purchase_date_from,callback:function(t){e.$set(e.search,"purchase_date_from",t)},expression:"search.purchase_date_from"}})],1),e._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("datetime",{attrs:{"value-zone":"Asia/Kolkata","input-class":"form-control",placeholder:"Purchase Date To"},model:{value:e.search.purchase_date_to,callback:function(t){e.$set(e.search,"purchase_date_to",t)},expression:"search.purchase_date_to"}})],1),e._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{options:["Owned","Rented"],placeholder:"Select Ownership ...",name:"Ownership"},model:{value:e.search.Ownership,callback:function(t){e.$set(e.search,"Ownership",t)},expression:"search.Ownership"}})],1),e._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{options:["Red","Orange","Yellow","Green"],placeholder:"Select PM Due Status ",name:"pm_due_status"},model:{value:e.search.pm_due_status,callback:function(t){e.$set(e.search,"pm_due_status",t)},expression:"search.pm_due_status"}})],1),e._v(" "),a("div",{staticClass:"col col-3 pt-2 btn-group",attrs:{role:"group"}},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Search")]),e._v(" "),a("button",{staticClass:"btn btn-info ml-2",attrs:{type:"button"},on:{click:function(t){return e.reset_filter()}}},[e._v("Reset")]),e._v(" "),a("download-excel",{staticClass:"btn btn-warning ml-2",attrs:{fetch:e.export_csv,fields:e.json_fields,"before-generate":e.startDownload,"before-finish":e.finishDownload,worksheet:"My Worksheet",type:"csv",name:"machine_list.csv"}},[a("span",{staticClass:"labelText"},[a("i",{staticClass:"fa fa-file-excel-o",attrs:{"aria-hidden":"true"}}),e._v("\n                                                Export as\n                                                CSV")])])],1)])])]),e._v(" "),a("div",{staticClass:"card-body machineTable table-responsive p-0"},[a("table",{staticClass:"table table-hover"},[e._m(0),e._v(" "),a("tbody",e._l(e.Machines,(function(t){return a("tr",{key:t.id},[a("td",{staticClass:"align-middle",on:{click:function(a){return e.view_site_details(t)}}},[e._v(e._s(t.far_no))]),e._v(" "),a("td",{staticClass:"align-middle"},[e._v(e._s(t.name))]),e._v(" "),a("td",{staticClass:"align-middle"},[e._v("\n                                            "+e._s(t.machine_model?t.machine_model.name:"-"))]),e._v(" "),a("td",{staticClass:"align-middle"},[e._v(e._s(t.owner))]),e._v(" "),a("td",{staticClass:"align-middle",on:{click:function(a){return e.view_pm_details(t)}}},["Yes"==t.under_maintenance?["date"==t.next_pm_date.early_type?a("div",[a("VueGauge",{attrs:{refid:"lopg"+t.id,options:{needleValue:t.next_pm_date.maintenance_date,arcDelimiters:[Number(t.next_pm_date.settings.date_red),Number(t.next_pm_date.settings.date_orange),Number(t.next_pm_date.settings.date_yellow)],arcColors:["red","orange","yellow","green"],chartWidth:"80",rangeLabel:["0",t.date_threshold.toString()],arcLabels:[t.next_pm_date.settings.date_red.toString(),t.next_pm_date.settings.date_orange.toString(),t.next_pm_date.settings.date_yellow.toString(),t.next_pm_date.settings.date_green.toString()],arcOverEffect:!0}}})],1):e._e(),e._v(" "),"km"==t.next_pm_date.early_type?a("div",[a("VueGauge",{attrs:{refid:"lopg"+t.id,options:{needleValue:t.next_pm_date.km_run,arcDelimiters:e.get_del(t.run_km_threshold,Number(t.next_pm_date.settings.km_red),Number(t.next_pm_date.settings.km_orange),Number(t.next_pm_date.settings.km_yellow),Number(t.next_pm_date.settings.km_green)),arcColors:["green","yellow","orange","red"],chartWidth:"80",rangeLabel:["0",t.run_km_threshold.toString()],arcLabels:[t.next_pm_date.settings.km_yellow.toString(),t.next_pm_date.settings.km_orange.toString(),t.next_pm_date.settings.km_red.toString()],arcOverEffect:!0}}})],1):e._e(),e._v(" "),"hr"==t.next_pm_date.early_type?a("div",[a("VueGauge",{attrs:{refid:"lopg"+t.id,options:{needleValue:t.next_pm_date.hr_run,arcDelimiters:e.get_del(t.run_hour_threshold,Number(t.next_pm_date.settings.hr_red),Number(t.next_pm_date.settings.hr_orange),Number(t.next_pm_date.settings.hr_yellow),Number(t.next_pm_date.settings.hr_green)),arcColors:["green","yellow","orange","red"],chartWidth:"80",rangeLabel:["0",t.run_hour_threshold.toString()],arcLabels:[t.next_pm_date.settings.hr_yellow.toString(),t.next_pm_date.settings.hr_orange.toString(),t.next_pm_date.settings.hr_red.toString()],arcOverEffect:!0}}})],1):e._e(),e._v(" "),"prdfig"==t.next_pm_date.early_type?a("div",[a("VueGauge",{attrs:{refid:"lopg"+t.id,options:{needleValue:t.next_pm_date.production_fig,arcDelimiters:e.get_del(t.production_fig_threshold,Number(t.next_pm_date.settings.prdfig_red),Number(t.next_pm_date.settings.prdfig_orange),Number(t.next_pm_date.settings.prdfig_yellow),Number(t.next_pm_date.settings.prdfig_green)),arcColors:["green","yellow","orange","red"],chartWidth:"80",rangeLabel:["0",t.production_fig_threshold.toString()],arcLabels:[t.next_pm_date.settings.prdfig_yellow.toString(),t.next_pm_date.settings.prdfig_orange.toString(),t.next_pm_date.settings.prdfig_red.toString()],arcOverEffect:!0}}})],1):e._e()]:e._e()],2),e._v(" "),a("td",{staticClass:"align-middle"},[e._v(e._s(e._f("myDate")(t.purchase_date)))]),e._v(" "),a("td",{staticClass:"align-middle"},[e._v(e._s(t.condition_of_machine))]),e._v(" "),a("td",{staticClass:"align-middle"},[e._v(e._s(t.current_site?t.current_site.site_name:"-"))]),e._v(" "),a("td",{staticClass:"align-middle"},[a("router-link",{staticClass:"btn btn-success btn-sm",attrs:{to:"/machines/edit/"+t.id}},[e._v("\n                                                Edit ")]),e._v(" "),a("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:"javascript:void(0);",title:"Assign to site"},on:{click:function(a){return e.AssingMachine(t.id,t.current_site)}}},[e._v("\n                                                CAM\n                                            ")]),e._v(" "),a("a",{staticClass:"btn btn-primary btn-sm",staticStyle:{"background-color":"#861cac"},attrs:{href:"javascript:void(0);",title:"List of Assign to site"},on:{click:function(a){return e.get_machine_list(t)}}},[e._v("\n                                                CAM List\n                                            ")])],1)])})),0)])]),e._v(" "),a("div",{staticClass:"card-footer"})])])])]),e._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"pmModal",tabindex:"-1",role:"dialog","aria-labelledby":"pmModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[e._m(1),e._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"container"},[a("p",[a("strong",[e._v("Far No :")]),e._v(" "+e._s(e.pmModalData.far_no)+"\n                                "),a("br"),e._v(" "),a("strong",[e._v("Machine Name :")]),e._v(" "+e._s(e.pmModalData.name)+"\n                            ")]),e._v(" "),"Yes"==e.pmModalData.under_maintenance?a("div",{staticClass:"row bcon"},[e.pmModalData.is_maintenance_date?a("div",{staticClass:"col-6 pb-3"},[a("VueGauge",{key:"popg"+e.pmModalData.id,attrs:{refid:"popg1",options:{needleValue:e.pmModalData.next_pm_date.maintenance_date,arcDelimiters:[Number(e.pmModalData.next_pm_date.settings.date_red),Number(e.pmModalData.next_pm_date.settings.date_orange),Number(e.pmModalData.next_pm_date.settings.date_yellow)],arcColors:["red","orange","yellow","green"],chartWidth:"180",rangeLabel:["0",e.pmModalData.date_threshold.toString()],arcLabels:[e.pmModalData.next_pm_date.settings.date_red.toString(),e.pmModalData.next_pm_date.settings.date_orange.toString(),e.pmModalData.next_pm_date.settings.date_yellow.toString(),e.pmModalData.next_pm_date.settings.date_green.toString()],arcOverEffect:!0}}}),e._v(" "),a("p",{staticClass:"text-center"},[e._v("Remaining Days")])],1):e._e(),e._v(" "),e.pmModalData.is_consumtion_km_run?a("div",{staticClass:"col-6 pb-3"},[a("VueGauge",{key:"popg"+e.pmModalData.id,attrs:{refid:"popg2",options:{needleValue:e.pmModalData.next_pm_date.km_run,arcDelimiters:e.get_del(e.pmModalData.run_km_threshold,Number(e.pmModalData.next_pm_date.settings.km_red),Number(e.pmModalData.next_pm_date.settings.km_orange),Number(e.pmModalData.next_pm_date.settings.km_yellow),Number(e.pmModalData.next_pm_date.settings.km_green)),arcColors:["green","yellow","orange","red"],chartWidth:"180",rangeLabel:["0",e.pmModalData.run_km_threshold.toString()],arcLabels:[e.pmModalData.next_pm_date.settings.km_yellow.toString(),e.pmModalData.next_pm_date.settings.km_orange.toString(),e.pmModalData.next_pm_date.settings.km_red.toString()],arcOverEffect:!0}}}),e._v(" "),a("p",{staticClass:"text-center"},[e._v("Remaining KM")])],1):e._e(),e._v(" "),e.pmModalData.is_consumtion_hr_run?a("div",{staticClass:"col-6"},[a("VueGauge",{key:"popg"+e.pmModalData.id,attrs:{refid:"popg3",options:{needleValue:e.pmModalData.next_pm_date.hr_run,arcDelimiters:e.get_del(e.pmModalData.run_hour_threshold,Number(e.pmModalData.next_pm_date.settings.hr_red),Number(e.pmModalData.next_pm_date.settings.hr_orange),Number(e.pmModalData.next_pm_date.settings.hr_yellow),Number(e.pmModalData.next_pm_date.settings.hr_green)),arcColors:["green","yellow","orange","red"],chartWidth:"180",rangeLabel:["0",e.pmModalData.run_hour_threshold.toString()],arcLabels:[e.pmModalData.next_pm_date.settings.hr_yellow.toString(),e.pmModalData.next_pm_date.settings.hr_orange.toString(),e.pmModalData.next_pm_date.settings.hr_red.toString()],arcOverEffect:!0}}}),e._v(" "),a("p",{staticClass:"text-center"},[e._v("Remaining Hours")])],1):e._e(),e._v(" "),e.pmModalData.is_production_fig?a("div",{staticClass:"col-6"},[a("VueGauge",{key:"popg"+e.pmModalData.id,attrs:{refid:"popg4",options:{needleValue:e.pmModalData.next_pm_date.production_fig,arcDelimiters:e.get_del(e.pmModalData.production_fig_threshold,Number(e.pmModalData.next_pm_date.settings.prdfig_red),Number(e.pmModalData.next_pm_date.settings.prdfig_orange),Number(e.pmModalData.next_pm_date.settings.prdfig_yellow),Number(e.pmModalData.next_pm_date.settings.prdfig_green)),arcColors:["green","yellow","orange","red"],chartWidth:"180",rangeLabel:["0",e.pmModalData.production_fig_threshold.toString()],arcLabels:[e.pmModalData.next_pm_date.settings.prdfig_yellow.toString(),e.pmModalData.next_pm_date.settings.prdfig_orange.toString(),e.pmModalData.next_pm_date.settings.prdfig_red.toString()],arcOverEffect:!0}}}),e._v(" "),a("p",{staticClass:"text-center"},[e._v("Remaining Production")])],1):e._e()]):e._e()])])])])]),e._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"assignModal",tabindex:"-1",role:"dialog","aria-labelledby":"assignModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[e._m(2),e._v(" "),a("form",{on:{submit:function(t){return t.preventDefault(),e.submitAssignSite()}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Existing Site")]),e._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:e.machine_existing_site.site_name}})])]),e._v(" "),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Allocate to Site")]),e._v(" "),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"required",class:{"is-invalid":e.verrors.has("site_id")},attrs:{label:"site_name",reduce:function(e){return e.id},options:e.sites,selectable:function(t){return e.isSourceSelectable(t)},placeholder:"Choose Site ...","data-vv-as":"site",name:"site_id"},model:{value:e.form.site_id,callback:function(t){e.$set(e.form,"site_id",t)},expression:"form.site_id"}}),e._v(" "),e.verrors.has("site_id")?a("div",{staticClass:"help-block invalid-feedback"},[e._v("\n                                            "+e._s(e.verrors.first("site_id"))+"\n                                        ")]):e._e()],1)]),e._v(" "),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v("From Date")]),e._v(" "),a("datetime",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.verrors.has("from_date")},attrs:{"value-zone":"Asia/Kolkata",name:"from_date","input-class":"form-control required",type:"datetime","data-vv-as":"From Date","min-datetime":e.machine_existing_site.from_date?new Date(e.machine_existing_site.from_date).toISOString():""},model:{value:e.form.from_date,callback:function(t){e.$set(e.form,"from_date",t)},expression:"form.from_date"}}),e._v(" "),e.verrors.has("from_date")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("from_date"))+"\n                                        ")]):e._e()],1)]),e._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Reason for Redeployment")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.redeployment_reason,expression:"form.redeployment_reason"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control required",class:{"is-invalid":e.verrors.has("redeployment_reason")},attrs:{name:"redeployment_reason","data-vv-as":"redeployment reason"},domProps:{value:e.form.redeployment_reason},on:{input:function(t){t.target.composing||e.$set(e.form,"redeployment_reason",t.target.value)}}}),e._v(" "),e.verrors.has("redeployment_reason")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("redeployment_reason"))+"\n                                        ")]):e._e()])])])]),e._v(" "),e._m(3)])])])]),e._v(" "),a("div",{staticClass:"modal",attrs:{id:"CamListModal"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[e._m(4),e._v(" "),a("div",{staticClass:"modal-body"},[a("p",[a("strong",[e._v("Far No :")]),e._v(" "+e._s(e.pmModalData.far_no)+"\n                            "),a("br"),e._v(" "),a("strong",[e._v("Machine Name :")]),e._v(" "+e._s(e.pmModalData.name)+"\n                        ")]),e._v(" "),a("table",{staticClass:"table table-striped"},[e._m(5),e._v(" "),a("tbody",e._l(e.cam_list,(function(t,s){return e.cam_list?a("tr",{key:s},[a("td",{domProps:{innerHTML:e._s(t.site_name)}}),e._v(" "),a("td",[e._v(e._s(e._f("myDate")(t.from_date)))]),e._v(" "),a("td",[e._v(e._s(t.redeployment_reason))])]):e._e()})),0)])]),e._v(" "),e._m(6)])])]),e._v(" "),a("MachinePop",{attrs:{id:"MachineSiteModal",machine:e.pmModalData}})],1)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("FAR No ")]),e._v(" "),a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Model")]),e._v(" "),a("th",[e._v("Owner")]),e._v(" "),a("th",[e._v("PM Due Status")]),e._v(" "),a("th",[e._v("Purchase Date")]),e._v(" "),a("th",[e._v("Machine Condition")]),e._v(" "),a("th",[e._v("Current Site")]),e._v(" "),a("th",[e._v("Action")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title"},[this._v("View PM Details")]),this._v(" "),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title"},[this._v("Machine Asssign to Site")]),this._v(" "),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")]),this._v(" "),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Create CAM")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-header"},[t("h4",{staticClass:"modal-title"},[this._v("CAM List")]),this._v(" "),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",{attrs:{width:"20"}},[this._v("Site Name")]),this._v(" "),t("th",{attrs:{width:"20"}},[this._v("From Date")]),this._v(" "),t("th",{attrs:{width:"60"}},[this._v("Redeployment Reason")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}],!1,null,null,null);t.default=n.exports}}]);
//# sourceMappingURL=11.bundle.8d3501085dfd7022f132.js.map