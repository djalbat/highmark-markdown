"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ValueMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(ValueMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
