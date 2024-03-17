"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableSeparatorMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableSeparatorMarkdownNode, ruleName, childNodes, opacity); }
}
