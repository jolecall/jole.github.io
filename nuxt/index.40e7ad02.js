import{u as l}from"./useDownload.1ab3c12d.js";import{aP as v,r as S,K as u,cM as c,cN as t,cO as F,ag as e}from"./entry.8cba7e1e.js";const N=(o,n)=>{const{download:a}=l({source:n}),{deviceType:I}=v(),s=S(),i=u(o);return{downloadBtnRef:s,sendBtnStyle:i,freeDownloadHandler:async()=>{s.value.openLoading(),await a(I.value),s.value.closeLoading()}}},P=()=>({setInviteeSuccessGoogleFlag:()=>{sessionStorage.setItem(e.TEMP_INVITEE_SUCCESS_GOOGLE,"true")},getInviteeSuccessGoogleFlag:()=>sessionStorage.getItem(e.TEMP_INVITEE_SUCCESS_GOOGLE),removeInviteeSuccessGoogleFlag:()=>{sessionStorage.removeItem(e.TEMP_INVITEE_SUCCESS_GOOGLE)},setInviteeSuccessFlag:()=>{sessionStorage.setItem(e.TEMP_INVITEE_SUCCESS,"true")},getInviteeSuccessFlag:()=>sessionStorage.getItem(e.TEMP_INVITEE_SUCCESS),removeInviteeSuccessFlag:()=>{sessionStorage.removeItem(e.TEMP_INVITEE_SUCCESS)},getInviteeFailedFlag:()=>sessionStorage.getItem(e.TEMP_INVITEE_FAILED),setInviteeFailedFlag:()=>{sessionStorage.setItem(e.TEMP_INVITEE_FAILED,"true")},removeInviteeFailedFlag:()=>{sessionStorage.removeItem(e.TEMP_INVITEE_FAILED)},setInviterUuid:g=>{const E=c(t.TEMP_INVITEE_UUID);E.value=g},getInviterUuid:()=>c(t.TEMP_INVITEE_UUID).value,removeInviterUuid:()=>{F(t.TEMP_INVITEE_UUID)}});export{P as a,N as u};