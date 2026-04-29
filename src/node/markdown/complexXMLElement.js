"use strict";

import MarkdownNode from "../../node/markdown";

export default class ComplexXMLElementMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(ComplexXMLElementMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
