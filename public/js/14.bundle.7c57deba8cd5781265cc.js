(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{27:function(e,t,a){"use strict";(function(e){var s=a(7),r=a.n(s);t.a={components:{VueTagsInput:r()},data:()=>({editmode:!1,search:"",Vendors:{},states:[],form:new Form({id:"",name:"",email:"",address:"",state:"",contact_person_name:"",contact_person_number:""})}),methods:{getResults(e=1){this.$Progress.start(),axios.get("api/vendor",{params:{page:e,search:this.search}}).then(({data:e})=>this.Vendors=e.data),this.$Progress.finish()},loadVendors(){axios.get("api/vendor").then(({data:e})=>this.Vendors=e.data)},loadCategories(){axios.get("/api/category/list").then(({data:e})=>this.categories=e.data)},editModal(t){this.editmode=!0,this.form.reset(),e("#addNew").modal("show"),this.form.fill(t)},newModal(){this.editmode=!1,this.form.reset(),e("#addNew").modal("show")},createVendor(){this.$validator.validateAll().then(async t=>{t&&(this.verrors.clear(),this.form.post("api/vendor").then(t=>{t.data.success?(e("#addNew").modal("hide"),Toast.fire({icon:"success",title:t.data.message}),this.loadVendors()):Toast.fire({icon:"error",title:"Some error occured! Please try again"})}).catch(e=>{e.response&&e.response.data&&this.$setErrorsFromResponse(e.response.data)}))})},updateVendor(){this.$validator.validateAll().then(async t=>{t&&(this.verrors.clear(),this.form.put("api/vendor/"+this.form.id).then(t=>{e("#addNew").modal("hide"),Toast.fire({icon:"success",title:t.data.message}),this.$Progress.finish(),this.loadVendors()}).catch(e=>{e.response&&e.response.data&&this.$setErrorsFromResponse(e.response.data)}))})},deleteVendor(e){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.value&&this.form.delete("api/vendor/"+e).then(()=>{Swal.fire("Deleted!","Your file has been deleted.","success"),this.loadVendors()}).catch(e=>{Swal.fire("Failed!",e.message,"warning")})})}},created(){this.loadVendors()},beforeCreate(){axios.get("api/getStates").then(e=>{this.states=e.data.data})}}}).call(this,a(3))},392:function(e,t,a){"use strict";a.r(t);var s=a(27),r=a(1),o=Object(r.a)(s.a,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[e._v("Vendor List")]),e._v(" "),a("div",{staticClass:"card-tools"},[a("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:e.newModal}},[a("i",{staticClass:"fa fa-plus-square"}),e._v("\n                                Add New\n                            ")])])]),e._v(" "),a("div",{staticClass:"card-body p-2"},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.getResults()}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col col-3 pt-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control",attrs:{placeholder:"Enter ..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._v(" "),e._m(0)])])]),e._v(" "),a("div",{staticClass:"card-body table-responsive p-0"},[a("table",{staticClass:"table table-hover"},[e._m(1),e._v(" "),a("tbody",e._l(e.Vendors.data,(function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.address))]),e._v(" "),a("td",[e._v(e._s(t.state))]),e._v(" "),a("td",[e._v(e._s(t.contact_person_name))]),e._v(" "),a("td",[e._v(e._s(t.contact_person_number))]),e._v(" "),a("td",[e._v(e._s(t.email))]),e._v(" "),a("td",[a("a",{staticClass:"btn btn-success btn-sm",attrs:{href:"javascript:void(0);"},on:{click:function(a){return e.editModal(t)}}},[e._v("\n                                            Edit\n                                        ")])])])})),0)])]),e._v(" "),a("div",{staticClass:"card-footer"},[e.Vendors?a("pagination",{attrs:{data:e.Vendors},on:{"pagination-change-page":e.getResults}}):e._e()],1)])])]),e._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"addNew",tabindex:"-1",role:"dialog","aria-labelledby":"addNew","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{directives:[{name:"show",rawName:"v-show",value:!e.editmode,expression:"!editmode"}],staticClass:"modal-title"},[e._v("Create New Vendor")]),e._v(" "),a("h5",{directives:[{name:"show",rawName:"v-show",value:e.editmode,expression:"editmode"}],staticClass:"modal-title"},[e._v("Edit Vendor")]),e._v(" "),e._m(2)]),e._v(" "),a("form",{on:{submit:function(t){t.preventDefault(),e.editmode?e.updateVendor():e.createVendor()}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Vendor Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("name")},attrs:{type:"text",name:"name","data-vv-as":"Vendor name",disabled:""!=e.form.id},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e._v(" "),e.verrors.has("name")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("name")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Vendor Email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("email")},attrs:{type:"text",name:"email","data-vv-as":"email",disabled:""!=e.form.id},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),e.verrors.has("email")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("email")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Vendor Address")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("address")},attrs:{type:"text",name:"address","data-vv-as":"address"},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value)}}}),e._v(" "),e.verrors.has("address")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("address")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("State")]),e._v(" "),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{error:e.verrors.state,error:e.verrors.has("state"),haveValue:e.form.state},attrs:{label:"name",reduce:function(e){return e.name},options:e.states,placeholder:"Enter State ...","data-vv-name":"state"},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}}),e._v(" "),e.verrors.has("state")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("state")))]):e._e()],1)]),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Contact Person Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.contact_person_name,expression:"form.contact_person_name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("contact_person_name")},attrs:{type:"text",name:"contact_person_name","data-vv-as":"contact person name"},domProps:{value:e.form.contact_person_name},on:{input:function(t){t.target.composing||e.$set(e.form,"contact_person_name",t.target.value)}}}),e._v(" "),e.verrors.has("contact_person_name")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("contact_person_name")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Contact Person Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.contact_person_number,expression:"form.contact_person_number"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("contact_person_number")},attrs:{type:"text",name:"contact_person_number","data-vv-as":"Contact Person Name"},domProps:{value:e.form.contact_person_number},on:{input:function(t){t.target.composing||e.$set(e.form,"contact_person_number",t.target.value)}}}),e._v(" "),e.verrors.has("contact_person_number")?a("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("contact_person_number")))]):e._e()])])])]),e._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Close")]),e._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:e.editmode,expression:"editmode"}],staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Update")]),e._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:!e.editmode,expression:"!editmode"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Create")])])])])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col col-3 pt-2 btn-group",attrs:{role:"group"}},[t("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[this._v("Search")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("Vendor Name")]),e._v(" "),a("th",[e._v("Address")]),e._v(" "),a("th",[e._v("State")]),e._v(" "),a("th",[e._v("Contact Person Name")]),e._v(" "),a("th",[e._v("Mobile Number")]),e._v(" "),a("th",[e._v("Email")]),e._v(" "),a("th",[e._v("Action")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}],!1,null,null,null);t.default=o.exports}}]);
//# sourceMappingURL=14.bundle.7c57deba8cd5781265cc.js.map