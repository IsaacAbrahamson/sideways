import elements from './elements'
import styles from './styles'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

let currentPage = 0


// private functions
function addPageMoveListeners() {
  elements.pageLefts.forEach(e => e.addEventListener('click', () => movePageLeft()))
  elements.pageRights.forEach(e => e.addEventListener('click', () => movePageRight()))
}



// event handlers
window.addEventListener('resize', () => {
  styles.update()
})



// exported functions
function moveToPage(pageNumber) {
  elements.container.style.transform = `translate3d(-${elements.pageWidth * pageNumber}px, 0px, 0px)`
}

async function movePageLeft() {
  styles.addAnimation()
  moveToPage(--currentPage)  
  await delay(300)
  styles.removeAnimation()
}

async function movePageRight() {
  styles.addAnimation()
  moveToPage(++currentPage)
  await delay(300)
  styles.removeAnimation()
}

// TODO functions to move directly to one page bypassing pages inbetween
function movePageleftTo(pageNumber) {

}

function movePageRightTo(pageNumber) {

}




function init(startingPage) {
  document.addEventListener('DOMContentLoaded', async () => {
    styles.load()
    
    moveToPage(startingPage)
    currentPage = startingPage

    // TODO update pages width based on pages not fixed

    addPageMoveListeners()
  })
}

export {
  init,
  movePageRight,
  movePageLeft,
  moveToPage
}