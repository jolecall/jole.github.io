import{L as s,m as r,N as n}from"./entry.8cba7e1e.js";const i=Symbol("checkboxGroupContextKey"),f=Symbol("tabsContextKey");let o;(function(e){e.Vertical="vertical",e.Horizontal="horizontal"})(o||(o={}));const u={label:s("features.noneEffect.label"),value:0,fileName:"none-effect"},d=(e,l)=>Array(l).fill(e).map((t,a)=>({label:t,fileName:`${t}_${a}`}));function p(e,l){return l.map((t,a)=>({title:s(`features.${e}.list[${a}].title`),desc:s(`features.${e}.list[${a}].desc`),...t}))}const b=(e,l)=>{const t=s(`features.${e}.header.title[0]`),a=s(`features.${e}.header.title[1]`);return{title:r("div",{class:"title"},[r("span",{class:[l,"bg"]},[t]),n(" "),a]),desc:s(`features.${e}.header.desc`)}};export{o as I,i as c,b as h,d as i,p as l,u as n,f as t};