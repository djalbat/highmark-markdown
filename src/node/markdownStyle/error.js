"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ErrorMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(ErrorMarkdownStyleNode, ruleName, childNodes, opacity); }
}
