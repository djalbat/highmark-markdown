"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

class StrongTextMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(StrongTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(StrongTextMarkdownNode.prototype, contentMixins);

export default StrongTextMarkdownNode;