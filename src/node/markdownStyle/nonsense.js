"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class NonsenseMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(NonsenseMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
