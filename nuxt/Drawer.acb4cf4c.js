import f from"./ScrollText.94455b24.js";import x from"./Container.84a5d59e.js";import{d as h,r as g,ak as C,q as v,am as b,o as S,e as A,w as c,x as I,y as T,u as p,f as o,m as r,t,N as i,g as y,z as D,U as $,V as N}from"./entry.8cba7e1e.js";import{u as V}from"./useCookieDialog.206ec12e.js";/* empty css                   */import{_ as z}from"./_plugin-vue_export-helper.a1a6add7.js";import"./Dialog.f9a6915a.js";import"./Option.07409c0a.js";import"./Switch.46fdc7da.js";/* empty css                   *//* empty css                   */import"./Dialog.e368503a.js";/* empty css                   */const B=a=>($("data-v-ea39bf22"),a=a(),N(),a),M={class:"cookie-drawer-container"},P=B(()=>o("div",{class:"placeholder pix-col-md-1400-1 pix-col-lg-1920-4 pix-col-4"},null,-1)),q={class:"cookie-drawer-container-wrapper pix-col-xs-375-4 pix-col-xs-600-4 pix-col-md-900-8 pix-col-md-1400-14 pix-col-lg-1920-16 pix-col-16"},K={class:"cookie-drawer-container-wrapper-content"},L={class:"cookie-drawer-container-wrapper-content-title"},O={class:"cookie-drawer-container-wrapper-content-desc"},R={class:"cookie-drawer-container-wrapper-btn-box"},U=["src"],j=h({__name:"Drawer",setup(a){const n=g(!1),{setSelectedOption:d}=C();function m(){V({onClose(){s()}})}function _(){d("all"),s(),w()}function w(){const e=new Image;e.src="/__static__/agree.txt"}function s(){n.value=!1}const u=()=>{window.open(window.location.origin+"/policy/cookies")};return v(()=>{n.value=!localStorage.getItem(b.AllowCookiesPrivacy)}),(e,E)=>{const l=f,k=x;return S(),A(D,{name:"drawer-bottom"},{default:c(()=>[I(o("div",M,[r(k,{class:"cookie-drawer-container-inner pix-wrapper"},{default:c(()=>[P,o("div",q,[o("div",K,[o("h5",L,t(e.$t("common.cookies.drawer.header")),1),o("p",O,[i(t(e.$t("common.cookies.drawer.content"))+" ",1),o("span",{class:"read-more",onClick:u},t(e.$t("common.cookies.drawer.moreText")),1)])]),o("div",R,[o("span",{class:"cookie-drawer-container-wrapper-btn-box__item",onClick:m},[r(l,null,{default:c(()=>[i(t(e.$t("common.cookies.drawer.customizeText")),1)]),_:1})]),o("span",{class:"cookie-drawer-container-wrapper-btn-box__item accept-btn",onClick:_},[r(l,null,{default:c(()=>[i(t(e.$t("common.cookies.drawer.acceptText")),1)]),_:1})])]),o("i",{class:"close-icon",onClick:s},[o("img",{src:p(y)("/assets/icons/common/cookie_close.png","icons"),alt:""},null,8,U)])])]),_:1})],512),[[T,p(n)]])]),_:1})}}}),co=z(j,[["__scopeId","data-v-ea39bf22"]]);export{co as default};