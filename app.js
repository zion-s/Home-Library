let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if(read==='true'){
        this.read = true
    } else {
        this.read = false
    }
  }

  const updateStorage = ()=>{
    localStorage.setItem('books', JSON.stringify(myLibrary));
}

  const addBookToLibrary = (title, author, pages, read) =>{
      let newBook = new Book(title, author, pages, read);
      myLibrary.push(newBook);
      updateStorage();
  }

  const loadStorage = ()=>{
      if(localStorage.getItem('books')){
          myLibrary = JSON.parse(localStorage.getItem('books'));
    
      for(let i=0;i<myLibrary.length;i++){
          myLibrary[i] = new Book(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read)
      }
  } else {
    addBookToLibrary("The Fellowship of the Ring", "J.R.R. Tolkien", 423, true);
    addBookToLibrary("Flowers for Algernon", "Daniel Keyes", 311, true);
    addBookToLibrary("Alice in Wonderland", "Lewis Carroll", 200, true);
    addBookToLibrary("1984", "George Orwell", 328, false);
    addBookToLibrary("Slaughterhouse-Five", "Kurt Vonnegut", 215, true);
  }  
}

loadStorage();

  const render = ()=>{
      const row = document.querySelector(".row");
      row.innerHTML = '';
        myLibrary.forEach((book)=>{
            const outerCard = document.createElement("div");
            outerCard.classList.add("col-lg-3", "col-sm-6", "mb-5");

            const innerCard = document.createElement("div");
            innerCard.classList.add("card");
            outerCard.appendChild(innerCard); 
            
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            innerCard.appendChild(cardBody);

            const title = document.createElement("h5");
            title.classList.add("card-title");
            title.textContent = `${book.title}`;
            cardBody.appendChild(title);

            const author = document.createElement("h6");
            author.classList.add("card-text");
            author.textContent = book.author;
            cardBody.appendChild(author);

            const pages = document.createElement("p");
            pages.classList.add("card-text");
            pages.textContent = `Pages: ${book.pages}`;
            cardBody.appendChild(pages);

            const remove = document.createElement("button");
            remove.classList.add("btn", "btn-sm", "btn-danger");
            remove.textContent = "Remove";
            cardBody.appendChild(remove);

            outerCard.setAttribute('id', myLibrary.indexOf(book));

            row.appendChild(outerCard);

        })
  }

  render();

const formFields = document.getElementsByName("BookForm")[0];
const closeForm = document.querySelector("#closeForm");
closeForm.addEventListener("click", ()=>{
    formFields.reset();
})

  const addBook = document.querySelector("#addBook");
addBook.addEventListener("click", ()=>{
    let bookTitle = document.forms["BookForm"]["title"];
    let bookAuthor = document.forms["BookForm"]["author"];
    let bookPages = document.forms["BookForm"]["pages"];
    let bookRead = document.forms["BookForm"]["read"];
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
    render();
    formFields.reset();
})