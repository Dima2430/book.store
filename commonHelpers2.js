import"./assets/header-1d09e868.js";import{a as p}from"./assets/vendor-169f9f98.js";const c=document.querySelector(".slist-card-section"),b=document.querySelector(".slist-demo-thumb"),k="local-storage-books";let i=[];const a="my-key";let r=[];function S(t){try{const s=localStorage.getItem(t),o=JSON.parse(s);return console.log(o),i=o.map(e=>e.dataId),console.log(i),i}catch{console.log("error"),n()}}S(k);f(i);async function f(t){if(t.length===0)n();else for(const s of t){console.log(s);const o=await h(s);console.log(o),r.push(o);const e=JSON.stringify(r);localStorage.setItem(a,e)}}async function h(t){const s=`https://books-backend.p.goit.global/books/${t}`;try{const o=await p.get(s);return console.log(o.data),o.data}catch{console.log("Результатів не знайдено.")}}function v(t){try{const s=localStorage.getItem(t);return JSON.parse(s)}catch{console.log("error"),n()}}const y=v(a);d(y);function I({_id:t,book_image:s,title:o,list_name:e,description:l,author:g,amazonURL:m,appleURL:u}){return`<div class="slist-card-list">
            <div class="slist-card-item">
              <button type="button" data-id=${t} class="slist-del-btn js-slist-del-btn">
              </button>
              <div class="slist-card-picture">
                <img src="${s}" class="slist-book-img" alt="books" />
              </div>
              <div class="slist-info-container">
                <h3 class="slist-book-header">${o}</h3>
                <h4 class="slist-book-category">${e}</h4>
                <p class="slist-book-description">${l}</p>
                <h5 class="slist-book-autor">${g}</h5>

                <div class="slist-nav">
                  <ul class="slist-nav-list">
                    <li class="slist-nav-item">
                      <a href="${m}" class="slist-nav-link">

                      <img class="img-amazone logo" src="./img/amazonicon.png" alt="app">
                     </a>

                    </li>

                    <li class="slist-nav-item">
                      <a href="${u}" class="slist-nav-link"><img class="img-app logo" src="./img/appbook.png" alt="app"></a>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>`}function L(t){return t.map(I).join("")}function d(t){if(t===null||t===[]||!a)n();else{const s=L(t);c.innerHTML=s,c.addEventListener("click",$)}}async function $(t){if(t.target.nodeName==="BUTTON"){console.log(t.target.dataset.id);let s=t.target.dataset.id;const o=localStorage.getItem(a);let e=JSON.parse(o);if(localStorage.removeItem(a),e.splice(e.findIndex(l=>l.id===s),1),console.log(e),e.length<1)localStorage.removeItem(a),c.innerHTML="",n();else{const l=JSON.stringify(e);localStorage.setItem(a,l),d(e)}}}function n(){b.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
