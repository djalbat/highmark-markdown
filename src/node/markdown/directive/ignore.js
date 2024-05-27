"use strict";

import MarkdownNode from "../../../node/markdown";

export default class IgnoreDirectiveMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(IgnoreDirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
