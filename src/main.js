import elements from './elements'
import styles from './styles'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

let currentPage = 0



function moveToPage(pageNumber) {
  elements.container.style.transform = `translate3d(-${elements.pageWidth * pageNumber}px, 0px, 0px)`
}

function movePageLeft() {
  moveToPage(--currentPage)
}

function movePageRight() {
  moveToPage(++currentPage)
}



function addEventListeners() {
  elements.pageLefts.forEach(e => e.addEventListener('click', () => movePageLeft()))
  elements.pageRights.forEach(e => e.addEventListener('click', () => movePageRight()))
}



function init(startingPage) {
  document.addEventListener('DOMContentLoaded', async () => {
    moveToPage(startingPage)
    currentPage = startingPage

    styles.load()

    await delay(600) // stop page transition from showing on load
    styles.addTransitions()

    addEventListeners()
  })
}

export {
  init,
  movePageRight,
  movePageLeft,
  moveToPage
}