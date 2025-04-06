"use strict";

import HTMLNode from "../../node/html";

export default class ErrorHTMLNode extends HTMLNode {
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

  static fromNothing() { return HTMLNode.fromNothing(ErrorHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ErrorHTMLNode, outerNode); }
}
