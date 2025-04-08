"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

class InlineListingMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(InlineListingMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(InlineListingMarkdownNode.prototype, contentMixins);

export default InlineListingMarkdownNode;
