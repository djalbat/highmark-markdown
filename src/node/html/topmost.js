"use strict";

import HTMLNode from "../../node/html";

export default class TopmostHTMLNode extends HTMLNode {
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
