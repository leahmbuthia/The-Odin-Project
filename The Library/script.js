
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    renderLibrary();
}

function renderLibrary() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = ''; // Clear existing content

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
            <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
            <button onclick="removeBook(${index})">Remove Book</button>
        `;
        libraryDiv.appendChild(bookCard);
    });
}

function openForm() {
    document.getElementById('addBookForm').style.display = 'block';
}

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    document.getElementById('addBookForm').style.display = 'none';
    document.getElementById('bookForm').reset(); // Clear form fields
});

function removeBook(index) {
    myLibrary.splice(index, 1);
    renderLibrary();
}

function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    renderLibrary();
}

// Manually add a few books for demonstration
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, true);
addBookToLibrary('1984', 'George Orwell', 328, false);
