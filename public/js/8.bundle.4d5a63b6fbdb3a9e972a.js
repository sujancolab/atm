(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{360:function(t,e,a){"use strict";a.r(e);var s={name:"Machine",data:()=>({Machines:{}}),methods:{getResults(t=1){axios.get("api/machine?page="+t).then(({data:t})=>this.Machines=t.data)},loadMachines(){axios.get("api/machine").then(({data:t})=>this.Machines=t.data)},deleteMachine(t){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(e=>{e.value&&this.form.delete("api/machine/"+t).then(()=>{Swal.fire("Deleted!","Your file has been deleted.","success"),this.loadMachines()}).catch(t=>{Swal.fire("Failed!",t.message,"warning")})})}},mounted(){},created(){this.loadMachines()}},i=a(2),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[t._v("Machine List")]),t._v(" "),a("div",{staticClass:"card-tools"},[a("router-link",{staticClass:"btn btn-sm btn-primary",attrs:{to:"/machines/add"}},[a("i",{staticClass:"fa fa-plus-square",attrs:{"aria-hidden":"true"}}),t._v(" Add New\n                            ")])],1)]),t._v(" "),a("div",{staticClass:"card-body table-responsive p-0"},[a("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),a("tbody",t._l(t.Machines.data,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.far_no))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.owner))]),t._v(" "),a("td",[e.is_maintenance_date?a("span",[t._v(" Date wise : "+t._s(e.next_pm_date.maintenance_date)+"\n                                            days"),a("br")]):t._e(),t._v(" "),e.is_consumtion_km_run?a("span",[t._v(" Km wise : "+t._s(e.next_pm_date.km_run)+" days"),a("br")]):t._e(),t._v(" "),e.is_consumtion_hr_run?a("span",[t._v(" Hour wise : "+t._s(e.next_pm_date.hr_run)+" days"),a("br")]):t._e(),t._v(" "),e.is_production_fig?a("span",[t._v(" Production wise : "+t._s(e.next_pm_date.production_fig)+"\n                                            days"),a("br")]):t._e()]),t._v(" "),t._m(1,!0),t._v(" "),a("td",[t._v(t._s(e.purchase_date))]),t._v(" "),a("td",[t._v(t._s(e.machine_type))]),t._v(" "),a("td",[a("router-link",{staticClass:"text-green",attrs:{to:"/machines/edit/"+e.id}},[a("i",{staticClass:"fa fa-edit blue"})]),t._v("\n                                        /\n                                        "),a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.deleteMachine(e.id)}}},[a("i",{staticClass:"fa fa-trash red"})])],1)])})),0)])]),t._v(" "),a("div",{staticClass:"card-footer"},[t.Machines?a("pagination",{attrs:{data:t.Machines},on:{"pagination-change-page":t.getResults}}):t._e()],1)])])])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("FAR No ")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Owner")]),t._v(" "),a("th",[t._v("Next PM ")]),t._v(" "),a("th",[t._v("Chart")]),t._v(" "),a("th",[t._v("Purchase Date")]),t._v(" "),a("th",[t._v("Machine Type")]),t._v(" "),a("th",[t._v("Action")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("img",{attrs:{src:"/images/chart.png",width:"102"}})])}],!1,null,null,null);e.default=n.exports}}]);
//# sourceMappingURL=8.bundle.4d5a63b6fbdb3a9e972a.js.map