"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableBodyRowMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(TableBodyRowMarkdownNode, ruleName, childNodes, ambiguous); }
}
