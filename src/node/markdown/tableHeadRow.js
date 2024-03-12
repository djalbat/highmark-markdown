"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableHeadRowMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(TableHeadRowMarkdownNode, ruleName, childNodes, ambiguous); }
}
