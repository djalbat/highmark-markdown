"use strict";

import HTMLNode from "../../node/html";

export default class IndexItemHTMLNode extends HTMLNode {
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
    indent = null;

    const childNodesHTML = super.childNodesAsHTML(indent, context);

    return childNodesHTML;
  }

  static fromNothing() { return HTMLNode.fromNothing(IndexItemHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(IndexItemHTMLNode, outerNode); }
}
