"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class SelectorsListMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(SelectorsListMarkdownStyleNode, ruleName, childNodes, opacity); }
}
