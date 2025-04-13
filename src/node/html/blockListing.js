"use strict";

import HTMLNode from "../../node/html";

export default class BlockListingHTMLNode extends HTMLNode {
  className(context) {
    const className = this.fromFirstChildNode((firstChildNode) => {
      const blockListingStartHTMLNode = firstChildNode, ///
            className = blockListingStartHTMLNode.className(context);

      return className;
    });

    return className;
  }

  static lines = 2;

  static fromNothing() { return HTMLNode.fromNothing(BlockListingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(BlockListingHTMLNode, outerNode); }
}
