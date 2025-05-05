"use strict";

import HTMLNode from "../../node/html";

import { EMPTY_STRING } from "../../constants";
import { PAGE_NUMBER_RULE_NAME } from "../../ruleNames";

export default class PageNumberHTMLNode extends HTMLNode {
  constructor(outerNode, parentNode, childNodes, domElement, pageNumber) {
    super(outerNode, parentNode, childNodes, domElement);

    this.pageNumber = pageNumber;
  }

  getPageNumber() {
    return this.pageNumber;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    super.mount(parentDOMElement, siblingDOMElement, context);

    let domElement;

    domElement = this.getDOMElement();

    parentDOMElement = domElement;  ///

    siblingDOMElement = null;

    const content = this.pageNumber,  ///
          textNode = document.createTextNode(content);

    domElement = textNode;  ///

    parentDOMElement.insertBefore(domElement, siblingDOMElement);
  }

  unmount(parentDOMElement, context) {
    {
      let domElement;

      domElement = this.getDOMElement();

      const parentDOMElement = domElement,  ///
            lastChild = domElement.lastChild

      domElement = lastChild;  ///

      parentDOMElement.removeChild(domElement);
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
    const string = PAGE_NUMBER_RULE_NAME;

    return string;
  }

  static tagName = "span";

  static className = "page-number";

  static fromNothing() { return HTMLNode.fromNothing(PageNumberHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(PageNumberHTMLNode, outerNode); }

  static fromPageNumber(pageNumber) {
    const pageNumberHTMLNode = HTMLNode.fromNothing(PageNumberHTMLNode, pageNumber);

    return pageNumberHTMLNode;
  }
}
