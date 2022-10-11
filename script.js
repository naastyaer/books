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
            <div>
                <img src='${book.image}' >
                <h2>${book.title}</h2>
                <p>${book.year}</p>
              </div>
              <div class= 'author' >
                <p>${book.authors}</p>
              </div>
          </div>
          <div class='container-button'>
            <div class='container-button-row'>
              <div class='container-button-border'>
                  <button id='container-button-edit-${book.id}'> Изменить </button>
                </div>
                <div class='container-button-delet'>
                  <button id="button-delete-${book.id}"> Удалить </button>
                </div>
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
  books.forEach((book) =>{
    document.getElementById(`container-button-edit-${book.id}`).addEventListener('click', () => {
      openEditmodal(book.id)
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

/*модальные окна*/


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
    id: books.length +1,
    title: titleValue,
    authors: autorValue,
    year: yearValue,
    img: imgValue
  }
  books.push(book)
  renderBooks()
  clearForm()
  openForm()
}
function openEditmodal(id) { // так назвала функцию, которая открывать будет модалку

  document.getElementById("edit-modal").style.display = "flex"
  const book = books.find((s) =>{
      return s.id === id
  })

  document.getElementById("titleEdit").value  = book.title /*старые данные книги*/
  document.getElementById("imgEdit").value  = book.img /*старые данные книги*/
  document.getElementById("autorEdit").value  = book.authors /*старые данные книги*/
  document.getElementById("yearEdit").value  = book.year /*старые данные книги*/

  const saveButtonedit = document.getElementById('button-save-edit')
  saveButtonedit.addEventListener('click', () => updateBook(id)) // добавляем обработчик с id
}
function updateBook(id) {
  const book = books.find((s) =>{
      return s.id === id
  })

  const titleValueEdit = document.getElementById("titleEdit").value
  const autorValueEdit = document.getElementById("autorEdit").value
  const yearValueEdit = document.getElementById("yearEdit").value
  const imgValueEdit = document.getElementById("imgEdit").value

  const editBook = {
      id: id,
      title: titleValueEdit ,
      authors: autorValueEdit ,
      year: yearValueEdit ,
      img: imgValueEdit 
  }
  books.splice(books.indexOf(book),1,editBook)
  renderBooks()
  document.getElementById("edit-modal").style.display = "none"

  const saveButtonedit = document.getElementById('button-save-edit')
  const newSaveButton = saveButtonedit.cloneNode(true)
  saveButtonedit.parentNode.replaceChild(newSaveButton, saveButtonedit)
}










/*открывает модальное окно для редактирования*/
/*function openFormedit(){
  const editForm = document.getElementById("edit-modal")
  if(isOpen){
    editForm.style.display = "none"
      isOpen= false
  }else{
    editForm.style.display = "flex"
     isOpen= true 
  } 
}
/*открывает модальное окно для редактирования*/
/*функция редактирования книги*/
/*function editBook(id){ 
  openFormedit()
  const bo = books.find((s) =>{/*нашли книгу по id*/
    /*return s.id === id
  })
  console.log(id)

  
  /*document.getElementById("titleEdit").value  = bo.title /*старые данные книги*/
  /*document.getElementById("imgEdit").value  = bo.img /*старые данные книги*/
  /*document.getElementById("autorEdit").value  = bo.authors /*старые данные книги*/
  /*document.getElementById("yearEdit").value  = bo.year /*старые данные книги*/
  /*console.log(bo.img)
  console.log(bo.authors)
  console.log(bo.year)
  console.log(bo.title)*/
  
  /*const saveButtonedit = document.getElementById('button-save-edit')

  /*function renderEdit(){
    const boIndex = books.indexOf(bo) /*нашли индекс книги*/
    
    /*const titleValueEdit = document.getElementById("titleEdit").value
    const autorValueEdit = document.getElementById("autorEdit").value
    const yearValueEdit = document.getElementById("yearEdit").value
    const imgValueEdit = document.getElementById("imgEdit").value*/
    /*console.log(titleValueEdit)
    console.log(autorValueEdit)
    console.log(yearValueEdit)
    console.log(imgValueEdit)
    console.log(bo)*/

    /*const editBook = {
      id: books.length +1,
      title: titleValueEdit ,
      authors: autorValueEdit ,
      year: yearValueEdit ,
      img: imgValueEdit 
    }
    /*const boIndex = books.indexOf(bo) /*нашли индекс книги*/
    /*books.splice(boIndex,1,editBook )
    renderBooks()
    

  }
saveButtonedit.addEventListener('click',  renderEdit)*/


  



renderBooks()
/*модальное окно добавления*/
const addButton = document.getElementById('button-add')
addButton.addEventListener("click",openForm)
const saveButton = document.getElementById('button-save')
saveButton.addEventListener("click",addBook)
const closeButton = document.getElementById('button-close')
closeButton.addEventListener("click",openForm)
/*модальное окно добавления*/
/*модальное окно изменения*/
const editModal = document.getElementById('edit-modal')
const openeditmodal = document.getElementById('container-button-edit-${book.id}')
const closeButtonedit = document.getElementById('button-close-edit')

function closeEdit(){
  editModal.style.display = 'none'
}
closeButtonedit.addEventListener('click', closeEdit)

/*модальное окно изменения*/


let booksJson = localStorage.getItem('books')
let savedBooks = JSON.parse(booksJson)
if(booksJson){
  books = savedBooks
}




    
        

    