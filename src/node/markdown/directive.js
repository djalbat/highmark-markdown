"use strict";

import MarkdownNode from "../../node/markdown";

export default class DirectiveMarkdownNode extends MarkdownNode {
  static lines = 0;

  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity); }
}
