"use strict";

import HTMLNode from "../../node/html";

export default class PageNumberHTMLNode extends HTMLNode {
  constructor(outerNode, parentNode, childNodes, domElement, pageNumber) {
    super(outerNode, parentNode, childNodes, domElement);

    this.pageNumber = pageNumber;
  }

  getPageNumber() {
    return this.pageNumber;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    const content = this.pageNumber,
          textNode = document.createTextNode(content),
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
  }

  childNodesAsHTML(indent, context) {
    const childNodesHTML = `${this.pageNumber}
`;

    return childNodesHTML;
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
