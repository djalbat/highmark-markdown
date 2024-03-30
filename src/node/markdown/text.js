"use strict";

import MarkdownNode from "../../node/markdown";

export default class TextMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TextMarkdownNode, ruleName, childNodes, opacity); }
}
