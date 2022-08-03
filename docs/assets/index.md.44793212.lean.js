import{_ as d,f as u,o as t,c as n,t as g,g as r,a,F as c,h as _,d as l,V as h,i as p,n as f,p as y,j as k,u as x,k as w,l as H,w as S}from"./app.170a4efb.js";const b={class:"VPFeature"},V={key:0,class:"icon"},P=["innerHTML"],T=["innerHTML"],$=u({__name:"VPFeature",props:{icon:null,title:null,details:null},setup(e){return(s,o)=>(t(),n("article",b,[e.icon?(t(),n("div",V,g(e.icon),1)):r("",!0),a("h2",{class:"title",innerHTML:e.title},null,8,P),a("p",{class:"details",innerHTML:e.details},null,8,T)]))}});var I=d($,[["__scopeId","data-v-4222a27f"]]);const L=e=>(y("data-v-57702fff"),e=e(),k(),e),M={class:"container"},F={class:"main"},B={key:0,class:"name"},J=["innerHTML"],N=["innerHTML"],C=["innerHTML"],j={key:3,class:"actions"},W={key:0,class:"image"},Y={class:"image-container"},z=L(()=>a("div",{class:"image-bg"},null,-1)),A=u({__name:"VPHero",props:{name:null,text:null,tagline:null,image:null,actions:null},setup(e){return(s,o)=>(t(),n("div",{class:f(["VPHero",{"has-image":e.image}])},[a("div",M,[a("div",F,[e.name?(t(),n("h1",B,[a("span",{class:"clip",innerHTML:e.name},null,8,J)])):r("",!0),e.text?(t(),n("p",{key:1,class:"text",innerHTML:e.text},null,8,N)):r("",!0),e.tagline?(t(),n("p",{key:2,class:"tagline",innerHTML:e.tagline},null,8,C)):r("",!0),e.actions?(t(),n("div",j,[(t(!0),n(c,null,_(e.actions,i=>(t(),n("div",{key:i.link,class:"action"},[l(h,{tag:"a",size:"medium",theme:i.theme,text:i.text,href:i.link},null,8,["theme","text","href"])]))),128))])):r("",!0)]),e.image?(t(),n("div",W,[a("div",Y,[z,l(p,{class:"image-src",image:e.image},null,8,["image"])])])):r("",!0)])],2))}});var D=d(A,[["__scopeId","data-v-57702fff"]]);const E={class:"Content"},O={class:"Features"},R={class:"Features Content"},U=u({__name:"Home",setup(e){const s={name:"Starbeam",text:"Reactivity Made Simple and Fun \u2728",tagline:"Starbeam is a new kind of reactive library. It make reactive programming simple and fun, and it works with your existing JavaScript framework."},o=[{title:"Use normal JavaScript",details:"Build reactive data structures using reactive versions of JavaScript built-ins like objects, arrays, maps, and sets, and update them exactly as you would with normal JavaScript."},{title:"No delays",details:"Updates to reactive values <mark>take effect immediately.</mark> Your reactive data and computations are always coherent, just like normal JavaScript."},{title:"Works everywhere",details:"You don't need to learn a new framework to take advantage of Starbeam's cutting edge reactivity system. You can render Starbeam data using renderers designed for your framework of choice, or even build your own renderer."},{title:"TypeScript is first-class",details:"Every part of Starbeam's API was designed from the ground up using TypeScript types with careful attention to detail. If you develop in pure JS, you get inline suggestions, docs and tab completion in your editor."}];return(i,Q)=>(t(),n(c,null,[l(D,{class:"VPHomeHero",name:s.name,text:s.text,tagline:s.tagline},null,8,["name","text","tagline"]),a("div",E,[a("div",O,[(t(!0),n(c,null,_(x(o),({title:m,details:v})=>(t(),H(I,{title:m,details:v},null,8,["title","details"]))),256))]),a("div",R,[w(i.$slots,"content",{},void 0,!0)])])],64))}});var q=d(U,[["__scopeId","data-v-72285e05"]]);const G=a("div",{class:"warning custom-block"},[a("p",{class:"custom-block-title"},"WARNING"),a("p",null,"This documentation is a work in progress. We are making quick progress (and would love your help!)."),a("p",null,"We're still writing many areas of the documentation, building examples, and fixing mistakes. But if you're ready for an adventure, come on in and join the fun!")],-1),Z=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"index.md"}'),K={name:"index.md"},ee=Object.assign(K,{setup(e){return(s,o)=>(t(),n("div",null,[l(q,null,{content:S(()=>[G]),_:1})]))}});export{Z as __pageData,ee as default};