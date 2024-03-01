import"./assets/header-0053ffc9.js";import{a as p}from"./assets/vendor-169f9f98.js";const n=document.querySelector(".slist-card-section"),u=document.querySelector(".slist-demo-thumb"),l="local-storage-books";let r=[];function b(s){try{const t=localStorage.getItem(s),o=JSON.parse(t);return console.log(o),r=o.map(a=>a.dataId),console.log(r),r}catch{console.log("error"),d()}}const k=b(l);g(k);async function g(s){let t=[];if(s===null||s.length===0||!l)d();else{for(const a of s){const e=await S(a);t.push(e)}const o=v(t);n.innerHTML=o,n.addEventListener("click",f)}}function h({_id:s,book_image:t,title:o,list_name:a,description:e,author:c,amazonURL:i,appleURL:m}){return`<div class="slist-card-list">
            <div class="slist-card-item">
              <button type="button" data-id=${s} class="slist-del-btn js-slist-del-btn">
              </button>
              <div class="slist-card-picture">
                <img src="${t}" class="slist-book-img" alt="books" />
              </div>
              <div class="slist-info-container">
                <h3 class="slist-book-header">${o}</h3>
                <h4 class="slist-book-category">${a}</h4>
                <p class="slist-book-description">${e}</p>
                <h5 class="slist-book-autor">${c}</h5>

                <div class="slist-nav">
                  <ul class="slist-nav-list">
                    <li class="slist-nav-item">
                      <a href="${i}" class="slist-nav-link">

                      <img class="img-amazone logo" src="./img/amazonicon.png" alt="app">
                     </a>

                    </li>

                    <li class="slist-nav-item">
                      <a href="${m}" class="slist-nav-link"><img class="img-app logo" src="./img/appbook.png" alt="app"></a>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>`}function v(s){return s.map(h).join("")}async function f(s){if(s.target.nodeName==="BUTTON"){console.log(s.target.dataset.id);let t=s.target.dataset.id;const o=localStorage.getItem(l);let a=JSON.parse(o);if(a.length<=1)localStorage.removeItem(l),n.innerHTML="",d();else{localStorage.removeItem(l);let e=a.splice(a.findIndex(i=>i.id===t),1);n.innerHTML="";const c=JSON.stringify(e);localStorage.setItem(l,c),g(e.map(i=>i.dataId))}}}async function S(s){const t=`https://books-backend.p.goit.global/books/${s}`;try{return(await p.get(t)).data}catch{console.log("Результатів не знайдено.")}}function d(){u.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
