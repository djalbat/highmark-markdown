"use strict";

import MarkdownNode from "../../node/markdown";

export default class StartXMLTagMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(StartXMLTagMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
