"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class RuleSetMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(RuleSetMarkdownStyleNode, ruleName, childNodes, opacity); }
}
