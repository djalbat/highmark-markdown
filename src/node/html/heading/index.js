"use strict";

import HTMLNode from "../../../node/html";

import { INDEX_HEADING_RULE_NAME } from "../../../ruleNames";

export default class IndexHeadingHTMLNode extends HTMLNode {
  constructor(outerNode, parentNode, childNodes, domElement, letter) {
    super(outerNode, parentNode, childNodes, domElement);

    this.letter = letter;
  }

  getLetter() {
    return this.letter;
  }

  getRuleName() {
    const ruleName = INDEX_HEADING_RULE_NAME;

    return ruleName;
  }

  childNodesAsHTML(indent, context) {
    const childNodesHTML = `${this.letter}
`;

    return childNodesHTML;
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  ///

    return string;
  }

  static tagName = "h3";

  static className = "index";

  static fromLetter(letter) {
    const indexHeadingHTMLNode = HTMLNode.fromNothing(IndexHeadingHTMLNode, letter);

    return indexHeadingHTMLNode;
  }
}
