import elements from './elements'

const css = document.createElement('style')
css.type = 'text/css'

css.innerHTML = (`
html, body {
  height: 100%;
}

.sideways {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.sideways > .pages {
  width: ${elements.sideways.offsetWidth * elements.numPages}px;
  height: 100%;
  display: block;
  position: relative;
}

.page {
  width: ${elements.sideways.offsetWidth}px;
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

function updateWidth() {
  elements.container.style.width = `${elements.sideways.offsetWidth * elements.numPages}px`
  for (let page of elements.pages) {
    page.style.width = `${elements.sideways.offsetWidth}px`
  }
}

function addAnimation() {
  elements.container.classList.add('animated')
}

function removeAnimation() {
  elements.container.classList.remove('animated')
}


// TODO: create function
function createAnimation() {

}



export default {
  load,
  addAnimation,
  removeAnimation,
  updateWidth,
}