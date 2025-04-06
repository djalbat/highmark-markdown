"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableBodyCellMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableBodyCellMarkdownNode, ruleName, childNodes, opacity); }
}
