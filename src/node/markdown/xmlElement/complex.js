"use strict";

import XMLElementMarkdownNode from "../../../node/markdown/xmlElement";

export default class ComplexXMLElementMarkdownNode extends XMLElementMarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return XMLElementMarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(ComplexXMLElementMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
