"use strict";

import MarkdownNode from "../../node/markdown";

export default class IgnoreMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(IgnoreMarkdownNode, ruleName, childNodes, opacity); }
}
