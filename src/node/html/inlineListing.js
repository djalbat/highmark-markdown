"use strict";

import HTMLNode from "../../node/html";

export default class InlineListingHTMLNode extends HTMLNode {
  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = `${content}
`;

    return childNodesHTML;
  }

  childNodesAsPlainText(indent, context) {
    const content = this.content(context),
          childNodesPlainText = content; ///

    return childNodesPlainText;
  }

  static fromNothing() { return HTMLNode.fromNothing(InlineListingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(InlineListingHTMLNode, outerNode); }
}
