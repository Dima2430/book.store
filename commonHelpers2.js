import"./assets/modulepreload-polyfill-3cfb730f.js";const o=document.querySelector(".slist-card-section"),g=document.querySelector(".slist-demo-thumb");let a=[];function m(s){try{for(let t=0;t<localStorage.length;t++){let i=localStorage.key(t);const l=localStorage.getItem(i),e=JSON.parse(l);a.push(e)}}catch{console.log(error)}}m();c(a);function v({id:s,book_image:t,title:i,list_name:l,description:e,author:n,amazonURL:r,appleURL:d}){return`<div class="slist-card-list">
            <div class="slist-card-item">
              <button type="button" data-id=${s} class="slist-del-btn js-slist-del-btn">
                <svg class="slist-del-btn-img">
                  <use href="./img/javascript.svg#trash"></use>
                </svg>
              </button>
              <div class="slist-card-picture">
                <img src="${t}" class="slist-book-img" alt="books" />
              </div>
              <div class="slist-info-container">
                <h3 class="slist-book-header">${i}</h3>
                <div class="slist-book-category">${l}</div>
                <p class="slist-book-description">${e}</p>
                <div class="slist-book-autor">${n}</div>

                <div class="slist-nav">
                  <ul class="slist-nav-list">
                    <li class="slist-nav-item">
                      <a href="${r}" class="slist-nav-link">
                      <svg class="img-amazone">
            <use href="./img/icons.svg#icon-amazon-pay"></use>
          </svg></a>
                    </li>

                    <li class="slist-nav-item">
                      <a href="${d}" class="slist-nav-link"><img class="img-app" src="./img/ap.png" alt="app"></a>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>`}function u(s){return s.map(v).join("")}function c(s){localStorage.length===0&&k();const t=u(s);o.innerHTML=t,o.addEventListener("click",p)}function p(s){if(s.target.nodeName==="BUTTON"){console.log(s.target.dataset.id);let t=s.target.dataset.id;localStorage.removeItem(s.target.dataset.id),a.filter(i=>i.id===t),a.splice(a.findIndex(i=>i.id===t),1),console.log(a),c(a)}}function k(){g.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
