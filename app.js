let myLibrary = [];

showLibrary();

function Book(title, author, pages, read) {
    this.titleName = title;
    this.authorName = author;
    this.pages = pages;
    if(read==='true'){
        this.read = true
    } else {
        this.read = false
    }
  }

  render();

  const addBookToLibrary = (title, author, pages, read) {
      let newBook = new Book(title, author, pages, read);
      myLibrary.push(newBook);
      updateLibrary();
  }

  const updateLibrary = ()=>{
      localStorage.setItem('books', JSON.stringify(myLibrary));
  }

  const showLibrary = ()=>{
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

  const render = ()=>{
      const row = document.querySelector(".row");
      row.innerHTML = '';
        myLibrary.forEach((book)=>{
            const outerCard = document.createElement("div");
            outerCard.classList.add("col-lg-3, col-sm-6, mb-5");

            const innerCard = document.createElement("div");
            innerCard.classList.add("card");
            outerCard.appendChild(innerCard); 
            
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            innerCard.appendChild(cardBody);

            const title = document.createElement("h5");
            title.classList.add("card-title");
            title.textContent = book.title;
            cardBody.appendChild(title);

            const author = document.createElement("h6");
            author.classList.add("card-text");
            author.textContent = book.author;
            cardBody.appendChild(author);

            const pages = document.createElement("p");
            pages.classList.add("card-text");
            pages.textContent = `Pages: ${book.pages}`;
            cardBody.appendChild(pages);

            outerCard.setAttribute('id', myLibrary.indexOf(book));

            row.appendChild(outerCard);

        })
  }