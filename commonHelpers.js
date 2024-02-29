import{S as p,o as w}from"./assets/header-be8c3040.js";import{a as f,i as C}from"./assets/vendor-174ee90c.js";const h=document.querySelector(".loader");function $(){h.style.display="flex"}function A(){h.style.display="none"}const x=document.querySelector(".best-books-gallery"),M=f.create({baseURL:"https://books-backend.p.goit.global/books"});async function b(){try{$();const o=await M.get("/top-books");return A(),o.data}catch{C.error({position:"topRight",message:"Sorry, no books were found. Please try again."})}}b();function I({list_name:o,books:e}){return`
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
  `}async function T(){const o=await b();let e="";for(let l of o)e+=I(l);const s=` <h1 class="collection-title">Best Sellers <span>Books</span></h1>${`<ul class="top-books-all">${e}</ul>`}`;x.innerHTML=s}T();document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("container"),e=document.getElementById("myModal"),t=document.getElementById("shoppingListBtn"),s=document.getElementById("closeModalBtn"),l=document.getElementById("notification"),a=document.querySelector(".modal-content");o.addEventListener("click",function(n){const c=n.target.closest(".book-card");if(c){const q=c.dataset.id;E(q)}}),s.addEventListener("click",function(){m()}),window.addEventListener("click",function(n){n.target===e&&m()}),document.addEventListener("keydown",function(n){n.key==="Escape"&&e.style.display==="block"&&m()}),t.addEventListener("click",function(){d()});function d(){const n=t.dataset.bookId,c=JSON.parse(localStorage.getItem(p))||{};t.textContent==="Add to shopping list"?(r(n,c),v("Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”."),L()):(i(n,c),y(),B())}function r(n,c){c[n]=addedBook,localStorage.setItem(p,JSON.stringify(c)),w(),t.textContent="Remove from the shopping list"}function i(n,c){delete c[n],localStorage.setItem(p,JSON.stringify(c)),t.textContent="Add to shopping list",y()}function v(n){l.innerHTML=`<span>${n}</span>`,l.style.display="block"}function y(){l.style.display="none"}function L(){a.classList.add("expanded")}function B(){a.classList.remove("expanded")}function E(n){(JSON.parse(localStorage.getItem("books_for_list"))||{})[n]?t.textContent="Remove from the shopping list":t.textContent="Add to shopping list",_(n),e.style.display="block",document.body.style.overflow="hidden"}function m(){e.style.display="none",document.body.style.overflow="auto"}});function _(o){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>{for(const t of e){const s=t.books.find(l=>l._id===o);if(s){N(s);return}}console.error("Book not found.")}).catch(e=>console.error("Error fetching data:",e))}function N(o){const e=document.querySelector(".book_name"),t=document.querySelector(".author"),s=document.querySelector(".description"),l=document.querySelector(".img_modal"),a=document.querySelector('.links a[name="Amazon"]'),d=document.querySelector('.links a[name="Apple Books"]');if(e.textContent=o.title,t.textContent=o.author,s.textContent=o.description,l.src=o.book_image,a){const r=o.buy_links.find(i=>i.name==="Amazon");r&&(a.href=r.url)}if(d){const r=o.buy_links.find(i=>i.name==="Apple Books");r&&(d.href=r.url)}}const k=document.querySelector(".scroll-btn"),O=o=>{window.scrollTo({top:o.offsetTop,behavior:"smooth"})},S=()=>{const o=document.querySelector(".collection-title");o?(k.addEventListener("click",()=>{O(o)}),window.addEventListener("scroll",()=>{(window.scrollY||window.pageYOffset)>o.offsetTop?k.classList.add("show-scroll-btn"):k.classList.remove("show-scroll-btn")})):setTimeout(S,100)};S();document.querySelector("#toggle");document.querySelector("body");document.querySelectorAll("p");document.querySelectorAll("h1");document.querySelectorAll("h2");document.querySelectorAll("h3");document.querySelectorAll("h4");document.querySelectorAll("h5");document.querySelectorAll("h6");document.querySelectorAll("a");const g=document.querySelector(".book-card-btn");let u="";g.addEventListener("click",function(){u=g.dataset.category,console.log(u),R(u).then(o=>{H(o,u)}).catch(o=>{})});async function R(o){try{return(await f.get(`https://books-backend.p.goit.global/books/category?category=${o}`)).data}catch(e){console.log(e);return}}function z({_id:o,book_image:e,title:t,author:s}){return`
    <li class="book-card" data-id="${o}">
      <div class="book-thumb">
        <img class="book-cover" src="${e}" alt="${t}"/>
        </div>
        <div class="book-descr">
        <h2 class="book-name">${t}</h2>
        <h3 class="book-author">${s}</h3>
        </div>
      </li>`}function H(o,e){const t=o.map(z).join(""),s=`<ul class="category-books">${t}</ul>`,l=`<h2 class="category-title">${e}</h2>${s}`;console.log(t);const a=document.querySelector(".best-books-gallery");a.innerHTML=l}
//# sourceMappingURL=commonHelpers.js.map
