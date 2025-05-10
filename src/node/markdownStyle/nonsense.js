"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class NonsenseMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(NonsenseMarkdownStyleNode, ruleName, childNodes, opacity); }
}
