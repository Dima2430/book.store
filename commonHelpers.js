import"./assets/header-1d09e868.js";import{a as S,i as A,S as M}from"./assets/vendor-169f9f98.js";const v=document.querySelector(".loader");function T(){v.style.display="flex"}function N(){v.style.display="none"}const O=document.querySelector(".best-books-gallery"),j=S.create({baseURL:"https://books-backend.p.goit.global/books"});async function B(){try{T();const t=await j.get("/top-books");return N(),t.data}catch{A.error({position:"topRight",message:"Sorry, no books were found. Please try again."})}}B();function z({list_name:t,books:e}){return`
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
  `}async function _(){const t=await B();let e="";for(let s of t)e+=z(s);const n=` <h1 class="collection-title">Best Sellers <span>Books</span></h1>${`<ul class="top-books-all">${e}</ul>`}`;O.innerHTML=n}_();const p="local-storage-books";let d,h=d;document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("container"),e=document.getElementById("myModal"),o=document.getElementById("shoppingListBtn"),n=document.getElementById("closeModalBtn"),s=document.getElementById("notification"),l=document.querySelector(".modal-content");t.addEventListener("click",function(i){const r=i.target.closest(".book-card");r&&(d=r.dataset.id,h=d,console.log(d),$(d))}),n.addEventListener("click",function(){b()}),window.addEventListener("click",function(i){i.target===e&&b()}),o.addEventListener("click",function(){m()});function m(){o.dataset.bookId,o.textContent==="Add to shopping list"?(c(),x("Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”."),q()):(E(),C(),u(),o.textContent="Add to shopping list")}async function c(){const i=localStorage.getItem(p);let r;try{r=i?JSON.parse(i):[]}catch(a){console.log("Помилка при парсингу JSON:",a);return}const g={dataId:d};if(r.every(a=>a.dataId!==g.dataId)){r.push(g);const a=JSON.stringify(r);try{localStorage.setItem(p,a)}catch(I){console.log("Помилка при зберіганні даних:",I)}}o.textContent="Remove from the shopping list"}async function u(i){const r=JSON.parse(localStorage.getItem(p))||[],g=r.findIndex(a=>a.dataId===h);g!==-1?(r.splice(g,1),localStorage.setItem(p,JSON.stringify(r)),o.textContent="Add to shopping list"):console.log("Book with dataId:",h,"not found in localStorage")}function x(i){s.innerHTML=`<span>${i}</span>`,s.style.display="block"}function E(){s.style.display="none"}function q(){l.classList.add("expanded")}function C(){l.classList.remove("expanded")}function $(i){H(i),e.style.display="block",document.body.style.overflow="hidden"}function b(){e.style.display="none",document.body.style.overflow="auto"}});function H(t){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>{for(const o of e){const n=o.books.find(s=>s._id===t);if(n){J(n);return}}console.error("Book not found.")}).catch(e=>console.error("Error fetching data:",e))}function J(t){const e=document.querySelector(".book_name"),o=document.querySelector(".author"),n=document.querySelector(".description"),s=document.querySelector(".img_modal"),l=document.querySelector('.links a[name="Amazon"]'),m=document.querySelector('.links a[name="Apple Books"]');if(e.textContent=t.title,o.textContent=t.author,n.textContent=t.description,s.src=t.book_image,l){const c=t.buy_links.find(u=>u.name==="Amazon");c&&(l.href=c.url)}if(m){const c=t.buy_links.find(u=>u.name==="Apple Books");c&&(m.href=c.url)}}setInterval(()=>{console.log(localStorage)},2e3);const y=document.querySelector(".scroll-btn"),P=t=>{window.scrollTo({top:t.offsetTop,behavior:"smooth"})},L=()=>{const t=document.querySelector(".collection-title");t?(y.addEventListener("click",()=>{P(t)}),window.addEventListener("scroll",()=>{(window.scrollY||window.pageYOffset)>t.offsetTop?y.classList.add("show-scroll-btn"):y.classList.remove("show-scroll-btn")})):setTimeout(L,100)};L();const R=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/save.png",img2x:"./img/save.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/hope.png",img2x:"./img/hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/united.png",img2x:"./img/united.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/medical.png",img2x:"./img/medical.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/medicins.png",img2x:"./img/medicins.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/razom.png",img2x:"./img/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/action.png",img2x:"./img/action.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/world.png",img2x:"./img/world.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/prytula.png",img2x:"./img/prytula.png"}],W=({title:t,url:e,img:o,img2x:n},s)=>`<li class="block-list-item swiper-slide"> 
          <span class="fund-number">${s}</span>
          <a class="block-link" href="${e}" target="_blank">
            <img class="fund-logo" srcset="${o} 1x, ${n} 2x" src="${o}" alt="${t}" loading="lazy" />
          </a>
        </li>`,D=document.querySelector(".support-list"),F=document.querySelector(".support-button");let w=0;const Y=t=>String(t).padStart(2,"0"),U=R.map((t,e)=>(w=Y(e+1),W(t,w))).join("");D.innerHTML=U;const k=new M(".swiper",{direction:"vertical",spaceBetween:20,slidesPerView:"auto",rewind:!0,navigation:{nextEl:".support-button"}});k.update();let f=!1;const G=()=>{const t=k.slides.length-1;window.innerWidth<768?k.slideNext():(k.slideTo(f?0:t),f=!f)};F.addEventListener("click",G);document.querySelector("#toggle");document.querySelector("body");document.querySelectorAll("p");document.querySelectorAll("h1");document.querySelectorAll("h2");document.querySelectorAll("h3");document.querySelectorAll("h4");document.querySelectorAll("h5");document.querySelectorAll("h6");document.querySelectorAll("a");document.querySelectorAll(".book-card-btn");const Z=document.querySelector(".best-books-gallery");Z.addEventListener("click",K);function K(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target;try{if(e.matches("button[data-category]")){const o=e.dataset.category;V(o).then(n=>{X(n,o)}).catch(n=>{})}}catch(o){console.log(o)}}async function V(t){try{return(await S.get(`https://books-backend.p.goit.global/books/category?category=${t}`)).data}catch(e){console.log(e);return}}function Q({_id:t,book_image:e,title:o,author:n}){return`
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
      </li>`}function X(t,e){const n=`<ul class="category-books-cat">${t.map(Q).join("")}</ul>`,s=`<h2 class="collection-title">${tt(e)} <span>${et(e)}</span></h2> ${n}`,l=document.querySelector(".best-books-gallery");l.innerHTML=s}function tt(t){let e=t.split(" ");return e.pop(),e.join(" ")}function et(t){let e=t.trim().split(" ");return e[e.length-1]}
//# sourceMappingURL=commonHelpers.js.map
