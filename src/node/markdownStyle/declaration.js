"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class DeclarationMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(DeclarationMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
