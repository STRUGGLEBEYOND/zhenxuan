webpackJsonp([11],{SJ5Z:function(t,o){},sJDY:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a={name:"browsingHistory",data:function(){return{loading:!1,finished:!1,pageNum:1,followList:[],userId:localStorage.getItem("userId")}},methods:{onload:function(){this.loading=!0,this.getList()},toGoods:function(t){1==t.type?(this.$store.commit("setGoodsInfo",t.goods),this.$router.push("goods")):(this.$store.commit("setGoodsInfo",t.goods),this.$router.push("goodsKill"))},getList:function(){var t=this;setTimeout(function(){var o=t,a={userid:o.userId,pageNum:o.pageNum},i=s("mw3O");o.$ajax.post("watch/getwatchlistgoods",i.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){"200"==t.data.meta.code&&(t.data.data.data.length>0?(o.followList=o.followList.concat(t.data.data.data),o.pageNum++,o.loading=!1):(o.finished=!0,o.loading=!1))}).catch(function(t){})},1e3)}}},i={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{attrs:{id:"browsingHistory"}},[s("div",{staticClass:"header"},[s("div",{staticClass:"van-hairline--bottom van-nav-bar"},[s("div",{staticClass:"van-nav-bar__left"},[s("i",{staticClass:"van-icon van-icon-arrow van-nav-bar__arrow",staticStyle:{color:"#000000 !important"},on:{click:function(o){t.$router.back(-1)}}})]),t._v(" "),s("div",{staticClass:"van-ellipsis van-nav-bar__title"},[t._v("浏览历史")])])]),t._v(" "),s("div",{staticClass:"login_box"},[s("van-list",{attrs:{finished:t.finished,offset:100},on:{load:t.onload},model:{value:t.loading,callback:function(o){t.loading=o},expression:"loading"}},t._l(t.followList,function(o,a){return o.goods?s("div",{key:a,staticStyle:{"margin-top":"5px"}},[s("div",{staticClass:"text_center font_12 color_8b8b8b",staticStyle:{padding:"10px"}},[s("span",[t._v(t._s(o.addtime))])]),t._v(" "),s("van-card",{staticStyle:{margin:"4px 10px","border-radius":"3px"},nativeOn:{click:function(s){t.toGoods(o)}}},[s("div",{attrs:{slot:"thumb"},slot:"thumb"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:o.goods.goodslogo.split(",")[0],expression:"item.goods.goodslogo.split(',')[0]"}],staticStyle:{display:"block"},attrs:{src:o.goods.goodslogo.split(",")[0],width:"100%"}})]),t._v(" "),s("div",{staticClass:"font_weight_bold padding_bottom_5",attrs:{slot:"tags"},slot:"tags"},[t._v("\n            "+t._s(o.goods.goodsname)+"\n          ")]),t._v(" "),s("div",{staticClass:"font_12 color_8b8b8b padding_bottom_5",staticStyle:{height:"36px",overflow:"auto"},attrs:{slot:"tags"},slot:"tags"},[t._v("\n            "+t._s(o.goods.introduce)+"\n          ")]),t._v(" "),s("div",{staticClass:"font_12 color_8b8b8b padding-top-5",attrs:{slot:"tags"},slot:"tags"},[1==o.goods.type?s("span",[t._v("¥"+t._s(o.goods.price))]):t._e(),t._v(" "),2==o.goods.type?s("span",[t._v("¥"+t._s(o.goods.spike))]):t._e(),t._v(" "),s("span",{staticClass:"padding-left-20 float_right"},[t._v(t._s(o.goods.paynum)+"人付款")])])])],1):t._e()}))],1)])},staticRenderFns:[]};var n=s("VU/8")(a,i,!1,function(t){s("SJ5Z")},null,null);o.default=n.exports}});
//# sourceMappingURL=11.815b78871ff03e2661fa.js.map