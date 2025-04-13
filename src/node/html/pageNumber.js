"use strict";

import HTMLNode from "../../node/html";

export default class PageNumberHTMLNode extends HTMLNode {
  getPageNumber() { return this.outerNode.getPageNumber(); }

  createDOMElement(context) {
    let domElement;

    const pageNumber = this.getPageNumber(),
          content = pageNumber, ///
          textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context)

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  asPlainText(context) {
    const pageNumber = this.getPageNumber(),
          plainText = pageNumber; ///

    return plainText;
  }

  childNodesAsHTML(indent, context) {
    const pageNumber = this.getPageNumber(),
          childNodesHTML = `${pageNumber}
`;

    return childNodesHTML;
  }

  static fromNothing() { return HTMLNode.fromNothing(PageNumberHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(PageNumberHTMLNode, outerNode); }
}
