(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{30:function(t,a,s){"use strict";(function(t){a.a={data:()=>({editmode:!1,Companies:{},form:new Form({id:"",name:"",parent_id:""})}),methods:{getResults(t=1){this.$Progress.start(),axios.get("/api/company?page="+t).then(({data:t})=>this.Companies=t.data),this.$Progress.finish()},updatecompany(){this.$Progress.start(),this.form.put("/api/company/"+this.form.id).then(a=>{t("#addNewcompany").modal("hide"),Toast.fire({icon:"success",title:a.data.message}),this.$Progress.finish(),this.loadCompanies()}).catch(()=>{this.$Progress.fail()})},editModal(a){this.editmode=!0,this.form.reset(),t("#addNewcompany").modal("show"),this.$refs.name.focus(),this.form.fill(a)},newModal(){this.editmode=!1,this.form.reset(),t("#addNewcompany").modal("show"),this.$refs.name.focus()},loadCompanies(){this.$gate.isAdmin()&&axios.get("/api/company").then(({data:t})=>this.Companies=t.data)},createcompany(){this.form.post("/api/company").then(a=>{t("#addNewcompany").modal("hide"),Toast.fire({icon:"success",title:a.data.message}),this.$Progress.finish(),this.loadCompanies()}).catch(()=>{Toast.fire({icon:"error",title:"Some error occured! Please try again"})})}},mounted(){},created(){this.$Progress.start(),this.loadCompanies(),this.$Progress.finish()}}}).call(this,s(3))},385:function(t,a,s){"use strict";s.r(a);var e=s(30),i=s(1),o=Object(i.a)(e.a,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"content"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[t.$gate.isAdmin()?s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h3",{staticClass:"card-title"},[t._v("Company List")]),t._v(" "),s("div",{staticClass:"card-tools"},[s("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.newModal}},[s("i",{staticClass:"fa fa-plus-square"}),t._v("\n                    Add New\n                ")])])]),t._v(" "),s("div",{staticClass:"card-body table-responsive p-0"},[s("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),s("tbody",t._l(t.Companies.data,(function(a,e){return s("tr",{key:a.id},[s("td",[t._v(t._s(t.Companies.from+e))]),t._v(" "),s("td",{staticClass:"text-capitalize"},[t._v(t._s(a.name))]),t._v(" "),s("td",[t._v(t._s(a.created_by_name))]),t._v(" "),s("td",[t._v(t._s(t._f("myDate")(a.created_at)))])])})),0)])]),t._v(" "),s("div",{staticClass:"card-footer"},[s("pagination",{attrs:{data:t.Companies},on:{"pagination-change-page":t.getResults}})],1)]):t._e()])]),t._v(" "),t.$gate.isAdmin()?t._e():s("div",[s("not-found")],1),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"addNewcompany",tabindex:"-1",role:"dialog","aria-labelledby":"addNewcompany","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{directives:[{name:"show",rawName:"v-show",value:!t.editmode,expression:"!editmode"}],staticClass:"modal-title"},[t._v("Create New company")]),t._v(" "),s("h5",{directives:[{name:"show",rawName:"v-show",value:t.editmode,expression:"editmode"}],staticClass:"modal-title"},[t._v("Update company")]),t._v(" "),t._m(1)]),t._v(" "),s("form",{on:{submit:function(a){a.preventDefault(),t.editmode?t.updatecompany():t.createcompany()}}},[s("div",{staticClass:"modal-body"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],ref:"name",staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:t.editmode,expression:"editmode"}],staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Update")]),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:!t.editmode,expression:"!editmode"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Create")])])])])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("Sl. No")]),this._v(" "),a("th",[this._v("Make")]),this._v(" "),a("th",[this._v("Created By")]),this._v(" "),a("th",[this._v("Created On")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}],!1,null,null,null);a.default=o.exports}}]);
//# sourceMappingURL=6.bundle.3a56342343fe0708e886.js.map