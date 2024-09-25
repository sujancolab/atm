(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{28:function(t,e,a){"use strict";(function(t){var s=a(34);e.a={name:"Machine",components:{VueGauge:s.a},data:()=>({MachineSite:"",categories:[],sub_categories:[],companies:[],models:[],search:{page:1,far_no:"",category_id:"",sub_category_id:"",machine_companies_id:"",machine_models_id:"",machine_type:"",condition_of_machine:"",purchase_date_from:"",purchase_date_to:"",Ownership:"",pm_due_status:"",site_id:""},cam_list:"",Machines:{},pmModalData:"",sites:[],machine_existing_site:{id:"",site_name:"",from_date:""},form:new Form({machine_id:"",site_id:"",from_date:"",to_date:"",redeployment_reason:""})}),beforeCreate(){axios.get("api/get_pre_machine").then(t=>{this.sites=t.data.data.sites,this.categories=t.data.data.Category,this.companies=t.data.data.MachineCompany})},methods:{get_row_total(t){return this.MachineSite?this.MachineSite.reduce((e,a)=>e+Number(a[t]),0):0},isSourceSelectable(t){if(t.id!=this.machine_existing_site.id)return!0},reset_filter(){this.search={page:1,far_no:"",category_id:"",sub_category_id:"",machine_companies_id:"",machine_models_id:"",machine_type:"",condition_of_machine:"",purchase_date_from:"",purchase_date_to:"",Ownership:"",pm_due_status:"",site_id:""},this.getResults()},get_del:(t,e,a,s,i)=>[s,a,e],async view_pm_details(e){let a=this.$loading.show({container:this.$refs.ref_load_user});this.pmModalData=e,t("#pmModal").modal("show"),a.hide()},view_site_details(e){this.pmModalData=e,t("#MachineSiteModal").modal("show"),this.MachineSite="";let a=this.$loading.show({container:this.$refs.ref_load_user});axios.get("api/machine/get_site_details/"+e.id).then(t=>{this.MachineSite=t.data.data,a.hide()}).catch(t=>{a.hide()})},getResults(t=1){this.search.list=1,this.search.page=t,axios.get("api/machine",{params:this.search}).then(({data:t})=>this.Machines=t.data)},loadMachines(){this.search.list=1,axios.get("api/machine",{params:this.search}).then(({data:t})=>this.Machines=t.data)},AssingMachine(e,a){this.form.machine_id=e,this.machine_existing_site.site_name=a?a.site_name:"",this.machine_existing_site.from_date=a?a.from_date:"",this.machine_existing_site.id=a?a.id:"",t("#assignModal").modal("show")},get_machine_list(e){this.pmModalData=e;let a=this.$loading.show({container:this.$refs.ref_load_user});axios.get("/api/machine/site/"+e.id).then(e=>{this.cam_list=e.data.data,t("#CamListModal").modal("show"),a.hide()}).catch(t=>{a.hide()})},async submitAssignSite(){this.$validator.validateAll().then(async e=>{if(e){this.verrors.clear();let e=this.$loading.show({container:this.$refs.ref_load_user});this.form.post("api/machine/assign_site").then(a=>{this.$validator.reset(),e.hide(),this.form.id=a.data.data.id,this.form.reset(),this.machine_existing_site={site_name:"",from_date:""},t("#assignModal").modal("hide"),this.getResults(),Toast.fire({icon:"success",title:a.data.message})}).catch(t=>{t.response&&t.response.data&&this.$setErrorsFromResponse(t.response.data),e.hide()})}})},deleteMachine(t){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(e=>{e.value&&this.form.delete("api/machine/"+t).then(()=>{Swal.fire("Deleted!","Your file has been deleted.","success"),this.loadMachines()}).catch(t=>{Swal.fire("Failed!",t.message,"warning")})})}},created(){this.loadMachines()},watch:{async"search.category_id"(t,e){e&&(this.form.sub_category_id=""),t&&axios.get("api/category/"+t).then(t=>{this.sub_categories=t.data.data})},async"search.machine_companies_id"(t,e){e&&(this.form.machine_models_id=""),t&&axios.get("api/model/"+t).then(t=>{this.models=t.data.data})}}}}).call(this,a(3))},380:function(t,e,a){"use strict";a.r(e);var s=a(28),i=a(1),r=Object(i.a)(s.a,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[t._v("Machine List")]),t._v(" "),a("div",{staticClass:"card-tools"},[a("router-link",{staticClass:"btn btn-sm btn-primary",attrs:{to:"/machines/add"}},[a("i",{staticClass:"fa fa-plus-square",attrs:{"aria-hidden":"true"}}),t._v(" Add New\n                            ")])],1)]),t._v(" "),a("div",{staticClass:"card-body p-2"},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.getResults()}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col col-3 pt-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search.far_no,expression:"search.far_no"}],staticClass:"form-control",attrs:{placeholder:"Enter FAR No ..."},domProps:{value:t.search.far_no},on:{input:function(e){e.target.composing||t.$set(t.search,"far_no",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{label:"name",reduce:function(t){return t.id},options:t.categories,placeholder:"Choose Category ..."},model:{value:t.search.category_id,callback:function(e){t.$set(t.search,"category_id",e)},expression:"search.category_id"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{label:"name",reduce:function(t){return t.id},options:t.sub_categories,placeholder:"Choose description ..."},model:{value:t.search.sub_category_id,callback:function(e){t.$set(t.search,"sub_category_id",e)},expression:"search.sub_category_id"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{label:"name",reduce:function(t){return t.id},options:t.companies,placeholder:"Choose Company ..."},model:{value:t.search.machine_companies_id,callback:function(e){t.$set(t.search,"machine_companies_id",e)},expression:"search.machine_companies_id"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{label:"name",reduce:function(t){return t.id},options:t.models,placeholder:"Choose Model ..."},model:{value:t.search.machine_models_id,callback:function(e){t.$set(t.search,"machine_models_id",e)},expression:"search.machine_models_id"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{options:["New","Existing"],placeholder:"Select machine type...",name:"machine_type"},model:{value:t.search.machine_type,callback:function(e){t.$set(t.search,"machine_type",e)},expression:"search.machine_type"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{label:"condition_of_machine",options:["Break Down","Running","Running with Problem","Idle"],placeholder:"Select condition of machine...",name:"condition_of_machine"},model:{value:t.search.condition_of_machine,callback:function(e){t.$set(t.search,"condition_of_machine",e)},expression:"search.condition_of_machine"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{label:"site_name",reduce:function(t){return t.id},options:t.sites,placeholder:"Select Site...",name:"site_id"},model:{value:t.search.site_id,callback:function(e){t.$set(t.search,"site_id",e)},expression:"search.site_id"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("datetime",{attrs:{"input-class":"form-control",placeholder:"Purchase Date From"},model:{value:t.search.purchase_date_from,callback:function(e){t.$set(t.search,"purchase_date_from",e)},expression:"search.purchase_date_from"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("datetime",{attrs:{"input-class":"form-control",placeholder:"Purchase Date To"},model:{value:t.search.purchase_date_to,callback:function(e){t.$set(t.search,"purchase_date_to",e)},expression:"search.purchase_date_to"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{options:["Owned","Rented"],placeholder:"Select Ownership ...",name:"Ownership"},model:{value:t.search.Ownership,callback:function(e){t.$set(t.search,"Ownership",e)},expression:"search.Ownership"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("v-select",{attrs:{options:["Red","Orange","Yellow","Green"],placeholder:"Select PM Due Status ",name:"pm_due_status"},model:{value:t.search.pm_due_status,callback:function(e){t.$set(t.search,"pm_due_status",e)},expression:"search.pm_due_status"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2 btn-group",attrs:{role:"group"}},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Search")]),t._v(" "),a("button",{staticClass:"btn btn-info ml-2",attrs:{type:"button"},on:{click:function(e){return t.reset_filter()}}},[t._v("Reset")])])])])]),t._v(" "),a("div",{staticClass:"card-body table-responsive p-0"},[a("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),a("tbody",t._l(t.Machines,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle",on:{click:function(a){return t.view_site_details(e)}}},[t._v(t._s(e.far_no))]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v(t._s(e.name))]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v(t._s(e.owner))]),t._v(" "),a("td",{staticClass:"align-middle",on:{click:function(a){return t.view_pm_details(e)}}},["date"==e.next_pm_date.early_type?a("div",[a("VueGauge",{attrs:{refid:"lopg"+e.id,options:{needleValue:e.next_pm_date.maintenance_date,arcDelimiters:[Number(e.next_pm_date.settings.date_red),Number(e.next_pm_date.settings.date_orange),Number(e.next_pm_date.settings.date_yellow)],arcColors:["red","orange","yellow","green"],chartWidth:"80",rangeLabel:["0",e.date_threshold.toString()],arcLabels:[e.next_pm_date.settings.date_red.toString(),e.next_pm_date.settings.date_orange.toString(),e.next_pm_date.settings.date_yellow.toString(),e.next_pm_date.settings.date_green.toString()],arcOverEffect:!0}}})],1):t._e(),t._v(" "),"km"==e.next_pm_date.early_type?a("div",[a("VueGauge",{attrs:{refid:"lopg"+e.id,options:{needleValue:e.next_pm_date.km_run,arcDelimiters:t.get_del(e.run_km_threshold,Number(e.next_pm_date.settings.km_red),Number(e.next_pm_date.settings.km_orange),Number(e.next_pm_date.settings.km_yellow),Number(e.next_pm_date.settings.km_green)),arcColors:["green","yellow","orange","red"],chartWidth:"80",rangeLabel:["0",e.run_km_threshold.toString()],arcLabels:[e.next_pm_date.settings.km_yellow.toString(),e.next_pm_date.settings.km_orange.toString(),e.next_pm_date.settings.km_red.toString()],arcOverEffect:!0}}})],1):t._e(),t._v(" "),"hr"==e.next_pm_date.early_type?a("div",[a("VueGauge",{attrs:{refid:"lopg"+e.id,options:{needleValue:e.next_pm_date.hr_run,arcDelimiters:t.get_del(e.run_hour_threshold,Number(e.next_pm_date.settings.hr_red),Number(e.next_pm_date.settings.hr_orange),Number(e.next_pm_date.settings.hr_yellow),Number(e.next_pm_date.settings.hr_green)),arcColors:["green","yellow","orange","red"],chartWidth:"80",rangeLabel:["0",e.run_hour_threshold.toString()],arcLabels:[e.next_pm_date.settings.hr_yellow.toString(),e.next_pm_date.settings.hr_orange.toString(),e.next_pm_date.settings.hr_red.toString()],arcOverEffect:!0}}})],1):t._e(),t._v(" "),"prdfig"==e.next_pm_date.early_type?a("div",[a("VueGauge",{attrs:{refid:"lopg"+e.id,options:{needleValue:e.next_pm_date.production_fig,arcDelimiters:t.get_del(e.production_fig_threshold,Number(e.next_pm_date.settings.prdfig_red),Number(e.next_pm_date.settings.prdfig_orange),Number(e.next_pm_date.settings.prdfig_yellow),Number(e.next_pm_date.settings.prdfig_green)),arcColors:["green","yellow","orange","red"],chartWidth:"80",rangeLabel:["0",e.production_fig_threshold.toString()],arcLabels:[e.next_pm_date.settings.prdfig_yellow.toString(),e.next_pm_date.settings.prdfig_orange.toString(),e.next_pm_date.settings.prdfig_red.toString()],arcOverEffect:!0}}})],1):t._e()]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v(t._s(t._f("myDate")(e.purchase_date)))]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v(t._s(e.condition_of_machine))]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v(t._s(e.current_site?e.current_site.site_name:"-"))]),t._v(" "),a("td",{staticClass:"align-middle"},[a("router-link",{staticClass:"btn btn-success btn-sm",attrs:{to:"/machines/edit/"+e.id}},[t._v("\n                                            Edit ")]),t._v(" "),a("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:"javascript:void(0);",title:"Assign to site"},on:{click:function(a){return t.AssingMachine(e.id,e.current_site)}}},[t._v("\n                                            CAM\n                                        ")]),t._v(" "),a("a",{staticClass:"btn btn-primary btn-sm",staticStyle:{"background-color":"#861cac"},attrs:{href:"javascript:void(0);",title:"List of Assign to site"},on:{click:function(a){return t.get_machine_list(e)}}},[t._v("\n                                            CAM List\n                                        ")])],1)])})),0)])]),t._v(" "),a("div",{staticClass:"card-footer"})])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"pmModal",tabindex:"-1",role:"dialog","aria-labelledby":"pmModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"container"},[a("p",[a("strong",[t._v("Far No :")]),t._v(" "+t._s(t.pmModalData.far_no)+"\n                            "),a("br"),t._v(" "),a("strong",[t._v("Machine Name :")]),t._v(" "+t._s(t.pmModalData.name)+"\n                        ")]),t._v(" "),a("div",{staticClass:"row bcon"},[t.pmModalData.is_maintenance_date?a("div",{staticClass:"col-6 pb-3"},[a("VueGauge",{key:"popg"+t.pmModalData.id,attrs:{refid:"popg1",options:{needleValue:t.pmModalData.next_pm_date.maintenance_date,arcDelimiters:[Number(t.pmModalData.next_pm_date.settings.date_red),Number(t.pmModalData.next_pm_date.settings.date_orange),Number(t.pmModalData.next_pm_date.settings.date_yellow)],arcColors:["red","orange","yellow","green"],chartWidth:"180",rangeLabel:["0",t.pmModalData.date_threshold.toString()],arcLabels:[t.pmModalData.next_pm_date.settings.date_red.toString(),t.pmModalData.next_pm_date.settings.date_orange.toString(),t.pmModalData.next_pm_date.settings.date_yellow.toString(),t.pmModalData.next_pm_date.settings.date_green.toString()],arcOverEffect:!0}}}),t._v(" "),a("p",{staticClass:"text-center"},[t._v("Remaining Days")])],1):t._e(),t._v(" "),t.pmModalData.is_consumtion_km_run?a("div",{staticClass:"col-6 pb-3"},[a("VueGauge",{key:"popg"+t.pmModalData.id,attrs:{refid:"popg2",options:{needleValue:t.pmModalData.next_pm_date.km_run,arcDelimiters:t.get_del(t.pmModalData.run_km_threshold,Number(t.pmModalData.next_pm_date.settings.km_red),Number(t.pmModalData.next_pm_date.settings.km_orange),Number(t.pmModalData.next_pm_date.settings.km_yellow),Number(t.pmModalData.next_pm_date.settings.km_green)),arcColors:["green","yellow","orange","red"],chartWidth:"180",rangeLabel:["0",t.pmModalData.run_km_threshold.toString()],arcLabels:[t.pmModalData.next_pm_date.settings.km_yellow.toString(),t.pmModalData.next_pm_date.settings.km_orange.toString(),t.pmModalData.next_pm_date.settings.km_red.toString()],arcOverEffect:!0}}}),t._v(" "),a("p",{staticClass:"text-center"},[t._v("Remaining KM")])],1):t._e(),t._v(" "),t.pmModalData.is_consumtion_hr_run?a("div",{staticClass:"col-6"},[a("VueGauge",{key:"popg"+t.pmModalData.id,attrs:{refid:"popg3",options:{needleValue:t.pmModalData.next_pm_date.hr_run,arcDelimiters:t.get_del(t.pmModalData.run_hour_threshold,Number(t.pmModalData.next_pm_date.settings.hr_red),Number(t.pmModalData.next_pm_date.settings.hr_orange),Number(t.pmModalData.next_pm_date.settings.hr_yellow),Number(t.pmModalData.next_pm_date.settings.hr_green)),arcColors:["green","yellow","orange","red"],chartWidth:"180",rangeLabel:["0",t.pmModalData.run_hour_threshold.toString()],arcLabels:[t.pmModalData.next_pm_date.settings.hr_yellow.toString(),t.pmModalData.next_pm_date.settings.hr_orange.toString(),t.pmModalData.next_pm_date.settings.hr_red.toString()],arcOverEffect:!0}}}),t._v(" "),a("p",{staticClass:"text-center"},[t._v("Remaining Hours")])],1):t._e(),t._v(" "),t.pmModalData.is_production_fig?a("div",{staticClass:"col-6"},[a("VueGauge",{key:"popg"+t.pmModalData.id,attrs:{refid:"popg4",options:{needleValue:t.pmModalData.next_pm_date.production_fig,arcDelimiters:t.get_del(t.pmModalData.production_fig_threshold,Number(t.pmModalData.next_pm_date.settings.prdfig_red),Number(t.pmModalData.next_pm_date.settings.prdfig_orange),Number(t.pmModalData.next_pm_date.settings.prdfig_yellow),Number(t.pmModalData.next_pm_date.settings.prdfig_green)),arcColors:["green","yellow","orange","red"],chartWidth:"180",rangeLabel:["0",t.pmModalData.production_fig_threshold.toString()],arcLabels:[t.pmModalData.next_pm_date.settings.prdfig_yellow.toString(),t.pmModalData.next_pm_date.settings.prdfig_orange.toString(),t.pmModalData.next_pm_date.settings.prdfig_red.toString()],arcOverEffect:!0}}}),t._v(" "),a("p",{staticClass:"text-center"},[t._v("Remaining Production")])],1):t._e()])])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"assignModal",tabindex:"-1",role:"dialog","aria-labelledby":"assignModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.submitAssignSite()}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Existing Site")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.machine_existing_site.site_name}})])]),t._v(" "),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Allocate to Site")]),t._v(" "),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"required",class:{"is-invalid":t.verrors.has("site_id")},attrs:{label:"site_name",reduce:function(t){return t.id},options:t.sites,selectable:function(e){return t.isSourceSelectable(e)},placeholder:"Choose Site ...","data-vv-as":"site",name:"site_id"},model:{value:t.form.site_id,callback:function(e){t.$set(t.form,"site_id",e)},expression:"form.site_id"}}),t._v(" "),t.verrors.has("site_id")?a("div",{staticClass:"help-block invalid-feedback"},[t._v("\n                                        "+t._s(t.verrors.first("site_id"))+"\n                                    ")]):t._e()],1)]),t._v(" "),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("From Date")]),t._v(" "),a("datetime",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":t.verrors.has("from_date")},attrs:{name:"from_date","input-class":"form-control required",type:"datetime","data-vv-as":"From Date","min-datetime":t.machine_existing_site.from_date?new Date(t.machine_existing_site.from_date).toISOString():""},model:{value:t.form.from_date,callback:function(e){t.$set(t.form,"from_date",e)},expression:"form.from_date"}}),t._v(" "),t.verrors.has("from_date")?a("div",{staticClass:"help-block invalid-feedback"},[t._v(" "+t._s(t.verrors.first("from_date"))+"\n                                    ")]):t._e()],1)]),t._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Reason for Redeployment")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.redeployment_reason,expression:"form.redeployment_reason"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control required",class:{"is-invalid":t.verrors.has("redeployment_reason")},attrs:{name:"redeployment_reason","data-vv-as":"redeployment reason"},domProps:{value:t.form.redeployment_reason},on:{input:function(e){e.target.composing||t.$set(t.form,"redeployment_reason",e.target.value)}}}),t._v(" "),t.verrors.has("redeployment_reason")?a("div",{staticClass:"help-block invalid-feedback"},[t._v(" "+t._s(t.verrors.first("redeployment_reason"))+"\n                                    ")]):t._e()])])])]),t._v(" "),t._m(3)])])])]),t._v(" "),a("div",{staticClass:"modal",attrs:{id:"CamListModal"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[t._m(4),t._v(" "),a("div",{staticClass:"modal-body"},[a("p",[a("strong",[t._v("Far No :")]),t._v(" "+t._s(t.pmModalData.far_no)+"\n                            "),a("br"),t._v(" "),a("strong",[t._v("Machine Name :")]),t._v(" "+t._s(t.pmModalData.name)+"\n                        ")]),t._v(" "),a("table",{staticClass:"table table-striped"},[t._m(5),t._v(" "),a("tbody",t._l(t.cam_list,(function(e,s){return t.cam_list?a("tr",{key:s},[a("td",{domProps:{innerHTML:t._s(e.site_name)}}),t._v(" "),a("td",[t._v(t._s(t._f("myDate")(e.from_date)))]),t._v(" "),a("td",[t._v(t._s(e.redeployment_reason))])]):t._e()})),0)])]),t._v(" "),t._m(6)])])]),t._v(" "),a("div",{staticClass:"modal",attrs:{id:"MachineSiteModal"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[t._m(7),t._v(" "),a("div",{staticClass:"modal-body"},[a("p",[a("strong",[t._v("Far No :")]),t._v(" "+t._s(t.pmModalData.far_no)+"\n                            "),a("br"),t._v(" "),a("strong",[t._v("Machine Name :")]),t._v(" "+t._s(t.pmModalData.name)+"\n                        ")]),t._v(" "),a("table",{staticClass:"table table-striped"},[t._m(8),t._v(" "),a("tbody",t._l(t.MachineSite,(function(e,s){return t.MachineSite?a("tr",{key:s},[a("td",{domProps:{innerHTML:t._s(e.site_name)}}),t._v(" "),a("td",[t._v(t._s(t._f("myDate")(e.from_date)))]),t._v(" "),a("td",[t._v(t._s(e.total_run_hour))]),t._v(" "),a("td",[t._v(t._s(e.total_km_run))]),t._v(" "),a("td",[t._v(t._s(e.total_production_fig))]),t._v(" "),a("td",[t._v(t._s(e.total_consumption))])]):t._e()})),0),t._v(" "),a("tfoot",{staticStyle:{"border-top":"2px solid black"}},[a("tr",[a("th",[t._v("Total")]),t._v(" "),a("th"),t._v(" "),a("th",[t._v(t._s(t.get_row_total("total_run_hour")))]),t._v(" "),a("th",[t._v(t._s(t.get_row_total("total_km_run")))]),t._v(" "),a("th",[t._v(t._s(t.get_row_total("total_production_fig")))]),t._v(" "),a("th",[t._v(t._s(t.get_row_total("total_consumption")))])])])])]),t._v(" "),t._m(9)])])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("FAR No ")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Owner")]),t._v(" "),a("th",[t._v("PM Due Status")]),t._v(" "),a("th",[t._v("Purchase Date")]),t._v(" "),a("th",[t._v("Machine Condition")]),t._v(" "),a("th",[t._v("Current Site")]),t._v(" "),a("th",[t._v("Action")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[this._v("View PM Details")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[this._v("Machine Asssign to Site")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")]),this._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Create CAM")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("CAM List")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{width:"20"}},[this._v("Site Name")]),this._v(" "),e("th",{attrs:{width:"20"}},[this._v("From Date")]),this._v(" "),e("th",{attrs:{width:"60"}},[this._v("Redeployment Reason")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("Machine History")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Site Name")]),t._v(" "),a("th",[t._v("From Date")]),t._v(" "),a("th",[t._v("Total Run Hour")]),t._v(" "),a("th",[t._v("Total KM Run")]),t._v(" "),a("th",[t._v("Total Production")]),t._v(" "),a("th",[t._v("Fuel Consumption")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}],!1,null,null,null);e.default=r.exports}}]);
//# sourceMappingURL=6.bundle.18a668dccee24a3e2341.js.map