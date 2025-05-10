"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ClassMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(ClassMarkdownStyleNode, ruleName, childNodes, opacity); }
}
