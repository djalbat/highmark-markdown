"use strict";

import MarkdownNode from "../../node/markdown";

export default class MarkedTextMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(MarkedTextMarkdownNode, ruleName, childNodes, opacity); }
}
