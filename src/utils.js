import elements from './elements'
import styles from './styles'

let currentPage = 0
let pages = document.querySelectorAll('.page')



// exported functions
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const getCurrentPage = () => currentPage
const getPages = () => pages

async function moveTo(pageNumber) {
  // Remove scrollbar if moving from page with scrollbar.
  if (pages[currentPage].classList.contains('sw-scroll')) pages[currentPage].style.overflowY = 'hidden'

  elements.container.style.transform = `translate3d(-${elements.sideways.offsetWidth * pageNumber}px, 0px, 0px)`
  currentPage = pageNumber

  if (pages[currentPage].classList.contains('sw-scroll')) {
    await delay(300) // page move transition
    pages[currentPage].style.overflowY = 'scroll'
  }
}

async function moveLeft() {
  styles.addAnimation()
  moveTo(currentPage - 1)  
  await delay(300)
  styles.removeAnimation()
}

async function moveRight() {
  styles.addAnimation()
  moveTo(currentPage + 1)
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