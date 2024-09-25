(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{27:function(e,a,t){"use strict";(function(e){var s=t(7),r=t.n(s);a.a={components:{VueTagsInput:r()},data:()=>({editmode:!1,Vendors:{},states:[],form:new Form({id:"",name:"",email:"",address:"",state:"",contact_person_name:"",contact_person_number:""})}),methods:{getResults(e=1){this.$Progress.start(),axios.get("api/vendor?page="+e).then(({data:e})=>this.Vendors=e.data),this.$Progress.finish()},loadVendors(){axios.get("api/vendor").then(({data:e})=>this.Vendors=e.data)},loadCategories(){axios.get("/api/category/list").then(({data:e})=>this.categories=e.data)},editModal(a){this.editmode=!0,this.form.reset(),e("#addNew").modal("show"),this.form.fill(a)},newModal(){this.editmode=!1,this.form.reset(),e("#addNew").modal("show")},createVendor(){this.$validator.validateAll().then(async a=>{a&&(this.verrors.clear(),this.form.post("api/vendor").then(a=>{a.data.success?(e("#addNew").modal("hide"),Toast.fire({icon:"success",title:a.data.message}),this.loadVendors()):Toast.fire({icon:"error",title:"Some error occured! Please try again"})}).catch(e=>{e.response&&e.response.data&&this.$setErrorsFromResponse(e.response.data)}))})},updateVendor(){this.$validator.validateAll().then(async a=>{a&&(this.verrors.clear(),this.form.put("api/vendor/"+this.form.id).then(a=>{e("#addNew").modal("hide"),Toast.fire({icon:"success",title:a.data.message}),this.$Progress.finish(),this.loadVendors()}).catch(e=>{e.response&&e.response.data&&this.$setErrorsFromResponse(e.response.data)}))})},deleteVendor(e){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(a=>{a.value&&this.form.delete("api/vendor/"+e).then(()=>{Swal.fire("Deleted!","Your file has been deleted.","success"),this.loadVendors()}).catch(e=>{Swal.fire("Failed!",e.message,"warning")})})}},created(){this.loadVendors()},beforeCreate(){axios.get("api/getStates").then(e=>{this.states=e.data.data})}}}).call(this,t(3))},386:function(e,a,t){"use strict";t.r(a);var s=t(27),r=t(1),o=Object(r.a)(s.a,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"content"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("h3",{staticClass:"card-title"},[e._v("Vendor List")]),e._v(" "),t("div",{staticClass:"card-tools"},[t("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:e.newModal}},[t("i",{staticClass:"fa fa-plus-square"}),e._v("\n                                Add New\n                            ")])])]),e._v(" "),t("div",{staticClass:"card-body table-responsive p-0"},[t("table",{staticClass:"table table-hover"},[e._m(0),e._v(" "),t("tbody",e._l(e.Vendors.data,(function(a){return t("tr",{key:a.id},[t("td",[e._v(e._s(a.name))]),e._v(" "),t("td",[e._v(e._s(a.address))]),e._v(" "),t("td",[e._v(e._s(a.state))]),e._v(" "),t("td",[e._v(e._s(a.contact_person_name))]),e._v(" "),t("td",[e._v(e._s(a.contact_person_number))]),e._v(" "),t("td",[e._v(e._s(a.email))]),e._v(" "),t("td",[t("a",{staticClass:"btn btn-success btn-sm",attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.editModal(a)}}},[e._v("\n                                            Edit\n                                        ")])])])})),0)])]),e._v(" "),t("div",{staticClass:"card-footer"},[e.Vendors?t("pagination",{attrs:{data:e.Vendors},on:{"pagination-change-page":e.getResults}}):e._e()],1)])])]),e._v(" "),t("div",{staticClass:"modal fade",attrs:{id:"addNew",tabindex:"-1",role:"dialog","aria-labelledby":"addNew","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header"},[t("h5",{directives:[{name:"show",rawName:"v-show",value:!e.editmode,expression:"!editmode"}],staticClass:"modal-title"},[e._v("Create New Vendor")]),e._v(" "),t("h5",{directives:[{name:"show",rawName:"v-show",value:e.editmode,expression:"editmode"}],staticClass:"modal-title"},[e._v("Edit Vendor")]),e._v(" "),e._m(1)]),e._v(" "),t("form",{on:{submit:function(a){a.preventDefault(),e.editmode?e.updateVendor():e.createVendor()}}},[t("div",{staticClass:"modal-body"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-6"},[t("div",{staticClass:"form-group"},[t("label",[e._v("Vendor Name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("name")},attrs:{type:"text",name:"name","data-vv-as":"Vendor name",disabled:""!=e.form.id},domProps:{value:e.form.name},on:{input:function(a){a.target.composing||e.$set(e.form,"name",a.target.value)}}}),e._v(" "),e.verrors.has("name")?t("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("name")))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-6"},[t("div",{staticClass:"form-group"},[t("label",[e._v("Vendor Email")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("email")},attrs:{type:"text",name:"email","data-vv-as":"email",disabled:""!=e.form.id},domProps:{value:e.form.email},on:{input:function(a){a.target.composing||e.$set(e.form,"email",a.target.value)}}}),e._v(" "),e.verrors.has("email")?t("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("email")))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-6"},[t("div",{staticClass:"form-group"},[t("label",[e._v("Vendor Address")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("address")},attrs:{type:"text",name:"address","data-vv-as":"address"},domProps:{value:e.form.address},on:{input:function(a){a.target.composing||e.$set(e.form,"address",a.target.value)}}}),e._v(" "),e.verrors.has("address")?t("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("address")))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-6"},[t("div",{staticClass:"form-group"},[t("label",[e._v("State")]),e._v(" "),t("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{error:e.verrors.state,error:e.verrors.has("state"),haveValue:e.form.state},attrs:{label:"name",reduce:function(e){return e.name},options:e.states,placeholder:"Enter State ...","data-vv-name":"state"},model:{value:e.form.state,callback:function(a){e.$set(e.form,"state",a)},expression:"form.state"}}),e._v(" "),e.verrors.has("state")?t("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("state")))]):e._e()],1)]),e._v(" "),t("div",{staticClass:"col-6"},[t("div",{staticClass:"form-group"},[t("label",[e._v("Contact Person Name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.contact_person_name,expression:"form.contact_person_name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("contact_person_name")},attrs:{type:"text",name:"contact_person_name","data-vv-as":"contact person name"},domProps:{value:e.form.contact_person_name},on:{input:function(a){a.target.composing||e.$set(e.form,"contact_person_name",a.target.value)}}}),e._v(" "),e.verrors.has("contact_person_name")?t("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("contact_person_name")))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-6"},[t("div",{staticClass:"form-group"},[t("label",[e._v("Contact Person Number")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.contact_person_number,expression:"form.contact_person_number"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("contact_person_number")},attrs:{type:"text",name:"contact_person_number","data-vv-as":"Contact Person Name"},domProps:{value:e.form.contact_person_number},on:{input:function(a){a.target.composing||e.$set(e.form,"contact_person_number",a.target.value)}}}),e._v(" "),e.verrors.has("contact_person_number")?t("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("contact_person_number")))]):e._e()])])])]),e._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Close")]),e._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:e.editmode,expression:"editmode"}],staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Update")]),e._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:!e.editmode,expression:"!editmode"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Create")])])])])])])])])}),[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("thead",[t("tr",[t("th",[e._v("Vendor Name")]),e._v(" "),t("th",[e._v("Address")]),e._v(" "),t("th",[e._v("State")]),e._v(" "),t("th",[e._v("Contact Person Name")]),e._v(" "),t("th",[e._v("Mobile Number")]),e._v(" "),t("th",[e._v("Email")]),e._v(" "),t("th",[e._v("Action")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}],!1,null,null,null);a.default=o.exports}}]);
//# sourceMappingURL=11.bundle.080d3368c44f560bb45c.js.map