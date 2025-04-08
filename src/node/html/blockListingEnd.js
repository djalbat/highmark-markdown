"use strict";

import HHTMLNode from "../../node/html";

export default class BlockListingHEndHTMLNode extends HHTMLNode {
  static lines = 2;

  static fromNothing() { return HHTMLNode.fromNothing(BlockListingHEndHTMLNode); }

  static fromOuterNode(outerNode) { return HHTMLNode.fromOuterNode(BlockListingHEndHTMLNode, outerNode); }
}
