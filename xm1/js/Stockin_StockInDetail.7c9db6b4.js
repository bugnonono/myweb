(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Stockin_StockInDetail"],{1799:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-pagination",{attrs:{"current-page":e.parentCurrentPage,"page-sizes":e.parentPageSizes,"page-size":e.parentPageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.parentTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},n=[],s=(r("a9e3"),{data:function(){return{currentPage:1,pageSizes:[],pageSize:5}},props:{parentCurrentPage:{type:Number,default:1},parentPageSizes:{type:Array,default:function(){return[5,10,15,20]}},parentPageSize:{type:Number,default:5},parentTotal:{type:Number}},created:function(){this.change()},methods:{change:function(){this.currentPage=this.parentCurrentPage,this.pageSizes=this.parentPageSizes,this.pageSize=this.parentPageSize},handleSizeChange:function(e){this.pageSize=e,window.sessionStorage.setItem("newSize",e),this.$emit("parentGetData",this.currentPage,this.pageSize)},handleCurrentChange:function(e){this.currentPage=e,window.sessionStorage.setItem("newPage",e),this.$emit("parentGetData",this.currentPage,this.pageSize)}},components:{}}),i=s,o=r("2877"),c=Object(o["a"])(i,a,n,!1,null,"71b04d66",null);t["a"]=c.exports},eb19:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("入库管理")]),r("el-breadcrumb-item",[e._v("品相入库管理")])],1),r("el-card",[r("el-row",[r("el-button",{attrs:{type:"primary",plain:"",size:"medium"},on:{click:e.showAddStockIn}},[e._v("新增入库单")])],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.stockInTableData,border:"",stripe:"",hover:""}},[r("el-table-column",{attrs:{prop:"id",label:"ID",fixed:"",width:"150"}}),r("el-table-column",{attrs:{prop:"createDate",label:"创建时间",fixed:"",width:"150"}}),r("el-table-column",{attrs:{prop:"code",label:"单据编号",width:"150"}}),r("el-table-column",{attrs:{prop:"makerName",label:"制单人",width:"150"}}),r("el-table-column",{attrs:{prop:"orderDate",label:"制单时间",width:"150"}}),r("el-table-column",{attrs:{prop:"storeId",label:"仓库编号",width:"150"}}),r("el-table-column",{attrs:{prop:"updateDate",label:"更新时间",width:"150"}}),r("el-table-column",{attrs:{label:"单据状态",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[1===t.row.status?r("el-tag",{attrs:{type:"danger",round:""}},[e._v("未审核")]):r("el-tag",{attrs:{type:"primary",round:""}},[e._v("审核")])],1)]}}])}),r("el-table-column",{attrs:{label:"审核",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[r("el-button",{attrs:{type:"success",size:"medium",round:""},on:{click:function(r){return e.checkOrder(t.row.id)}}},[e._v("审核")])],1)]}}])}),r("el-table-column",{attrs:{label:"反审核",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"danger",round:"",size:"small"},on:{click:function(r){return e.uncheckOrder(t.row.id)}}},[e._v("反审核")])]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"warning",icon:"el-icon-edit",size:"mini",circle:""},on:{click:function(r){return e.editOrderVisible(t.row.id)}}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini",circle:""},on:{click:function(r){return e.removeStockIn(t.row.id)}}}),r("el-button",{attrs:{type:"success",icon:"el-icon-menu",size:"mini",circle:""},on:{click:function(r){return e.goDetail(t.row.id)}}})]}}])})],1),r("my-pagination",{attrs:{parentCurrentPage:e.pages.page,parentPageSizes:e.pages.pages,parentPageSize:e.pages.rows,parentTotal:e.pages.count},on:{parentGetData:e.getStockInData}}),r("el-dialog",{attrs:{title:"添加入库单",visible:e.stockInDialogVisible,width:"50%"},on:{"update:visible":function(t){e.stockInDialogVisible=t},close:e.cancelStockIn}},[r("span",[r("el-form",{ref:"stockInRef",attrs:{model:e.stockInForm,rules:e.stockInrules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"入库单号",prop:"code"}},[r("el-input",{model:{value:e.stockInForm.code,callback:function(t){e.$set(e.stockInForm,"code",t)},expression:"stockInForm.code"}})],1),r("el-form-item",{attrs:{label:"仓库ID",prop:"storeId"}},[r("el-select",{model:{value:e.stockInForm.storeId,callback:function(t){e.$set(e.stockInForm,"storeId",t)},expression:"stockInForm.storeId"}},[r("el-option",{attrs:{label:"上海仓库",value:"1"}}),r("el-option",{attrs:{label:"北京仓库",value:"2"}}),r("el-option",{attrs:{label:"华北仓库",value:"3"}})],1)],1),r("el-form-item",{attrs:{label:"制单人ID",prop:"makerName"}},[r("el-input",{attrs:{disabled:""},model:{value:e.makerName,callback:function(t){e.makerName=t},expression:"makerName"}})],1),r("el-form-item",{attrs:{label:"制单时间",prop:"orderDate"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.stockInForm.orderDate,callback:function(t){e.$set(e.stockInForm,"orderDate",t)},expression:"stockInForm.orderDate"}})],1)],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.cancelStockIn}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addStockIn}},[e._v("确 定")])],1)])],1),r("el-drawer",{attrs:{title:"编辑入库单",visible:e.stockInVisible,direction:e.direction,"before-close":e.handleClose},on:{"update:visible":function(t){e.stockInVisible=t}}},[r("span",[r("el-form",{ref:"editOrderListRef",attrs:{model:e.editOrderList,rules:e.editOrderListRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"订单ID",prop:"id"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editOrderList.id,callback:function(t){e.$set(e.editOrderList,"id",t)},expression:"editOrderList.id"}})],1),r("el-form-item",{attrs:{label:"订单编号",prop:"code"}},[r("el-input",{model:{value:e.editOrderList.code,callback:function(t){e.$set(e.editOrderList,"code",t)},expression:"editOrderList.code"}})],1),r("el-form-item",{attrs:{label:"制单人ID",prop:"makerId"}},[r("el-input",{model:{value:e.editOrderList.makerId,callback:function(t){e.$set(e.editOrderList,"makerId",t)},expression:"editOrderList.makerId"}})],1),r("el-form-item",{attrs:{label:"制单时间",prop:"orderDate"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.editOrderList.orderDate,callback:function(t){e.$set(e.editOrderList,"orderDate",t)},expression:"editOrderList.orderDate"}})],1),r("el-form-item",{attrs:{label:"仓库ID",prop:"storeId"}},[r("el-input",{model:{value:e.editOrderList.storeId,callback:function(t){e.$set(e.editOrderList,"storeId",t)},expression:"editOrderList.storeId"}})],1)],1),r("el-button",{attrs:{type:"primary"},on:{click:e.editStockIn}},[e._v("确 定")])],1)])],1)},n=[],s=r("1da1"),i=(r("96cf"),r("1799")),o={data:function(){return{stockInVisible:!1,direction:"rtl",formInLine:{code:"",time:[],maker:"",status:"",storeId:""},pages:{count:0,page:parseInt(window.sessionStorage.getItem("newSize"))||1,rows:parseInt(window.sessionStorage.getItem("newSize"))||5,pages:[5,10,15,20]},stockInTableData:[],stockInDialogVisible:!1,stockInForm:{code:"",storeId:"",makerId:window.sessionStorage.getItem("userId"),orderDate:""},makerName:window.sessionStorage.getItem("nickName"),stockInrules:{code:[{required:!0,message:"请输入入库单号",trigger:"blur"},{min:8,max:15,message:"长度在 8 到 15 个字符",trigger:"blur"}],stocskId:[{required:!0,message:"请选择仓库",trigger:"blur"}],makerId:[{required:!0,message:"请输入制单人ID",trigger:"blur"}],orderDate:[{required:!0,message:"请输入仓库ID",trigger:"blur"},{min:3,max:15,message:"长度在 3 到 15 个字符",trigger:"blur"}]},editOrderList:{code:"",id:0,makerId:1,orderDate:"",storeId:1},editOrderListRules:{code:[{required:!0,message:"请输入入库单号",trigger:"blur"},{min:1,max:15,message:"长度在 1 到 15 个字符",trigger:"blur"}],stocskId:[{required:!0,message:"请选择仓库",trigger:"blur"},{min:1,max:15,message:"长度在 1 到 15 个字符",trigger:"blur"}],makerId:[{required:!0,message:"请输入制单人ID",trigger:"blur"},{min:1,max:15,message:"长度在 1 到 15 个字符",trigger:"blur"}],orderDate:[{required:!0,message:"请输入仓库ID",trigger:"blur"},{min:3,max:15,message:"长度在 3 到 15 个字符",trigger:"blur"}]}}},components:{MyPagination:i["a"]},methods:{getStockInData:function(e,t){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,s,i,o,c,l,d,u,p;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=r.formInLine,s=n.code,i=n.time,o=n.maker,c=n.status,l=n.storeId,d={code:s,startDate:i?i[0]:"",endDate:i?i[1]:"",maker:o,status:c,storeId:l,page:r.pages.page,rows:r.pages.rows},d.page=e||parseInt(window.sessionStorage.getItem("newPage"))||r.pages.page,d.rows=t||parseInt(window.sessionStorage.getItem("newSize"))||r.pages.rows,d=r.$qs.stringify(d),a.next=7,r.$http.get("stockin/list?".concat(d));case 7:u=a.sent,p=u.data,r.stockInTableData=p.data.data,r.pages.count=p.data.page.count;case 11:case"end":return a.stop()}}),a)})))()},removeStockIn:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("此操作将永久删除该入库单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(a=r.sent,"confirm"===a){r.next=5;break}return r.abrupt("return",t.$message("取消删除"));case 5:return n={id:e},n=t.$qs.stringify(n),r.next=9,t.$http.delete("stockin?"+n);case 9:s=r.sent,1===s.data.code?(t.$message({message:"删除入库单成功",type:"success"}),t.getStockInData()):t.$message({message:"删除入库单失败",type:"error"});case 11:case"end":return r.stop()}}),r)})))()},showAddStockIn:function(){this.stockInDialogVisible=!0},cancelStockIn:function(){this.$refs.stockInRef.resetFields(),this.stockInDialogVisible=!1},addStockIn:function(){var e=this;this.$refs.stockInRef.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=3;break}return e.$message.error("添加失败"),t.abrupt("return",!1);case 3:return a=e.$qs.stringify(e.stockInForm),t.next=6,e.$http.post("stockin",a);case 6:n=t.sent,s=n.data,1===s.code?(e.$message({message:"添加成功",type:"success"}),e.stockInDialogVisible=!1,e.getStockInData()):e.$message({message:"添加失败",terrorype:"error"});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},handleSizeChange:function(e){this.pages.rows=e,this.getStockInData()},handleCurrentChange:function(e){this.pages.page=e,this.getStockInData()},checkOrder:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a={id:e},a=t.$qs.stringify(a),r.next=4,t.$http.put("stockin/check?"+a);case 4:n=r.sent,s=n.data,1===s.code?(t.$message({message:"审核成功",type:"success"}),t.getStockInData()):t.$message({message:"审核失败",type:"error"});case 7:case"end":return r.stop()}}),r)})))()},uncheckOrder:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a={id:e},a=t.$qs.stringify(a),r.next=4,t.$http.put("stockin/uncheck?"+a);case 4:n=r.sent,s=n.data,1===s.code?(t.$message({message:"反审核成功",type:"success"}),t.getStockInData()):t.$message({message:"反审核失败",type:"error"});case 7:case"end":return r.stop()}}),r)})))()},goDetail:function(e){this.$router.push("/stockin/detail/"+e)},editOrderVisible:function(e){this.stockInVisible=!0,this.editOrderList.id=e},handleClose:function(e){this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))},editStockIn:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.editOrderList,r=e.$qs.stringify(r),t.next=4,e.$http.post("stockin/update",r);case 4:a=t.sent,n=a.data,1===n.code?(e.$message({message:"修改订单成功",type:"success"}),e.stockInVisible=!1,e.getStockInData()):e.$message({message:"修改订单失败",type:"error"});case 7:case"end":return t.stop()}}),t)})))()}},created:function(){this.getStockInData()}},c=o,l=r("2877"),d=Object(l["a"])(c,a,n,!1,null,"7fb85cd6",null);t["default"]=d.exports},ee5f:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.stockInDetail,border:"",stripe:"",hover:""}},[r("el-table-column",{attrs:{prop:"id",label:"ID",width:"150"}}),r("el-table-column",{attrs:{prop:"itemId",label:"品相类别",width:"150"}}),r("el-table-column",{attrs:{prop:"itemName",label:"名称",width:"150"}}),r("el-table-column",{attrs:{prop:"price",label:"价格",width:"150"}})],1)],1)],1)},n=[],s=r("1da1"),i=(r("96cf"),{data:function(){return{stockInDetail:[]}},components:{},methods:{getStockInData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={id:e.$route.params.id},r=e.$qs.stringify(r),t.next=4,e.$http.get("stockin/detail/list?"+r);case 4:a=t.sent,n=a.data,console.log(n),1===n.code&&(e.stockInDetail=n.data);case 8:case"end":return t.stop()}}),t)})))()}},created:function(){this.getStockInData()}}),o=i,c=r("2877"),l=Object(c["a"])(o,a,n,!1,null,"4eccfbee",null);t["default"]=l.exports}}]);
//# sourceMappingURL=Stockin_StockInDetail.7c9db6b4.js.map