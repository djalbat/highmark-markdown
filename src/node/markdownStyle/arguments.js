"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ArgumentsMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(ArgumentsMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
