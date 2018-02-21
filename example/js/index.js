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
const pageWidth = pages[0].offsetWidth;

var elements = {
  sideways,
  container,
  pageLefts,
  pageRights,
  pages,
  pageWidth
}

function load() {
  document.documentElement.style.height = '100%';
  document.body.style.height = '100%';

  Object.assign(elements.sideways.style, {
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  });

  Object.assign(elements.container.style, {
    width: '300%',
    height: '100%',
    display: 'block',
    position: 'relative'
  });

  for (let page of elements.pages) {
    Object.assign(page.style, {
      width: '33.3333%',
      float: 'left',
      height: '100%'
    });
  }
}

function addTransitions() {
  elements.sideways.style.transition = 'all .3s ease-out';
  elements.container.style.transition = 'all .5s ease-out';
}

var styles = {
  load,
  addTransitions
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

let currentPage = 0;


// private methods
function addPageMoveListeners() {
  elements.pageLefts.forEach(e => e.addEventListener('click', () => movePageLeft()));
  elements.pageRights.forEach(e => e.addEventListener('click', () => movePageRight()));
}



// exported methods
function moveToPage(pageNumber) {
  elements.container.style.transform = `translate3d(-${elements.pageWidth * pageNumber}px, 0px, 0px)`;
}

function movePageLeft() {
  moveToPage(--currentPage);
}

function movePageRight() {
  moveToPage(++currentPage);
}



function init(startingPage) {
  document.addEventListener('DOMContentLoaded', async () => {
    moveToPage(startingPage);
    currentPage = startingPage;

    styles.load();

    // stop 600ms page transition from showing on load
    await delay(600);
    styles.addTransitions();

    addPageMoveListeners();
  });
}

exports.init = init;
exports.movePageRight = movePageRight;
exports.movePageLeft = movePageLeft;
exports.moveToPage = moveToPage;

Object.defineProperty(exports, '__esModule', { value: true });

})));
