import{a as p,i as k}from"./assets/vendor-174ee90c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const S=document.querySelector(".best-books-gallery"),L=p.create({baseURL:"https://books-backend.p.goit.global/books"});async function n(){try{return(await L.get("/top-books")).data}catch{k.error({position:"topRight",message:"Sorry, no books were found. Please try again."})}}n();function q({list_name:r,books:o}){return`
    <li class="book-category-item">
      <p class="book-category">${r}</p>
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
      <button class="book-card-btn" type="button" data-category="${r}">see more</button>
    </li>
  `}async function v(){const r=await n();let o="";for(let e of r)o+=q(e);const c=` <h1 class="collection-title">Best Sellers <span>Books</span></h1>${`<ul class="top-books">${o}</ul>`}`;S.innerHTML=c}v();const i=document.querySelector("#toggle"),a=document.querySelector("body"),u=document.querySelectorAll("p"),d=document.querySelectorAll("h1"),m=document.querySelectorAll("h2"),h=document.querySelectorAll("h3"),f=document.querySelectorAll("h4"),y=document.querySelectorAll("h5"),g=document.querySelectorAll("h6"),b=document.querySelectorAll("a");localStorage.getItem("theme")==="dark"&&(a.classList.add("blackTheme"),i.checked=!0,[u,d,m,h,f,y,g,b].forEach(o=>{o.forEach(t=>{t.classList.add("newText")})}));i.addEventListener("change",function(){[u,d,m,h,f,y,g,b].forEach(o=>{o.forEach(t=>{this.checked?(t.classList.add("newText"),a.classList.add("blackTheme"),localStorage.setItem("theme","dark")):(t.classList.remove("newText"),a.classList.remove("blackTheme"),localStorage.setItem("theme","light"))})})});
//# sourceMappingURL=commonHelpers.js.map
