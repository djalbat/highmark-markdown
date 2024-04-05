"use strict";

import MarkdownNode from "../../node/markdown";

export default class DirectiveMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(DirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
