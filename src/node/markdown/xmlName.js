"use strict";

import MarkdownNode from "../../node/markdown";

export default class XMLNameMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(XMLNameMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
