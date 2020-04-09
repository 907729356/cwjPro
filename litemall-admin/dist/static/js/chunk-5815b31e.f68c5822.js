(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5815b31e"],{"0b34":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入用户名称"},model:{value:t.listQuery.username,callback:function(e){t.$set(t.listQuery,"username",e)},expression:"listQuery.username"}}),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /admin/admin/list"],expression:"['GET /admin/admin/list']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查找")]),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/admin/create"],expression:"['POST /admin/admin/create']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加")]),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v("导出")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"用户ID",prop:"id",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"用户名称",prop:"username"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"用户角色",prop:"roleIds"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.roleIds,(function(e){return a("el-tag",{key:e,staticStyle:{"margin-right":"20px"},attrs:{type:"primary"}},[t._v(" "+t._s(t.formatRole(e))+" ")])}))}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/admin/update"],expression:"['POST /admin/admin/update']"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/admin/delete"],expression:"['POST /admin/admin/delete']"}],attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名称",prop:"username"}},[a("el-input",{model:{value:t.dataForm.username,callback:function(e){t.$set(t.dataForm,"username",e)},expression:"dataForm.username"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"用户密码",prop:"password"}},[a("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:t.dataForm.password,callback:function(e){t.$set(t.dataForm,"password",e)},expression:"dataForm.password"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"用户角色",prop:"roleIds"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:t.dataForm.roleIds,callback:function(e){t.$set(t.dataForm,"roleIds",e)},expression:"dataForm.roleIds"}},t._l(t.roleOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("确定")]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确定")])],1)],1)],1)},n=[],r=a("2d63"),o=a("b775");function l(t){return Object(o["a"])({url:"/admin/list",method:"get",params:t})}function s(t){return Object(o["a"])({url:"/admin/create",method:"post",data:t})}function u(t){return Object(o["a"])({url:"/admin/update",method:"post",data:t})}function d(t){return Object(o["a"])({url:"/admin/delete",method:"post",data:t})}var c=a("cc5e");var m="http://120.79.211.42:8080/admin/storage/create",p=a("5f87"),f=a("333d"),g={name:"Admin",components:{Pagination:f["a"]},data:function(){return{uploadPath:m,list:null,total:0,roleOptions:null,listLoading:!0,listQuery:{page:1,limit:20,username:void 0,sort:"add_time",order:"desc"},dataForm:{id:void 0,username:void 0,password:void 0,avatar:void 0,roleIds:[]},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},rules:{username:[{required:!0,message:"用户名称不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]},downloadLoading:!1}},computed:{headers:function(){return{"X-Litemall-Admin-Token":Object(p["a"])()}}},created:function(){var t=this;this.getList(),Object(c["e"])().then((function(e){t.roleOptions=e.data.data.list}))},methods:{formatRole:function(t){for(var e=0;e<this.roleOptions.length;e++)if(t===this.roleOptions[e].value)return this.roleOptions[e].label;return""},getList:function(){var t=this;this.listLoading=!0,l(this.listQuery).then((function(e){t.list=e.data.data.list,t.total=e.data.data.total,t.listLoading=!1})).catch((function(){t.list=[],t.total=0,t.listLoading=!1}))},handleFilter:function(){this.listQuery.page=1,this.getList()},resetForm:function(){this.dataForm={id:void 0,username:void 0,password:void 0,avatar:void 0,roleIds:[]}},uploadAvatar:function(t){this.dataForm.avatar=t.data.url},handleCreate:function(){var t=this;this.resetForm(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&s(t.dataForm).then((function(e){t.list.unshift(e.data.data),t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"添加用户成功"})})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))}))},handleUpdate:function(t){var e=this;this.dataForm=Object.assign({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&u(t.dataForm).then((function(){var e,a=Object(r["a"])(t.list);try{for(a.s();!(e=a.n()).done;){var i=e.value;if(i.id===t.dataForm.id){var n=t.list.indexOf(i);t.list.splice(n,1,t.dataForm);break}}}catch(o){a.e(o)}finally{a.f()}t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"更新用户成功"})})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))}))},handleDelete:function(t){var e=this;d(t).then((function(a){e.$notify.success({title:"成功",message:"删除用户成功"});var i=e.list.indexOf(t);e.list.splice(i,1)})).catch((function(t){e.$notify.error({title:"失败",message:t.data.errmsg})}))},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-86a68bf8"),a.e("chunk-581b2547")]).then(a.bind(null,"4bf8d")).then((function(e){var a=["用户ID","用户名称","用户头像"],i=["id","username","avatar"];e.export_json_to_excel2(a,t.list,i,"用户信息"),t.downloadLoading=!1}))}}},h=g,v=(a("f71f"),a("2877")),b=Object(v["a"])(h,i,n,!1,null,null,null);e["default"]=b.exports},"2d13":function(t,e,a){"use strict";var i=a("cf7e"),n=a.n(i);n.a},"333d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},n=[];a("c5f6");Math.easeInOutQuad=function(t,e,a,i){return t/=i/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,a){var i=l(),n=t-i,s=20,u=0;e="undefined"===typeof e?500:e;var d=function t(){u+=s;var l=Math.easeInOutQuad(u,i,n,e);o(l),u<e?r(t):a&&"function"===typeof a&&a()};d()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&s(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},d=u,c=(a("2d13"),a("2877")),m=Object(c["a"])(d,i,n,!1,null,"2fc659d3",null);e["a"]=m.exports},"4abb":function(t,e,a){},cc5e:function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"a",(function(){return r})),a.d(e,"g",(function(){return o})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return s})),a.d(e,"f",(function(){return u})),a.d(e,"e",(function(){return d}));var i=a("b775");function n(t){return Object(i["a"])({url:"/role/list",method:"get",params:t})}function r(t){return Object(i["a"])({url:"/role/create",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/role/update",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/role/delete",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/role/permissions",method:"get",params:t})}function u(t){return Object(i["a"])({url:"/role/permissions",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/role/options",method:"get",params:t})}},cf7e:function(t,e,a){},f71f:function(t,e,a){"use strict";var i=a("4abb"),n=a.n(i);n.a}}]);