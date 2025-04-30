"use strict";

import HTMLNode from "../../node/html";

import { EMPTY_STRING, CARRIAGE_RETURN } from "../../constants";

export default class BlockLineHTMLNode extends HTMLNode {
  content(context) {
    const content = CARRIAGE_RETURN;

    return content;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    let domElement;

    domElement = this.createDOMElement(context);

    this.setDOMElement(domElement);

    parentDOMElement.insertBefore(domElement, siblingDOMElement)

    parentDOMElement = domElement; ///

    siblingDOMElement = null;

    const content = this.content(context),
          textNode = document.createTextNode(content);

    domElement = textNode;  ///

    parentDOMElement.insertBefore(domElement, siblingDOMElement)
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

  asHTML(indent, context) {
    let html;

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context);

    html = `${startingTag}${childNodesHTML}${closingTag}
`;

    return html;
  }

  childNodesAsPlainText(context) {
    const childNodesPlainText = this.reduceChildNode((childNodesPlainText, childNode) => {
      const childNodePlainText = childNode.asPlainText(context);

      childNodesPlainText = `${childNodesPlainText}${childNodePlainText}`;

      return childNodesPlainText;
    }, EMPTY_STRING);

    return childNodesPlainText;
  }

  static lines = 2;

  static tagName = "span";

  static className = "block-line";

  static fromNothing() { return HTMLNode.fromNothing(BlockLineHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(BlockLineHTMLNode, outerNode); }
}
