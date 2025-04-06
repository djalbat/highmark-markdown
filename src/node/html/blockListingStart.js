"use strict";

import HHTMLNode from "../../node/html";

export default class BlockListingHStartHTMLNode extends HHTMLNode {
  className(context) { return this.outerNode.className(context); }

  static fromNothing() { return HHTMLNode.fromNothing(BlockListingHStartHTMLNode); }

  static fromOuterNode(outerNode) { return HHTMLNode.fromOuterNode(BlockListingHStartHTMLNode, outerNode); }
}
