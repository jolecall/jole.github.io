import f from"./ScrollText.94455b24.js";import u from"./Container.84a5d59e.js";import{u as g,g as h}from"./useGTag.98087ddc.js";import{u as v}from"./useDownload.1ab3c12d.js";import{d as w,aP as C,o as D,a as x,m as t,w as e,f as i,t as n,u as T,N as k,J as y}from"./entry.8cba7e1e.js";/* empty css                   */import{_ as B}from"./_plugin-vue_export-helper.a1a6add7.js";import"./download.e4c9c7c8.js";import"./download.e1381952.js";import"./ThanksDialog.323617ee.js";import"./Dialog.e368503a.js";const N={class:"ending-container"},$={class:"ending-container__content-title"},b={class:"ending-container__content-tip"},E={class:"ending-container__content-tip"},P=w({__name:"Ending",setup(V){let{useDownloadGTag:s}=g(),{_PointOfficeDownloadMixin:c}=s();const{download:_,loading:l}=v(),{deviceType:a}=C();async function d(){c({official_position:h.official_page,official_download_platform:a.value}),await _(a.value)}return(o,G)=>{const r=f,m=y("el-button"),p=u;return D(),x("div",N,[t(p,{class:"ending-container__content"},{default:e(()=>[i("div",$,n(o.$t("home.ending.title")),1),i("div",b,n(o.$t("home.ending.tip[0]")),1),i("div",E,n(o.$t("home.ending.tip[1]")),1),t(m,{class:"ending-container__content-btn",loading:T(l),onClick:d},{default:e(()=>[t(r,null,{default:e(()=>[k(n(o.$t("home.tryFreeButtonText")),1)]),_:1})]),_:1},8,["loading"])]),_:1})])}}}),K=B(P,[["__scopeId","data-v-850c2ff2"]]);export{K as default};