"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

class InlineTextMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(InlineTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(InlineTextMarkdownNode.prototype, contentMixins);

export default InlineTextMarkdownNode;