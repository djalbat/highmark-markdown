"use strict";

import XMLTagMarkdownNode from "../../../node/markdown/xmlTag";

export default class StartXMLTagMarkdownNode extends XMLTagMarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return XMLTagMarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(StartXMLTagMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
