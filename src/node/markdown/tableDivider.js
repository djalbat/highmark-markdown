"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableDividerMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableDividerMarkdownNode, ruleName, childNodes, opacity); }
}
