"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ValueMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(ValueMarkdownStyleNode, ruleName, childNodes, opacity); }
}
