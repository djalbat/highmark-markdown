"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class NameMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(NameMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
