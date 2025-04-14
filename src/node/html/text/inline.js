"use strict";

import HTMLNode from "../../../node/html";

import { EMPTY_STRING } from "../../../constants";

export default class InlineTextHTMLNode extends HTMLNode {
  mount(parentDOMElement, siblingDOMElement, context) {
    this.childNodes.forEach((childNode) => {
      childNode.mount(parentDOMElement, siblingDOMElement, context);
    });
  }

  unmount(parentDOMElement, context) {
    this.childNodes.forEach((childNode) => {
      childNode.unmount(parentDOMElement, context);
    });
  }

  asHTML(indent, context) {
    const childNodesHTML = this.childNodesAsHTML(indent, context),
          html = childNodesHTML;  ///

    return html;
  }

  childNodesAsHTML(indent, context) {
    let childNodesHTML;

    childNodesHTML = super.childNodesAsHTML(indent, context);

    childNodesHTML = `${childNodesHTML}
`;

    return childNodesHTML;
  }

  childNodesAsPlainText(context) {
    const childNodesPlainText = this.reduceChildNode((childNodesPlainText, childNode) => {
      const childNodePlainText = childNode.asPlainText(context);

      childNodesPlainText = `${childNodesPlainText}${childNodePlainText}`;

      return childNodesPlainText;
    }, EMPTY_STRING);

    return childNodesPlainText;
  }

  static tagName = null;

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(InlineTextHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(InlineTextHTMLNode, outerNode); }
}
