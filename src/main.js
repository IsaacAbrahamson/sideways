import elements from './elements'
import styles from './styles'
import * as utils from './utils'


function init(startingPage) {
  styles.load()
  utils.moveTo(startingPage)
  styles.updateWidth() // ensure correct width with if using scrollbars

  // event listeners
  window.addEventListener('resize', () => {
    styles.updateWidth()
    utils.moveTo(utils.getCurrentPage()) // center new page size in viewport
  })    
  elements.pageLefts.forEach(e => e.addEventListener('click', () => utils.moveLeft()))
  elements.pageRights.forEach(e => e.addEventListener('click', () => utils.moveRight()))
}



export { init }
export * from './utils';