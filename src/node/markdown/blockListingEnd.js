"use strict";

import MarkdownNode from "../../node/markdown";

export default class BlockListingEndMarkdownNode extends MarkdownNode {
  static lines = 2;

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockListingEndMarkdownNode, ruleName, childNodes, opacity); }
}
