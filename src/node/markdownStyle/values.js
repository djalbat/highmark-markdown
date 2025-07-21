"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ValuesMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(ValuesMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
