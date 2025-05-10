"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class IdentifierMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(IdentifierMarkdownStyleNode, ruleName, childNodes, opacity); }
}
