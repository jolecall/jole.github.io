import{d as N,r as f,k as c,b as v,ao as F,M as w,q as E,j as T,u as _}from"./entry.8cba7e1e.js";const B={startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(t){return t>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},M=N({name:"CountTo",props:B,emits:["onStarted","onFinished"],setup(t,{emit:o}){const a=f(t.startVal),y=f(!1);let s=c(a);const m=v(()=>x(_(s)));F(()=>{a.value=t.startVal}),w([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&r()}),E(()=>{t.autoplay&&r()});function r(){l(),a.value=t.endVal}function g(){a.value=t.startVal,l()}function l(){s=c(a,{disabled:y,duration:t.duration,onFinished:()=>o("onFinished"),onStarted:()=>o("onStarted"),...t.useEasing?{transition:T[t.transition]}:{}})}function x(e){if(!e&&e!==0)return"";const{decimals:b,decimal:S,separator:i,suffix:V,prefix:p}=t;e=Number(e).toFixed(b),e+="";const u=e.split(".");let n=u[0];const h=u.length>1?S+u[1]:"",d=/(\d+)(\d{3})/;if(i&&typeof i!="number")for(;d.test(n);)n=n.replace(d,"$1"+i+"$2");return p+n+h+V}return{value:m,start:r,reset:g}}});export{M as _};