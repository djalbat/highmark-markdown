"use strict";

import MarkdownNode from "../../node/markdown";

export default class SimpleXMLElementMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(SimpleXMLElementMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
