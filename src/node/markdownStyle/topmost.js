"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class TopmostMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(TopmostMarkdownStyleNode, ruleName, childNodes, opacity); }
}
