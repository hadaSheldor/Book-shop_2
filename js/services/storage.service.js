"use strict"

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
  console.log(key)
  var val = localStorage.getItem(key)
  console.log(JSON.parse(val))
  return JSON.parse(val)
}
