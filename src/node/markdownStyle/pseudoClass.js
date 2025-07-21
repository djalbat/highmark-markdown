"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class PseudoClassMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(PseudoClassMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
