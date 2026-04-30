"use strict";

import XMLElementMarkdownNode from "../../../node/markdown/xmlElement";

export default class SimpleXMLElementMarkdownNode extends XMLElementMarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return XMLElementMarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(SimpleXMLElementMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
