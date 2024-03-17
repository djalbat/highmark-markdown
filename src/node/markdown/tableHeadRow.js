"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableHeadRowMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableHeadRowMarkdownNode, ruleName, childNodes, opacity); }
}
