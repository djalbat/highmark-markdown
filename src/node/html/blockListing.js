"use strict";

import HTMLNode from "../../node/html";

export default class BlockListingHTMLNode extends HTMLNode {
  className(context) { return this.outerNode.className(context); }

  asHTML(indent, context) {
    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = `${startingTag}${childNodesHTML}${closingTag}`;

    return html;
  }

  static lines = 2;

  static fromNothing() { return HTMLNode.fromNothing(BlockListingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(BlockListingHTMLNode, outerNode); }
}
