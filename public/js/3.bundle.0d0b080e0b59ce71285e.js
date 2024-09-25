(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{22:function(t,a,e){"use strict";(function(t){a.a={data:()=>({editmode:!1,categories:{},parent_categories:[],form:new Form({id:"",name:"",parent_id:""})}),methods:{getResults(t=1){this.$Progress.start(),axios.get("/api/category?page="+t).then(({data:t})=>this.categories=t.data),this.$Progress.finish()},updateCategory(){this.$Progress.start(),this.form.put("/api/category/"+this.form.id).then(a=>{t("#addNew").modal("hide"),Toast.fire({icon:"success",title:a.data.message}),this.$Progress.finish(),this.loadCategories()}).catch(()=>{this.$Progress.fail()})},editModal(a){this.editmode=!0,this.form.reset(),t("#addNew").modal("show"),this.form.fill(a)},newModal(){this.editmode=!1,this.form.reset(),t("#addNew").modal("show")},loadCategories(){this.$gate.isAdmin()&&(axios.get("/api/category").then(({data:t})=>this.categories=t.data),this.get_parent_cat())},createCategory(){this.form.post("/api/category").then(a=>{t("#addNew").modal("hide"),Toast.fire({icon:"success",title:a.data.message}),this.$Progress.finish(),this.loadCategories()}).catch(()=>{Toast.fire({icon:"error",title:"Some error occured! Please try again"})})},async get_parent_cat(){axios.get("/api/category/list").then(({data:t})=>this.parent_categories=t.data)}},mounted(){},created(){this.$Progress.start(),this.loadCategories(),this.$Progress.finish()}}}).call(this,e(4))},365:function(t,a,e){"use strict";e.r(a);var s=e(22),i=e(2),r=Object(i.a)(s.a,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[t.$gate.isAdmin()?e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title"},[t._v("Category List")]),t._v(" "),e("div",{staticClass:"card-tools"},[e("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.newModal}},[e("i",{staticClass:"fa fa-plus-square"}),t._v("\n                    Add New\n                ")])])]),t._v(" "),e("div",{staticClass:"card-body table-responsive p-0"},[e("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),e("tbody",t._l(t.categories.data,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.id))]),t._v(" "),e("td",{staticClass:"text-capitalize"},[t._v(t._s(a.name))]),t._v(" "),e("td",[t._v(t._s(a.parent_category?a.parent_category.name:"-"))]),t._v(" "),e("td",[t._v(t._s(t._f("myDate")(a.created_at)))]),t._v(" "),e("td",[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.editModal(a)}}},[e("i",{staticClass:"fa fa-edit blue"})])])])})),0)])]),t._v(" "),e("div",{staticClass:"card-footer"},[e("pagination",{attrs:{data:t.categories},on:{"pagination-change-page":t.getResults}})],1)]):t._e()])]),t._v(" "),t.$gate.isAdmin()?t._e():e("div",[e("not-found")],1),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"addNew",tabindex:"-1",role:"dialog","aria-labelledby":"addNew","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{directives:[{name:"show",rawName:"v-show",value:!t.editmode,expression:"!editmode"}],staticClass:"modal-title"},[t._v("Create New Category")]),t._v(" "),e("h5",{directives:[{name:"show",rawName:"v-show",value:t.editmode,expression:"editmode"}],staticClass:"modal-title"},[t._v("Update Category")]),t._v(" "),t._m(1)]),t._v(" "),e("form",{on:{submit:function(a){a.preventDefault(),t.editmode?t.updateCategory():t.createCategory()}}},[e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Parent Category")]),t._v(" "),e("v-select",{class:{"is-invalid":t.form.errors.has("parent_id")},attrs:{label:"name",reduce:function(t){return t.id},options:t.parent_categories,placeholder:"Select Parent category ..."},model:{value:t.form.parent_id,callback:function(a){t.$set(t.form,"parent_id",a)},expression:"form.parent_id"}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"parent_id"}})],1)]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.editmode,expression:"editmode"}],staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Update")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:!t.editmode,expression:"!editmode"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Create")])])])])])])])])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("ID")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Parent Category")]),t._v(" "),e("th",[t._v("Created")]),t._v(" "),e("th",[t._v("Action")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}],!1,null,null,null);a.default=r.exports}}]);
//# sourceMappingURL=3.bundle.0d0b080e0b59ce71285e.js.map