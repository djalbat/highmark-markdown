"use strict";

import HTMLNode from "../../../node/html";

import { insertAfter } from "../../../utilities/dom";
import { INDEX_HEADING_MARKDOWN_RULE_NAME } from "../../../ruleNames/markdown";

export default class IndexHeadingHTMLNode extends HTMLNode {
  constructor(outerNode, parentNode, childNodes, domElement, letter) {
    super(outerNode, parentNode, childNodes, domElement);

    this.letter = letter;
  }

  getLetter() {
    return this.letter;
  }

  getRuleName() {
    const ruleName = INDEX_HEADING_MARKDOWN_RULE_NAME;

    return ruleName;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    let domElement;

    domElement = this.createDOMElement(context);

    this.setDOMElement(domElement);

    insertAfter(domElement, parentDOMElement, siblingDOMElement);

    parentDOMElement = domElement; ///

    siblingDOMElement = null;

    const content = this.letter,  ///
          textNode = document.createTextNode(content);

    domElement = textNode;  ///

    insertAfter(domElement, parentDOMElement, siblingDOMElement);
  }

  unmount(parentDOMElement, context) {
    let domElement;

    {
      domElement = this.getDOMElement();

      const parentDOMElement = domElement,  ///
            firstChild = domElement.firstChild

      domElement = firstChild;  ///

      parentDOMElement.removeChild(domElement);
    }

    domElement = this.getDOMElement();

    parentDOMElement.removeChild(domElement);

    this.resetDOMElement();
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
