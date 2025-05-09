"use strict";

import HTMLNode from "../../node/html";

import { EMPTY_STRING } from "../../constants";
import { ANCHOR_RULE_NAME } from "../../ruleNames";
import { ID_ATTRIBUTE_NAME } from "../../attributeNames";

export default class AnchorHTMLNode extends HTMLNode {
  constructor(outerNode, parentNode, childNodes, domElement, prepend, identifier) {
    super(outerNode, parentNode, childNodes, domElement);

    this.prepend = prepend;
    this.identifier = identifier;
  }

  getPrepend() {
    return this.prepend;
  }

  getIdentifier() {
    return this.identifier;
  }

  getRuleName() {
    const ruleName = ANCHOR_RULE_NAME;  ///

    return ruleName;
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
    const attributeValue = `#${this.prepend}-${this.identifier}`; ///

    return attributeValue;
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  ///

    return string;
  }

  static tagName = "a";

  static className = "anchor";

  static fromPrependAndIdentifier(prepend, identifier) {
    const anchorHTMLNode = HTMLNode.fromNothing(AnchorHTMLNode, prepend, identifier);

    return anchorHTMLNode;
  }
}
