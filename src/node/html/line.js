"use strict";

import HTMLNode from "../../node/html";

import { childNodesAsHTML, childNodesAsPlainText, childNodesAsDOMElements } from "../../utilities/childNodes";

export default class LineHTMLNode extends HTMLNode {
  mount(parentDOMElement, siblingDOMElement, context) {
    this.domElement = this.createDOMElement(context);

    parentDOMElement.insertBefore(this.domElement, siblingDOMElement)

    parentDOMElement = this.domElement; ///

    const childDOMElements = this.createChildDOMElements(context);

    childDOMElements.forEach((childDOMElement) => {
      parentDOMElement.appendChild(childDOMElement);
    });
  }

  unmount(parentDOMElement, context) {
    {
      let childDOMElement;

      const parentDOMElement = this.domElement; ///

      childDOMElement = parentDOMElement.firstChild || null;

      while (childDOMElement !== null) {
        parentDOMElement.removeChild(childDOMElement);

        childDOMElement = parentDOMElement.firstChild || null;
      }
    }

    parentDOMElement.removeChild(this.domElement);

    this.domElement = null;
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
    const htmlNode = this,  ///
          html = childNodesAsHTML(htmlNode, context),
          childNodesHTML = html;  ///

    return childNodesHTML;
  }

  childNodesAsPlainText(context) {
    const htmlNode = this,  ///
          plainText = childNodesAsPlainText(htmlNode, context);

    return plainText;
  }

  createChildDOMElements(context) {
    const htmlNode = this,  ///
          domElements = childNodesAsDOMElements(htmlNode, context),
          childDOMElements = domElements; ///

    return childDOMElements;
  }

  static fromNothing() { return HTMLNode.fromNothing(LineHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(LineHTMLNode, outerNode); }
}
