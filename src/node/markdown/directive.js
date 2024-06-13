"use strict";

import MarkdownNode from "../../node/markdown";

export default class DirectiveMarkdownNode extends MarkdownNode {
  lines(context) {
    const lines = 0;

    return lines;
  }

  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity); }
}
