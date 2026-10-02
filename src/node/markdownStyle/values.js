"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ValuesMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(ValuesMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
