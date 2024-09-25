(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{29:function(t,a,e){"use strict";(function(t){a.a={data:()=>({search:"",editmode:!1,categories:{},parent_categories:[],form:new Form({id:"",name:"",parent_id:""}),json_fields:{"Category Name":"name","Parent Category Name":{field:"parent_category",callback:t=>t?t.name:"-"},"Created By":"created_by_name"},json_meta:[[{key:"charset",value:"utf-8"}]]}),methods:{async export_csv(){return(await axios.get("api/category?export=1",{params:{search:this.search}})).data.data},startDownload(){Swal.fire({title:"Please Wait !",html:"Data populating",allowOutsideClick:!1,onBeforeOpen:()=>{Swal.showLoading()}})},finishDownload(){Swal.close()},getResults(t=1){this.$Progress.start(),axios.get("/api/category",{params:{page:t,search:this.search}}).then(({data:t})=>this.categories=t.data),this.$Progress.finish()},updateCategory(){this.$Progress.start(),this.form.put("/api/category/"+this.form.id).then(a=>{t("#addNew").modal("hide"),Toast.fire({icon:"success",title:a.data.message}),this.$Progress.finish(),this.loadCategories()}).catch(()=>{this.$Progress.fail()})},editModal(a){this.editmode=!0,this.form.reset(),t("#addNew").modal("show"),this.form.fill(a)},newModal(){this.editmode=!1,this.form.reset(),t("#addNew").modal("show")},loadCategories(){this.$gate.isAdmin()&&(axios.get("/api/category").then(({data:t})=>this.categories=t.data),this.get_parent_cat())},createCategory(){this.form.post("/api/category").then(a=>{t("#addNew").modal("hide"),Toast.fire({icon:"success",title:a.data.message}),this.$Progress.finish(),this.loadCategories()}).catch(()=>{Toast.fire({icon:"error",title:"Some error occured! Please try again"})})},async get_parent_cat(){axios.get("/api/category/list").then(({data:t})=>this.parent_categories=t.data)}},created(){this.$Progress.start(),this.loadCategories(),this.$Progress.finish()}}}).call(this,e(3))},394:function(t,a,e){"use strict";e.r(a);var s=e(29),r=e(1),i=Object(r.a)(s.a,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[t.$gate.isAdmin()?e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title"},[t._v("Category List")]),t._v(" "),e("div",{staticClass:"card-tools"},[e("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.newModal}},[e("i",{staticClass:"fa fa-plus-square"}),t._v("\n                                Add New\n                            ")])])]),t._v(" "),e("div",{staticClass:"card-body p-2"},[e("form",{attrs:{autocomplete:"off"},on:{submit:function(a){return a.preventDefault(),t.getResults()}}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"col col-3 pt-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{placeholder:"Enter Category ..."},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"col col-3 pt-2 btn-group",attrs:{role:"group"}},[e("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Search")]),t._v(" "),e("download-excel",{staticClass:"uploadBtn btnTransparent",attrs:{fetch:t.export_csv,fields:t.json_fields,"before-generate":t.startDownload,"before-finish":t.finishDownload,worksheet:"My Worksheet",type:"csv",name:"category_list.csv"}},[e("span",{staticClass:"labelText"},[e("i",{staticClass:"fa fa-file-excel-o",attrs:{"aria-hidden":"true"}}),t._v("\n                                             Export as\n                                             CSV")])])],1)])])]),t._v(" "),e("div",{staticClass:"card-body table-responsive p-0"},[e("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),e("tbody",t._l(t.categories.data,(function(a,s){return e("tr",{key:a.id},[e("td",[t._v(t._s(t.categories.from+s))]),t._v(" "),e("td",{staticClass:"text-capitalize"},[t._v(t._s(a.name))]),t._v(" "),e("td",[t._v(t._s(a.parent_category?a.parent_category.name:"-"))]),t._v(" "),e("td",[t._v(t._s(a.created_by_name))]),t._v(" "),e("td",[t._v(t._s(t._f("myDate")(a.created_at)))]),t._v(" "),e("td",[e("a",{staticClass:"btn btn-success btn-sm",attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.editModal(a)}}},[t._v("\n                                            Edit\n                                        ")]),t._v(" "),a.parent_category?t._e():e("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:"/machines/category/settings/"+a.id}},[t._v("PM\n                                            Settings")])],1)])})),0)])]),t._v(" "),e("div",{staticClass:"card-footer"},[e("pagination",{attrs:{data:t.categories},on:{"pagination-change-page":t.getResults}})],1)]):t._e()])]),t._v(" "),t.$gate.isAdmin()?t._e():e("div",[e("not-found")],1),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"addNew",tabindex:"-1",role:"dialog","aria-labelledby":"addNew","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{directives:[{name:"show",rawName:"v-show",value:!t.editmode,expression:"!editmode"}],staticClass:"modal-title"},[t._v("Create New Category")]),t._v(" "),e("h5",{directives:[{name:"show",rawName:"v-show",value:t.editmode,expression:"editmode"}],staticClass:"modal-title"},[t._v("Update Category")]),t._v(" "),t._m(1)]),t._v(" "),e("form",{on:{submit:function(a){a.preventDefault(),t.editmode?t.updateCategory():t.createCategory()}}},[e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Parent Category")]),t._v(" "),e("v-select",{class:{"is-invalid":t.form.errors.has("parent_id")},attrs:{label:"name",reduce:function(t){return t.id},options:t.parent_categories,placeholder:"Select Parent category ..."},model:{value:t.form.parent_id,callback:function(a){t.$set(t.form,"parent_id",a)},expression:"form.parent_id"}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"parent_id"}})],1)]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.editmode,expression:"editmode"}],staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Update")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:!t.editmode,expression:"!editmode"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Create")])])])])])])])])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("Sl. No")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Parent Category")]),t._v(" "),e("th",[t._v("Created By")]),t._v(" "),e("th",[t._v("Created On")]),t._v(" "),e("th",[t._v("Action")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}],!1,null,null,null);a.default=i.exports}}]);
//# sourceMappingURL=7.bundle.6f68ecb3d76db4755d58.js.map