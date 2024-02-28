import"./assets/header-ec254fa6.js";const o="local-storage-books",a=document.querySelector(".slist-card-section"),m=document.querySelector(".slist-demo-thumb");function u(s){try{const l=localStorage.getItem(s);return JSON.parse(l)}catch{console.log("error"),n()}}const p=u(o);c(p);function v({id:s,book_image:l,title:i,list_name:t,description:e,author:r,amazonURL:d,appleURL:g}){return`<div class="slist-card-list">
            <div class="slist-card-item">
              <button type="button" data-id=${s} class="slist-del-btn js-slist-del-btn">
              </button>
              <div class="slist-card-picture">
                <img src="${l}" class="slist-book-img" alt="books" />
              </div>
              <div class="slist-info-container">
                <h3 class="slist-book-header">${i}</h3>
                <h4 class="slist-book-category">${t}</h4>
                <p class="slist-book-description">${e}</p>
                <h5 class="slist-book-autor">${r}</h5>

                <div class="slist-nav">
                  <ul class="slist-nav-list">
                    <li class="slist-nav-item">
                      <a href="${d}" class="slist-nav-link">

                      <img class="img-amazone logo" src="./img/amazon.png" alt="app">
                     </a>

                    </li>

                    <li class="slist-nav-item">
                      <a href="${g}" class="slist-nav-link"><img class="img-app logo" src="./img/ibook.png" alt="app"></a>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>`}function b(s){return s.map(v).join("")}function c(s){if(s===null||s===[]||!o)n();else{const l=b(s);a.innerHTML=l,a.addEventListener("click",h)}}async function h(s){if(s.target.nodeName==="BUTTON"){console.log(s.target.dataset.id);let l=s.target.dataset.id;const i=localStorage.getItem(o);let t=JSON.parse(i);if(localStorage.removeItem(o),t.splice(t.findIndex(e=>e.id===l),1),console.log(t),t.length<1)localStorage.removeItem(o),a.innerHTML="",n();else{const e=JSON.stringify(t);localStorage.setItem(o,e),c(t)}}}function n(){m.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
