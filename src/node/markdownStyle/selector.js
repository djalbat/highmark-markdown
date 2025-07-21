"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class SelectorMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(SelectorMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
