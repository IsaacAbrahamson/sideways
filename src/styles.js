import elements from './elements'

const css = document.createElement('style')
css.type = 'text/css'

css.innerHTML = (`
html, body {
  height: 100%;
}

.sideways {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.sideways > .pages {
  width: 300%;
  height: 100%;
  display: block;
  position: relative;
}

.page {
  width: 33.3333%;
  float: left;
  height: 100%;
}
`)



// exported functions
function load() {
  document.getElementsByTagName('head')[0].appendChild(css)
}

function addTransitions() {
  elements.sideways.style.transition = 'all .3s ease-out'
  elements.container.style.transition = 'all .5s ease-out'
}



export default {
  load,
  addTransitions
}