"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ArgumentMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(ArgumentMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
