"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ArgumentMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(ArgumentMarkdownStyleNode, ruleName, childNodes, opacity); }
}
