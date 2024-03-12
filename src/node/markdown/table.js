"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(TableMarkdownNode, ruleName, childNodes, ambiguous); }
}
