"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class RuleSetMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(RuleSetMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
