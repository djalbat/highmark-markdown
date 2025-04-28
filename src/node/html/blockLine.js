"use strict";

import HTMLNode from "../../node/html";

import { EMPTY_STRING, CARRIAGE_RETURN } from "../../constants";

export default class BlockLineHTMLNode extends HTMLNode {
  mount(parentDOMElement, siblingDOMElement, context) {
    super.mount(parentDOMElement, siblingDOMElement, context);

    let domElement;

    domElement = this.getDOMElement();

    parentDOMElement = domElement;  ///

    siblingDOMElement = null;

    const content = CARRIAGE_RETURN,
          textNode = document.createTextNode(content);

    domElement = textNode;  ///

    parentDOMElement.insertBefore(domElement, siblingDOMElement)
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
