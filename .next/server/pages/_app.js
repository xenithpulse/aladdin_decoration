"use strict";(()=>{var e={};e.id=888,e.ids=[888],e.modules={3986:(e,r,t)=>{t.d(r,{A:()=>o,G:()=>s});var i=t(997),n=t(6689);let o=(0,n.createContext)({});function s({children:e}){let[r,t]=(0,n.useState)([]);return i.jsx(o.Provider,{value:{cartProducts:r,setCartProducts:t,addProduct:(e,r)=>{e&&"string"==typeof e?t(t=>{let i=t.findIndex(t=>t.productId===e&&JSON.stringify(t.selectedOptions)===JSON.stringify(r));return i>-1?t.map((e,r)=>r===i?{...e,quantity:(e.quantity||1)+1}:e):[...t,{productId:e,selectedOptions:r,quantity:1}]}):console.error("Invalid productId provided:",e)},removeProduct:(e,r)=>{e&&"string"==typeof e?t(t=>{let i=t.findIndex(t=>t.productId===e&&JSON.stringify(t.selectedOptions)===JSON.stringify(r));if(!(i>-1))return console.error("Product not found in cart for productId:",e),t;{let e=t[i];return e.quantity>1?t.map((r,t)=>t===i?{...r,quantity:e.quantity-1}:r):t.filter((e,r)=>r!==i)}}):console.error("Invalid productId provided:",e)},clearCart:()=>{console.log("Clearing cart"),t([])}},children:e})}},7757:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});var i=t(997),n=t(6689),o=t(1163),s=t(7518),d=t.n(s),a=t(3986);let u=d().div.withConfig({componentId:"sc-f5c2d5-0"})(["display:flex;align-items:center;justify-content:center;height:100vh;"]),c=d().div.withConfig({componentId:"sc-f5c2d5-1"})(["border:8px solid rgba(255,255,255,0.2);border-radius:100%;border-top:8px solid red;width:90px;height:90px;animation:spin 0.3s linear infinite;@keyframes spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"]);function l(){return i.jsx(u,{children:i.jsx(c,{})})}let p=(0,s.createGlobalStyle)(["body{background-color:#eee;padding:0;margin:0;font-family:'Montserrat',sans-serif;}"]);function f({Component:e,pageProps:r}){(0,o.useRouter)();let[t,s]=(0,n.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[i.jsx(p,{}),t&&i.jsx(l,{})," ",i.jsx(a.G,{children:i.jsx(e,{...r})})]})}},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7518:e=>{e.exports=require("styled-components")},2048:e=>{e.exports=require("fs")},6162:e=>{e.exports=require("stream")},1568:e=>{e.exports=require("zlib")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),i=r.X(0,[553,163],()=>t(7757));module.exports=i})();