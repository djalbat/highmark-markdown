"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class DocumentMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(DocumentMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
