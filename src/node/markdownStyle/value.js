"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ValueMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(ValueMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
