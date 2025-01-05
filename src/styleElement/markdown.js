"use strict";

import StyleElement from "../styleElement";
import SelectorsList from "../style/selectorsList";

import { EMPTY_STRING } from "../constants";
import { createDOMElement } from "../styleElement";
import { cssFromMarkdownStyleAndSelectorsList } from "../utilities/css";

export default class MarkdownStyleElement extends StyleElement {
  constructor(domElement, selectorsList) {
    super(domElement);

    this.selectorsList = selectorsList;
  }

  getSelectorsList() {
    return this.selectorsList;
  }

  update(markdownStyle) {
    const css = cssFromMarkdownStyleAndSelectorsList(markdownStyle, this.selectorsList);

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

  static fromSelectorsString(Class, selectorString) {
    if (selectorString === undefined) {
      selectorString = Class; ///

      Class = MarkdownStyleElement; ///
    }

    const domElement = createDOMElement(),
          selectorsList = SelectorsList.fromSelectorsString(selectorString),
          markdownStyleElement = new Class(domElement, selectorsList);

    return markdownStyleElement;
  }
}
