webpackJsonp([13],{lHLu:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={data:function(){return{list:[],value:""}},mounted:function(){this.getList()},methods:{getList:function(){var t=this,a={search:this.value,type:6},s=i("mw3O");t.$ajax.post("samecity/getsamecitylist",s.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){"200"==a.data.meta.code&&(t.list=a.data.data.data)}).catch(function(t){})},toJobService:function(){this.$router.push("JobService")},toJobInfo:function(t){this.$store.commit("setJobInfo",t),this.$router.push("JobInfo")}}},e={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"JobList"}},[i("div",{staticClass:"header"},[i("van-row",{attrs:{gutter:"20"}},[i("van-col",{staticStyle:{"padding-right":"0px !important","padding-left":"0px"},attrs:{span:"4"}},[i("i",{staticClass:"van-icon van-icon-arrow van-nav-bar__arrow",staticStyle:{"vertical-align":"middle"},on:{click:function(a){t.$router.back(-1)}}})]),t._v(" "),i("van-col",{staticClass:"search font_12",staticStyle:{background:"#ffffff"},attrs:{span:"16"}},[i("van-search",{attrs:{placeholder:"搜索"},on:{search:t.getList},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1),t._v(" "),i("van-col",{staticStyle:{"padding-left":"0px !important","padding-right":"0px"},attrs:{span:"4"}})],1)],1),t._v(" "),i("div",{staticClass:"body_box",staticStyle:{padding:"5px"}},t._l(t.list,function(a,s){return i("div",{staticClass:"background_color_ffffff border_bottom_eeeeee",staticStyle:{padding:"5px"},on:{click:function(i){t.toJobInfo(a)}}},[i("img",{staticStyle:{width:"15%","vertical-align":"text-top"},attrs:{src:a.user.userimg||"static/img/img_tx_zp.png"}}),t._v(" "),i("div",{staticStyle:{display:"inline-block",width:"80%"}},[i("span",[t._v(t._s(a.title))]),t._v(" "),i("span",{staticClass:"font_12 float_right color_8b8b8b"},[t._v("发布时间:"+t._s(a.addtime))])]),t._v(" "),i("span",{staticClass:"font_12 color_8b8b8b",staticStyle:{position:"relative",left:"17%",bottom:"20px"}},[t._v(t._s(a.user.username))]),t._v(" "),i("div",{staticClass:"color_c10804 float_right font_12"},[t._v("¥"+t._s(a.price))]),t._v(" "),i("div",{staticClass:"color_40a3f3 text_right font_12"},[t._v(t._s(a.tell))]),t._v(" "),i("div",{staticStyle:{display:"inline-block",width:"100%"}},[i("span",{staticClass:"font_12"},[t._v(t._s(a.content))])])])}))])},staticRenderFns:[]};var n=i("VU/8")(s,e,!1,function(t){i("xKS3")},null,null);a.default=n.exports},xKS3:function(t,a){}});
//# sourceMappingURL=13.b305dcb366d4f73c4392.js.map