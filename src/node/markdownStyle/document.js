"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class DocumentMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(DocumentMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
