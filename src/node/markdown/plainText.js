"use strict";

import MarkdownNode from "../../node/markdown";

export default class PlainTextMarkdownNode extends MarkdownNode {
  isPlainTextMarkdownNode() {
    const plainTextMarkdownNode = true;

    return plainTextMarkdownNode;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(PlainTextMarkdownNode, ruleName, childNodes, opacity); }
}
