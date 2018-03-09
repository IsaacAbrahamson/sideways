import elements from './elements'
import styles from './styles'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

let currentPage = 0


// private methods
function addPageMoveListeners() {
  elements.pageLefts.forEach(e => e.addEventListener('click', () => movePageLeft()))
  elements.pageRights.forEach(e => e.addEventListener('click', () => movePageRight()))
}



// exported functions
function moveToPage(pageNumber) {
  elements.container.style.transform = `translate3d(-${elements.pageWidth * pageNumber}px, 0px, 0px)`
}

function movePageLeft() {
  moveToPage(--currentPage)
}

function movePageRight() {
  moveToPage(++currentPage)
}

// TODO functions to move directly to one page bypassing pages inbetween
function movePageleftTo(pageNumber) {

}

function movePageRightTo(pageNumber) {

}




function init(startingPage) {
  document.addEventListener('DOMContentLoaded', async () => {
    moveToPage(startingPage)
    currentPage = startingPage

    styles.load()

    // TODO update pages width based on pages not fixed

    // TODO more flexible transition adding
    await delay(600)
    styles.addTransitions()

    addPageMoveListeners()
  })
}

export {
  init,
  movePageRight,
  movePageLeft,
  moveToPage
}