(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{29:function(t,a,e){"use strict";(function(t){var i=e(30);a.a={name:"MachineMaintenance",components:{VueGauge:i.a},data:()=>({Machines:{},maintenance:"",pmModalData:"",form:new Form({id:"",machine_id:"",datetime:"",run_hour:"",km_run:"",production_fig:"",consumption:""}),pop_machine:""}),methods:{async view_pm_details(a){this.pmModalData=a,t("#pmModal").modal("show")},get_details(a){let e=this.$loading.show();this.form.get("/api/maintenance/"+a).then(a=>{this.maintenance=a.data.data.maintenances,t("#maintenance_modal").modal("show"),e.hide()}).catch(()=>{e.hide()})},getResults(t=1){axios.get("api/machine?page="+t).then(({data:t})=>this.Machines=t.data)},loadMachines(){axios.get("api/machine").then(({data:t})=>this.Machines=t.data)},addModal(a){this.$validator.reset(),this.form.reset(),t("#addDetails").modal("show"),this.form.machine_id=a.id,this.pop_machine=a},submitMaintenance(){this.$validator.validate().then(async a=>{if(a){let a=this.$loading.show();this.form.post("/api/maintenance").then(e=>{e.data.success&&(t("#addDetails").modal("hide"),this.$validator.reset(),this.form.reset(),Toast.fire({icon:"success",title:e.data.message}),this.loadTickets()),a.hide()}).catch(()=>{a.hide(),void 0!==err.response.data&&this.$setErrorsFromResponse(err.response.data)})}})},deleteMaintenance(t){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(a=>{a.value&&this.form.delete("api/maintenance/"+t).then(t=>{t.data.data&&t.data.data.length&&this.get_details(t.data.data[0].id),Swal.fire("Deleted!","Your record has been deleted.","success")}).catch(t=>{Swal.fire("Failed!",t.message,"warning")})})}},mounted(){},created(){this.loadMachines()}}}).call(this,e(3))},375:function(t,a,e){"use strict";e.r(a);var i=e(29),s=e(2),r=Object(s.a)(i.a,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body table-responsive p-0"},[e("table",{staticClass:"table table-hover"},[t._m(1),t._v(" "),e("tbody",t._l(t.Machines.data,(function(a){return e("tr",{key:a.id},[e("td",{staticClass:"align-middle"},[t._v(t._s(a.far_no))]),t._v(" "),e("td",{staticClass:"align-middle",on:{click:function(e){return t.view_pm_details(a)}}},[e("VueGauge",{attrs:{refid:"mg-id"+a.id,options:{needleValue:a.next_pm_date.early,arcDelimiters:[10,36,78],arcColors:["red","orange","yellow","green"],chartWidth:"80"}}})],1),t._v(" "),e("td",{staticClass:"align-middle"},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.addModal(a)}}},[t._v("\n                                              Add Details\n                                          ")]),t._v(" |\n\n                                          "),e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.get_details(a.id)}}},[t._v("\n                                              View Details\n                                          ")])])])})),0)])]),t._v(" "),e("div",{staticClass:"card-footer"},[t.Machines?e("pagination",{attrs:{data:t.Machines},on:{"pagination-change-page":t.getResults}}):t._e()],1)])])])]),t._v(" "),e("div",{staticClass:"modal",attrs:{id:"maintenance_modal"}},[e("div",{staticClass:"modal-dialog modal-lg"},[e("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),e("div",{staticClass:"modal-body"},[e("table",{staticClass:"table table-striped"},[t._m(3),t._v(" "),e("tbody",t._l(t.maintenance,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.datetime))]),t._v(" "),e("td",[t._v(t._s(a.run_hour))]),t._v(" "),e("td",[t._v(t._s(a.km_run))]),t._v(" "),e("td",[t._v(t._s(a.production_fig))]),t._v(" "),e("td",[t._v(t._s(a.consumption))]),t._v(" "),e("td",[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.deleteMaintenance(a.id)}}},[e("i",{staticClass:"fa fa-trash red"})])])])})),0)])]),t._v(" "),t._m(4)])])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"addDetails",tabindex:"-1",role:"dialog","aria-labelledby":"addDetails","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(5),t._v(" "),e("form",{on:{submit:function(a){return a.preventDefault(),t.submitMaintenance()}}},[e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Date")]),t._v(" "),e("datetime",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":t.verrors.has("datetime")},attrs:{name:"datetime","input-class":"form-control","data-vv-as":"date time",type:"datetime"},model:{value:t.form.datetime,callback:function(a){t.$set(t.form,"datetime",a)},expression:"form.datetime"}}),t._v(" "),t.verrors.has("datetime")?e("div",{staticClass:"help-block invalid-feedback"},[t._v(t._s(t.verrors.first("datetime")))]):t._e()],1)]),t._v(" "),t.pop_machine.is_consumtion_hr_run?e("div",{staticClass:"col-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Current Run hour ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.run_hour,expression:"form.run_hour"},{name:"validate",rawName:"v-validate",value:"required|decimal:2",expression:"'required|decimal:2'"}],staticClass:"form-control",class:{"is-invalid":t.verrors.has("run_hour")},attrs:{name:"run_hour","data-vv-as":"Current Run hour"},domProps:{value:t.form.run_hour},on:{input:function(a){a.target.composing||t.$set(t.form,"run_hour",a.target.value)}}}),t._v(" "),t.verrors.has("run_hour")?e("div",{staticClass:"help-block invalid-feedback"},[t._v("\n                                          "+t._s(t.verrors.first("run_hour")))]):t._e()])]):t._e(),t._v(" "),t.pop_machine.is_consumtion_km_run?e("div",{staticClass:"col-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v(" Current KM Run ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.km_run,expression:"form.km_run"},{name:"validate",rawName:"v-validate",value:"required|decimal:2",expression:"'required|decimal:2'"}],staticClass:"form-control",class:{"is-invalid":t.verrors.has("km_run")},attrs:{name:"km_run","data-vv-as":"Current KM hour"},domProps:{value:t.form.km_run},on:{input:function(a){a.target.composing||t.$set(t.form,"km_run",a.target.value)}}}),t._v(" "),t.verrors.has("km_run")?e("div",{staticClass:"help-block invalid-feedback"},[t._v(t._s(t.verrors.first("km_run")))]):t._e()])]):t._e(),t._v(" "),t.pop_machine.is_production_fig?e("div",{staticClass:"col-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v(" Current Production fig ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.production_fig,expression:"form.production_fig"},{name:"validate",rawName:"v-validate",value:"required|decimal:2",expression:"'required|decimal:2'"}],staticClass:"form-control",class:{"is-invalid":t.verrors.has("production_fig")},attrs:{name:"production_fig","data-vv-as":"Current Production fig"},domProps:{value:t.form.production_fig},on:{input:function(a){a.target.composing||t.$set(t.form,"production_fig",a.target.value)}}}),t._v(" "),t.verrors.has("production_fig")?e("div",{staticClass:"help-block invalid-feedback"},[t._v(t._s(t.verrors.first("production_fig")))]):t._e()])]):t._e(),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Fuel consumption")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.consumption,expression:"form.consumption"},{name:"validate",rawName:"v-validate",value:"required|decimal:2",expression:"'required|decimal:2'"}],staticClass:"form-control",class:{"is-invalid":t.verrors.has("consumption")},attrs:{name:"consumption","data-vv-as":"Fuel consumption"},domProps:{value:t.form.consumption},on:{input:function(a){a.target.composing||t.$set(t.form,"consumption",a.target.value)}}}),t._v(" "),t.verrors.has("consumption")?e("div",{staticClass:"help-block invalid-feedback"},[t._v("\n                                          "+t._s(t.verrors.first("consumption")))]):t._e()])])])]),t._v(" "),t._m(6)])])])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"pmModal",tabindex:"-1",role:"dialog","aria-labelledby":"pmModal","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(7),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t.pmModalData.is_maintenance_date?e("div",{staticClass:"col-sm"},[e("VueGauge",{attrs:{refid:"popg1",options:{needleValue:t.pmModalData.next_pm_date.maintenance_date,arcDelimiters:[10,36,78],arcColors:["red","orange","yellow","green"],chartWidth:"150"}}}),t._v(" "),e("p",[t._v("Maintenance Date")])],1):t._e(),t._v(" "),t.pmModalData.is_consumtion_km_run?e("div",{staticClass:"col-sm"},[e("VueGauge",{attrs:{refid:"popg2",options:{needleValue:t.pmModalData.next_pm_date.km_run,arcDelimiters:[10,36,78],arcColors:["red","orange","yellow","green"],chartWidth:"150"}}}),t._v(" "),e("p",[t._v("KM Run")])],1):t._e(),t._v(" "),t.pmModalData.is_consumtion_hr_run?e("div",{staticClass:"col-sm"},[e("VueGauge",{attrs:{refid:"popg3",options:{needleValue:t.pmModalData.next_pm_date.hr_run,arcDelimiters:[10,36,78],arcColors:["red","orange","yellow","green"],chartWidth:"150"}}}),t._v(" "),e("p",[t._v("Hr Run")])],1):t._e(),t._v(" "),t.pmModalData.is_production_fig?e("div",{staticClass:"col-sm"},[e("VueGauge",{attrs:{refid:"popg4",options:{needleValue:t.pmModalData.next_pm_date.production_fig,arcDelimiters:[10,36,78],arcColors:["red","orange","yellow","green"],chartWidth:"150"}}}),t._v(" "),e("p",[t._v("Production Fig")])],1):t._e()])])])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[this._v("Machine List")]),this._v(" "),a("div",{staticClass:"card-tools"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{attrs:{width:"40"}},[this._v("FAR No ")]),this._v(" "),a("th",{attrs:{width:"40"}},[this._v("PM Status")]),this._v(" "),a("th",{attrs:{width:"20"}},[this._v("Action")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("h4",{staticClass:"modal-title"},[this._v("Maintenance List")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("Date Time")]),t._v(" "),e("th",[t._v("Run Hour")]),t._v(" "),e("th",[t._v("KM Run")]),t._v(" "),e("th",[t._v("Production Fig")]),t._v(" "),e("th",[t._v("Consumption")]),t._v(" "),e("th",[t._v("Action")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[this._v("Add Maintenance")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")]),this._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Submit")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[this._v("View PM Details")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}],!1,null,null,null);a.default=r.exports}}]);
//# sourceMappingURL=7.bundle.11f7866cd0daeffc2f04.js.map