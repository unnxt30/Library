function Book(title, author, pages, read){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addtoLibrary(library, book){
    library.push(book)
}

const myLibrary = [];

newBook = new Book("Kafka On The Shore", "Haruki Murakami", 294);

var addBookButton = document.getElementById("addBook");
const form = document.querySelector('.form-container');
const overlay = document.getElementById('overlay')

addBookButton.addEventListener("click", function(){
    form.classList.add('active'); 
    overlay.classList.add('active')
})

overlay.onclick = function(){
    form.classList.remove('active');
    overlay.classList.remove('active');
}


