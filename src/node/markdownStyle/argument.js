"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ArgumentMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(ArgumentMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
