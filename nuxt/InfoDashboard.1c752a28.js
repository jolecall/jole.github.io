import g from"./InfoDashboardCard.a888d769.js";import{d as x,bj as h,bn as r,g as d,L as c,aC as p,b,q as I,o as t,a as l,F as v,v as S,e as D,u as B,U as L,V as k,f as y}from"./entry.8cba7e1e.js";import{a as q}from"./useDownload.1ab3c12d.js";import{g as C}from"./date.ab54ef13.js";/* empty css                          */import{_ as P}from"./_plugin-vue_export-helper.a1a6add7.js";import"./ScrollText.94455b24.js";import"./useGTag.98087ddc.js";/* empty css                              */import"./download.e4c9c7c8.js";import"./download.e1381952.js";import"./ThanksDialog.323617ee.js";import"./Dialog.e368503a.js";import"./moment.d2fcea56.js";const A=a=>(L("data-v-a4fecdad"),a=a(),k(),a),F={class:"pix-wrapper info-dashboard-container"},M=A(()=>y("div",{class:"pix-col-xs-375-4 pix-col-xs-600-4 pix-col-md-900-1 pix-col-md-1400-3 pix-col-lg-1920-6 pix-col-6 placeholder"},null,-1)),T=x({__name:"InfoDashboard",setup(a){const n=q(),{fetchSoftwareList:i}=n,{getSoftwareList:_}=h(n),f={[r.mac]:{icon:d("/assets/images/pages/download/mac_img@2x.png"),title:c("download.dashboard.mac.title"),platform:p.Mac,faq:"_m_p_0_6"},[r.win]:{icon:d("/assets/images/pages/download/windows_img@2x.png"),title:c("download.dashboard.win.title"),platform:p.Win,faq:"_m_p_0_7"}},m=b(()=>{var s;return(s=_.value)==null?void 0:s.map(o=>({...f[o.app_type],runtime:o==null?void 0:o.runtime,version:o==null?void 0:o.version,updateDate:o.created_at?C(o==null?void 0:o.created_at):""}))});return I(async()=>{await i()}),(s,o)=>{const e=g;return t(),l("div",F,[M,(t(!0),l(v,null,S(B(m),(u,w)=>(t(),D(e,{key:w,class:"info-dashboard-container-card","card-info":u},null,8,["card-info"]))),128))])}}}),Q=P(T,[["__scopeId","data-v-a4fecdad"]]);export{Q as default};