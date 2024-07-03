"use strict";

import MarkdownNode from "../../node/markdown";

export default class NonsenseMarkdownNode extends MarkdownNode {
  static lines = 0;

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(NonsenseMarkdownNode, ruleName, childNodes, opacity); }
}
