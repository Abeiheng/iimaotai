(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cb6e8"],{"4a49":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-frame",{attrs:{src:e.url}})},r=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],style:"height:"+e.height},[n("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.src,frameborder:"no",scrolling:"auto"}})])},o=[],l={props:{src:{type:String,required:!0}},data:function(){return{height:document.documentElement.clientHeight-94.5+"px;",loading:!0,url:this.src}},mounted:function(){var e=this;setTimeout((function(){e.loading=!1}),300);var t=this;window.onresize=function(){t.height=document.documentElement.clientHeight-94.5+"px;"}}},u=l,c=n("7275"),s=Object(c["a"])(u,a,o,!1,null,null,null),d=s.exports,h={name:"Swagger",components:{iFrame:d},data:function(){return{url:"/prod-api/swagger-ui/index.html"}}},g=h,m=Object(c["a"])(g,i,r,!1,null,null,null);t["default"]=m.exports}}]);