(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{NVM6:function(t,e,a){"use strict";a.r(e);var s=a("eyXw"),i={name:"SiteWiseExpenses",components:{MonthPicker:s.a,MonthPickerInput:s.b},data:()=>({read_at:"",pmModalData:"",created_users:[],search_machines:[],search_sites:[],search_tickets:[],search:{read_at:"",site_id:""},categories:[],sub_categories:[],sites:[],selected_machine:"",users:[],machines:[],Tickets:{},clearEmittedText:"",default_month:"",json_meta:[[{key:"charset",value:"utf-8"}]]}),methods:{deleteReading(t){console.log(t),Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(e=>{e.value&&this.axios.delete("api/reading/"+t.id).then(()=>{Swal.fire("Deleted!","Your file has been deleted.","success"),this.getResults()}).catch(t=>{Swal.fire("Failed!",t.message,"warning")})})},showClearText(){this.clearEmittedText="emitted",this.default_month="",window.setTimeout(()=>{this.clearEmittedText=null},1e3)},UpdateValues(t){this.search.tat_from=t.minValue,this.search.tat_to=t.maxValue},finishDownload(){Swal.close()},getLabel:t=>"object"==typeof t?t.far_no+" - "+t.name:t,getResults(t=1){let e=this.$loading.show({container:this.$refs.ref_load_user});this.search.page=t,axios.get("/api/reading",this.search).then(t=>{console.log(t.data.data),this.Tickets=t.data.data,e.hide()}).catch(t=>{console.error(t),e.hide()})}},created(){this.getResults()},beforeCreate(){axios.get("api/get_pre_machine").then(t=>{this.categories=t.data.data.Category,this.sites=t.data.data.sites}),axios.get("/api/initial_ticket").then(t=>{this.users=t.data.data.vendors,this.machines=t.data.data.machines,this.search_machines=t.data.data.machines,this.search_sites=t.data.data.sites,this.created_users=t.data.data.created_users}).catch(()=>console.warn("Oh. Something went wrong"))},watch:{}},r=a("JFUb"),n=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[t._v("Data Reading List")]),t._v(" "),a("div",{staticClass:"card-tools"},[a("router-link",{staticClass:"btn btn-sm btn-primary",attrs:{to:"/add-edit-reading-data"}},[a("i",{staticClass:"fa fa-plus-square",attrs:{"aria-hidden":"true"}}),t._v(" Add New\n                            ")])],1)]),t._v(" "),a("div",{staticClass:"card-body p-2"},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.getResults()}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col col-2"},[a("label",[t._v("Select Date")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search.read_at,expression:"search.read_at"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.search.read_at},on:{input:function(e){e.target.composing||t.$set(t.search,"read_at",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col col-2"},[a("label",[t._v("Select Site")]),t._v(" "),a("v-select",{attrs:{label:"site_name",reduce:function(t){return t.id},options:t.search_sites,placeholder:"Select Site...",name:"site_id"},model:{value:t.search.site_id,callback:function(e){t.$set(t.search,"site_id",e)},expression:"search.site_id"}})],1),t._v(" "),t._m(0)])])]),t._v(" "),a("div",{staticClass:"card-body table-responsive p-0 ticketTable"},[t.Tickets?a("table",{staticClass:"table table-hover table-striped"},[t._m(1),t._v(" "),a("tbody",t._l(t.Tickets,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(t._f("myDate")(e.read_at)))]),t._v(" "),a("td",[t._v(t._s(e.sites.site_name))]),t._v(" "),a("td",[a("router-link",{staticClass:"btn btn-sm btn-primary",attrs:{to:"/add-edit-reading-data/"+e.id}},[t._v("\n                                            Edit\n                                        ")]),t._v(" "),a("a",{staticClass:"btn btn-danger btn-sm",attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.deleteReading(e)}}},[t._v("\n                                            Delete\n                                        ")])],1)])})),0)]):t._e()])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col pt-4"},[e("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[this._v("\n                                        Search\n                                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Read At")]),this._v(" "),e("th",[this._v("Site")]),this._v(" "),e("th",[this._v("Operation")])])])}],!1,null,null,null);e.default=n.exports}}]);
//# sourceMappingURL=23.bundle.6b9bd5b8bcd04963cfe4.js.map