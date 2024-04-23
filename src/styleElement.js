"use strict";

import { HEAD, STYLE } from "./constants";

export default class StyleElement {
  constructor(mediaType, domElement) {
    this.mediaType = mediaType;
    this.domElement = domElement;
  }

  getMediaType() {
    return this.mediaType;
  }

  getDOMElement() {
    return this.domElement;
  }

  setMediaType(mediaType) {
    this.mediaType = mediaType;
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

  remove() { this.domElement.remove(); }
}

export function createDOMElement() {
  const headDOMElement = document.querySelector(HEAD),
        styleDOMElement = document.createElement(STYLE);

  headDOMElement.appendChild(styleDOMElement);

  const domElement = styleDOMElement; ///

  return domElement;
}
