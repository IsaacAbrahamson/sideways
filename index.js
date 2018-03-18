(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.sideways = {})));
}(this, (function (exports) { 'use strict';

// TODO: remove this file as it doesn't update

let sideways = document.querySelector('.sideways');
let container = document.querySelector('.sideways > .pages');
let pageLefts = document.querySelectorAll('.page-left');
let pageRights = document.querySelectorAll('.page-right');

let pages = document.querySelectorAll('.page');
let numPages = pages.length;

function update() {
  sideways = document.querySelector('.sideways');
  container = document.querySelector('.sideways > .pages');
  pageLefts = document.querySelectorAll('.page-left');
  pageRights = document.querySelectorAll('.page-right');
  pages = document.querySelectorAll('.page');
  numPages = pages.length;
}

var elements = {
  sideways,
  container,
  pageLefts,
  pageRights,
  pages,
  numPages,
  update,
}

const css = document.createElement('style');
css.type = 'text/css';

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
`);




// exported functions
function load() {
  document.getElementsByTagName('head')[0].appendChild(css);
}

function updateWidth() {
  elements.container.style.width = `${elements.sideways.offsetWidth * elements.numPages}px`;
  for (let page of elements.pages) {
    page.style.width = `${elements.sideways.offsetWidth}px`;
  }
}

function addAnimation() {
  elements.container.classList.add('animated');
}

function removeAnimation() {
  elements.container.classList.remove('animated');
}



var styles = {
  load,
  addAnimation,
  removeAnimation,
  updateWidth,
}

let currentPage = 0;
let pages$1 = document.querySelectorAll('.page');



// exported functions
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const getCurrentPage = () => currentPage;
const getPages = () => pages$1;

async function moveTo(pageNumber) {
  // Remove scrollbar if moving from page with scrollbar.
  if (pages$1[currentPage].classList.contains('sw-scroll')) pages$1[currentPage].style.overflowY = 'hidden';

  elements.container.style.transform = `translate3d(-${elements.sideways.offsetWidth * pageNumber}px, 0px, 0px)`;
  currentPage = pageNumber;

  if (pages$1[currentPage].classList.contains('sw-scroll')) {
    await delay(300); // page move transition
    pages$1[currentPage].style.overflowY = 'scroll';
  }
}

async function moveLeft() {
  styles.addAnimation();
  moveTo(currentPage - 1);  
  await delay(300);
  styles.removeAnimation();
}

async function moveRight() {
  styles.addAnimation();
  moveTo(currentPage + 1);
  await delay(300);
  styles.removeAnimation();
}

function movePageToLeft(pageNumber) {
  let requestedPageElement = pages$1[pageNumber];
  let currentPageElement = pages$1[currentPage];

  if (pageNumber === currentPage) {
    console.warn('You may not move your current page somewhere else!');
    return
  }

  // remove requested page from pages and then move it to left of current element
  elements.container.removeChild(requestedPageElement);
  elements.container.insertBefore(requestedPageElement, currentPageElement);

  /* Moving a page that is to the right of the current page
   * to the left of the current page will push the current page off to the side.
   * Increase the pageNumber to account for this added page, and the move to the
   * new currentPage (which is actually the old)
   */ 
  if (pageNumber > currentPage) {
    moveTo(++currentPage);
  }

  // update DOM
  pages$1 = document.querySelectorAll('.page');
}

async function movePageToRight(pageNumber) {
  let requestedPageElement = pages$1[pageNumber];
  let currentPageElement = pages$1[currentPage];

  if (pageNumber === currentPage) {
    console.warn('You may not move your current page somewhere else!');
    return
  }

  // remove requested page from pages and then move it to left of current element
  elements.container.removeChild(requestedPageElement);
  elements.container.insertBefore(requestedPageElement, currentPageElement.nextSibling);

  /* Moving a page that is to the left of the current page
   * to the right of the current page will pull the current page off to the side.
   * Decrease the pageNumber to account for this added page, and the move to the
   * new currentPage (which is actually the old)
   */ 
  if (pageNumber < currentPage) {
    moveTo(--currentPage);
  }

  // update DOM
  pages$1 = document.querySelectorAll('.page');
}

function init(startingPage) {
  styles.load();
  moveTo(startingPage);
  styles.updateWidth(); // ensure correct width with if using scrollbars

  // event listeners
  window.addEventListener('resize', () => {
    styles.updateWidth();
    moveTo(getCurrentPage()); // center new page size in viewport
  });    
  elements.pageLefts.forEach(e => e.addEventListener('click', () => moveLeft()));
  elements.pageRights.forEach(e => e.addEventListener('click', () => moveRight()));
}

exports.init = init;
exports.delay = delay;
exports.moveTo = moveTo;
exports.moveLeft = moveLeft;
exports.moveRight = moveRight;
exports.movePageToLeft = movePageToLeft;
exports.movePageToRight = movePageToRight;
exports.getCurrentPage = getCurrentPage;
exports.getPages = getPages;

Object.defineProperty(exports, '__esModule', { value: true });

})));
