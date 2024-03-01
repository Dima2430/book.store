import"./assets/header-1d09e868.js";import{a as v,i as M,S as T}from"./assets/vendor-169f9f98.js";const S=document.querySelector(".loader");function N(){S.style.display="flex"}function O(){S.style.display="none"}const j=document.querySelector(".best-books-gallery"),z=v.create({baseURL:"https://books-backend.p.goit.global/books"});async function L(){try{N();const t=await z.get("/top-books");return O(),t.data}catch{M.error({position:"topRight",message:"Sorry, no books were found. Please try again."})}}L();function _({list_name:t,books:e}){return`
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
  `}async function H(){const t=await L();let e="";for(let s of t)e+=_(s);const n=` <h1 class="collection-title">Best Sellers <span>Books</span></h1>${`<ul class="top-books-all">${e}</ul>`}`;j.innerHTML=n}H();const J=document.querySelector(".signup-btn"),B=document.querySelector(".form-container"),P=document.querySelector(".close-btn");J.addEventListener("click",()=>{B.classList.add("visible")});P.addEventListener("click",()=>{B.classList.remove("visible")});const p="local-storage-books";let d,h=d;document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("container"),e=document.getElementById("myModal"),o=document.getElementById("shoppingListBtn"),n=document.getElementById("closeModalBtn"),s=document.getElementById("notification"),l=document.querySelector(".modal-content");t.addEventListener("click",function(i){const r=i.target.closest(".book-card");r&&(d=r.dataset.id,h=d,console.log(d),I(d))}),n.addEventListener("click",function(){b()}),window.addEventListener("click",function(i){i.target===e&&b()}),o.addEventListener("click",function(){m()});function m(){o.dataset.bookId,o.textContent==="Add to shopping list"?(c(),E("Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”."),C()):(x(),$(),u(),o.textContent="Add to shopping list")}async function c(){const i=localStorage.getItem(p);let r;try{r=i?JSON.parse(i):[]}catch(a){console.log("Помилка при парсингу JSON:",a);return}const g={dataId:d};if(r.every(a=>a.dataId!==g.dataId)){r.push(g);const a=JSON.stringify(r);try{localStorage.setItem(p,a)}catch(A){console.log("Помилка при зберіганні даних:",A)}}o.textContent="Remove from the shopping list"}async function u(i){const r=JSON.parse(localStorage.getItem(p))||[],g=r.findIndex(a=>a.dataId===h);g!==-1?(r.splice(g,1),localStorage.setItem(p,JSON.stringify(r)),o.textContent="Add to shopping list"):console.log("Book with dataId:",h,"not found in localStorage")}function E(i){s.innerHTML=`<span>${i}</span>`,s.style.display="block"}function x(){s.style.display="none"}function C(){l.classList.add("expanded")}function $(){l.classList.remove("expanded")}function I(i){R(i),e.style.display="block",document.body.style.overflow="hidden"}function b(){e.style.display="none",document.body.style.overflow="auto"}});function R(t){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>{for(const o of e){const n=o.books.find(s=>s._id===t);if(n){W(n);return}}console.error("Book not found.")}).catch(e=>console.error("Error fetching data:",e))}function W(t){const e=document.querySelector(".book_name"),o=document.querySelector(".author"),n=document.querySelector(".description"),s=document.querySelector(".img_modal"),l=document.querySelector('.links a[name="Amazon"]'),m=document.querySelector('.links a[name="Apple Books"]');if(e.textContent=t.title,o.textContent=t.author,n.textContent=t.description,s.src=t.book_image,l){const c=t.buy_links.find(u=>u.name==="Amazon");c&&(l.href=c.url)}if(m){const c=t.buy_links.find(u=>u.name==="Apple Books");c&&(m.href=c.url)}}setInterval(()=>{console.log(localStorage)},2e3);const y=document.querySelector(".scroll-btn"),D=t=>{window.scrollTo({top:t.offsetTop,behavior:"smooth"})},q=()=>{const t=document.querySelector(".collection-title");t?(y.addEventListener("click",()=>{D(t)}),window.addEventListener("scroll",()=>{(window.scrollY||window.pageYOffset)>t.offsetTop?y.classList.add("show-scroll-btn"):y.classList.remove("show-scroll-btn")})):setTimeout(q,100)};q();const F=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/save.png",img2x:"./img/save.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/hope.png",img2x:"./img/hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/united.png",img2x:"./img/united.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/medical.png",img2x:"./img/medical.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/medicins.png",img2x:"./img/medicins.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/razom.png",img2x:"./img/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/action.png",img2x:"./img/action.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/world.png",img2x:"./img/world.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/prytula.png",img2x:"./img/prytula.png"}],U=({title:t,url:e,img:o,img2x:n},s)=>`<li class="block-list-item swiper-slide"> 
          <span class="fund-number">${s}</span>
          <a class="block-link" href="${e}" target="_blank">
            <img class="fund-logo" srcset="${o} 1x, ${n} 2x" src="${o}" alt="${t}" loading="lazy" />
          </a>
        </li>`,Y=document.querySelector(".support-list"),G=document.querySelector(".support-button");let w=0;const Z=t=>String(t).padStart(2,"0"),K=F.map((t,e)=>(w=Z(e+1),U(t,w))).join("");Y.innerHTML=K;const k=new T(".swiper",{direction:"vertical",spaceBetween:20,slidesPerView:"auto",rewind:!0,navigation:{nextEl:".support-button"}});k.update();let f=!1;const V=()=>{const t=k.slides.length-1;window.innerWidth<768?k.slideNext():(k.slideTo(f?0:t),f=!f)};G.addEventListener("click",V);document.querySelector("#toggle");document.querySelector("body");document.querySelectorAll("p");document.querySelectorAll("h1");document.querySelectorAll("h2");document.querySelectorAll("h3");document.querySelectorAll("h4");document.querySelectorAll("h5");document.querySelectorAll("h6");document.querySelectorAll("a");document.querySelectorAll(".book-card-btn");const Q=document.querySelector(".best-books-gallery");Q.addEventListener("click",X);function X(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target;try{if(e.matches("button[data-category]")){const o=e.dataset.category;tt(o).then(n=>{ot(n,o)}).catch(n=>{})}}catch(o){console.log(o)}}async function tt(t){try{return(await v.get(`https://books-backend.p.goit.global/books/category?category=${t}`)).data}catch(e){console.log(e);return}}function et({_id:t,book_image:e,title:o,author:n}){return`
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
      </li>`}function ot(t,e){const n=`<ul class="category-books-cat">${t.map(et).join("")}</ul>`,s=`<h2 class="collection-title">${nt(e)} <span>${st(e)}</span></h2> ${n}`,l=document.querySelector(".best-books-gallery");l.innerHTML=s}function nt(t){let e=t.split(" ");return e.pop(),e.join(" ")}function st(t){let e=t.trim().split(" ");return e[e.length-1]}
//# sourceMappingURL=commonHelpers.js.map