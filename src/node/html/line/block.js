"use strict";

import LineHTMLNode from "../../../node/html/line";

export default class BlockLineHTMLNode extends LineHTMLNode {
  lines(context) {
    const { lines } = this.constructor;

    return lines;
  }

  static lines = 1;

  static tagName = "span";

  static className = "block-line";

  static fromNothing() { return LineHTMLNode.fromNothing(BlockLineHTMLNode); }

  static fromOuterNode(outerNode) { return LineHTMLNode.fromOuterNode(BlockLineHTMLNode, outerNode); }
}
