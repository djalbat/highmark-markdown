"use strict";

import MarkdownNode from "../../node/markdown";

export default class BlockListingEndMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(BlockListingEndMarkdownNode, ruleName, childNodes, ambiguous); }
}
