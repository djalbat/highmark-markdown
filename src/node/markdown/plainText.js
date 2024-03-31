"use strict";

import MarkdownNode from "../../node/markdown";

export default class PlainTextMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(PlainTextMarkdownNode, ruleName, childNodes, opacity); }
}
