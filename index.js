function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => console.log(json));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => {
      // Once the data is fetched successfully, call renderBooks function
      renderBooks(json);
    })
    .catch((error) => {
      console.error("Error fetching books:", error);
    });
}

function renderBooks(books) {
  // Assuming there's a DOM element with id "book-list" where we want to render the book titles
  const bookListElement = document.getElementById("book-list");

  // Clear any existing content in the book list
  bookListElement.innerHTML = "";

  // Iterate over each book and create a list item for each book title
  books.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.textContent = book.title;
    bookListElement.appendChild(listItem);
  });
}

// Call fetchBooks function when the page is loaded
fetchBooks();