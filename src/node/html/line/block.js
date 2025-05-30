"use strict";

import LineHTMLNode from "../../../node/html/line";

import { assignIndexes, deleteIndexes } from "../../../utilities/whitespace";

export default class BlockLineHTMLNode extends LineHTMLNode {
  lines(context) {
    const { lines } = this.constructor;

    return lines;
  }

  content(context) {
    const plainText = this.asPlainText(context),
          content = plainText;  ///

    return content;
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

  static fromNothing() { return LineHTMLNode.fromNothing(BlockLineHTMLNode); }

  static fromOuterNode(outerNode) { return LineHTMLNode.fromOuterNode(BlockLineHTMLNode, outerNode); }
}
