"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class NameMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(NameMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
