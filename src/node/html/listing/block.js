"use strict";

import HTMLNode from "../../../node/html";

export default class BlockListingHTMLNode extends HTMLNode {
  className(context) {
    const markdownNode = this.getMarkdownNode(),
          className = markdownNode.className(context);

    return className;
  }

  static lines = 2;

  static tagName = "pre";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(BlockListingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(BlockListingHTMLNode, outerNode); }
}
