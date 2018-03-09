const sideways = document.querySelector('.sideways')
const container = document.querySelector('.sideways > .pages')
const pageLefts = document.querySelectorAll('.page-left')
const pageRights = document.querySelectorAll('.page-right')

const pages = document.querySelectorAll('.page')
const numPages = pages.length


// FIXME: make this value work and use it in other files
let pageWidth = document.querySelector('.sideways').offsetWidth

function updateWidth() {
  pageWidth = document.querySelector('.sideways').offsetWidth
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