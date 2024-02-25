import{a as q,i as v}from"./assets/vendor-174ee90c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(e){if(e.ep)return;e.ep=!0;const c=t(e);fetch(e.href,c)}})();const $=document.querySelector(".best-books-gallery"),A=q.create({baseURL:"https://books-backend.p.goit.global/books"});async function u(){try{return(await A.get("/top-books")).data}catch{v.error({position:"topRight",message:"Sorry, no books were found. Please try again."})}}u();function T({list_name:s,books:o}){return`
    <li class="book-category-item">
      <p class="book-category">${s}</p>
      <ul class="top-books bestsel-books js-list-rendering">
        ${o.map(t=>`
              <li class="book-card" data-id="${t._id}">
              <div class="book-thumb">
                <img class="book-cover" src="${t.book_image}" alt="${t.title}"/>
                </div>
                <div class="book-descr">
                <h2 class="book-name">${t.title}</h2>
                <h3 class="book-author">${t.author}</h3>
                </div>
              </li>
            `).join("")}
      </ul>
      <button class="book-card-btn" type="button" data-category="${s}">see more</button>
    </li>
  `}async function w(){const s=await u();let o="";for(let e of s)o+=T(e);const r=` <h1 class="collection-title">Best Sellers <span>Books</span></h1>${`<ul class="top-books">${o}</ul>`}`;$.innerHTML=r}w();const a=document.querySelector(".theme-switch-input"),l=document.querySelector("body");function m(){a.checked===!1?(l.classList.add("light-theme"),l.classList.remove("dark-theme"),localStorage.setItem("theme","light")):(l.classList.remove("light-theme"),l.classList.add("dark-theme"),localStorage.setItem("theme","dark"))}const B=localStorage.getItem("theme");B==="dark"?(a.checked=!0,m()):a.checked=!1;a.addEventListener("change",m);const d=document.querySelector(".header-menu");d.addEventListener("click",function(s){s.target.matches(".header-menu-link")&&(d.querySelectorAll(".header-menu-link").forEach(t=>{t.classList.remove("exception")}),s.target.classList.add("exception"))});const h=document.querySelector("#toggle"),i=document.querySelector("body"),g=document.querySelectorAll("p"),f=document.querySelectorAll("h1"),y=document.querySelectorAll("h2"),k=document.querySelectorAll("h3"),b=document.querySelectorAll("h4"),p=document.querySelectorAll("h5"),S=document.querySelectorAll("h6"),L=document.querySelectorAll("a");localStorage.getItem("theme")==="dark"&&(i.classList.add("blackTheme"),h.checked=!0,[g,f,y,k,b,p,S,L].forEach(o=>{o.forEach(t=>{t.classList.add("newText")})}));h.addEventListener("change",function(){[g,f,y,k,b,p,S,L].forEach(o=>{o.forEach(t=>{this.checked?(t.classList.add("newText"),i.classList.add("blackTheme"),localStorage.setItem("theme","dark")):(t.classList.remove("newText"),i.classList.remove("blackTheme"),localStorage.setItem("theme","light"))})})});
//# sourceMappingURL=commonHelpers.js.map
