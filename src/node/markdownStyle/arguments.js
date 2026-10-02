"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ArgumentsMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(ArgumentsMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
