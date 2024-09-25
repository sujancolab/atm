(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{32:function(t,e,a){"use strict";(function(t){e.a={data:()=>({search:"",editmode:!1,Models:{},companies:[],form:new Form({id:"",name:"",company_id:""}),json_fields:{"Model Name":"name",Make:{field:"company",callback:t=>t?t.name:"-"},"Created By":"created_by_name"},json_meta:[[{key:"charset",value:"utf-8"}]]}),methods:{async export_csv(){return(await axios.get("api/model?export=1",{params:{search:this.search}})).data.data},startDownload(){Swal.fire({title:"Please Wait !",html:"Data populating",allowOutsideClick:!1,onBeforeOpen:()=>{Swal.showLoading()}})},finishDownload(){Swal.close()},getResults(t=1){this.$Progress.start(),axios.get("/api/model",{params:{page:t,search:this.search}}).then(({data:t})=>this.Models=t.data),this.$Progress.finish()},updatemodel(){this.$Progress.start(),this.form.put("/api/model/"+this.form.id).then(e=>{t("#addNewmodel").modal("hide"),Toast.fire({icon:"success",title:e.data.message}),this.$Progress.finish(),this.loadModels()}).catch(()=>{this.$Progress.fail()})},editModal(e){this.editmode=!0,this.form.reset(),t("#addNewmodel").modal("show"),this.$refs.name.focus(),this.form.fill(e)},newModal(){this.editmode=!1,this.form.reset(),t("#addNewmodel").modal("show"),this.$refs.name.focus()},loadModels(){this.$gate.isAdmin()&&axios.get("/api/model").then(({data:t})=>this.Models=t.data)},createmodel(){this.form.post("/api/model").then(e=>{t("#addNewmodel").modal("hide"),Toast.fire({icon:"success",title:e.data.message}),this.$Progress.finish(),this.loadModels()}).catch(()=>{Toast.fire({icon:"error",title:"Some error occured! Please try again"})})}},mounted(){},beforeCreate(){axios.get("api/company/list").then(t=>{this.companies=t.data.data})},created(){this.$Progress.start(),this.loadModels(),this.$Progress.finish()}}}).call(this,a(3))},398:function(t,e,a){"use strict";a.r(e);var s=a(32),o=a(1),i=Object(o.a)(s.a,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[t.$gate.isAdmin()?a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[t._v("model List")]),t._v(" "),a("div",{staticClass:"card-tools"},[a("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.newModal}},[a("i",{staticClass:"fa fa-plus-square"}),t._v("\n                                Add New\n                            ")])])]),t._v(" "),a("div",{staticClass:"card-body p-2"},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.getResults()}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col col-3 pt-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{placeholder:"Enter Name ..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col col-3 pt-2 btn-group",attrs:{role:"group"}},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Search")]),t._v(" "),a("download-excel",{staticClass:"btn btn-warning",attrs:{fetch:t.export_csv,fields:t.json_fields,"before-generate":t.startDownload,"before-finish":t.finishDownload,worksheet:"My Worksheet",type:"csv",name:"model_list.csv"}},[a("span",{staticClass:"labelText"},[a("i",{staticClass:"fa fa-file-excel-o",attrs:{"aria-hidden":"true"}}),t._v("\n                                        Export as\n                                        CSV")])])],1)])])]),t._v(" "),a("div",{staticClass:"card-body table-responsive p-0"},[a("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),a("tbody",t._l(t.Models.data,(function(e,s){return a("tr",{key:e.id},[a("td",[t._v(t._s(t.Models.from+s))]),t._v(" "),a("td",{staticClass:"text-capitalize"},[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.company?e.company.name:""))]),t._v(" "),a("td",[t._v(t._s(e.created_by_name))]),t._v(" "),a("td",[t._v(t._s(t._f("myDate")(e.created_at)))])])})),0)])]),t._v(" "),a("div",{staticClass:"card-footer"},[a("pagination",{attrs:{data:t.Models},on:{"pagination-change-page":t.getResults}})],1)]):t._e()])]),t._v(" "),t.$gate.isAdmin()?t._e():a("div",[a("not-found")],1),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"addNewmodel",tabindex:"-1",role:"dialog","aria-labelledby":"addNewmodel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{directives:[{name:"show",rawName:"v-show",value:!t.editmode,expression:"!editmode"}],staticClass:"modal-title"},[t._v("Create New model")]),t._v(" "),a("h5",{directives:[{name:"show",rawName:"v-show",value:t.editmode,expression:"editmode"}],staticClass:"modal-title"},[t._v("Update model")]),t._v(" "),t._m(1)]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.editmode?t.updatemodel():t.createmodel()}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],ref:"name",staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Machine Company")]),t._v(" "),a("v-select",{class:{"is-invalid":t.form.errors.has("company_id")},attrs:{label:"name",reduce:function(t){return t.id},options:t.companies,placeholder:"Choose Company ..."},model:{value:t.form.company_id,callback:function(e){t.$set(t.form,"company_id",e)},expression:"form.company_id"}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"company_id"}})],1)]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:t.editmode,expression:"editmode"}],staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Update")]),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.editmode,expression:"!editmode"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Create")])])])])])])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Sl. No")]),t._v(" "),a("th",[t._v("Model Name")]),t._v(" "),a("th",[t._v("Make")]),t._v(" "),a("th",[t._v("Created By")]),t._v(" "),a("th",[t._v("Created On")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}],!1,null,null,null);e.default=i.exports}}]);
//# sourceMappingURL=10.bundle.11519bc7ff8fddee685a.js.map