"use strict";

import MarkdownNode from "../../node/markdown";

export default class ParagraphMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ParagraphMarkdownNode, ruleName, childNodes, opacity); }
}
