(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{27:function(e,t,s){"use strict";(function(e){var a=s(7),i=s.n(a);t.a={components:{VueTagsInput:i()},data:()=>({search:"",editmode:!1,Sites:{},states:[],cities:[],form:new Form({id:"",site_id:"",site_name:"",address:"",state:"",city:"",zip_code:"",allocate_user:[]}),categories:[],users:[],tag:"",autocompleteItems:[],json_fields:{"Site Id":"site_id","Site Name":"site_name",Address:"address",State:"state",City:"city","Zip Code":"zip_code","Created By":"created_by_name"},json_meta:[[{key:"charset",value:"utf-8"}]]}),methods:{async export_csv(){return(await axios.get("api/site?export=1",{params:{search:this.search}})).data.data},startDownload(){Swal.fire({title:"Please Wait !",html:"Data populating",allowOutsideClick:!1,onBeforeOpen:()=>{Swal.showLoading()}})},finishDownload(){Swal.close()},getResults(e=1){this.$Progress.start(),axios.get("api/site",{params:{page:e,search:this.search}}).then(({data:e})=>this.Sites=e.data),this.$Progress.finish()},loadSites(){axios.get("api/site").then(({data:e})=>this.Sites=e.data)},loadCategories(){axios.get("/api/category/list").then(({data:e})=>this.categories=e.data)},loadTags(){axios.get("/api/user/list").then(e=>{this.users=e.data.data,this.autocompleteItems=e.data.data.map(e=>({text:e.name,id:e.id}))}).catch(()=>console.warn("Oh. Something went wrong"))},editModal(t){this.editmode=!0,this.form.reset(),e("#addNew").modal("show"),this.form.fill(t),this.form.allocate_user=t.allocate_users.map(e=>e.id)},newModal(){this.editmode=!1,this.form.reset(),e("#addNew").modal("show")},createSite(){this.$validator.validateAll().then(async t=>{t&&(this.verrors.clear(),this.form.post("api/site").then(t=>{t.data.success?(e("#addNew").modal("hide"),Toast.fire({icon:"success",title:t.data.message}),this.loadSites()):Toast.fire({icon:"error",title:"Some error occured! Please try again"})}).catch(e=>{e.response&&e.response.data&&this.$setErrorsFromResponse(e.response.data)}))})},updateSite(){this.$validator.validateAll().then(async t=>{t&&(this.verrors.clear(),this.form.put("api/site/"+this.form.id).then(t=>{e("#addNew").modal("hide"),Toast.fire({icon:"success",title:t.data.message}),this.$Progress.finish(),this.loadSites()}).catch(e=>{e.response&&e.response.data&&this.$setErrorsFromResponse(e.response.data)}))})},deleteSite(e){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.value&&this.form.delete("api/site/"+e).then(()=>{Swal.fire("Deleted!","Your file has been deleted.","success"),this.loadSites()}).catch(e=>{Swal.fire("Failed!",e.message,"warning")})})}},mounted(){},created(){this.$Progress.start(),this.loadSites(),this.loadTags(),this.$Progress.finish()},filters:{truncate:function(e,t,s){return e.substring(0,t)+s}},computed:{filteredItems(){return this.autocompleteItems.filter(e=>-1!==e.text.toLowerCase().indexOf(this.tag.toLowerCase()))}},beforeCreate(){axios.get("api/getStates").then(e=>{this.states=e.data.data})},watch:{"form.state":{immediate:!0,handler(e){e&&axios.get("api/getCities",{params:{state:e}}).then(e=>{this.cities=e.data.data})}}}}}).call(this,s(3))},393:function(e,t,s){"use strict";s.r(t);var a=s(27),i=s(1),r=Object(i.a)(a.a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"content"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h3",{staticClass:"card-title"},[e._v("Site List")]),e._v(" "),s("div",{staticClass:"card-tools"},[s("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:e.newModal}},[s("i",{staticClass:"fa fa-plus-square"}),e._v("\n                                Add New\n                            ")])])]),e._v(" "),s("div",{staticClass:"card-body p-2"},[s("form",{attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.getResults()}}},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"col col-3 pt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control",attrs:{placeholder:"Enter ..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"col col-3 pt-2 btn-group",attrs:{role:"group"}},[s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Search")]),e._v(" "),s("download-excel",{staticClass:"btn btn-warning",attrs:{fetch:e.export_csv,fields:e.json_fields,"before-generate":e.startDownload,"before-finish":e.finishDownload,worksheet:"My Worksheet",type:"csv",name:"site_list.csv"}},[s("span",{staticClass:"labelText"},[s("i",{staticClass:"fa fa-file-excel-o",attrs:{"aria-hidden":"true"}}),e._v("\n                                            Export as CSV")])])],1)])])]),e._v(" "),s("div",{staticClass:"card-body table-responsive p-0"},[s("table",{staticClass:"table table-hover"},[e._m(0),e._v(" "),s("tbody",e._l(e.Sites.data,(function(t){return s("tr",{key:t.id},[s("td",[e._v(e._s(t.site_id))]),e._v(" "),s("td",[e._v(e._s(t.site_name))]),e._v(" "),s("td",[e._v(e._s(t.address))]),e._v(" "),s("td",[e._v(e._s(t.state))]),e._v(" "),s("td",[e._v(e._s(t.city))]),e._v(" "),s("td",[e._v(e._s(t.zip_code))]),e._v(" "),s("td",[s("a",{staticClass:"btn btn-success btn-sm",attrs:{href:"javascript:void(0);"},on:{click:function(s){return e.editModal(t)}}},[e._v("\n                                            Edit\n                                        ")])])])})),0)])]),e._v(" "),s("div",{staticClass:"card-footer"},[e.Sites?s("pagination",{attrs:{data:e.Sites},on:{"pagination-change-page":e.getResults}}):e._e()],1)])])]),e._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"addNew",tabindex:"-1",role:"dialog","aria-labelledby":"addNew","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{directives:[{name:"show",rawName:"v-show",value:!e.editmode,expression:"!editmode"}],staticClass:"modal-title"},[e._v("Create New Site")]),e._v(" "),s("h5",{directives:[{name:"show",rawName:"v-show",value:e.editmode,expression:"editmode"}],staticClass:"modal-title"},[e._v("Edit Site")]),e._v(" "),e._m(1)]),e._v(" "),s("form",{on:{submit:function(t){t.preventDefault(),e.editmode?e.updateSite():e.createSite()}}},[s("div",{staticClass:"modal-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Site Id")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.site_id,expression:"form.site_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("site_id")},attrs:{type:"text",name:"site_id","data-vv-as":"Site Id",disabled:""!=e.form.id},domProps:{value:e.form.site_id},on:{input:function(t){t.target.composing||e.$set(e.form,"site_id",t.target.value)}}}),e._v(" "),e.verrors.has("site_id")?s("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("site_id")))]):e._e()])]),e._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Site Name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.site_name,expression:"form.site_name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("site_name")},attrs:{type:"text",name:"site_name","data-vv-as":"site name",disabled:""!=e.form.id},domProps:{value:e.form.site_name},on:{input:function(t){t.target.composing||e.$set(e.form,"site_name",t.target.value)}}}),e._v(" "),e.verrors.has("site_name")?s("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("site_name")))]):e._e()])]),e._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Site Address")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("address")},attrs:{type:"text",name:"address","data-vv-as":"address"},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value)}}}),e._v(" "),e.verrors.has("address")?s("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("address")))]):e._e()])]),e._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("State")]),e._v(" "),s("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{error:e.verrors.state,error:e.verrors.has("state"),haveValue:e.form.state},attrs:{label:"name",reduce:function(e){return e.name},options:e.states,placeholder:"Enter State ...","data-vv-name":"state"},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}}),e._v(" "),e.verrors.has("state")?s("div",{staticClass:"help-block invalid-feedback"},[e._v("\n                                            "+e._s(e.verrors.first("state")))]):e._e()],1)]),e._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("City")]),e._v(" "),s("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{error:e.verrors.city,error:e.verrors.has("city"),haveValue:e.form.city},attrs:{label:"name",reduce:function(e){return e.name},options:e.cities,placeholder:"Enter City ...","data-vv-name":"city"},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}}),e._v(" "),e.verrors.has("city")?s("div",{staticClass:"help-block invalid-feedback"},[e._v("\n                                            "+e._s(e.verrors.first("city")))]):e._e()],1)]),e._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Pin Code")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.zip_code,expression:"form.zip_code"},{name:"validate",rawName:"v-validate",value:"required|integer|min:6|max:6",expression:"'required|integer|min:6|max:6'"}],staticClass:"form-control",class:{"is-invalid":e.verrors.has("zip_code")},attrs:{type:"text",name:"zip_code","data-vv-as":"Pin code"},domProps:{value:e.form.zip_code},on:{input:function(t){t.target.composing||e.$set(e.form,"zip_code",t.target.value)}}}),e._v(" "),e.verrors.has("zip_code")?s("div",{staticClass:"help-block invalid-feedback"},[e._v(" "+e._s(e.verrors.first("zip_code")))]):e._e()])]),e._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Allocate Users ")]),e._v(" "),s("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.verrors.has("allocate_user")},attrs:{multiple:"",label:"name",reduce:function(e){return e.id},options:e.users,placeholder:"Enter users ...",name:"allocate_user","data-vv-as":"Allocate Users"},model:{value:e.form.allocate_user,callback:function(t){e.$set(e.form,"allocate_user",t)},expression:"form.allocate_user"}}),e._v(" "),e.verrors.has("allocate_user")?s("div",{staticClass:"help-block invalid-feedback"},[e._v("\n                                            "+e._s(e.verrors.first("allocate_user")))]):e._e()],1)])])]),e._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Close")]),e._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:e.editmode,expression:"editmode"}],staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Update")]),e._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:!e.editmode,expression:"!editmode"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Create")])])])])])])])])}),[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",[e._v("Site ID")]),e._v(" "),s("th",[e._v("Site Name")]),e._v(" "),s("th",[e._v("Site Address")]),e._v(" "),s("th",[e._v("State")]),e._v(" "),s("th",[e._v("City")]),e._v(" "),s("th",[e._v("Pin Code")]),e._v(" "),s("th",[e._v("Action")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}],!1,null,null,null);t.default=r.exports}}]);
//# sourceMappingURL=15.bundle.6f564f616609a72bac0c.js.map