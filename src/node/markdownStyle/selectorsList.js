"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class SelectorsListMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(SelectorsListMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
