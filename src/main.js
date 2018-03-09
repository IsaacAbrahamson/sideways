import elements from './elements'
import styles from './styles'
import * as utils from './utils'


function init(startingPage) {
  document.addEventListener('DOMContentLoaded', () => {    
    utils.moveToPage(startingPage)
    styles.load()

    // event listeners
    window.addEventListener('resize', () => {
      styles.updateWidth()
      utils.moveToPage(utils.getCurrentPage()) // center new page size in viewport
    })    
    elements.pageLefts.forEach(e => e.addEventListener('click', () => utils.movePageLeft()))
    elements.pageRights.forEach(e => e.addEventListener('click', () => utils.movePageRight()))
  })
}



export { init }
export * from './utils';