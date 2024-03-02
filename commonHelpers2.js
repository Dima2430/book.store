import"./assets/sidebar-c1c3702c.js";import{a as m}from"./assets/vendor-169f9f98.js";const d=document.querySelector(".slist-card-section"),u=document.querySelector(".slist-demo-thumb"),n="local-storage-books";let e=[];function p(s){try{const t=localStorage.getItem(s),o=JSON.parse(t);return console.log(o),e=o.map(a=>a.dataId),console.log(e),e}catch{console.log("error"),r()}}const b=p(n);console.log(e);k(b);async function k(s){let t=[];if(s===null||s.length===0||!n)r();else{for(const a of s){const l=await S(a);t.push(l)}const o=f(t);d.innerHTML=o,d.addEventListener("click",v)}}function h({_id:s,book_image:t,title:o,list_name:a,description:l,author:i,amazonURL:c,appleURL:g}){return`<div class="slist-card-list">
            <li class="slist-card-item">
              <button type="button" data-id=${s} class="slist-del-btn js-slist-del-btn">
              </button>
              <div class="slist-card-picture">
                <img src="${t}" class="slist-book-img" alt="books" />
              </div>
              <div class="slist-info-container">
                <h3 class="slist-book-header">${o}</h3>
                <h4 class="slist-book-category">${a}</h4>
                <p class="slist-book-description">${l}</p>
                <h5 class="slist-book-autor">${i}</h5>

                <div class="slist-nav">
                  <ul class="slist-nav-list">
                    <li class="slist-nav-item">
                      <a href="${c}" class="slist-nav-link">

                      <img class="img-amazone logo" src="./img/amazon.png" alt="app">
                     </a>

                    </li>

                    <li class="slist-nav-item">
                      <a href="${g}" class="slist-nav-link"><img class="img-app logo" src="./img/ibook.png" alt="app"></a>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </div>`}function f(s){return s.map(h).join("")}function v(s){if(s.target.nodeName!=="BUTTON")return;const t=s.target.closest("li");console.log(t);const o=s.target.dataset.id;console.log(o),t.remove();const a=localStorage.getItem(n);let l=JSON.parse(a);console.log(l),l.splice(l.findIndex(c=>c.dataId===o),1),console.log(l),l.length===0&&r();const i=JSON.stringify(l);localStorage.setItem(n,i)}async function S(s){const t=`https://books-backend.p.goit.global/books/${s}`;try{return(await m.get(t)).data}catch{console.log("Результатів не знайдено.")}}function r(){u.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
