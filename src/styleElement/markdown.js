"use strict";

import StyleElement from "../styleElement";

import { EMPTY_STRING } from "../constants";
import { createDOMElement } from "../styleElement";
import { cssFromMarkdownStyleAndSelectorsString } from "../utilities/grammar";

export default class MarkdownStyleElement extends StyleElement {
  constructor(domElement, selectorsString) {
    super(domElement);

    this.selectorsString = selectorsString;
  }

  getSelectorsString() {
    return this.selectorsString;
  }

  update(markdownStyle) {
    const css = cssFromMarkdownStyleAndSelectorsString(markdownStyle, this.selectorsString);

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

  static fromSelectorsString(Class, selectorsString) {
    if (selectorsString === undefined) {
      selectorsString = Class; ///

      Class = MarkdownStyleElement; ///
    }

    const domElement = createDOMElement(),
          markdownStyleElement = new Class(domElement, selectorsString);

    return markdownStyleElement;
  }
}
