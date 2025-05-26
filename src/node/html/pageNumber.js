"use strict";

import HTMLNode from "../../node/html";

import { EMPTY_STRING } from "../../constants";
import { remove, insertAfterwards } from "../../utilities/dom";
import { PAGE_NUMBER_MARKDOWN_RULE_NAME } from "../../ruleNames/markdown";

export default class PageNumberHTMLNode extends HTMLNode {
  constructor(outerNode, parentNode, childNodes, domElement, pageNumber) {
    super(outerNode, parentNode, childNodes, domElement);

    this.pageNumber = pageNumber;
  }

  getPageNumber() {
    return this.pageNumber;
  }

  getRuleName() {
    const ruleName = PAGE_NUMBER_MARKDOWN_RULE_NAME;

    return ruleName;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    let domElement;

    super.mount(parentDOMElement, siblingDOMElement, context);

    domElement = this.getDOMElement();

    parentDOMElement = domElement;  ///

    const content = this.pageNumber,  ///
          textNode = document.createTextNode(content);

    domElement = textNode;  ///

    insertAfterwards(domElement, parentDOMElement);

    domElement = this.getDOMElement();

    siblingDOMElement = domElement; ///

    return siblingDOMElement;
  }

  unmount(parentDOMElement, context) {
    {
      let domElement;

      domElement = this.getDOMElement();

      const parentDOMElement = domElement,  ///
            lastChild = domElement.lastChild

      domElement = lastChild;  ///

      remove(domElement, parentDOMElement);
    }

    super.unmount(parentDOMElement, context);
  }

  asPlainText(context) {
    const plainText = EMPTY_STRING;

    return plainText;
  }

  childNodesAsHTML(indent, context) {
    const childNodesHTML = `${this.pageNumber}
`;

    return childNodesHTML;
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  ///

    return string;
  }

  static tagName = "span";

  static className = "page-number";

  static fromPageNumber(pageNumber) {
    const pageNumberHTMLNode = HTMLNode.fromNothing(PageNumberHTMLNode, pageNumber);

    return pageNumberHTMLNode;
  }
}
