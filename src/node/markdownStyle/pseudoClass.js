"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class PseudoClassMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(PseudoClassMarkdownStyleNode, ruleName, childNodes, opacity); }
}
