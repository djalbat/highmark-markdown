"use strict";

import MarkdownNode from "../../node/markdown";

export default class EndXMLTagMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(EndXMLTagMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
