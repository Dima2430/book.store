import"./assets/sidebar-c1c3702c.js";import{a as m}from"./assets/vendor-169f9f98.js";const r=document.querySelector(".slist-card-section"),u=document.querySelector(".slist-demo-thumb"),n="local-storage-books";let e=[];function p(s){try{const o=localStorage.getItem(s),t=JSON.parse(o);return console.log(t),e=t.map(l=>l.dataId),console.log(e),e}catch{console.log("error"),c()}}const b=p(n);console.log(e);k(b);async function k(s){let o=[];if(s===null||s.length===0||!n)c();else{for(const l of s){const a=await y(l);o.push(a)}const t=h(o);r.innerHTML=t,r.addEventListener("click",v)}}function f({_id:s,book_image:o,title:t,list_name:l,description:a,author:i,amazonURL:g,appleURL:d}){return`<div class="slist-card-list">
            <li class="slist-card-item">
              <button type="button" data-id=${s} class="slist-del-btn js-slist-del-btn">
              </button>
              <div class="slist-card-picture">
                <img src="${o}" class="slist-book-img" alt="books" />
              </div>
              <div class="slist-info-container">
                <h3 class="slist-book-header">${t}</h3>
                <h4 class="slist-book-category">${l}</h4>
                <p class="slist-book-description">${a}</p>
                <h5 class="slist-book-autor">${i}</h5>

                <div class="slist-nav">
                  <ul class="slist-nav-list">
                    <li class="slist-nav-item">
                      <a href="${g}" class="slist-nav-link">

                      <img class="img-amazone logo" src="./img/amazon.png" alt="app">
                     </a>

                    </li>

                    <li class="slist-nav-item">
                      <a href="${d}" class="slist-nav-link"><img class="img-app logo" src="./img/ibook.png" alt="app"></a>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </div>`}function h(s){return s.map(f).join("")}function v(s){if(s.target.nodeName!=="BUTTON")return;const o=s.target.closest("li");console.log(o);const t=s.target.dataset.id;console.log(t),o.remove(),S(t)}function S(s){const o=localStorage.getItem(n);let t=JSON.parse(o);t.length===0&&c(),console.log(t);let l=t.filter(i=>i.dataId===s);console.log(l);const a=JSON.stringify(l);localStorage.setItem(n,a)}async function y(s){const o=`https://books-backend.p.goit.global/books/${s}`;try{return(await m.get(o)).data}catch{console.log("Результатів не знайдено.")}}function c(){u.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
