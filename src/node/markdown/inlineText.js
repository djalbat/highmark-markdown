"use strict";

import MarkdownNode from "../../node/markdown";

export default class InlineTextMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(InlineTextMarkdownNode, ruleName, childNodes, opacity); }
}
