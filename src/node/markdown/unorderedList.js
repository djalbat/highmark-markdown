"use strict";

import MarkdownNode from "../../node/markdown";

export default class UnorderedListMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(UnorderedListMarkdownNode, ruleName, childNodes, opacity); }
}
