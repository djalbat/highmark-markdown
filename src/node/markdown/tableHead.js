"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableHeadMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableHeadMarkdownNode, ruleName, childNodes, opacity); }
}
