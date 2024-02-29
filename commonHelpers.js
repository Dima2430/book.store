import{S as g,o as q}from"./assets/header-1c5dacea.js";import{a as f,i as C,S as $}from"./assets/vendor-169f9f98.js";const b=document.querySelector(".loader");function M(){b.style.display="flex"}function A(){b.style.display="none"}const T=document.querySelector(".best-books-gallery"),I=f.create({baseURL:"https://books-backend.p.goit.global/books"});async function w(){try{M();const t=await I.get("/top-books");return A(),t.data}catch{C.error({position:"topRight",message:"Sorry, no books were found. Please try again."})}}w();function N({list_name:t,books:e}){return`
    <li class="book-category-item">
      <p class="book-category">${t}</p>
      <ul class="top-books">
        ${e.map(o=>`
              <li class="book-card" data-id="${o._id}">
              <div class="book-card-hover">
                <img class="book-cover" src="${o.book_image}" alt="${o.title}"/>
                <div class="view-more">
                <p class="view-more-text">quick view</p>
                </div>
                </div>
                <div class="book-descr">
                <h2 class="book-name">${o.title}</h2>
                <h3 class="book-author">${o.author}</h3>
                </div>
              </li>
            `).join("")}
      </ul>
      <button class="book-card-btn" type="button" data-category="${t}">see more</button>
    </li>
  `}async function _(){const t=await w();let e="";for(let i of t)e+=N(i);const n=` <h1 class="collection-title">Best Sellers <span>Books</span></h1>${`<ul class="top-books-all">${e}</ul>`}`;T.innerHTML=n}_();document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("container"),e=document.getElementById("myModal"),o=document.getElementById("shoppingListBtn"),n=document.getElementById("closeModalBtn"),i=document.getElementById("notification"),l=document.querySelector(".modal-content");t.addEventListener("click",function(s){const r=s.target.closest(".book-card");if(r){const x=r.dataset.id;E(x)}}),n.addEventListener("click",function(){m()}),window.addEventListener("click",function(s){s.target===e&&m()}),document.addEventListener("keydown",function(s){s.key==="Escape"&&e.style.display==="block"&&m()}),o.addEventListener("click",function(){d()});function d(){const s=o.dataset.bookId,r=JSON.parse(localStorage.getItem(g))||{};o.textContent==="Add to shopping list"?(c(s,r),S("Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”."),L()):(a(s,r),h(),B())}function c(s,r){r[s]=addedBook,localStorage.setItem(g,JSON.stringify(r)),q(),o.textContent="Remove from the shopping list"}function a(s,r){delete r[s],localStorage.setItem(g,JSON.stringify(r)),o.textContent="Add to shopping list",h()}function S(s){i.innerHTML=`<span>${s}</span>`,i.style.display="block"}function h(){i.style.display="none"}function L(){l.classList.add("expanded")}function B(){l.classList.remove("expanded")}function E(s){(JSON.parse(localStorage.getItem("books_for_list"))||{})[s]?o.textContent="Remove from the shopping list":o.textContent="Add to shopping list",O(s),e.style.display="block",document.body.style.overflow="hidden"}function m(){e.style.display="none",document.body.style.overflow="auto"}});function O(t){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>{for(const o of e){const n=o.books.find(i=>i._id===t);if(n){z(n);return}}console.error("Book not found.")}).catch(e=>console.error("Error fetching data:",e))}function z(t){const e=document.querySelector(".book_name"),o=document.querySelector(".author"),n=document.querySelector(".description"),i=document.querySelector(".img_modal"),l=document.querySelector('.links a[name="Amazon"]'),d=document.querySelector('.links a[name="Apple Books"]');if(e.textContent=t.title,o.textContent=t.author,n.textContent=t.description,i.src=t.book_image,l){const c=t.buy_links.find(a=>a.name==="Amazon");c&&(l.href=c.url)}if(d){const c=t.buy_links.find(a=>a.name==="Apple Books");c&&(d.href=c.url)}}const p=document.querySelector(".scroll-btn"),H=t=>{window.scrollTo({top:t.offsetTop,behavior:"smooth"})},v=()=>{const t=document.querySelector(".collection-title");t?(p.addEventListener("click",()=>{H(t)}),window.addEventListener("scroll",()=>{(window.scrollY||window.pageYOffset)>t.offsetTop?p.classList.add("show-scroll-btn"):p.classList.remove("show-scroll-btn")})):setTimeout(v,100)};v();const R=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/save.png",img2x:"./img/save.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/hope.png",img2x:"./img/hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/united.png",img2x:"./img/united.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/medical.png",img2x:"./img/medical.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/medicins.png",img2x:"./img/medicins.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/razom.png",img2x:"./img/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/action.png",img2x:"./img/action.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/world.png",img2x:"./img/world.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/prytula.png",img2x:"./img/prytula.png"}],j=({title:t,url:e,img:o,img2x:n},i)=>`<li class="block-list-item swiper-slide"> 
          <span class="fund-number">${i}</span>
          <a class="block-link" href="${e}" target="_blank">
            <img class="fund-logo" srcset="${o} 1x, ${n} 2x" src="${o}" alt="${t}" loading="lazy" />
          </a>
        </li>`,P=document.querySelector(".support-list"),F=document.querySelector(".support-button");let y=0;const J=t=>String(t).padStart(2,"0"),W=R.map((t,e)=>(y=J(e+1),j(t,y))).join("");P.innerHTML=W;const u=new $(".swiper",{direction:"vertical",spaceBetween:20,slidesPerView:"auto",rewind:!0,navigation:{nextEl:".support-button"}});u.update();let k=!1;const Y=()=>{const t=u.slides.length-1;window.innerWidth<768?u.slideNext():(u.slideTo(k?0:t),k=!k)};F.addEventListener("click",Y);document.querySelector("#toggle");document.querySelector("body");document.querySelectorAll("p");document.querySelectorAll("h1");document.querySelectorAll("h2");document.querySelectorAll("h3");document.querySelectorAll("h4");document.querySelectorAll("h5");document.querySelectorAll("h6");document.querySelectorAll("a");document.querySelectorAll(".book-card-btn");const D=document.querySelector(".best-books-gallery");D.addEventListener("click",U);function U(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target;try{if(e.matches("button[data-category]")){const o=e.dataset.category;G(o).then(n=>{K(n,o)}).catch(n=>{})}}catch(o){console.log(o)}}async function G(t){try{return(await f.get(`https://books-backend.p.goit.global/books/category?category=${t}`)).data}catch(e){console.log(e);return}}function Z({_id:t,book_image:e,title:o,author:n}){return`
    <li class="book-card-category" data-id="${t}">
      <div class="book-thumb">
        <img class="book-cover-cat" src="${e}" alt="${o}"/>
        <div class="view-more view-more-cat">
        <p class="view-more-text">quick view</p>
        </div>
        </div>
        <div class="book-descr">
        <h2 class="book-namne-cat">${o}</h2>
        <h3 class="book-author">${n}</h3>
        </div>
      </li>`}function K(t,e){const n=`<ul class="category-books-cat">${t.map(Z).join("")}</ul>`,i=`<h2 class="category-title">${e}</h2>${n}`,l=document.querySelector(".best-books-gallery");l.innerHTML=i}
//# sourceMappingURL=commonHelpers.js.map
