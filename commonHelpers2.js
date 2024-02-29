import{S as i}from"./assets/header-1c5dacea.js";import"./assets/vendor-169f9f98.js";const a=document.querySelector(".slist-card-section"),g=document.querySelector(".slist-demo-thumb");function u(s){try{const l=localStorage.getItem(s);return JSON.parse(l)}catch{console.log("error"),n()}}const p=u(i);c(p);function v({_id:s,book_image:l,title:o,list_name:t,description:e,author:r,amazonURL:d,appleURL:m}){return`<div class="slist-card-list">
            <div class="slist-card-item">
              <button type="button" data-id=${s} class="slist-del-btn js-slist-del-btn">
              </button>
              <div class="slist-card-picture">
                <img src="${l}" class="slist-book-img" alt="books" />
              </div>
              <div class="slist-info-container">
                <h3 class="slist-book-header">${o}</h3>
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
                      <a href="${m}" class="slist-nav-link"><img class="img-app logo" src="./img/ibook.png" alt="app"></a>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>`}function b(s){return s.map(v).join("")}function c(s){if(s===null||s===[]||!i)n();else{const l=b(s);a.innerHTML=l,a.addEventListener("click",h)}}async function h(s){if(s.target.nodeName==="BUTTON"){console.log(s.target.dataset.id);let l=s.target.dataset.id;const o=localStorage.getItem(i);let t=JSON.parse(o);if(localStorage.removeItem(i),t.splice(t.findIndex(e=>e.id===l),1),console.log(t),t.length<1)localStorage.removeItem(i),a.innerHTML="",n();else{const e=JSON.stringify(t);localStorage.setItem(i,e),c(t)}}}function n(){g.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
