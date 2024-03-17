"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableBodyRowMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableBodyRowMarkdownNode, ruleName, childNodes, opacity); }
}
