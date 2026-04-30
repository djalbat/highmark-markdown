"use strict";

import XMLTagMarkdownNode from "../../../node/markdown/xmlTag";

export default class CompleteXMLTagMarkdownNode extends XMLTagMarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return XMLTagMarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(CompleteXMLTagMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
