"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class SelectorsMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(SelectorsMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
