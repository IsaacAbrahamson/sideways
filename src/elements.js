const sideways = document.querySelector('.sideways')
const container = document.querySelector('.sideways > .pages')
const pageLefts = document.querySelectorAll('.page-left')
const pageRights = document.querySelectorAll('.page-right')

const pages = document.querySelectorAll('.page')
const numPages = pages.length

let pageWidth = sideways.offsetWidth

function updateWidth() {
  pageWidth = sideways.offsetWidth
}

export default {
  sideways,
  container,
  pageLefts,
  pageRights,
  pages,
  pageWidth,
  numPages,  
  updateWidth,
}