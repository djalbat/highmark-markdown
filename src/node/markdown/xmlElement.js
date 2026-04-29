"use strict";

import MarkdownNode from "../../node/markdown";

export default class XMLElementMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(XMLElementMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
