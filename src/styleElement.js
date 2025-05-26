"use strict";

import { HEAD, STYLE } from "./constants";
import { insertAfterwards } from "./utilities/dom";
import { constructElement, destroyElement } from "./utilities/element";

export default class StyleElement {
  constructor(domElement) {
    const element = this; ///

    constructElement(element, domElement);
  }

  getDOMElement() {
    return this.domElement;
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
        styleDOMElement = document.createElement(STYLE),
        parentDOMElement = headDOMElement,  ///
        domElement = styleDOMElement; ///

  insertAfterwards(domElement, parentDOMElement);

  return domElement;
}
