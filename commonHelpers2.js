import"./assets/header-2770a40e.js";const e="local-storage-books",m={id:"643282b1e85766588626a0dc",book_image:"https://storage.googleapis.com/du-prd/books/images/9781538748367.jpg",author:"Harlan Coben",list_name:"Audio Fiction",description:"A man imprisoned for murdering his 3-year-old son becomes convinced his son is still alive and plans an escape. Read by Steven Weber. 10 hours, 16 minutes unabridged.",title:"I WILL FIND YOU",amazonURL:"https://www.amazon.com/dp/1538748363?tag=NYTBSREV-20",appleURL:"https://goto.applebooks.apple/9781543661385?at=10lIEQ"};function p(){const s=localStorage.getItem(e);let t=s?JSON.parse(s):[];const a=m;t.every(i=>i.id!==a.id)&&t.push(a);const o=JSON.stringify(t);localStorage.setItem(e,o)}p();const n=document.querySelector(".slist-card-section"),u=document.querySelector(".slist-demo-thumb");function b(s){try{const t=localStorage.getItem(s);return JSON.parse(t)}catch{console.log("error"),l()}}const h=b(e);c(h);function v({id:s,book_image:t,title:a,list_name:o,description:i,author:r,amazonURL:d,appleURL:g}){return`<div class="slist-card-list">
            <div class="slist-card-item">
              <button type="button" data-id=${s} class="slist-del-btn js-slist-del-btn">
              </button>
              <div class="slist-card-picture">
                <img src="${t}" class="slist-book-img" alt="books" />
              </div>
              <div class="slist-info-container">
                <h3 class="slist-book-header">${a}</h3>
                <h4 class="slist-book-category">${o}</h4>
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
          </div>`}function S(s){return s.map(v).join("")}function c(s){if(s===null||s===[]||!e)l();else{const t=S(s);n.innerHTML=t,n.addEventListener("click",k)}}async function k(s){if(s.target.nodeName==="BUTTON"){console.log(s.target.dataset.id);let t=s.target.dataset.id;const a=localStorage.getItem(e);let o=JSON.parse(a);if(localStorage.removeItem(e),o.splice(o.findIndex(i=>i.id===t),1),console.log(o),o.length<1)localStorage.removeItem(e),n.innerHTML="",l();else{const i=JSON.stringify(o);localStorage.setItem(e,i),c(o)}}}function l(){u.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
