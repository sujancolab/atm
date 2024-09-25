(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{21:function(e,t,s){"use strict";(function(e){var a=s(8),i=s.n(a);t.a={components:{VueTagsInput:i()},data:()=>({editmode:!1,Sites:{},form:new Form({id:"",site_id:"",site_name:"",address:"",state:"",city:"",zip_code:"",allocate_user:[]}),categories:[],users:[],tag:"",autocompleteItems:[]}),methods:{getResults(e=1){this.$Progress.start(),axios.get("api/site?page="+e).then(({data:e})=>this.Sites=e.data),this.$Progress.finish()},loadSites(){axios.get("api/site").then(({data:e})=>this.Sites=e.data)},loadCategories(){axios.get("/api/category/list").then(({data:e})=>this.categories=e.data)},loadTags(){axios.get("/api/user/list").then(e=>{this.users=e.data.data,this.autocompleteItems=e.data.data.map(e=>({text:e.name,id:e.id}))}).catch(()=>console.warn("Oh. Something went wrong"))},editModal(t){this.editmode=!0,this.form.reset(),e("#addNew").modal("show"),this.form.fill(t),this.form.allocate_user=t.allocate_users.map(e=>e.id)},newModal(){this.editmode=!1,this.form.reset(),e("#addNew").modal("show")},createSite(){this.$validator.validateAll().then(async t=>{t&&(this.verrors.clear(),this.form.post("api/site").then(t=>{t.data.success?(e("#addNew").modal("hide"),Toast.fire({icon:"success",title:t.data.message}),this.loadSites()):Toast.fire({icon:"error",title:"Some error occured! Please try again"})}).catch(e=>{e.response&&e.response.data&&this.$setErrorsFromResponse(e.response.data)}))})},updateSite(){this.$validator.validateAll().then(async t=>{t&&(this.verrors.clear(),this.form.put("api/site/"+this.form.id).then(t=>{e("#addNew").modal("hide"),Toast.fire({icon:"success",title:t.data.message}),this.$Progress.finish(),this.loadSites()}).catch(e=>{e.response&&e.response.data&&this.$setErrorsFromResponse(e.response.data)}))})},deleteSite(e){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.value&&this.form.delete("api/site/"+e).then(()=>{Swal.fire("Deleted!","Your file has been deleted.","success"),this.loadSites()}).catch(e=>{Swal.fire("Failed!",e.message,"warning")})})}},mounted(){},created(){this.$Progress.start(),this.loadSites(),this.loadTags(),this.$Progress.finish()},filters:{truncate:function(e,t,s){return e.substring(0,t)+s}},computed:{filteredItems(){return this.autocompleteItems.filter(e=>-1!==e.text.toLowerCase().indexOf(this.tag.toLowerCase()))}}}}).call(this,s(4))},364:function(e,t,s){"use strict";s.r(t);var a=s(21),i=s(2),r=Object(i.a)(a.a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"content"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h3",{staticClass:"card-title"},[e._v("Site List")]),e._v(" "),s("div",{staticClass:"card-tools"},[s("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:e.newModal}},[s("i",{staticClass:"fa fa-plus-square"}),e._v("\n                                Add New\n                            ")])])]),e._v(" "),s("div",{staticClass:"card-body table-responsive p-0"},[s("table",{staticClass:"table table-hover"},[e._m(0),e._v(" "),s("tbody",e._l(e.Sites.data,(function(t){return s("tr",{key:t.id},[s("td",[e._v(e._s(t.site_id))]),e._v(" "),s("td",[e._v(e._s(t.site_name))]),e._v(" "),s("td",[e._v(e._s(t.address))]),e._v(" "),s("td",[e._v(e._s(t.state))]),e._v(" "),s("td",[e._v(e._s(t.city))]),e._v(" "),s("td",[e._v(e._s(t.zip_code))]),e._v(" "),s("td",[s("a",{attrs:{href:"javascript:void(0);"},on:{click:function(s){return e.editModal(t)}}},[s("i",{staticClass:"fa fa-edit blue"})]),e._v("\n                                        /\n                                        "),s("a",{attrs:{href:"javascript:void(0);"},on:{click:function(s){return e.deleteSite(t.id)}}},[s("i",{staticClass:"fa fa-trash red"})])])])})),0)])]),e._v(" "),s("div",{staticClass:"card-footer"},[e.Sites?s("pagination",{attrs:{data:e.Sites},on:{"pagination-change-page":e.getResults}}):e._e()],1)])])]),e._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"addNew",tabindex:"-1",role:"dialog","aria-labelledby":"addNew","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{directives:[{name:"show",rawName:"v-show",value:!e.editmode,expression:"!editmode"}],staticClass:"modal-title"},[e._v("Create New Site")]),e._v(" "),s("h5",{directives:[{name:"show",rawName:"v-show",value:e.editmode,expression:"editmode"}],staticClass:"modal-title"},[e._v("Edit Site")]),e._v(" "),e._m(1)]),e._v(" "),s("form",{on:{submit:function(t){t.preventDefault(),e.editmode?e.updateSite():e.createSite()}}},[s("div",{staticClass:"modal-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Site Id")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.site_id,expression:"form.site_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("site_id")},attrs:{type:"text",name:"site_id","data-vv-as":"Site Id"},domProps:{value:e.form.site_id},on:{input:function(t){t.target.composing||e.$set(e.form,"site_id",t.target.value)}}}),e._v(" "),e.verrors.has("site_id")?s("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("site_id")))]):e._e()])]),e._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Site Name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.site_name,expression:"form.site_name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("site_name")},attrs:{type:"text",name:"site_name","data-vv-as":"site name"},domProps:{value:e.form.site_name},on:{input:function(t){t.target.composing||e.$set(e.form,"site_name",t.target.value)}}}),e._v(" "),e.verrors.has("site_name")?s("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("site_name")))]):e._e()])]),e._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Site Address")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("address")},attrs:{type:"text",name:"address","data-vv-as":"address"},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value)}}}),e._v(" "),e.verrors.has("address")?s("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("address")))]):e._e()])]),e._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("State")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.state,expression:"form.state"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("state")},attrs:{type:"text",name:"state","data-vv-as":"state"},domProps:{value:e.form.state},on:{input:function(t){t.target.composing||e.$set(e.form,"state",t.target.value)}}}),e._v(" "),e.verrors.has("state")?s("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("state")))]):e._e()])]),e._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("City")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.city,expression:"form.city"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("city")},attrs:{type:"text",name:"city","data-vv-as":"city"},domProps:{value:e.form.city},on:{input:function(t){t.target.composing||e.$set(e.form,"city",t.target.value)}}}),e._v(" "),e.verrors.has("city")?s("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("city")))]):e._e()])]),e._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Pin Code")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.zip_code,expression:"form.zip_code"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("zip_code")},attrs:{type:"text",name:"zip_code","data-vv-as":"Pin code"},domProps:{value:e.form.zip_code},on:{input:function(t){t.target.composing||e.$set(e.form,"zip_code",t.target.value)}}}),e._v(" "),e.verrors.has("zip_code")?s("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("zip_code")))]):e._e()])]),e._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Allocate Users ")]),e._v(" "),s("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.verrors.has("allocate_user")},attrs:{multiple:"",label:"name",reduce:function(e){return e.id},options:e.users,placeholder:"Enter users ...",name:"allocate_user","data-vv-as":"Allocate Users"},model:{value:e.form.allocate_user,callback:function(t){e.$set(e.form,"allocate_user",t)},expression:"form.allocate_user"}}),e._v(" "),e.verrors.has("allocate_user")?s("div",{staticClass:"help-block invalid-feedback"},[e._v("\n                                            "+e._s(e.verrors.first("allocate_user")))]):e._e()],1)])])]),e._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Close")]),e._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:e.editmode,expression:"editmode"}],staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Update")]),e._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:!e.editmode,expression:"!editmode"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Create")])])])])])])])])}),[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",[e._v("Site ID")]),e._v(" "),s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Address")]),e._v(" "),s("th",[e._v("State")]),e._v(" "),s("th",[e._v("City")]),e._v(" "),s("th",[e._v("Pin Code")]),e._v(" "),s("th",[e._v("Action")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}],!1,null,null,null);t.default=r.exports}}]);
//# sourceMappingURL=7.bundle.2fea1f102c907f5dbbd2.js.map