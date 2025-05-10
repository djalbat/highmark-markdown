"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class NameMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(NameMarkdownStyleNode, ruleName, childNodes, opacity); }
}
