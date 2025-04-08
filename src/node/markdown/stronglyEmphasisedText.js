"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

class StronglyEmphasisedTextMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(StronglyEmphasisedTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(StronglyEmphasisedTextMarkdownNode.prototype, contentMixins);

export default StronglyEmphasisedTextMarkdownNode;
