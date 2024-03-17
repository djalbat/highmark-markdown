"use strict";

import MarkdownNode from "../../node/markdown";

export default class UnorderedListItemMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(UnorderedListItemMarkdownNode, ruleName, childNodes, opacity); }
}
