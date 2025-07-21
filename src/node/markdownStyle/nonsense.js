"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class NonsenseMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(NonsenseMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
