"use strict";

import StyleElement from "../styleElement";

import { EMPTY_STRING } from "../constants";
import { createDOMElement } from "../styleElement";
import { cssFromMarkdownStyleAndCSSSelectorsString } from "../utilities/grammar";

export default class MarkdownStyleElement extends StyleElement {
  constructor(domElement, ccsSelectorsString) {
    super(domElement);

    this.ccsSelectorsString = ccsSelectorsString;
  }

  getCSSSelectorsString() {
    return this.ccsSelectorsString;
  }

  update(markdownStyle) {
    const css = cssFromMarkdownStyleAndCSSSelectorsString(markdownStyle, this.ccsSelectorsString);

    this.setCSS(css);

    return css;
  }

  reset() {
    const markdownStyle = EMPTY_STRING;

    this.update(markdownStyle)
  }

  remove() {
    super.remove();

    this.destroy();
  }

  static fromCSSSelectorsString(Class, ccsSelectorsString) {
    if (ccsSelectorsString === undefined) {
      ccsSelectorsString = Class; ///

      Class = MarkdownStyleElement; ///
    }

    const domElement = createDOMElement(),
          markdownStyleElement = new Class(domElement, ccsSelectorsString);

    return markdownStyleElement;
  }
}
