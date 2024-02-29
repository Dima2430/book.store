import{a as y}from"./vendor-169f9f98.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();const h="local-storage-books";async function L(){const t=localStorage.getItem(h);let e=t?JSON.parse(t):[];const c=await v(bookId);if(e.every(s=>s._id!==c._id)){e.push(c);const s=JSON.stringify(e);localStorage.setItem(h,s)}}async function v(t){const e=`https://books-backend.p.goit.global/books/${t}`;try{return(await y.get(e)).data}catch{console.log("Результатів не знайдено.")}}const r=document.querySelector(".theme-switch-input"),i=document.querySelector("body"),l=document.querySelector(".menu-open-btn"),d=document.querySelector(".menu-close-btn"),u=document.querySelector(".menu-modal");document.querySelector(".book-card-btn");document.querySelector(".modal-content");document.querySelectorAll("h1");document.querySelectorAll("h2");document.querySelectorAll("h4");document.querySelectorAll("h5");document.querySelectorAll("h6");document.querySelectorAll("a");function m(){r.checked===!1?(i.classList.add("light-theme"),i.classList.remove("dark-theme"),localStorage.setItem("theme","light")):(i.classList.remove("light-theme"),i.classList.add("dark-theme"),localStorage.setItem("theme","dark"))}const p=localStorage.getItem("theme");p==="dark"?(r.checked=!0,m()):r.checked=!1;r.addEventListener("change",m);r.addEventListener("click",m);const f=document.querySelector(".header-menu");f.addEventListener("click",function(t){t.target.matches(".header-menu-link")&&(f.querySelectorAll(".header-menu-link").forEach(c=>{c.classList.remove("exception")}),t.target.classList.add("exception"))});l.addEventListener("click",()=>{u.classList.add("menu-is-open"),l.classList.remove("is-open"),document.body.style.overflow="hidden",u.style.overflow="hidden",l.classList.add("hidden"),d.classList.remove("hidden")});d.addEventListener("click",()=>{document.body.style.overflow="auto",u.classList.remove("menu-is-open"),l.classList.remove("hidden"),d.classList.add("hidden")});window.onload=function(){const t=localStorage.getItem("activeButton");if(t){document.querySelector(t).classList.add("activeButton"),document.querySelector(t).classList.remove("inactiveButton");const e=t===".header-menu-link"?".header-menu-shopping":".header-menu-link";document.querySelector(e).classList.remove("activeButton"),document.querySelector(e).classList.add("inactiveButton")}};document.querySelector(".header-menu-link").addEventListener("click",function(t){t.preventDefault(),this.classList.add("activeButton"),this.classList.remove("inactiveButton");let e=document.querySelector(".header-menu-shopping");e.classList.remove("activeButton"),e.classList.add("inactiveButton"),localStorage.setItem("activeButton",".header-menu-link"),window.location.href="index.html"});document.querySelector(".header-menu-shopping").addEventListener("click",function(t){t.preventDefault(),this.classList.add("activeButton"),this.classList.remove("inactiveButton");let e=document.querySelector(".header-menu-link");e.classList.remove("activeButton"),e.classList.add("inactiveButton"),localStorage.setItem("activeButton",".header-menu-shopping"),window.location.href="shoppingList.html"});export{h as S,L as o};
//# sourceMappingURL=header-1c5dacea.js.map
