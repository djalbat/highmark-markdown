"use strict";

import MediaType from "../style/mediaType";
import StyleElement from "../styleElement";
import SelectorsList from "../style/selectorsList";

import { EMPTY_STRING } from "../constants";
import { createDOMElement } from "../styleElement";
import { cssFromMarkdownStyleMediaTypeAndSelectorsList } from "../utilities/css";

export default class MarkdownStyleElement extends StyleElement {
  constructor(domElement, mediaType, selectorsList) {
    super(domElement);

    this.mediaType = mediaType;
    this.selectorsList = selectorsList;
  }

  getMediaType() {
    return this.mediaType;
  }

  getSelectorsList() {
    return this.selectorsList;
  }

  update(markdownStyle) {
    const css = cssFromMarkdownStyleMediaTypeAndSelectorsList(markdownStyle, this.mediaType, this.selectorsList);

    this.setCSS(css);

    return css;
  }

  reset() {
    const markdownStyle = EMPTY_STRING;

    this.update(markdownStyle)
  }

  static fromMediaTypeNameAndSelectorsString(Class, mediaTypeName, selectorString) {
    if (selectorString === undefined) {
      selectorString = mediaTypeName; ///

      mediaTypeName = Class; ///

      Class = MarkdownStyleElement; ///
    }

    const domElement = createDOMElement(),
          mediaType = MediaType.fromMediaTypeName(mediaTypeName),
          selectorsList = SelectorsList.fromSelectorsString(selectorString),
          markdownStyleElement = new Class(domElement, mediaType, selectorsList);

    return markdownStyleElement;
  }
}
