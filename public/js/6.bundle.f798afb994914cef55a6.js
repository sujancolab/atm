(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{35:function(t,e,a){"use strict";(function(t){var s=a(16),i=a(7),n=a.n(i),r=a(36),o=a.n(r);e.a={components:{VueTagsInput:n(),MultiRangeSlider:s.a,MachinePop:()=>a.e(0).then(a.bind(null,48)),VueReadMoreSmooth:o()},data(){return{additionalMore:[],problemsMore:[],pmModalData:"",created_users:[],search_machines:[],search_sites:[],search:{page:1,machine_id:"",site_id:"",created_by:"",created_from:"",created_to:"",tat_from:0,tat_to:90},categories:[],sub_categories:[],sites:[],selected_machine:"",users:[],machines:[],Tickets:{},sl:1,json_fields:{"Sl No":{callback:()=>this.sl++},"Site name":"site_name","Equipment Description":"machine_name","FAR No":"far_no","Complaint No":"ticket_no","Complaint date":"created_at","Complaint Raised By":"created_by_name","Complaint Nature":"complaint_nature","Status During Complaint":"status_during_complaint","Problem description":"problem_description","Additional Problem":{field:"problems",callback:t=>{let e="";return t&&(e=t.map(t=>t.problem).join("\r\n")),e}},"Current Status":{field:"status",callback:t=>"created by user"==t.toLowerCase()?"Open":t},"Current Stage":{field:"last_stage",callback:t=>t?t.description:"-"},"Status Post Resolution":"machine_status","Expected Resolution date":"likely_date","Actual Resolve Date":"actual_date",TAT:"tat","Estimated Cost":"estimated_service_cost","Actual Cost":"actual_service_cost","Production Loss":"production_loss"},json_meta:[[{key:"charset",value:"utf-8"}]],sl:0}},methods:{view_site_details(e){this.pmModalData=e,t("#MachineSiteModal3").modal("show")},reset_filter(){this.search={page:1,machine_id:"",site_id:"",created_by:"",created_from:"",created_to:"",tat_from:0,tat_to:90},this.getResults()},UpdateValues(t){this.search.tat_from=t.minValue,this.search.tat_to=t.maxValue},export_csv:async()=>(await axios.get("api/ticket/export")).data.data,startDownload(){this.sl=1,Swal.fire({title:"Please Wait !",html:"Data populating",allowOutsideClick:!1,onBeforeOpen:()=>{Swal.showLoading()}})},finishDownload(){Swal.close()},getLabel:t=>"object"==typeof t?t.far_no+" - "+t.name:t,getResults(t=1){this.$Progress.start(),this.search.page=t,axios.get("/api/ticket/report",{params:this.search}).then(t=>{this.Tickets=t.data.data,this.additionalMore=new Array(this.Tickets.data.length).fill(!1),this.problemsMore=new Array(this.Tickets.data.length).fill(!1)}),this.$Progress.finish()},loadTickets(){axios.get("/api/ticket/report",{params:this.search}).then(t=>{this.Tickets=t.data.data,this.additionalMore=new Array(this.Tickets.data.length).fill(!1),this.problemsMore=new Array(this.Tickets.data.length).fill(!1)})},sclick(t,e=""){if(e){let e=!this.problemsMore[t];this.$set(this.problemsMore,t,e)}else{let e=!this.additionalMore[t];this.$set(this.additionalMore,t,e)}}},created(){this.loadTickets()},beforeCreate(){axios.get("api/get_pre_machine").then(t=>{this.categories=t.data.data.Category,this.sites=t.data.data.sites}),axios.get("/api/initial_ticket").then(t=>{this.users=t.data.data.vendors,this.machines=t.data.data.machines,this.search_machines=t.data.data.machines,this.search_sites=t.data.data.sites,this.created_users=t.data.data.created_users}).catch(()=>console.warn("Oh. Something went wrong"))},watch:{async"form.sub_category_id"(t,e){t&&this.get_machine()},async"form.site_id"(t,e){t&&this.get_machine()},"form.category_id":{handler:function(t,e){t&&(axios.get("api/category/"+t).then(t=>{this.sub_categories=t.data.data}),this.get_machine())},deep:!0,initial:!0}}}}).call(this,a(3))},36:function(t,e){t.exports=function(t){var e={};function a(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=t,a.c=e,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s="fb15")}({2350:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var a=function(t,e){var a=t[1]||"",s=t[3];if(!s)return a;if(e&&"function"==typeof btoa){var i=(r=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),n=s.sources.map((function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"}));return[a].concat(n).concat([i]).join("\n")}var r;return[a].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+a+"}":a})).join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},i=0;i<this.length;i++){var n=this[i][0];"number"==typeof n&&(s[n]=!0)}for(i=0;i<t.length;i++){var r=t[i];"number"==typeof r[0]&&s[r[0]]||(a&&!r[2]?r[2]=a:a&&(r[2]="("+r[2]+") and ("+a+")"),e.push(r))}},e}},"499e":function(t,e,a){"use strict";function s(t,e){for(var a=[],s={},i=0;i<e.length;i++){var n=e[i],r=n[0],o={id:t+":"+i,css:n[1],media:n[2],sourceMap:n[3]};s[r]?s[r].parts.push(o):a.push(s[r]={id:r,parts:[o]})}return a}a.r(e),a.d(e,"default",(function(){return p}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n={},r=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,d=function(){},u=null,h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,a,i){c=a,u=i||{};var r=s(t,e);return _(r),function(e){for(var a=[],i=0;i<r.length;i++){var o=r[i];(l=n[o.id]).refs--,a.push(l)}e?_(r=s(t,e)):r=[];for(i=0;i<a.length;i++){var l;if(0===(l=a[i]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete n[l.id]}}}}function _(t){for(var e=0;e<t.length;e++){var a=t[e],s=n[a.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](a.parts[i]);for(;i<a.parts.length;i++)s.parts.push(v(a.parts[i]));s.parts.length>a.parts.length&&(s.parts.length=a.parts.length)}else{var r=[];for(i=0;i<a.parts.length;i++)r.push(v(a.parts[i]));n[a.id]={id:a.id,refs:1,parts:r}}}}function f(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function v(t){var e,a,s=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(s){if(c)return d;s.parentNode.removeChild(s)}if(h){var i=l++;s=o||(o=f()),e=b.bind(null,s,i,!1),a=b.bind(null,s,i,!0)}else s=f(),e=y.bind(null,s),a=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else a()}}var m,g=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function b(t,e,a,s){var i=a?"":s.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var n=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(n,r[e]):t.appendChild(n)}}function y(t,e){var a=e.css,s=e.media,i=e.sourceMap;if(s&&t.setAttribute("media",s),u.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),i&&(a+="\n/*# sourceURL="+i.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}},"4d93":function(t,e,a){(t.exports=a("2350")(!1)).push([t.i,".text-overflow-content[data-v-72c03b2a]{--nlines:3;--lineHeight:1.5;max-height:calc(var(--nlines)*var(--lineHeight));overflow:hidden;-webkit-transition:max-height .3s ease;transition:max-height .3s ease}.text-overflow[data-v-72c03b2a]{position:relative}.no-overflow .text-overflow-content[data-v-72c03b2a]{max-height:100%;overflow:visible}.no-overflow .button-read-more[data-v-72c03b2a],.no-overflow .hide-text[data-v-72c03b2a]{display:none}.read-more-button[data-v-72c03b2a]{cursor:pointer;display:block;position:relative;border-top:1px solid #dbdbdb;height:.1em;margin:2em auto;width:95%;text-align:center}.read-more-button span[data-v-72c03b2a]{background:#fff;color:#b5b5b5;display:inline-block;font-size:.75em;padding:.4em .8em;-webkit-transform:translateY(-1.1em);transform:translateY(-1.1em);text-align:center}.hide-text[data-v-72c03b2a]{--nlines:6;--lineHeight:1.5;background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),color-stop(90%,#fff),to(#fff));background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 0,#fff 90%,#fff);width:100%;height:calc(var(--nlines)*var(--lineHeight));position:absolute;-webkit-transform:translateY(calc(var(--nlines)*-1*var(--lineHeight)));transform:translateY(calc(var(--nlines)*-1*var(--lineHeight)))}.hide-text[data-v-72c03b2a],.read-more-button[data-v-72c03b2a]{-webkit-transition:opacity .3s ease,margin .3s ease;transition:opacity .3s ease,margin .3s ease;opacity:1}.expanded .hide-text[data-v-72c03b2a],.expanded .read-more-button[data-v-72c03b2a]:not(.show-less){opacity:0;margin-top:0;margin-bottom:0;pointer-events:none}",""])},6099:function(t,e,a){var s=a("4d93");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a("499e").default)("e6468484",s,!0,{sourceMap:!1,shadowMode:!1})},"6b0e":function(t,e,a){"use strict";var s=a("6099");a.n(s).a},f6fd:function(t,e){!function(t){var e=t.getElementsByTagName("script");"currentScript"in t||Object.defineProperty(t,"currentScript",{get:function(){try{throw new Error}catch(s){var t,a=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(s.stack)||[!1])[1];for(t in e)if(e[t].src==a||"interactive"==e[t].readyState)return e[t];return null}}})}(document)},fb15:function(t,e,a){"use strict";var s;(a.r(e),"undefined"!=typeof window)&&(a("f6fd"),(s=window.document.currentScript)&&(s=s.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(a.p=s[1]));var i={name:"vue-read-more-smooth",props:{lines:{type:Number,default:3},gLines:{type:Number,default:null},maxLines:{type:Number,default:null},text:{type:String,default:"Read more"},textLess:{type:String,default:"Read less"},noLess:{type:Boolean,default:!1},openByDefault:{type:Boolean,default:!1},open:{type:Boolean,default:null},noButton:{type:Boolean,default:!1},noShadow:{type:Boolean,default:!1}},data:()=>({readmore:!1,expanded:!1,inMaxRange:!1,localMaxLines:1}),watch:{open(t){t!==this.expanded&&this.toggle(!t)}},created(){this.lines&&!this.maxLines?this.localMaxLines=this.lines+1:this.localMaxLines=this.maxLines-1,!0===this.open&&(this.expanded=!0)},mounted(){const t=this.getLineHeight(this.$refs.to);this.lines&&this.$refs.to.style.setProperty("--nlines",this.lines);let e=2;this.gLines?e=this.gLines:this.lines>12?e=4:this.lines>6&&(e=3),this.$refs.ht&&this.$refs.ht.style.setProperty("--nlines",e),!0===this.open&&this.$refs.to.style.setProperty("max-height","100%"),setTimeout(()=>{this.readmore=this.$refs.to.offsetHeight<this.$refs.to.scrollHeight,this.$refs.to.scrollHeight<=this.localMaxLines*t&&(this.inMaxRange=!0),this.$refs.to.style.setProperty("--lineHeight",t+"px"),this.$refs.ht&&this.$refs.ht.style.setProperty("--lineHeight",t+"px"),!0===this.open&&this.$refs.to.style.setProperty("max-height",this.$refs.to.scrollHeight+"px")})},methods:{toggle(t){("boolean"==typeof t?t:this.expanded)?this.noLess||(this.$refs.to.style.removeProperty("max-height"),this.expanded=!1,this.$emit("update:open",!1)):(this.expanded=!0,this.$emit("update:open",!0),this.$refs.to.style.setProperty("max-height",this.$refs.to.scrollHeight+"px"))},getLineHeight(t){let e=document.createElement(t.children[0].nodeName);const a=getComputedStyle(t.children[0]);e.setAttribute("style","position:absolute;left:-999em;margin:0px;padding:0px;font-family:"+a.fontFamily+";font-size:"+a.fontSize),e.innerHTML="test",e=document.body.appendChild(e);const s=e.clientHeight;return e.parentNode.removeChild(e),s}}};a("6b0e");var n=function(t,e,a,s,i,n,r,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),s&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):i&&(l=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-overflow",class:{expanded:t.expanded,"no-overflow":t.inMaxRange}},[a("div",{ref:"to",staticClass:"text-overflow-content"},[t._t("default")],2),t.noShadow?t._e():a("div",{ref:"ht",staticClass:"hide-text"}),t.noButton?t._e():a("div",{staticClass:"button-read-more",on:{click:t.toggle}},[t._t("more",[a("div",{staticClass:"read-more-button",class:{"show-less":!t.noLess}},[a("span",[t._v(t._s(t.expanded?t.textLess:t.text))])])],{open:t.expanded})],2)])}),[],!1,null,"72c03b2a",null).exports;e.default=n}}).default},398:function(t,e,a){"use strict";a.r(e);var s=a(35),i=a(1),n=Object(i.a)(s.a,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[t._v("Master Report")]),t._v(" "),a("div",{staticClass:"card-tools"},[a("download-excel",{staticClass:"btn btn-sm btn-primary",attrs:{fetch:t.export_csv,fields:t.json_fields,"before-generate":t.startDownload,"before-finish":t.finishDownload,worksheet:"My Worksheet",type:"csv",name:"master_report.csv"}},[a("span",{staticClass:"labelText"},[a("img",{staticClass:"icon",attrs:{src:t.set_image("images/file.png"),width:"20"}}),t._v("Export CSV")])])],1)]),t._v(" "),a("div",{staticClass:"card-body p-2"},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.getResults()}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"name","get-option-label":t.getLabel,reduce:function(t){return t.id},options:t.search_machines,placeholder:"Enter machines ...",name:"machine_id"},model:{value:t.search.machine_id,callback:function(e){t.$set(t.search,"machine_id",e)},expression:"search.machine_id"}})],1),t._v(" "),a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"site_name",reduce:function(t){return t.id},options:t.search_sites,placeholder:"Select Site...",name:"site_id"},model:{value:t.search.site_id,callback:function(e){t.$set(t.search,"site_id",e)},expression:"search.site_id"}})],1),t._v(" "),a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"site_name",options:["Open","Closed"],placeholder:"Select Status...",name:"status"},model:{value:t.search.status,callback:function(e){t.$set(t.search,"status",e)},expression:"search.status"}})],1),t._v(" "),a("div",{staticClass:"col col-3"},[a("v-select",{attrs:{label:"name",options:t.created_users,reduce:function(t){return t.id},placeholder:"Created by...",name:"created_by"},model:{value:t.search.created_by,callback:function(e){t.$set(t.search,"created_by",e)},expression:"search.created_by"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("datetime",{attrs:{"value-zone":"Asia/Kolkata","input-class":"form-control",placeholder:"Created from date"},model:{value:t.search.created_from,callback:function(e){t.$set(t.search,"created_from",e)},expression:"search.created_from"}})],1),t._v(" "),a("div",{staticClass:"col col-3 pt-2"},[a("datetime",{attrs:{"value-zone":"Asia/Kolkata","input-class":"form-control",placeholder:"Created to date"},model:{value:t.search.created_to,callback:function(e){t.$set(t.search,"created_to",e)},expression:"search.created_to"}})],1),t._v(" "),a("div",{staticClass:"col col-4 pt-2"},[a("fieldset",{staticStyle:{"max-width":"400px",margin:"auto","text-align":"left"}},[a("div",{staticStyle:{display:"flex","justify-content":"space-between","text-align":"center",height:"39px"}},[a("span",{staticStyle:{display:"inline-block",padding:"5px",border:"solid 1px","border-radius":"5px",width:"100px",margin:"3px"}},[t._v(t._s(t.search.tat_from))]),t._v(" "),a("span",{staticStyle:{top:"25%",position:"relative"}},[t._v("TAT")]),t._v(" "),a("span",{staticStyle:{display:"inline-block",padding:"5px",border:"solid 1px","border-radius":"5px",width:"100px",margin:"3px"}},[t._v(t._s(t.search.tat_to))])]),t._v(" "),a("MultiRangeSlider",{attrs:{baseClassName:"multi-range-slider-bar-only",minValue:t.search.tat_from,maxValue:t.search.tat_to,max:100,min:0,step:1,rangeMargin:0},on:{input:t.UpdateValues}})],1)]),t._v(" "),a("div",{staticClass:"col pt-2"},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Search")]),t._v(" "),a("button",{staticClass:"btn btn-info ml-2",attrs:{type:"button"},on:{click:function(e){return t.reset_filter()}}},[t._v("Reset")])])])])]),t._v(" "),a("div",{staticClass:"card-body table-responsive p-0"},[a("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),a("tbody",t._l(t.Tickets.data,(function(e,s){return a("tr",{key:e.id},[a("td",[t._v(t._s(t.Tickets.from+s))]),t._v(" "),a("td",{staticClass:"text-capitalize"},[t._v(t._s(e.site_name))]),t._v(" "),a("td",[t._v(t._s(e.machine.name))]),t._v(" "),a("td",{on:{click:function(a){return t.view_site_details(e.machine)}}},[t._v(t._s(e.far_no))]),t._v(" "),a("td",[t._v(t._s(e.ticket_no))]),t._v(" "),a("td",[t._v(t._s(e.created_at))]),t._v(" "),a("td",[t._v(t._s(e.created_by_name))]),t._v(" "),a("td",[t._v(t._s(e.complaint_nature))]),t._v(" "),a("td",[t._v(t._s(e.status_during_complaint))]),t._v(" "),a("td",[e.problem_description?[a("VueReadMoreSmooth",{attrs:{open:t.problemsMore[s],"no-button":"","no-shadow":""},on:{"update:open":function(e){return t.$set(t.problemsMore,s,e)}}},[a("p",[t._v(t._s(e.problem_description))])]),t._v(" "),a("span",{on:{click:function(e){return t.sclick(s,"p")}}},[t._v("..."+t._s(t.problemsMore[s]?"Less":"More"))])]:t._e()],2),t._v(" "),a("td",[e.problems&&e.problems.length>0?[a("VueReadMoreSmooth",{attrs:{open:t.additionalMore[s],"no-button":"","no-shadow":""},on:{"update:open":function(e){return t.$set(t.additionalMore,s,e)}}},t._l(e.problems,(function(s,i){return e.problems?a("p",{key:"p"+i,domProps:{innerHTML:t._s(s.problem)}}):t._e()})),0),t._v(" "),a("span",{on:{click:function(e){return t.sclick(s)}}},[t._v("..."+t._s(t.additionalMore[s]?"Less":"More"))])]:t._e()],2),t._v(" "),a("td",[t._v(t._s("created by user"==e.status.toLowerCase()?"Open":e.status))]),t._v(" "),a("td",[t._v(t._s("Closed"==e.status?"-":e.current_stage))]),t._v(" "),a("td",[t._v(t._s(t._f("myDate")("Closed"==e.status?"-":e.last_stage?e.last_stage.stage_date:"")))]),t._v(" "),a("td",[t._v(t._s("Closed"==e.status?"-":e.last_stage?e.last_stage.description:"-"))]),t._v(" "),a("td",[t._v(t._s(e.machine_status))]),t._v(" "),a("td",[t._v(t._s(t._f("myDate")(e.likely_date)))]),t._v(" "),a("td",[t._v(t._s(e.actual_date))]),t._v(" "),a("td",[t._v(t._s(e.actual_date?e.tat:"-"))]),t._v(" "),a("td",[t._v(t._s(t._f("toCurrency")(e.estimated_service_cost+e.estimated_material_cost+e.ad_estimated_material_cost+e.ad_estimated_service_cost)))]),t._v(" "),a("td",[t._v(t._s(t._f("toCurrency")(e.actual_service_cost+e.actual_material_cost)))]),t._v(" "),a("td",[t._v(t._s(t._f("toCurrency")(e.production_loss)))])])})),0)])]),t._v(" "),a("div",{staticClass:"card-footer"},[a("pagination",{attrs:{data:t.Tickets},on:{"pagination-change-page":t.getResults}})],1)])])])]),t._v(" "),a("MachinePop",{attrs:{id:"MachineSiteModal3",machine:t.pmModalData}})],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Sl no")]),t._v(" "),a("th",[t._v("Site name")]),t._v(" "),a("th",[t._v("Equipment Description")]),t._v(" "),a("th",[t._v("FAR No")]),t._v(" "),a("th",[t._v("Complaint No")]),t._v(" "),a("th",[t._v("Complaint date")]),t._v(" "),a("th",[t._v("Complaint Raised By")]),t._v(" "),a("th",[t._v("Complaint Nature")]),t._v(" "),a("th",[t._v("Status During Complaint")]),t._v(" "),a("th",{attrs:{width:"10"}},[t._v("Problem description")]),t._v(" "),a("th",{attrs:{width:"10"}},[t._v("Additional Problems")]),t._v(" "),a("th",[t._v("Current Status")]),t._v(" "),a("th",[t._v("Current Stage")]),t._v(" "),a("th",[t._v("Current Stage Date")]),t._v(" "),a("th",[t._v("Current Stage Description")]),t._v(" "),a("th",[t._v("Status Post Resolution")]),t._v(" "),a("th",[t._v("Expected Resolution date")]),t._v(" "),a("th",[t._v("Actual Resolve Date")]),t._v(" "),a("th",[t._v("TAT")]),t._v(" "),a("th",[t._v("Estimated Cost")]),t._v(" "),a("th",[t._v("Actual Cost")]),t._v(" "),a("th",[t._v("Production Loss")])])])}],!1,null,null,null);e.default=n.exports}}]);
//# sourceMappingURL=6.bundle.f798afb994914cef55a6.js.map