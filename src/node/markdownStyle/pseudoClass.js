"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class PseudoClassMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(PseudoClassMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
