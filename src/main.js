import elements from './elements'
import styles from './styles'
import { delay } from './utils'

let currentPage = 0



// private functions
function addPageMoveListeners() {
  elements.pageLefts.forEach(e => e.addEventListener('click', () => movePageLeft()))
  elements.pageRights.forEach(e => e.addEventListener('click', () => movePageRight()))
}



// exported functions
function moveToPage(pageNumber) {
  elements.container.style.transform = `translate3d(-${elements.sideways.offsetWidth * pageNumber}px, 0px, 0px)`
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

// TODO: functions to move directly to one page bypassing pages inbetween
function movePageleftTo(pageNumber) {

}

function movePageRightTo(pageNumber) {

}



function init(startingPage) {
  document.addEventListener('DOMContentLoaded', () => {    
    moveToPage(startingPage)
    currentPage = startingPage
    styles.load()

    // event listeners
    window.addEventListener('resize', () => {
      styles.updateWidth()
      moveToPage(currentPage) // center new page size in viewport
    })    
    addPageMoveListeners()
  })
}



export {
  init,
  movePageRight,
  movePageLeft,
  moveToPage
}