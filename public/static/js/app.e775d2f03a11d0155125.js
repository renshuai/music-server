webpackJsonp([1],{"/0uN":function(e,t){},"09yM":function(e,t){},"2K6D":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("kV13"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=s("C7Lr")({name:"App"},i,!1,function(e){s("2K6D")},null,null).exports,l=s("p7sN"),r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[e._v(e._s(e.msg))]),e._v(" "),s("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),s("br"),e._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var o=s("C7Lr")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},r,!1,function(e){s("/0uN")},"data-v-3b884edb",null).exports,c=s("3cXf"),u=s.n(c),h={name:"Login",props:["loginDialogFormVisible"],data:function(){return{baseUrl:"http://106.13.136.196:3000",username:"",password:"",rePass:"",type:"login",loading:!1}},methods:{hideDialog:function(){this.$emit("hideDialog","login")},login:function(){var e=this;if(this.username&&this.password){this.loading=!0;var t={username:this.username,password:this.password},s=this.baseUrl+"/user/login";fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:u()(t)}).then(function(e){return e.json()}).then(function(t){e.loading=!1,0==t.code?(e.$message({showClose:!0,message:"登录成功",type:"success"}),sessionStorage.setItem("username",e.username),sessionStorage.setItem("userId",t.userId),e.hideDialog(),e.$emit("successCallback",e.username)):e.$message({showClose:!0,message:t.msg,type:"error"})}).catch(function(t){e.loading=!1,e.$message({showClose:!0,message:"登录失败",type:"error"})})}else this.$message({showClose:!0,message:"用户名或者密码不能为空",type:"error"})},register:function(){var e=this;if(this.username&&this.password&&this.rePass)if(this.password===this.rePass){this.loading=!0;var t={username:this.username,password:this.password},s=this.baseUrl+"/user/register";fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:u()(t)}).then(function(e){return e.json()}).then(function(t){e.loading=!1,0==t.code&&(e.$message({showClose:!0,message:"注册成功",type:"success"}),sessionStorage.setItem("username",e.username),sessionStorage.setItem("userId",t.userId),e.hideDialog(),e.$emit("successCallback",e.username))})}else this.$message({showClose:!0,message:"两次密码输入的不一致",type:"error"});else this.$message({showClose:!0,message:"用户名或者密码不能为空",type:"error"})}}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.loginDialogFormVisible?s("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:e.loading,expression:"loading",modifiers:{fullscreen:!0}}],staticClass:"login-modal",attrs:{"element-loading-background":"rgba(255, 255, 255, 0.8)"}},[s("div",{staticClass:"login-box"},[s("i",{staticClass:"el-icon-close",on:{click:e.hideDialog}}),e._v(" "),s("p",[e._v(e._s("login"===e.type?"登录":"注册"))]),e._v(" "),s("div",{staticClass:"login-form"},[s("span",[e._v("用户名")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),s("div",{staticClass:"login-form"},[s("span",[e._v("密码")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入密码",clearable:"","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),"register"===e.type?s("div",{staticClass:"login-form"},[s("span",[e._v("确认密码")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入密码",clearable:"","show-password":""},model:{value:e.rePass,callback:function(t){e.rePass=t},expression:"rePass"}})],1):e._e(),e._v(" "),s("div",{staticClass:"buttons-wrap"},["login"===e.type?s("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")]):e._e(),e._v(" "),"register"===e.type?s("el-button",{attrs:{type:"primary"},on:{click:e.register}},[e._v("注册")]):e._e(),e._v(" "),"login"===e.type?s("a",{on:{click:function(t){t.preventDefault(),e.type="register"}}},[e._v("注册新账号")]):e._e(),e._v(" "),"register"===e.type?s("a",{on:{click:function(t){t.preventDefault(),e.type="login"}}},[e._v("已有账号，返回登录")]):e._e()],1)])]):e._e()},staticRenderFns:[]};var d={name:"Index",components:{LoginDialog:s("C7Lr")(h,m,!1,function(e){s("Yxfj")},"data-v-40c3d4b0",null).exports},data:function(){return{baseUrl:"http://106.13.136.196:3000",username:"",loginDialogFormVisible:!1,loading:!1,searchContent:"",albums:[],singers:[],showSingersResults:!1,showAlbumsResults:!1}},beforeMount:function(){var e=sessionStorage.getItem("username");e?this.username=e:this.showLoginDialog()},methods:{showLoginDialog:function(){this.loginDialogFormVisible=!0},hideDialog:function(){this.loginDialogFormVisible=!1},successCallback:function(e){this.username=e},loginOut:function(){this.username="",sessionStorage.removeItem("username"),sessionStorage.removeItem("userId"),this.showLoginDialog()},handleCommand:function(e){switch(e){case"c":this.loginOut()}},loadingSwitch:function(e){this.loading=e},search:function(){sessionStorage.getItem("username")?(this.searchAlbums(),this.searchSingers()):this.showLoginDialog()},searchAlbums:function(){var e=this,t=sessionStorage.getItem("userId"),s="";s=this.searchContent?"/albums/getAlbumsByName?name="+this.searchContent+"&userId="+t:"/albums/?userId="+t,fetch(this.baseUrl+s).then(function(e){return e.json()}).then(function(t){e.albums=t.map(function(e){return e.handle=e.isCollected?"取消收藏":"收藏",e}),e.showAlbumsResults=!0})},searchSingers:function(){var e=this,t="";t=this.searchContent?"/singers/getSingersByName?name="+this.searchContent:"/singers/",fetch(this.baseUrl+t).then(function(e){return e.json()}).then(function(t){e.singers=t,e.showSingersResults=!0})},collect:function(e){var t=this,s=sessionStorage.getItem("userId");if(s){var n=this.baseUrl+"/user/collect",i={albumId:e._id,userId:s,type:"收藏"===e.handle?0:1};fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:u()(i)}).then(function(e){return e.json()}).then(function(s){0==s.code?(t.$message({showClose:!0,message:s.msg,type:"success"}),e.handle="收藏"===e.handle?"取消收藏":"收藏"):t.$message({showClose:!0,message:s.msg,type:"error"})})}else this.$message({showClose:!0,message:"请先登录",type:"error"})}}},g={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:e.loading,expression:"loading",modifiers:{fullscreen:!0}}],staticClass:"page",attrs:{"element-loading-background":"rgba(0, 0, 0, 0.8)"}},[s("header",[e._m(0),e._v(" "),e.username?s("el-dropdown",{on:{command:e.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[e._v("\n        "+e._s(e.username)),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"c"}},[e._v("退出")])],1)],1):s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.showLoginDialog}},[e._v("登录")])],1),e._v(" "),s("div",{staticClass:"body"},[s("div",{staticClass:"search-box-wrap",class:{"search-show-result":e.showAlbumsResults}},[s("div",{staticClass:"search-box"},[s("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入音乐专辑或者歌手,为空时则检索所有专辑和歌手"},model:{value:e.searchContent,callback:function(t){e.searchContent=t},expression:"searchContent"}},[s("el-button",{attrs:{slot:"append",type:"primary",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1)]),e._v(" "),e.showAlbumsResults?s("div",{staticClass:"table-wrap"},[s("p",[e._v("专辑列表")]),e._v(" "),e.albums.length?s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.albums}},[s("el-table-column",{attrs:{prop:"address",label:"封面"},scopedSlots:e._u([{key:"default",fn:function(e){return[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:e.row.cover}})])]}}],null,!1,396790421)}),e._v(" "),s("el-table-column",{attrs:{prop:"album_id",label:"专辑ID",width:"180"}}),e._v(" "),s("el-table-column",{attrs:{prop:"album_name",label:"专辑名称",width:"180"}}),e._v(" "),s("el-table-column",{attrs:{prop:"public_time",label:"发行时间"}}),e._v(" "),s("el-table-column",{attrs:{prop:"price",label:"价格"}}),e._v(" "),s("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.collect(t.row)}}},[e._v(e._s(t.row.handle))])]}}],null,!1,2033390276)})],1):s("span",[e._v("未检索到相应信息")])],1):e._e(),e._v(" "),e.showSingersResults?s("div",{staticClass:"table-wrap"},[s("p",[e._v("歌手列表")]),e._v(" "),e.singers.length?s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.singers}},[s("el-table-column",{attrs:{prop:"singer_id",label:"歌手ID",width:"180"}}),e._v(" "),s("el-table-column",{attrs:{prop:"singer_name",label:"歌手姓名",width:"180"}})],1):s("span",[e._v("未检索到相应信息")])],1):e._e()]),e._v(" "),s("LoginDialog",{attrs:{loginDialogFormVisible:e.loginDialogFormVisible},on:{hideDialog:e.hideDialog,successCallback:e.successCallback}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[t("i",{staticClass:"el-icon-mic"}),this._v("智能音乐平台")])}]};var p=s("C7Lr")(d,g,!1,function(e){s("VU89")},"data-v-77abf45d",null).exports,b={name:"Index",props:["type","album","baseUrl"],data:function(){return{currentAlbum:null}},beforeMount:function(){"add"===this.type?this.currentAlbum={cover:"",album_id:"",album_name:"",price:"",public_time:""}:this.currentAlbum=this.album},computed:{title:function(){return"add"===this.type?"添加专辑":"修改专辑"}},methods:{hideDialog:function(){this.$emit("hideDialog","album")},confirmDialog:function(){"add"!==this.type||this.currentAlbum.cover?this.$emit("confirmAlbumDialog",this.currentAlbum):this.$message({showClose:!0,message:"请上传文件",type:"error"})},upload:function(){var e=this,t=this.$refs.fileInput,s=new FormData;s.append("cover",t.files[0]);var n=this.baseUrl+"/albums/uploads";fetch(n,{method:"POST",body:s}).then(function(e){return e.text()}).then(function(t){console.log(t),t&&(e.currentAlbum.cover=t.toString(),e.$message({showClose:!0,message:"上传成功",type:"success"}))})}}},v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{attrs:{title:e.title,visible:!0,"before-close":e.hideDialog}},[e.currentAlbum?s("div",{staticClass:"detail-block"},["add"===e.type?s("div",{staticClass:"detail-property-block upload-block"},[s("span",[e._v("封面")]),e._v(" "),s("input",{ref:"fileInput",staticClass:"fileInput",attrs:{type:"file",accept:"image/*"}}),e._v(" "),s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.upload}},[e._v("上传")])],1):e._e(),e._v(" "),s("div",{staticClass:"detail-property-block"},[s("span",[e._v("专辑ID")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入专辑ID"},model:{value:e.currentAlbum.album_id,callback:function(t){e.$set(e.currentAlbum,"album_id",t)},expression:"currentAlbum['album_id']"}})],1),e._v(" "),s("div",{staticClass:"detail-property-block"},[s("span",[e._v("专辑名称")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入专辑名称"},model:{value:e.currentAlbum.album_name,callback:function(t){e.$set(e.currentAlbum,"album_name",t)},expression:"currentAlbum['album_name']"}})],1),e._v(" "),s("div",{staticClass:"detail-property-block"},[s("span",[e._v("价格")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入价格"},model:{value:e.currentAlbum.price,callback:function(t){e.$set(e.currentAlbum,"price",t)},expression:"currentAlbum['price']"}})],1),e._v(" "),s("div",{staticClass:"detail-property-block"},[s("span",[e._v("发行时间")]),e._v(" "),s("el-date-picker",{attrs:{type:"date",placeholder:"选择发行日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:e.currentAlbum.public_time,callback:function(t){e.$set(e.currentAlbum,"public_time",t)},expression:"currentAlbum['public_time']"}})],1)]):e._e(),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.hideDialog}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.confirmDialog}},[e._v("确 定")])],1)])},staticRenderFns:[]};var f={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{attrs:{title:e.title,visible:!0,"before-close":e.hideDialog}},[e.currentSinger?s("div",{staticClass:"detail-block"},[s("div",{staticClass:"detail-property-block"},[s("span",[e._v("歌手ID")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入歌手ID"},model:{value:e.currentSinger.singer_id,callback:function(t){e.$set(e.currentSinger,"singer_id",t)},expression:"currentSinger['singer_id']"}})],1),e._v(" "),s("div",{staticClass:"detail-property-block"},[s("span",[e._v("歌手名称")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入歌手名称"},model:{value:e.currentSinger.singer_name,callback:function(t){e.$set(e.currentSinger,"singer_name",t)},expression:"currentSinger['singer_name']"}})],1)]):e._e(),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.hideDialog}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.confirmDialog}},[e._v("确 定")])],1)])},staticRenderFns:[]};var _={name:"Index",components:{AlbumDialog:s("C7Lr")(b,v,!1,function(e){s("gXdy")},null,null).exports,SingerDialog:s("C7Lr")({name:"Index",props:["type","singer"],data:function(){return{currentSinger:null}},beforeMount:function(){"add"===this.type?this.currentSinger={singer_id:"",singer_name:""}:this.currentSinger=this.singer},computed:{title:function(){return"add"===this.type?"添加专辑":"修改专辑"}},methods:{hideDialog:function(){this.$emit("hideDialog","singer")},confirmDialog:function(){this.$emit("confirmSingerDialog",this.currentSinger)}}},f,!1,function(e){s("mJEz")},null,null).exports},data:function(){return{baseUrl:"http://106.13.136.196:3000",username:"",loginDialogFormVisible:!1,loading:!1,searchContent:"",albums:[],singers:[],showSingersResults:!1,showAlbumsResults:!1,albumType:"add",showAlbumDialog:!1,currentAlbum:null,singerType:"add",showSingerDialog:!1,currentSinger:null}},beforeMount:function(){var e=sessionStorage.getItem("username");e&&(this.username=e)},methods:{hideDialog:function(e){"album"===e?this.showAlbumDialog=!1:"singer"===e&&(this.showSingerDialog=!1)},confirmAlbumDialog:function(e){var t=this;this.loadingSwitch(!0);var s="";s="add"===this.albumType?this.baseUrl+"/albums/add":this.baseUrl+"/albums/update",fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:u()(e)}).then(function(e){return e.json()}).then(function(e){t.loadingSwitch(!1),0==e.code&&("add"===t.albumType?(t.albums.push(e.album),t.$message({showClose:!0,message:e.msg,type:"success"})):t.$message({showClose:!0,message:e.msg,type:"success"})),t.hideDialog("album")})},confirmSingerDialog:function(e){var t=this;this.loadingSwitch(!0);var s="";s="add"===this.singerType?this.baseUrl+"/singers/add":this.baseUrl+"/singers/update",fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:u()(e)}).then(function(e){return e.json()}).then(function(e){t.loadingSwitch(!1),0==e.code&&("add"===t.singerType?(t.singers.push(e.singer),t.$message({showClose:!0,message:e.msg,type:"success"})):t.$message({showClose:!0,message:e.msg,type:"success"})),t.hideDialog("singer")})},loadingSwitch:function(e){this.loading=e},search:function(){this.searchAlbums(),this.searchSingers()},searchAlbums:function(){var e=this;this.loadingSwitch(!0);var t="";t=this.searchContent?"/albums/getAlbumsByName?name="+this.searchContent:"/albums/",fetch(this.baseUrl+t).then(function(e){return e.json()}).then(function(t){e.loadingSwitch(!1),e.albums=t.map(function(e){return e.handle="收藏",e}),e.showAlbumsResults=!0})},searchSingers:function(){var e=this;this.loadingSwitch(!0);var t="";t=this.searchContent?"/singers/getSingersByName?name="+this.searchContent:"/singers/",fetch(this.baseUrl+t).then(function(e){return e.json()}).then(function(t){e.loadingSwitch(!1),e.singers=t,e.showSingersResults=!0})},addAlbumBtnClick:function(){this.albumType="add",this.showAlbumDialog=!0},initAlbumsDataBtnClick:function(){var e=this;this.$confirm("确定要初始化专辑数据吗","专辑数据初始化",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){e.loadingSwitch(!0);var t=e.baseUrl+"/albums/init";fetch(t,{method:"POST",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.loadingSwitch(!1),0==t.code?(e.albums=t.albums,e.$message({showClose:!0,message:t.msg,type:"success"})):e.$message({showClose:!0,message:t.msg,type:"error"})})}).catch(function(){console.log("init cancel")})},updateAlbumBtnClick:function(e){this.currentAlbum=e,this.albumType="update",this.showAlbumDialog=!0},removeAlbumBtnClick:function(e){var t=this;this.$confirm("确定要删除该专辑吗","专辑删除",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){t.loadingSwitch(!0);fetch(t.baseUrl+"/albums/"+e._id,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(s){if(t.loadingSwitch(!1),0==s.code){var n=t.albums.findIndex(function(t){return t._id==e._id});t.albums.splice(n,1),t.$message({showClose:!0,message:s.msg,type:"success"})}else t.$message({showClose:!0,message:s.msg,type:"error"})}).catch(function(e){alert(e)})}).catch(function(){t.loadingSwitch(!1),console.log("已取消删除")})},addSingerBtnClick:function(){this.singerType="add",this.showSingerDialog=!0},initSingersDataBtnClick:function(){var e=this;this.$confirm("确定要初始化歌手数据吗","歌手数据初始化",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){e.loadingSwitch(!0);var t=e.baseUrl+"/singers/init";fetch(t,{method:"POST",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.loadingSwitch(!1),0==t.code?(e.singers=t.singers,e.$message({showClose:!0,message:t.msg,type:"success"})):e.$message({showClose:!0,message:t.msg,type:"error"})})}).catch(function(){e.loadingSwitch(!1),console.log("init cancel")})},updateSingerBtnClick:function(e){this.currentSinger=e,this.singerType="update",this.showSingerDialog=!0},removeSingerBtnClick:function(e){var t=this;this.$confirm("确定要删除该歌手吗","歌手删除",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){t.loadingSwitch(!0);fetch(t.baseUrl+"/singers/"+e._id,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(s){if(t.loadingSwitch(!1),0==s.code){var n=t.singers.findIndex(function(t){return t._id==e._id});t.singers.splice(n,1),t.$message({showClose:!0,message:s.msg,type:"success"})}else t.$message({showClose:!0,message:s.msg,type:"error"})}).catch(function(e){alert(e)})}).catch(function(){t.loadingSwitch(!1),console.log("已取消删除")})}}},w={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:e.loading,expression:"loading",modifiers:{fullscreen:!0}}],staticClass:"page",attrs:{"element-loading-background":"rgba(255, 255, 255, 0.8)"}},[e._m(0),e._v(" "),s("div",{staticClass:"body"},[s("div",{staticClass:"search-box-wrap",class:{"search-show-result":e.showAlbumsResults}},[s("div",{staticClass:"search-box"},[s("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入音乐专辑或者歌手,为空时则检索所有专辑和歌手"},model:{value:e.searchContent,callback:function(t){e.searchContent=t},expression:"searchContent"}},[s("el-button",{attrs:{slot:"append",type:"primary",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1)]),e._v(" "),e.showAlbumsResults?s("div",{staticClass:"table-wrap"},[s("div",{staticClass:"table-header-wrap"},[s("p",[e._v("专辑列表")]),e._v(" "),s("div",{staticClass:"handle-wrap"},[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.addAlbumBtnClick}},[e._v("添加专辑")]),e._v(" "),s("el-button",{attrs:{type:"success",size:"mini"},on:{click:e.initAlbumsDataBtnClick}},[e._v("初始化专辑数据")])],1)]),e._v(" "),e.albums.length?s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.albums}},[s("el-table-column",{attrs:{prop:"address",label:"封面"},scopedSlots:e._u([{key:"default",fn:function(e){return[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:e.row.cover}})])]}}],null,!1,396790421)}),e._v(" "),s("el-table-column",{attrs:{prop:"album_id",label:"专辑ID",width:"180"}}),e._v(" "),s("el-table-column",{attrs:{prop:"album_name",label:"专辑名称",width:"180"}}),e._v(" "),s("el-table-column",{attrs:{prop:"public_time",label:"发行时间"}}),e._v(" "),s("el-table-column",{attrs:{prop:"price",label:"价格"}}),e._v(" "),s("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.updateAlbumBtnClick(t.row)}}},[e._v("修改")]),e._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.removeAlbumBtnClick(t.row)}}},[e._v("删除")])]}}],null,!1,3372596628)})],1):s("span",[e._v("未检索到相应信息")])],1):e._e(),e._v(" "),e.showSingersResults?s("div",{staticClass:"table-wrap"},[s("div",{staticClass:"table-header-wrap"},[s("p",[e._v("歌手列表")]),e._v(" "),s("div",{staticClass:"handle-wrap"},[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.addSingerBtnClick}},[e._v("添加歌手")]),e._v(" "),s("el-button",{attrs:{type:"success",size:"mini"},on:{click:e.initSingersDataBtnClick}},[e._v("初始化歌手数据")])],1)]),e._v(" "),e.singers.length?s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.singers}},[s("el-table-column",{attrs:{prop:"singer_id",label:"歌手ID",width:"180"}}),e._v(" "),s("el-table-column",{attrs:{prop:"singer_name",label:"歌手姓名",width:"180"}}),e._v(" "),s("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.updateSingerBtnClick(t.row)}}},[e._v("修改")]),e._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.removeSingerBtnClick(t.row)}}},[e._v("删除")])]}}],null,!1,906312116)})],1):s("span",[e._v("未检索到相应信息")])],1):e._e()]),e._v(" "),e.showAlbumDialog?s("AlbumDialog",{attrs:{baseUrl:e.baseUrl,type:e.albumType,album:e.currentAlbum},on:{hideDialog:e.hideDialog,confirmAlbumDialog:e.confirmAlbumDialog}}):e._e(),e._v(" "),e.showSingerDialog?s("SingerDialog",{attrs:{type:e.singerType,singer:e.currentSinger},on:{hideDialog:e.hideDialog,confirmSingerDialog:e.confirmSingerDialog}}):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("h3",[t("i",{staticClass:"el-icon-mic"}),this._v("智能音乐平台后台管理系统")])])}]};var y=s("C7Lr")(_,w,!1,function(e){s("jpIm")},"data-v-40f831eb",null).exports;n.default.use(l.a);var C=new l.a({routes:[{path:"/hello",name:"HelloWorld",component:o},{path:"/",name:"index",component:p},{path:"/admin",name:"admin",component:y}]}),S=s("TcQY"),k=s.n(S);s("09yM");n.default.use(k.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:C,components:{App:a},template:"<App/>"})},VU89:function(e,t){},Yxfj:function(e,t){},gXdy:function(e,t){},jpIm:function(e,t){},mJEz:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e775d2f03a11d0155125.js.map