"use strict";

import MarkdownNode from "../../node/markdown";

export default class CompleteXMLTagMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(CompleteXMLTagMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
