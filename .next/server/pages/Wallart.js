"use strict";(()=>{var e={};e.id=307,e.ids=[307],e.modules={4289:(e,r,t)=>{t.r(r),t.d(r,{config:()=>_,default:()=>q,getServerSideProps:()=>h,getStaticPaths:()=>v,getStaticProps:()=>b,reportWebVitals:()=>j,routeModule:()=>Z,unstable_getServerProps:()=>C,unstable_getServerSideProps:()=>A,unstable_getStaticParams:()=>w,unstable_getStaticPaths:()=>W,unstable_getStaticProps:()=>y});var a={};t.r(a),t.d(a,{default:()=>P,getServerSideProps:()=>f});var s=t(7093),i=t(5244),o=t(1323),l=t(4494),n=t(7757),u=t(997),p=t(9641),d=t(6710),c=t(5433),g=t(3580),m=t(899),S=t(4831),x=t(3519);function P({products:e}){return(0,u.jsxs)(u.Fragment,{children:[u.jsx(p.Z,{}),(0,u.jsxs)(d.Z,{children:[u.jsx(x.Z,{style:{marginTop:"80px"},children:"Explore Wall Arts"})," ",u.jsx(m.Z,{products:e})]})]})}async function f(){await (0,c.I)();let e=await S.W.findOne({name:"Wall Art"});return e?{props:{products:JSON.parse(JSON.stringify(await g.x.find({category:e._id},null,{sort:{_id:-1}})))}}:{props:{products:[]}}}let q=(0,o.l)(a,"default"),b=(0,o.l)(a,"getStaticProps"),v=(0,o.l)(a,"getStaticPaths"),h=(0,o.l)(a,"getServerSideProps"),_=(0,o.l)(a,"config"),j=(0,o.l)(a,"reportWebVitals"),y=(0,o.l)(a,"unstable_getStaticProps"),W=(0,o.l)(a,"unstable_getStaticPaths"),w=(0,o.l)(a,"unstable_getStaticParams"),C=(0,o.l)(a,"unstable_getServerProps"),A=(0,o.l)(a,"unstable_getServerSideProps"),Z=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/Wallart",pathname:"/Wallart",bundlePath:"",filename:""},components:{App:n.default,Document:l.default},userland:a})},4831:(e,r,t)=>{t.d(r,{W:()=>i});var a=t(1185);let s=new a.Schema({name:{type:String,required:!0}}),i=a.models.Category||(0,a.model)("Category",s)},1747:e=>{e.exports=require("@mui/icons-material/AddShoppingCart")},4173:e=>{e.exports=require("@mui/icons-material/Close")},8792:e=>{e.exports=require("@mui/icons-material/Info")},7248:e=>{e.exports=require("@mui/icons-material/ShoppingCart")},1185:e=>{e.exports=require("mongoose")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7518:e=>{e.exports=require("styled-components")},2048:e=>{e.exports=require("fs")},5315:e=>{e.exports=require("path")},6162:e=>{e.exports=require("stream")},1568:e=>{e.exports=require("zlib")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[553,163,859,637,741],()=>t(4289));module.exports=a})();