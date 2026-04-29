"use strict";

import MarkdownNode from "../../node/markdown";

export default class XMLAttributeMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(XMLAttributeMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
