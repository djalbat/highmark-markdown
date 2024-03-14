"use strict";

import MarkdownNode from "../../node/markdown";

export default class InlineListingMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(InlineListingMarkdownNode, ruleName, childNodes, ambiguous); }
}
