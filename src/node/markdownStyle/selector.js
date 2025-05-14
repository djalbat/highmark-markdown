"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class SelectorMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(SelectorMarkdownStyleNode, ruleName, childNodes, opacity); }
}
