import"./assets/sidebar-e534f703.js";import{a as h,i as x}from"./assets/vendor-169f9f98.js";const w=document.querySelector(".loader");function M(){w.style.display="flex"}function T(){w.style.display="none"}const N=document.querySelector(".best-books-gallery"),O=h.create({baseURL:"https://books-backend.p.goit.global/books"});async function E(){try{M();const o=await O.get("/top-books");return T(),o.data}catch{x.error({position:"topRight",message:"Sorry, no books were found. Please try again."})}}E();function R({list_name:o,books:t}){return`
    <li class="book-category-item">
      <p class="book-category">${o}</p>
      <ul class="top-books">
        ${t.map(e=>`
              <li class="book-card" data-id="${e._id}">
              <div class="book-card-hover">
                <img class="book-cover" src="${e.book_image}" alt="${e.title}"/>
                <div class="view-more">
                <p class="view-more-text">quick view</p>
                </div>
                </div>
                <div class="book-descr">
                <h2 class="book-name">${e.title}</h2>
                <h3 class="book-author">${e.author}</h3>
                </div>
              </li>
            `).join("")}
      </ul>
      <button class="book-card-btn" type="button" data-category="${o}">see more</button>
    </li>
  `}async function J(){const o=await E();let t="";for(let i of o)t+=R(i);const s=` <h1 class="collection-title">Best Sellers <span>Books</span></h1>${`<ul class="top-books-all">${t}</ul>`}`;N.innerHTML=s}J();const p="local-storage-books";let a,k=a;document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("container"),t=document.getElementById("myModal"),e=document.getElementById("shoppingListBtn"),s=document.getElementById("closeModalBtn"),i=document.getElementById("notification"),d=document.querySelector(".modal-content");function g(c){const n=localStorage.getItem(p);let l;try{l=n?JSON.parse(n):[]}catch(r){return console.log("Помилка при парсингу JSON:",r),!1}return l.some(r=>r.dataId===c)}o.addEventListener("click",function(c){const n=c.target.closest(".book-card"),l=c.target.closest(".book-card-category");n?(a=n.dataset.id,k=a,console.log(a),B(a)):l&&(a=l.dataset.id,k=a,console.log(a),B(a))}),s.addEventListener("click",function(){L()}),window.addEventListener("click",function(c){c.target===t&&L()}),e.addEventListener("click",function(){u()});function u(){e.dataset.bookId,e.textContent==="Add to shopping list"?(m(),f("Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”."),S()):(b(),v(),A(),e.textContent="Add to shopping list")}async function m(){const c=localStorage.getItem(p);let n;try{n=c?JSON.parse(c):[]}catch(r){console.log("Помилка при парсингу JSON:",r);return}const l={dataId:a};if(n.every(r=>r.dataId!==l.dataId)){n.push(l);const r=JSON.stringify(n);try{localStorage.setItem(p,r)}catch($){console.log("Помилка при зберіганні даних:",$)}}e.textContent="Remove from the shopping list"}async function A(c){const n=JSON.parse(localStorage.getItem(p))||[],l=n.findIndex(r=>r.dataId===k);l!==-1?(n.splice(l,1),localStorage.setItem(p,JSON.stringify(n)),e.textContent="Add to shopping list"):console.log("Book with dataId:",k,"not found in localStorage")}function f(c){i.innerHTML=`<span>${c}</span>`,i.style.display="block"}function b(){i.style.display="none"}function S(){d.classList.add("expanded")}function v(){d.classList.remove("expanded")}function B(c){_(c);const n=g(a),l=document.getElementById("shoppingListBtn");n?(l.textContent="Remove from shopping list",f("Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”."),S()):(l.textContent="Add to shopping list",b(),v()),t.style.display="block",document.body.style.overflow="hidden"}function L(){t.style.display="none",document.body.style.overflow="auto"}});async function _(o){const t=`https://books-backend.p.goit.global/books/${o}`;try{const s=(await h.get(t)).data;return j(s),s}catch{console.log("Результатів не знайдено.")}}function j(o){const t=document.querySelector(".book_name"),e=document.querySelector(".author"),s=document.querySelector(".description"),i=document.querySelector(".img_modal"),d=document.querySelector('.links a[name="Amazon"]'),g=document.querySelector('.links a[name="Apple Books"]');if(t.textContent=o.title,e.textContent=o.author,s.textContent=o.description,i.src=o.book_image,d){const u=o.buy_links.find(m=>m.name==="Amazon");u&&(d.href=u.url)}if(g){const u=o.buy_links.find(m=>m.name==="Apple Books");u&&(g.href=u.url)}}const y=document.querySelector(".scroll-btn"),z=o=>{window.scrollTo({top:o.offsetTop,behavior:"smooth"})},q=()=>{const o=document.querySelector(".collection-title");o?(y.addEventListener("click",()=>{z(o)}),window.addEventListener("scroll",()=>{(window.scrollY||window.pageYOffset)>o.offsetTop?y.classList.add("show-scroll-btn"):y.classList.remove("show-scroll-btn")})):setTimeout(q,100)};q();document.querySelector("#toggle");document.querySelector("body");document.querySelectorAll("p");document.querySelectorAll("h1");document.querySelectorAll("h2");document.querySelectorAll("h3");document.querySelectorAll("h4");document.querySelectorAll("h5");document.querySelectorAll("h6");document.querySelectorAll("a");document.querySelectorAll(".book-card-btn");const Y=document.querySelector(".best-books-gallery"),H=document.querySelectorAll(".sidebar-categories-link");H.forEach(o=>{o.addEventListener("click",function(t){t.preventDefault();const e=this.textContent.trim();D(e)})});async function D(o){try{const t=await C(o);I(t,o)}catch(t){console.error("Error loading books:",t)}}Y.addEventListener("click",U);function U(o){if(o.target.nodeName!=="BUTTON")return;const t=o.target;try{if(t.matches("button[data-category]")){const e=t.dataset.category;C(e).then(s=>{I(s,e)}).catch(s=>{})}}catch(e){console.log(e)}}async function C(o){try{return(await h.get(`https://books-backend.p.goit.global/books/category?category=${o}`)).data}catch(t){console.log(t);return}}function G({_id:o,book_image:t,title:e,author:s}){return`
    <li class="book-card-category" data-id="${o}">
      <div class="book-thumb">
        <img class="book-cover-cat" src="${t}" alt="${e}"/>
        <div class="view-more view-more-cat">
        <p class="view-more-text">quick view</p>
        </div>
        </div>
        <div class="book-descr">
        <h2 class="book-namne-cat">${e}</h2>
        <h3 class="book-author">${s}</h3>
        </div>
      </li>`}function I(o,t){const s=`<ul class="category-books-cat">${o.map(G).join("")}</ul>`,i=`<h2 class="collection-title">${P(t)} <span>${W(t)}</span></h2> ${s}`,d=document.querySelector(".best-books-gallery");d.innerHTML=i}function P(o){let t=o.split(" ");return t.pop(),t.join(" ")}function W(o){let t=o.trim().split(" ");return t[t.length-1]}
//# sourceMappingURL=commonHelpers.js.map
