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

.animated {
  transition: all 300ms ease-out;
}
`)



// exported functions
function load() {
  document.getElementsByTagName('head')[0].appendChild(css)
}

function addAnimation() {
  elements.container.classList.add('animated')
}

function removeAnimation() {
  elements.container.classList.remove('animated')
}



export default {
  load,
  addAnimation,
  removeAnimation
}