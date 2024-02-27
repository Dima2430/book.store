import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector(".slist-card-section"),g=document.querySelector(".slist-demo-thumb");let l=[];function m(s){try{for(let t=0;t<localStorage.length;t++){let i=localStorage.key(t);const a=localStorage.getItem(i),o=JSON.parse(a);l.push(o)}}catch{console.log(error)}}m();n(l);function u({id:s,book_image:t,title:i,list_name:a,description:o,author:c,amazonURL:r,appleURL:d}){return`<div class="slist-card-list">
            <div class="slist-card-item">
              <button type="button" data-id=${s} class="slist-del-btn js-slist-del-btn">
              </button>
              <div class="slist-card-picture">
                <img src="${t}" class="slist-book-img" alt="books" />
              </div>
              <div class="slist-info-container">
                <h3 class="slist-book-header">${i}</h3>
                <div class="slist-book-category">${a}</div>
                <p class="slist-book-description">${o}</p>
                <div class="slist-book-autor">${c}</div>

                <div class="slist-nav">
                  <ul class="slist-nav-list">
                    <li class="slist-nav-item">
                      <a href="${r}" class="slist-nav-link">

                      <img class="img-amazone logo" src="./img/amazon.png" alt="app">
                     </a>

                    </li>

                    <li class="slist-nav-item">
                      <a href="${d}" class="slist-nav-link"><img class="img-app logo" src="./img/ibook.png" alt="app"></a>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>`}function p(s){return s.map(u).join("")}function n(s){localStorage.length===0&&k();const t=p(s);e.innerHTML=t,e.addEventListener("click",v)}function v(s){if(s.target.nodeName==="BUTTON"){console.log(s.target.dataset.id);let t=s.target.dataset.id;localStorage.removeItem(s.target.dataset.id),l.filter(i=>i.id===t),l.splice(l.findIndex(i=>i.id===t),1),console.log(l),n(l)}}function k(){g.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
