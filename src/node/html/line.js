"use strict";

import HTMLNode from "../../node/html";

import { htmlFromMarkdownNode, plainTextFromMarkdownNode, domElementsFromMarkdownNode } from "../../utilities/line";

export default class LineHTMLNode extends HTMLNode {
  mount(parentDOMElement, siblingDOMElement, context) {
    this.domElement = this.createDOMElement(context);

    parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
  }

  unmount(parentDOMElement, context) {
    if (this.domElement !== null) {
      parentDOMElement.removeChild(this.domElement);

      this.domElement = null;
    }
  }

  asHTML(indent, context) {
    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = (indent !== null) ?
                  `${indent}${startingTag}${childNodesHTML}${closingTag}
`:                   `${startingTag}${childNodesHTML}${closingTag}`;

    return html;
  }

  createDOMElement(context) {
    const markdownNode = this,
          domElement = super.createDOMElement(context),
          domElements = domElementsFromMarkdownNode(markdownNode, context),
          parentDOMElement = domElement,  ///
          childNodeDOMElements = domElements; ///

    childNodeDOMElements.forEach((childNodeDOMElement) => {
      const domElement = childNodeDOMElement; ///

      parentDOMElement.appendChild(domElement);
    });

    return domElement;
  }

  childNodesAsPlainText(context) {
    const markdownNode = this, ///
          plainText = plainTextFromMarkdownNode(markdownNode, context),
          childNodesPlainText = plainText;  ///

    return childNodesPlainText;
  }

  childNodesAsHTML(indent, context) {
    const markdownNode = this,
          html = htmlFromMarkdownNode(markdownNode, context),
          childNodesHTML = html;  ///

    return childNodesHTML;
  }

  static fromNothing() { return HTMLNode.fromNothing(LineHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(LineHTMLNode, outerNode); }
}
