"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableHeadMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(TableHeadMarkdownNode, ruleName, childNodes, ambiguous); }
}
