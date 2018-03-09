import elements from './elements'
import styles from './styles'

let currentPage = 0



// exported functions
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const getCurrentPage = () => currentPage

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

// TODO: functions to move directly to one page bypassing pages inbetween
function movePageleftTo(pageNumber) {

}

function movePageRightTo(pageNumber) {

}



export {
  delay,
  moveToPage,
  movePageLeft,
  movePageRight,
  movePageleftTo,
  movePageRightTo,
  getCurrentPage,
}