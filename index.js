(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.sideways = {})));
}(this, (function (exports) { 'use strict';

const sideways = document.querySelector('.sideways');
const container = document.querySelector('.sideways > .pages');
const pageLefts = document.querySelectorAll('.page-left');
const pageRights = document.querySelectorAll('.page-right');

const pages = document.querySelectorAll('.page');
const numPages = pages.length;

let pageWidth = sideways.offsetWidth;

function updateWidth() {
  pageWidth = sideways.offsetWidth;
}

var elements = {
  sideways,
  container,
  pageLefts,
  pageRights,
  pages,
  pageWidth,
  numPages,  
  updateWidth,
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
  width: ${elements.pageWidth * elements.numPages}px;
  height: 100%;
  display: block;
  position: relative;
}

.page {
  width: ${elements.pageWidth}px;
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

function updateWidth$1() {
  elements.container.style.width = `${elements.pageWidth * elements.numPages}px`;
  for (let page of elements.pages) {
    page.style.width = `${elements.pageWidth}px`;
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
  updateWidth: updateWidth$1,
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

let currentPage = 0;


// private functions
function addPageMoveListeners() {
  elements.pageLefts.forEach(e => e.addEventListener('click', () => movePageLeft()));
  elements.pageRights.forEach(e => e.addEventListener('click', () => movePageRight()));
}



// exported functions
function moveToPage(pageNumber) {
  elements.container.style.transform = `translate3d(-${elements.pageWidth * pageNumber}px, 0px, 0px)`;
}

async function movePageLeft() {
  styles.addAnimation();
  moveToPage(--currentPage);  
  await delay(300);
  styles.removeAnimation();
}

async function movePageRight() {
  styles.addAnimation();
  moveToPage(++currentPage);
  await delay(300);
  styles.removeAnimation();
}




function init(startingPage) {
  document.addEventListener('DOMContentLoaded', async () => {
    styles.load();
    
    moveToPage(startingPage);
    currentPage = startingPage;

    // TODO update pages width based on pages not fixed

    addPageMoveListeners();

    window.addEventListener('resize', () => {
      elements.updateWidth();
      styles.updateWidth();
      console.log('resize!');
    });
  });
}

exports.init = init;
exports.movePageRight = movePageRight;
exports.movePageLeft = movePageLeft;
exports.moveToPage = moveToPage;

Object.defineProperty(exports, '__esModule', { value: true });

})));
