(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{33:function(t,e,a){"use strict";(function(t){var s=a(34);e.a={name:"MachineMaintenance",components:{VueGauge:s.a},data:()=>({search:"",Machines:{},maintenance:"",pmModalData:"",maintenance_last_date:"",form:new Form({id:"",machine_id:"",datetime:"",run_hour:"",km_run:"",production_fig:"",consumption:""}),pop_machine:""}),watch:{async pop_machine(t){this.get_last_date()}},methods:{get_del:(t,e,a,s,i)=>[s,a,e],async view_pm_details(e){let a=this.$loading.show({container:this.$refs.ref_load_user});this.pmModalData=e,t("#pmModal").modal("show"),a.hide()},get_details(e){let a=this.$loading.show();this.form.get("/api/maintenance/"+e).then(e=>{this.maintenance=e.data.data.maintenances,t("#maintenance_modal").modal("show"),a.hide()}).catch(()=>{a.hide()})},getResults(t=1){axios.get("api/machine",{params:{page:t,search:this.search}}).then(({data:t})=>this.Machines=t.data)},loadMachines(){axios.get("api/machine",{params:{search:this.search}}).then(({data:t})=>this.Machines=t.data)},addModal(e){this.$validator.reset(),this.form.reset(),t("#addDetails").modal("show"),this.form.machine_id=e.id,this.pop_machine=e},submitMaintenance(){this.$validator.validate().then(async e=>{if(e){let e=this.$loading.show();this.form.post("/api/maintenance").then(a=>{a.data.success&&(t("#addDetails").modal("hide"),this.$validator.reset(),this.form.reset(),Toast.fire({icon:"success",title:a.data.message}),this.loadMachines()),e.hide()}).catch(()=>{e.hide(),void 0!==err.response.data&&this.$setErrorsFromResponse(err.response.data)})}})},deleteMaintenance(e){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(a=>{a.value&&this.form.delete("api/maintenance/"+e).then(e=>{e.data.data&&e.data.data.length&&this.get_details(e.data.data[0].machine_id),t("#maintenance_modal").modal("show"),Swal.fire("Deleted!","Your record has been deleted.","success")}).catch(t=>{Swal.fire("Failed!",t.message,"warning")})})},get_last_date(){this.pop_machine.last_maintenances?this.maintenance_last_date=new Date(this.pop_machine.last_maintenances.datetime).toISOString():this.maintenance_last_date=this.pop_machine.last_maintenance_date?new Date(this.pop_machine.last_maintenance_date).toISOString():""}},mounted(){},created(){this.loadMachines()}}}).call(this,a(3))},392:function(t,e,a){"use strict";a.r(e);var s=a(33),i=a(1),n=Object(i.a)(s.a,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body p-2"},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.getResults()}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col col-3 pt-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{placeholder:"Enter FAR No."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),t._m(1)])])]),t._v(" "),a("div",{staticClass:"card-body table-responsive p-0"},[a("table",{staticClass:"table table-hover"},[t._m(2),t._v(" "),a("tbody",t._l(t.Machines.data,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[t._v(t._s(e.far_no))]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v(t._s(e.name))]),t._v(" "),a("td",{staticClass:"align-middle",on:{click:function(a){return t.view_pm_details(e)}}},["date"==e.next_pm_date.early_type?a("div",[a("VueGauge",{attrs:{refid:"lopg"+e.id,options:{needleValue:e.next_pm_date.maintenance_date,arcDelimiters:[Number(e.next_pm_date.settings.date_red),Number(e.next_pm_date.settings.date_orange),Number(e.next_pm_date.settings.date_yellow)],arcColors:["red","orange","yellow","green"],chartWidth:"80",rangeLabel:["0",e.date_threshold.toString()],arcLabels:[e.next_pm_date.settings.date_red.toString(),e.next_pm_date.settings.date_orange.toString(),e.next_pm_date.settings.date_yellow.toString(),e.next_pm_date.settings.date_green.toString()],arcOverEffect:!0}}})],1):t._e(),t._v(" "),"km"==e.next_pm_date.early_type?a("div",[a("VueGauge",{attrs:{refid:"lopg"+e.id,options:{needleValue:e.next_pm_date.km_run,arcDelimiters:t.get_del(e.run_km_threshold,Number(e.next_pm_date.settings.km_red),Number(e.next_pm_date.settings.km_orange),Number(e.next_pm_date.settings.km_yellow),Number(e.next_pm_date.settings.km_green)),arcColors:["green","yellow","orange","red"],chartWidth:"80",rangeLabel:["0",e.run_km_threshold.toString()],arcLabels:[e.next_pm_date.settings.km_yellow.toString(),e.next_pm_date.settings.km_orange.toString(),e.next_pm_date.settings.km_red.toString()],arcOverEffect:!0}}})],1):t._e(),t._v(" "),"hr"==e.next_pm_date.early_type?a("div",[a("VueGauge",{attrs:{refid:"lopg"+e.id,options:{needleValue:e.next_pm_date.hr_run,arcDelimiters:t.get_del(e.run_hour_threshold,Number(e.next_pm_date.settings.hr_red),Number(e.next_pm_date.settings.hr_orange),Number(e.next_pm_date.settings.hr_yellow),Number(e.next_pm_date.settings.hr_green)),arcColors:["green","yellow","orange","red"],chartWidth:"80",rangeLabel:["0",e.run_hour_threshold.toString()],arcLabels:[e.next_pm_date.settings.hr_yellow.toString(),e.next_pm_date.settings.hr_orange.toString(),e.next_pm_date.settings.hr_red.toString()],arcOverEffect:!0}}})],1):t._e(),t._v(" "),"prdfig"==e.next_pm_date.early_type?a("div",[a("VueGauge",{attrs:{refid:"lopg"+e.id,options:{needleValue:e.next_pm_date.production_fig,arcDelimiters:t.get_del(e.production_fig_threshold,Number(e.next_pm_date.settings.prdfig_red),Number(e.next_pm_date.settings.prdfig_orange),Number(e.next_pm_date.settings.prdfig_yellow),Number(e.next_pm_date.settings.prdfig_green)),arcColors:["green","yellow","orange","red"],chartWidth:"80",rangeLabel:["0",e.production_fig_threshold.toString()],arcLabels:[e.next_pm_date.settings.prdfig_yellow.toString(),e.next_pm_date.settings.prdfig_orange.toString(),e.next_pm_date.settings.prdfig_red.toString()],arcOverEffect:!0}}})],1):t._e()]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v(t._s(e.current_site?e.current_site.site_name:"-"))]),t._v(" "),a("td",{staticClass:"align-middle"},[a("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.get_details(e.id)}}},[t._v("\n                                            View Details\n                                        ")]),t._v(" "),e.current_site?a("a",{staticClass:"btn btn-success btn-sm",attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.addModal(e)}}},[t._v("\n                                            Add Details\n                                        ")]):t._e()])])})),0)])]),t._v(" "),a("div",{staticClass:"card-footer"},[t.Machines?a("pagination",{attrs:{data:t.Machines},on:{"pagination-change-page":t.getResults}}):t._e()],1)])])])]),t._v(" "),a("div",{staticClass:"modal",attrs:{id:"maintenance_modal"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),a("div",{staticClass:"modal-body"},[a("table",{staticClass:"table table-striped"},[t._m(4),t._v(" "),a("tbody",t._l(t.maintenance,(function(e,s){return a("tr",{key:e.id},[a("td",[t._v(t._s(t._f("myDateTime")(e.datetime)))]),t._v(" "),a("td",[t._v(t._s(e.run_hour))]),t._v(" "),a("td",[t._v(t._s(e.km_run))]),t._v(" "),a("td",[t._v(t._s(e.production_fig))]),t._v(" "),a("td",[t._v(t._s(e.consumption))]),t._v(" "),a("td",[t.maintenance.length==s+1?a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.deleteMaintenance(e.id)}}},[a("i",{staticClass:"fa fa-trash red"})]):t._e()])])})),0)])]),t._v(" "),t._m(5)])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"addDetails",tabindex:"-1",role:"dialog","aria-labelledby":"addDetails","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(6),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.submitMaintenance()}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Date")]),t._v(" "),a("datetime",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":t.verrors.has("datetime")},attrs:{"value-zone":"Asia/Kolkata",name:"datetime","input-class":"form-control","data-vv-as":"date time",type:"datetime","min-datetime":t.maintenance_last_date},model:{value:t.form.datetime,callback:function(e){t.$set(t.form,"datetime",e)},expression:"form.datetime"}}),t._v(" "),t.verrors.has("datetime")?a("div",{staticClass:"help-block invalid-feedback"},[t._v(t._s(t.verrors.first("datetime")))]):t._e()],1)]),t._v(" "),t.pop_machine.is_consumtion_hr_run?a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Current Run hour ")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.run_hour,expression:"form.run_hour"},{name:"validate",rawName:"v-validate",value:{required:!0,decimal:2,min_value:t.pop_machine.last_maintenances?t.pop_machine.last_maintenances.run_hour:t.pop_machine.last_hr_run},expression:"{required:true,decimal:2,min_value:pop_machine.last_maintenances ? pop_machine.last_maintenances.run_hour:pop_machine.last_hr_run}"}],staticClass:"form-control",class:{"is-invalid":t.verrors.has("run_hour")},attrs:{name:"run_hour","data-vv-as":"Current Run hour"},domProps:{value:t.form.run_hour},on:{input:function(e){e.target.composing||t.$set(t.form,"run_hour",e.target.value)}}}),t._v(" "),t._m(7)]),t._v(" "),t.verrors.has("run_hour")?a("div",{staticClass:"help-block invalid-feedback"},[t._v("\n                                        "+t._s(t.verrors.first("run_hour")))]):t._e()])]):t._e(),t._v(" "),t.pop_machine.is_consumtion_km_run?a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v(" Current KM Run ")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.km_run,expression:"form.km_run"},{name:"validate",rawName:"v-validate",value:{required:!0,decimal:2,min_value:t.pop_machine.last_maintenances?t.pop_machine.last_maintenances.km_run:t.pop_machine.last_km_run},expression:"{required:true,decimal:2,min_value:pop_machine.last_maintenances ? pop_machine.last_maintenances.km_run:pop_machine.last_km_run}"}],staticClass:"form-control",class:{"is-invalid":t.verrors.has("km_run")},attrs:{name:"km_run","data-vv-as":"Current KM hour"},domProps:{value:t.form.km_run},on:{input:function(e){e.target.composing||t.$set(t.form,"km_run",e.target.value)}}}),t._v(" "),t._m(8)]),t._v(" "),t.verrors.has("km_run")?a("div",{staticClass:"help-block invalid-feedback"},[t._v(t._s(t.verrors.first("km_run")))]):t._e()])]):t._e(),t._v(" "),t.pop_machine.is_production_fig?a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v(" Current Production fig ")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.production_fig,expression:"form.production_fig"},{name:"validate",rawName:"v-validate",value:{required:!0,decimal:2,min_value:t.pop_machine.last_maintenances?t.pop_machine.last_maintenances.production_fig:t.pop_machine.periodic_maintenance_breakdown},expression:"{required:true,decimal:2,min_value:pop_machine.last_maintenances ? pop_machine.last_maintenances.production_fig:pop_machine.periodic_maintenance_breakdown}"}],staticClass:"form-control",class:{"is-invalid":t.verrors.has("production_fig")},attrs:{name:"production_fig","data-vv-as":"Current Production fig"},domProps:{value:t.form.production_fig},on:{input:function(e){e.target.composing||t.$set(t.form,"production_fig",e.target.value)}}}),t._v(" "),t._m(9)]),t._v(" "),t.verrors.has("production_fig")?a("div",{staticClass:"help-block invalid-feedback"},[t._v(t._s(t.verrors.first("production_fig")))]):t._e()])]):t._e(),t._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Fuel consumption")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.consumption,expression:"form.consumption"},{name:"validate",rawName:"v-validate",value:{required:!0,decimal:2},expression:"{required:true,decimal:2}"}],staticClass:"form-control",class:{"is-invalid":t.verrors.has("consumption")},attrs:{name:"consumption","data-vv-as":"Fuel consumption"},domProps:{value:t.form.consumption},on:{input:function(e){e.target.composing||t.$set(t.form,"consumption",e.target.value)}}}),t._v(" "),t.verrors.has("consumption")?a("div",{staticClass:"help-block invalid-feedback"},[t._v("\n                                        "+t._s(t.verrors.first("consumption")))]):t._e()])])])]),t._v(" "),t._m(10)])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"pmModal",tabindex:"-1",role:"dialog","aria-labelledby":"pmModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(11),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"container"},[a("p",[a("strong",[t._v("Far No :")]),t._v(" "+t._s(t.pmModalData.far_no)+"\n                            "),a("br"),t._v(" "),a("strong",[t._v("Machine Name :")]),t._v(" "+t._s(t.pmModalData.name)+"\n                        ")]),t._v(" "),a("div",{staticClass:"row"},[t.pmModalData.is_maintenance_date?a("div",{staticClass:"col-6 pb-3"},[a("VueGauge",{key:"popg"+t.pmModalData.id,attrs:{refid:"popg1",options:{needleValue:t.pmModalData.next_pm_date.maintenance_date,arcDelimiters:[Number(t.pmModalData.next_pm_date.settings.date_red),Number(t.pmModalData.next_pm_date.settings.date_orange),Number(t.pmModalData.next_pm_date.settings.date_yellow)],arcColors:["red","orange","yellow","green"],chartWidth:"180",rangeLabel:["0",t.pmModalData.date_threshold.toString()],arcLabels:[t.pmModalData.next_pm_date.settings.date_red.toString(),t.pmModalData.next_pm_date.settings.date_orange.toString(),t.pmModalData.next_pm_date.settings.date_yellow.toString(),t.pmModalData.next_pm_date.settings.date_green.toString()],arcOverEffect:!0}}}),t._v(" "),a("p",{staticClass:"text-center"},[t._v("Remaining Days")])],1):t._e(),t._v(" "),t.pmModalData.is_consumtion_km_run?a("div",{staticClass:"col-6 pb-3"},[a("VueGauge",{key:"popg"+t.pmModalData.id,attrs:{refid:"popg2",options:{needleValue:t.pmModalData.next_pm_date.km_run,arcDelimiters:t.get_del(t.pmModalData.run_km_threshold,Number(t.pmModalData.next_pm_date.settings.km_red),Number(t.pmModalData.next_pm_date.settings.km_orange),Number(t.pmModalData.next_pm_date.settings.km_yellow),Number(t.pmModalData.next_pm_date.settings.km_green)),arcColors:["green","yellow","orange","red"],chartWidth:"180",rangeLabel:["0",t.pmModalData.run_km_threshold.toString()],arcLabels:[t.pmModalData.next_pm_date.settings.km_yellow.toString(),t.pmModalData.next_pm_date.settings.km_orange.toString(),t.pmModalData.next_pm_date.settings.km_red.toString()],arcOverEffect:!0}}}),t._v(" "),a("p",{staticClass:"text-center"},[t._v("Remaining KM")])],1):t._e(),t._v(" "),t.pmModalData.is_consumtion_hr_run?a("div",{staticClass:"col-6"},[a("VueGauge",{key:"popg"+t.pmModalData.id,attrs:{refid:"popg3",options:{needleValue:t.pmModalData.next_pm_date.hr_run,arcDelimiters:t.get_del(t.pmModalData.run_hour_threshold,Number(t.pmModalData.next_pm_date.settings.hr_red),Number(t.pmModalData.next_pm_date.settings.hr_orange),Number(t.pmModalData.next_pm_date.settings.hr_yellow),Number(t.pmModalData.next_pm_date.settings.hr_green)),arcColors:["green","yellow","orange","red"],chartWidth:"180",rangeLabel:["0",t.pmModalData.run_hour_threshold.toString()],arcLabels:[t.pmModalData.next_pm_date.settings.hr_yellow.toString(),t.pmModalData.next_pm_date.settings.hr_orange.toString(),t.pmModalData.next_pm_date.settings.hr_red.toString()],arcOverEffect:!0}}}),t._v(" "),a("p",{staticClass:"text-center"},[t._v("Remaining Hours")])],1):t._e(),t._v(" "),t.pmModalData.is_production_fig?a("div",{staticClass:"col-6"},[a("VueGauge",{key:"popg"+t.pmModalData.id,attrs:{refid:"popg4",options:{needleValue:t.pmModalData.next_pm_date.production_fig,arcDelimiters:t.get_del(t.pmModalData.production_fig_threshold,Number(t.pmModalData.next_pm_date.settings.prdfig_red),Number(t.pmModalData.next_pm_date.settings.prdfig_orange),Number(t.pmModalData.next_pm_date.settings.prdfig_yellow),Number(t.pmModalData.next_pm_date.settings.prdfig_green)),arcColors:["green","yellow","orange","red"],chartWidth:"180",rangeLabel:["0",t.pmModalData.production_fig_threshold.toString()],arcLabels:[t.pmModalData.next_pm_date.settings.prdfig_yellow.toString(),t.pmModalData.next_pm_date.settings.prdfig_orange.toString(),t.pmModalData.next_pm_date.settings.prdfig_red.toString()],arcOverEffect:!0}}}),t._v(" "),a("p",{staticClass:"text-center"},[t._v("Remaining Production")])],1):t._e()])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title"},[this._v("Machine List")]),this._v(" "),e("div",{staticClass:"card-tools"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col col-1 pt-2 btn-group",attrs:{role:"group"}},[e("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[this._v("Search")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"10"}},[t._v("FAR No ")]),t._v(" "),a("th",{attrs:{width:"20"}},[t._v("Name")]),t._v(" "),a("th",{attrs:{width:"40"}},[t._v("PM Status")]),t._v(" "),a("th",{attrs:{width:"10"}},[t._v("Current Site")]),t._v(" "),a("th",{attrs:{width:"20"}},[t._v("Action")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("Maintenance List")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Date Time")]),t._v(" "),a("th",[t._v("Run Hour")]),t._v(" "),a("th",[t._v("KM Run")]),t._v(" "),a("th",[t._v("Production Fig")]),t._v(" "),a("th",[t._v("Consumption")]),t._v(" "),a("th",[t._v("Action")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[this._v("Add Maintenance")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text"},[this._v("Hour")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text"},[this._v("KM")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text"},[this._v("Cu Mtr")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")]),this._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Submit")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[this._v("View PM Details")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}],!1,null,null,null);e.default=n.exports}}]);
//# sourceMappingURL=9.bundle.ff993d03b0ade1996368.js.map