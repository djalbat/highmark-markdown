"use strict";

import HTMLNode from "../../html";

export default class PageNumberDirectiveHTMLNode extends HTMLNode {
  getRuleName() {}  ///

  tagName(context) {} ///

  className(context) {} ///

  closingTag(context) {}  ///

  startingTag(context) {} ///

  selfClosingTag(context) {}  ///

  attributeName(context) {} ///

  attributeValue(context) {}  ///

  adjustIndent(indent) {} ///

  getPageNumber() { return this.outerNode.getPageNumber(); }

  content(context) {
    const pageNumber = this.getPageNumber(),
          content = pageNumber;

    return content;
  }

  asHTML(indent, context) {
    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = `${indent}${startingTag}${childNodesHTML}${closingTag}
`;

    return html;
  }

  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  createDOMElement(context) {
    let domElement;

    const content = this.content(context),
          textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context);

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;

    return domElement;
  }

  static fromNothing() { return HTMLNode.fromNothing(PageNumberDirectiveHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(PageNumberDirectiveHTMLNode, outerNode); }
}
