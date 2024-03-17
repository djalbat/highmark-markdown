"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableMarkdownNode, ruleName, childNodes, opacity); }
}
