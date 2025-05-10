"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class DeclarationMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(DeclarationMarkdownStyleNode, ruleName, childNodes, opacity); }
}
