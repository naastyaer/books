let books = [
    {
      id: 0,
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg'
    },
    {
      id: 1,
      title: 'JavaScript: The Good Parts',
      authors: 'Douglas Crockford',
      year: '2008',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg'
    },
    {
      id: 2,
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    { 
      id: 3,
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    }
    ]


/*добавление книг в контейнер*/
  const container = document.getElementById('container')
  function renderBooks(){
    container.innerHTML= ''
    books.forEach((book) =>{
        container.innerHTML +=  
        `
        <div class='container-book'>
          <div class='container-book-img' >
              <img src='${book.image}' >
              <h2>${book.title}</h2>
              <p>${book.year}</p>
          </div>
           <div class= 'author' >
              <p>${book.authors}</p>
           </div>
           <div class='container-button'>
              <div class='container-button-border'>
                <button>Изменить </button>
              </div>
              <div class='container-button-delet'>
                <button id="button-delete-${book.id}" >Удалить</button>
              </div>
           </div>
        </div>
       `

    })
    books.forEach((book) =>{
      document.getElementById(`button-delete-${book.id}`).addEventListener('click', () => {
        deleteBook(book.id);
    })
     
  })
  booksAddToLocalStorage()
  }

function booksAddToLocalStorage(){
  const booksJSON = JSON.stringify(books)
  localStorage.setItem('books', booksJSON)
}

function deleteBook(id){
  const book = books.find((b) =>{
    return b.id === id
  })
  const bookIndex = books.indexOf(book)
  books.splice(bookIndex,1)
  renderBooks()
  booksAddToLocalStorage()
}


let isOpen = false
function openForm(){
    const inputForm = document.getElementById("input-form")
    if(isOpen){
      inputForm.style.display = "none"
        isOpen= false
    }else{
      inputForm.style.display = "flex"
       isOpen= true 
    }
    
    
}
function clearForm(){
  document.getElementById("title").value = ''
  document.getElementById("autor").value = ''
  document.getElementById("year").value  = ''
  document.getElementById("img").value   = ''
}
function addBook(){
  const titleValue = document.getElementById("title").value
  const autorValue = document.getElementById("autor").value
  const yearValue = document.getElementById("year").value
  const imgValue = document.getElementById("img").value

  const book = {
    title: titleValue,
    autor: autorValue,
    year: yearValue,
    img: imgValue
  }
  books.push(book)
  console.log(books)
  renderBooks()
  clearForm()
  openForm()
}
const addButton = document.getElementById('button-add')
addButton.addEventListener("click",openForm)
const saveButton = document.getElementById('button-save')
saveButton.addEventListener("click",addBook)
const closeButton = document.getElementById('button-close')
closeButton.addEventListener("click",openForm)

let booksJson = localStorage.getItem('books')
const savedBooks = JSON.parse(booksJson)
if(booksJson){
  books = savedBooks
}
renderBooks()


    
        

    