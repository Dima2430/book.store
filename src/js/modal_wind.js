import { onAddBtnClick, STORAGE_KEY } from "./local-storage";

function createAddedBookObject(book) {
  const bookNameElement = document.querySelector('.book_name');
  const authorElement = document.querySelector('.author');
  const descriptionElement = document.querySelector('.description');
  const bookImageElement = document.querySelector('.img_modal');
  const amazonLinkElement = document.querySelector('.links a[name="Amazon"]');
  const appleBooksLinkElement = document.querySelector('.links a[name="Apple Books"]');

  // Отримання значень з елементів
  const title = bookNameElement.textContent;
  const author = authorElement.textContent;
  const description = descriptionElement.textContent;
  const book_image = bookImageElement.src;

  let amazonURL = "";
  if (amazonLinkElement) {
      amazonURL = amazonLinkElement.href;
  }

  let appleURL = "";
  if (appleBooksLinkElement) {
      appleURL = appleBooksLinkElement.href;
  }

  // Створення об'єкта addedBook
  const addedBook = {
      id: book._id,
      book_image,
      author,
      list_name: book.list_name,
      description,
      title,
      amazonURL,
      appleURL,
  };

  return addedBook;
}

document.addEventListener('DOMContentLoaded', function () {
  const parentContainer = document.getElementById('container');
  const modal = document.getElementById('myModal');
  const shoppingListBtn = document.getElementById('shoppingListBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const notification = document.getElementById('notification');
  const modalContent = document.querySelector('.modal-content');

  parentContainer.addEventListener('click', function (event) {
      const clickedElement = event.target.closest('.book-card');

      if (clickedElement) {
          const dataId = clickedElement.dataset.id;
          openModal(dataId);
      }
  });

  closeModalBtn.addEventListener('click', function () {
      closeModal();
  });

  window.addEventListener('click', function (event) {
      if (event.target === modal) {
          closeModal();
      }
  });

  document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && modal.style.display === 'block') {
          closeModal();
      }
  });

  shoppingListBtn.addEventListener('click', function () {
      toggleShoppingList();
  });

  function toggleShoppingList() {
    const bookId = shoppingListBtn.dataset.bookId;
    const storedBooks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

    const book = getBookById(bookId);

    if (shoppingListBtn.textContent === "Add to shopping list") {
          const addedBook = createAddedBookObject(book); 
          addToShoppingList(bookId, storedBooks, addedBook);
          showNotification('Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.');
          expandModalContent();
      } else {
          removeFromShoppingList(bookId, storedBooks);
          hideNotification();
          collapseModalContent();
      }
  }

  function addToShoppingList(bookId, storedBooks, addedBook) {
    storedBooks[bookId] = addedBook;  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storedBooks));
    onAddBtnClick();
    shoppingListBtn.textContent = "Remove from the shopping list";
    console.log(bookId);
    console.log(storedBooks[bookId]);
  }

function removeFromShoppingList(bookId, storedBooks) {
  delete storedBooks[bookId];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storedBooks));
  shoppingListBtn.textContent = "Add to shopping list";
  hideNotification();
}


  function showNotification(message) {
      notification.innerHTML = `<span>${message}</span>`;
      notification.style.display = 'block';
  }

  function hideNotification() {
      notification.style.display = 'none';
  }

  function expandModalContent() {
      modalContent.classList.add('expanded');
  }

  function collapseModalContent() {
      modalContent.classList.remove('expanded');
  }

  function openModal(bookId) {
      const storedBooks = JSON.parse(localStorage.getItem('books_for_list')) || {};

      if (storedBooks[bookId]) {
          shoppingListBtn.textContent = "Remove from the shopping list";
      } else {
          shoppingListBtn.textContent = "Add to shopping list";
      }

      loadBookData(bookId);
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
  }

  function closeModal() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; 
  }
});

function loadBookData(bookId) {
  fetch('https://books-backend.p.goit.global/books/top-books')
      .then(response => response.json())
      .then(data => {
          for (const list of data) {
              const book = list.books.find(book => book._id === bookId);
              if (book) {
                  fillModalContent(book);
                  return;
              }
          }
          console.error('Book not found.');
      })
      .catch(error => console.error('Error fetching data:', error));
}

function fillModalContent(book) {
  const bookNameElement = document.querySelector('.book_name');
  const authorElement = document.querySelector('.author');
  const descriptionElement = document.querySelector('.description');
  const bookImageElement = document.querySelector('.img_modal');

  const amazonLinkElement = document.querySelector('.links a[name="Amazon"]');
  const appleBooksLinkElement = document.querySelector('.links a[name="Apple Books"]');

  bookNameElement.textContent = book.title;
  authorElement.textContent = book.author;
  descriptionElement.textContent = book.description;
  bookImageElement.src = book.book_image;

  if (amazonLinkElement) {
      const amazonLink = book.buy_links.find(link => link.name === 'Amazon');
      if (amazonLink) {
          amazonLinkElement.href = amazonLink.url;
      }
  }

  if (appleBooksLinkElement) {
      const appleBooksLink = book.buy_links.find(link => link.name === 'Apple Books');
      if (appleBooksLink) {
          appleBooksLinkElement.href = appleBooksLink.url;
      }
  }

}
setInterval( ()=>{
  console.log(localStorage);

},2000)