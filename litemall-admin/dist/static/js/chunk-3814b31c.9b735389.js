(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3814b31c"],{"05ce":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-select",{attrs:{clearable:"",placeholder:"请选择状态"},on:{change:t.statusChange},model:{value:t.statusId,callback:function(e){t.statusId=e},expression:"statusId"}},t._l(t.statusList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),a("el-select",{attrs:{placeholder:"请选择实验室"},on:{change:t.labChange},model:{value:t.labId,callback:function(e){t.labId=e},expression:"labId"}},t._l(t.labList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),a("div",{staticClass:"operator-container",staticStyle:{dispaly:"flex","justify-content":"space-between"}},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/drug/application/pass"],expression:"['POST /admin/drug/application/pass']"}],staticClass:"filter-item",attrs:{type:"success"},on:{click:t.handleBatchPass}},[t._v("审批")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",fit:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"ID",prop:"id"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"品名",prop:"name","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"cas号",prop:"cas"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态",prop:"status"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"st-icon-pandora"},[t._v(t._s(1===e.row.status?"未提交":2===e.row.status?"已提交":3===e.row.status?"已审批":"已确认"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"重量",prop:"weight"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"分类",prop:"name","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"创建人",prop:"addUser","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"提交人",prop:"commitUser","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"审批人",prop:"approvalUser","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"确认人",prop:"confirmUser","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"备注",prop:"remark","show-overflow-tooltip":""}})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),a("el-tooltip",{attrs:{placement:"top",content:"返回顶部"}},[a("back-to-top",{attrs:{"visibility-height":100}})],1)],1)},i=[],o=(a("7f7f"),a("5719")),l=a("0625"),r=a("333d"),s=(a("2ef0"),{name:"materieldepartment",components:{BackToTop:l["a"],Pagination:r["a"]},data:function(){return{listQuery:{page:1,limit:20},list:[],total:0,listLoading:!1,dialogFormVisible:!1,dialogStatus:"create",labList:[],schoolList:[],zoneList:[],schoolId:"",schoolName:"",zoneId:"",zoneName:"",labId:"",labName:"",multipleSelection:[],tableData:[],dialogmultipleSelection:[],dialoSelData:[],statusList:[],searchType:"",searchTypeValue:"",searchName:"",statusId:"",searchTypeList:[],contentDialogVisible:!1,downloadLoading:!1}},created:function(){this.getBrand(),this.statusList=[{value:"1",label:"未提交"},{value:"2",label:"已提交"},{value:"3",label:"已审批"},{value:"4",label:"已确定"}]},methods:{getBrand:function(){var t=this;Object(o["g"])().then((function(e){t.labList=e.data.data.list,t.labList.length&&(t.labId=t.labList[0].id,t.labName=t.labList[0].name,t.getList())}))},getList:function(){var t=this;this.listLoading=!0,Object(o["b"])({lab:this.labId,status:this.statusId}).then((function(e){t.list=e.data.data.list,t.total=e.data.data.total,t.listLoading=!1})).catch((function(){t.list=[],t.total=0,t.listLoading=!1}))},statusChange:function(t){this.statusId=t,this.getList()},labChange:function(t){var e=this.labList.filter((function(e){return e.id===t}));e.length&&(this.labName=e[0].name||""),this.getList()},searchTypeChange:function(t){var e=this.searchTypeList.filter((function(e){return e.value===t}));e.length&&(this.searchTypeValue=e[0].label)},handleSelectionChange:function(t){this.multipleSelection=t},handleBatchPass:function(){var t=this;0!==this.multipleSelection.length?Object(o["c"])(this.multipleSelection).then((function(e){t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})})):this.$message.error("请选择至少一条记录")}}}),u=s,c=a("2877"),d=Object(c["a"])(u,n,i,!1,null,null,null);e["default"]=d.exports},"0625":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transitionName}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:t.customStyle,on:{click:t.backToTop}},[a("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[a("title",[t._v("回到顶部")]),t._v(" "),a("g",[a("path",{attrs:{d:"M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z","fill-rule":"evenodd"}})])])])])},i=[],o=(a("c5f6"),{name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null,isMoving:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var t=this;if(!this.isMoving){var e=window.pageYOffset,a=0;this.isMoving=!0,this.interval=setInterval((function(){var n=Math.floor(t.easeInOutQuad(10*a,e,-e,500));n<=t.backPosition?(window.scrollTo(0,t.backPosition),clearInterval(t.interval),t.isMoving=!1):window.scrollTo(0,n),a++}),16.7)}},easeInOutQuad:function(t,e,a,n){return(t/=n/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e}}}),l=o,r=(a("cd7b"),a("2877")),s=Object(r["a"])(l,n,i,!1,null,"6172f71e",null);e["a"]=s.exports},"2d13":function(t,e,a){"use strict";var n=a("cf7e"),i=a.n(n);i.a},"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];a("c5f6");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function l(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,a){var n=r(),i=t-n,s=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=s;var r=Math.easeInOutQuad(u,n,i,e);l(r),u<e?o(t):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&s(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=u,d=(a("2d13"),a("2877")),p=Object(d["a"])(c,n,i,!1,null,"2fc659d3",null);e["a"]=p.exports},5719:function(t,e,a){"use strict";a.d(e,"i",(function(){return i})),a.d(e,"a",(function(){return o})),a.d(e,"f",(function(){return l})),a.d(e,"n",(function(){return r})),a.d(e,"o",(function(){return s})),a.d(e,"b",(function(){return u})),a.d(e,"c",(function(){return c})),a.d(e,"e",(function(){return d})),a.d(e,"k",(function(){return p})),a.d(e,"l",(function(){return h})),a.d(e,"g",(function(){return g})),a.d(e,"m",(function(){return f})),a.d(e,"h",(function(){return m})),a.d(e,"j",(function(){return b})),a.d(e,"d",(function(){return v}));var n=a("b775");function i(t){return Object(n["a"])({url:"/drug/application/querySave",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/drug/application/delete",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/drug/application/queryLab",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/drug/application/queryCommited",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/drug/application/confirm",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/drug/application/queryAll",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/drug/application/pass",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/drug/address/drugType",method:"get",params:t})}function p(t){return Object(n["a"])({url:"/drug/address/school",method:"get",params:t})}function h(t){return Object(n["a"])({url:"/drug/address/zone",method:"get",params:t})}function g(t){return Object(n["a"])({url:"/drug/address/laboratory",method:"get",params:t})}function f(t){return Object(n["a"])({url:"/drug/dic/query",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/drug/dic/add",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/drug/application/add",method:"post",data:t})}function v(t){return Object(n["a"])({url:"/drug/application/commit",method:"post",data:t})}},6881:function(t,e,a){},cd7b:function(t,e,a){"use strict";var n=a("6881"),i=a.n(n);i.a},cf7e:function(t,e,a){}}]);