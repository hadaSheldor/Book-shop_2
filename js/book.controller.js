"use strict"

function onInit() {
  renderBooks()
}

function renderBooks() {
  var books = getBooksForDisplay()
  const strHTML = books.map(
    (book) => `
  <tr class="book-row">
    <td>${book.id}</td>
    <td>${book.name}</td>
    <td>${book.price}$</td>
    <td><img src="img/1.jpg" /></td>
    <td>
        <button class="read" onclick="onReadBook(event, '${book.id}')">Read</button>
    </td>
    <td>
        <button class="update" onclick="onUpdateBook('${book.id}')">Update</button>
    </td>
    <td>
        <button class="delete" onclick="onRemoveBook(event, '${book.id}')">Delete</button>
    </td> 
  </tr>`
  )
  document.querySelector(".books-body").innerHTML = strHTML.join("")
}

function onNextPage() {
  console.log("Next page...")
}

function onAddBook(ev) {
  ev.stopPropagation()
  var newBookName = prompt("What is the books name?")
  var newBookPrice = +prompt("What is the books price?")
  if (newBookName && newBookPrice) {
    var book = addBook(newBookName, newBookPrice)
    renderBooks()
  }
  return book
}

function onRemoveBook(ev, bookId) {
  ev.stopPropagation()
  removeBook(bookId)
  renderBooks()
}

function onUpdateBook(bookId) {
  console.log(bookId)
  var book = getBookById(bookId)
  var newPrice = +prompt(`What is the new price for ${book.name}`)
  if (newPrice !== book.price) updateBook(bookId, newPrice)
  renderBooks()
}

function onReadBook(ev, bookId) {
  ev.preventDefault()
  console.log("Reading...", bookId)
}
