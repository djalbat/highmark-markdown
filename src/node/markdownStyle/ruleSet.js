"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class RuleSetMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(RuleSetMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
