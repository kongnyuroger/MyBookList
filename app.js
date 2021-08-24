//Book class: Represent a Book
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI class: Handle UI Task
class UI {
    static displayBooks(){
        const storeBooks = [
            {
                title: 'Book One',
                aothor: 'John Doe',
                isbn: '3434434'
            },
            {
                title: 'Book Two',
                aothor: 'Jane Doe',
                isbn: '45545'
            },
        ];

        const books = storeBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `
        list.appendChild(row)
    }
}
// store Class: Handels Storage

//Event: Display Book
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {

//prevent actual submit
e.preventDefault();   
console.log('hello')
//get form values
const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const isbn = document.querySelector('#isbn').value;

//Instatiat Book
const book = new Book(title, author, isbn);
console.log(book);

//add Book to UI
UI.addBookToList(book);

});


// Event: Remove a Book

