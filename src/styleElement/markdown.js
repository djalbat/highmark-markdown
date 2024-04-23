"use strict";

import MediaType from "../style/mediaType";
import StyleElement from "../styleElement";
import SelectorsList from "../style/selectorsList";

import { EMPTY_STRING } from "../constants";
import { createDOMElement } from "../styleElement";
import { cssFromMarkdownStyleMediaTypeAndSelectorsList } from "../utilities/css";

export default class MarkdownStyleElement extends StyleElement {
  constructor(mediaType, domElement, selectorsList) {
    super(mediaType, domElement);

    this.selectorsList = selectorsList;
  }

  getSelectorsList() {
    return this.selectorsList;
  }

  update(markdownStyle) {
    const mediaType = this.getMediaType(),
          css = cssFromMarkdownStyleMediaTypeAndSelectorsList(markdownStyle, mediaType, this.selectorsList);

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

    const mediaType = MediaType.fromMediaTypeName(mediaTypeName),
          domElement = createDOMElement(),
          selectorsList = SelectorsList.fromSelectorsString(selectorString),
          markdownStyleElement = new Class(mediaType, domElement, selectorsList);

    return markdownStyleElement;
  }
}
