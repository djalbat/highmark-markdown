"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ErrorMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(ErrorMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
