"use strict"

const STORAGE_KEY = "bookDB"
// const PAGE_SIZE = 5
var gBooksNames = [
  "Harry Potter",
  "The Lord of the Rings",
  "The Little Prince",
  "The Hobbit",
]

var gBooks
_createBooks()

function getBooksForDisplay() {
  return gBooks
}

function _createBook(bookName, bookPrice = getRandomIntInclusive(20, 80)) {
  return {
    id: makeId(),
    name: bookName,
    price: bookPrice,
    rate: 0,
    desc: makeLorem(),
  }
}

function _createBooks() {
  var books = _loadBooksFromStorage()
  console.log(books)
  if (!books || !books.length) {
    console.log("build data")
    books = []
    for (var i = 0; i < 5; i++) {
      var bookName =
        gBooksNames[getRandomIntInclusive(0, gBooksNames.length - 1)]
      books.push(_createBook(bookName))
    }
  }
  gBooks = books
  _saveBooksToStorage()
}

function removeBook(bookId) {
  const bookIdx = gBooks.findIndex((book) => bookId === book.id)
  gBooks.splice(bookIdx, 1)
  _saveBooksToStorage()
}

function addBook(bookName, bookPrice) {
  const book = _createBook(bookName, bookPrice)
  console.log(book)
  gBooks.unshift(book)
  console.log("gBooks", gBooks)
  _saveBooksToStorage()
  return book
}

function updateBook(bookId, bookNewPrice) {
  const book = gBooks.find((book) => book.id === bookId)
  book.price = bookNewPrice
  _saveBooksToStorage()
  return book
}

function getBookById(bookId) {
  const book = gBooks.find((book) => book.id === bookId)
  return book
}

function _saveBooksToStorage() {
  saveToStorage(STORAGE_KEY, gBooks)
}

function _loadBooksFromStorage() {
  return loadFromStorage(STORAGE_KEY)
}
