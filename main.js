const myLibrary = [];

function Book(title, author, pages, read){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addtoLibrary(book){
    myLibrary.push(book)
    addBooktoGrid(book);
    
}

const bookForm = document.getElementById("bookForm");

bookForm.addEventListener("submit", function(event){
    event.preventDefault()

    var title = document.getElementsByName('title')[0].value;
    var author = document.getElementsByName('author')[0].value;
    var pages = document.getElementsByName('pages')[0].value;
    var checkbox = document.getElementsByName('read')[0];
    var read = false;

    if (checkbox.checked){
        read = true
    }

    const newBook = new Book(title, author, pages, read);
    addtoLibrary(newBook);
    form.classList.remove('active');
    overlay.classList.remove('active');

})

const submit = document.getElementById('submitButton')





function addBooktoGrid(book)
{
    const bookgrid = document.querySelector('.bookGrid');
    
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    
    const booktitle = document.createElement("div");
    booktitle.setAttribute("class", "title");

    const bookauthor = document.createElement("div");
    bookauthor.setAttribute("class", "author");

    const bookpages = document.createElement("div");
    bookpages.setAttribute("class", "pages");

    const bookread = document.createElement("button");
    bookread.setAttribute("class", "toggle-read");

    const remove = document.createElement("button");
    remove.setAttribute("class", "removeBookCard")

    booktitle.textContent = `Title: ${book.title}`;
    bookauthor.textContent = `Author: ${book.author}`;
    bookpages.textContent = ` Length: ${book.pages}`;
    remove.textContent = "Remove";

    if(book.read)
    {
        bookread.textContent = 'Read';
        bookread.classList.add('true');
    }
    else
    {
        bookread.textContent = 'Not Read';
        bookread.classList.add('false');
    }
    
    const divs = [booktitle, bookauthor, bookpages, bookread, remove];
    
    for (let i=0; i<divs.length; i++){
        card.appendChild(divs[i]);
    }

    bookgrid.appendChild(card);

    remove.onclick = function()
    {
        card.remove()
    }

    bookread.onclick = function()
    {
        if (bookread.classList.contains('true'))
        {
            bookread.classList.remove('true');
            bookread.classList.add('false');
            bookread.textContent = 'Not Read';
            book.read = false;
        }
        else
        {
            bookread.classList.remove('false');
            bookread.classList.add('true');
            bookread.textContent = 'Read';
            book.read = true;
        }
    }

}

// const bookgrid = document.querySelector('.bookGrid');

// const cards = bookgrid.querySelectorAll('div');

// cards.forEach(function(card){
//     const removeButton = card.querySelector('removeBookCard');
//     removeButton.onclick = function(){
//         card.remove();
// })

// const toggleRead = document.querySelector('.toggle-read');
// toggleRead.onclick = function(){
//     // if (toggleRead.classList.contains('true'))
//     // {
//     //     toggleRead.classList.remove('true');
//     //     toggleRead.classList.add('false');
//     //     toggleRead.textContent = 'Not Read';
//     // }
//     // else
//     // {
//     //     toggleRead.classList.remove('false');
//     //     toggleRead.classList.add('true');
//     //     toggleRead.textContent = 'Read';
//     // }
// }

var addBookButton = document.getElementById("addBook");
const form = document.querySelector('.form-container');
const overlay = document.getElementById('overlay')

addBookButton.addEventListener("click", function(){
    form.classList.add('active'); 
    overlay.classList.add('active')
    document.getElementById("bookForm").reset();
})

overlay.onclick = function(){
    form.classList.remove('active');
    overlay.classList.remove('active');
}


