import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as S,i as B}from"./assets/vendor-174ee90c.js";const E=document.querySelector(".best-books-gallery"),q=S.create({baseURL:"https://books-backend.p.goit.global/books"});async function b(){try{return(await q.get("/top-books")).data}catch{B.error({position:"topRight",message:"Sorry, no books were found. Please try again."})}}b();function w({list_name:e,books:o}){return`
    <li class="book-category-item">
      <p class="book-category">${e}</p>
      <ul class="top-books">
        ${o.map(t=>`
              <li class="book-card" data-id="${t._id}">
              <div class="book-card-hover">
                <img class="book-cover" src="${t.book_image}" alt="${t.title}"/>
                <div class="book-descr">
                <h2 class="book-name">${t.title}</h2>
                <h3 class="book-author">${t.author}</h3>
                </div>
                <div class="view-more">
                <p class="view-more-text">Click for view more information and buy it</p>
                </div>
                </div>
              </li>
            `).join("")}
      </ul>
      <button class="book-card-btn" type="button" data-category="${e}">see more</button>
    </li>
  `}async function C(){const e=await b();let o="";for(let c of e)o+=w(c);const n=` <h1 class="collection-title">Best Sellers <span>Books</span></h1>${`<ul class="top-books-all">${o}</ul>`}`;E.innerHTML=n}C();document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("openModalBtn"),o=document.getElementById("closeModalBtn"),t=document.getElementById("myModal");e.addEventListener("click",function(){t.style.display="block",document.body.style.overflow="hidden"}),o.addEventListener("click",function(){t.style.display="none",document.body.style.overflow="auto"}),window.addEventListener("click",function(n){n.target===t&&(t.style.display="none",document.body.style.overflow="auto")}),document.addEventListener("keydown",function(n){n.key==="Escape"&&t.style.display==="block"&&(t.style.display="none",document.body.style.overflow="auto")})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("shoppingListBtn"),o=document.getElementById("notification"),t=document.querySelector(".modal-content");e.addEventListener("click",function(){n()});function n(){const s=openModalBtn.dataset.bookId,l=JSON.parse(localStorage.getItem("books_for_list"))||{};e.textContent==="Add to shopping list"?(c(s,l),u("Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”."),d()):(r(s,l),i(),v())}function c(s,l){l[s]=!0,localStorage.setItem("books_for_list",JSON.stringify(l)),alert("Додано до локального сховища!"),e.textContent="Remove from the shopping list"}function r(s,l){delete l[s],localStorage.setItem("books_for_list",JSON.stringify(l)),alert("Видалено з локального сховища!"),e.textContent="Add to shopping list"}function u(s){o.innerHTML=`<span>${s}</span>`,o.style.display="block"}function i(){o.style.display="none"}function d(){t.classList.add("expanded")}function v(){t.classList.remove("expanded")}});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("openModalBtn"),o=document.getElementById("myModal");e.addEventListener("click",function(){const t=e.dataset.bookId;(JSON.parse(localStorage.getItem("books_for_list"))||{})[t]?shoppingListBtn.textContent="Remove from the shopping list":shoppingListBtn.textContent="Add to shopping list",I(t),o.style.display="block"})});function I(e){fetch("https://books-backend.p.goit.global/books/top-books").then(o=>o.json()).then(o=>{for(const t of o){const n=t.books.find(c=>c._id===e);if(n){M(n);return}}console.error("Book not found.")}).catch(o=>console.error("Error fetching data:",o))}function M(e){const o=document.querySelector(".book_name"),t=document.querySelector(".author"),n=document.querySelector(".description"),c=document.querySelector(".img_modal"),r=document.querySelector('.links a[name="Amazon"]'),u=document.querySelector('.links a[name="Apple Books"]');if(o.textContent=e.title,t.textContent=e.author,n.textContent=e.description,c.src=e.book_image,r){const i=e.buy_links.find(d=>d.name==="Amazon");i&&(r.href=i.url)}if(u){const i=e.buy_links.find(d=>d.name==="Apple Books");i&&(u.href=i.url)}}const a=document.querySelector(".theme-switch-input"),m=document.querySelector("body"),p=document.querySelector(".menu-open-btn"),h=document.querySelector(".menu-close-btn");function k(){a.checked===!1?(m.classList.add("light-theme"),m.classList.remove("dark-theme"),localStorage.setItem("theme","light")):(m.classList.remove("light-theme"),m.classList.add("dark-theme"),localStorage.setItem("theme","dark"))}const A=localStorage.getItem("theme");A==="dark"?(a.checked=!0,k()):a.checked=!1;a.addEventListener("change",k);a.addEventListener("click",k);function f(){const e=document.querySelector("body");e.classList.contains("dark-theme")?e.style.color="white":e.style.color="black"}f();a.addEventListener("change",f);a.addEventListener("click",f);const g=document.querySelector(".header-menu");g.addEventListener("click",function(e){e.target.matches(".header-menu-link")&&(g.querySelectorAll(".header-menu-link").forEach(t=>{t.classList.remove("exception")}),e.target.classList.add("exception"))});p.addEventListener("click",()=>{mobMenu.classList.add("is-open"),p.classList.remove("is-open"),p.classList.add("hidden"),h.classList.remove("hidden")});h.addEventListener("click",()=>{mobMenu.classList.remove("is-open"),p.classList.remove("hidden"),h.classList.add("hidden")});document.querySelector(".loader");const y=document.querySelector(".scroll-btn"),L=elem.offsetTop;y.addEventListener("click",()=>{window.scrollTo({top:L,behavior:"smooth"})});window.addEventListener("scroll",()=>{(window.scrollY||window.pageYOffset)>L?y.classList.add("show-scroll-btn"):y.classList.remove("show-scroll-btn")});document.querySelector("#toggle");document.querySelector("body");document.querySelectorAll("p");document.querySelectorAll("h1");document.querySelectorAll("h2");document.querySelectorAll("h3");document.querySelectorAll("h4");document.querySelectorAll("h5");document.querySelectorAll("h6");document.querySelectorAll("a");
//# sourceMappingURL=commonHelpers.js.map
