"use strict";

import HTMLNode from "../../node/html";

import { EMPTY_STRING } from "../../constants";
import { ID_ATTRIBUTE_NAME } from "../../attributeNames";

export default class AnchorHTMLNode extends HTMLNode {
  constructor(outerNode, parentNode, childNodes, domElement, identifier) {
    super(outerNode, parentNode, childNodes, domElement);

    this.identifier = identifier;
  }

  getIdentifier() {
    return this.identifier;
  }

  content(context) {
    const content = EMPTY_STRING;

    return content;
  }

  attributeName(context) {
    const attributeName = ID_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = `${this.prepend}-${this.identifier}`;

    return attributeValue;
  }

  static tagName = "a";

  static className = "anchor";

  static fromIdentifier(identifier) {
    const anchorHTMLNode = HTMLNode.fromNothing(AnchorHTMLNode, identifier);

    return anchorHTMLNode;
  }
}
