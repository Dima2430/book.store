import"./assets/sidebar-c1c3702c.js";import{a as h,i as x}from"./assets/vendor-169f9f98.js";const v=document.querySelector(".loader");function M(){v.style.display="flex"}function T(){v.style.display="none"}const N=document.querySelector(".best-books-gallery"),O=h.create({baseURL:"https://books-backend.p.goit.global/books"});async function S(){try{M();const o=await O.get("/top-books");return T(),o.data}catch{x.error({position:"topRight",message:"Sorry, no books were found. Please try again."})}}S();function _({list_name:o,books:e}){return`
    <li class="book-category-item">
      <p class="book-category">${o}</p>
      <ul class="top-books">
        ${e.map(t=>`
              <li class="book-card" data-id="${t._id}">
              <div class="book-card-hover">
                <img class="book-cover" src="${t.book_image}" alt="${t.title}"/>
                <div class="view-more">
                <p class="view-more-text">quick view</p>
                </div>
                </div>
                <div class="book-descr">
                <h2 class="book-name">${t.title}</h2>
                <h3 class="book-author">${t.author}</h3>
                </div>
              </li>
            `).join("")}
      </ul>
      <button class="book-card-btn" type="button" data-category="${o}">see more</button>
    </li>
  `}async function j(){const o=await S();let e="";for(let c of o)e+=_(c);const n=` <h1 class="collection-title">Best Sellers <span>Books</span></h1>${`<ul class="top-books-all">${e}</ul>`}`;N.innerHTML=n}j();const J=document.querySelector(".signup-btn"),B=document.querySelector(".form-container"),R=document.querySelector(".close-btn");J.addEventListener("click",()=>{B.classList.add("visible")});R.addEventListener("click",()=>{B.classList.remove("visible")});const p="local-storage-books";let r,g=r;document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("container"),e=document.getElementById("myModal"),t=document.getElementById("shoppingListBtn"),n=document.getElementById("closeModalBtn"),c=document.getElementById("notification"),i=document.querySelector(".modal-content");o.addEventListener("click",function(s){const l=s.target.closest(".book-card"),a=s.target.closest(".book-card-category");l?(r=l.dataset.id,g=r,console.log(r),f(r)):a&&(r=a.dataset.id,g=r,console.log(r),f(r))}),n.addEventListener("click",function(){b()}),window.addEventListener("click",function(s){s.target===e&&b()}),t.addEventListener("click",function(){k()});function k(){t.dataset.bookId,t.textContent==="Add to shopping list"?(d(),q("Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”."),I()):(C(),A(),m(),t.textContent="Add to shopping list")}async function d(){const s=localStorage.getItem(p);let l;try{l=s?JSON.parse(s):[]}catch(u){console.log("Помилка при парсингу JSON:",u);return}const a={dataId:r};if(l.every(u=>u.dataId!==a.dataId)){l.push(a);const u=JSON.stringify(l);try{localStorage.setItem(p,u)}catch($){console.log("Помилка при зберіганні даних:",$)}}t.textContent="Remove from the shopping list"}async function m(s){const l=JSON.parse(localStorage.getItem(p))||[],a=l.findIndex(u=>u.dataId===g);a!==-1?(l.splice(a,1),localStorage.setItem(p,JSON.stringify(l)),t.textContent="Add to shopping list"):console.log("Book with dataId:",g,"not found in localStorage")}function q(s){c.innerHTML=`<span>${s}</span>`,c.style.display="block"}function C(){c.style.display="none"}function I(){i.classList.add("expanded")}function A(){i.classList.remove("expanded")}function f(s){z(s),e.style.display="block",document.body.style.overflow="hidden"}function b(){e.style.display="none",document.body.style.overflow="auto"}});function z(o){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>{for(const t of e){const n=t.books.find(c=>c._id===o);if(n){D(n);return}}console.error("Book not found.")}).catch(e=>console.error("Error fetching data:",e))}function D(o){const e=document.querySelector(".book_name"),t=document.querySelector(".author"),n=document.querySelector(".description"),c=document.querySelector(".img_modal"),i=document.querySelector('.links a[name="Amazon"]'),k=document.querySelector('.links a[name="Apple Books"]');if(e.textContent=o.title,t.textContent=o.author,n.textContent=o.description,c.src=o.book_image,i){const d=o.buy_links.find(m=>m.name==="Amazon");d&&(i.href=d.url)}if(k){const d=o.buy_links.find(m=>m.name==="Apple Books");d&&(k.href=d.url)}}setInterval(()=>{console.log(localStorage)},2e3);const y=document.querySelector(".scroll-btn"),H=o=>{window.scrollTo({top:o.offsetTop,behavior:"smooth"})},L=()=>{const o=document.querySelector(".collection-title");o?(y.addEventListener("click",()=>{H(o)}),window.addEventListener("scroll",()=>{(window.scrollY||window.pageYOffset)>o.offsetTop?y.classList.add("show-scroll-btn"):y.classList.remove("show-scroll-btn")})):setTimeout(L,100)};L();document.querySelector("#toggle");document.querySelector("body");document.querySelectorAll("p");document.querySelectorAll("h1");document.querySelectorAll("h2");document.querySelectorAll("h3");document.querySelectorAll("h4");document.querySelectorAll("h5");document.querySelectorAll("h6");document.querySelectorAll("a");document.querySelectorAll(".book-card-btn");const Y=document.querySelector(".best-books-gallery"),U=document.querySelectorAll(".sidebar-categories-link");U.forEach(o=>{o.addEventListener("click",function(e){e.preventDefault();const t=this.textContent.trim();G(t)})});async function G(o){try{const e=await w(o);E(e,o)}catch(e){console.error("Error loading books:",e)}}Y.addEventListener("click",P);function P(o){if(o.target.nodeName!=="BUTTON")return;const e=o.target;try{if(e.matches("button[data-category]")){const t=e.dataset.category;w(t).then(n=>{E(n,t)}).catch(n=>{})}}catch(t){console.log(t)}}async function w(o){try{return(await h.get(`https://books-backend.p.goit.global/books/category?category=${o}`)).data}catch(e){console.log(e);return}}function W({_id:o,book_image:e,title:t,author:n}){return`
    <li class="book-card-category" data-id="${o}">
      <div class="book-thumb">
        <img class="book-cover-cat" src="${e}" alt="${t}"/>
        <div class="view-more view-more-cat">
        <p class="view-more-text">quick view</p>
        </div>
        </div>
        <div class="book-descr">
        <h2 class="book-namne-cat">${t}</h2>
        <h3 class="book-author">${n}</h3>
        </div>
      </li>`}function E(o,e){const n=`<ul class="category-books-cat">${o.map(W).join("")}</ul>`,c=`<h2 class="collection-title">${K(e)} <span>${F(e)}</span></h2> ${n}`,i=document.querySelector(".best-books-gallery");i.innerHTML=c}function K(o){let e=o.split(" ");return e.pop(),e.join(" ")}function F(o){let e=o.trim().split(" ");return e[e.length-1]}
//# sourceMappingURL=commonHelpers.js.map
