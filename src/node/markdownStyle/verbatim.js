"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class VerbatimMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(VerbatimMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
