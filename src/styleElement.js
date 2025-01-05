"use strict";

import { elementUtilities } from "easy";

import { HEAD, STYLE } from "./constants";

const { constructElement, destroyElement } = elementUtilities;

export default class StyleElement {
  constructor(domElement) {
    const element = this; ///

    constructElement(element, domElement);
  }

  getDOMElement() {
    return this.domElement;
  }

  setDOMElement(domElement) {
    this.domElement = domElement;
  }

  getInnerHTML() {  return this.domElement.innerHTML; }

  setInnerHTML(innerHTML) { this.domElement.innerHTML = innerHTML; }

  setCSS(css) {
    const innerHTML = `
${css}
`;

    this.setInnerHTML(innerHTML);
  }

  remove() {
    this.domElement.remove();
  }

  destroy() {
    const element = this; ///

    destroyElement(element);
  }
}

export function createDOMElement() {
  const headDOMElement = document.querySelector(HEAD),
        styleDOMElement = document.createElement(STYLE);

  headDOMElement.appendChild(styleDOMElement);

  const domElement = styleDOMElement; ///

  return domElement;
}
