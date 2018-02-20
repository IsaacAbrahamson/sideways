import elements from './elements'

function load() {
  document.documentElement.style.height = '100%'
  document.body.style.height = '100%'

  Object.assign(elements.sideways.style, {
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  })

  Object.assign(elements.container.style, {
    width: '300%',
    height: '100%',
    display: 'block',
    position: 'relative'
  })

  for (let page of elements.pages) {
    Object.assign(page.style, {
      width: '33.3333%',
      float: 'left',
      height: '100%'
    })
  }
}

function addTransitions() {
  elements.sideways.style.transition = 'all .3s ease-out'
  elements.container.style.transition = 'all .5s ease-out'
}

export default {
  load,
  addTransitions
}