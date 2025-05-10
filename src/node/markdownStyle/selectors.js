"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class SelectorsMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(SelectorsMarkdownStyleNode, ruleName, childNodes, opacity); }
}
