import"./assets/modulepreload-polyfill-3cfb730f.js";const l=document.querySelector(".slist-card-section"),p=document.querySelector(".slist-demo-thumb"),i="local-storage-books";function u(s){try{const t=localStorage.getItem(s);return JSON.parse(t)}catch{console.log("error"),n()}}const b=u(i);r(b);function v({id:s,book_image:t,title:e,list_name:o,description:a,author:d,amazonURL:g,appleURL:m}){return`<div class="slist-card-list">
            <div class="slist-card-item">
              <button type="button" data-id=${s} class="slist-del-btn js-slist-del-btn">
              </button>
              <div class="slist-card-picture">
                <img src="${t}" class="slist-book-img" alt="books" />
              </div>
              <div class="slist-info-container">
                <h3 class="slist-book-header">${e}</h3>
                <h4 class="slist-book-category">${o}</h4>
                <p class="slist-book-description">${a}</p>
                <h5 class="slist-book-autor">${d}</h5>

                <div class="slist-nav">
                  <ul class="slist-nav-list">
                    <li class="slist-nav-item">
                      <a href="${g}" class="slist-nav-link">

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
          </div>`}function h(s){return s.map(v).join("")}function r(s){if(s===null||s===[]||!i)n();else{const t=h(s);l.innerHTML=t,l.addEventListener("click",S)}}async function S(s){if(s.target.nodeName==="BUTTON"){console.log(s.target.dataset.id);let t=s.target.dataset.id;const e=localStorage.getItem(i);let o=JSON.parse(e);if(localStorage.removeItem(i),o.splice(o.findIndex(a=>a.id===t),1),console.log(o),o.length<1)localStorage.removeItem(i),l.innerHTML="",n();else{const a=JSON.stringify(o);localStorage.setItem(i,a),r(o)}}}function n(){p.classList.remove("is-hidden")}const c="local-storage-books",k={id:"643282b1e85766588626a0dc",book_image:"https://storage.googleapis.com/du-prd/books/images/9781538748367.jpg",author:"Harlan Coben",list_name:"Audio Fiction",description:"A man imprisoned for murdering his 3-year-old son becomes convinced his son is still alive and plans an escape. Read by Steven Weber. 10 hours, 16 minutes unabridged.",title:"I WILL FIND YOU",amazonURL:"https://www.amazon.com/dp/1538748363?tag=NYTBSREV-20",appleURL:"https://goto.applebooks.apple/9781543661385?at=10lIEQ"};function f(){const s=localStorage.getItem(c);let t=s?JSON.parse(s):[];const e=k;t.every(a=>a.id!==e.id)&&t.push(e);const o=JSON.stringify(t);localStorage.setItem(c,o)}f();
//# sourceMappingURL=commonHelpers2.js.map
