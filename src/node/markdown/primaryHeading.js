"use strict";

import MarkdownNode from "../../node/markdown";

export default class PrimaryHeadingMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(PrimaryHeadingMarkdownNode, ruleName, childNodes, opacity); }
}
