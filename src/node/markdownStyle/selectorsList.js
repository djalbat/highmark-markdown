"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class SelectorsListMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(SelectorsListMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
