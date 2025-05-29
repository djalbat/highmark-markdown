"use strict";

import LineHTMLNode from "../../../node/html/line";

import { assignIndexes, deleteIndexes } from "../../../utilities/whitespace";

export default class BlockLineHTMLNode extends LineHTMLNode {
  lines(context) {
    const { lines } = this.constructor;

    return lines;
  }

  childNodesAsHTML(indent, context) {
    let childNodesHTML;

    const htmlNode = this;  ///

    assignIndexes(htmlNode, context);

    childNodesHTML = super.childNodesAsHTML(indent, context);

    deleteIndexes(context);

    return childNodesHTML;
  }

  static lines = 2;

  static tagName = "span";

  static className = "block-line";

  static fromNothing() { return HTMLNode.fromNothing(BlockLineHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(BlockLineHTMLNode, outerNode); }
}
