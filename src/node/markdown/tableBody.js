"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableBodyMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(TableBodyMarkdownNode, ruleName, childNodes, ambiguous); }
}
