"use strict";

import contentMixins from "../../mixins/content";

import MarkdownNode from "../markdown";

class StrongTextMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(StrongTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(StrongTextMarkdownNode.prototype, contentMixins);

export default StrongTextMarkdownNode;