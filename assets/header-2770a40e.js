(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&m(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function m(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const o=document.querySelector(".theme-switch-input"),r=document.querySelector("body"),n=document.querySelector(".menu-open-btn"),d=document.querySelector(".menu-close-btn");function a(){o.checked===!1?(r.classList.add("light-theme"),r.classList.remove("dark-theme"),localStorage.setItem("theme","light")):(r.classList.remove("light-theme"),r.classList.add("dark-theme"),localStorage.setItem("theme","dark"))}const f=localStorage.getItem("theme");f==="dark"?(o.checked=!0,a()):o.checked=!1;o.addEventListener("change",a);o.addEventListener("click",a);function u(){const s=document.querySelector("body");s.classList.contains("dark-theme")?s.style.color="white":s.style.color="black"}u();o.addEventListener("change",u);o.addEventListener("click",u);const h=document.querySelector(".header-menu");h.addEventListener("click",function(s){s.target.matches(".header-menu-link")&&(h.querySelectorAll(".header-menu-link").forEach(i=>{i.classList.remove("exception")}),s.target.classList.add("exception"))});n.addEventListener("click",()=>{mobMenu.classList.add("is-open"),n.classList.remove("is-open"),n.classList.add("hidden"),d.classList.remove("hidden")});d.addEventListener("click",()=>{mobMenu.classList.remove("is-open"),n.classList.remove("hidden"),d.classList.add("hidden")});
//# sourceMappingURL=header-2770a40e.js.map
