import elements from './elements'
import styles from './styles'

let currentPage = 0
let pages = document.querySelectorAll('.page')



// exported functions
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const getCurrentPage = () => currentPage
const getPages = () => pages

function moveTo(pageNumber) {
  elements.container.style.transform = `translate3d(-${elements.sideways.offsetWidth * pageNumber}px, 0px, 0px)`
  currentPage = pageNumber
}

async function moveLeft() {
  styles.addAnimation()
  moveTo(--currentPage)  
  await delay(300)
  styles.removeAnimation()
}

async function moveRight() {
  styles.addAnimation()
  moveTo(++currentPage)
  await delay(300)
  styles.removeAnimation()
}

function movePageToLeft(pageNumber) {
  let requestedPageElement = pages[pageNumber]
  let currentPageElement = pages[currentPage]

  if (pageNumber === currentPage) {
    console.warn('You may not move your current page somewhere else!')
    return
  }

  // remove requested page from pages and then move it to left of current element
  elements.container.removeChild(requestedPageElement)
  elements.container.insertBefore(requestedPageElement, currentPageElement)

  /* Moving a page that is to the right of the current page
   * to the left of the current page will push the current page off to the side.
   * Increase the pageNumber to account for this added page, and the move to the
   * new currentPage (which is actually the old)
   */ 
  if (pageNumber > currentPage) {
    moveTo(++currentPage)
  }

  // update DOM
  pages = document.querySelectorAll('.page')
}

async function movePageToRight(pageNumber) {
  let requestedPageElement = pages[pageNumber]
  let currentPageElement = pages[currentPage]

  if (pageNumber === currentPage) {
    console.warn('You may not move your current page somewhere else!')
    return
  }

  // remove requested page from pages and then move it to left of current element
  elements.container.removeChild(requestedPageElement)
  elements.container.insertBefore(requestedPageElement, currentPageElement.nextSibling)

  /* Moving a page that is to the left of the current page
   * to the right of the current page will pull the current page off to the side.
   * Decrease the pageNumber to account for this added page, and the move to the
   * new currentPage (which is actually the old)
   */ 
  if (pageNumber < currentPage) {
    moveTo(--currentPage)
  }

  // update DOM
  pages = document.querySelectorAll('.page')
}



export {
  delay,
  moveTo,
  moveLeft,
  moveRight,
  movePageToLeft,
  movePageToRight,
  getCurrentPage,
  getPages,
}