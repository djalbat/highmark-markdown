"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableHeadCellMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableHeadCellMarkdownNode, ruleName, childNodes, opacity); }
}
