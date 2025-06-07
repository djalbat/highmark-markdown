"use strict";

import HTMLNode from "../../../node/html";

import { INDEX_HEADING_MARKDOWN_RULE_NAME } from "../../../ruleNames/markdown";
import { remove, insertAfter, insertAfterwards, insertBeforehand } from "../../../utilities/dom";

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

    (siblingDOMElement !== null) ?
      insertAfter(domElement, parentDOMElement, siblingDOMElement) :
        insertBeforehand(domElement, parentDOMElement);

    parentDOMElement = domElement; ///

    const content = this.letter,  ///
          textNode = document.createTextNode(content);

    domElement = textNode;  ///

    insertAfterwards(domElement, parentDOMElement);

    domElement = this.getDOMElement();

    siblingDOMElement = domElement; ///

    return siblingDOMElement;
  }

  unmount(parentDOMElement) {
    let domElement;

    {
      domElement = this.getDOMElement();

      const parentDOMElement = domElement,  ///
            firstChild = domElement.firstChild;

      domElement = firstChild;  ///

      remove(domElement, parentDOMElement);
    }

    domElement = this.getDOMElement();

    remove(domElement, parentDOMElement);

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
