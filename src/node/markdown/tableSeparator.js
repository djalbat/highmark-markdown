"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableSeparatorMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(TableSeparatorMarkdownNode, ruleName, childNodes, ambiguous); }
}
