"use strict";

import HTMLNode from "../../node/html";

import { removeBackticks } from "../../utilities/string";

export default class InlineListingHTMLNode extends HTMLNode {
  childNodesAsHTML(indent, context) {
    let childNodesHTML;

    let content = this.content(context);

    content = removeBackticks(content); ///

    childNodesHTML = content; ///

    return childNodesHTML;
  }

  static fromNothing() { return HTMLNode.fromNothing(InlineListingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(InlineListingHTMLNode, outerNode); }
}
