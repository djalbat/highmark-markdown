"use strict";

import HTMLNode from "../../node/html";

export default class TopmostHTMLNode extends HTMLNode {
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

  asHTML(context) {
    let html;

    const indent = null,
          childNodesHTML = this.childNodesAsHTML(indent, context);

    html = childNodesHTML;  ///

    return html;
  }

  static fromNothing() { return HTMLNode.fromNothing(TopmostHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TopmostHTMLNode, outerNode); }
}
