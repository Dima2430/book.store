import{S as e}from"./assets/header-be8c3040.js";const a=document.querySelector(".slist-card-section"),m=document.querySelector(".slist-demo-thumb");function u(s){try{const l=localStorage.getItem(s);return JSON.parse(l)}catch{console.log("error"),n()}}const p=u(e);c(p);function v({id:s,book_image:l,title:o,list_name:t,description:i,author:r,amazonURL:d,appleURL:g}){return`<div class="slist-card-list">
            <div class="slist-card-item">
              <button type="button" data-id=${s} class="slist-del-btn js-slist-del-btn">
              </button>
              <div class="slist-card-picture">
                <img src="${l}" class="slist-book-img" alt="books" />
              </div>
              <div class="slist-info-container">
                <h3 class="slist-book-header">${o}</h3>
                <h4 class="slist-book-category">${t}</h4>
                <p class="slist-book-description">${i}</p>
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
          </div>`}function b(s){return s.map(v).join("")}function c(s){if(s===null||s===[]||!e)n();else{const l=b(s);a.innerHTML=l,a.addEventListener("click",h)}}async function h(s){if(s.target.nodeName==="BUTTON"){console.log(s.target.dataset.id);let l=s.target.dataset.id;const o=localStorage.getItem(e);let t=JSON.parse(o);if(localStorage.removeItem(e),t.splice(t.findIndex(i=>i.id===l),1),console.log(t),t.length<1)localStorage.removeItem(e),a.innerHTML="",n();else{const i=JSON.stringify(t);localStorage.setItem(e,i),c(t)}}}function n(){m.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
