"use strict";

import MarkdownNode from "../../node/markdown";

export default class ParagraphMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(ParagraphMarkdownNode, ruleName, childNodes, ambiguous); }
}
