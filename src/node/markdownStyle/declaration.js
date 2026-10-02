"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class DeclarationMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(DeclarationMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
