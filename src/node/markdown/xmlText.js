"use strict";

import MarkdownNode from "../../node/markdown";

export default class XMLTextMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(XMLTextMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
