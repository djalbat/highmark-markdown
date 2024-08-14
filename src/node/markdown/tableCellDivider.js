"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableCellDividerMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableCellDividerMarkdownNode, ruleName, childNodes, opacity); }
}
