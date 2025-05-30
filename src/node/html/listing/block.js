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

  static fromNothing(Class) {
    if (Class === undefined) {
      Class = BlockListingHTMLNode; ///
    }

    const blockListingHTMLNode = HTMLNode.fromNothing(Class);

    return blockListingHTMLNode;
  }

  static fromOuterNode(Class, outerNode) {
    if (Class === undefined) {
      outerNode = Class;  ///

      Class = BlockListingHTMLNode; ///
    }

    const blockListingHTMLNode = HTMLNode.fromOuterNode(Class, outerNode);

    return blockListingHTMLNode;
  }
}
