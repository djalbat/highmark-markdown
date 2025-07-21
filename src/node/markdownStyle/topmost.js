"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class TopmostMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(TopmostMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
