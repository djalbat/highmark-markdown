"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ErrorMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(ErrorMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
