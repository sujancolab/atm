(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8LD3":function(t,e,a){"use strict";a.r(e);var s=a("TZlQ"),r=a("JFUb"),o=Object(r.a)(s.a,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[t._v("Operators List")]),t._v(" "),a("div",{staticClass:"card-tools"},[a("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.newModal}},[a("i",{staticClass:"fa fa-plus-square"}),t._v("\n                                Add New\n                            ")])])]),t._v(" "),a("div",{staticClass:"card-body p-2"},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.getResults()}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col col-3 pt-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{placeholder:"Enter ..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col col-3 pt-2 btn-group",attrs:{role:"group"}},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Search")]),t._v(" "),a("download-excel",{staticClass:"btn btn-warning ml-2",attrs:{fetch:t.export_csv,fields:t.json_fields,"before-generate":t.startDownload,"before-finish":t.finishDownload,worksheet:"My Worksheet",type:"csv",name:"vendor_list.csv"}},[a("span",{staticClass:"labelText"},[a("i",{staticClass:"fa fa-file-excel-o",attrs:{"aria-hidden":"true"}}),t._v("\n                                        Export as CSV")])])],1)])])]),t._v(" "),a("div",{staticClass:"card-body table-responsive p-0"},[a("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),a("tbody",t._l(t.Operators.data,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.address))]),t._v(" "),a("td",[t._v(t._s(e.state))]),t._v(" "),a("td",[t._v(t._s(e.email))]),t._v(" "),a("td",[a("a",{staticClass:"btn btn-success btn-sm",attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.editModal(e)}}},[t._v("\n                                            Edit\n                                        ")])])])})),0)])]),t._v(" "),a("div",{staticClass:"card-footer"},[t.Operators?a("pagination",{attrs:{data:t.Operators},on:{"pagination-change-page":t.getResults}}):t._e()],1)])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"addNew",tabindex:"-1",role:"dialog","aria-labelledby":"addNew","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{directives:[{name:"show",rawName:"v-show",value:!t.editmode,expression:"!editmode"}],staticClass:"modal-title"},[t._v("Create New Operator")]),t._v(" "),a("h5",{directives:[{name:"show",rawName:"v-show",value:t.editmode,expression:"editmode"}],staticClass:"modal-title"},[t._v("Edit Operator")]),t._v(" "),t._m(1)]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.editmode?t.updateOperator():t.createOperator()}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Operator Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.verrors.has("name")},attrs:{type:"text",name:"name","data-vv-as":"Operator name",disabled:""!=t.form.id},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.verrors.has("name")?a("div",{staticClass:"help-block invalid-feedback"},[t._v(" "+t._s(t.verrors.first("name")))]):t._e()])]),t._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Operator Phone")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"number",name:"email",disabled:""!=t.form.id},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Operator Address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.verrors.has("address")},attrs:{type:"text",name:"address","data-vv-as":"address"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),t._v(" "),t.verrors.has("address")?a("div",{staticClass:"help-block invalid-feedback"},[t._v(" "+t._s(t.verrors.first("address")))]):t._e()])]),t._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("State")]),t._v(" "),a("v-select",{class:{error:t.verrors.state,error:t.verrors.has("state"),haveValue:t.form.state},attrs:{label:"name",reduce:function(t){return t.name},options:t.states,placeholder:"Enter State ...","data-vv-name":"state"},model:{value:t.form.state,callback:function(e){t.$set(t.form,"state",e)},expression:"form.state"}}),t._v(" "),t.verrors.has("state")?a("div",{staticClass:"help-block invalid-feedback"},[t._v(" "+t._s(t.verrors.first("state")))]):t._e()],1)])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:t.editmode,expression:"editmode"}],staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Update")]),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.editmode,expression:"!editmode"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Create")])])])])])])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Operator Name")]),t._v(" "),a("th",[t._v("Address")]),t._v(" "),a("th",[t._v("State")]),t._v(" "),a("th",[t._v("Email")]),t._v(" "),a("th",[t._v("Action")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}],!1,null,null,null);e.default=o.exports},TZlQ:function(t,e,a){"use strict";(function(t){var s=a("x6DR"),r=a.n(s);e.a={components:{VueTagsInput:r()},data:()=>({editmode:!1,search:"",Operators:{},states:[],form:new Form({id:"",name:"",email:"",address:"",state:""}),json_fields:{Name:"name",Email:"email",Address:"address",State:"state"},json_meta:[[{key:"charset",value:"utf-8"}]]}),methods:{async export_csv(){return(await axios.get("api/operator?export=1",{params:{search:this.search}})).data.data},startDownload(){Swal.fire({title:"Please Wait !",html:"Data populating",allowOutsideClick:!1,onBeforeOpen:()=>{Swal.showLoading()}})},finishDownload(){Swal.close()},getResults(t=1){this.$Progress.start(),axios.get("api/operator",{params:{page:t,search:this.search}}).then(({data:t})=>this.Operators=t.data),this.$Progress.finish()},loadOperators(){axios.get("api/operator").then(({data:t})=>this.Operators=t.data)},loadCategories(){axios.get("/api/category/list").then(({data:t})=>this.categories=t.data)},editModal(e){this.editmode=!0,this.form.reset(),t("#addNew").modal("show"),this.form.fill(e)},newModal(){this.editmode=!1,this.form.reset(),t("#addNew").modal("show")},createOperator(){this.$validator.validateAll().then(async e=>{e&&(this.verrors.clear(),this.form.post("api/operator").then(e=>{e.data.success?(t("#addNew").modal("hide"),Toast.fire({icon:"success",title:e.data.message}),this.loadOperators()):Toast.fire({icon:"error",title:"Some error occured! Please try again"})}).catch(t=>{t.response&&t.response.data&&this.$setErrorsFromResponse(t.response.data)}))})},updateOperator(){this.$validator.validateAll().then(async e=>{e&&(this.verrors.clear(),this.form.put("api/operator/"+this.form.id).then(e=>{t("#addNew").modal("hide"),Toast.fire({icon:"success",title:e.data.message}),this.$Progress.finish(),this.loadOperators()}).catch(t=>{t.response&&t.response.data&&this.$setErrorsFromResponse(t.response.data)}))})},deleteOperator(t){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(e=>{e.value&&this.form.delete("api/operator/"+t).then(()=>{Swal.fire("Deleted!","Your file has been deleted.","success"),this.loadOperators()}).catch(t=>{Swal.fire("Failed!",t.message,"warning")})})}},created(){this.loadOperators()},beforeCreate(){axios.get("api/getStates").then(t=>{this.states=t.data.data})}}}).call(this,a("EVdn"))}}]);
//# sourceMappingURL=16.bundle.6f5943d52e452f763360.js.map