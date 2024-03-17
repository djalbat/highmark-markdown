"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableBodyMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableBodyMarkdownNode, ruleName, childNodes, opacity); }
}
