"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class VerbatimMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(VerbatimMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
