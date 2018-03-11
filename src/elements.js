// TODO: remove this file as it doesn't update

let sideways = document.querySelector('.sideways')
let container = document.querySelector('.sideways > .pages')
let pageLefts = document.querySelectorAll('.page-left')
let pageRights = document.querySelectorAll('.page-right')

let pages = document.querySelectorAll('.page')
let numPages = pages.length

function update() {
  sideways = document.querySelector('.sideways')
  container = document.querySelector('.sideways > .pages')
  pageLefts = document.querySelectorAll('.page-left')
  pageRights = document.querySelectorAll('.page-right')
  pages = document.querySelectorAll('.page')
  numPages = pages.length
}

export default {
  sideways,
  container,
  pageLefts,
  pageRights,
  pages,
  numPages,
  update,
}