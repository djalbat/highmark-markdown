"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class StyleMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(StyleMarkdownStyleNode, ruleName, childNodes, opacity); }
}
