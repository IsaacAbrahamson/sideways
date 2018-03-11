import elements from './elements'
import styles from './styles'

let currentPage = 0



// exported functions
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const getCurrentPage = () => currentPage
const getPages = () => elements.pages

function moveToPage(pageNumber) {
  elements.container.style.transform = `translate3d(-${elements.sideways.offsetWidth * pageNumber}px, 0px, 0px)`
  currentPage = pageNumber
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

// TODO: move dom elements to work correctly
async function movePageleftTo(pageNumber) {
  styles.addAnimation()
  moveToPage(pageNumber)  
  await delay(300)
  styles.removeAnimation()
}

async function movePageRightTo(pageNumber) {
  styles.addAnimation()
  moveToPage(pageNumber)  
  await delay(300)
  styles.removeAnimation()
}



export {
  delay,
  moveToPage,
  movePageLeft,
  movePageRight,
  movePageleftTo,
  movePageRightTo,
  getCurrentPage,
  getPages,
}