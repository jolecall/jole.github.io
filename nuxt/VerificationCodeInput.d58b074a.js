import{u as k,a as x}from"./useValidator.21496c0f.js";import{d as h,ad as B,b as r,o as p,a as f,m as E,w as S,a1 as N,u as e,I as $,a7 as D,t as _,h as M,L as V,D as T,ae as P,l as R,f as z,i as A}from"./entry.8cba7e1e.js";import{_ as L}from"./_plugin-vue_export-helper.a1a6add7.js";import"./timer.4152b58e.js";const U={class:"code-input-wrapper"},j={key:0,class:"code-input-wrapper__message"},q=h({__name:"VerificationCodeInput",props:{modelValue:{type:String,default:""},scene:{type:Number,default:0},inputClass:{type:String,default:""},showErrorMessage:{type:Boolean,default:!1},email:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","sent","error"],setup(o,{expose:g,emit:n}){const a=o,{email:v}=B(a),l=r({get(){return a.modelValue},set(t){n("update:modelValue",t)}}),{isTiming:s,timekeeping:C,count:d}=k(),y=r(()=>s.value?`${V("common.sent")}(${d.value}s)`:V("common.send")),{validator:b,isError:i,errorMessage:u}=x({target:v}),w=r(()=>a.disabled||s.value||i.value||!a.email);async function c(){!s.value&&a.scene&&!a.disabled&&(b(),await T(),i.value?n("error",u.value):(await P({email:a.email,scene:a.scene}),n("sent"),C()))}return g({sendVerCode:c}),(t,m)=>(p(),f("div",U,[E(e(D),N(t.$attrs,{modelValue:e(l),"onUpdate:modelValue":m[0]||(m[0]=I=>$(l)?l.value=I:null),class:o.inputClass}),{suffix:S(()=>[R(t.$slots,"action",{isTiming:e(s),count:e(d)},()=>[z("span",{class:A(["send-btn",{"is-disabled":e(w),"is-sent":e(s)}]),onClick:c},_(e(y)),3)],!0)]),_:3},16,["modelValue","class"]),o.showErrorMessage&&e(i)?(p(),f("div",j,_(e(u)),1)):M("",!0)]))}});const K=L(q,[["__scopeId","data-v-abf1e3df"]]);export{K as default};