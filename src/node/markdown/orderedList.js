"use strict";

import MarkdownNode from "../../node/markdown";

export default class OrderedListMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(OrderedListMarkdownNode, ruleName, childNodes, opacity); }
}
