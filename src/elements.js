const sideways = document.querySelector('.sideways')
const container = document.querySelector('.sideways > .pages')
const pageLefts = document.querySelectorAll('.page-left')
const pageRights = document.querySelectorAll('.page-right')

const pages = document.querySelectorAll('.page')
const pageWidth = pages[0].offsetWidth

export default {
  sideways,
  container,
  pageLefts,
  pageRights,
  pages,
  pageWidth
}