"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class SelectorMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(SelectorMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
