"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class SelectorsMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(SelectorsMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
