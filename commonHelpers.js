import{S as g,o as $}from"./assets/header-be8c3040.js";import{a as w,i as M,S as A}from"./assets/vendor-b339ad93.js";const S=document.querySelector(".loader");function I(){S.style.display="flex"}function T(){S.style.display="none"}const _=document.querySelector(".best-books-gallery"),N=w.create({baseURL:"https://books-backend.p.goit.global/books"});async function v(){try{I();const t=await N.get("/top-books");return T(),t.data}catch{M.error({position:"topRight",message:"Sorry, no books were found. Please try again."})}}v();function O({list_name:t,books:e}){return`
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
  `}async function z(){const t=await v();let e="";for(let i of t)e+=O(i);const s=` <h1 class="collection-title">Best Sellers <span>Books</span></h1>${`<ul class="top-books-all">${e}</ul>`}`;_.innerHTML=s}z();document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("container"),e=document.getElementById("myModal"),o=document.getElementById("shoppingListBtn"),s=document.getElementById("closeModalBtn"),i=document.getElementById("notification"),r=document.querySelector(".modal-content");t.addEventListener("click",function(n){const l=n.target.closest(".book-card");if(l){const q=l.dataset.id;C(q)}}),s.addEventListener("click",function(){p()}),window.addEventListener("click",function(n){n.target===e&&p()}),document.addEventListener("keydown",function(n){n.key==="Escape"&&e.style.display==="block"&&p()}),o.addEventListener("click",function(){d()});function d(){const n=o.dataset.bookId,l=JSON.parse(localStorage.getItem(g))||{};o.textContent==="Add to shopping list"?(c(n,l),B("Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”."),E()):(a(n,l),y(),x())}function c(n,l){l[n]=addedBook,localStorage.setItem(g,JSON.stringify(l)),$(),o.textContent="Remove from the shopping list"}function a(n,l){delete l[n],localStorage.setItem(g,JSON.stringify(l)),o.textContent="Add to shopping list",y()}function B(n){i.innerHTML=`<span>${n}</span>`,i.style.display="block"}function y(){i.style.display="none"}function E(){r.classList.add("expanded")}function x(){r.classList.remove("expanded")}function C(n){(JSON.parse(localStorage.getItem("books_for_list"))||{})[n]?o.textContent="Remove from the shopping list":o.textContent="Add to shopping list",H(n),e.style.display="block",document.body.style.overflow="hidden"}function p(){e.style.display="none",document.body.style.overflow="auto"}});function H(t){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>{for(const o of e){const s=o.books.find(i=>i._id===t);if(s){R(s);return}}console.error("Book not found.")}).catch(e=>console.error("Error fetching data:",e))}function R(t){const e=document.querySelector(".book_name"),o=document.querySelector(".author"),s=document.querySelector(".description"),i=document.querySelector(".img_modal"),r=document.querySelector('.links a[name="Amazon"]'),d=document.querySelector('.links a[name="Apple Books"]');if(e.textContent=t.title,o.textContent=t.author,s.textContent=t.description,i.src=t.book_image,r){const c=t.buy_links.find(a=>a.name==="Amazon");c&&(r.href=c.url)}if(d){const c=t.buy_links.find(a=>a.name==="Apple Books");c&&(d.href=c.url)}}const k=document.querySelector(".scroll-btn"),j=t=>{window.scrollTo({top:t.offsetTop,behavior:"smooth"})},L=()=>{const t=document.querySelector(".collection-title");t?(k.addEventListener("click",()=>{j(t)}),window.addEventListener("scroll",()=>{(window.scrollY||window.pageYOffset)>t.offsetTop?k.classList.add("show-scroll-btn"):k.classList.remove("show-scroll-btn")})):setTimeout(L,100)};L();const P=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./src/img/save.png",img2x:"./src/img/save.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"",img2x:""},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"",img2x:""},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"",img2x:""},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"",img2x:""},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"",img2x:""},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"",img2x:""},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"",img2x:""},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"",img2x:""}],F=({title:t,url:e,img:o,img2x:s},i)=>`  <li class="block-list-item swiper-slide"> 
          <span class="fund-number">${i}</span>
          <a class="block-link" href="${e}" target="_blank">
            <img class="fund-logo" srcset="${o} 1x, ${s} 2x" src="${o}" alt="${t}" loading="lazy" />
          </a>
        </li>`,J=document.querySelector(".support-list"),W=document.querySelector(".support-button");let f=0;const Y=t=>String(t).padStart(2,"0"),D=P.map((t,e)=>(f=Y(e+1),F(t,f))).join("");J.innerHTML=D;const m=new A(".swiper",{direction:"vertical",spaceBetween:20,slidesPerView:"auto",rewind:!0,navigation:{nextEl:".support-button"}});m.update();let h=!1;const G=()=>{const t=m.slides.length-1;window.innerWidth<768?m.slideNext():(m.slideTo(h?0:t),h=!h)};W.addEventListener("click",G);document.querySelector("#toggle");document.querySelector("body");document.querySelectorAll("p");document.querySelectorAll("h1");document.querySelectorAll("h2");document.querySelectorAll("h3");document.querySelectorAll("h4");document.querySelectorAll("h5");document.querySelectorAll("h6");document.querySelectorAll("a");const b=document.querySelector(".book-card-btn");let u="";b.addEventListener("click",function(){u=b.dataset.category,console.log(u),U(u).then(t=>{K(t,u)}).catch(t=>{})});async function U(t){try{return(await w.get(`https://books-backend.p.goit.global/books/category?category=${t}`)).data}catch(e){console.log(e);return}}function Z({_id:t,book_image:e,title:o,author:s}){return`
    <li class="book-card" data-id="${t}">
      <div class="book-thumb">
        <img class="book-cover" src="${e}" alt="${o}"/>
        </div>
        <div class="book-descr">
        <h2 class="book-name">${o}</h2>
        <h3 class="book-author">${s}</h3>
        </div>
      </li>`}function K(t,e){const o=t.map(Z).join(""),s=`<ul class="category-books">${o}</ul>`,i=`<h2 class="category-title">${e}</h2>${s}`;console.log(o);const r=document.querySelector(".best-books-gallery");r.innerHTML=i}
//# sourceMappingURL=commonHelpers.js.map
